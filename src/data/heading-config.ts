/**
 * Central Heading Config (single source of truth).
 *
 * H1 policy (2026-08 owner decision): every page H1 is a keyword-led STATEMENT
 * in the uniform "[Service] [City], NJ" pattern (e.g. "Roof Repair Newark, NJ");
 * statewide pages use an "in NJ" suffix instead. Since the 2026-09 policy v3,
 * H2–H4 are ALSO keyword-led statements that answer their topic (only FAQ item
 * questions stay interrogative). BOTH the templates render these AND the static audit pass
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
 * Several city/combo section components hand-duplicate these H2 strings as
 * JSX literals — keep them byte-identical when editing. No page type's H1
 * equals any of its own H2 strings.
 */

export const HEADING_CONFIG = {
  // ─── §4.1 Homepage (constant strings) ──────────────────────────────────────
  home: {
    h1: 'Roofing Contractor Newark, NJ',
    coreH2: 'Roofing Services We Provide in Newark and Essex County, NJ',
    // NOTE: the Core services are rendered by ServicesGrid as declarative,
    // linked service cards (styled text, NOT <h3> headings), so no per-service
    // heading strings live here — only the Core H2 above and the Outer H2s below
    // are headings on the homepage.
    // §4.1 Outer H2s (after the Core section, in tree order)
    outerH2s: [
      'Why Newark, NJ Homeowners and Businesses Choose Our Roofing Company',
      'Our Roofing Process, Step by Step',
      'Where We Provide Roofing Services in Essex County, NJ',
      'Roofing Service Costs in Newark, NJ',
      'Roofing FAQs from Newark, NJ Customers',
      'Request a Free Roofing Estimate in Newark, NJ',
    ],
  },

  // ─── §4.2 Service Page ([Service] interpolated) ────────────────────────────
  service: {
    h1: (s: string) => `${s} Newark, NJ`,
    coreH2: (s: string) => `${s} We Provide in Newark, NJ`,
    // Entity-grounding: the definitional first H2, rendered ABOVE the existing
    // tree by the EntityDefinition section when content.definition is present.
    // Additive — does NOT shift the h2s[] indices the template binds. The
    // FAQPage JSON-LD keeps its own question-form literal ("What Is {s}?").
    definitionH2: (s: string) => `${s}, Defined`,
    // §4.2 9-H2 tree (Core H2 first, then Outer H2s in order).
    h2s: (s: string) => [
      `${s} We Provide in Newark, NJ`,
      `Signs You Need ${s}`,
      `How Our Roofing Contractors Perform ${s}`,
      `${s} Costs in Newark, NJ`,
      'Repair vs Replacement: How to Decide',
      `Why Choose Newark Quality Roofing for ${s}`,
      'Related Roofing Services to Consider',
      'Roofing Guides That Explain This Service',
      `Schedule ${s} in Newark, NJ`,
    ],
  },

  // ─── §4.3 Location / City Page ([City] interpolated) ───────────────────────
  city: {
    // Statement H1 in the uniform "[Service] [City], NJ" pattern (no "in").
    // NOTE: the URL slug (roof-repair-and-installation-in-{city}-nj) and the 21
    // city metaTitles keep the "in" — only the visible H1 drops it.
    h1: (c: string) => `Roof Repair and Installation ${c}, NJ`,
    coreH2: (c: string) => `Roofing Services Available in ${c}, NJ`,
    // Entity-grounding: the locational first H2, rendered ABOVE the services
    // grid by the EntityDefinition section when content.whereIs is present.
    // Additive — coreH2/h2s unchanged (coreH2 stays the services-grid H2).
    // The FAQPage JSON-LD keeps its question literal ("Where Is {c}, NJ?").
    whereIsH2: (c: string) => `Where ${c}, NJ Is Located`,
    // D-11 new shared sections:
    permitsH2: (c: string) => `Roofing Permits in ${c}, NJ`,
    materialsH2: (c: string) => `Roofing Materials Suited to ${c}, NJ Properties`,
    // §4.3 tree H2s (Core first, then Outer in tree order).
    h2s: (c: string) => [
      `Roofing Services Available in ${c}, NJ`,
      `Common Roofing Problems in ${c}, NJ`,
      `${c}, NJ Neighborhoods We Serve`,
      `Roofing Materials Suited to ${c}, NJ Properties`,
      `Roofing Permits in ${c}, NJ`,
      `Roofing Projects We Handle in ${c}, NJ`,
      `Roofing FAQs from ${c}, NJ Property Owners`,
      `Roofing Services in Towns Near ${c}, NJ`,
      `Request a Free Roofing Estimate in ${c}, NJ`,
    ],
  },

  // ─── §4.4 Service + Location (Combo) Page ([Service], [City]) ───────────────
  combo: {
    h1: (s: string, c: string) => `${s} ${c}, NJ`,
    coreH2: (s: string, c: string) => `${s} Available in ${c}, NJ`,
    // Entity-grounding: the definitional first H2, city-agnostic (the canonical
    // service definition is propagated to every combo). Rendered ABOVE the
    // overview by EntityDefinition when content.definition is present. Additive.
    // The FAQPage JSON-LD keeps its question literal ("What Is {s}?").
    definitionH2: (s: string) => `${s}, Defined`,
    // §4.4 tree H2s (Core first, then Outer in tree order).
    h2s: (s: string, c: string) => [
      `${s} Available in ${c}, NJ`,
      `Common ${s} Problems in ${c}, NJ`,
      `Our Roof Inspection Before ${s}`,
      `${s} Costs in ${c}, NJ`,
      `Our Process for ${s} in ${c}, NJ`,
      `Why Choose Newark Quality Roofing for ${s} in ${c}, NJ`,
      `Other Roofing Services Available in ${c}, NJ`,
      `${s} in Towns Near ${c}, NJ`,
      `Roofing Guides That Explain ${s}`,
      `Schedule ${s} in ${c}, NJ`,
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
    // Cora 2026-09-04 Phase 1 asked for a 2nd H1 variation (1 -> 2). "Flashing
    // Repairs" adds it while keeping the page on repair intent — c7cdcf1 showed
    // narrowing this hub off replacement intent measurably helped, so the 2nd
    // variation must not re-broaden it. Still a statement, still carries NJ.
    // Cora 2026-09-05 Phase 1 adds the variation "roofer" in H1 (0 -> 1):
    // "by Newark, NJ Roofers". "Roof Repair" stays leading (CP151 is met and
    // must remain so), the heading stays a statement, and the NJ that
    // audit-headings' City+State rule requires is still present. 4 variations.
    'roof-repair': 'Roof Repair and Flashing Repairs by Newark, NJ Roofers',
    'roof-flashing-installation-repair': 'Roof Flashing Installation and Repair Newark, NJ',
    'gutter-installation-repair': 'Gutter Installation and Repair Newark, NJ',
    'skylight-installation-repair': 'Skylight Installation and Repair Newark, NJ',
    'fascia-installation-repair': 'Fascia Installation and Repair Newark, NJ',
    'soffit-installation-repair': 'Soffit Installation and Repair Newark, NJ',
    'roof-vent-installation-repair': 'Roof Vent Installation and Repair Newark, NJ',
  } as Record<string, string>,
} as const;

export type HeadingConfig = typeof HEADING_CONFIG;
