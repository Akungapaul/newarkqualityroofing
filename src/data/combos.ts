import { z } from 'zod';
import { ComboSchema } from '@/lib/schemas';
import type { Combo } from '@/lib/types';
import { services } from './services';
import { cities } from './cities';
import { generateComboSlug } from '@/lib/slug-utils';

// ─── Generate All Service x City Combos ─────────────────────────────────────

function buildCombos(): Combo[] {
  const result: Combo[] = [];

  for (const service of services) {
    for (const city of cities) {
      const slug = generateComboSlug(service.slug, city.slug);

      // Build meta title, ensure under 70 chars
      let metaTitle = `${service.name} in ${city.name}, NJ | Newark Quality Roofing`;
      if (metaTitle.length > 70) {
        metaTitle = `${service.name} in ${city.name}, NJ | NQR`;
      }
      if (metaTitle.length > 70) {
        metaTitle = `${service.name} in ${city.name}, NJ`;
      }

      // Build meta description, ensure under 160 chars
      let metaDescription = `Professional ${service.name.toLowerCase()} services in ${city.name}, NJ. Licensed and insured local roofers serving ${city.name} and Essex County. Free estimates.`;
      if (metaDescription.length > 160) {
        metaDescription = `${service.name.toLowerCase()} in ${city.name}, NJ. Licensed Essex County roofers. Free estimates for ${city.name} residents.`;
      }
      if (metaDescription.length > 160) {
        metaDescription = `${service.name.toLowerCase()} in ${city.name}, NJ. Licensed roofers serving Essex County. Free estimates.`;
      }

      result.push({
        slug,
        serviceId: service.id,
        cityId: city.id,
        metaTitle,
        metaDescription,
      });
    }
  }

  return result;
}

// ─── Runtime Validation ──────────────────────────────────────────────────────

export const combos: Combo[] = z.array(ComboSchema).parse(buildCombos());
