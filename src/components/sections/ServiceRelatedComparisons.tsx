import Link from 'next/link';
import type { Comparison } from '@/lib/types';

// ─── ServiceRelatedComparisons ──────────────────────────────────────────────
// Contextual comparison cards shown on service pages when relevant
// comparisons exist. Renders nothing if comparisons array is empty.

interface ServiceRelatedComparisonsProps {
  comparisons: Comparison[];
}

export function ServiceRelatedComparisons({ comparisons }: ServiceRelatedComparisonsProps) {
  if (comparisons.length === 0) return null;

  return (
    <section aria-labelledby="compare-options-heading">
      <h2
        id="compare-options-heading"
        className="mb-6 font-heading text-2xl font-bold text-forest"
      >
        Compare Your Options
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {comparisons.map((comparison) => (
          <Link
            key={comparison.id}
            href={`/${comparison.slug}`}
            className="group flex flex-col rounded-sm border border-border bg-parchment p-5 transition-all hover:border-copper hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
          >
            <h3 className="font-heading text-base font-semibold text-forest transition-colors group-hover:text-copper">
              {comparison.name}
            </h3>
            <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-text-secondary line-clamp-3">
              {comparison.metaDescription}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 font-body text-sm font-medium text-copper group-hover:underline">
              Compare Now
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
