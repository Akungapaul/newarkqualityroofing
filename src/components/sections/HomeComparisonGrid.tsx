import Link from 'next/link';
import type { NavComparisonGroup } from '@/data/nav-data';

// ─── Featured comparisons per category ──────────────────────────────────────

const featuredSlugs: Record<string, string[]> = {
  'material-vs-material': [
    'asphalt-shingles-vs-metal-roofing',
    'slate-vs-tile-roofing',
    'tpo-vs-epdm-roofing',
    'architectural-vs-3-tab-shingles',
  ],
  'service-vs-service': [
    'roof-repair-vs-replacement',
    'roof-overlay-vs-tear-off',
    'diy-vs-professional-roof-repair',
    'preventive-maintenance-vs-emergency-repair',
  ],
  'decision-helper': [
    'best-roofing-material-nj-weather',
    'best-roofing-for-flat-roofs',
    'cheapest-vs-most-durable-roofing',
    'most-energy-efficient-roofing-materials',
  ],
};

// ─── Category icons ─────────────────────────────────────────────────────────

function MaterialIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
    </svg>
  );
}

function DecisionIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  );
}

const categoryIcons: Record<string, React.ReactNode> = {
  'material-vs-material': <MaterialIcon />,
  'service-vs-service': <ServiceIcon />,
  'decision-helper': <DecisionIcon />,
};

// ─── Component ──────────────────────────────────────────────────────────────

interface HomeComparisonGridProps {
  groups: NavComparisonGroup[];
}

export function HomeComparisonGrid({ groups }: HomeComparisonGridProps) {
  if (groups.length === 0) return null;

  return (
    <section
      className="bg-white py-12 lg:py-16"
      aria-labelledby="compare-options-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="compare-options-heading"
          className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          Compare Roofing Options
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-text-secondary">
          Side-by-side comparisons and decision guides to help you choose the right roofing solution for your property.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            const featured = featuredSlugs[group.category] ?? [];
            const featuredComparisons = featured
              .map((slug) => group.comparisons.find((c) => c.slug === slug))
              .filter((c) => c !== undefined);

            return (
              <div
                key={group.category}
                className="group flex flex-col rounded-sm border border-border bg-parchment p-6 transition-all hover:border-copper hover:shadow-md"
              >
                {/* Copper accent bar */}
                <div className="mb-4 h-1 w-12 rounded-full bg-copper transition-all group-hover:w-20" />

                <div className="mb-3 flex items-center gap-2 text-copper-dark">
                  {categoryIcons[group.category]}
                  <h3 className="font-heading text-lg font-semibold text-forest">
                    {group.categoryLabel}
                  </h3>
                </div>

                <ul className="flex-1 space-y-1.5">
                  {featuredComparisons.map((comparison) => (
                    <li key={comparison.slug}>
                      <Link
                        href={`/${comparison.slug}`}
                        className="block font-body text-sm text-text-secondary transition-colors hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                      >
                        {comparison.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/sitemap"
                  className="mt-4 inline-flex items-center gap-1 font-body text-sm font-medium text-copper hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                >
                  View all {group.categoryLabel.toLowerCase()}
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
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
