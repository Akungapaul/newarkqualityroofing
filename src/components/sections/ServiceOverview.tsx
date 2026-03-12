import Image from 'next/image';

interface ServiceOverviewProps {
  paragraphs: string[];
  image?: { src: string; alt: string };
}

export function ServiceOverview({ paragraphs, image }: ServiceOverviewProps) {
  return (
    <section aria-labelledby="service-overview-heading">
      <h2
        id="service-overview-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Overview
      </h2>
      <div className={`mt-4 ${image ? 'grid gap-8 md:grid-cols-5' : ''}`}>
        <div className={`space-y-4 ${image ? 'md:col-span-3' : ''}`}>
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-body text-base leading-relaxed text-text-secondary"
            >
              {paragraph}
            </p>
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
