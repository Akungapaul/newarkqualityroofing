import Link from 'next/link';
import { generateServicePageSlug } from '@/lib/slug-utils';
import { services } from '@/data/services';
import { AnimateIn } from '@/components/animations/AnimateIn';
import { StaggerGrid, StaggerItem } from '@/components/animations/StaggerGrid';
import { HEADING_CONFIG } from '@/data/heading-config';

// Gradient backgrounds for visual variety per card
const cardGradients: string[] = [
  'from-forest-dark/95 via-forest/80 to-forest-dark/90',
  'from-forest/90 via-forest-dark/85 to-forest/95',
  'from-forest-dark/90 via-forest/75 to-copper/20',
];

/**
 * Curated service slugs for a balanced 4+4 residential/commercial grid.
 * One representative service per major category to showcase breadth.
 */
const residentialSlugs = [
  'roof-repair',                    // repair-maintenance
  'asphalt-shingle-roofing',        // residential-roof-types
  'gutter-installation-repair',     // components-specialty
  'roof-replacement',               // replacement-sub-pages
];

const commercialSlugs = [
  'tpo-roofing-installation',       // commercial-roof-types
  'commercial-roof-installation',   // commercial-services
  'energy-efficient-roofing-solutions', // energy-solar
  'epdm-commercial-roofing',        // commercial-roof-types
];

/** Look up a service by slug from the validated services array. */
function getServicesBySlug(slugs: string[]) {
  const slugSet = new Set(slugs);
  const found = services.filter((s) => slugSet.has(s.slug));
  // Preserve the curated order
  return slugs
    .map((slug) => found.find((s) => s.slug === slug))
    .filter((s) => s !== undefined);
}

function ServiceCard({
  name,
  slug,
  shortDescription,
  index,
}: {
  name: string;
  slug: string;
  shortDescription: string;
  index: number;
}) {
  const gradient = cardGradients[index % cardGradients.length];

  return (
    <Link
      href={`/${generateServicePageSlug(slug)}`}
      className={`group relative block overflow-hidden rounded-lg bg-gradient-to-br ${gradient} p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      {/* Decorative diagonal accent */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rotate-45 bg-copper/10 transition-transform duration-300 group-hover:rotate-[55deg]"
        aria-hidden="true"
      />
      <span className="relative block font-heading text-xl font-bold text-text-on-dark">
        {name}
      </span>
      <span className="relative mt-2 block line-clamp-2 font-body text-sm leading-relaxed text-parchment/75">
        <em>{shortDescription}</em>
      </span>
      <span className="relative mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-copper-light transition-colors group-hover:text-copper">
        Learn more
        <svg
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

export function ServicesGrid() {
  const residentialServices = getServicesBySlug(residentialSlugs);
  const commercialServices = getServicesBySlug(commercialSlugs);

  const coreH3s = HEADING_CONFIG.home.coreH3s;

  return (
    <section className="bg-parchment py-16 lg:py-24" aria-labelledby="services-heading">
      <AnimateIn>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2
              id="services-heading"
              className="font-heading text-3xl font-bold text-forest sm:text-4xl"
            >
              {HEADING_CONFIG.home.coreH2}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
              From emergency repairs to complete replacements, we deliver expert
              craftsmanship for every residential and commercial roofing project
              across Newark and Essex County.
            </p>
          </div>

          {/* §4.1 Core service H3s — the seven core roofing services we provide */}
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {coreH3s.map((question) => (
              <li key={question} className="flex items-start gap-3 rounded-lg border border-border bg-white p-5 shadow-sm">
                <span
                  className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-copper/15 text-copper"
                  aria-hidden="true"
                >
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                </span>
                <h3 className="font-heading text-lg font-semibold text-forest">
                  {question}
                </h3>
              </li>
            ))}
          </ul>

          {/* Curated residential + commercial service cards for direct internal linking */}
          <StaggerGrid className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[...residentialServices, ...commercialServices].map((service, i) => (
              <StaggerItem key={service.id}>
                <ServiceCard
                  name={service.name}
                  slug={service.slug}
                  shortDescription={service.shortDescription}
                  index={i}
                />
              </StaggerItem>
            ))}
          </StaggerGrid>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md border-2 border-forest bg-transparent px-8 py-3 font-heading text-lg font-semibold text-forest transition-colors hover:bg-forest hover:text-text-on-dark"
            >
              View All Services
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </AnimateIn>
    </section>
  );
}
