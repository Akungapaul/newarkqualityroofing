import Image from 'next/image';
import { getSectionImage } from '@/data/image-manifest';
import { ProseLead, SectionHeading } from './ProseLead';

interface CityResidentialProps {
  /** Legacy data heading — no longer rendered; the H2 is now the fixed §4.3 question. */
  heading?: string;
  content: string[];
}

const RESIDENTIAL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export function CityResidential({ content }: CityResidentialProps) {
  const residentialImage = getSectionImage('section-city-residential');
  const media = residentialImage ? (
    <div className="overflow-hidden rounded-sm">
      <Image
        src={residentialImage.path}
        alt={residentialImage.alt}
        width={residentialImage.width}
        height={residentialImage.height}
        className="h-auto w-full object-cover"
        loading="lazy"
      />
    </div>
  ) : undefined;

  return (
    <div className="rounded-lg border-l-4 border-forest bg-forest/5 p-6 lg:p-8">
      <SectionHeading id="residential-heading" icon={RESIDENTIAL_ICON}>
        What Residential Roofing Services Do We Provide?
      </SectionHeading>
      <div className="mt-5">
        <ProseLead paragraphs={content} media={media} />
      </div>
    </div>
  );
}
