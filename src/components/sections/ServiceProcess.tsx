import Image from 'next/image';
import { parseRichText } from '@/lib/rich-text';

interface ServiceProcessProps {
  steps: { title: string; description: string }[];
  image?: { src: string; alt: string };
}

export function ServiceProcess({ steps, image }: ServiceProcessProps) {
  return (
    <section aria-labelledby="service-process-heading">
      <h2
        id="service-process-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        Our Process
      </h2>
      {image && (
        <div className="mt-6 photo-treatment overflow-hidden rounded-lg aspect-[3/1]">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={400}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 66vw"
            loading="lazy"
          />
        </div>
      )}
      <ol className="mt-8 space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            {/* Step number circle */}
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest font-heading text-lg font-bold text-text-on-dark"
              aria-hidden="true"
            >
              {index + 1}
            </div>
            <div className="pt-1">
              <h4 className="font-heading text-lg font-bold text-forest">
                {step.title}
              </h4>
              <p className="mt-1 font-body text-base leading-relaxed text-text-secondary">
                {parseRichText(step.description)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
