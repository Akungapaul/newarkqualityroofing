import Image from 'next/image';
import { CREDENTIALS } from '@/data/content-constants';

interface ServiceOverviewProps {
  paragraphs: string[];
  image?: { src: string; alt: string };
  imagePosition?: 'above' | 'below';
}

function boldFirstSentence(text: string) {
  const match = text.match(/^(.*?[.!?])\s*([\s\S]*)/);
  if (!match) return <>{text}</>;
  return (
    <>
      <strong className="text-forest">{match[1]}</strong> {match[2]}
    </>
  );
}

export function ServiceOverview({ paragraphs, image, imagePosition = 'above' }: ServiceOverviewProps) {
  const imageBlock = image && (
    <div className="photo-treatment mt-6 overflow-hidden rounded-lg">
      <Image
        src={image.src}
        alt={image.alt}
        width={1200}
        height={400}
        className="aspect-[3/1] w-full object-cover"
        sizes="(max-width: 768px) 100vw, 65vw"
        loading="lazy"
      />
    </div>
  );

  return (
    <section aria-labelledby="service-overview-heading">
      <h2
        id="service-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Overview
      </h2>

      {imagePosition === 'above' && imageBlock}

      <div className="mt-6 space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="font-body text-base leading-relaxed text-text-secondary"
          >
            {index === 0 ? boldFirstSentence(paragraph) : paragraph}
          </p>
        ))}
      </div>

      {imagePosition === 'below' && imageBlock}

      {/* Stat callout */}
      <div className="mt-8 rounded-lg border border-copper/20 bg-copper/5 px-6 py-4">
        <p className="font-heading text-lg font-semibold text-copper">
          500+ projects completed in Essex County
        </p>
        <p className="mt-1 font-body text-sm text-text-secondary">
          {CREDENTIALS.experience} · {CREDENTIALS.certification} · {CREDENTIALS.insurance}
        </p>
      </div>
    </section>
  );
}
