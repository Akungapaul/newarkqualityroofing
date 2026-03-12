import Image from 'next/image';
import type { CityContent } from '@/lib/types';

interface CityProjectSpotlightsProps {
  spotlights: CityContent['projectSpotlights'];
  cityName: string;
  galleryPairs?: { before: { src: string; alt: string }; after: { src: string; alt: string } }[];
}

export function CityProjectSpotlights({
  spotlights,
  cityName,
  galleryPairs,
}: CityProjectSpotlightsProps) {
  return (
    <div>
      <h2 id="projects-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        Featured Projects in {cityName}
      </h2>

      {/* Before/After Gallery */}
      {galleryPairs && galleryPairs.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {galleryPairs.map((pair, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-border bg-white">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <Image
                    src={pair.before.src}
                    alt={pair.before.alt}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-forest/80 px-2 py-0.5 font-body text-xs font-semibold text-parchment">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <Image
                    src={pair.after.src}
                    alt={pair.after.alt}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 rounded bg-copper/80 px-2 py-0.5 font-body text-xs font-semibold text-parchment">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
