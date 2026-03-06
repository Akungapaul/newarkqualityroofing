import { cities } from '@/data/cities';
import { generateCityPageSlug } from '@/lib/slug-utils';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import Link from 'next/link';

export default function LocationsHubPage() {
  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero */}
      <header className="px-6 pb-8 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Roofing Services Across Essex County, NJ
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
          Proudly serving all 21 communities in Essex County. Licensed, insured,
          and committed to quality roofing for every neighborhood we call home.
        </p>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-20">
        {/* City Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/${generateCityPageSlug(city.slug)}`}
              className="group relative flex flex-col rounded-lg border border-border bg-white p-6 transition-all hover:border-copper hover:shadow-md"
            >
              {/* HQ Badge */}
              {city.isHQ && (
                <span className="absolute right-4 top-4 rounded-sm bg-copper px-2.5 py-1 font-body text-xs font-bold uppercase tracking-wider text-text-on-copper">
                  Headquarters
                </span>
              )}

              <h2 className="font-heading text-xl font-bold text-forest-dark group-hover:text-copper">
                {city.name}
              </h2>
              <p className="mt-1 font-body text-sm text-text-secondary">
                Essex County, NJ
              </p>

              {/* Zip Codes */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {city.zipCodes.slice(0, 3).map((zip) => (
                  <span
                    key={zip}
                    className="rounded bg-parchment px-2 py-0.5 font-body text-xs text-text-secondary"
                  >
                    {zip}
                  </span>
                ))}
                {city.zipCodes.length > 3 && (
                  <span className="rounded bg-parchment px-2 py-0.5 font-body text-xs text-text-secondary">
                    +{city.zipCodes.length - 3} more
                  </span>
                )}
              </div>

              {/* Arrow indicator */}
              <div className="mt-4 flex items-center gap-1.5 font-body text-sm font-medium text-copper">
                View roofing services
                <svg
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
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
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 rounded-lg border border-copper/30 bg-copper/5 px-6 py-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-forest">
            Serving All of Essex County
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-text-secondary">
            From Newark to Montclair, Livingston to Belleville, our team
            provides expert roofing services to every community in Essex County.
            Call today for a free on-site estimate.
          </p>
          <div className="mt-6">
            <PhoneNumber size="lg" />
          </div>
        </section>
      </main>
    </div>
  );
}
