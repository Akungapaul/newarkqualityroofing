import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SEO_CONFIG } from '@/lib/seo-config';

// ─── KB Topical-Map Enumeration (D-10 / D-14) ────────────────────────────────
//
// The Knowledge Base is the ONLY nested-URL area on the site
// (/roofing-knowledge-base/{cluster}/{slug}). These paths are owned by THIS
// route's own enumeration and are deliberately NOT in the flat slug-registry
// (so validate-flat-urls.ts never sees a '/'-containing slug). Authored content
// lands in Phase 13 — Phase 11 makes every path RESOLVE as a noindexed scaffold.

/** The 6 article clusters (D-14 taxonomy). */
const CLUSTERS = [
  { slug: 'roof-problems', title: 'Roof Problems' },
  { slug: 'roof-components', title: 'Roof Components' },
  { slug: 'roofing-materials', title: 'Roofing Materials' },
  { slug: 'roofing-process', title: 'Roofing Process' },
  { slug: 'roofing-costs', title: 'Roofing Costs' },
  { slug: 'local-roofing-knowledge', title: 'Local Roofing Knowledge' },
] as const;

const CLUSTER_TITLES = new Map<string, string>(CLUSTERS.map((c) => [c.slug, c.title]));

/**
 * The 44 NEW nested KB articles (BRIEF §16): 8 + 11 + 9 + 8 + 8 across 5 clusters.
 * `local-roofing-knowledge` has 0 NEW authored articles in Phase 11/13 — its
 * cluster hub still resolves as a scaffold. The `title` is a human-readable
 * scaffold heading; Phase 13 replaces these with authored content.
 */
