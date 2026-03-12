import Image from 'next/image';

interface ServiceApproachProps {
  heading: string;
  content: string[];
  image?: { src: string; alt: string };
}

export function ServiceApproach({ heading, content, image }: ServiceApproachProps) {
  return (
    <section aria-labelledby="service-approach-heading">
      <h2
        id="service-approach-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>
      <div className={`mt-4 ${image ? 'grid gap-8 md:grid-cols-5' : ''}`}>
        <div className={`space-y-4 ${image ? 'md:col-span-3' : ''}`}>
          {content.map((paragraph, index) => (
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
