import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

export function HomeRepairServices() {
  const repairImg = getHomepageImage('repair-services');
  const repairSrc = repairImg?.path ? `/${repairImg.path}` : '/images/roof-replacement-newark.jpg';
  const repairAlt = repairImg?.alt ?? 'completed project';

  return (
    <section
      className="bg-parchment py-16 lg:py-24"
      aria-labelledby="repair-services-heading"
    >
      <AnimateIn className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="repair-services-heading"
          className="font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          Expert Repair and Replacement Services
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-text-secondary">
          Whether you need a quick fix for a leaking roof or a{' '}
          <Link href="/roof-replacement" className="text-copper underline hover:text-copper-dark">complete replacement</Link>{' '}
          in Newark, NJ, our roofing contractors deliver lasting
          results. Every roof repair project starts with a{' '}
          <Link href="/roof-inspection" className="text-copper underline hover:text-copper-dark">thorough inspection</Link>{' '}
          so you know exactly what your home needs — no guesswork, no surprises.
          We also handle{' '}
          <Link href="/roof-leak-repair" className="text-copper underline hover:text-copper-dark">leak repairs</Link>,{' '}
          <Link href="/storm-damage-roof-repair" className="text-copper underline hover:text-copper-dark">storm damage</Link>,{' '}
          <Link href="/asphalt-shingle-roofing" className="text-copper underline hover:text-copper-dark">shingle roofing</Link>,{' '}
          <Link href="/metal-roof-installation-repair" className="text-copper underline hover:text-copper-dark">metal roofs</Link>,{' '}
          <Link href="/roof-maintenance-programs" className="text-copper underline hover:text-copper-dark">maintenance plans</Link>, and{' '}
          <Link href="/roof-waterproofing" className="text-copper underline hover:text-copper-dark">waterproofing</Link>{' '}
          across Essex County.
          Newark Quality Roofing provides reliable roofing services using premium
          materials from GAF, CertainTeed, and Owens Corning.
        </p>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Left column: process + emergency */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-forest">
              Our Four-Step Process
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              From the moment you call, we follow a <em>proven process</em>
              that keeps your home protected and the project on schedule:
            </p>
            <ul className="mt-4 space-y-3 font-body text-base text-text-secondary">
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15 font-heading text-xs font-bold text-copper"
                  aria-hidden="true"
                >
                  1
                </span>
                <span>
                  <span className="font-semibold text-forest">
                    Free Inspection —
                  </span>{' '}
                  We document damage with photos and a written report.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15 font-heading text-xs font-bold text-copper"
                  aria-hidden="true"
                >
                  2
                </span>
                <span>
                  <span className="font-semibold text-forest">
                    Material Selection —
                  </span>{' '}
                  Best materials for your budget, backed by manufacturer warranties.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15 font-heading text-xs font-bold text-copper"
                  aria-hidden="true"
                >
                  3
                </span>
                <span>
                  <span className="font-semibold text-forest">
                    Expert Work —
                  </span>{' '}
                  Licensed crew, on time, to code, within budget.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15 font-heading text-xs font-bold text-copper"
                  aria-hidden="true"
                >
                  4
                </span>
                <span>
                  <span className="font-semibold text-forest">
                    Final Walkthrough —
                  </span>{' '}
                  We inspect the finished work with you before we leave.
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="font-heading text-2xl font-semibold text-forest">
                Emergency Repairs — 24/7 Response
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
                Storm damage and sudden leaks do not wait for business hours —
                and neither do we.{' '}
                Our{' '}
                <Link href="/emergency-roof-repair" className="text-copper underline hover:text-copper-dark">emergency crews</Link>{' '}
                are available around the clock to secure
                your home and prevent further roof damage.{' '}
                If you need urgent roofing help anywhere in Newark or Essex
                County, call us now for fast, reliable roof repairs.
              </p>
            </div>
          </div>

          {/* Right column: image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src={repairSrc}
              alt={repairAlt}
              width={800}
              height={600}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Fallback gradient if image hasn't been replaced yet */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-forest/80 via-forest-dark/60 to-copper/30"
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex items-end p-6">
              <span className="block font-heading text-sm font-semibold text-parchment/90">
                Residential roofing project — Newark, NJ
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/roof-repair"
            className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-copper transition-colors hover:text-copper-dark"
          >
            Learn more
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </AnimateIn>
    </section>
  );
}
