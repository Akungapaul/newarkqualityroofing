import Link from 'next/link';
import type { Comparison } from '@/lib/types';
import { services } from '@/data/services';

// ─── Service lookup helpers ────────────────────────────────────────────────

/**
 * Find services whose names loosely match a comparison item label.
 * Matches when the service name contains the item name or vice versa
 * (case-insensitive). Returns at most 3 matches.
 */
function findMatchingServices(itemName: string | undefined): Array<{ name: string; slug: string; shortDescription: string }> {
  if (!itemName) return [];

  const needle = itemName.toLowerCase();
  return services
    .filter((s) => {
      const sName = s.name.toLowerCase();
      return sName.includes(needle) || needle.includes(sName);
    })
    .slice(0, 3)
    .map((s) => ({ name: s.name, slug: s.slug, shortDescription: s.shortDescription }));
}

/**
 * For decision-helpers without itemA/itemB, pick services by category relevance.
 * Returns top 4 services from likely-related categories.
 */
function findCategoryServices(comparisonId: string): Array<{ name: string; slug: string; shortDescription: string }> {
  // Map known decision-helper patterns to relevant service categories
  const categoryMap: Record<string, string[]> = {
    'best-roofing-material-nj-weather': ['residential-roof-types', 'commercial-roof-types'],
    'best-commercial-roofing-material': ['commercial-roof-types', 'commercial-services'],
    'best-roofing-for-flat-roofs': ['commercial-roof-types'],
    'best-roofing-for-historic-homes-nj': ['residential-roof-types', 'components-specialty'],
    'cheapest-vs-most-durable-roofing': ['residential-roof-types', 'replacement-sub-pages'],
    'most-energy-efficient-roofing-materials': ['energy-solar', 'residential-roof-types'],
    'best-roofing-for-essex-county-colonial-homes': ['residential-roof-types', 'components-specialty'],
    'roof-warranty-comparison-guide': ['repair-maintenance', 'replacement-sub-pages'],
  };

  const categories = categoryMap[comparisonId] ?? ['residential-roof-types'];

  return services
    .filter((s) => categories.includes(s.category))
    .slice(0, 4)
    .map((s) => ({ name: s.name, slug: s.slug, shortDescription: s.shortDescription }));
}

// ─── Props & Component ────────────────────────────────────────────────────

interface ComparisonRelatedProps {
  comparison: Comparison;
}

export function ComparisonRelated({ comparison }: ComparisonRelatedProps) {
  const isDecisionHelper = comparison.category === 'decision-helper';

  // Gather related service links
  let relatedServices: Array<{ name: string; slug: string; shortDescription: string }>;

  if (isDecisionHelper) {
    relatedServices = findCategoryServices(comparison.id);
  } else {
    const matchA = findMatchingServices(comparison.itemA);
    const matchB = findMatchingServices(comparison.itemB);
    // Deduplicate by slug
    const seen = new Set<string>();
    relatedServices = [];
    for (const s of [...matchA, ...matchB]) {
      if (!seen.has(s.slug)) {
        seen.add(s.slug);
        relatedServices.push(s);
      }
    }
  }

  if (relatedServices.length === 0) return null;

  return (
    <section
      className="border-t border-border bg-parchment-light py-16 lg:py-20"
      aria-labelledby="comparison-related-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="comparison-related-heading"
          className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          Related Services
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedServices.map((service) => (
            <Link
              key={service.slug}
              href={`/${service.slug}`}
              className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-copper hover:shadow-md focus-visible:ring-2 focus-visible:ring-copper focus-visible:outline-none"
            >
              <h3 className="font-heading text-lg font-bold text-forest transition-colors group-hover:text-copper">
                {service.name}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-text-secondary line-clamp-3">
                {service.shortDescription}
              </p>
              <span className="mt-4 inline-block font-body text-sm font-semibold text-copper transition-colors group-hover:text-copper-dark">
                Learn More &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
