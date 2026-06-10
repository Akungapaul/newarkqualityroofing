# Entity-Grounding Pass — Design Spec

**Status:** APPROVED (2026-06-10), to be executed in a fresh context.
**Origin:** User flagged, mid Combo-Batch-3 sign-off, that every page should explicitly **define its
central entity** ("What is roof repair?") answer-first for search engines. Discussion expanded it into a
coherent **entity-grounding pass** with three related changes. Brainstormed + approved via the superpowers
brainstorming flow. Next step in the new context: `writing-plans` → implement.

---

## Context / why
The rewritten pages answer *"Who provides {service} in {city}?"* (H1) and *"What {service} is available in
{city}?"* (first H2) — both **commercial/local** framings. They never surface the **entity definition** as a
discrete, snippet-shaped answer. Adding an explicit *"What is {service}?"* (and, for cities, *"Where is
{City}, NJ?"*) block:
- wins **featured snippets / PAA** for definitional queries;
- gives search engines the page's **central entity** up front (the spine of the Koray/topical-authority model
  the project already follows);
- is pure **answer-first + question-heading discipline** — an under-applied rule, not a new philosophy →
  must be **back-propagated to the canonical Semantic Content Ruleset**.

Two adjacent gaps surfaced in the same discussion and are folded in:
- **"[City], State" naming.** Combos say "Orange" / "Essex County" but rarely "Orange, **NJ**". With ~10 US
  "Oranges," the state is essential for entity disambiguation + local SEO.
- **"Roofing contractor" vs "Home Improvement Contractor."** NJ has **no standalone roofing license** — roofing
  is covered by **Home Improvement Contractor registration** (Contractors' Registration Act, N.J.S.A. 56:8-136,
  Division of Consumer Affairs). The de-fab pass used "New Jersey Home Improvement Contractor" precisely because
  it's the accurate credential. But that term is SEO-weak / off-entity. **Resolution (user-approved): split
  descriptor from credential** — descriptor = "roofing contractor serving [City], NJ"; credential line =
  "a registered New Jersey Home Improvement Contractor, licensed and insured." Honest *and* search-strong.

## Scope (user-approved page types)
| Page | Count | Definitional block | Heading |
|---|---|---|---|
| Service | 65 | define the central service | **What is {service}?** |
| Combo | 1,365 | the **same** service definition (entity-stable; localization stays in overview) | **What is {service}?** |
| Comparison | 30 | define each side before the head-to-head | **What is {A}?** / **What is {B}?** |
| City | 21 | locational answer for the place entity | **Where is {City}, NJ?** |

## Approach (chosen: A — dedicated definitional block)
A discrete definitional Q&A section near the **top** of each page: its own question-heading + an answer-first
copper-rail lead (reuse `ProseLead` / `parseRichText`), **also appended to the page's `FAQPage` JSON-LD** for
snippet eligibility.
- *Rejected B:* reframe `overview[0]` in place — not discrete enough for a clean snippet.
- *Rejected C:* make it the first FAQ — the FAQ section renders at the page bottom, too weak a placement for an
  entity definition.

## Architecture (infra — mirrors Combo-Batch-0 / CMP-0 / Cities-Batch-0)
1. **Schema** (`src/data/*-content/schema.ts`): add **optional** fields so existing data still validates, then
   backfill:
   - service + combo: `definition?: z.string()` (the "What is {service}?" answer; answer-first ≤40-word first
     sentence, may run 1–3 sentences).
   - city: `whereIs?: z.string()` (the "Where is {City}, NJ?" answer).
   - comparison: `definitionA?: z.string()`, `definitionB?: z.string()`.
2. **Templates** (`ServiceTemplate`/`ComboTemplate`/`CityTemplate`/`ComparisonTemplate` + a new
   `EntityDefinition` section component): render the block as the **first H2 after the hero**, via `ProseLead`.
   Append the definitional Q&A to the existing FAQ JSON-LD builder (`buildFaqSchema`) so it's structured-data
   eligible (markdown stripped, as that builder already does).
3. **Heading-config + audit** (`heading-config.ts`, `scripts/audit-headings.ts`): `What is {service}?` becomes
   the **new first H2 (coreH2)** — it IS the core entity question; the current "What {service} is available…"
   shifts to a later H2. Update `HEADING_CONFIG` for service/combo/comparison, add a `Where is {City}, NJ?`
   entry for city, and update the audit's expected coreH2 + structure. (This is the riskiest infra piece —
   verify the rendered-heading audit passes on a sample of each page type.)
