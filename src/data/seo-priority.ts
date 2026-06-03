import type { City, Service } from '@/lib/types';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { generateComboSlug } from '@/lib/slug-utils';
import { isKeep } from '@/data/url-classification';

export const PRIORITY_SERVICE_IDS = [
  'roof-repair',
  'roof-leak-repair',
  'emergency-roof-repair',
  'roof-replacement',
  'flat-roof-installation-repair',
  'commercial-roof-repair',
  'commercial-roof-installation',
  'gutter-installation-repair',
  'gutter-guard-installation',
  'modified-bitumen-roofing',
  'built-up-roofing',
  'green-roof-installation',
  'tpo-roofing-installation',
  'epdm-commercial-roofing',
] as const;

export const PRIORITY_CITY_IDS = [
  'newark',
  'east-orange',
  'bloomfield',
  'montclair',
  'belleville',
  'irvington',
  'south-orange',
  'west-orange',
  'maplewood',
  'livingston',
] as const;

// Hand-curated priority intent, keyed serviceId:cityId. This is the WISH list;
// the exported PRIORITY_COMBO_PAIRS below is reconciled down to the 255 KEEP set
// (D-08) so no NOINDEX/CONSOLIDATE combo can ever be priority-boosted.
const RAW_PRIORITY_COMBO_PAIRS = [
  'roof-repair:newark',
  'roof-leak-repair:newark',
  'emergency-roof-repair:newark',
  'roof-replacement:newark',
  'flat-roof-installation-repair:newark',
  'commercial-roof-repair:newark',
  'commercial-roof-installation:newark',
  'gutter-guard-installation:belleville',
  'green-roof-installation:newark',
  'modified-bitumen-roofing:newark',
  'built-up-roofing:newark',
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

// D-08: PRIORITY_COMBO_PAIRS ⊆ the 255 KEEP set. Each raw pair is mapped to its
// combo slug and DROPPED unless isKeep(slug). 4 NOINDEX pairs (gutter-guard@belleville,
// green-roof@newark, modified-bitumen@newark, built-up@newark) are reconciled out.
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
