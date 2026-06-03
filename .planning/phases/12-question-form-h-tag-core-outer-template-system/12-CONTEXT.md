# Phase 12: Question-Form H-Tag & Core/Outer Template System - Context

**Gathered:** 2026-06-03
**Status:** Ready for planning
**Source:** Synthesized from the authoritative spec (`.planning/IMPLEMENTATION-PLAN.md` §17 + §19 Phase 12 + §12/§18) and the verbatim H-tag trees (`.planning/IMPLEMENTATION-BRIEF.md §4.1–4.4`), plus 4 HOW decisions taken in discussion. ROADMAP Phase 12 success criteria + REQUIREMENTS KB-03 / HTAG-01..08 / AUD-01.

> **Operating mode (inherited from IMPLEMENTATION-PLAN.md):** Implement this plan exactly. Implementation language only (Implement/Create/Rewrite/Replace/Remove/Promote/Structure/Verify). Not an audit, not recommendations, not partial application. The page-level H-tag **trees** and the **heading policy** are LOCKED verbatim by the spec — they are not re-decided here. This discussion only resolves the HOW (audit strategy, enforced page-set, new-section content depth, title-rewrite mechanics).

<domain>
## Phase Boundary

Phase 12 is the **heading-structure phase** of milestone v1.1. It rewrites the heading hierarchy and section ordering of the existing templates so every important page emits a single **question-form H1** and an **all-questions** H2/H3/H4 tree with **Core-before-Outer** ordering, rewrites all **253 article titles** to question form, and ships a new **build-failing `audit:headings`** that enforces the policy across the site.

**In scope:**
1. Rewrite the **homepage, Service, City, Combo, and in-scope Core/hub templates** to the verbatim §4.1–§4.4 question-form H-tag trees (brief).
2. Remove split H1s (`<br>`/split-`<span>`); promote `<p>`/`<span>`/`<div>` pseudo-headings to real headings; remove H-tags from nav/footer/buttons/form-labels.
3. Reorder every template **Core-before-Outer**; the first major H2 after the hero is the Core Section (§17 first-Core-H2 strings); move `ContentAuthorityBlock` out of the Core band.
4. Add the homepage **5-step "How Does Our Roofing Process Work?"** H2 + a **Roofing-Knowledge-Base link** section + the verbatim §4.1 Outer H2s.
5. Add the **new city sections** — "What Should You Know About Roofing Permits in [City]?" and "What Roofing Materials Work Best for [City] Properties?" (§4.3).
6. Rewrite all **253 article titles → question form** (cluster-keyed, unique, slugs stable) by editing the generator's title patterns and regenerating.
7. Create **`npm run audit:headings`** as a build-failing gate (`process.exit(1)`), replacing the existing advisory data-level audit.

**Explicitly OUT of scope (deferred — see `<deferred>`):**
- Body **paragraph content** rewrites, URL/slug changes, design/colors/fonts, schema markup, internal-link wiring (Phases 13–16 / unchanged).
- **Comparison page** headings and the **bodies of the 253 existing articles** are NOT forced to question-form in Phase 12 (only article *titles* are). §18 explicitly says do not force existing article bodies into a rigid shape.
- KB hub/cluster/article **body** trees (§5/§6 → Phase 13), glossary §7 tree (Phase 14).
- Fabricated trust values, shared `<CtaBanner/>`/dedup, SEO-language component deletion (Phase 16); repointing old-hub `/services` links (Phase 15).

## Phase Goal (from ROADMAP)
Every important template emits a single question-form H1 and an all-questions heading tree with Core-before-Outer ordering, enforced by a build-failing heading audit.
</domain>

<decisions>
## Implementation Decisions

Each `D-NN` maps to one or more Phase-12 requirement IDs. The planner MUST cite the relevant `D-NN` in a plan's `must_haves`/`truths` and the REQ-IDs in plan frontmatter. **D-01..D-08 are LOCKED by the authoritative spec** (verbatim trees + policy). **D-09..D-12 are the HOW decisions taken in this discussion.**

