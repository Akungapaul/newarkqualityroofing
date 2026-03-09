import Link from 'next/link';
import type { Article } from '@/data/articles';
import type { ArticleContent } from '@/data/article-content/schema';
import { getArticleLinks } from '@/data/linking/link-engine';
import { ArticleHero } from '@/components/sections/ArticleHero';
import { ArticleBody } from '@/components/sections/ArticleBody';
import { ArticleCta } from '@/components/sections/ArticleCta';
import { ArticleNav } from '@/components/sections/ArticleNav';

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
}: {
  article: Article;
  moneyPageName: string;
  moneyPageSlug: string;
}) {
  return (
    <>
      <ArticleHero
        article={article}
        moneyPageName={moneyPageName}
        moneyPageSlug={moneyPageSlug}
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

  // Graceful fallback when content doesn't exist yet
  if (!content) {
    return (
      <ArticlePlaceholder
        article={article}
        moneyPageName={links.moneyPage.name}
        moneyPageSlug={links.moneyPage.slug}
      />
    );
  }

  const wordCount = countWords(content);

  return (
    <>
      <ArticleHero
        article={article}
        moneyPageName={links.moneyPage.name}
        moneyPageSlug={links.moneyPage.slug}
        wordCount={wordCount}
      />

      <article className="mx-auto max-w-3xl px-6 py-12 lg:px-8">
        <ArticleBody
          intro={content.intro}
          sections={content.sections}
          conclusion={content.conclusion}
        />

        <ArticleCta
          heading={content.ctaHeading}
          text={content.ctaText}
          moneyPageName={links.moneyPage.name}
          moneyPageSlug={links.moneyPage.slug}
        />

        <ArticleNav
          nextArticle={links.nextArticle}
          prevArticle={links.prevArticle}
          moneyPage={links.moneyPage}
        />
      </article>
    </>
  );
}
