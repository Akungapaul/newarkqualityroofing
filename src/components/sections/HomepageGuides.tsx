import Link from 'next/link';
import type { Article } from '@/data/articles';

// ─── HomepageGuides ─────────────────────────────────────────────────────────
// Roofing Guides section for the homepage. Shows 3 editorial cards linking
// to the core homepage articles (NJ roofing guide, finding a roofer, licensing).
// Styled with Editorial Trust palette: parchment bg, copper accents, forest text.

interface HomepageGuidesProps {
  articles: Article[];
}

export function HomepageGuides({ articles }: HomepageGuidesProps) {
  if (articles.length === 0) return null;

  return (
    <section
      className="bg-white py-12 lg:py-16"
      aria-labelledby="roofing-guides-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="roofing-guides-heading"
          className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          Roofing Guides for NJ Homeowners
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-text-secondary">
          Expert resources to help you make informed roofing decisions for your Essex County property.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/${article.slug}`}
              className="group flex flex-col rounded-sm border border-border bg-parchment p-6 transition-all hover:border-copper hover:shadow-md focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              {/* Decorative top bar */}
              <div className="mb-4 h-1 w-12 rounded-full bg-copper transition-all group-hover:w-20" />

              <h3 className="font-heading text-lg font-semibold text-forest group-hover:text-copper transition-colors">
                {article.title}
              </h3>

              <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-text-secondary line-clamp-3">
                {article.metaDescription}
              </p>

              <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-medium text-copper group-hover:underline">
                Read Guide
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
      </div>
    </section>
  );
}
