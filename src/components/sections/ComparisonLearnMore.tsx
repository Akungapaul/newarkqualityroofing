import Link from 'next/link';
import type { Article } from '@/data/articles';

// ─── ComparisonLearnMore ────────────────────────────────────────────────────
// Reverse silo link from comparison money page to position-1 supporting article.
// Renders a single editorial card after FAQ section.
// Gracefully renders nothing when called with null article.

interface ComparisonLearnMoreProps {
  article: Article;
  comparisonName: string;
}

export function ComparisonLearnMore({ article, comparisonName }: ComparisonLearnMoreProps) {
  return (
    <section
      className="mt-12"
      aria-labelledby="related-reading-heading"
    >
      <h2
        id="related-reading-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Related Reading
      </h2>

      <Link
        href={`/${article.slug}`}
        className="group mt-6 block rounded-sm border-l-4 border-copper bg-parchment p-6 transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:outline-none"
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
    </section>
  );
}