### Heading Policy & Trees (LOCKED verbatim by spec)
- **D-01** — Question-form heading policy (§17): exactly **one H1/page**; H1 is a question; **all H2/H3/H4 are questions** (end in `?`); **no skipped levels** (h1>h2>h3>h4); **no `<br>` / split-`<span>`** inside the H1 (single uninterrupted string); **H1 is never repeated as an H2**; **no H-tags in nav/footer/buttons/form-labels**; **no `<p>`/`<span>`/`<div>` pseudo-headings** introduce a real section (promote them). → **HTAG-01, HTAG-03**
- **D-02** — **Homepage** = verbatim **§4.1** tree, Core-first: the **"What Roofing Services Do We Provide in Newark and Essex County?"** H2 (7 service H3s) precedes every Outer section; include the 5-step **"How Does Our Roofing Process Work?"** H2, a **Roofing-Knowledge-Base** link section, and the verbatim §4.1 Outer H2s (Why Choose / Where / Cost / FAQ / Free Estimate). H1 = **"Who Should You Call for Roofing Services in Newark?"** → **HTAG-02**
- **D-03** — **Service page** H1 = **"Who Provides [Service] in Newark?"** + verbatim **§4.2** 9-H2 tree (What [Service] Do We Provide → sub-service H3s; How Do You Know If You Need…; How Do Our Contractors Perform…; How Much Does…Cost; Repair or Replace; Why Choose Us; Related Services; KB Articles; Schedule). → **HTAG-04**
- **D-04** — **City page** H1 = **"Who Provides Roofing Services in [City]?"** + verbatim **§4.3** tree, **including the NEW "What Should You Know About Roofing Permits in [City]?" and "What Roofing Materials Work Best for [City] Properties?" sections**. → **HTAG-05**
- **D-05** — **Combo page** H1 = **"Who Provides [Service] in [City]?"** + verbatim **§4.4** tree. → **HTAG-06**
- **D-06** — **Core-before-Outer on every template**; the first major H2 after the hero is the Core Section per §17 first-Core-H2 strings (Home / Service / Location / Service+Location); **`ContentAuthorityBlock` is moved out of the Core band**. → **HTAG-07, HTAG-08**
- **D-07** — Rewrite **all 253 article titles → question form**, cluster-keyed, **unique**, **slugs stable**. → **KB-03**
- **D-08** — **`audit:headings`** is a **build-failing** gate (replaces the existing advisory `scripts/audit-headings.ts`). → **AUD-01**

