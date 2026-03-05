import type { City } from '@/lib/types';

interface CityTemplateProps {
  city: City;
}

export default function CityTemplate({ city }: CityTemplateProps) {
  return (
    <div className="min-h-screen bg-parchment px-6 py-16">
      <main className="mx-auto max-w-3xl">
        {/* Page type badge */}
        <span className="inline-block rounded-sm bg-copper px-3 py-1 font-body text-xs font-semibold uppercase tracking-wider text-text-on-copper">
          City
        </span>

        {/* City name */}
        <h1 className="mt-4 font-heading text-4xl font-bold text-forest sm:text-5xl">
          Roofing Services in {city.name}, NJ
        </h1>

        {/* City details */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-sm border border-border px-2 py-1 font-body text-xs text-text-secondary">
            {city.county} County
          </span>
          {city.isHQ && (
            <span className="rounded-sm border border-forest/30 bg-forest/10 px-2 py-1 font-body text-xs text-forest">
              Headquarters
            </span>
          )}
        </div>

        {/* Zip codes */}
        <p className="mt-6 font-body text-sm text-text-secondary">
          Serving zip codes: {city.zipCodes.join(', ')}
        </p>

        {/* Placeholder content area */}
        <div className="mt-12 rounded-sm border-2 border-dashed border-border p-8 text-center">
          <p className="font-body text-text-secondary">
            Full city content coming in Phase 4
          </p>
        </div>

        {/* Placeholder lead form area */}
        <div className="mt-8 rounded-sm border-2 border-dashed border-copper/40 bg-copper/5 p-8 text-center">
          <p className="font-heading text-lg font-semibold text-forest">
            Get a Free Estimate in {city.name}
          </p>
          <p className="mt-2 font-body text-sm text-text-secondary">
            Lead form coming in Phase 6
          </p>
        </div>
      </main>
    </div>
  );
}
