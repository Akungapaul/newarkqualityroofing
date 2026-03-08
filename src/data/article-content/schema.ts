import { z } from 'zod';

// ─── Article Content Schema ────────────────────────────────────────────────
// Validates content for supporting articles (~700-900 words).
// Each article supports a parent money page with reverse silo linking.

export const ArticleContentSchema = z.object({
  articleId: z.string(),
  parentId: z.string(),
  parentType: z.enum(['service', 'comparison', 'core']),
  position: z.number().min(1).max(3),
  intro: z.string(),
  sections: z.array(z.object({
    heading: z.string(),
    body: z.array(z.string()).min(1).max(4),
  })).min(2).max(4),
  conclusion: z.string(),
  ctaHeading: z.string(),
  ctaText: z.string(),
  metaDescription: z.string().max(160),
});

export type ArticleContent = z.infer<typeof ArticleContentSchema>;
