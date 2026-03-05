import Link from 'next/link';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateCityPageSlug } from '@/lib/slug-utils';

// ─── Category config for footer service display ─────────────────────────────

const footerCategories: { category: string; label: string; limit: number }[] = [
  { category: 'repair-maintenance', label: 'Repair & Maintenance', limit: 5 },
  { category: 'residential-roof-types', label: 'Residential Roofing', limit: 4 },
  { category: 'commercial-roof-types', label: 'Commercial Roofing', limit: 4 },
  { category: 'components-specialty', label: 'Components & Specialty', limit: 4 },
  { category: 'energy-solar', label: 'Energy & Solar', limit: 4 },
  { category: 'commercial-services', label: 'Commercial Services', limit: 3 },
];

// ─── Footer component (server component) ───────────────────────────────────

export function Footer() {
  const cityLinks = cities.map((city) => ({
    name: city.name,
    slug: generateCityPageSlug(city.slug),
    state: city.state,
  }));

  const servicesByCategory = footerCategories.map((cat) => ({
    ...cat,
    services: services
      .filter((s) => s.category === cat.category)
      .slice(0, cat.limit)
      .map((s) => ({ name: s.name, slug: s.slug })),
  }));

  return (
    <footer className="bg-forest-dark text-text-on-dark" role="contentinfo">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1: Company info + NAP */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper focus-visible:ring-offset-2 focus-visible:ring-offset-forest-dark"
            >
              <span className="block font-heading text-2xl font-bold tracking-tight text-parchment transition-colors duration-200 group-hover:text-copper-light">
                Newark Quality Roofing
              </span>
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
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-copper">
              Service Areas
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {cityLinks.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/${city.slug}`}
                    className="font-body text-sm text-parchment/70 transition-colors duration-150 hover:text-copper-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 3-4: Services by category */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-copper">
              Our Services
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3">
              {servicesByCategory.map((cat) => (
                <div key={cat.category}>
                  <h4 className="mb-1.5 font-heading text-xs font-bold uppercase tracking-wider text-parchment/50">
                    {cat.label}
                  </h4>
                  <ul className="space-y-0.5">
                    {cat.services.map((service) => (
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
              ))}
            </div>
          </div>
        </div>

        {/* Mini lead form placeholder */}
        <div className="mt-12 rounded-lg border border-forest-light/20 bg-forest/40 p-6 text-center">
          <p className="font-heading text-lg font-semibold text-parchment">
            Ready for a Free Roof Estimate?
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
