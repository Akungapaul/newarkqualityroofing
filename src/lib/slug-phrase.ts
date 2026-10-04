import { cities } from '@/data/cities';

// ─── Slug → keyword phrase (owner rule, 2026-10-04) ─────────────────────────
//
// Every combo page's title tag, H1, and WebPage schema name are derived FROM
// the URL slug itself, in the form "[Keyword] [City], NJ":
//   roof-replacement-fairfield-nj              → "Roof Replacement Fairfield, NJ"
//   asphalt-shingle-roof-replacement-livingston-nj
//                                              → "Asphalt Shingle Roof Replacement Livingston, NJ"
// Derivation: strip the trailing "-nj", strip the trailing city slug (matched
// longest-first against src/data/cities.ts so "north-caldwell" beats
// "caldwell"), then title-case the remaining keyword segments. Acronyms
// (EPDM/TPO/PVC) stay uppercase and the hyphenated compounds the slug itself
// carries (Built-Up, Re-Roofing, Tear-Off) stay hyphenated — the phrase must
// match the slug exactly, so no "and" is inserted and no compound is split.

const ACRONYMS: Record<string, string> = {
  epdm: 'EPDM',
  tpo: 'TPO',
  pvc: 'PVC',
};

/** Two-token compounds that keep their hyphen in phrase form. */
const COMPOUNDS: Record<string, string> = {
  'built-up': 'Built-Up',
  'tear-off': 'Tear-Off',
  're-roofing': 'Re-Roofing',
};

const capitalize = (w: string) => (w ? w[0].toUpperCase() + w.slice(1) : w);

function keywordPhrase(keywordSlug: string): string {
  const tokens = keywordSlug.split('-').filter(Boolean);
  const out: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const pair = i + 1 < tokens.length ? `${tokens[i]}-${tokens[i + 1]}` : undefined;
    if (pair && COMPOUNDS[pair]) {
      out.push(COMPOUNDS[pair]);
      i++;
      continue;
    }
    out.push(ACRONYMS[tokens[i]] ?? capitalize(tokens[i]));
  }
  return out.join(' ');
}

/**
 * Combo slug → "[Keyword] [City], NJ" phrase used for the title tag, H1, and
 * WebPage schema name. Throws on a slug that is not a `{keyword}-{city}-nj`
 * combo slug so misuse fails loudly instead of shipping a wrong heading.
 */
export function comboSlugPhrase(comboSlug: string): string {
  const slug = comboSlug.replace(/^\//, '');
  if (!slug.endsWith('-nj')) {
    throw new Error(`comboSlugPhrase: not a combo slug (missing -nj suffix): ${comboSlug}`);
  }
  const body = slug.slice(0, -'-nj'.length);
  // Longest city slug first so multi-word cities win over their suffixes.
  const city = [...cities]
    .sort((a, b) => b.slug.length - a.slug.length)
    .find((c) => body === c.slug || body.endsWith(`-${c.slug}`));
  if (!city) {
    throw new Error(`comboSlugPhrase: no known city suffix in combo slug: ${comboSlug}`);
  }
  const keywordSlug = body.slice(0, body.length - city.slug.length).replace(/-$/, '');
  if (!keywordSlug) {
    throw new Error(`comboSlugPhrase: no keyword segments in combo slug: ${comboSlug}`);
  }
  return `${keywordPhrase(keywordSlug)} ${city.name}, NJ`;
}
