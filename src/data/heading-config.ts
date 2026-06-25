/**
 * Central Question-Form Heading Config (Phase 12 — single source of truth).
 *
 * The verbatim §4.1–4.4 (IMPLEMENTATION-BRIEF) + §17 (IMPLEMENTATION-PLAN)
 * question-form H-tag strings. BOTH the templates render these AND the static
 * audit pass (`scripts/audit-headings.ts`) asserts against them, so the page
 * H-tags and the audit can never drift (D-08, D-09, Pattern 1).
 *
 * Conventions:
 *   - Constant strings (homepage) are plain string literals.
 *   - Entity-token strings are functions `(s: string) => ...` (service) /
 *     `(c: string) => ...` (city) / `(s: string, c: string) => ...` (combo)
 *     that interpolate [Service] / [City] from `services.ts` / `cities.ts`.
 *   - `h1` = the single question-form page H1.
 *   - `coreH2` = the §17 first-Core-H2 string (the first major H2 after the hero).
 *   - `outerH2s` / the per-type H2 arrays hold the full ordered §4.x tree H2s.
 *   - city adds `permitsH2` + `materialsH2` accessors (D-11 new sections).
 *
 * Strings are byte-for-byte from the brief — NEVER paraphrase, NEVER use
 * placeholder / "v1" wording. Every interpolated value ends with "?". No page
 * type's H1 equals any of its own H2 strings.
 */

