import { services } from './services';
import { cities } from './cities';
import { comparisons } from './comparisons';
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

export interface NavComparisonItem {
  name: string;
  slug: string;
}

export interface NavComparisonGroup {
  category: string;
  categoryLabel: string;
  comparisons: NavComparisonItem[];
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
    name: `Roofing in ${city.name}`,
    slug: generateCityPageSlug(city.slug),
  }));
}

// ─── Comparison nav data ────────────────────────────────────────────────────

const comparisonCategoryLabels: Record<string, string> = {
  'material-vs-material': 'Material Comparisons',
  'service-vs-service': 'Service Comparisons',
  'decision-helper': 'Decision Guides',
};

const comparisonCategoryOrder: string[] = [
  'material-vs-material',
  'service-vs-service',
  'decision-helper',
];

export function getComparisonMenuGroups(): NavComparisonGroup[] {
  const grouped = new Map<string, NavComparisonItem[]>();

  for (const comparison of comparisons) {
    const existing = grouped.get(comparison.category) ?? [];
    existing.push({ name: comparison.name, slug: comparison.slug });
    grouped.set(comparison.category, existing);
  }

  return comparisonCategoryOrder
    .filter((cat) => grouped.has(cat))
    .map((cat) => ({
      category: cat,
      categoryLabel: comparisonCategoryLabels[cat] ?? cat,
      comparisons: grouped.get(cat)!,
    }));
}
