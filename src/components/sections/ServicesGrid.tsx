import Link from 'next/link';
import { services } from '@/data/services';

// Category display labels for section headings
const categoryLabels: Record<string, string> = {
  'repair-maintenance': 'Repair & Maintenance',
  'residential-roof-types': 'Residential Roof Types',
  'commercial-roof-types': 'Commercial Roof Types',
  'components-specialty': 'Components & Specialty',
  'energy-solar': 'Energy & Solar',
  'commercial-services': 'Commercial Services',
  'design-consultation': 'Design & Consultation',
  'replacement-sub-pages': 'Replacement Services',
};

// Gradient backgrounds for visual variety per category
const cardGradients: string[] = [
  'from-forest-dark/95 via-forest/80 to-forest-dark/90',
  'from-forest/90 via-forest-dark/85 to-forest/95',
  'from-forest-dark/90 via-forest/75 to-copper/20',
];

/**
 * Get one representative service per category, filtered by residential or commercial.
 */
function getRepresentativeServices(isResidential: boolean) {
  const seen = new Set<string>();
  const result: typeof services = [];

  for (const service of services) {
    if (isResidential ? !service.isResidential : !service.isCommercial) continue;
    if (seen.has(service.category)) continue;
    seen.add(service.category);
    result.push(service);
  }

  return result;
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
      href={`/${slug}`}
      className={`group relative block overflow-hidden rounded-lg bg-gradient-to-br ${gradient} p-6 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
    >
      {/* Decorative diagonal accent */}
      <div
        className="absolute -right-8 -top-8 h-24 w-24 rotate-45 bg-copper/10 transition-transform duration-300 group-hover:rotate-[55deg]"
        aria-hidden="true"
      />
      <h4 className="relative font-heading text-xl font-bold text-text-on-dark">
        {name}
      </h4>
      <p className="relative mt-2 line-clamp-2 font-body text-sm leading-relaxed text-parchment/75">
        {shortDescription}
      </p>
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
  const residentialServices = getRepresentativeServices(true);
  const commercialServices = getRepresentativeServices(false);

  return (
    <section className="bg-parchment py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="services-heading"
            className="font-heading text-3xl font-bold text-forest sm:text-4xl"
          >
            Our Roofing Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
            From emergency repairs to complete roof replacements, we deliver expert
            craftsmanship for every project.
          </p>
        </div>

        {/* Residential */}
        <div className="mt-14">
          <h3 className="mb-6 font-heading text-2xl font-semibold text-forest">
            Residential Services
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {residentialServices.map((service, i) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                slug={service.slug}
                shortDescription={service.shortDescription}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Commercial */}
        <div className="mt-14">
          <h3 className="mb-6 font-heading text-2xl font-semibold text-forest">
            Commercial Services
          </h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service, i) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                slug={service.slug}
                shortDescription={service.shortDescription}
                index={i}
              />
            ))}
          </div>
        </div>

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
    </section>
  );
}
