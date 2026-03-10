import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

const residentialBullets = [
  'Asphalt shingle, slate, metal, and tile roof installations',
  'Storm damage repair and emergency leak response',
  'Roof inspections, maintenance programs, and gutter work',
  'Insurance claim coordination for covered replacements',
];

const commercialBullets = [
  'TPO, EPDM, PVC, and modified bitumen flat roof systems',
  'Commercial roof repair with minimal business disruption',
  'Thermal imaging inspections and leak detection',
  'Energy-efficient roofing and silicone coating solutions',
];

export function HomeResidentialCommercial() {
  const residentialImg = getHomepageImage('residential-split');
  const residentialSrc = residentialImg?.path ? `/${residentialImg.path}` : '/images/residential-roof-repair-newark.jpg';
  const residentialAlt = residentialImg?.alt ?? 'Residential roof repair project in Newark NJ';

  const commercialImg = getHomepageImage('commercial-split');
  const commercialSrc = commercialImg?.path ? `/${commercialImg.path}` : '/images/commercial-roofing-newark.jpg';
  const commercialAlt = commercialImg?.alt ?? 'Commercial roofing system installation in Newark NJ';

  return (
    <section
      className="bg-parchment py-16 lg:py-24"
      aria-labelledby="res-comm-heading"
    >
      <AnimateIn className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <h2
          id="res-comm-heading"
          className="mb-12 text-center font-heading text-3xl font-bold text-forest sm:text-4xl"
        >
          Serving Homeowners &amp; Businesses Across Essex County
        </h2>

        {/* 50/50 grid */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Residential */}
          <div className="flex flex-col">
            <div className="photo-treatment aspect-[4/3] overflow-hidden">
              <Image
                src={residentialSrc}
                alt={residentialAlt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold text-forest">
              For Homeowners
            </h3>
            <ul className="mt-4 space-y-2.5">
              {residentialBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-base text-text-secondary">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/residential-roof-installation"
                className="inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3 font-heading text-base font-semibold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
              >
                Residential Services
                <svg
                  className="h-4 w-4"
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

          {/* Right: Commercial */}
          <div className="flex flex-col">
            <div className="photo-treatment aspect-[4/3] overflow-hidden">
              <Image
                src={commercialSrc}
                alt={commercialAlt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <h3 className="mt-6 font-heading text-2xl font-bold text-forest">
              For Businesses
            </h3>
            <ul className="mt-4 space-y-2.5">
              {commercialBullets.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-base text-text-secondary">
                  <svg
                    className="mt-1 h-4 w-4 shrink-0 text-copper"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link
                href="/commercial-roof-installation"
                className="inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3 font-heading text-base font-semibold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
              >
                Commercial Services
                <svg
                  className="h-4 w-4"
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
        </div>
      </AnimateIn>
    </section>
  );
}
