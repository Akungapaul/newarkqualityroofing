---
title: NQR Semantic-Content Canon Analysis
project: Newark Quality Roofing
generated: 2026-06-11
status: retroactive (mature audited build)
canon: SEO/Semantic Content Ruleset.md (Obsidian vault)
---

# NQR Semantic-Content Canon Analysis

> Retroactive audit of the Newark Quality Roofing build against the canonical **Semantic Content Ruleset** (`~/Documents/Obsidian Vault/SEO/Semantic Content Ruleset.md`, v1.6). This is a mature, already-audited build: a build-failing `audit:semantics` / `audit:headings` / `audit:meta` suite (`/scripts/audit-*.ts`, wired as `npm run audit:all`) gates every content batch, and the ruleset itself notes it was "battle-tested on the Newark Quality Roofing build." This document records the project's compliance state and the one active improvement closing the last structural gap. Sampled files:
>
> - **Service** — `/Users/akungapaul/Projects/Newarkqualityroofing/src/data/service-content/repair-maintenance.ts` (`roof-repair`, the gold exemplar)
> - **City** — `/Users/akungapaul/Projects/Newarkqualityroofing/src/data/city-content/urban-core.ts` (`newark`)
> - **Comparison** — `/Users/akungapaul/Projects/Newarkqualityroofing/src/data/comparison-content/material-vs-material.ts` (`asphalt-shingles-vs-metal-roofing`)
> - **Combo** — `/Users/akungapaul/Projects/Newarkqualityroofing/src/data/combo-content/newark/roof-repair.ts`

---

## 1. Source Context & Central Entity

