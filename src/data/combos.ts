import { z } from 'zod';
import { ComboSchema } from '@/lib/schemas';
import type { Combo } from '@/lib/types';
import { services } from './services';
import { cities } from './cities';
import { generateComboSlug } from '@/lib/slug-utils';
import { buildComboDescription } from '@/lib/seo-utils';

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

      // Build enriched meta description with pricing + differentiators
      const metaDescription = buildComboDescription(service, city);

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
