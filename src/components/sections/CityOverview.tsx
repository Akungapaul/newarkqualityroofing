import Image from 'next/image';
import type { ImageEntry } from '@/data/image-manifest';
import { ProseLead, SectionHeading } from './ProseLead';

interface CityOverviewProps {
  paragraphs: string[];
  cityName: string;
  weatherChallenges: {
    heading: string;
    content: string[];
  };
  overviewImage?: ImageEntry;
}

const OVERVIEW_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M16 13a4 4 0 0 0-1-7.87A5 5 0 0 0 5.5 8 3.5 3.5 0 0 0 6 15" />
    <path d="M8 17v2M12 17v3M16 17v2" />
  </svg>
);

export function CityOverview({
  paragraphs,
  cityName,
  weatherChallenges,
  overviewImage,
}: CityOverviewProps) {
  const media = overviewImage ? (
    <div className="overflow-hidden rounded-sm">
      <Image
        src={overviewImage.path}
        alt={overviewImage.alt}
        width={overviewImage.width}
        height={overviewImage.height}
        className="h-auto w-full object-cover"
        loading="lazy"
      />
    </div>
  ) : undefined;

  return (
    <div className="space-y-8">
      <div>
        <SectionHeading id="overview-heading" icon={OVERVIEW_ICON}>
          What Roofing Problems Are Common in {cityName}?
        </SectionHeading>
        <div className="mt-5">
          <ProseLead paragraphs={paragraphs} media={media} />
        </div>
      </div>

      <div>
        <span className="block font-heading text-xl font-bold text-forest sm:text-2xl">
          {weatherChallenges.heading}
        </span>
        <div className="mt-3">
          <ProseLead paragraphs={weatherChallenges.content} />
        </div>
      </div>
    </div>
  );
}
