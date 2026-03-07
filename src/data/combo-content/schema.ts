import { z } from 'zod';

// ─── Combo Content Schema ───────────────────────────────────────────────────
// Validates content for each service x city combo page.
// Each combo page needs unique, differentiated content to avoid thin/duplicate pages.

export const ComboContentSchema = z.object({
  serviceId: z.string(),
  cityId: z.string(),
  overview: z.array(z.string()).min(3).max(5),
  challenges: z.array(z.string()).min(2).max(4),
  process: z.array(z.string()).min(2).max(4),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(3).max(5),
  metaDescription: z.string().max(160),
});

export type ComboContent = z.infer<typeof ComboContentSchema>;
