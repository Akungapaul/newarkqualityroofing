import type { ComboContent } from './schema';
import { newarkComboContent } from './newark';
import { montclairComboContent } from './montclair';
import { bloomfieldComboContent } from './bloomfield';
import { eastOrangeComboContent } from './east-orange';
import { caldwellComboContent } from './caldwell';
import { millburnComboContent } from './millburn';

// ─── Content aggregator ─────────────────────────────────────────────────────
// All combo content objects from city batch files, collected here.
// Newark (65) + Montclair (5) + Bloomfield (5) + East Orange (5) + Caldwell (5) + Millburn (5) = 90 total
// Validation happens per-city-batch in each city's index.ts (Zod z.array().parse()).

const allContent: ComboContent[] = [
  ...newarkComboContent,
  ...montclairComboContent,
  ...bloomfieldComboContent,
  ...eastOrangeComboContent,
  ...caldwellComboContent,
  ...millburnComboContent,
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