const KB_ARTICLES: ReadonlyArray<{ cluster: string; slug: string; title: string }> = [
  // roof-problems (8)
  { cluster: 'roof-problems', slug: 'what-causes-roof-leaks', title: 'What Causes Roof Leaks?' },
  { cluster: 'roof-problems', slug: 'signs-of-hail-damage-roof', title: 'Signs of Hail Damage on a Roof' },
  { cluster: 'roof-problems', slug: 'why-are-shingles-missing', title: 'Why Are Shingles Missing?' },
  { cluster: 'roof-problems', slug: 'roof-leak-around-chimney', title: 'Roof Leak Around the Chimney' },
  { cluster: 'roof-problems', slug: 'roof-leak-around-skylight', title: 'Roof Leak Around a Skylight' },
  { cluster: 'roof-problems', slug: 'ponding-water-flat-roof', title: 'Ponding Water on a Flat Roof' },
  { cluster: 'roof-problems', slug: 'what-does-granule-loss-mean', title: 'What Does Granule Loss Mean?' },
  { cluster: 'roof-problems', slug: 'when-is-a-sagging-roof-serious', title: 'When Is a Sagging Roof Serious?' },
  // roof-components (11)
  { cluster: 'roof-components', slug: 'what-is-roof-flashing', title: 'What Is Roof Flashing?' },
  { cluster: 'roof-components', slug: 'what-is-step-flashing', title: 'What Is Step Flashing?' },
  { cluster: 'roof-components', slug: 'what-is-chimney-flashing', title: 'What Is Chimney Flashing?' },
  { cluster: 'roof-components', slug: 'what-is-roof-underlayment', title: 'What Is Roof Underlayment?' },
  { cluster: 'roof-components', slug: 'what-is-ice-and-water-shield', title: 'What Is Ice and Water Shield?' },
  { cluster: 'roof-components', slug: 'what-is-roof-decking', title: 'What Is Roof Decking?' },
  { cluster: 'roof-components', slug: 'what-is-drip-edge', title: 'What Is Drip Edge?' },
  { cluster: 'roof-components', slug: 'what-is-a-pipe-boot', title: 'What Is a Pipe Boot?' },
  { cluster: 'roof-components', slug: 'what-is-a-roof-valley', title: 'What Is a Roof Valley?' },
  { cluster: 'roof-components', slug: 'what-is-a-ridge-vent', title: 'What Is a Ridge Vent?' },
  { cluster: 'roof-components', slug: 'what-are-soffit-vents', title: 'What Are Soffit Vents?' },
  // roofing-materials (9)
  { cluster: 'roofing-materials', slug: 'what-are-asphalt-shingles', title: 'What Are Asphalt Shingles?' },
  { cluster: 'roofing-materials', slug: 'what-are-architectural-shingles', title: 'What Are Architectural Shingles?' },
  { cluster: 'roofing-materials', slug: 'is-metal-roofing-worth-it', title: 'Is Metal Roofing Worth It?' },
  { cluster: 'roofing-materials', slug: 'what-is-tpo-roofing', title: 'What Is TPO Roofing?' },
  { cluster: 'roofing-materials', slug: 'what-is-epdm-roofing', title: 'What Is EPDM Roofing?' },
  { cluster: 'roofing-materials', slug: 'what-is-pvc-roofing', title: 'What Is PVC Roofing?' },
  { cluster: 'roofing-materials', slug: 'what-is-modified-bitumen-roofing', title: 'What Is Modified Bitumen Roofing?' },
  { cluster: 'roofing-materials', slug: 'what-are-roof-coatings', title: 'What Are Roof Coatings?' },
  { cluster: 'roofing-materials', slug: 'best-roofing-material-for-new-jersey-weather', title: 'Best Roofing Material for New Jersey Weather' },
  // roofing-process (8)
  { cluster: 'roofing-process', slug: 'what-happens-during-roof-inspection', title: 'What Happens During a Roof Inspection?' },
  { cluster: 'roofing-process', slug: 'what-is-included-in-roofing-estimate', title: 'What Is Included in a Roofing Estimate?' },
  { cluster: 'roofing-process', slug: 'what-happens-during-roof-replacement', title: 'What Happens During Roof Replacement?' },
  { cluster: 'roofing-process', slug: 'what-is-a-roof-tear-off', title: 'What Is a Roof Tear-Off?' },
  { cluster: 'roofing-process', slug: 'how-do-roofers-inspect-decking', title: 'How Do Roofers Inspect Decking?' },
  { cluster: 'roofing-process', slug: 'how-do-roofing-contractors-repair-leaks', title: 'How Do Roofing Contractors Repair Leaks?' },
  { cluster: 'roofing-process', slug: 'how-does-emergency-roof-tarping-work', title: 'How Does Emergency Roof Tarping Work?' },
  { cluster: 'roofing-process', slug: 'what-happens-during-final-roof-walkthrough', title: 'What Happens During the Final Roof Walkthrough?' },
  // roofing-costs (8)
  { cluster: 'roofing-costs', slug: 'how-much-does-roof-repair-cost', title: 'How Much Does Roof Repair Cost?' },
  { cluster: 'roofing-costs', slug: 'how-much-does-roof-replacement-cost', title: 'How Much Does Roof Replacement Cost?' },
  { cluster: 'roofing-costs', slug: 'what-affects-new-roof-cost', title: 'What Affects New Roof Cost?' },
  { cluster: 'roofing-costs', slug: 'how-does-roof-size-affect-cost', title: 'How Does Roof Size Affect Cost?' },
  { cluster: 'roofing-costs', slug: 'how-does-roof-pitch-affect-cost', title: 'How Does Roof Pitch Affect Cost?' },
  { cluster: 'roofing-costs', slug: 'how-do-roofing-materials-affect-price', title: 'How Do Roofing Materials Affect Price?' },
  { cluster: 'roofing-costs', slug: 'how-much-does-emergency-roof-repair-cost', title: 'How Much Does Emergency Roof Repair Cost?' },
  { cluster: 'roofing-costs', slug: 'how-much-does-commercial-roof-repair-cost', title: 'How Much Does Commercial Roof Repair Cost?' },
];

const ARTICLE_LOOKUP = new Map<string, { cluster: string; slug: string; title: string }>(
  KB_ARTICLES.map((a) => [`${a.cluster}/${a.slug}`, a])
);

const ARTICLES_BY_CLUSTER = new Map<string, ReadonlyArray<{ cluster: string; slug: string; title: string }>>(
  CLUSTERS.map((c) => [c.slug, KB_ARTICLES.filter((a) => a.cluster === c.slug)])
);

const KB_BASE = '/roofing-knowledge-base';

// ─── SSG: enumerate hub + 6 cluster hubs + 44 nested articles = 51 paths ──────

export async function generateStaticParams() {
  return [
    // KB hub index — bare /roofing-knowledge-base (optional segment empty).
    { slug: [] as string[] },
    // 6 cluster hubs — /roofing-knowledge-base/{cluster}
    ...CLUSTERS.map((c) => ({ slug: [c.slug] })),
    // 44 nested articles — /roofing-knowledge-base/{cluster}/{slug}
    ...KB_ARTICLES.map((a) => ({ slug: [a.cluster, a.slug] })),
  ];
}

// Anything not enumerated above 404s (no dynamic fallback).
export const dynamicParams = false;

// ─── Metadata ────────────────────────────────────────────────────────────────
//
// Every branch is a Phase-11 scaffold: full metadata + self-canonical +
// robots:{index:false,follow:true} (content lands Phase 13). The canonical is
// always the page's OWN nested path.

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

