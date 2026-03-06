import { z } from 'zod';

// ─── Service Category ────────────────────────────────────────────────────────

export const ServiceCategorySchema = z.enum([
  'repair-maintenance',
  'residential-roof-types',
  'commercial-roof-types',
  'components-specialty',
  'energy-solar',
  'commercial-services',
  'design-consultation',
  'replacement-sub-pages',
]);

// ─── Service ─────────────────────────────────────────────────────────────────

export const ServiceSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: ServiceCategorySchema,
  parentId: z.string().nullable(),
  isResidential: z.boolean(),
  isCommercial: z.boolean(),
  shortDescription: z.string(),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

// ─── City ────────────────────────────────────────────────────────────────────

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  state: z.literal('NJ'),
  county: z.literal('Essex'),
  isHQ: z.boolean().default(false),
  zipCodes: z.array(z.string()),
  adjacentCityIds: z.array(z.string()),
});

// ─── Combo (Service x City) ─────────────────────────────────────────────────

export const ComboSchema = z.object({
  slug: z.string().regex(/^[a-z0-9-]+$/),
  serviceId: z.string(),
  cityId: z.string(),
  metaTitle: z.string().max(70),
  metaDescription: z.string().max(160),
});

// ─── Comparison ──────────────────────────────────────────────────────────────

export const ComparisonCategorySchema = z.enum([
  'material-vs-material',
  'service-vs-service',
  'decision-helper',
]);

export const ComparisonSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  category: ComparisonCategorySchema,
  itemA: z.string().optional(),
  itemB: z.string().optional(),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

// ─── Core Page ───────────────────────────────────────────────────────────────

export const CorePageSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

// ─── Page Type & Slug Registry ───────────────────────────────────────────────

export const PageTypeSchema = z.enum([
  'service',
  'city',
  'combo',
  'comparison',
  'article',
  'core',
]);

export const SlugEntrySchema = z.object({
  slug: z.string(),
  type: PageTypeSchema,
  serviceId: z.string().optional(),
  cityId: z.string().optional(),
  comparisonId: z.string().optional(),
  corePageId: z.string().optional(),
});

// ─── Lead Form ──────────────────────────────────────────────────────────────

export const LeadFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  serviceNeeded: z.string().min(1, 'Please select a service'),
});
