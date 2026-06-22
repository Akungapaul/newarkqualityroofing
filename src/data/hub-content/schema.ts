import { z } from 'zod';

// ─── Hub Content Schema ─────────────────────────────────────────────────────
// Validates structured content for the 6 FLAT topical/utility hubs
// (residential-roofing, commercial-roofing, flat-roof-systems, roofing-materials,
// free-roofing-estimate, our-roofing-process). Answer-first + entity-grounded,
// mirroring the Service/City/Combo machinery. DISTINCT from the KB cluster hubs.
//
// Two hub kinds share one schema:
//   • CATEGORY hubs (residential/commercial/flat-roof/materials) carry the
//     `definition` + `definitionHeading` entity-grounding pair (rendered by
//     EntityDefinition as the first content H2 + appended to the FAQ JSON-LD)
//     and a `childLinks` section that funnels link equity to their children.
//   • UTILITY hubs (free-roofing-estimate, our-roofing-process) are lean
//     conversion/process pages: they omit `definition`/`definitionHeading`
//     (no forced "What Is …?" block) and usually omit `childLinks`.

export const HubContentSchema = z.object({
  hubId: z.string(),
  // Answer-first hero answer to the page H1 (≤40-word BOLD SPAN, pre-bolded via **markdown**).
  directAnswer: z.string(),
  // Entity-grounding definitional answer ("Residential roofing is …", ≤40-word first
  // sentence, pre-bolded) + its author-supplied question heading ("What Is Residential
  // Roofing?"). Category hubs only — gated at the call site; utility hubs omit both.
  definition: z.string().optional(),
  definitionHeading: z.string().optional(),
  // Entity-grounded prose body. Every `heading` is QUESTION-FORM (the rendered-heading
  // audit requires every <h2> to be a question). `body[0]` = the ≤40-word answer-first lead.
  sections: z.array(z.object({
    heading: z.string(),
    body: z.array(z.string()).min(1).max(4),
  })).min(2).max(6),
  // The ONE curated internal-link section funneling link equity to child pages
  // (category hubs). The section `heading` is question-form; group `label`s render
  // as plain text (NOT headings); each link is a real /slug path to an existing page.
  childLinks: z.object({
    heading: z.string(),
    groups: z.array(z.object({
      label: z.string(),
      links: z.array(z.object({ text: z.string(), href: z.string() })).min(1),
    })).min(1).max(3),
  }).optional(),
  // Question-form FAQ section heading + the FAQ entries (also emitted as FAQPage JSON-LD).
  faqHeading: z.string(),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).min(3).max(6),
  metaTitle: z.string().max(60),
  metaDescription: z.string().max(160),
});

export type HubContent = z.infer<typeof HubContentSchema>;
