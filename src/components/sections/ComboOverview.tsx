import Image from 'next/image';
import { renderParagraphWithLinks } from '@/lib/render-inline-links';

interface ComboOverviewProps {
  paragraphs: string[];
  image?: { src: string; alt: string };
}

export function ComboOverview({ paragraphs, image }: ComboOverviewProps) {
  return (
    <section aria-labelledby="combo-overview-heading">
      <h2
        id="combo-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Overview
      </h2>
      <div className={`mt-4 ${image ? 'grid gap-8 md:grid-cols-5' : ''}`}>
        <div className={`space-y-4 ${image ? 'md:col-span-3' : ''}`}>
          {paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className={`rounded-sm border-l-4 border-copper/60 p-4 ${
                index % 2 === 0 ? 'bg-parchment' : 'bg-white'
              }`}
            >
              <p className="font-body text-base leading-relaxed text-text-secondary">
                {renderParagraphWithLinks(paragraph)}
              </p>
            </div>
          ))}
        </div>
        {image && (
          <div className="md:col-span-2">
            <div className="photo-treatment overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={450}
                className="h-full w-full object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                loading="lazy"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
