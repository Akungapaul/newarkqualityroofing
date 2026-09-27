import { SURFER_PAGES } from '@/data/surfer-verbatim/generated-index';
import type { SurferBlock, SurferPage, SurferRun } from '@/data/surfer-verbatim/types';

/** Surfer draft synced verbatim onto this URL, if any. `slug` is the URL path ("/" or "/x"). */
export function getSurferPage(slug: string): SurferPage | undefined {
  return SURFER_PAGES[slug.startsWith('/') ? slug : `/${slug}`];
}

export const runsText = (runs: SurferRun[]): string =>
  runs.map((r) => (r.t === 'text' ? r.v : runsText(r.c))).join('');

export const blockText = (b: SurferBlock): string => {
  if ('items' in b) return b.items.map((it) => it.map(runsText).join(' ')).join(' ');
  if ('rows' in b) return b.rows.map((row) => row.map(runsText).join(' ')).join(' ');
  return runsText(b.runs);
};

/** FAQPage items built from the draft's FAQ sections. */
export function surferFaqs(page: SurferPage): { question: string; answer: string }[] {
  return page.sections.flatMap((s) =>
    (s.faqs ?? []).map((f) => ({ question: f.q, answer: f.a.map(blockText).join(' ') })),
  );
}

// ─── Keyword-in-first-sentence (owner rule: slug, title, H1, first sentence) ──
// Same normalization as scripts/audit-keyword-leads.ts.
const norm = (s: string) =>
  ` ${s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim()} `;
const stem = (w: string) => w.replace(/([^s])s$/, '$1');
const hasPhrase = (sentence: string, phrase: string) => {
  const words = norm(phrase).trim().split(' ');
  const parts = words.map((w, i) => (i === words.length - 1 ? `${stem(w)}(?:e?s)?` : w));
  return new RegExp(`(?:^| )${parts.join(' ')}(?: |$)`).test(norm(sentence));
};
export const firstSentence = (s: string) =>
  s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim().split(/(?<=[.!?])\s/)[0] ?? '';

export const leadHasKeyword = (page: SurferPage, leadText: string) => {
  const fs = firstSentence(leadText);
  return hasPhrase(fs, page.leadPhrase) && (!page.city || hasPhrase(fs, page.city));
};

/**
 * The page's hero lead: the draft's pre-H2 prose when it has any, otherwise the
 * template's existing lead. `fallback` is the one added sentence the owner
 * approved, set only when the lead's first sentence lacks the keyword.
 */
export function surferLead(page: SurferPage, templateLead: string | undefined) {
  const leadText = page.lead.length ? page.lead.map(runsText).join(' ') : (templateLead ?? '');
  return {
    runs: page.lead.length ? page.lead : undefined,
    fallback: leadHasKeyword(page, leadText) ? undefined : page.leadFallback,
  };
}
