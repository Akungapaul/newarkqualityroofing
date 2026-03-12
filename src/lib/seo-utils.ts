// ─── SEO Description Builders ────────────────────────────────────────────────
// Enriched meta descriptions with pricing, differentiators, and city context.
// All enforce 160-char max with tiered fallbacks.

import { PRICING } from '@/data/content-constants';
import type { Service, CityContent } from '@/lib/types';
import type { City } from '@/lib/types';

const DIFFERENTIATORS = 'NJ licensed, GAF Certified, 0% financing';

/** Trim to 160 chars, cutting at last full word */
function cap(text: string, max = 160): string {
  if (text.length <= max) return text;
  const trimmed = text.slice(0, max);
  const lastSpace = trimmed.lastIndexOf(' ');
  return lastSpace > 80 ? trimmed.slice(0, lastSpace) + '…' : trimmed.slice(0, max - 1) + '…';
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
  const t2 = `Professional ${svc} in ${city.name}, NJ. ${DIFFERENTIATORS}. Same-day estimates. Call now.`;
  if (t2.length <= 160) return t2;

  // Tier 3: minimal
  return cap(`${service.name} in ${city.name}, NJ. Licensed Essex County roofers. Free estimates.`);
}

// ─── Service Descriptions ───────────────────────────────────────────────────

export function buildServiceDescription(service: Service): string {
  const pricing = PRICING[service.id as keyof typeof PRICING];
  const svc = service.name.toLowerCase();

  // Tier 1: pricing + service-specific + differentiators
  if (pricing) {
    const t1 = `${service.name} in Newark, NJ from ${pricing.range}. ${DIFFERENTIATORS}. Same-day estimates for Essex County.`;
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
  const t1 = `Top-rated roofers in ${city.name}, NJ serving ${neighborhoodNames} & more. ${DIFFERENTIATORS}. Free estimates.`;
  if (t1.length <= 160) return t1;

  // Tier 2: no neighborhoods
  const t2 = `Trusted roofing contractor in ${city.name}, NJ. ${DIFFERENTIATORS}. Same-day estimates for repair, replacement & installation.`;
  if (t2.length <= 160) return t2;

  // Tier 3: minimal
  return cap(`Roofing services in ${city.name}, NJ. Licensed & insured Essex County roofers. Free estimates.`);
}
