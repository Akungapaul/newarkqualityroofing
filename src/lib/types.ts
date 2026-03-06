import { z } from 'zod';
import {
  ServiceCategorySchema,
  ServiceSchema,
  CitySchema,
  ComboSchema,
  ComparisonCategorySchema,
  ComparisonSchema,
  CorePageSchema,
  PageTypeSchema,
  SlugEntrySchema,
  ServiceContentSchema,
} from './schemas';

// ─── Inferred Types ──────────────────────────────────────────────────────────

export type ServiceCategory = z.infer<typeof ServiceCategorySchema>;
export type Service = z.infer<typeof ServiceSchema>;
export type City = z.infer<typeof CitySchema>;
export type Combo = z.infer<typeof ComboSchema>;
export type ComparisonCategory = z.infer<typeof ComparisonCategorySchema>;
export type Comparison = z.infer<typeof ComparisonSchema>;
export type CorePage = z.infer<typeof CorePageSchema>;
export type PageType = z.infer<typeof PageTypeSchema>;
export type SlugEntry = z.infer<typeof SlugEntrySchema>;
export type ServiceContent = z.infer<typeof ServiceContentSchema>;

// ─── Re-exports ──────────────────────────────────────────────────────────────

export {
  ServiceCategorySchema,
  ServiceSchema,
  CitySchema,
  ComboSchema,
  ComparisonCategorySchema,
  ComparisonSchema,
  CorePageSchema,
  PageTypeSchema,
  SlugEntrySchema,
  ServiceContentSchema,
} from './schemas';
