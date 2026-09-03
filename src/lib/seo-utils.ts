// ─── SEO Description Builders ────────────────────────────────────────────────
// Enriched meta descriptions with pricing, differentiators, and city context.
// All enforce 160-char max with tiered fallbacks.

import { PRICING } from '@/data/content-constants';
import type { Service, CityContent } from '@/lib/types';
import type { City } from '@/lib/types';

// D-01 / Rule 25: meta descriptions must carry only truthful, canonical-safe
// claims — never [VERIFY] trust literals (license #/status as a hard claim,
// "GAF Certified", financing, same-day hours). These differentiators are the
// non-fabricated truths also exposed via siteConfig.trustBadges.
const DIFFERENTIATORS = 'Local Essex County roofers, free estimates';

/** Trim to 160 chars, cutting at last full word */
function cap(text: string, max = 160): string {
  if (text.length <= max) return text;
  const trimmed = text.slice(0, max);
  const lastSpace = trimmed.lastIndexOf(' ');
  return lastSpace > 80 ? trimmed.slice(0, lastSpace) + '…' : trimmed.slice(0, max - 1) + '…';
}


// ─── Title Builders ─────────────────────────────────────────────────────────

/** Keep SERP titles compact while preserving service + city intent. */
export function buildComboTitle(service: Service, city: City): string {
  const candidates = [
    `${service.name} in ${city.name}, NJ | NQR`,
    `${service.name} ${city.name} NJ | NQR`,
    `${service.name} ${city.name} NJ`,
    `${service.name} | ${city.name} NJ`,
  ];

  return candidates.find((title) => title.length <= 60) ?? cap(`${service.name} ${city.name} NJ`, 60);
}

/** City page title — re-targeted onto the two money keywords (repair + installation). */
export function buildCityTitle(city: City): string {
  // "Roof Repair and Installation in {City}, NJ" — longest NJ municipality name
  // keeps this <=60 chars (North Caldwell => 50). NOTE: the visible city H1
  // drops the "in" ("Roof Repair and Installation {City}, NJ" — uniform H1
  // pattern, see heading-config.ts); the metaTitle deliberately keeps it.
  return `Roof Repair and Installation in ${city.name}, NJ`;
}

// ─── Combo Descriptions ─────────────────────────────────────────────────────

export function buildComboDescription(service: Service, city: City): string {
  const pricing = PRICING[service.id as keyof typeof PRICING];
  const svc = service.name.toLowerCase();

  // Tier 1: pricing + differentiators + city
  if (pricing) {
    const t1 = `${service.name} in ${city.name}, NJ from ${pricing.range}. ${DIFFERENTIATORS}. Free estimates for ${city.name} homeowners.`;
    if (t1.length <= 160) return t1;
  }

  // Tier 2: no pricing, shorter differentiators
  const t2 = `Professional ${svc} in ${city.name}, NJ. ${DIFFERENTIATORS}. Call for a free quote.`;
  if (t2.length <= 160) return t2;

  // Tier 3: minimal
  return cap(`${service.name} in ${city.name}, NJ. Licensed Essex County roofers. Free estimates.`);
}

// ─── Service Descriptions ───────────────────────────────────────────────────

/**
 * Per-service meta-description overrides — narrow, opt-in, one entry per page.
 *
 * The generic tiers below serve all 65 services and stay the default. A service
 * lands here only when its own page has been individually optimised and the
 * template output is measurably worse for it (e.g. the generic Tier 1 ends
 * "Serving Essex County" right after "Local Essex County roofers", spending
 * ~20 chars restating itself).
 *
 * Keep every entry <= 160 chars (audit-meta.ts) and factually true of NQR:
 * "registered" NJ Home Improvement Contractor, never "licensed".
 */
const SERVICE_DESCRIPTION_OVERRIDES: Record<string, string> = {
  // 2026-09-03, Cora Phase 1: template output was 109 chars against a 148 goal
  // and repeated Essex County twice. 152 chars / 22 words / 2 "roof repair".
  'roof-repair':
    'Roof repair in Newark, NJ from $350–$1,500. Roof leak repair, flashing, shingle and flat-roof repairs from a registered Essex County roofing contractor.',
};

export function buildServiceDescription(service: Service): string {
  const override = SERVICE_DESCRIPTION_OVERRIDES[service.id];
  if (override) return override;

  const pricing = PRICING[service.id as keyof typeof PRICING];
  const svc = service.name.toLowerCase();

  // Tier 1: pricing + service-specific + differentiators
  if (pricing) {
    const t1 = `${service.name} in Newark, NJ from ${pricing.range}. ${DIFFERENTIATORS}. Serving Essex County.`;
    if (t1.length <= 160) return t1;
  }

  // Tier 2: no pricing prefix
  const t2 = `Professional ${svc} in Newark & Essex County, NJ. ${DIFFERENTIATORS}. Free estimates available.`;
  if (t2.length <= 160) return t2;

  // Tier 3: minimal
  return cap(`${service.name} in Newark, NJ. Licensed roofers serving Essex County. Free estimates.`);
}

// ─── City Descriptions ──────────────────────────────────────────────────────

export function buildCityDescription(cityContent: CityContent, city: City): string {
  // Extract neighborhood names for local flavor
  const neighborhoodNames = cityContent.neighborhoods
    .slice(0, 3)
    .map((n) => n.name)
    .join(', ');

  // Tier 1: neighborhoods + differentiators
  const t1 = `Roofers in ${city.name}, NJ serving ${neighborhoodNames} & more. ${DIFFERENTIATORS}.`;
  if (t1.length <= 160) return t1;

  // Tier 2: no neighborhoods
  const t2 = `Roofing contractor in ${city.name}, NJ. ${DIFFERENTIATORS} for repair, replacement & installation.`;
  if (t2.length <= 160) return t2;

  // Tier 3: minimal
  return cap(`Roofing services in ${city.name}, NJ. Licensed & insured Essex County roofers. Free estimates.`);
}
