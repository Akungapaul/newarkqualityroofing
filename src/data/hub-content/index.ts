import { z } from 'zod';
import { HubContentSchema, type HubContent } from './schema';
import { residentialRoofingHubContent } from './residential-roofing';
import { commercialRoofingHubContent } from './commercial-roofing';
import { flatRoofSystemsHubContent } from './flat-roof-systems';
import { roofingMaterialsHubContent } from './roofing-materials';
import { freeRoofingEstimateHubContent } from './free-roofing-estimate';
import { ourRoofingProcessHubContent } from './our-roofing-process';

// ─── Runtime Validation ─────────────────────────────────────────────────────
// All 6 FLAT hub content objects validated at module level. Build crashes on
// invalid data — no silent failures (mirrors comparison-content/index.ts).

const allContent: HubContent[] = z.array(HubContentSchema).parse([
  residentialRoofingHubContent,
  commercialRoofingHubContent,
  flatRoofSystemsHubContent,
  roofingMaterialsHubContent,
  freeRoofingEstimateHubContent,
  ourRoofingProcessHubContent,
]);

// ─── Map-based O(1) Lookup ──────────────────────────────────────────────────

const contentMap = new Map<string, HubContent>(allContent.map((c) => [c.hubId, c]));

// ─── Public API ─────────────────────────────────────────────────────────────

export function getHubContent(hubId: string): HubContent {
  const content = contentMap.get(hubId);
  if (!content) {
    throw new Error(`Missing hub content for hubId="${hubId}"`);
  }
  return content;
}

export function getAllHubContent(): HubContent[] {
  return allContent;
}
