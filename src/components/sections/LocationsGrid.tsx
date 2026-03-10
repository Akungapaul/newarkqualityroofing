import Image from 'next/image';
import Link from 'next/link';
import { cities } from '@/data/cities';
import { generateCityPageSlug } from '@/lib/slug-utils';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { StaggerGrid, StaggerItem } from '@/components/animations/StaggerGrid';
import { getHomepageImage } from '@/data/image-manifest';

export function LocationsGrid() {
  const mapImg = getHomepageImage('service-map');
  const mapSrc = mapImg?.path ? `/${mapImg.path}` : '/images/essex-county-service-map.jpg';
  const mapAlt = mapImg?.alt ?? 'service area map';

  return (
    <section
      className="bg-forest-dark py-16 text-text-on-dark lg:py-24"
      aria-labelledby="locations-heading"
    >
      <AnimateIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="locations-heading"
              className="font-heading text-3xl font-bold sm:text-4xl"
            >
              Serving All of Essex County and the Newark Area
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-parchment/70">
              From our{' '}
              <Link href="/roofing-in-newark" className="text-copper-light underline hover:text-copper">Newark</Link>{' '}
              headquarters, we provide expert roofing services
              to <em>every community</em> across{' '}
              <Link href="/roofing-in-essex-county" className="text-copper-light underline hover:text-copper">Essex County</Link>.{' '}
              Browse all{' '}
              <Link href="/services" className="text-copper-light underline hover:text-copper">services</Link>{' '}
              we offer, including roofing in{' '}
              <Link href="/roofing-in-montclair" className="text-copper-light underline hover:text-copper">Montclair</Link>{' '}and{' '}
              <Link href="/roofing-in-bloomfield" className="text-copper-light underline hover:text-copper">Bloomfield</Link>.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Image
              src={mapSrc}
              alt={mapAlt}
              width={400}
              height={260}
              className="rounded-lg shadow-md"
            />
          </div>

          <StaggerGrid className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <StaggerItem key={city.id}>
                <Link
                  href={`/${generateCityPageSlug(city.slug)}`}
                  className="group relative flex items-center justify-between rounded-lg border border-parchment/10 bg-forest/40 px-5 py-4 transition-all duration-300 hover:border-copper/40 hover:bg-forest/60 hover:shadow-lg"
                >
                  <div>
                    <span className="font-heading text-lg font-semibold text-parchment transition-colors group-hover:text-copper-light">
                      <em className="not-italic">{city.name}</em>
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
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </AnimateIn>
    </section>
  );
}
