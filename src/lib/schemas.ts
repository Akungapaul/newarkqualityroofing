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
  metaTitle: z.string().max(80),
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
  articleId: z.string().optional(),
  corePageId: z.string().optional(),
});

// ─── Lead Form ──────────────────────────────────────────────────────────────

export const LeadFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  serviceNeeded: z.string().min(1, 'Please select a service'),
});

// ─── Service Content ────────────────────────────────────────────────────────

export const ServiceContentSchema = z.object({
  serviceId: z.string(),
  overview: z.array(z.string()).min(2).max(5),
  signsHeading: z.string(),
  signs: z.array(z.string()).min(4).max(10),
  approachHeading: z.string(),
  approachContent: z.array(z.string()).min(2).max(5),
  approachSubheadings: z.array(z.string()).optional(),
  residential: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(5),
    ctaLabel: z.string(),
  }),
  commercial: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(5),
    ctaLabel: z.string(),
  }),
  processSteps: z.array(z.object({
    title: z.string(),
    description: z.string(),
  })).min(4).max(8),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(4).max(10),
  // Conversion-optimized fields (optional for backward compatibility)
  pricing: z.object({
    range: z.string(),
    factors: z.array(z.string()),
    financingNote: z.string().optional(),
  }).optional(),
  whyChooseUs: z.object({
    heading: z.string(),
    reasons: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }).optional(),
  credentialsHighlight: z.array(z.string()).optional(),
});

// ─── City Content ──────────────────────────────────────────────────────────

export const CityContentSchema = z.object({
  cityId: z.string(),
  heroHeadline: z.string(),
  heroSubheadline: z.string(),
  stats: z.object({
    projectCount: z.string(),
    servingSince: z.string(),
    rating: z.string(),
  }),
  overview: z.array(z.string()).min(3).max(6),
  residential: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(5),
  }),
  commercial: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(2).max(5),
  }),
  weatherChallenges: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  neighborhoods: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
  })).min(3).max(15),
  projectSpotlights: z.array(z.object({
    title: z.string(),
    type: z.enum(['residential', 'commercial']),
    description: z.string(),
    details: z.array(z.string()).min(2).max(4),
  })).min(2).max(5),
  testimonials: z.array(z.object({
    name: z.string(),
    rating: z.number().min(4).max(5),
    text: z.string(),
    service: z.string(),
  })).min(2).max(5),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(5).max(8),
  whyChoose: z.object({
    heading: z.string(),
    reasons: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).min(3).max(6),
  }),
  metaTitle: z.string().max(70),
  metaDescription: z.string().max(160),
  // Conversion-optimized fields (optional for backward compatibility)
  pricing: z.object({
    averageRepair: z.string(),
    averageReplacement: z.string(),
    note: z.string().optional(),
  }).optional(),
  credentialsHighlight: z.array(z.string()).optional(),
});
