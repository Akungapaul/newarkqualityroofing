import Link from 'next/link';
import { services } from '@/data/services';

// Category label mapping (duplicated for self-containment per project pattern)
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

interface CityServicesGridProps {
  cityName: string;
}

export function CityServicesGrid({ cityName }: CityServicesGridProps) {
  // Group services by category
  const grouped = new Map<string, { name: string; slug: string }[]>();
  for (const service of services) {
    const existing = grouped.get(service.category) ?? [];
    existing.push({ name: service.name, slug: service.slug });
    grouped.set(service.category, existing);
  }

  const categories = categoryOrder
    .filter((cat) => grouped.has(cat))
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat] ?? cat,
      services: grouped.get(cat)!,
    }));

  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-forest sm:text-3xl">
        Roofing Services Available in {cityName}
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="rounded-lg border border-border bg-white p-5 shadow-sm"
          >
            <h3 className="font-heading text-lg font-semibold text-forest">
              {cat.label}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {cat.services.map((service) => (
                <li key={service.slug}>
                  {/* TODO Phase 6: Update links to combo page URLs */}
                  <Link
                    href={`/${service.slug}`}
                    className="font-body text-sm text-copper transition-colors hover:text-copper-dark"
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
  );
}
