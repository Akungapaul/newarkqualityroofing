import Link from 'next/link';
import type { Article } from '@/data/articles';
import type { ArticleContent } from '@/data/article-content/schema';
import { getArticleLinks } from '@/data/linking/link-engine';
import { ArticleHero } from '@/components/sections/ArticleHero';
import { ArticleBody } from '@/components/sections/ArticleBody';
import { ArticleCta } from '@/components/sections/ArticleCta';
import { ArticleNav } from '@/components/sections/ArticleNav';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  buildArticleSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
  buildJsonLdGraph,
} from '@/lib/schema';
import { SEO_CONFIG } from '@/lib/seo-config';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getServiceHeroImage, getContentPoolImages } from '@/data/image-manifest';

// ─── Types ──────────────────────────────────────────────────────────────────

interface ArticleTemplateProps {
  article: Article;
}

// ─── Content loader with graceful fallback ──────────────────────────────────

function loadArticleContent(articleId: string): ArticleContent | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const mod = require('@/data/article-content');
    if (typeof mod.getArticleContent === 'function') {
      return mod.getArticleContent(articleId);
    }
    return null;
  } catch {
    return null;
  }
}

// ─── Word count helper ──────────────────────────────────────────────────────

function countWords(content: ArticleContent): number {
  let words = content.intro.split(/\s+/).length;
  for (const section of content.sections) {
    words += section.heading.split(/\s+/).length;
    for (const paragraph of section.body) {
      words += paragraph.split(/\s+/).length;
    }
  }
  words += content.conclusion.split(/\s+/).length;
  return words;
}

// ─── Placeholder fallback ───────────────────────────────────────────────────

function ArticlePlaceholder({
  article,
  moneyPageName,
  moneyPageSlug,
  heroImage,
}: {
  article: Article;
  moneyPageName: string;
  moneyPageSlug: string;
  heroImage?: { src: string; alt: string };
}) {
  return (
    <>
      <ArticleHero
        article={article}
        moneyPageName={moneyPageName}
        moneyPageSlug={moneyPageSlug}
        heroImage={heroImage}
      />
      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <div className="rounded-lg border border-border bg-parchment-light p-8 text-center">
          <p className="font-heading text-xl font-semibold text-forest">
            Content Coming Soon
          </p>
          <p className="mt-3 font-body text-base text-text-secondary">
            This article is being prepared. In the meantime, visit our main
            service page for more information.
          </p>
          <Link
            href={moneyPageSlug}
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-forest px-5 py-3 font-body text-sm font-semibold text-text-on-dark transition-colors hover:bg-forest-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to {moneyPageName}
          </Link>
        </div>
      </article>
    </>
  );
}

// ─── Template Component ─────────────────────────────────────────────────────

export default function ArticleTemplate({ article }: ArticleTemplateProps) {
  const links = getArticleLinks(article.id);
  const content = loadArticleContent(article.id);

  // ─── Hero image lookup ───────────────────────────────────────────────
  const heroEntry =
    article.parentType === 'service'
      ? getServiceHeroImage(article.parentId)
      : undefined;
  const heroImage = heroEntry
    ? { src: heroEntry.path, alt: heroEntry.alt }
    : (() => {
        const fallback = getContentPoolImages('consultation')[0];
        return fallback ? { src: fallback.path, alt: fallback.alt } : undefined;
      })();

  // ─── Section image for ArticleBody ───────────────────────────────────
  const poolCategories = ['crew', 'materials', 'consultation', 'seasonal'] as const;
  const poolCategory = poolCategories[article.slug.length % 4];
  const sectionEntry = getContentPoolImages(poolCategory)[0];
  const sectionImage = sectionEntry
    ? { src: sectionEntry.path, alt: sectionEntry.alt }
    : undefined;

  // Graceful fallback when content doesn't exist yet
  if (!content) {
    return (
      <ArticlePlaceholder
        article={article}
        moneyPageName={links.moneyPage.name}
        moneyPageSlug={links.moneyPage.slug}
        heroImage={heroImage}
      />
    );
  }

  const wordCount = countWords(content);

  return (
    <>
      <JsonLd data={buildJsonLdGraph(
        buildArticleSchema({ title: article.metaTitle, slug: article.slug, description: article.metaDescription }),
        buildWebPageSchema(`${SEO_CONFIG.BASE_URL}/${article.slug}`, article.metaTitle),
        buildBreadcrumbSchema([
          { name: 'Home', url: SEO_CONFIG.BASE_URL },
          { name: links.moneyPage.name, url: `${SEO_CONFIG.BASE_URL}/${links.moneyPage.slug}` },
          { name: article.metaTitle },
        ]),
      )} />

      <ArticleHero
        article={article}
        moneyPageName={links.moneyPage.name}
        moneyPageSlug={links.moneyPage.slug}
        wordCount={wordCount}
        heroImage={heroImage}
      />

      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <AnimateIn>
          <ArticleBody
            intro={content.intro}
            sections={content.sections}
            conclusion={content.conclusion}
            sectionImage={sectionImage}
          />
        </AnimateIn>

        <AnimateIn>
          <ArticleCta
            heading={content.ctaHeading}
            text={content.ctaText}
            moneyPageName={links.moneyPage.name}
            moneyPageSlug={links.moneyPage.slug}
          />
        </AnimateIn>

        <AnimateIn>
          <ArticleNav
            nextArticle={links.nextArticle}
            prevArticle={links.prevArticle}
            moneyPage={links.moneyPage}
          />
        </AnimateIn>
      </article>
    </>
  );
}
