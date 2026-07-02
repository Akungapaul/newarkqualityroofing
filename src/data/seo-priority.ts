import type { City, Service } from '@/lib/types';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateComboSlug } from '@/lib/slug-utils';
import { isKeep } from '@/data/url-classification';

// Demand-ranked from the NJ keyword-cluster analysis (DataForSEO NJ-geotargeted +
// GSC actuals). Cluster demand = the full New Jersey keyword-cluster volume per money
// page; "deep-cluster Tier A/B" = clusterDemand ≥ 1,000/mo. Source of truth:
// .planning/seo/demand/money-page-demand.json.
export const PRIORITY_SERVICE_IDS = [
  // Tier A — cluster demand ≥ 3,000/mo
  'roof-repair', //                     18,270
  'metal-roof-installation-repair', //   5,800
  'gutter-installation-repair', //       4,780
  'tile-roof-installation-repair', //    3,470
  // Tier B — cluster demand 1,000–2,999/mo
  'flat-roof-installation-repair', //    2,730
  'roof-replacement', //                 2,420
  'roof-replacement-cost', //            2,050
  'roof-flashing-installation-repair', // 2,010
  'slate-roof-installation-repair', //   1,950
  'roof-inspection', //                  1,660
  'roof-leak-repair', //                 1,390
  'roof-cleaning-moss-removal', //       1,300
  'rubber-roofing-epdm', //              1,300
  'asphalt-shingle-roofing', //          1,060 (narrow head; asphalt demand under-credited)
  // High-value overrides — low search volume but strong GSC traction + high lead value
  'emergency-roof-repair', //            cluster 640, GSC 135 imps (urgent intent)
  'commercial-roof-installation', //     cluster 50, GSC 118 imps (commercial high-ticket)
] as const;

// Blended local demand (NJ search volume + GSC impressions), top 10 Essex County cities.
export const PRIORITY_CITY_IDS = [
  'montclair', //   613
  'newark', //      551
  'belleville', //  293
  'east-orange', // 125
  'caldwell', //     87
  'orange', //       76
  'livingston', //   62
  'millburn', //     59
  'nutley', //       49
  'maplewood', //    49
] as const;

// Flagship service × top-demand city pairs. Newark combos are consolidated (301) into
// the service pages, so priority combos target the strongest NON-Newark Essex County
// cities (Montclair / Belleville / East Orange — all KEEP-INDEX). The exported
// PRIORITY_COMBO_PAIRS below is reconciled against the KEEP set (isKeep gate, D-08) so
// no CONSOLIDATE/301 (or any future NOINDEX) combo can ever be priority-boosted.
const RAW_PRIORITY_COMBO_PAIRS = [
  'roof-repair:montclair',
  'roof-leak-repair:montclair',
  'roof-replacement:belleville',
  'emergency-roof-repair:belleville',
  'metal-roof-installation-repair:montclair',
  'flat-roof-installation-repair:east-orange',
  'gutter-installation-repair:montclair',
  'roof-inspection:montclair',
  'commercial-roof-installation:belleville',
  'roof-flashing-installation-repair:east-orange',
  'tile-roof-installation-repair:montclair',
] as const;

/**
 * Resolve a "serviceId:cityId" pair to its combo slug via the canonical
 * slug-generation util, or undefined if either id is unknown.
 */
function comboSlugForPair(pair: string): string | undefined {
  const [serviceId, cityId] = pair.split(':');
  const service = services.find((s) => s.id === serviceId);
  const city = cities.find((c) => c.id === cityId);
  if (!service || !city) return undefined;
  return generateComboSlug(service.slug, city.slug);
}

// D-08: PRIORITY_COMBO_PAIRS ⊆ the KEEP set. Each raw pair is mapped to its combo slug
// and DROPPED unless isKeep(slug), so a redirected/noindex combo can never be
// priority-boosted. All 11 pairs above are verified KEEP as of the demand re-sync.
export const PRIORITY_COMBO_PAIRS = new Set<string>(
  RAW_PRIORITY_COMBO_PAIRS.filter((pair) => {
    const slug = comboSlugForPair(pair);
    return slug !== undefined && isKeep(slug);
  })
);

export function isPriorityService(service: Service): boolean {
  return PRIORITY_SERVICE_IDS.includes(service.id as (typeof PRIORITY_SERVICE_IDS)[number]);
}

export function isPriorityCity(city: City): boolean {
  return PRIORITY_CITY_IDS.includes(city.id as (typeof PRIORITY_CITY_IDS)[number]);
}

export function isPriorityCombo(service: Service, city: City): boolean {
  // D-08 hard floor: a combo can only be priority-boosted if it is a KEEP combo —
  // this gate covers BOTH the explicit pair set and the implicit
  // "priority service in Newark" OR clause, so no NOINDEX/redirected combo leaks
  // a priority boost (e.g. gutter-guard/green-roof/modified-bitumen/built-up @ Newark).
  if (!isKeep(generateComboSlug(service.slug, city.slug))) return false;
  return PRIORITY_COMBO_PAIRS.has(`${service.id}:${city.id}`) || (isPriorityService(service) && city.id === 'newark');
}

export function getComboSitemapPriority(service: Service, city: City): number {
  if (isPriorityCombo(service, city)) return 0.9;
  if (isPriorityService(service) && isPriorityCity(city)) return 0.75;
  if (isPriorityService(service) || isPriorityCity(city)) return 0.55;
  return 0.35;
}

export function getComboChangeFrequency(service: Service, city: City): 'weekly' | 'monthly' | 'yearly' {
  if (isPriorityCombo(service, city)) return 'weekly';
  if (isPriorityService(service) && isPriorityCity(city)) return 'monthly';
  return 'yearly';
}
