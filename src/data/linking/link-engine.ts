import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { generateComboSlug, generateCityPageSlug } from '@/lib/slug-utils';
import type { Service, City } from '@/lib/types';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface NearbyLink {
  name: string;
  slug: string;
  label: string;
}

export interface RelatedServiceLink {
  name: string;
  slug: string;
  category: string;
}

export interface GroupedRelatedServices {
  categoryLabel: string;
  category: string;
  services: RelatedServiceLink[];
}

export interface ParentPageLinks {
  servicePage: { name: string; slug: string };
  cityPage: { name: string; slug: string };
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

// ─── Lookup maps ────────────────────────────────────────────────────────────

const cityById = new Map<string, City>(cities.map((c) => [c.id, c]));

// ─── Public API ─────────────────────────────────────────────────────────────

/**
 * Get links to the same service in adjacent cities.
 * Uses city.adjacentCityIds to find nearby cities.
 */
export function getNearbyCityLinks(service: Service, city: City): NearbyLink[] {
  return city.adjacentCityIds
    .map((adjacentId) => {
      const adjacentCity = cityById.get(adjacentId);
      if (!adjacentCity) return null;
      return {
        name: adjacentCity.name,
        slug: generateComboSlug(service.slug, adjacentCity.slug),
        label: `${service.name} in ${adjacentCity.name}`,
      };
    })
    .filter((link): link is NearbyLink => link !== null);
}

/**
 * Get other services available in the same city, grouped by category.
 * Returns top 3-5 per category, excluding the current service.
 */
export function getRelatedServiceLinks(
  currentService: Service,
  city: City,
): GroupedRelatedServices[] {
  const MAX_PER_CATEGORY = 5;

  const grouped = new Map<string, RelatedServiceLink[]>();

  for (const service of services) {
    if (service.id === currentService.id) continue;

    const existing = grouped.get(service.category) ?? [];
    if (existing.length >= MAX_PER_CATEGORY) continue;

    existing.push({
      name: service.name,
      slug: generateComboSlug(service.slug, city.slug),
      category: service.category,
    });
    grouped.set(service.category, existing);
  }

  return Array.from(grouped.entries())
    .map(([category, svcs]) => ({
      category,
      categoryLabel: categoryLabels[category] ?? category,
      services: svcs,
    }))
    .sort(
      (a, b) =>
        Object.keys(categoryLabels).indexOf(a.category) -
        Object.keys(categoryLabels).indexOf(b.category),
    );
}

/**
 * Get links to both parent pages: the service page and the city page.
 */
export function getParentPageLinks(service: Service, city: City): ParentPageLinks {
  return {
    servicePage: {
      name: service.name,
      slug: `/${service.slug}`,
    },
    cityPage: {
      name: `Roofing in ${city.name}`,
      slug: `/${generateCityPageSlug(city.slug)}`,
    },
  };
}
