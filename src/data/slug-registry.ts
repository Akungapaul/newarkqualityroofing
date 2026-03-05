import type { SlugEntry, PageType } from '@/lib/types';
import { services } from './services';
import { cities } from './cities';
import { combos } from './combos';
import { comparisons } from './comparisons';
import { corePages } from './core-pages';
import { generateCityPageSlug } from '@/lib/slug-utils';

// ─── Registry Builder ────────────────────────────────────────────────────────

function buildRegistry(): Map<string, SlugEntry> {
  const registry = new Map<string, SlugEntry>();
  const collisions: string[] = [];

  function register(entry: SlugEntry) {
    if (registry.has(entry.slug)) {
      const existing = registry.get(entry.slug)!;
      collisions.push(
        `Slug "${entry.slug}" collision: ${existing.type} vs ${entry.type}`
      );
    }
    registry.set(entry.slug, entry);
  }

  // Services (63)
  for (const service of services) {
    register({
      slug: service.slug,
      type: 'service',
      serviceId: service.id,
    });
  }

  // Cities (21) -- use "roofing-in-{city}-nj" pattern to avoid collisions
  for (const city of cities) {
    register({
      slug: generateCityPageSlug(city.slug),
      type: 'city',
      cityId: city.id,
    });
  }

  // Combos (1,323 = 63 services x 21 cities)
  for (const combo of combos) {
    register({
      slug: combo.slug,
      type: 'combo',
      serviceId: combo.serviceId,
      cityId: combo.cityId,
    });
  }

  // Comparisons (30)
  for (const comparison of comparisons) {
    register({
      slug: comparison.slug,
      type: 'comparison',
      comparisonId: comparison.id,
    });
  }

  // Core Pages (7)
  for (const corePage of corePages) {
    register({
      slug: corePage.slug,
      type: 'core',
      corePageId: corePage.id,
    });
  }

  // Collision detection -- throw at module load (build time)
  if (collisions.length > 0) {
    throw new Error(
      `Slug collisions detected:\n${collisions.join('\n')}`
    );
  }

  return registry;
}

// ─── Singleton Registry ──────────────────────────────────────────────────────

const registry = buildRegistry();

// ─── Public API ──────────────────────────────────────────────────────────────

/** Get all registered slugs */
export function getAllSlugs(): string[] {
  return Array.from(registry.keys());
}

/** O(1) lookup by slug, returns undefined for unknown slugs */
export function getPageDataBySlug(slug: string): SlugEntry | undefined {
  return registry.get(slug);
}

/** Total number of registered slugs */
export function getSlugCount(): number {
  return registry.size;
}

/** Get all slugs filtered by page type */
export function getSlugsByType(type: PageType): SlugEntry[] {
  return Array.from(registry.values()).filter((entry) => entry.type === type);
}
