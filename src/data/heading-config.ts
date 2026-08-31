/**
 * Central Heading Config (single source of truth).
 *
 * H1 policy (2026-08 owner decision): every page H1 is a keyword-led STATEMENT
 * in the uniform "[Service] [City], NJ" pattern (e.g. "Roof Repair Newark, NJ");
 * statewide pages use an "in NJ" suffix instead. H2–H4 keep the verbatim
 * §4.1–4.4 (IMPLEMENTATION-BRIEF) + §17 (IMPLEMENTATION-PLAN) question-form
 * Q→A structure. BOTH the templates render these AND the static audit pass
 * (`scripts/audit-headings.ts`) asserts against them, so the page H-tags and
 * the audit can never drift (D-08, D-09, Pattern 1).
 *
 * Conventions:
 *   - Constant strings (homepage) are plain string literals.
 *   - Entity-token strings are functions `(s: string) => ...` (service) /
 *     `(c: string) => ...` (city) / `(s: string, c: string) => ...` (combo)
 *     that interpolate [Service] / [City] from `services.ts` / `cities.ts`.
 *   - `h1` = the single statement-form page H1 (must NOT end in "?").
 *   - `coreH2` = the §17 first-Core-H2 string (the first major H2 after the hero).
 *   - `outerH2s` / the per-type H2 arrays hold the full ordered §4.x tree H2s.
 *   - city adds `permitsH2` + `materialsH2` accessors (D-11 new sections).
 *
 * H2 strings are byte-for-byte from the brief — NEVER paraphrase, NEVER use
 * placeholder / "v1" wording. Every H2 ends with "?". No page type's H1 equals
 * any of its own H2 strings.
 */

export const HEADING_CONFIG = {
  // ─── §4.1 Homepage (constant strings) ──────────────────────────────────────
  home: {
    h1: 'Roofing Contractor Newark, NJ',
    coreH2: 'What Roofing Services Do We Provide in Newark and Essex County?',
    // NOTE: the Core services are rendered by ServicesGrid as declarative,
    // linked service cards (styled text, NOT <h3> headings), so no per-service
    // heading strings live here — only the Core H2 above and the Outer H2s below
    // are question-form headings on the homepage.
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
    h1: (s: string) => `${s} Newark, NJ`,
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
    // Statement H1 in the uniform "[Service] [City], NJ" pattern (no "in").
    // NOTE: the URL slug (roof-repair-and-installation-in-{city}-nj) and the 21
    // city metaTitles keep the "in" — only the visible H1 drops it.
    h1: (c: string) => `Roof Repair and Installation ${c}, NJ`,
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
    h1: (s: string, c: string) => `${s} ${c}, NJ`,
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

  // ─── Comparison Page H1 ([name] interpolated from comparisons.ts) ───────────
  // Statement H1 with the statewide qualifier: append " in NJ" unless the
  // comparison name already carries NJ (e.g. "Best Roofing Material for NJ
  // Weather"). `comparison.name` itself stays clean for breadcrumbs, card
  // anchors, and metaTitles — only the rendered H1 gains the suffix.
  comparison: {
    h1: (name: string) => (/\bNJ\b/.test(name) ? name : `${name} in NJ`),
  },

  // ─── In-scope Core / Hub page H1s (D-10; Open Question Q3 resolution) ───────
  // The spec gives no verbatim H1 for these hubs, so each is assigned a
  // keyword-led statement H1. Keyed by the page's flat slug for direct lookup
  // by the rendered-pass sample set.
  core: {
    'roofing-services': 'Roofing Services Newark, NJ',
    'service-areas': 'Roofing Service Areas Essex County, NJ',
    contact: 'Contact Newark Quality Roofing',
    about: 'About Newark Quality Roofing',
  },

  // The 6 noindex hub scaffolds (Phase 11). Per Open Question Q2 only the H1 is
  // enforced here (DOM-safety subset); full tree content is Phase 13.
  hub: {
    'residential-roofing': 'Residential Roofing Newark, NJ',
    'commercial-roofing': 'Commercial Roofing Newark, NJ',
    'flat-roof-systems': 'Flat Roof Systems Newark, NJ',
    'roofing-materials': 'Roofing Materials Newark, NJ',
    'free-roofing-estimate': 'Free Roofing Estimate Newark, NJ',
    'our-roofing-process': 'Our Roofing Process',
  },

  // Per-service H1 overrides (grammar fix). The templated service.h1
  // "{name} Newark, NJ" reads broken for the six "X Installation Repair"
  // service names (no conjunction), so those get "X Installation and Repair
  // Newark, NJ" instead. service.name and metaTitles are unchanged.
  serviceH1Overrides: {
    'roof-flashing-installation-repair': 'Roof Flashing Installation and Repair Newark, NJ',
    'gutter-installation-repair': 'Gutter Installation and Repair Newark, NJ',
    'skylight-installation-repair': 'Skylight Installation and Repair Newark, NJ',
    'fascia-installation-repair': 'Fascia Installation and Repair Newark, NJ',
    'soffit-installation-repair': 'Soffit Installation and Repair Newark, NJ',
    'roof-vent-installation-repair': 'Roof Vent Installation and Repair Newark, NJ',
  } as Record<string, string>,
} as const;

export type HeadingConfig = typeof HEADING_CONFIG;
