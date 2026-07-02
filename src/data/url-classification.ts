/**
 * URL Classification verdict API (D-02 / INDX-01).
 *
 * The single source of indexation truth for every Wave-2 routing / sitemap /
 * redirect consumer. Reads the generated verdict map emitted by
 * `scripts/build-url-classification.ts` (regenerated each build via `prebuild`)
 * and exposes the LOCKED six-function verdict API. The exported names below are
 * the locked D-02 contract — do NOT rename them.
 *
 * Combo routing precedence (D-04): redirect > keep > noindex (> unknown -> 404).
 *
 * Verdict buckets:
 *   - keep    : 738 combo slugs that are indexable + self-canonical + in sitemap
 *   - noindex : 402 zero-demand phantom combos (noindex,follow; live 200, excluded
 *               from the sitemap + internal links) per the NJ demand analysis
 *   - redirect: 225 combo slugs that 301 to a keep target (via next.config.ts)
 */

import classification from '@/generated/url-classification.json';

// classification: { keep: string[]; noindex: string[]; redirects: Record<string, string> }
const keepSet = new Set<string>(classification.keep);
const noindexSet = new Set<string>(classification.noindex);
const redirectMap = new Map<string, string>(Object.entries(classification.redirects));

export type Verdict = 'keep' | 'noindex' | 'redirect' | 'unknown';

/**
 * Resolve a combo slug to its verdict. Precedence: redirect > keep > noindex > unknown.
 */
export function getComboVerdict(slug: string): Verdict {
  if (redirectMap.has(slug)) return 'redirect';
  if (keepSet.has(slug)) return 'keep';
  if (noindexSet.has(slug)) return 'noindex';
  return 'unknown';
}

/** Alias of getComboVerdict (locked D-02 name). */
export function getClassification(slug: string): Verdict {
  return getComboVerdict(slug);
}

/** True if the slug is an indexable (keep) combo. */
export const isKeep = (slug: string): boolean => keepSet.has(slug);

/** True if the slug is a noindex,follow combo (live page, excluded from sitemap). */
export const isNoindex = (slug: string): boolean => noindexSet.has(slug);

/** True if the slug 301-redirects to a keep target. */
export const isRedirect = (slug: string): boolean => redirectMap.has(slug);

/**
 * The 168 combo redirects as Next.js redirect objects (source root-relative,
 * permanent 301). Legacy hub redirects live in redirects.generated.mjs and are
 * imported directly by next.config.ts.
 */
export function getComboRedirects(): Array<{ source: string; destination: string; permanent: true }> {
  return [...redirectMap].map(([source, destination]) => ({
    source: `/${source}`,
    destination,
    permanent: true,
  }));
}
