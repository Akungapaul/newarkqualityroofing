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
