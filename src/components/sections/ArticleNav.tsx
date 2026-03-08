import Link from 'next/link';

interface ArticleNavProps {
  nextArticle: { title: string; slug: string } | null;
  prevArticle: { title: string; slug: string } | null;
  moneyPage: { name: string; slug: string };
}

export function ArticleNav({ nextArticle, prevArticle, moneyPage }: ArticleNavProps) {
  return (
    <nav className="mt-14" aria-label="Article navigation">
      {/* Continue Reading card -- primary forward action */}
      {nextArticle && (
        <Link
          href={`/${nextArticle.slug}`}
          className="group block rounded-lg border border-border bg-parchment-light p-6 transition-all hover:border-copper/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
        >
          <span className="font-body text-xs font-semibold uppercase tracking-wider text-copper">
            Continue Reading
          </span>
          <span className="mt-2 flex items-center justify-between gap-4">
            <span className="font-heading text-lg font-semibold text-forest transition-colors group-hover:text-forest-light sm:text-xl">
              {nextArticle.title}
            </span>
            <svg
              className="h-5 w-5 shrink-0 text-copper transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      )}

      {/* Previous article -- small inline link */}
      {prevArticle && (
        <div className="mt-4 flex items-center gap-2">
          <svg
            className="h-4 w-4 shrink-0 text-text-secondary"
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
          <Link
            href={`/${prevArticle.slug}`}
            className="font-body text-sm text-text-secondary transition-colors hover:text-copper focus-visible:outline-none focus-visible:underline"
          >
            Previous: {prevArticle.title}
          </Link>
        </div>
      )}

      {/* Back to parent money page -- secondary link */}
      <div className={nextArticle ? 'mt-4' : 'mt-0'}>
        <Link
          href={moneyPage.slug}
          className={`inline-flex items-center gap-2 font-body transition-colors hover:text-copper focus-visible:outline-none focus-visible:underline ${
            nextArticle
              ? 'text-sm text-text-secondary'
              : 'rounded-md border border-forest/20 bg-forest/5 px-5 py-3 text-base font-semibold text-forest hover:bg-forest/10'
          }`}
        >
          <svg
            className="h-4 w-4 shrink-0"
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
          Back to {moneyPage.name}
        </Link>
      </div>
    </nav>
  );
}
