import Link from 'next/link';
import Image from 'next/image';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { comparisons } from '@/data/comparisons';
import { generateCityPageSlug } from '@/lib/slug-utils';

// ─── Curated residential services for footer ────────────────────────────────

const residentialFooterSlugs = [
  'roof-repair',
  'roof-replacement',
  'asphalt-shingle-roofing',
  'metal-roof-installation-repair',
  'slate-roof-installation-repair',
  'roof-inspection',
  'storm-damage-roof-repair',
  'gutter-installation-repair',
  'skylight-installation-repair',
  'roof-maintenance-programs',
];

// ─── Curated commercial services for footer ─────────────────────────────────

const commercialFooterSlugs = [
  'commercial-roof-installation',
  'commercial-roof-repair',
  'commercial-roof-replacement',
  'tpo-roofing-installation',
  'epdm-commercial-roofing',
  'flat-roof-installation-repair',
  'roof-thermal-imaging-inspections',
  'silicone-roof-coating',
  'energy-efficient-roofing-solutions',
  'roof-waterproofing',
];

// ─── Curated comparison links for footer ────────────────────────────────────

const footerComparisonSlugs: { category: string; label: string; slugs: string[] }[] = [
  {
    category: 'material-vs-material',
    label: 'Materials',
    slugs: [
      'asphalt-shingles-vs-metal-roofing',
      'slate-vs-tile-roofing',
      'tpo-vs-epdm-roofing',
      'architectural-vs-3-tab-shingles',
    ],
  },
  {
    category: 'service-vs-service',
    label: 'Services',
    slugs: [
      'roof-repair-vs-replacement',
      'roof-overlay-vs-tear-off',
      'diy-vs-professional-roof-repair',
    ],
  },
  {
    category: 'decision-helper',
    label: 'Decisions',
    slugs: [
      'best-roofing-material-nj-weather',
      'best-roofing-for-flat-roofs',
      'cheapest-vs-most-durable-roofing',
    ],
  },
];

/** Look up services by slug in the validated array */
function getServiceLinksBySlugs(slugs: string[]) {
  const slugSet = new Set(slugs);
  const found = services.filter((s) => slugSet.has(s.slug));
  return slugs
    .map((slug) => found.find((s) => s.slug === slug))
    .filter((s) => s !== undefined)
    .map((s) => ({ name: s.name, slug: s.slug }));
}

// ─── Footer component (server component) ───────────────────────────────────

export function Footer() {
  const cityLinks = cities.map((city) => ({
    name: city.name,
    slug: generateCityPageSlug(city.slug),
    state: city.state,
  }));

  const residentialServiceLinks = getServiceLinksBySlugs(residentialFooterSlugs);
  const commercialServiceLinks = getServiceLinksBySlugs(commercialFooterSlugs);

  // Build comparison lookup
  const comparisonBySlug = new Map(comparisons.map((c) => [c.slug, c]));
  const footerGuideLinks = footerComparisonSlugs.map((group) => ({
    ...group,
    items: group.slugs
      .map((slug) => comparisonBySlug.get(slug))
      .filter((c) => c !== undefined)
      .map((c) => ({ name: c.name, slug: c.slug })),
  }));

  return (
    <footer className="bg-forest-dark text-text-on-dark" role="contentinfo">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Company info + NAP */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark"
            >
              <Image
                src="/logo.svg"
                alt="Newark Quality Roofing"
                width={220}
                height={38}
                className="h-9 w-auto transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>

            {/* NAP (Name, Address, Phone) */}
            <address className="mt-4 space-y-2 not-italic">
              <p className="font-body text-sm text-parchment/70">
                123 Main Street<br />
                Newark, NJ 07102
              </p>
              <a
                href="tel:+19735550123"
                className="block font-heading text-lg font-semibold text-copper-light transition-colors duration-200 hover:text-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
              >
                (973) 555-0123
              </a>
            </address>

            {/* Trust signals */}
            <div className="mt-6 space-y-2">
              {['Licensed & Insured', 'Free Estimates', '24/7 Emergency Service'].map(
                (signal) => (
                  <div key={signal} className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 flex-shrink-0 text-copper"
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
                    <span className="font-body text-sm font-medium text-parchment/80">
                      {signal}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Social placeholders */}
            <div className="mt-6 flex gap-3">
              {['Facebook', 'Instagram', 'Google'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md bg-forest/50 text-parchment/60 transition-all duration-200 hover:bg-copper hover:text-text-on-copper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  aria-label={`Follow us on ${platform}`}
                >
                  <span className="font-heading text-xs font-bold">
                    {platform[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Service areas (cities) */}
          <div>
            <span className="mb-4 block font-heading text-sm font-bold uppercase tracking-widest text-copper">
              Service Areas
            </span>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {cityLinks.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="font-body text-sm text-parchment/70 transition-colors duration-150 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Roofing Guides */}
          <div>
            <span className="mb-4 block font-heading text-sm font-bold uppercase tracking-widest text-copper">
              Roofing Guides
            </span>
            <div className="space-y-4">
              {footerGuideLinks.map((group) => (
                <div key={group.category}>
                  <span className="mb-1.5 block font-heading text-xs font-bold uppercase tracking-wider text-parchment/50">
                    {group.label}
                  </span>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/${item.slug}`}
                          className="font-body text-sm text-parchment/70 transition-colors duration-150 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Services (Residential) */}
          <div>
            <span className="mb-4 block font-heading text-sm font-bold uppercase tracking-widest text-copper">
              Services (Residential)
            </span>
            <ul className="space-y-0.5">
              {residentialServiceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="font-body text-sm text-parchment/70 transition-colors duration-150 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Services (Commercial) */}
          <div>
            <span className="mb-4 block font-heading text-sm font-bold uppercase tracking-widest text-copper">
              Services (Commercial)
            </span>
            <ul className="space-y-0.5">
              {commercialServiceLinks.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="font-body text-sm text-parchment/70 transition-colors duration-150 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mini lead form placeholder */}
        <div className="mt-12 rounded-lg border border-forest-light/20 bg-forest/40 p-6 text-center">
          <p className="font-heading text-lg font-semibold text-parchment">
            Ready for a Free Estimate?
          </p>
          <p className="mt-1 font-body text-sm text-parchment/60">
            Contact us today for a no-obligation inspection and quote.
          </p>
          <Link
            href="#lead-form"
            className="mt-4 inline-block rounded-md bg-copper px-6 py-2.5 font-heading text-sm font-bold tracking-wide text-text-on-copper shadow-md transition-all duration-200 hover:bg-copper-dark hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-light focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest-light/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="font-body text-xs text-parchment/50">
            &copy; 2026 Newark Quality Roofing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-body text-xs text-parchment/50 transition-colors duration-150 hover:text-parchment/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-body text-xs text-parchment/50 transition-colors duration-150 hover:text-parchment/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              Terms of Service
            </Link>
            <Link
              href="/resources"
              className="font-body text-xs text-parchment/50 transition-colors duration-150 hover:text-parchment/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              Resources
            </Link>
            <Link
              href="/sitemap.xml"
              className="font-body text-xs text-parchment/50 transition-colors duration-150 hover:text-parchment/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
