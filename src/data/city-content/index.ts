import type { CityContent } from '@/lib/types';

// ─── Content aggregator ─────────────────────────────────────────────────────
// Content files will be added in plans 04-02 through 04-06.
// Each file exports a CityContent[] array which gets spread into allContent.

const allContent: CityContent[] = [];

// ─── Map-based O(1) lookup ──────────────────────────────────────────────────

const contentMap = new Map<string, CityContent>(
  allContent.map((c) => [c.cityId, c])
);

// ─── Public API ─────────────────────────────────────────────────────────────

export function getCityContent(cityId: string): CityContent {
  const content = contentMap.get(cityId);
  if (!content) {
    throw new Error(`Missing content for city: ${cityId}`);
  }
  return content;
}
