import { z } from 'zod';
import { ComboSchema } from '@/lib/schemas';
import type { Combo } from '@/lib/types';
import { services } from './services';
import { cities } from './cities';
import { generateComboSlug } from '@/lib/slug-utils';
import { buildComboDescription, buildComboTitle } from '@/lib/seo-utils';

// ─── Generate All Service x City Combos ─────────────────────────────────────

function buildCombos(): Combo[] {
  const result: Combo[] = [];

  for (const service of services) {
    for (const city of cities) {
      const slug = generateComboSlug(service.slug, city.slug);

      // Build compact meta title, target <= 60 chars for SERP display
      const metaTitle = buildComboTitle(service, city);

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
