import Image from 'next/image';
import { getSectionImage } from '@/data/image-manifest';
import { ProseLead, SectionHeading } from './ProseLead';

interface CityCommercialProps {
  /** Legacy data heading — no longer rendered; the H2 is now the fixed §4.3 question. */
  heading?: string;
  content: string[];
}

const COMMERCIAL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
    <path d="M10 21v-3h4v3" />
  </svg>
);

export function CityCommercial({ content }: CityCommercialProps) {
  const commercialImage = getSectionImage('section-city-commercial');
  const media = commercialImage ? (
    <div className="overflow-hidden rounded-sm">
      <Image
        src={commercialImage.path}
        alt={commercialImage.alt}
        width={commercialImage.width}
        height={commercialImage.height}
        className="h-auto w-full object-cover"
        loading="lazy"
      />
    </div>
  ) : undefined;

  return (
    <div className="rounded-lg border-l-4 border-copper bg-copper/5 p-6 lg:p-8">
      <SectionHeading id="commercial-heading" icon={COMMERCIAL_ICON}>
        Commercial Roofing Services We Provide
      </SectionHeading>
      <div className="mt-5">
        <ProseLead paragraphs={content} media={media} />
      </div>
    </div>
  );
}
