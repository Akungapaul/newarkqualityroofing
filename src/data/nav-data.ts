import { services } from './services';
import { cities } from './cities';
import { generateCityPageSlug } from '@/lib/slug-utils';

// ─── Plain interfaces (no Zod — safe for client components) ─────────────────

export interface NavServiceItem {
  name: string;
  slug: string;
}

export interface NavServiceGroup {
  category: string;
  categoryLabel: string;
  services: NavServiceItem[];
}

export interface NavCityItem {
  name: string;
  slug: string;
}

// ─── Category label mapping ─────────────────────────────────────────────────

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

// ─── Category display order ─────────────────────────────────────────────────

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

// ─── Getters (called in server components, results passed as props) ─────────

export function getServiceMenuGroups(): NavServiceGroup[] {
  const grouped = new Map<string, NavServiceItem[]>();

  for (const service of services) {
    const existing = grouped.get(service.category) ?? [];
    existing.push({ name: service.name, slug: service.slug });
    grouped.set(service.category, existing);
  }

  return categoryOrder
    .filter((cat) => grouped.has(cat))
    .map((cat) => ({
      category: cat,
      categoryLabel: categoryLabels[cat] ?? cat,
      services: grouped.get(cat)!,
    }));
}

export function getCityMenuItems(): NavCityItem[] {
  return cities.map((city) => ({
    name: `${city.name}, ${city.state}`,
    slug: generateCityPageSlug(city.slug),
  }));
}
