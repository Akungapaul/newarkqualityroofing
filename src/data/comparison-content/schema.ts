import { z } from 'zod';

// ─── Comparison Content Schema ──────────────────────────────────────────────
// Validates structured content for comparison pages.
// Each comparison page needs intro, feature table rows, verdict, analysis, and FAQs.

export const ComparisonContentSchema = z.object({
  comparisonId: z.string(),
  // Optional answer-first hero answer (≤40 words, pre-bolded with **markdown**).
  // Rendered by ComparisonHero; absent until the content rewrite (CMP-1..4) sets it.
  directAnswer: z.string().optional(),
  // Entity-grounding definitional answers ("What is {A}?" / "What is {B}?",
  // ≤40-word first sentence each, pre-bolded via **markdown**). Optional — existing
  // comparisons validate unchanged. Rendered by two EntityDefinition sections and
  // appended to the FAQ JSON-LD when present. A/B labels come from itemA/itemB.
  definitionA: z.string().optional(),
  definitionB: z.string().optional(),
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
  residentialSection: z.object({
    heading: z.string(),
    content: z.array(z.string()).min(1).max(3),
  }),
  commercialSection: z.object({
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
