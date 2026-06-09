import Image from 'next/image';
import { ProseLead } from './ProseLead';

interface ComboOverviewProps {
  paragraphs: string[];
  /** §4.4 Core H2 ("What [Service] Is Available in [City]?") from heading-config. */
  heading: string;
  image?: { src: string; alt: string };
}

export function ComboOverview({ paragraphs, heading, image }: ComboOverviewProps) {
  const media = image ? (
    <div className="photo-treatment overflow-hidden rounded-lg">
      <Image
        src={image.src}
        alt={image.alt}
        width={600}
        height={450}
        className="h-auto w-full object-cover"
        sizes="(max-width: 768px) 100vw, 40vw"
        loading="lazy"
      />
    </div>
  ) : undefined;

  return (
    <section aria-labelledby="combo-overview-heading">
      <h2
        id="combo-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-5">
        <ProseLead paragraphs={paragraphs} media={media} />
      </div>
    </section>
  );
}
