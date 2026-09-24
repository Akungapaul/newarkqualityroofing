import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SEO_CONFIG } from '@/lib/seo-config';
import { KB_CLUSTERS, getKbCluster } from '@/data/kb-clusters';
import { articles, type Article } from '@/data/articles';
import { services } from '@/data/services';
import { comparisons } from '@/data/comparisons';
import { generateServicePageSlug } from '@/lib/slug-utils';

// ─── Roofing Knowledge Base ──────────────────────────────────────────────────
//
// An INDEXABLE two-tier index of the 252 real articles:
//   /roofing-knowledge-base                 -> the 6 clusters
//   /roofing-knowledge-base/{cluster}       -> that cluster's articles, grouped
//                                              by the money page they belong to
//
// The articles themselves live at flat root slugs (/{article.slug}, rendered by
// src/app/[slug]/page.tsx) and are the canonical, indexable, sitemapped URLs.
// This route only INDEXES them — it never duplicates their content.
//
// History: this was a Phase-11 scaffold — 51 noindexed pages, of which 44 were
// nested "articles" whose slugs matched none of the 252 real ones. Those are
// removed. Grouping uses Article.cluster, a zod-validated enum already assigned
// to all 252 articles.

const KB_BASE = '/roofing-knowledge-base';

// ─── Grouping ────────────────────────────────────────────────────────────────

const ARTICLES_BY_CLUSTER = new Map<string, Article[]>(
  KB_CLUSTERS.map((c) => [c.slug, articles.filter((a) => a.cluster === c.slug)]),
);

const SERVICE_BY_ID = new Map(services.map((s) => [s.id, s]));
const COMPARISON_BY_ID = new Map(comparisons.map((c) => [c.id, c]));

/** A cluster's articles, grouped under the money page each one supports. */
interface ParentGroup {
  label: string;
  /** Undefined for the `core` parent, which has no single money page. */
  href?: string;
  articles: Article[];
}

function groupByParent(clusterArticles: Article[]): ParentGroup[] {
  const groups = new Map<string, ParentGroup>();

  for (const article of clusterArticles) {
    let group = groups.get(article.parentId);
    if (!group) {
      group = { ...resolveParent(article), articles: [] };
      groups.set(article.parentId, group);
    }
    group.articles.push(article);
  }

  for (const group of groups.values()) {
    group.articles.sort((a, b) => a.position - b.position);
  }

  return [...groups.values()].sort((a, b) => a.label.localeCompare(b.label));
}

function resolveParent(article: Article): { label: string; href?: string } {
  if (article.parentType === 'service') {
    const service = SERVICE_BY_ID.get(article.parentId);
    return service
      ? { label: service.name, href: `/${generateServicePageSlug(service.slug)}` }
      : { label: article.parentId };
  }
  if (article.parentType === 'comparison') {
    const comparison = COMPARISON_BY_ID.get(article.parentId);
    return comparison ? { label: comparison.name, href: `/${comparison.slug}` } : { label: article.parentId };
  }
  // parentType 'core' — the three homepage-parented general guides.
  return { label: 'General Roofing Guidance' };
}

// ─── SSG: hub + 6 cluster hubs = 7 paths ─────────────────────────────────────

export async function generateStaticParams() {
  return [
    // KB hub index — bare /roofing-knowledge-base (optional segment empty).
    { slug: [] as string[] },
    // 6 cluster hubs — /roofing-knowledge-base/{cluster}
    ...KB_CLUSTERS.map((c) => ({ slug: [c.slug] })),
  ];
}

// Anything not enumerated above 404s (no dynamic fallback). This is what
// retires the 44 removed scaffold article paths.
export const dynamicParams = false;

// ─── Metadata ────────────────────────────────────────────────────────────────
//
// Indexable and self-canonical at every level. The canonical is always the
// page's own path; the articles it links canonical to their own flat slugs.

function buildOG(title: string, description: string, path: string) {
  return {
    title,
    description,
    url: path,
    siteName: SEO_CONFIG.SITE_NAME,
    type: 'website' as const,
    images: [
      { url: SEO_CONFIG.OG_IMAGE.url, width: SEO_CONFIG.OG_IMAGE.width, height: SEO_CONFIG.OG_IMAGE.height },
    ],
  };
}

