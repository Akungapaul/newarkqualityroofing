import type { ComboContent } from './schema';
import { newarkComboContent } from './newark';
import { montclairComboContent } from './montclair';
import { bloomfieldComboContent } from './bloomfield';
import { eastOrangeComboContent } from './east-orange';
import { caldwellComboContent } from './caldwell';
import { millburnComboContent } from './millburn';
import { glenRidgeComboContent } from './glen-ridge';
import { maplewoodComboContent } from './maplewood';
import { irvingtonComboContent } from './irvington';
import { orangeComboContent } from './orange';
import { cedarGroveComboContent } from './cedar-grove';
import { livingstonComboContent } from './livingston';
import { fairfieldComboContent } from './fairfield';
import { northCaldwellComboContent } from './north-caldwell';
import { veronaComboContent } from './verona';
import { westOrangeComboContent } from './west-orange';
import { roselandComboContent } from './roseland';
import { essexFellsComboContent } from './essex-fells';
import { southOrangeComboContent } from './south-orange';
import { bellevilleComboContent } from './belleville';
import { nutleyComboContent } from './nutley';

// ─── Content aggregator ─────────────────────────────────────────────────────
// All combo content objects from city batch files, collected here.
// 21 cities x 65 services = 1,365 total combo content objects.
// Validation happens per-city-batch in each city's index.ts (Zod z.array().parse()).
// Validation happens per-city-batch in each city's index.ts (Zod z.array().parse()).

const allContent: ComboContent[] = [
  ...newarkComboContent,
  ...montclairComboContent,
  ...bloomfieldComboContent,
  ...eastOrangeComboContent,
  ...caldwellComboContent,
  ...millburnComboContent,
  ...glenRidgeComboContent,
  ...maplewoodComboContent,
  ...irvingtonComboContent,
  ...orangeComboContent,
  ...cedarGroveComboContent,
  ...livingstonComboContent,
  ...fairfieldComboContent,
  ...northCaldwellComboContent,
  ...veronaComboContent,
  ...westOrangeComboContent,
  ...roselandComboContent,
  ...essexFellsComboContent,
  ...southOrangeComboContent,
  ...bellevilleComboContent,
  ...nutleyComboContent,
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
