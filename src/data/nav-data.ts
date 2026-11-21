import { services } from './services';
import { cities } from './cities';
import { comparisons } from './comparisons';
import { generateCityPageSlug, generateServicePageSlug, RETIRED_NEWARK_HUB_SERVICES } from '@/lib/slug-utils';
import { HEADING_CONFIG } from './heading-config';
import { getSurferPage } from '@/lib/surfer-verbatim';
import { comboSlugPhrase } from '@/lib/slug-phrase';

// ─── Plain interfaces (no Zod — safe for client components) ─────────────────

export interface NavServiceItem {
  name: string;
  slug: string;
  // Rule 9 (2026-11-20): header/footer nav anchors carry the target page's
  // full Rule 7 phrase — the exact rendered H1 of the service hub page,
  // resolved through the same chain ServiceHero uses.
  phrase: string;
}

/** Exact rendered H1 of a service hub page (mirrors ServiceHero's chain). */
export function getServicePagePhrase(service: { id: string; name: string; slug: string }): string {
  // Retired-hub services have no service page: their /{service}-newark-nj URL
  // is the Newark COMBO page, whose H1 is comboSlugPhrase(slug) (owner rule
  // 2026-10-04) — verified against the built HTML in the Rule 9 audit; the
  // service chain's name-based overrides do NOT govern those pages.
  if (RETIRED_NEWARK_HUB_SERVICES.has(service.slug)) {
    return comboSlugPhrase(generateServicePageSlug(service.slug));
  }
  return (
    getSurferPage(generateServicePageSlug(service.slug))?.h1 ??
    HEADING_CONFIG.serviceH1Overrides[service.id] ??
    HEADING_CONFIG.service.h1(service.name)
  );
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
    existing.push({ name: service.name, slug: service.slug, phrase: getServicePagePhrase(service) });
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
    // Rule 9 (2026-11-20): the Locations anchor is the city page's full
    // Rule 7 phrase (its exact H1), not "Roofing in {city}".
    name: HEADING_CONFIG.city.h1(city.name),
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
