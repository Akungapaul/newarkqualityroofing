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
  // Topical-map page types (Phase 11+). KB hub/cluster/article paths are nested
  // and owned by the KB catch-all route's own enumeration, NOT the flat registry;
  // 'glossary' and 'hub' are flat single-segment pages registered below.
  'kb-hub',
  'kb-cluster-hub',
  'kb-article',
  'glossary',
  'hub',
]);

export const SlugEntrySchema = z.object({
  slug: z.string(),
  type: PageTypeSchema,
  serviceId: z.string().optional(),
  cityId: z.string().optional(),
  comparisonId: z.string().optional(),
  articleId: z.string().optional(),
  corePageId: z.string().optional(),
  // Topical-map identifiers (optional — set only for the new page types).
  kbArticleId: z.string().optional(),
  clusterId: z.string().optional(),
  glossaryId: z.string().optional(),
  hubId: z.string().optional(),
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
  // Answer-first hero answer (≤40 words). Optional for backward compatibility:
  // the ~64 other services omit it and still validate. Consumed by the hero
  // when present (gated on presence at render time).
  directAnswer: z.string().optional(),
  // Entity-grounding definitional answer ("What is {service}?", ≤40-word first
  // sentence, central entity pre-bolded via **markdown**). Optional — existing
  // services omit it and still validate; rendered by the EntityDefinition section
  // and appended to the FAQ JSON-LD when present. Mirrors directAnswer.
  definition: z.string().optional(),
  overview: z.array(z.string()).min(2).max(5),
  // Structured Core sub-services (the 6 core repairs for roof-repair). Optional
  // for backward compatibility; services lacking it render exactly as before.
  subServices: z.array(z.object({
    name: z.string(),
    description: z.string(),
  })).optional(),
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
  // ─── Rich "brief-driven" layout (optional, per-page opt-in) ────────────────
  // When `sections` is present the ServiceTemplate renders these ordered,
  // question-form prose H2 sections IN PLACE OF the generic overview/signs/
  // approach/audience band (roof-repair uses this to carry a Surfer brief).
  // The ~64 other services omit every field below and render exactly as before.
  sections: z.array(z.object({
    heading: z.string(),         // statement-form H2
    body: z.array(z.string()).min(1), // rich-text paragraphs (parseRichText)
    // Optional H3 layer beneath the section's H2. Statement-form, same as every
    // other heading (heading policy v3) — the rendered audit rejects any H1-H4
    // ending in "?" and requires ", NJ" wherever a place is named. Levels stay
    // monotonic because these render only inside their parent H2's <section>.
    subsections: z.array(z.object({
      heading: z.string(),       // statement-form H3
      body: z.array(z.string()).min(1),
    })).optional(),
  })).optional(),
  // "Local property context" chip grid (rendered via CityNeighborhoods).
  neighborhoods: z.array(z.object({
    name: z.string(),
    description: z.string().optional(),
  })).optional(),
  neighborhoodsHeading: z.string().optional(), // question-form H2 for the chips
  // "Roof problems we expect" bullet list (rendered via ServiceSigns).
  problemsWeExpect: z.object({
    heading: z.string(),         // question-form H2
    items: z.array(z.string()).min(1),
  }).optional(),
  // Per-page heading overrides so process/cost read as the brief's headings.
  processHeading: z.string().optional(),
  pricingHeading: z.string().optional(),
});

// ─── City Content ──────────────────────────────────────────────────────────

export const CityContentSchema = z.object({
  cityId: z.string(),
  // Answer-first hero answer (≤40 words, answer span pre-bolded via **markdown**).
  // Optional for backward compatibility: cities not yet rewritten omit it and
  // still validate. Consumed by CityHero when present (gated at render time),
  // mirroring ServiceContent.directAnswer.
  directAnswer: z.string().optional(),
  // Entity-grounding locational answer ("Where is {City}, NJ?", ≤40-word first
  // sentence, place entity pre-bolded via **markdown**). Optional — cities not yet
  // backfilled omit it and still validate. Rendered by EntityDefinition and
  // appended to the FAQ JSON-LD when present. Mirrors directAnswer.
  whereIs: z.string().optional(),
  heroHeadline: z.string(),
  heroSubheadline: z.string(),
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
