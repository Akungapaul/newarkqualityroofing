import Image from 'next/image';
import Link from 'next/link';
import { WHY_CHOOSE_US_REASONS } from '@/data/content-constants';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

const reasonImages: Record<number, { src: string; alt: string } | null> = {
  0: { src: '/images/nj-licensed-contractor.jpg', alt: 'NJ licensed contractor certification' },
  1: { src: '/images/essex-county-experience.jpg', alt: '15 years Essex County experience' },
  3: { src: '/images/manufacturer-warranty.jpg', alt: 'manufacturer warranty certificate' },
};

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
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-copper/10 font-heading text-sm font-bold text-copper"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div>
                  <span className="block font-heading text-lg font-bold text-forest">
                    {reason.title}
                  </span>
                  <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                    {reason.description}
                  </p>
                  {reasonImages[index] && (
                    <Image
                      src={reasonImages[index]!.src}
                      alt={reasonImages[index]!.alt}
                      width={200}
                      height={140}
                      className="mt-3 rounded shadow-sm"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <Image
            src={teamSrc}
            alt={teamAlt}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, 450px"
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
