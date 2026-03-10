import Image from 'next/image';
import Link from 'next/link';
import type { FaqItem } from '@/data/faq';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

interface FaqAccordionProps {
  items: FaqItem[];
}

function wrapFirstSentence(text: string, useEmphasis: boolean = true) {
  const periodIdx = text.indexOf('. ');
  if (periodIdx === -1) return useEmphasis ? <><em>{text}</em></> : <>{text}</>;
  const first = text.slice(0, periodIdx + 1);
  const rest = text.slice(periodIdx + 1);
  return useEmphasis ? (
    <>
      <em>{first}</em>{rest}
    </>
  ) : <>{first}{rest}</>;
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const faqImg = getHomepageImage('faq-options');
  const faqSrc = faqImg?.path ? `/${faqImg.path}` : '/images/homeowner-roofing-options.jpg';
  const faqAlt = faqImg?.alt ?? 'reviewing options';

  return (
    <section className="bg-parchment py-16 lg:py-24" aria-labelledby="faq-heading">
      <AnimateIn className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="text-center font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center font-body text-lg text-text-secondary">
          Answers to common questions about our process, costs,
          and what to expect. See our{' '}
          <Link href="/roof-replacement" className="text-copper underline hover:text-copper-dark">replacement guide</Link>{' '}
          for detailed pricing.
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src={faqSrc}
            alt={faqAlt}
            width={400}
            height={260}
            className="rounded-lg shadow-md"
          />
        </div>

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
                {wrapFirstSentence(item.answer, index >= 5)}
                {item.linkHref && item.linkText && (
                  <>
                    {' '}
                    <Link href={item.linkHref} className="text-copper underline hover:text-copper-dark">
                      {item.linkText} &rarr;
                    </Link>
                  </>
                )}
              </div>
            </details>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
