import Image from 'next/image';
import Link from 'next/link';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { getHomepageImage } from '@/data/image-manifest';

// Each bullet links to its service page so the residential/commercial fork
// passes real link equity down to the services it names (not just the hubs).
const residentialBullets: Array<{ text: string; href: string }> = [
  { text: 'Asphalt shingle, slate, metal, and tile roof installations', href: '/asphalt-shingle-roofing-in-newark-nj' },
  { text: 'Storm damage repair and emergency leak response', href: '/emergency-roof-repair-in-newark-nj' },
  { text: 'Roof inspections, maintenance programs, and gutter work', href: '/roof-inspection-in-newark-nj' },
  { text: 'Insurance claim coordination for covered replacements', href: '/insurance-roof-replacement-in-newark-nj' },
];

const commercialBullets: Array<{ text: string; href: string }> = [
  { text: 'TPO, EPDM, PVC, and modified bitumen flat roof systems', href: '/tpo-roofing-installation-in-newark-nj' },
  { text: 'Commercial roof repair with minimal business disruption', href: '/commercial-roof-repair-in-newark-nj' },
  { text: 'Thermal imaging inspections and leak detection', href: '/roof-thermal-imaging-inspections-in-newark-nj' },
  { text: 'Energy-efficient roofing and silicone coating solutions', href: '/silicone-roof-coating-in-newark-nj' },
];

export function HomeResidentialCommercial() {
  const residentialImg = getHomepageImage('residential-split');
  const residentialSrc = residentialImg?.path ?? '/images/residential-roof-repair-newark.jpg';
  const residentialAlt = residentialImg?.alt ?? 'Residential roof repair project in Newark NJ';

  const commercialImg = getHomepageImage('commercial-split');
  const commercialSrc = commercialImg?.path ?? '/images/commercial-roofing-newark.jpg';
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
          Roofing for Homes and Businesses in Essex County
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
              Residential Roofing We Provide
            </h3>
            <ul className="mt-4 space-y-2.5">
              {residentialBullets.map((item) => (
                <li key={item.href} className="flex items-start gap-3 font-body text-base text-text-secondary">
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
                  <Link href={item.href} className="transition-colors hover:text-copper-dark hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-md bg-forest/5 px-4 py-3">
              <p className="font-body text-sm font-medium text-forest">
                Most repairs: $350&ndash;$1,500 | Full replacement: $8,500&ndash;$25,000+
              </p>
              <p className="mt-1 font-body text-xs text-text-secondary">
                Free estimates &mdash; no obligation
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/residential-roofing"
                className="inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3 font-heading text-base font-semibold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
              >
                Explore Residential Roofing
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
              Commercial Roofing We Provide
            </h3>
            <ul className="mt-4 space-y-2.5">
              {commercialBullets.map((item) => (
                <li key={item.href} className="flex items-start gap-3 font-body text-base text-text-secondary">
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
                  <Link href={item.href} className="transition-colors hover:text-copper-dark hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-md bg-forest/5 px-4 py-3">
              <p className="font-body text-sm font-medium text-forest">
                Commercial systems: $6&ndash;$16/sq ft | Coatings from $3/sq ft
              </p>
              <p className="mt-1 font-body text-xs text-text-secondary">
                Free estimates &mdash; no obligation
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/commercial-roofing"
                className="inline-flex items-center gap-2 rounded-md bg-copper px-6 py-3 font-heading text-base font-semibold text-text-on-copper transition-colors hover:bg-copper-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2"
              >
                Explore Commercial Roofing
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
