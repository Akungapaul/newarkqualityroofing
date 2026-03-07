import { z } from 'zod';
import { CityContentSchema } from '@/lib/schemas';
import type { CityContent } from '@/lib/types';
import { affluentSuburbanContent } from './affluent-suburban';
import { urbanCoreContent } from './urban-core';
import { caldwellsRoselandContent } from './caldwells-roseland';
import { westEssexContent } from './west-essex';
import { firstSuburbsContent } from './first-suburbs';

// ─── Content aggregator ─────────────────────────────────────────────────────
// All 21 city content objects from 5 regional files, Zod-validated at import.

const allContent: CityContent[] = z
  .array(CityContentSchema)
  .parse([
    ...affluentSuburbanContent,
    ...urbanCoreContent,
    ...caldwellsRoselandContent,
    ...westEssexContent,
    ...firstSuburbsContent,
  ]);

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
