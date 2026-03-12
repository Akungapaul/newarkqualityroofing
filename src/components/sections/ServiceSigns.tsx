import Image from 'next/image';
import { getSectionImages } from '@/data/image-manifest';

interface ServiceSignsProps {
  heading: string;
  signs: string[];
}

export function ServiceSigns({ heading, signs }: ServiceSignsProps) {
  const signImages = getSectionImages('section-warning-signs');

  return (
    <section aria-labelledby="service-signs-heading">
      <h2
        id="service-signs-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {heading}
      </h2>

      {/* Warning sign images grid */}
      {signImages.length > 0 && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {signImages.map((img) => (
            <div key={img.id} className="overflow-hidden rounded-sm">
              <Image
                src={img.path}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}

      <ul className="mt-6 space-y-3">
        {signs.map((sign, index) => (
          <li
            key={index}
            className="flex items-start gap-3 font-body text-base text-text-secondary"
          >
            <svg
              className="mt-0.5 h-5 w-5 shrink-0 text-copper"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span>{sign}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
