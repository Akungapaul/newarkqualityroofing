import { services } from '@/data/services';
import { PhoneNumber } from '@/components/ui/PhoneNumber';
import Link from 'next/link';

// ─── Category labels and order ──────────────────────────────────────────────

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

const categoryOrder: string[] = [
  'repair-maintenance',
  'residential-roof-types',
  'components-specialty',
  'energy-solar',
  'design-consultation',
  'replacement-sub-pages',
  'commercial-roof-types',
  'commercial-services',
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function groupByCategory(
  filtered: typeof services,
): Map<string, typeof services> {
  const grouped = new Map<string, typeof services>();
  for (const service of filtered) {
    const existing = grouped.get(service.category) ?? [];
    existing.push(service);
    grouped.set(service.category, existing);
  }
  return grouped;
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-copper transition-transform group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ─── Section component ──────────────────────────────────────────────────────

function ServiceSection({
  title,
  description,
  grouped,
  variant,
}: {
  title: string;
  description: string;
  grouped: Map<string, typeof services>;
  variant: 'residential' | 'commercial';
}) {
  const isCommercial = variant === 'commercial';

  return (
    <section
      className={`rounded-lg px-6 py-12 sm:px-10 ${
        isCommercial
          ? 'bg-forest-dark text-parchment'
          : 'bg-white'
      }`}
    >
      <h2
        className={`font-heading text-3xl font-bold ${
          isCommercial ? 'text-copper' : 'text-forest'
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-2 max-w-2xl font-body ${
          isCommercial ? 'text-parchment/80' : 'text-text-secondary'
        }`}
      >
        {description}
      </p>

      <div className="mt-10 space-y-10">
        {categoryOrder
          .filter((cat) => grouped.has(cat))
          .map((cat) => (
            <div key={cat}>
              <h3
                className={`mb-4 font-heading text-xl font-semibold ${
                  isCommercial ? 'text-parchment' : 'text-forest-dark'
                }`}
              >
                {categoryLabels[cat] ?? cat}
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped.get(cat)!.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    className={`group flex flex-col justify-between rounded-lg border p-4 transition-shadow hover:shadow-md ${
                      isCommercial
                        ? 'border-parchment/20 bg-forest/60 hover:border-copper'
                        : 'border-border bg-white hover:border-copper'
                    }`}
                  >
                    <div>
                      <h4
                        className={`font-heading text-base font-semibold ${
                          isCommercial ? 'text-parchment' : 'text-forest-dark'
                        }`}
                      >
                        {service.name}
                      </h4>
                      <p
                        className={`mt-1.5 font-body text-sm leading-relaxed ${
                          isCommercial
                            ? 'text-parchment/70'
                            : 'text-text-secondary'
                        }`}
                      >
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="mt-3 flex items-center gap-1.5 font-body text-sm font-medium text-copper">
                      Learn more
                      <ArrowIcon />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function ServicesHubPage() {
  const residentialServices = services.filter((s) => s.isResidential);
  const commercialServices = services.filter((s) => s.isCommercial);

  const residentialGrouped = groupByCategory(residentialServices);
  const commercialGrouped = groupByCategory(commercialServices);

  return (
    <div className="min-h-screen bg-parchment">
      {/* Hero */}
      <header className="px-6 pb-8 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Our Roofing Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-text-secondary">
          Comprehensive residential and commercial roofing services across Essex
          County, NJ. From emergency repairs to complete roof installations, we
          have you covered.
        </p>
      </header>

      <main className="mx-auto max-w-6xl space-y-12 px-6 pb-20">
        {/* Residential Section */}
        <ServiceSection
          title="Residential Roofing Services"
          description="Expert roofing solutions for homeowners across Essex County. Quality materials, skilled craftsmanship, and warranties you can trust."
          grouped={residentialGrouped}
          variant="residential"
        />

        {/* Commercial Section */}
        <ServiceSection
          title="Commercial Roofing Services"
          description="Industrial-grade roofing systems for businesses, warehouses, and commercial properties throughout Newark and Essex County."
          grouped={commercialGrouped}
          variant="commercial"
        />

        {/* Bottom CTA */}
        <section className="rounded-lg border border-copper/30 bg-copper/5 px-6 py-10 text-center">
          <h2 className="font-heading text-2xl font-bold text-forest">
            Not sure what you need?
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-text-secondary">
            Our roofing experts will assess your property and recommend the best
            solution for your budget and timeline. Get a free estimate today.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-block rounded-sm bg-copper px-8 py-3 font-body font-semibold text-text-on-copper transition-colors hover:bg-copper-dark"
            >
              Request a Free Estimate
            </Link>
            <PhoneNumber size="lg" />
          </div>
        </section>
      </main>
    </div>
  );
}
