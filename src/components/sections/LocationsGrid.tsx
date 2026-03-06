import Link from 'next/link';
import { cities } from '@/data/cities';
import { generateCityPageSlug } from '@/lib/slug-utils';

export function LocationsGrid() {
  return (
    <section
      className="bg-forest-dark py-16 text-text-on-dark lg:py-24"
      aria-labelledby="locations-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="locations-heading"
            className="font-heading text-3xl font-bold sm:text-4xl"
          >
            Serving All of Essex County
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-parchment/70">
            From our Newark headquarters, we provide expert roofing services
            to every community in Essex County.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Link
              key={city.id}
              href={`/${generateCityPageSlug(city.slug)}`}
              className="group relative flex items-center justify-between rounded-lg border border-parchment/10 bg-forest/40 px-5 py-4 transition-all duration-300 hover:border-copper/40 hover:bg-forest/60 hover:shadow-lg"
            >
              <div>
                <span className="font-heading text-lg font-semibold text-parchment transition-colors group-hover:text-copper-light">
                  {city.name}
                </span>
                <span className="ml-2 font-body text-sm text-parchment/50">
                  NJ
                </span>
              </div>
              <div className="flex items-center gap-2">
                {city.isHQ && (
                  <span className="rounded-full bg-copper/20 px-3 py-0.5 font-body text-xs font-semibold text-copper-light">
                    Headquarters
                  </span>
                )}
                <svg
                  className="h-4 w-4 text-parchment/40 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-copper-light"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