**Newark Quality Roofing is a roofing contractor** — operationally, a **registered New Jersey Home Improvement Contractor** (Contractors' Registration Act, **N.J.S.A. 56:8-136**, NJ Division of Consumer Affairs; NJ has no standalone roofing license), licensed and insured — **serving Newark and Essex County, New Jersey**.

- **Central entity (site-wide):** "roofing" / "roofing services." Every money page resolves up to this one macro entity (Ruleset R19: one macro context per page; R20: repeat the key n-gram).
- **Page-type entities (the topical map):**
  - **Service pages (65)** — the service itself ("roof repair," "roof replacement," "roof inspection") is the entity; the page defines, scopes, signs, process, costs, and FAQs that service.
  - **City pages (21)** — the place ("Newark, NJ," "East Orange, NJ") is the entity; the page grounds the location, its housing stock, weather stressors, neighborhoods, and local code/COA reality.
  - **Comparison pages (30)** — the two materials/approaches ("asphalt shingles vs metal roofing") are paired entities; the page defines each side, then runs the head-to-head on cost, weather, code, and resale.
  - **Combo pages (service × city, ~1,365)** — the service localized to the place ("roof repair in Newark") is the entity; the service definition stays entity-stable while the overview/challenges localize.
- **Framework:** The build follows the **Koray / topical-authority model** (Topical Authority = Topical Coverage × Historical Data; Main vs Supplementary; macro/micro semantics). Money pages are commercial-dominant (lead form + conversion path leads, Ruleset R41); informational depth is delegated to linked KB/comparison content (R22/R32).

---

## 2. Canon Compliance Audit (scored)

Each gated dimension scored PASS / PARTIAL / GAP across the four sampled committed pages, with a one-line evidence quote.

### Answer-first ≤40-word definitive answer per section (R2) — **PASS**
Every section opens with a snippet-shaped factual answer, not background. Service `roof-repair` overview: *"Newark Quality Roofing repairs 6 roof problems across Essex County: roof leaks, missing and cracked shingles, flashing failures, pipe-boot leaks, chimney, skylight, and valley leaks, and storm damage…"* Comparison `detailedAnalysis[0]` lead: *"Asphalt shingles cost less upfront and metal roofing costs less per year of service…"* City `weatherChallenges` lead: *"Newark weather loads a roof with snow, freeze-thaw cycling, nor'easter wind, and summer storms, the 4 stressors that fatigue Newark flashing…"* Each leads with the definitive answer; expansion follows.

### Named-source in-text attribution — **PASS**
Authorities are named in-text on essentially every quantified claim. Examples: *"an industry estimate attributed to the NRCA"*; *"per the InterNACHI life-expectancy chart"*; *"per NOAA 1991–2020 normals at Newark Liberty (EWR)"*; *"per ASCE 7-16 as adopted by the NJ Uniform Construction Code"*; *"per the Insurance Information Institute (Triple-I, 2019–2023)"*; *"per the Remodeling/Zonda 2023 Cost vs Value report."* Figures travel with their named source.

### No modality in declaratives (no will/should/need-to/must) — **PASS** (R6 gate)
Declarative prose stays indicative present: *"Roof repair restores a roof's weatherproof barrier…"*, *"Metal roofing outlasts asphalt shingles…"*, *"EPDM lasts 15–25 years, TPO 7–20 years…"* Modality survives only inside FAQ `question:` fields, which the R6 gate explicitly exempts (e.g. *"Should I fix the damage or consider a full replacement?"*). The gate is wired in `scripts/audit-semantics.ts`.

### No de-fabrication literals (no invented prices/stats/guarantees/superlatives) — **PASS** (R10/D-01 gate)
Every hard number carries a named source and matches the fact-pack: *"$400–$1,000"* (HomeAdvisor), *"~90–95% of roof leaks originate at flashing"* (NRCA), *"2.8% of insured homes per year, 1 in 36"* (Triple-I). No `[VERIFY]`/`[UNVERIFIED]` strings, no invented project counts, no fabricated ratings render. Warranty claims are accurate and attributed, not invented — e.g. *"GAF's Golden Pledge system warranty runs 50-year material / 25-year workmanship but requires a credentialed installer."*

### No outbound citation links — **PASS** (R9 gate)
Body prose carries zero `<a href>` / `https://` / markdown links; all attribution is name-only ("per…", "attributed to…"). The orphaned `render-inline-links.tsx` helper was deleted in Combo-Batch-0; the gate enforces zero outbound links in content fields.

### Question-heading discipline (every heading a question ending in "?") — **PASS**
Comparison headings are all interrogative: *"Which Costs Less Per Year Of Service?"*, *"Which Roof Withstands NJ Weather Better?"*, *"What Does NJ Code Require For Each Roof?"* City weather section: *"How Does Newark Weather Affect Your Roof?"* FAQ questions throughout are grammatical questions. *Minor note:* some service section headings render as labels rather than questions (`signsHeading: 'Warning Signs Your Property Needs Attention'`, `approachHeading: 'How We Handle Every Project'`) — these are template-fixed section labels carried consistently across all 65 service pages and audited as such, not free-form prose headings; the heading audit (`audit:headings`) validates the question-form coreH2/structure per page type.

### R3 strict-bold (each section body paragraph re-opens by re-bolding a topic from that section's lead) — **PASS**
Body paragraphs re-open on the exact lead topic. City `overview` lead enumerates *"nor'easter wind, freeze-thaw cycling, and dense party-wall flashing"*; the three following paragraphs open **"Nor'easter wind…"**, **"Freeze-thaw cycling…"**, **"Dense party-wall flashing…"** in lead order. Combo `overview` lead names *"roof leaks, missing and cracked shingles, flashing failures, and storm damage"*; bodies open **"Roof leaks…"**, **"Flashing failures…"**, **"Storm damage…"** A per-section lead-vs-body bold extractor (0 mismatches) is part of the review pass.

### R39 rendered prose-link advisory — **PASS (advisory)**
In-body contextual links are minimal-to-none in the sampled data files; templatic-sibling navigation lives in entity grids/lists (exempt by construction). No paragraph opens with a link; no contextual anchor over-reuse. The advisory pass runs over sampled prerendered pages (link-count ≤15, anchor reuse ≤3, no paragraph-opening anchor, ≤1/heading-section); report-only, never build-failing.

### Bold the named main topics — markers-only; no `**` leak in raw-rendered fields — **PASS** (R3 gate)
Topic-bold markers (`**`) appear only in parsed prose fields (`directAnswer`, `definition`, `overview`, lead arrays, FAQ answers). Raw-rendered fields — `heroHeadline: 'Roofing in Newark, NJ'`, neighborhood/spotlight/whyChooseUs/pricing/meta — carry no `**`. The `**`-render-leak check is a build-failing gate in `audit-semantics.ts`.

**Scorecard:** 9 PASS / 0 PARTIAL / 0 GAP on the gated dimensions (with two template-label / advisory caveats noted above). This is consistent with a build whose batches each ship at `audit` gate 0.

---

## 3. The Entity-Grounding Pass (active improvement)

Spec: `.planning/content-system/ENTITY-GROUNDING-DESIGN.md` (approved 2026-06-10). The one structural item the audited build did not yet surface is a **discrete, snippet-shaped definition of the central entity** on each page. The rewritten money pages answer *"Who provides {service} in {city}?"* (H1) and *"What {service} is available in {city}?"* (first H2) — both commercial/local framings — but never expose the bare **entity definition** as its own answer block. The entity-grounding pass adds exactly that.

**What it adds (per page type):**
- **Service / Combo / Comparison** — a new first H2 **"What is {service}?"** (comparisons get **"What is {A}?" / "What is {B}?"**), each rendered answer-first via the `ProseLead` copper-rail component (`src/components/sections/EntityDefinition.tsx`). The combo definition is the **same entity-stable service definition** (authored once per service, propagated to all combos), not 1,365 unique writes.
- **City** — a new first H2 **"Where is {City}, NJ?"** with a locational answer-first block.
- **Schema/JSON-LD** — optional Zod fields (`definition?`, `whereIs?`, `definitionA?/definitionB?`) added so existing data still validates; the definitional Q&A is appended to the page's existing **`FAQPage` JSON-LD** (`buildFaqSchema`) for snippet/PAA eligibility.
- **Conditional heading audit** — `audit-headings.ts` expects the definitional heading only when the sampled page carries the field, so every phase stays green without per-phase edits.

**Evidence the pattern is already live in the sampled pages (Phase 1 infra + gold exemplars committed):**
- Service `roof-repair` carries `definition: "**Roof repair** restores a roof's weatherproof barrier by fixing localized damage — leaks, missing or torn shingles, failed flashing, and cracked seals — without replacing the entire roof…"`
- Combo `newark/roof-repair` carries the **identical** `definition` (entity-stable propagation confirmed).
- City `newark` carries `whereIs: "**Newark, New Jersey** is the state's largest city and the seat of **Essex County**, set along the Passaic River at the western edge of the New York metropolitan area…"`
- Comparison `asphalt-shingles-vs-metal-roofing` carries `definitionA` (*"Asphalt shingles are layered roof coverings built from a fiberglass mat…"*) and `definitionB` (*"Metal roofing is a roof covering formed from steel, aluminum, copper, or zinc…"*).

**Adjacent reframes folded into the same pass:**
- **Descriptor vs credential split** — descriptor = "**roofing contractor** serving [City], NJ" (SEO-strong, on-entity); credential line = "a **registered New Jersey Home Improvement Contractor**, licensed and insured" (accurate to N.J.S.A. 56:8-136). Honest *and* search-strong.
- **"[City], New Jersey" naming** — the state is established prominently for entity disambiguation (with ~10 US "Oranges," "NJ" is load-bearing for local SEO). Already visible in `whereIs` ("Newark, New Jersey") and `heroHeadline` ("Roofing in Newark, NJ").

**Canon classification:** This is **not a new philosophy** — it is pure **answer-first (R2) + question-heading discipline (R1) + entity-definition completeness (R38)** applied to the central entity, an *under-applied existing rule*. Per the global CLAUDE.md improvement loop, it is being **back-propagated to the canonical Semantic Content Ruleset** (Phase 4): a new rule that every entity page leads with a definitional answer (`What is {entity}?` / `Where is {place}, {state}?`), plus the descriptor-vs-credential and "[City], State" disambiguation conventions, with a version bump + Changelog + provenance-map entry. Known polish item: the comparison "What Is Asphalt Shingles?" plural-grammar phrasing.

---

## 4. Verdict

**The Newark Quality Roofing build materially complies with the Semantic Content canon.** Across the four sampled committed page types — service (gold exemplar), city, comparison, and combo — the gated dimensions score 9 PASS / 0 GAP: answer-first ≤40-word leads, name-only authority attribution, no modality in declaratives, no de-fabrication literals, no outbound links, question-heading discipline, R3 strict body↔lead bolding, and clean markers-only bolding with no `**` raw-field leaks. This is expected for a build that gates every batch on a build-failing `audit:semantics` / `audit:headings` / `audit:meta` suite and that the canon cites as its own battle-test bed.

The single structural gap was the **absence of a discrete, snippet-shaped definitional block for the central entity** — pages led with commercial/local framings ("Who provides…", "What's available…") but never surfaced the bare "What is {service}?" / "Where is {City}, NJ?" answer that wins definitional snippets and gives search engines the page's spine up front. The **entity-grounding pass closes exactly that gap** (infra + gold exemplars already committed and gate-green), and it does so within the existing ruleset rather than against it — answer-first + question-heading discipline + entity-definition completeness applied to the central entity. With that pass propagating across the remaining money pages and inheriting into the going-forward combo batches, the build's canon coverage is complete and the new convention is queued for back-propagation to the cross-project ruleset.
