import Link from 'next/link';
import type { Article } from '@/data/articles';

// ─── ServiceLearnMore ───────────────────────────────────────────────────────
// Reverse silo link from a service/comparison money page to its supporting KB
// articles. Renders one editorial card per article after the FAQ section.
//
// Backward-compatible API: accepts EITHER a single `article` (legacy callers)
// OR an `articles` array (preferred — surfaces ALL sibling cluster articles, not
// just position-1). When both are absent/empty, renders nothing.

interface ServiceLearnMoreProps {
  heading: string;
  /** Preferred: the full set of supporting articles (sorted by position). */
  articles?: Article[];
  /** Legacy single-article prop. Used only when `articles` is not provided. */
  article?: Article;
  serviceName: string;
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/${article.slug}`}
      className="group block rounded-sm border-l-4 border-copper bg-parchment p-6 transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <p className="font-heading text-lg font-semibold text-forest group-hover:text-copper transition-colors">
        {article.title}
      </p>
      <p className="mt-2 font-body text-sm text-text-secondary line-clamp-2">
        {article.metaDescription}
      </p>
      <span className="mt-3 inline-block font-body text-sm font-medium text-copper group-hover:underline">
        Continue reading&hellip;
      </span>
    </Link>
  );
}

export function ServiceLearnMore({ heading, articles, article }: ServiceLearnMoreProps) {
  // Resolve to a single source of truth: prefer the plural array, fall back to
  // the legacy single article, else nothing.
  const list = articles && articles.length > 0
    ? articles
    : article
      ? [article]
      : [];

  if (list.length === 0) return null;

  return (
    <section
      className="mt-12"
      aria-labelledby="learn-more-heading"
    >
      <h2
        id="learn-more-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {list.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </section>
  );
}