### HOW Decisions (this discussion)
- **D-09 (Audit strategy = Hybrid)** — `audit:headings` runs **two passes**: (1) a **static** pass over heading strings/data for **all** in-scope pages — every heading ends in `?`, exactly one H1, H1 ≠ any H2, 253 article titles unique; (2) a **rendered-HTML** pass over **one representative page per template** (home, one service, one city, one keep-combo, the in-scope core/hub pages) for the DOM-only rules — no `<br>`/split-`<span>` in H1, no `<h*>` inside nav/footer/buttons/form-labels, no skipped levels, first `<h2>` after hero = Core (Core-before-Outer). Any violation → **`process.exit(1)`** (matches the Phase 11 `audit:redirects`/`audit:sitemap` fail-pattern). The rendered pass is cheap because templates are shared. → **AUD-01, HTAG-01..08**
- **D-10 (Enforced page-set = "Spec scope + hubs")** — `audit:headings` enforces the **full question-form tree** on: **homepage**, **all service pages**, **all city pages**, **all live combos** (255 keep **+** 942 noindex — both render the shared `ComboTemplate`), and the **important core/hub pages** (`/roofing-services` & `/service-areas` hubs, the 6 new hubs `/residential-roofing` `/commercial-roofing` `/flat-roof-systems` `/roofing-materials` `/free-roofing-estimate` `/our-roofing-process`, `/contact`, `/about`). **Article *titles*** are checked for question-form + uniqueness (NOT their bodies). **Comparison pages and existing-article *bodies* are NOT enforced** in Phase 12. **Utility pages excluded** entirely: `/privacy`, `/thank-you`, the 404. → **HTAG-03, HTAG-07, HTAG-08, AUD-01**
- **D-11 (New city sections = shared, localized copy)** — Add the §4.3 **Permits** and **Materials** sections as **real sections** with **one shared content block each**, with `[City]` interpolated: Permits = an Essex County / NJ roofing-permit explainer; Materials = roofing-material guidance (asphalt / metal / flat-roof membrane) keyed to property types. **No new per-city schema fields and no 21 hand-authored variants.** Sections must be substantive enough to not read as thin (satisfies the §17/§18 "no thin/pseudo section" intent); city-specific enrichment may come later. → **HTAG-05**
- **D-12 (Article-title mechanics = rewrite generator patterns + regen)** — Rewrite the **~12 title-pattern templates in `scripts/generate-articles-ts.ts`** to question form (e.g. `Signs You Need {Service} in NJ` → `What Are the Signs You Need {Service}?`; `{Service} Cost in NJ: What to Expect` → `How Much Does {Service} Cost in NJ?`; `Choosing the Right {Service} Contractor in NJ` → `How Do You Choose a {Service} Contractor?`; `{Service}: Pros and Cons for NJ Properties` → `What Are the Pros and Cons of {Service}?`; `How to Choose: {Comparison} in NJ` → `Which Is Better: {Comparison}?`), then **regenerate `articles.ts`** (`npm run generate:articles` or equivalent). Each pattern must **preserve its distinct angle** (signs / cost / contractor / pros-cons / guide) so two patterns don't collapse to the same question for one service; the audit's uniqueness check guards collisions. **Rewrite only the on-page H1 (`article.title`, no length cap) — keep `metaTitle` as a concise ≤60-char SERP title** (question only where it naturally fits ≤60). Slugs are generated independently and stay stable. **Do NOT hand-edit `articles.ts`** — it is emitted by the generator and would be wiped on regen.

### Claude's Discretion
The spec + the decisions above lock the WHAT and the policy. The planner/executor decide these implementation details, provided they satisfy D-01..D-12 and the acceptance criteria:
- **Heading-config storage** — whether the verbatim question strings live in a small central heading-config module (preferred where it removes duplication and lets the static audit pass read the same source of truth) vs. inlined per template. Either is acceptable as long as the audit verifies the rendered output, not just the config.
- **Exact rendered-sample page list** for the audit's rendered pass — pick one representative real page per template/page-type (the templates are shared, so one combo covers all 1,197).
- **How shared/promoted headings are implemented** — promoting pseudo-headings (testimonials/CTA/pricing-PAA/maps) to real `<h2>/<h3>` and the mechanics of the Core/Outer reorder (component reordering vs. a structured section list) — as long as the rendered DOM passes the audit. (Note: a shared `<CtaBanner/>`/dedup pass is Phase 16; Phase 12 only needs the headings correct.)
- **Audit implementation internals** — parser choice for the static pass (regex vs. ts-morph/AST) and the HTML parser for the rendered pass (e.g. a lightweight DOM/HTML parser); question-form detection rule (default: trimmed heading text ends in `?`).
</decisions>

<canonical_refs>
## Canonical References

**Downstream agents (researcher, planner, executor) MUST read these before planning or implementing.**

### Authoritative spec — the LOCKED trees & policy
- `.planning/IMPLEMENTATION-PLAN.md` — Read **§17** (Heading Policy, audit-enforced — the exact policy + first-Core-H2-by-type strings), **§19 → Phase 12** (the implement + verify lists), **§12** (SEO-facing-language H-tag relabels → question form, e.g. "Related Roofing Services" → "What Related Roofing Services Should You Consider?"), and **§18** (Article Rules — 253 titles → questions, slugs stable, do NOT force existing article bodies into a shallow shape).
- `.planning/IMPLEMENTATION-BRIEF.md` — **THE verbatim question-form H-tag trees.** Read **§4.1** (Homepage), **§4.2** (Service), **§4.3** (City/Location — includes the new Permits + Materials sections), **§4.4** (Service+Location/Combo). These are copied **exactly**; do not paraphrase. (§5 KB hub / §6 KB article / §7 glossary trees are Phase 13/14 — read for awareness only.)

