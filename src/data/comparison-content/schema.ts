import { z } from 'zod';

// ─── Comparison Content Schema ──────────────────────────────────────────────
// Validates structured content for comparison pages.
// Each comparison page needs intro, feature table rows, verdict, analysis, and FAQs.

export const ComparisonContentSchema = z.object({
  comparisonId: z.string(),
  introHeading: z.string(),
  introParagraphs: z.array(z.string()).min(1).max(3),
  comparisonRows: z.array(z.object({
    feature: z.string(),
    itemA: z.string(),
    itemB: z.string(),
    winner: z.enum(['A', 'B', 'tie', 'depends']).optional(),
  })).min(4).max(15),
  verdict: z.object({
    winner: z.string(),
    reasoning: z.string(),
    alternateScenario: z.string(),
  }),
  detailedAnalysis: z.array(z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(4),
  })).min(2).max(5),
  njSpecific: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  homeownerSection: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  businessOwnerSection: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(4).max(6),
  metaDescription: z.string().max(160),
});

export type ComparisonContent = z.infer<typeof ComparisonContentSchema>;
