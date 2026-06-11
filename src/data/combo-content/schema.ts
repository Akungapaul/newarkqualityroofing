import { z } from 'zod';

// ─── Combo Content Schema ───────────────────────────────────────────────────
// Validates content for each service x city combo page.
// Each combo page needs unique, differentiated content to avoid thin/duplicate pages.

export const ComboContentSchema = z.object({
  serviceId: z.string(),
  cityId: z.string(),
  // Answer-first hero answer (≤40 words, pre-bolded via **markdown**). Optional —
  // every existing combo validates unchanged; per-city content batches populate it.
  directAnswer: z.string().optional(),
  // Entity-grounding definitional answer ("What is {service}?", ≤40-word first
  // sentence, pre-bolded via **markdown**). City-agnostic: the canonical service
  // definition is propagated to every combo. Optional — existing combos validate
  // unchanged; backfilled per-city. Mirrors directAnswer.
  definition: z.string().optional(),
  overview: z.array(z.string()).min(3).max(5),
  challenges: z.array(z.string()).min(2).max(4),
  process: z.array(z.string()).min(2).max(4),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(3).max(6),
  metaDescription: z.string().max(160),
  // Conversion-optimized fields (optional for backward compatibility)
  pricing: z.object({
    range: z.string(),
    note: z.string().optional(),
  }).optional(),
  whyChooseUs: z.array(z.string()).optional(),
  conversionHooks: z.object({
    midPageCta: z.string().optional(),
    urgencyNote: z.string().optional(),
  }).optional(),
});

export type ComboContent = z.infer<typeof ComboContentSchema>;
