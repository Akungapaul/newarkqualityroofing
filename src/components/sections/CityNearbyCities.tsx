import Link from 'next/link';
import type { City } from '@/lib/types';
import { generateCityPageSlug } from '@/lib/slug-utils';
import { services } from '@/data/services';
import { getCityAnchorText } from '@/data/linking/anchor-text';

interface CityNearbyCitiesProps {
  adjacentCities: City[];
  currentCityName: string;
}

// Show first 3 services as representative links on each nearby city card
const popularServices = services.slice(0, 3).map((s) => ({
  name: s.name,
  slug: s.slug,
}));

export function CityNearbyCities({
  adjacentCities,
  currentCityName,
}: CityNearbyCitiesProps) {
  if (adjacentCities.length === 0) return null;

  return (
    <div>
      <h2 id="nearby-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        Roofing Services Near {currentCityName}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {adjacentCities.map((city, index) => (
          <Link
            key={city.id}
            href={`/${generateCityPageSlug(city.slug)}`}
            className="group rounded-lg border border-border bg-white p-5 shadow-sm transition-all hover:border-copper/40 hover:shadow-md"
          >
            <h3 className="font-heading text-lg font-semibold text-forest transition-colors group-hover:text-copper">
              {getCityAnchorText(city.name, index)}
            </h3>
            <ul className="mt-2 space-y-1">
              {popularServices.map((service) => (
                <li
                  key={service.slug}
                  className="font-body text-sm text-text-secondary"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