4. **Gate (same as every batch):** `npm run build` (0) · `audit:semantics` (0 gate) · `audit:headings` (PASS,
   with the new coreH2) · `audit:meta` (0) · a render check that the new section shows one extra H2, 0 `**`
   leaks, and the definition appears in the page's JSON-LD.

## Content strategy (the efficient part)
- Author **65 service definitions ONCE** → **propagate the same definition to all 1,365 combos** for that
  service (city-agnostic; localization already lives in the overview). Not 1,365 unique writes.
- **21 city "Where is {City}, NJ?"** answers from the existing fact banks (`cities-batch*/CITY-FACTS-*.md` —
  county, borders, distance-to-NYC, township/borough, character; all already researched).
- **30 comparison side-definitions** — most reuse the 65 service/material definitions.
- **Contractor reframe + "[City], NJ" naming**: descriptor "roofing contractor", credential "registered NJ
  Home Improvement Contractor, licensed and insured"; establish "[City], New Jersey" in the definitional answer
  + hero + heading (naturally, not robotically). This is a content edit across ALL rewritten pages.
- **Re-run `_dup-analysis.ts` after** — a shared ≤40-word definition among ~15 localized passages won't cross
  the doorway threshold (definitions are *expected* consistent across cities). Confirm the 0-near-dup state holds.

## Phasing (each phase = its own gated batch; `/clear` between)
1. **Infra** — schema (optional fields) + templates + `EntityDefinition` component + heading-config + audit +
   JSON-LD. Ship green; blocks render empty until backfilled. (Mirror of Batch 0.)
2. **Money-page backfill** — 65 service definitions + reframe; 21 city "Where is" + reframe; 30 comparison
   sides + reframe. (Services/cities/comparisons are already answer-first and committed → targeted edits +
   one new field each.)
3. **Combo backfill** — propagate the 65 service definitions + apply the contractor/[City],NJ reframe to the
   **3 done cities** (Newark / East Orange / Orange = 195 combos) now; the **remaining 18 cities INHERIT the
   pattern in their combo batches** (bake the definitional block + reframe into the combo-batch author brief
   from Irvington onward — no separate pass).
4. **Ruleset back-propagation** — add to the canonical `~/Documents/Obsidian Vault/SEO/Semantic Content
   Ruleset.md`: (R-new) every entity page leads with a definitional answer (`What is {entity}?` / `Where is
   {place}, {state}?`); the descriptor-vs-credential convention; the "[City], State" disambiguation convention.
   Bump version + Changelog + provenance map (per global CLAUDE.md).

## Decisions locked
- Page types: services + combos + comparisons + cities (ALL).
- "What is {service}?" is the **new first H2** (coreH2) on service/combo/comparison; cities get "Where is
  {City}, NJ?".
- Combo definition = the **canonical service definition** (entity-stable), NOT 1,365 unique writes.
- Contractor framing: **"roofing contractor"** descriptor + **"registered New Jersey Home Improvement
  Contractor, licensed and insured"** credential.
- City naming: **"[City], New Jersey"** established prominently.
- Combo reframe **folds into going-forward city combo batches**; only the 3 done cities + money pages get a
  one-time backfill.

## Open items for the implementation plan (resolve in the new context)
- Exact placement: confirm the definitional section renders ABOVE the existing overview lead on each template.
- Whether `definition` should eventually become **required** (after backfill) to enforce coverage.
- Comparison JSON-LD: two `What is …?` entries vs one — and whether to also emit `DefinedTerm`.
- The contractor/[City],NJ reframe across 195 done-city combos + money pages: deterministic-sweep-able portions
  (e.g. "New Jersey Home Improvement Contractor" descriptor → "roofing contractor … registered New Jersey Home
  Improvement Contractor") vs author-judgment portions.
- "Licensed" vs "registered": NJ HIC is technically a *registration*; decide whether to keep the common
  "licensed and insured" phrasing or tighten to "registered … and insured."

## Resume (new context)
Read this spec + `.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md` + the memory files
([[content-rewrite-initiative]], [[nqr-batch-resume]], [[entity-grounding-initiative]]). Start with the
**brainstorming → writing-plans** handoff already done — go straight to `writing-plans` for **Phase 1 (Infra)**,
then execute. The combo layer's remaining work (Batch 4 = Irvington onward) must INHERIT this pattern.
