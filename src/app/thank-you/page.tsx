import type { Metadata } from 'next';
import Link from 'next/link';
import { PhoneNumber } from '@/components/ui/PhoneNumber';

export const metadata: Metadata = {
  title: 'Thank You | Newark Quality Roofing',
  description: 'Thank you for contacting Newark Quality Roofing.',
  robots: { index: false, follow: false },
};

const steps = [
  {
    number: 1,
    title: 'We\u2019ll review your request',
    description: 'Our team reviews every inquiry within the hour.',
  },
  {
    number: 2,
    title: 'Expect a call within 24 hours',
    description:
      'A roofing specialist will call to discuss your project.',
  },
  {
    number: 3,
    title: 'Free on-site inspection',
    description:
      'We\u2019ll schedule a convenient time to inspect your roof at no cost.',
  },
] as const;

export default function ThankYouPage() {
  return (
    <div className="bg-parchment py-16 sm:py-24">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        {/* Confirmation icon */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-forest">
            <svg
              className="h-8 w-8 text-parchment"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-center font-heading text-3xl font-bold tracking-tight text-forest sm:text-4xl">
          Thank You for Reaching Out!
        </h1>
        <p className="mt-3 text-center font-body text-lg text-text-secondary">
          We&apos;ve received your request and will be in touch shortly.
        </p>

        {/* Timeline */}
        <section className="mt-12" aria-label="Next steps">
          <h2 className="mb-8 text-center font-heading text-xl font-semibold text-forest-dark">
            What Happens Next
          </h2>
          <div className="relative ml-4 border-l-2 border-copper/30 pl-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative ${i < steps.length - 1 ? 'pb-10' : ''}`}
              >
                {/* Numbered circle */}
                <div className="absolute -left-[calc(2rem+1px)] flex h-8 w-8 items-center justify-center rounded-full bg-copper font-heading text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-semibold text-forest">
                  {step.title}
                </h3>
                <p className="mt-1 font-body text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency callout */}
        <div className="mt-14 rounded-lg border border-copper/20 bg-forest/5 p-6 text-center">
          <p className="font-heading text-base font-semibold text-forest-dark">
            Need immediate help? Call us now:
          </p>
          <div className="mt-3">
            <PhoneNumber size="lg" />
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-text-secondary">
            While you wait, explore our services
          </p>
          <Link
            href="/services"
            className="mt-2 inline-block font-heading text-base font-semibold text-copper transition-colors duration-200 hover:text-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
          >
            View All Services &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
