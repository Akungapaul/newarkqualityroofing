import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { comparisons } from '@/data/comparisons';
import { articles, type Article } from '@/data/articles';
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

export interface ArticleLinks {
  moneyPage: { name: string; slug: string };
  nextArticle: { title: string; slug: string } | null;
  prevArticle: { title: string; slug: string } | null;
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
const serviceById = new Map<string, Service>(services.map((s) => [s.id, s]));
const comparisonById = new Map(comparisons.map((c) => [c.id, c]));

// Article lookup maps -- built once at module load
const articlesByParent = new Map<string, Article[]>();
for (const article of articles) {
  const key = `${article.parentType}:${article.parentId}`;
  const existing = articlesByParent.get(key) ?? [];
  existing.push(article);
  articlesByParent.set(key, existing);
}
// Sort by position within each parent group
for (const group of articlesByParent.values()) {
  group.sort((a, b) => a.position - b.position);
}

const articleById = new Map<string, Article>(
  articles.map((a) => [a.id, a])
);

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

// ─── Related-category affinity map ──────────────────────────────────────────
// For each category, list the most closely related categories (in priority order).
// This ensures contextual linking — a roof repair page links to other repair
// services and related residential roof types, not every category on the site.
const relatedCategories: Record<string, string[]> = {
  'repair-maintenance': ['components-specialty', 'residential-roof-types'],
  'residential-roof-types': ['repair-maintenance', 'replacement-sub-pages'],
  'commercial-roof-types': ['commercial-services', 'energy-solar'],
  'components-specialty': ['repair-maintenance', 'residential-roof-types'],
  'energy-solar': ['commercial-roof-types', 'residential-roof-types'],
  'commercial-services': ['commercial-roof-types', 'energy-solar'],
  'design-consultation': ['residential-roof-types', 'replacement-sub-pages'],
  'replacement-sub-pages': ['repair-maintenance', 'residential-roof-types'],
};

/**
 * Get other services available in the same city, grouped by category.
 * Returns contextually relevant services: all from the same category,
 * plus a few from the most closely related categories.
 * Capped at ~15 total links for SEO (avoids thin duplicate link blocks).
 */
export function getRelatedServiceLinks(
  currentService: Service,
  city: City,
): GroupedRelatedServices[] {
  const MAX_SAME_CATEGORY = 5;
  const MAX_RELATED_PER_CATEGORY = 3;
  const MAX_RELATED_CATEGORIES = 2;

  const grouped = new Map<string, RelatedServiceLink[]>();

  // 1. Same category — show up to MAX_SAME_CATEGORY
  for (const service of services) {
    if (service.id === currentService.id) continue;
    if (service.category !== currentService.category) continue;

    const existing = grouped.get(service.category) ?? [];
    if (existing.length >= MAX_SAME_CATEGORY) continue;

    existing.push({
      name: service.name,
      slug: generateComboSlug(service.slug, city.slug),
      category: service.category,
    });
    grouped.set(service.category, existing);
  }

  // 2. Related categories — show up to MAX_RELATED_PER_CATEGORY from each
  const related = relatedCategories[currentService.category] ?? [];
  let relatedCategoriesAdded = 0;

  for (const relCat of related) {
    if (relatedCategoriesAdded >= MAX_RELATED_CATEGORIES) break;

    const catServices: RelatedServiceLink[] = [];
    for (const service of services) {
      if (service.category !== relCat) continue;
      if (catServices.length >= MAX_RELATED_PER_CATEGORY) break;

      catServices.push({
        name: service.name,
        slug: generateComboSlug(service.slug, city.slug),
        category: service.category,
      });
    }

    if (catServices.length > 0) {
      grouped.set(relCat, catServices);
      relatedCategoriesAdded++;
    }
  }

  return Array.from(grouped.entries())
    .map(([category, svcs]) => ({
      category,
      categoryLabel: categoryLabels[category] ?? category,
      services: svcs,
    }))
    .sort(
      (a, b) =>
        // Current category first, then by standard order
        (a.category === currentService.category ? -1 : b.category === currentService.category ? 1 : 0) ||
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

// ─── Article Link Functions ─────────────────────────────────────────────────

/**
 * Resolve the money page slug for an article's parent.
 * Service articles -> service page slug
 * Comparison articles -> comparison page slug
 * Core articles -> homepage "/"
 */
function resolveMoneyPageSlug(article: Article): string {
  switch (article.parentType) {
    case 'service': {
      const service = serviceById.get(article.parentId);
      return service ? `/${service.slug}` : '/';
    }
    case 'comparison': {
      const comparison = comparisonById.get(article.parentId);
      return comparison ? `/${comparison.slug}` : '/';
    }
    case 'core':
      return '/';
    default:
      return '/';
  }
}

/**
 * Resolve the money page display name for an article's parent.
 */
function resolveMoneyPageName(article: Article): string {
  switch (article.parentType) {
    case 'service': {
      const service = serviceById.get(article.parentId);
      return service ? service.name : 'Home';
    }
    case 'comparison': {
      const comparison = comparisonById.get(article.parentId);
      return comparison ? comparison.name : 'Home';
    }
    case 'core':
      return 'Newark Quality Roofing';
    default:
      return 'Home';
  }
}

/**
 * Get navigation links for an article: money page, next article, previous article.
 * Used by ArticleTemplate for reverse silo navigation.
 */
export function getArticleLinks(articleId: string): ArticleLinks {
  const article = articleById.get(articleId);
  if (!article) throw new Error(`Article not found: ${articleId}`);

  const key = `${article.parentType}:${article.parentId}`;
  const siblings = articlesByParent.get(key) ?? [];
  const currentIndex = siblings.findIndex((a) => a.id === articleId);

  const nextArticle =
    currentIndex < siblings.length - 1
      ? { title: siblings[currentIndex + 1].title, slug: siblings[currentIndex + 1].slug }
      : null;

  const prevArticle =
    currentIndex > 0
      ? { title: siblings[currentIndex - 1].title, slug: siblings[currentIndex - 1].slug }
      : null;

  return {
    moneyPage: {
      name: resolveMoneyPageName(article),
      slug: resolveMoneyPageSlug(article),
    },
    nextArticle,
    prevArticle,
  };
}

/**
 * Get the first (position-1) article for a given parent page.
 * Used by ServiceTemplate/ComparisonTemplate to render "Learn More" section.
 * Returns null if no articles exist for this parent.
 */
export function getMoneyPageArticle(parentId: string, parentType: string): Article | null {
  const key = `${parentType}:${parentId}`;
  const group = articlesByParent.get(key);
  if (!group || group.length === 0) return null;
  return group[0]; // position-1 article (sorted by position)
}