### Roadmap & requirements
- `.planning/ROADMAP.md` → **Phase 12** section — goal, dependency (Phase 11), and the 5 success criteria.
- `.planning/REQUIREMENTS.md` → **KB-03, HTAG-01..HTAG-08, AUD-01** — the 10 requirement definitions this phase satisfies.

### Existing code the phase modifies/replaces (source of truth for current state)
- `scripts/audit-headings.ts` — **REPLACE.** Currently a data-level, **advisory** audit that enforces the OLD keyword+location rules (directly contradicts question-form). Rewrite to the Hybrid build-failing audit (D-09).
- `scripts/audit-redirects.ts`, `scripts/audit-sitemap.ts` — **fail-pattern reference** (Phase 11): `process.exit(1)` on violation, `process.exit(0)` on pass; wired in `package.json`.
- `package.json` → `"scripts"` — `audit:headings` already declared (`tsx scripts/audit-headings.ts`); ensure it stays wired and is invoked in the build/CI gate.
- `src/app/page.tsx` — homepage; currently interleaves Core/Outer and renders `PriorityIndexingHub` inside the Core band; reorder Core-first + add 5-step process H2 + KB-link section (D-02, D-06).
- `src/components/templates/ServiceTemplate.tsx`, `CityTemplate.tsx`, `ComboTemplate.tsx`, `CoreTemplate.tsx`, `HubScaffold.tsx` — templates to rewrite to the verbatim trees + Core-before-Outer (D-03, D-04, D-05, D-06).
- `src/components/sections/*Hero*.tsx` (`HeroSection.tsx`, `ServiceHero.tsx`, `CityHero.tsx`, `ComboHero.tsx`, `ArticleHero.tsx`) — H1 sources; ensure single uninterrupted question-form H1 (no `<br>`/split-`<span>`).
- `src/components/sections/ContentAuthorityBlock.tsx`, `PriorityIndexingHub.tsx` — `ContentAuthorityBlock` must be moved OUT of the Core band (D-06); jargon-component deletion + SEO-language scrub is Phase 16 (do not delete here).
- `scripts/generate-articles-ts.ts` — **source of truth for the 253 titles** (emits `src/data/articles.ts`). Rewrite the ~12 title patterns → question form (D-12); the on-page H1 = `article.title`.
- `src/data/articles.ts` — generated registry (253 articles; each has `title` (H1), `metaTitle` ≤60, stable `slug`, `cluster`). **Do not hand-edit** — regenerated from the generator.
- `src/components/sections/ArticleHero.tsx:65` — renders `{article.title}` as the article H1 (confirms `title` is the field to make question-form).
- `src/data/city-content/*.ts` (`urban-core.ts`, `first-suburbs.ts`, `west-essex.ts`, `caldwells-roseland.ts`, `affluent-suburban.ts`, `index.ts`) — city content (has `weatherChallenges`, `neighborhoods`, `residential`, `commercial`, `projectSpotlights`, `testimonials`; **no `permits`/`materials` fields**). The shared Permits + Materials copy (D-11) lands here or in shared template copy. **Note:** these files also hold fabricated `stats.rating`/`projectCount` — leave for Phase 16; do not surface new fake values.
- `src/data/services.ts`, `src/data/cities.ts` — entity names that interpolate into the `[Service]`/`[City]` heading placeholders.
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **Phase 11 build-failing audit pattern** (`audit-redirects.ts`/`audit-sitemap.ts`): copy the `tsx` + `process.exit(1/0)` structure and `package.json` wiring for `audit:headings`.
- **Generator-driven article titles**: titles are pattern-derived in `generate-articles-ts.ts` — one edit point covers all 253 (no per-article work).
- **Shared templates**: all 1,197 live combos render one `ComboTemplate`; all 65 services one `ServiceTemplate`; all 21 cities one `CityTemplate` — so a per-template rewrite + a per-template rendered audit sample covers the whole set.