const SCAFFOLD_ROBOTS = { index: false, follow: true } as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const segments = slug ?? [];

  // KB hub index
  if (segments.length === 0) {
    const title = 'Roofing Knowledge Base | Newark Quality Roofing';
    const description =
      'A roofing knowledge base covering roof problems, components, materials, process, costs, and local Newark roofing conditions.';
    return {
      title,
      description,
      alternates: { canonical: KB_BASE },
      robots: SCAFFOLD_ROBOTS,
      openGraph: buildOG(title, description, KB_BASE),
    };
  }

  // Cluster hub
  if (segments.length === 1) {
    const clusterTitle = CLUSTER_TITLES.get(segments[0]);
    if (!clusterTitle) return {};
    const path = `${KB_BASE}/${segments[0]}`;
    const title = `${clusterTitle} | Roofing Knowledge Base`;
    const description = `${clusterTitle} explained — part of the Newark Quality Roofing knowledge base for homeowners and property owners.`;
    return {
      title,
      description,
      alternates: { canonical: path },
      robots: SCAFFOLD_ROBOTS,
      openGraph: buildOG(title, description, path),
    };
  }

  // Nested article
  if (segments.length === 2) {
    const article = ARTICLE_LOOKUP.get(`${segments[0]}/${segments[1]}`);
    if (!article) return {};
    const path = `${KB_BASE}/${segments[0]}/${segments[1]}`;
    const title = `${article.title} | Roofing Knowledge Base`;
    const description = `${article.title} — a roofing knowledge base article from Newark Quality Roofing.`;
    return {
      title,
      description,
      alternates: { canonical: path },
      robots: SCAFFOLD_ROBOTS,
      openGraph: buildOG(title, description, path),
    };
  }

  return {};
}

// ─── Scaffold UI ──────────────────────────────────────────────────────────────

function ScaffoldShell({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-parchment px-6 py-16">
      <main className="mx-auto max-w-3xl">
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
      </main>
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

  // KB hub index — links to the 6 cluster hubs.
  if (segments.length === 0) {
    return (
      <ScaffoldShell
        eyebrow="Knowledge Base"
        heading="What Should Homeowners and Property Owners Know About Roofing?"
      >
        <p className="mt-6 font-body text-lg text-text-secondary">
          Explore roofing topics by category. Each section covers the questions Newark and
          Essex County property owners ask most.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {CLUSTERS.map((c) => (
            <li key={c.slug}>
              <Link
                href={`${KB_BASE}/${c.slug}`}
                className="block rounded-sm border border-border bg-white p-4 font-heading text-lg font-semibold text-forest transition-colors hover:border-copper hover:text-copper-dark"
              >
                {c.title}
              </Link>
            </li>
          ))}
        </ul>
      </ScaffoldShell>
    );
  }

  // Cluster hub — links to its nested articles (if any).
  if (segments.length === 1) {
    const clusterTitle = CLUSTER_TITLES.get(segments[0]);
    if (!clusterTitle) notFound();
    const clusterArticles = ARTICLES_BY_CLUSTER.get(segments[0]) ?? [];
    return (
      <ScaffoldShell eyebrow="Knowledge Base" heading={clusterTitle}>
        <p className="mt-6 font-body text-lg text-text-secondary">
          {clusterTitle} topics from the Newark Quality Roofing knowledge base.
        </p>
        {clusterArticles.length > 0 && (
          <ul className="mt-8 space-y-3">
            {clusterArticles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`${KB_BASE}/${a.cluster}/${a.slug}`}
                  className="font-heading text-lg font-semibold text-copper hover:text-copper-dark"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </ScaffoldShell>
    );
  }

  // Nested article.
  if (segments.length === 2) {
    const article = ARTICLE_LOOKUP.get(`${segments[0]}/${segments[1]}`);
    if (!article) notFound();
    const clusterTitle = CLUSTER_TITLES.get(article.cluster) ?? article.cluster;
    return (
      <ScaffoldShell eyebrow={clusterTitle} heading={article.title}>
        <p className="mt-6 font-body text-lg text-text-secondary">
          This roofing knowledge base article is part of the {clusterTitle} section.
        </p>
        <div className="mt-8">
          <Link
            href={`${KB_BASE}/${article.cluster}`}
            className="font-heading text-base font-semibold text-copper hover:text-copper-dark"
          >
            &larr; Back to {clusterTitle}
          </Link>
        </div>
      </ScaffoldShell>
    );
  }

  notFound();
}
