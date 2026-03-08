import Image from 'next/image';
import Link from 'next/link';

export function HomeRepairServices() {
  return (
    <section
      className="bg-parchment py-16 lg:py-24"
      aria-labelledby="repair-services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2
          id="repair-services-heading"
          className="font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          Roof Repair and Roof Replacement Services
        </h2>
        <p className="mt-6 max-w-3xl font-body text-lg leading-relaxed text-text-secondary">
          Whether you need a quick fix for a leaking roof or a complete roof
          replacement, our Newark roofing contractors deliver lasting results.
          <strong>
            {' '}
            Every roof repair starts with a thorough inspection so you know
            exactly what your home needs — no guesswork, no surprises.
          </strong>{' '}
          We use premium materials from GAF, CertainTeed, and Owens Corning to
          ensure your repairs stand up to New Jersey weather for years to come.
        </p>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2">
          {/* Left column: process + emergency */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-forest">
              Our Roof Repair Process
            </h3>
            <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
              From the moment you call, we follow a proven four-step process
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
                  We assess every layer of your roof, documenting damage with
                  photos and a written report.
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
                  We recommend the best materials for your budget and roof type,
                  backed by manufacturer warranties.
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
                    Expert Repairs —
                  </span>{' '}
                  Our licensed crew completes every roof repair to code, on time,
                  and within budget.
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
                  We inspect the finished work with you and answer every
                  question before we leave.
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="font-heading text-2xl font-semibold text-forest">
                Emergency Roof Repairs — 24/7 Response
              </h3>
              <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
                Storm damage and sudden leaks do not wait for business hours —
                and neither do we.{' '}
                <em>
                  Our emergency crews are available around the clock to secure
                  your home and prevent further damage.
                </em>{' '}
                If you need urgent roof repairs in Newark or anywhere in Essex
                County, call us now.
              </p>
            </div>
          </div>

          {/* Right column: image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/roof-replacement-newark.jpg"
              alt="Roof replacement in Newark NJ by residential roofing contractors"
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
              <p className="font-heading text-sm font-semibold text-parchment/90">
                Residential roof replacement — Newark, NJ
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/roof-repair"
            className="inline-flex items-center gap-2 font-heading text-lg font-semibold text-copper transition-colors hover:text-copper-dark"
          >
            Learn more about our roof repair services
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
      </div>
    </section>
  );
}
