import type { CityContent } from '@/lib/types';

interface CityFaqsProps {
  faqs: CityContent['faqs'];
  cityName: string;
}

export function CityFaqs({ faqs, cityName }: CityFaqsProps) {
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        Common Roofing Questions in {cityName}
      </h2>
      <div className="mt-6 divide-y divide-border">
        {faqs.map((faq, index) => (
          <details key={index} className="group">
            <summary className="flex cursor-pointer items-center justify-between py-4 font-heading text-base font-semibold text-forest transition-colors hover:text-copper [&::-webkit-details-marker]:hidden">
              <h3 className="pr-4">{faq.question}</h3>
              <svg
                className="h-5 w-5 shrink-0 text-copper transition-transform duration-300 group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div className="pb-4 font-body text-base leading-relaxed text-text-secondary">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
