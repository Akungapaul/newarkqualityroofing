import type { CityContent } from '@/lib/types';

interface CityStatsBarProps {
  stats: CityContent['stats'];
  cityName: string;
}

export function CityStatsBar({ stats, cityName }: CityStatsBarProps) {
  return (
    <section
      className="border-y border-border bg-parchment-dark"
      aria-label={`${cityName} roofing statistics`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-6 py-6 sm:flex-row sm:gap-12 lg:gap-16 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="font-heading text-3xl font-bold text-forest">
            {stats.projectCount}
          </span>
          <span className="font-body text-sm text-text-secondary">
            Projects Completed
          </span>
        </div>

        <div
          className="hidden h-8 w-px bg-copper/30 sm:block"
          aria-hidden="true"
        />

        <div className="flex items-center gap-3">
          <span className="font-heading text-3xl font-bold text-forest">
            {stats.servingSince}
          </span>
          <span className="font-body text-sm text-text-secondary">
            Serving Since
          </span>
        </div>

        <div
          className="hidden h-8 w-px bg-copper/30 sm:block"
          aria-hidden="true"
        />

        <div className="flex items-center gap-3">
          <span className="font-heading text-3xl font-bold text-copper">
            {stats.rating}
          </span>
          <div className="flex flex-col">
            <span className="flex text-copper" aria-hidden="true">
              {'★★★★★'}
            </span>
            <span className="font-body text-sm text-text-secondary">
              Star Rating
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
