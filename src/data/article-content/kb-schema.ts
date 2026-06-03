import { z } from 'zod';

// ─── Knowledge Base Article Content Schema ───────────────────────────────────
// PARALLEL to the existing ArticleContentSchema (./schema.ts), which is locked at
// sections.min(2).max(4) for the 252 existing short (~700-900 word) articles.
//
// KB articles are long-form pillar/cluster content authored in Phase 13: they
// require >= 10 sections and a FAQPage-backing faqs[] array. Keeping this schema
// separate ensures the existing short-article validation (.min(2).max(4)) stays
// intact while the 44 nested KB articles validate against these looser bounds.

export const KbArticleContentSchema = z.object({
  // Identity / placement within the KB topical map.
  kbArticleId: z.string(),
  clusterId: z.string(),
  // Editorial body — long-form, so >= 10 sections (no restrictive upper bound;
  // a generous cap guards against runaway data, not editorial depth).
  intro: z.string(),
  sections: z
    .array(
      z.object({
        heading: z.string(),
        body: z.array(z.string()).min(1),
      })
    )
    .min(10)
    .max(40),
  conclusion: z.string(),
  // FAQ section backs FAQPage JSON-LD. Shape mirrors ServiceContentSchema.faqs.
  faqs: z
    .array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    )
    .min(4)
    .max(20),
  ctaHeading: z.string(),
  ctaText: z.string(),
  metaTitle: z.string().max(70),
  metaDescription: z.string().max(160),
});

export type KbArticleContent = z.infer<typeof KbArticleContentSchema>;
