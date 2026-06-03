import Image from 'next/image';
import { getSectionImage } from '@/data/image-manifest';

interface CityResidentialProps {
  /** Legacy data heading — no longer rendered; the H2 is now the fixed §4.3 question. */
  heading?: string;
  content: string[];
}

export function CityResidential({ content }: CityResidentialProps) {
  const residentialImage = getSectionImage('section-city-residential');

  return (
    <div className="rounded-lg border-l-4 border-forest bg-forest/5 p-6 lg:p-8">
      <h2 id="residential-heading" className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        What Residential Roofing Services Do We Provide?
      </h2>

      {residentialImage && (
        <div className="mt-4 overflow-hidden rounded-sm">
          <Image
            src={residentialImage.path}
            alt={residentialImage.alt}
            width={residentialImage.width}
            height={residentialImage.height}
            className="h-auto w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="mt-4 space-y-4">
        {content.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-text-secondary"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
