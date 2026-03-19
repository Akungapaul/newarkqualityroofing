import Link from 'next/link';
import { cities } from '@/data/cities';
import { generateComboSlug } from '@/lib/slug-utils';
import type { Service } from '@/lib/types';

// ─── Region groupings for Essex County cities ────────────────────────────────

const REGIONS: { name: string; cityIds: string[] }[] = [
  {
    name: 'Urban Core',
    cityIds: ['newark', 'east-orange', 'orange', 'irvington'],
  },
  {
    name: 'First Suburbs',
    cityIds: ['bloomfield', 'belleville', 'nutley', 'glen-ridge', 'montclair'],
  },
  {
    name: 'South & West',
    cityIds: ['south-orange', 'maplewood', 'west-orange', 'millburn', 'livingston'],
  },
  {
    name: 'Caldwell Area & North',
    cityIds: ['caldwell', 'north-caldwell', 'essex-fells', 'cedar-grove', 'verona', 'fairfield', 'roseland'],
  },
];

const cityById = new Map(cities.map((c) => [c.id, c]));

// ─── Component ───────────────────────────────────────────────────────────────

interface ServiceAreasGridProps {
  service: Service;
}

export function ServiceAreasGrid({ service }: ServiceAreasGridProps) {
  return (
    <section
      className="bg-parchment py-12 lg:py-16"
      aria-labelledby="service-areas-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="service-areas-heading"
          className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          Get {service.name} in Your Area
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-text-secondary">
          We provide professional {service.name.toLowerCase()} services across all 21 communities in Essex County, NJ.
        </p>

        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REGIONS.map((region) => (
            <div key={region.name}>
              <h3 className="mb-3 font-heading text-sm font-bold uppercase tracking-widest text-copper">
                {region.name}
              </h3>
              <ul className="space-y-1.5">
                {region.cityIds.map((cityId) => {
                  const city = cityById.get(cityId);
                  if (!city) return null;
                  const comboSlug = generateComboSlug(service.slug, city.slug);
                  return (
                    <li key={cityId}>
                      <Link
                        href={`/${comboSlug}`}
                        className="group flex items-center gap-1.5 font-body text-sm text-forest transition-colors hover:text-copper"
                      >
                        <svg
                          className="h-3 w-3 flex-shrink-0 text-copper/50 transition-transform group-hover:translate-x-0.5 group-hover:text-copper"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {service.name} in {city.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