export const HEADING_CONFIG = {
  // ─── §4.1 Homepage (constant strings) ──────────────────────────────────────
  home: {
    h1: 'Who Should You Call for Roofing Services in Newark?',
    coreH2: 'What Roofing Services Do We Provide in Newark and Essex County?',
    // §4.1 Core H3s (under the Core H2)
    coreH3s: [
      'How Do We Repair Roof Leaks and Roof Damage?',
      'How Do We Replace Aging or Storm-Damaged Roofs?',
      'How Do We Inspect Roofs for Damage?',
      'How Do We Handle Emergency Roof Repairs?',
      'How Do We Repair Storm-Damaged Roofs?',
      'How Do We Help Commercial Roofing Customers?',
      'How Do We Install and Compare Roofing Materials?',
    ],
    // §4.1 Outer H2s (after the Core section, in tree order)
    outerH2s: [
      'Why Should Homeowners and Businesses Choose Our Roofing Company?',
      'How Does Our Roofing Process Work?',
      'Where Do We Provide Roofing Services?',
      'How Much Do Roofing Services Cost?',
      'What Roofing Questions Do Customers Ask Most Often?',
      'How Can You Request a Free Roofing Estimate?',
    ],
  },

  // ─── §4.2 Service Page ([Service] interpolated) ────────────────────────────
  service: {
    h1: (s: string) => `Who Provides ${s} in Newark?`,
    coreH2: (s: string) => `What ${s} Do We Provide?`,
    // Entity-grounding: the definitional first H2 ("What Is {Service}?"), rendered
    // ABOVE the existing tree by the EntityDefinition section when content.definition
    // is present. Additive — does NOT shift the h2s[] indices the template binds.
    definitionH2: (s: string) => `What Is ${s}?`,
    // §4.2 9-H2 tree (Core H2 first, then Outer H2s in order). §12 relabel
    // applied to "Related Roofing Services" → "What Related Roofing Services
    // Should You Consider?".
    h2s: (s: string) => [
      `What ${s} Do We Provide?`,
      `How Do You Know If You Need ${s}?`,
      `How Do Our Roofing Contractors Perform ${s}?`,
      `How Much Does ${s} Cost?`,
      'Should You Repair or Replace Your Roof?',
      `Why Choose Our Roofing Company for ${s}?`,
      'What Related Roofing Services Should You Consider?',
      'What Knowledge Base Articles Explain This Service?',
      `How Can You Schedule ${s}?`,
    ],
  },

  // ─── §4.3 Location / City Page ([City] interpolated) ───────────────────────
  city: {
    // Declarative, keyword-led H1 (exception to the question-form rule, scoped to
    // the city page type — see scripts/audit-headings.ts CITY_DECLARATIVE_H1).
    h1: (c: string) => `Roof Repair and Installation in ${c}, NJ`,
    coreH2: (c: string) => `What Roofing Services Are Available in ${c}?`,
    // Entity-grounding: the locational first H2 ("Where Is {City}, NJ?"), rendered
    // ABOVE the services grid by the EntityDefinition section when content.whereIs
    // is present. Additive — coreH2/h2s unchanged (coreH2 stays the services-grid H2).
    whereIsH2: (c: string) => `Where Is ${c}, NJ?`,
    // D-11 new shared sections:
    permitsH2: (c: string) => `What Should You Know About Roofing Permits in ${c}?`,
    materialsH2: (c: string) => `What Roofing Materials Work Best for ${c} Properties?`,
    // §4.3 tree H2s (Core first, then Outer in tree order). §12 relabel applied
    // to "Nearby Service Areas" → "Where Else Do We Provide Roofing Services
    // Near [City]?".
    h2s: (c: string) => [
      `What Roofing Services Are Available in ${c}?`,
      `What Roofing Problems Are Common in ${c}?`,
      `Which Neighborhoods Do We Serve in ${c}?`,
      `What Roofing Materials Work Best for ${c} Properties?`,
      `What Should You Know About Roofing Permits in ${c}?`,
      `What Roofing Projects Do We Handle in ${c}?`,
      `What Questions Do ${c} Property Owners Ask About Roofing?`,
      `Where Else Do We Provide Roofing Services Near ${c}?`,
      `How Can You Request a Free Roofing Estimate in ${c}?`,
    ],
  },

  // ─── §4.4 Service + Location (Combo) Page ([Service], [City]) ───────────────
  combo: {
    h1: (s: string, c: string) => `Who Provides ${s} in ${c}?`,
    coreH2: (s: string, c: string) => `What ${s} Is Available in ${c}?`,
    // Entity-grounding: the definitional first H2 ("What Is {Service}?"), city-agnostic
    // (the canonical service definition is propagated to every combo). Rendered ABOVE
    // the overview by EntityDefinition when content.definition is present. Additive.
    definitionH2: (s: string) => `What Is ${s}?`,
    // §4.4 tree H2s (Core first, then Outer in tree order).
    h2s: (s: string, c: string) => [
      `What ${s} Is Available in ${c}?`,
      `What ${s} Problems Are Common in ${c}?`,
      `How Do We Inspect the Roof Before ${s}?`,
      `How Much Does ${s} Cost in ${c}?`,
      `What Is Our Process for ${s} in ${c}?`,
      `Why Choose Our Roofing Company for ${s} in ${c}?`,
      `What Other Roofing Services Are Available in ${c}?`,
      `Where Else Do We Provide ${s} Near ${c}?`,
      `What Knowledge Base Articles Explain ${s}?`,
      `How Can You Schedule ${s} in ${c}?`,
    ],
  },

  // ─── In-scope Core / Hub page H1s (D-10; Open Question Q3 resolution) ───────
  // The spec gives no verbatim H1 for these hubs, so each is assigned a natural
  // question-form H1. The audit enforces only "H1 is a question". Keyed by the
  // page's flat slug for direct lookup by the rendered-pass sample set.
  core: {
    'roofing-services': 'What Roofing Services Do We Provide?',
    'service-areas': 'Where Do We Provide Roofing Services?',
    contact: 'How Can You Contact Our Roofing Team?',
    about: 'Who Are We as a Newark Roofing Company?',
  },

  // The 6 noindex hub scaffolds (Phase 11). Per Open Question Q2 only the H1 is
  // enforced here (DOM-safety subset); full tree content is Phase 13.
  hub: {
    'residential-roofing': 'What Residential Roofing Services Do We Provide?',
    'commercial-roofing': 'What Commercial Roofing Services Do We Provide?',
    'flat-roof-systems': 'What Flat Roof Systems Do We Install and Repair?',
    'roofing-materials': 'What Roofing Materials Should You Consider?',
    'free-roofing-estimate': 'How Can You Request a Free Roofing Estimate?',
    'our-roofing-process': 'How Does Our Roofing Process Work?',
  },
} as const;

export type HeadingConfig = typeof HEADING_CONFIG;