const INDEXABLE = { index: true, follow: true } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segments = slug ?? [];

  // KB hub index
  if (segments.length === 0) {
    const title = 'Roofing Knowledge Base for Newark and Essex County, NJ'; // = the H1
    const description =
      'Roofing guides for Newark and Essex County property owners, covering roof problems, components, materials, process, and costs.';
    return {
      title,
      description,
      alternates: { canonical: KB_BASE },
      robots: INDEXABLE,
      openGraph: buildOG(title, description, KB_BASE),
    };
  }

  // Cluster hub
  if (segments.length === 1) {
    const cluster = getKbCluster(segments[0]);
    if (!cluster) return {};
    const path = `${KB_BASE}/${segments[0]}`;
    const title = cluster.title; // = the H1
    return {
      title,
      description: cluster.description.slice(0, 158),
      alternates: { canonical: path },
      robots: INDEXABLE,
      openGraph: buildOG(title, cluster.description, path),
    };
  }

  return {};
}

// ─── UI ──────────────────────────────────────────────────────────────────────

function KbShell({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children?: React.ReactNode;
}) {
  // A plain <div>, not <main> — app/layout.tsx already provides the <main>
  // landmark, and nesting a second one breaks landmark navigation.
  return (
    <div className="min-h-screen bg-parchment px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <nav aria-label="Breadcrumb" className="font-body text-sm text-text-secondary">
          <Link href={KB_BASE} className="text-copper hover:text-copper-dark">
            Roofing Knowledge Base
          </Link>
        </nav>
        <span className="mt-4 inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
          {eyebrow}
        </span>
        <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">{heading}</h1>
        {children}
      </div>
    </div>
  );
}

export default async function KnowledgeBasePage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;
  const segments = slug ?? [];

  // ── KB hub index — the 6 clusters ──
  if (segments.length === 0) {
    return (
      <KbShell
        eyebrow="Knowledge Base"
        heading="Roofing Knowledge Base for Newark and Essex County, NJ"
      >
        <p className="mt-6 font-body text-lg leading-relaxed text-text-secondary">
          This roofing knowledge base answers {articles.length} roofing questions for Newark
          and Essex County property owners, organized into {KB_CLUSTERS.length} sections. Each section
          covers a distinct part of a roof&apos;s life: the problems that appear, the components
          that fail, the materials available, the work itself, and what it costs in New Jersey.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {KB_CLUSTERS.map((cluster) => {
            const count = ARTICLES_BY_CLUSTER.get(cluster.slug)?.length ?? 0;
            return (
              <li key={cluster.slug}>
                <Link
                  href={`${KB_BASE}/${cluster.slug}`}
                  className="group block h-full rounded-lg border border-border bg-white p-5 transition-colors hover:border-copper"
                >
                  <span className="block font-heading text-lg font-semibold text-forest group-hover:text-copper">
                    {cluster.title}
                  </span>
                  <span className="mt-1 block font-body text-xs uppercase tracking-wider text-text-secondary">
                    {count} {count === 1 ? 'guide' : 'guides'}
                  </span>
                  <span className="mt-2 block font-body text-sm leading-relaxed text-text-secondary">
                    {cluster.description}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-8 font-body text-base text-text-secondary">
          Unsure what a roofing term means? The{' '}
          <Link href="/roofing-glossary" className="text-copper underline underline-offset-2 hover:text-copper-dark">
            roofing glossary for NJ homeowners
          </Link>{' '}
          defines the terms used across these guides.
        </p>
      </KbShell>
    );
  }

  // ── Cluster hub — its articles, grouped by the money page they support ──
  if (segments.length === 1) {
    const cluster = getKbCluster(segments[0]);
    if (!cluster) notFound();

    const clusterArticles = ARTICLES_BY_CLUSTER.get(cluster.slug) ?? [];
    const groups = groupByParent(clusterArticles);

    return (
      <KbShell eyebrow="Knowledge Base" heading={cluster.title}>
        <p className="mt-6 font-body text-lg leading-relaxed text-text-secondary">
          {cluster.description}
        </p>
        <p className="mt-3 font-body text-sm text-text-secondary">
          {clusterArticles.length} {clusterArticles.length === 1 ? 'guide' : 'guides'} across{' '}
          {groups.length} {groups.length === 1 ? 'topic' : 'topics'}.
        </p>

        <div className="mt-10 space-y-8">
          {groups.map((group) => (
            <section key={group.label} className="border-t border-border pt-5">
              <p className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
                {group.href ? (
                  <Link href={group.href} className="text-forest hover:text-copper">
                    {group.label}
                  </Link>
                ) : (
                  group.label
                )}
              </p>
              <ul className="mt-3 space-y-2">
                {group.articles.map((article) => (
                  <li key={article.id}>
                    <Link
                      href={`/${article.slug}`}
                      className="font-body text-base text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <Link href={KB_BASE} className="font-heading text-base font-semibold text-copper hover:text-copper-dark">
            &larr; All knowledge base sections
          </Link>
        </div>
      </KbShell>
    );
  }

  notFound();
}
