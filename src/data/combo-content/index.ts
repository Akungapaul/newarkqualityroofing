import type { ComboContent } from './schema';

// ─── Content aggregator ─────────────────────────────────────────────────────
// All combo content objects from city batch files, collected here.
// Validation happens per-city-batch in each city's index.ts (not here on empty array).

// City imports added as content is authored
// Example: import { newarkComboContent } from './newark';

const allContent: ComboContent[] = [
  // ...newarkComboContent,
];

// ─── Map-based O(1) lookup ──────────────────────────────────────────────────

const contentMap = new Map<string, ComboContent>(
  allContent.map((c) => [`${c.serviceId}:${c.cityId}`, c])
);

// ─── Public API ─────────────────────────────────────────────────────────────

export function getComboContent(serviceId: string, cityId: string): ComboContent {
  const content = contentMap.get(`${serviceId}:${cityId}`);
  if (!content) {
    throw new Error(`Missing combo content for service="${serviceId}" city="${cityId}"`);
  }
  return content;
}

export function getAllComboContent(): ComboContent[] {
  return allContent;
}
