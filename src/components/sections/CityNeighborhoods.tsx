import type { CityContent } from '@/lib/types';

interface CityNeighborhoodsProps {
  neighborhoods: CityContent['neighborhoods'];
  cityName: string;
  /** Optional question-form H2 override. Defaults to the city-page heading so
   *  existing city-page callers are unaffected; the rich service layout passes
   *  its own "local property context" question. */
  heading?: string;
}

export function CityNeighborhoods({
  neighborhoods,
  cityName,
  heading,
}: CityNeighborhoodsProps) {
  return (
    <div>
      <h2 id="neighborhoods-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        {heading ?? `Which Neighborhoods Do We Serve in ${cityName}?`}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood.name}
            className="rounded-lg border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="block font-heading text-base font-semibold text-forest">
              {neighborhood.name}
            </span>
            {neighborhood.description && (
              <p className="mt-1 font-body text-sm leading-relaxed text-text-secondary">
                {neighborhood.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
