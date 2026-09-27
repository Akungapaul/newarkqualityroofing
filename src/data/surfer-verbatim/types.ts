// Shapes emitted by scripts/surfer/convert-drafts.mjs. Inline text is kept as
// exact runs (not markdown) so no character in the owner's copy can be
// reinterpreted as markup.

export type SurferRun =
  | { t: 'text'; v: string }
  | { t: 'b' | 'i' | 'u'; c: SurferRun[] }
  | { t: 'a'; href: string; c: SurferRun[] };

export type SurferBlock =
  | { t: 'p'; runs: SurferRun[] }
  | { t: 'h3' | 'h4'; runs: SurferRun[] }
  | { t: 'ul' | 'ol'; items: SurferRun[][][] }
  | { t: 'table'; rows: SurferRun[][][] };

export interface SurferFaq {
  q: string;
  a: SurferBlock[];
}

export interface SurferSection {
  heading: string;
  blocks?: SurferBlock[];
  faqs?: SurferFaq[];
}

export interface SurferPage {
  slug: string;
  editorId: number;
  keyword: string;
  type: 'home' | 'service' | 'city' | 'combo' | 'article';
  /** Title tag and H1 (identical). "[Service] [City], NJ" for local pages; the draft's own H1 for articles. */
  h1: string;
  /** Keyword phrase + city the first sentence must contain. `city` is '' on articles. */
  leadPhrase: string;
  city: string;
  /** Added above the lead only when its first sentence lacks the keyword. */
  leadFallback: string;
  /** Pre-H2 prose from the draft (the hero copy); empty = keep the template lead. */
  lead: SurferRun[][];
  sections: SurferSection[];
  metaDescription?: string;
}
