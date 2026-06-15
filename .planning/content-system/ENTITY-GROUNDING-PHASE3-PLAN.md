# Entity-Grounding — Phase 3 (Combo Backfill) Plan

## Context

The entity-grounding initiative adds an answer-first **"What Is {service}?"** definitional
block to every page and reframes the company descriptor to the SEO-strong **"roofing
contractor … registered New Jersey Home Improvement Contractor"** (no "licensed" — NJ HIC
is a *registration*, N.J.S.A. 56:8-136). Phase 1 (infra) and Phase 2 (money pages: 65
services, 21 cities, 30 comparisons) are **done + committed**. The combo schema already
carries optional `definition?` and `ComboTemplate` already renders it gated as the first
content H2 + feeds it to the FAQPage JSON-LD (Phase-1 wiring, verified).

**Phase 3 = backfill the 195 done-city combos** (Newark / East Orange / Orange — all 65
wired each). These were authored in Combo Batches 1–3 *before* entity-grounding, so they
have **no `definition`** (except the `newark/roof-repair` Phase-1 exemplar), still use the
**old "as a New Jersey Home Improvement Contractor"** descriptor (189×, no "roofing
contractor"/"[City], NJ"), and their `metaDescription` says **"NJ-licensed"** (78×). The
remaining 18 cities **inherit** this pattern in their own combo batches (Irvington / Batch 4
onward) — *not* a Phase-3 pass.

Outcome: all 195 combos lead with the canonical service definition (city-agnostic) and read
"roofing contractor serving [City], New Jersey … registered NJ HIC", matching the already-
shipped service/city/comparison pages — without crossing the near-duplicate doorway threshold.

## Decisions locked (this session)

| Decision | Resolution |
|---|---|
| **Batching** | **Split into two gated sub-batches** with `/clear` between: **3a Definitions** (deterministic, low-risk, high SEO value) then **3b Reframe** (author-judgment). |
| **Credential-chip debt** | **Out of Phase 3** — separate follow-up. The `NJ HIC Licensed` chip + "licensed" wording in `content-constants.ts:117/124/187` and the 65 service objects render on Service/Home pages (NOT combos) and contradict decision #2; sweep them as their own small batch *after* Phase 3. |
| **Reframe gold template** | Each service's **already-committed, gated 2a service-page `directAnswer`** is the per-service reframe exemplar — combo authors mirror it, swapping the city. |
| **whyChooseUs** | Combo `whyChooseUs` is **dead code** (`ComboWhyChooseUs` uses a hardcoded generator). Out of required scope; optional hygiene only. |

## Scope / blast radius

| Sub-batch | Files (data only — schema/template/audit FROZEN from Phase 1) | Count |
|---|---|---|
| **3a** | `src/data/combo-content/{newark,east-orange,orange}/*.ts` (add `definition`) | 195 objects / 3 dirs |
| **3b** | same 195 files (reframe `directAnswer` + sweep `metaDescription`) | 195 objects |

No changes to any `schema.ts`, template, component, `heading-config.ts`, or `scripts/audit-*.ts`
(all frozen from Phase 1). If a task wants to touch one of those, stop — the reframe over-reached.

Reuse the freshest scripts: `.planning/content-system/entity-grounding-2c-comparisons/`
(`splice.mjs` string-aware INSERT/replace, `{AUTHOR,REVIEW}-WORKFLOW.js`, `cmp-def-wordcount.ts`)
and `.planning/content-system/combo-batch3-orange/_dup-analysis.ts`. Persist this plan as
`.planning/content-system/ENTITY-GROUNDING-PHASE3-PLAN.md` (Task 0, committed in the docs commit).

---

## Sub-batch 3a — Definition propagation (deterministic, no authoring)

**Working dir:** `.planning/content-system/entity-grounding-3a-combo-defs/`

1. **Extract the 65 authoritative service `definition`s by `serviceId`** from `src/data/service-content/`
   — via a `tsx` script importing the service-content index (map `serviceId → definition`); emit each as
   a backtick / `JSON.stringify` literal to sidestep apostrophe escaping (per the 2c/perl file-state lesson).
   These are byte-identical to the gated 2a defs (≤40w, entity-bolded, figure-free, no modality) → the
   combo gets the **same** def (city-agnostic; localization stays in `overview`).
2. **Splice `definition:` into each of the 195 combos** immediately after the `directAnswer` field
   (matching the exemplar `newark/roof-repair.ts:8`), reusing the 2c `splice.mjs` string-aware insertion
   (anchor on `directAnswer:`, find the single-quoted value's close, INSERT after — **0 deletions**).
   **Skip** any combo that already has `definition:` (`newark/roof-repair`; assert it matches the source).
3. **Gate:** `npm run build` (0) · esbuild parse-check all 195 · `npm run audit:headings` PASS (combo
   samples with a def flip their first-H2 to `What Is {Service}?`; the keep + a noindex sample pass) ·
   `npm run audit:meta` 0 · `audit:semantics --types=combos --ids=<3-city csv>` — **capture the baseline
   count first, assert NO increase** (the ~5802 pre-existing dead-code `whyChooseUs` fabs are baseline;
   the clean 2a defs add 0) · `def-wordcount` 195/195 ≤40w · `grep -L "definition:"` over the 195 → empty.
4. **Re-run `_dup-analysis.ts`** (combo-batch3 version) across the 3-city set: confirm a shared ≤40w def
   among each service's 3 city combos does **NOT** cross the doorway threshold (0 near-dups ≥50% Jaccard
   holds). This is the riskiest assertion of 3a — the design spec predicts it holds; verify it.
5. **Render** (`/roof-repair-newark` etc. on :3230 + dev :3240), **sign-off**, **2 commits**
   (`feat(content): entity-grounding Phase 3a — definition backfill on 195 done-city combos` + docs),
   update memory, **prompt `/clear`**.

---

## Sub-batch 3b — Contractor/[City],NJ reframe (author workflow + adversarial review)

**Working dir:** `.planning/content-system/entity-grounding-3b-combo-reframe/`

1. **Recon:** snapshot the descriptor surface (`grep -rno "as a New Jersey Home Improvement Contractor"`
   and the 21 directAnswers with no credential tail, already identified). Build the city display-name map.
2. **Author workflow — 1 agent per service (65 agents).** Each agent receives: the service's committed 2a
   `directAnswer` (gold template) + that service's 3 city combo `directAnswer`s + the 3 city display names
   + reframe spec D. It returns structured JSON `{newark, eastOrange, orange}` = the 3 **reframed**
   directAnswers (data only — the 2c pattern), each: inject **"roofing contractor"** descriptor + establish
   **"[City], New Jersey"** + credential tail **"as a registered New Jersey Home Improvement Contractor"**
   (never "licensed"); keep the bolded answer span **≤40 words** (end bold after "…Essex County"/"New
   Jersey" if it overflows); **no modality**; preserve each combo's city-specific specifics. The 21 no-
   credential directAnswers get descriptor + city, appending the registered-HIC tail only if flow/≤40w allows.
   (Workflow gotchas: `args` may arrive as a JSON **string** — guard `typeof args==='string'?JSON.parse:...`;
   backtick prose; `node --check` the `.mjs` first.)
3. **Deterministic apply (one splice pass):** replace each combo's `directAnswer` value with the agent's
   reframed string (string-aware field replace, scope-safe). **metaDescription credential sweep:**
   `NJ-licensed` → `NJ-registered` (78×) **with the 160-char Zod-cap guard** — trim any meta that exceeds
   160 after +2 chars (the 2b build-break lesson: "Free written estimate."→"Free estimate." / drop a word).
   Grep combo `faqs`/`overview` for any remaining NQR "licensed" claim and reword to "registered".
   *(Optional hygiene: sweep the dead-code `whyChooseUs[0]` "…— licensed and insured" → "…— insured"; skip
   if it risks the gate — it doesn't render.)*
4. **Gate:** `npm run build` 0 · esbuild parse-check 195 · `audit:headings` PASS · `audit:meta` 0
   (metas changed → re-verify ≤160 + still distinct) · `audit:semantics --types=combos --ids` no new
   violations · reframe checks: directAnswer ≤40w bold span, `**` balanced, **0** "licensed" remaining,
   "registered" present, "[City], New Jersey" present, no `will/should/must/need to/can` in declaratives.
5. **Review → refute (Workflow):** dimensions = reframe integrity (≤40w bold, accurate "registered"
   credential, correct city name, natural read, no modality/de-fab) + cross-city consistency with the 2a
   service gold template. Refute med/high; auto-confirm low. **Fix in-place** (do NOT re-splice — stale data
   reverts fixes; 2c lesson) + **orchestrator cross-file recurrence sweep** (per-combo reviewers under-flag
   systematic recurrences — e.g. a recurring awkward appositive, a city-name slip, a leftover "licensed").
   Re-parse-check + **re-gate** (a fixer can reintroduce a >40w/modality violation).
6. **Render** (:3230 + dev :3240 — mandatory live URL), **sign-off**, **2 commits**
   (`feat(content): entity-grounding Phase 3b — roofing-contractor/[City],NJ reframe on 195 done-city combos`
   + docs), update memory (`[[entity-grounding-initiative]]`, `[[nqr-batch-resume]]`, `MEMORY.md`),
   **prompt `/clear`**.

---

## Out of scope (surface as follow-ups)

- **Credential-chip debt** (user-deferred to a separate batch): `content-constants.ts:117/124/187`
  "NJ HIC … licensed" + the `credentialsHighlight: ['NJ HIC Licensed']` chip on the 65 service objects
  → "registered"; re-render Service/Home. Recommended as the **next** mini-batch after Phase 3.
- **18 inherit-cities** — bake the definitional block + reframe into the combo-batch author brief from
  Irvington (Combo Batch 4) onward; not a Phase-3 pass.
- **Phase 4** — back-propagate the definitional-block + descriptor-vs-credential + "[City], State" rules to
  the canonical Obsidian `SEO/Semantic Content Ruleset.md` (bump version/Changelog/provenance).
- After all 21 cities are rewritten + a full-scale `_dup-analysis.ts` pass: the user-locked 942-noindex
  index-flip (separate, not part of entity-grounding).

## Verification (end-to-end, per sub-batch)

1. `npm run build` exits 0 (Zod validates all 195 on import).
2. esbuild parse-check all 195 touched files → all `OK`.
3. `npm run audit:headings` → `PASS`; `npm run audit:meta` → `Total issues: 0`;
   `audit:semantics --types=combos --ids=<csv>` → no increase vs the captured baseline.
4. `def-wordcount` (3a) / reframe checks (3b) → all green (≤40w, `**` balanced, "registered" only).
5. `_dup-analysis.ts` (after 3a) → 0 near-dups ≥50% Jaccard across the 3-city set.
6. Kill stale `next-server` children, start prod :3230 + dev :3240; `curl` each sample slug → 200;
   served HTML: single `<h1>`, first content H2 = `What Is {Service}?` (3a), `grep -c '**'` = 0 (no raw
   `**` leak), def Q&A string present in FAQPage JSON-LD, reframed lead reads naturally (3b).
   Hand the user `http://localhost:3240/<service>-<city>` live URLs.
7. User sign-off before each commit.
