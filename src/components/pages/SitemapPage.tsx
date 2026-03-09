import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { corePages } from '@/data/core-pages';
import { comparisons } from '@/data/comparisons';
import { combos } from '@/data/combos';
import { generateCityPageSlug } from '@/lib/slug-utils';

// ─── Category labels for service grouping ───────────────────────────────────

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
  'commercial-roof-types',
  'components-specialty',
  'energy-solar',
  'commercial-services',
  'design-consultation',
  'replacement-sub-pages',
];

// ─── Helpers ────────────────────────────────────────────────────────────────

function groupServicesByCategory() {
  const grouped = new Map<string, typeof services>();
  for (const service of services) {
    const existing = grouped.get(service.category) ?? [];
    existing.push(service);
    grouped.set(service.category, existing);
  }
  return grouped;
}

function groupCombosByCity() {
  const grouped = new Map<string, typeof combos>();
  for (const combo of combos) {
    const existing = grouped.get(combo.cityId) ?? [];
    existing.push(combo);
    grouped.set(combo.cityId, existing);
  }
  return grouped;
}

function buildNameMaps() {
  const serviceNames = new Map<string, string>();
  for (const s of services) {
    serviceNames.set(s.id, s.name);
  }
  const cityNames = new Map<string, string>();
  for (const c of cities) {
    cityNames.set(c.id, c.name);
  }
  return { serviceNames, cityNames };
}

// ─── Main Component ─────────────────────────────────────────────────────────

export default function SitemapPage() {
  const serviceGroups = groupServicesByCategory();
  const comboGroups = groupCombosByCity();
  const { serviceNames, cityNames } = buildNameMaps();

  return (
    <div className="min-h-screen bg-parchment">
      <header className="px-6 pb-8 pt-16 text-center">
        <h1 className="font-heading text-4xl font-bold text-forest sm:text-5xl">
          Sitemap
        </h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-text-secondary">
          Browse all pages on Newark Quality Roofing. Find roofing services,
          service areas, comparisons, and resources for Essex County, NJ.
        </p>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-20">
        <nav aria-label="Sitemap">
          {/* Main Pages */}
          <section className="mb-10">
            <h2 className="mb-4 border-b border-border pb-2 font-heading text-2xl font-bold text-forest">
              Main Pages
            </h2>
            <ul className="space-y-1.5">
              <li>
                <a
                  href="/"
                  className="font-body text-copper underline-offset-2 hover:underline"
                >
                  Home
                </a>
              </li>
              {corePages.map((page) => (
                <li key={page.id}>
                  <a
                    href={`/${page.slug}`}
                    className="font-body text-copper underline-offset-2 hover:underline"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Roofing Services */}
          <section className="mb-10">
            <h2 className="mb-4 border-b border-border pb-2 font-heading text-2xl font-bold text-forest">
              Roofing Services
              <span className="ml-2 font-body text-base font-normal text-text-secondary">
                ({services.length})
              </span>
            </h2>
            <div className="space-y-6">
              {categoryOrder
                .filter((cat) => serviceGroups.has(cat))
                .map((cat) => (
                  <div key={cat}>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-forest-dark">
                      {categoryLabels[cat] ?? cat}
                    </h3>
                    <ul className="space-y-1 pl-4">
                      {serviceGroups.get(cat)!.map((service) => (
                        <li key={service.id}>
                          <a
                            href={`/${service.slug}`}
                            className="font-body text-sm text-copper underline-offset-2 hover:underline"
                          >
                            {service.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-10">
            <h2 className="mb-4 border-b border-border pb-2 font-heading text-2xl font-bold text-forest">
              Service Areas
              <span className="ml-2 font-body text-base font-normal text-text-secondary">
                ({cities.length})
              </span>
            </h2>
            <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((city) => (
                <li key={city.id}>
                  <a
                    href={`/${generateCityPageSlug(city.slug)}`}
                    className="font-body text-sm text-copper underline-offset-2 hover:underline"
                  >
                    Roofing in {city.name}, NJ
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Service Comparisons */}
          <section className="mb-10">
            <h2 className="mb-4 border-b border-border pb-2 font-heading text-2xl font-bold text-forest">
              Roofing Guides &amp; Comparisons
              <span className="ml-2 font-body text-base font-normal text-text-secondary">
                ({comparisons.length})
              </span>
            </h2>
            <div className="space-y-6">
              {[
                { category: 'material-vs-material', label: 'Material Comparisons' },
                { category: 'service-vs-service', label: 'Service Comparisons' },
                { category: 'decision-helper', label: 'Decision Guides' },
              ].map(({ category, label }) => {
                const items = comparisons.filter((c) => c.category === category);
                if (items.length === 0) return null;
                return (
                  <div key={category}>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-forest-dark">
                      {label}
                    </h3>
                    <ul className="grid gap-1.5 pl-4 sm:grid-cols-2">
                      {items.map((comparison) => (
                        <li key={comparison.id}>
                          <a
                            href={`/${comparison.slug}`}
                            className="font-body text-sm text-copper underline-offset-2 hover:underline"
                          >
                            {comparison.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Service + City Pages */}
          <section className="mb-10">
            <h2 className="mb-4 border-b border-border pb-2 font-heading text-2xl font-bold text-forest">
              Service + City Pages
              <span className="ml-2 font-body text-base font-normal text-text-secondary">
                ({combos.length})
              </span>
            </h2>
            <div className="space-y-2">
              {cities.map((city) => {
                const cityCombos = comboGroups.get(city.id);
                if (!cityCombos) return null;
                return (
                  <details key={city.id} className="rounded border border-border bg-white">
                    <summary className="cursor-pointer px-4 py-3 font-heading text-base font-semibold text-forest-dark hover:text-copper">
                      {city.name}, NJ
                      <span className="ml-2 font-body text-sm font-normal text-text-secondary">
                        ({cityCombos.length} pages)
                      </span>
                    </summary>
                    <ul className="grid gap-1 px-4 pb-4 sm:grid-cols-2">
                      {cityCombos.map((combo) => (
                        <li key={combo.slug}>
                          <a
                            href={`/${combo.slug}`}
                            className="font-body text-sm text-copper underline-offset-2 hover:underline"
                          >
                            {serviceNames.get(combo.serviceId) ?? combo.serviceId} in {cityNames.get(combo.cityId) ?? combo.cityId}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </details>
                );
              })}
            </div>
          </section>
        </nav>
      </main>
    </div>
  );
}
