import Image from 'next/image';
import Link from 'next/link';
import { WHY_CHOOSE_US_REASONS } from '@/data/content-constants';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

/* Themed SVG icons keyed by pattern-matched reason titles. */
const REASON_ICONS: { pattern: RegExp; icon: React.ReactNode }[] = [
  {
    pattern: /licens|certif/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7l-9-5z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    pattern: /year|experience/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    pattern: /pric|transparen|honest/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    pattern: /material|warranti|premium/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    pattern: /emergenc|same.day|24\/7|response/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    pattern: /family|communit|local|owned/i,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

function getIconForReason(title: string, index: number) {
  const match = REASON_ICONS.find((r) => r.pattern.test(title));
  if (match) return match.icon;
  return (
    <span className="font-heading text-sm font-bold" aria-hidden="true">
      {index + 1}
    </span>
  );
}

export function HomeWhyChooseUs() {
  const teamImg = getHomepageImage('why-team');
  const teamSrc = teamImg?.path ?? '/images/newark-roofing-team.jpg';
  const teamAlt = teamImg?.alt ?? 'our professional team';

  return (
    <section
      className="bg-parchment py-16 lg:py-24"
      aria-labelledby="home-why-heading"
    >
      <AnimateIn className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="home-why-heading"
            className="font-heading text-3xl font-bold text-forest sm:text-4xl"
          >
            Why Customers Choose Our Roofing Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            Newark roofing contractors you can trust — our team provides reliable
            roofing services with <em>transparency, expertise, and local accountability</em>.
            Whatever your roof repair or replacement needs,{' '}
            <Link href="/about" className="text-copper underline hover:text-copper-dark">learn about our story</Link>,{' '}
            <Link href="/roof-inspection" className="text-copper underline hover:text-copper-dark">schedule a visit</Link>, or{' '}
            <Link href="/storm-damage-roof-repair" className="text-copper underline hover:text-copper-dark">get storm damage help</Link>.
            You can also explore our{' '}
            <Link href="/roof-maintenance-programs" className="text-copper underline hover:text-copper-dark">maintenance programs</Link>,{' '}
            <Link href="/gutter-installation-repair" className="text-copper underline hover:text-copper-dark">gutter services</Link>, and{' '}
            <Link href="/skylight-installation-repair" className="text-copper underline hover:text-copper-dark">skylight installations</Link>.
          </p>
        </div>

        <h3 className="mt-12 text-center font-heading text-2xl font-semibold text-forest">
          Licensed and Insured Professionals
        </h3>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {WHY_CHOOSE_US_REASONS.map((reason, index) => (
            <div
              key={index}
              className="rounded-lg border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper/10 text-copper">
                  {getIconForReason(reason.title, index)}
                </span>
                <div>
                  <span className="block font-heading text-lg font-bold text-forest">
                    {reason.title}
                  </span>
                  <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Image
            src={teamSrc}
            alt={teamAlt}
            width={1200}
            height={500}
            className="w-full rounded-lg object-cover shadow-md"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="font-body text-lg text-text-secondary">
              Ready to work with a roofing contractor you can trust? Call us
              today for your free roof repair estimate.
          </p>
          <div className="mt-4">
            <PhoneNumber
              size="lg"
              className="text-copper hover:text-copper-dark"
            />
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
