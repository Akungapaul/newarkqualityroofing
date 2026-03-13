import Image from 'next/image';
import { parseRichText } from '@/lib/rich-text';

interface ServiceApproachProps {
  heading: string;
  content: string[];
  image?: { src: string; alt: string };
  subheadings?: string[];
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

export function ServiceApproach({ heading, content, image, subheadings, imagePosition = 'above' }: ServiceApproachProps) {
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
    <section aria-labelledby="service-approach-heading">
      <h2
        id="service-approach-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>

      {imagePosition === 'above' && imageBlock}

      <div className="mt-6 space-y-4">
        {content.map((paragraph, index) => (
          <div key={index}>
            {subheadings?.[index] && (
              <h3 className="mb-2 font-heading text-lg font-semibold text-forest">
                {subheadings[index]}
              </h3>
            )}
            <p className="font-body text-base leading-relaxed text-text-secondary">
              {index === 0 ? boldFirstSentence(paragraph) : parseRichText(paragraph)}
            </p>
          </div>
        ))}
      </div>

      {imagePosition === 'below' && imageBlock}
    </section>
  );
}
