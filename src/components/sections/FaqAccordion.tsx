import type { FaqItem } from '@/data/faq';

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <section className="bg-parchment py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-lg text-text-secondary">
          Answers to common questions about our roofing services, costs,
          and process.
        </p>

        <div className="mt-12 divide-y divide-border">
          {items.map((item, index) => (
            <details key={index} className="group">
              <summary className="flex cursor-pointer items-center justify-between py-4 font-heading text-lg font-semibold text-forest transition-colors hover:text-copper [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                {/* Chevron */}
                <svg
                  className="h-5 w-5 shrink-0 text-copper transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="pb-4 font-body text-base leading-relaxed text-text-secondary">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
