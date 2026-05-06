import Link from 'next/link';
import { generateComboSlug } from '@/lib/slug-utils';

// ─── Top services × top cities for homepage combo links ──────────────────────

const TOP_SERVICES = [
  { name: 'Roof Repair', slug: 'roof-repair' },
  { name: 'Roof Replacement', slug: 'roof-replacement' },
  { name: 'Emergency Roof Repair', slug: 'emergency-roof-repair' },
  { name: 'Roof Inspection', slug: 'roof-inspection' },
  { name: 'Storm Damage Repair', slug: 'storm-damage-roof-repair' },
] as const;

const TOP_CITIES = [
  { name: 'Newark', slug: 'newark' },
  { name: 'Bloomfield', slug: 'bloomfield' },
  { name: 'Montclair', slug: 'montclair' },
  { name: 'East Orange', slug: 'east-orange' },
  { name: 'Irvington', slug: 'irvington' },
  { name: 'West Orange', slug: 'west-orange' },
  { name: 'Belleville', slug: 'belleville' },
  { name: 'Maplewood', slug: 'maplewood' },
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export function FeaturedCombos() {
  return (
    <section
      className="bg-white py-12 lg:py-16"
      aria-labelledby="featured-combos-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="featured-combos-heading"
          className="text-center font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          Popular Roofing Services by City
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center font-body text-base text-text-secondary">
          Find expert roofing services in your Essex County neighborhood. Select your city and service below.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {TOP_SERVICES.map((service) => (
            <div key={service.slug}>
              <h3 className="mb-2.5 font-heading text-sm font-bold uppercase tracking-widest text-copper">
                {service.name}
              </h3>
              <ul className="space-y-1">
                {TOP_CITIES.map((city) => {
                  const comboSlug = generateComboSlug(service.slug, city.slug);
                  return (
                    <li key={city.slug}>
                      <Link
                        href={`/${comboSlug}`}
                        className="font-body text-sm text-forest transition-colors hover:text-copper"
                      >
                        {service.name} in {city.name}, NJ
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
