import type { CityContent } from '@/lib/types';

interface CityProjectSpotlightsProps {
  spotlights: CityContent['projectSpotlights'];
  cityName: string;
}

export function CityProjectSpotlights({
  spotlights,
  cityName,
}: CityProjectSpotlightsProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        Featured Projects in {cityName}
      </h2>
      <div className="mt-6 space-y-6">
        {spotlights.map((spotlight, index) => {
          const isResidential = spotlight.type === 'residential';
          return (
            <div
              key={index}
              className={`rounded-lg border-l-4 p-6 lg:p-8 ${
                isResidential
                  ? 'border-forest bg-forest/5'
                  : 'border-copper bg-copper/5'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-heading text-xl font-bold text-forest">
                  {spotlight.title}
                </h3>
                <span
                  className={`shrink-0 rounded-sm px-2.5 py-0.5 font-body text-xs font-semibold uppercase tracking-wider ${
                    isResidential
                      ? 'bg-forest/10 text-forest'
                      : 'bg-copper/10 text-copper'
                  }`}
                >
                  {spotlight.type}
                </span>
              </div>
              <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
                {spotlight.description}
              </p>
              <ul className="mt-4 space-y-2">
                {spotlight.details.map((detail, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 font-body text-sm text-text-secondary"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                        isResidential ? 'bg-forest' : 'bg-copper'
                      }`}
                      aria-hidden="true"
                    />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