### Established Patterns
- Heroes render the H1; section components render their own H2/H3 — the reorder happens at the template level (which sections render, in what order) and inside section components (heading text + level).
- `metaTitle` is `z.string().max(60)` — enforced cap; question-form titles often exceed it, which is why D-12 keeps `metaTitle` separate from the H1.

### Integration Points
- `audit:headings` must read the same rendered output the site ships (Next.js build output) for its rendered pass, and the data/registry (`services`, `cities`, `combos`, `articles`, `corePages`) for its static pass.
- The Core-before-Outer reorder must not break Phase 9/10 animation wrappers or the above-the-fold lead form (LEAD-01 invariant: form stays above the fold).
</code_context>

<specifics>
## Specific Ideas (concrete locked values)

- **First-Core-H2 by page type (§17):** Home → "What Roofing Services Do We Provide in Newark and Essex County?"; Service → "What [Service] Do We Provide?"; Location → "What Roofing Services Are Available in [City]?"; Service+Location → "What [Service] Is Available in [City]?". (KB → "What Does [Concept] Mean?" — Phase 13.)
- **Locked H1s:** Home = "Who Should You Call for Roofing Services in Newark?"; Service = "Who Provides [Service] in Newark?"; City = "Who Provides Roofing Services in [City]?"; Combo = "Who Provides [Service] in [City]?".
- **Question-form detection rule (default):** trimmed heading text ends with `?`.
- **Audit fail behavior:** `process.exit(1)` on any violation (Phase 11 pattern); `process.exit(0)` on pass.
- **Article counts:** 253 articles; rewrite the on-page `title` (H1), keep `metaTitle` ≤60.
- **Enforced combos:** all 1,197 live (255 keep + 942 noindex) via the shared `ComboTemplate`.
- **Excluded from audit:** `/privacy`, `/thank-you`, the 404; comparison page bodies; existing-article bodies.

## Phase 12 Verify (from IMPLEMENTATION-PLAN §19)
`audit:headings` + build pass · one question H1/page · all H2/H3/H4 questions · no skipped levels · no `<br>`/split-span H1 · H1 ≠ H2 · no nav/footer/form/button H-tags · Core before Outer · 253 titles unique + slugs stable.
</specifics>

<deferred>
## Deferred Ideas (later phases — DO NOT implement in Phase 12)

- **Comparison pages + 253 existing-article *bodies*:** not forced to question-form in Phase 12 (only article *titles* are). §18 forbids forcing existing article bodies into a shallow shape. A site-wide crawl re-checks all H-tags in **Phase 17 (QA-01)** — if comparison/article-body headings need question-form, that surfaces there or in a dedicated follow-up.
- **Phase 13:** KB hub (§5) + 6 cluster hubs + 44 KB article bodies (§6 template, question-form H1 + visible FAQs); folding the 253 under clusters with cluster breadcrumbs; FAQPage schema.
- **Phase 14:** Glossary §7 tree + 25 DefinedTerms.
- **Phase 15:** Repoint the homepage `/services` link (and all old-hub links) to `/roofing-services` etc.; per-type JSON-LD; single Organization/LocalBusiness @id.
- **Phase 16:** Remove fabricated `stats.rating`/`projectCount` in `city-content/*` and elsewhere; gate AggregateRating; shared `<CtaBanner/>` + dedup; delete `PriorityIndexingHub` + `ContentAuthorityBlock` + dead jargon components; full SEO-language scrub. *(Phase 12 only moves `ContentAuthorityBlock` out of the Core band and relabels any non-question headings it rewrites to question form; it does not delete components.)*
- **City-specific Permits/Materials content:** D-11 ships shared localized copy; per-city unique permit/material data is a possible later enrichment, not Phase 12.

---

*Phase: 12-question-form-h-tag-core-outer-template-system*
*Context gathered: 2026-06-03 from `.planning/IMPLEMENTATION-PLAN.md` (§17/§18/§19) + `.planning/IMPLEMENTATION-BRIEF.md` (§4.1–4.4, verbatim trees) + 4 HOW decisions*
