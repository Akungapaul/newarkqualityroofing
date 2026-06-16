# Entity-Grounding Phase 3b — Combo `directAnswer` Reframe (195 done-city combos)

## Context

The entity-grounding initiative reframes every page's company descriptor to the SEO-strong
**"roofing contractor … registered New Jersey Home Improvement Contractor"** (no "licensed" — NJ
HIC is a *registration*, N.J.S.A. 56:8-136) and grounds the city as **"[City], New Jersey"**.
Phase 1 (infra), Phase 2 (65 services + 21 cities + 30 comparisons), and **Phase 3a** (propagated
the 65 service `definition`s into all 195 done-city combos — `ca49768`) are done + committed.

**Phase 3b is the last data pass on the 195 done-city combos** (Newark / East Orange / Orange, all
65 wired each). These were authored in Combo Batches 1–3 *before* entity-grounding, so their
`directAnswer` still uses the **old "…provides {service} across {City} and Essex County … as a New
Jersey Home Improvement Contractor"** wording (189× across the 3 cities; only 8 already say
"roofing contractor") and their `metaDescription` says **"NJ-licensed"** (78×). This batch makes
them read like the already-shipped service pages — without crossing the near-duplicate doorway.

Outcome: each combo `directAnswer` leads "**Newark Quality Roofing is a roofing contractor
providing {service} across {City}, New Jersey, and Essex County** … as a **registered** New Jersey
Home Improvement Contractor", mirroring its own gated **2a service-page `directAnswer`** with the
city swapped and the combo's city-specific specifics preserved.

## Recon (verified this session)

- All 3 city dirs fully wired (67 imports each = 65 combos).
- Old descriptor `as a New Jersey Home Improvement Contractor`: **189 occurrences** across the 3 cities.
- `metaDescription` `NJ-licensed`: **78 occurrences** (sweep target).
- `licensed` total 361 → **223 are dead-code `whyChooseUs[0]` "licensed and insured"** (does NOT
  render — `ComboWhyChooseUs` uses a hardcoded generator) + legit third-party cites (licensed
  *public adjuster* ×32 / *structural engineer* ×13 / *attorney* / *abatement*) — **all KEEP**.
- **2 stray NQR self-claims** that DO contradict decision #2 → reframe to "registered":
  `newark/metal-roof-replacement.ts` meta ("by a licensed contractor") and
  `orange/roof-overlay-installation.ts` `directAnswer` ("as a New Jersey licensed contractor").
- **21 combos** whose `directAnswer` has no credential tail (descriptor + city only) → append the
  registered-HIC tail only if flow / ≤40w bold span allows.
- Gold 2a template confirmed (`service-content/repair-maintenance.ts` roof-repair):
  `'**Newark Quality Roofing is a roofing contractor providing roof repair across Newark, New Jersey, and Essex County**, fixing … as a registered New Jersey Home Improvement Contractor.'`

## Decisions locked (prior session — not re-opening)

- Reframe scope = **Targeted**: reframe each combo `directAnswer` + sweep metaDescription; do NOT
  rewrite overview/challenges/process/faqs bodies.
- Credential = **"registered New Jersey Home Improvement Contractor"** — NO "licensed" for NQR.
- Per-service **gold = the committed, gated 2a service `directAnswer`**; authors mirror it, swap city.
- `whyChooseUs[0]` "licensed and insured" = **dead code, OUT of scope** (doesn't render; gets
  rewritten in each city's eventual combo batch). Leave it — consistent with prior batches.
- Schema / templates / `heading-config.ts` / `scripts/audit-*.ts` are **FROZEN from Phase 1**. If a
  task wants to touch one, stop — the reframe over-reached.

## Scope / blast radius

| Files (data only) | Count |
|---|---|
| `src/data/combo-content/{newark,east-orange,orange}/*.ts` — reframe `directAnswer` + sweep `metaDescription` | 195 objects / 3 dirs |

**Working dir:** `.planning/content-system/entity-grounding-3b-combo-reframe/`
**Reuse:** the 2c scripts (`entity-grounding-2c-comparisons/{AUTHOR-WORKFLOW.js, splice.mjs}` — the
string-aware field scanner + backtick-safe emit) and 3a's `extract-defs.ts` pattern + the
`combo-batch3-orange/_dup-analysis.ts`. Persist this plan to the working dir (Task 0, docs commit).

## Mechanism

**1. Extract gold + current state (deterministic).**
- `tsx` script → `_gold.json`: `serviceId → 2a service directAnswer` (from `getAllServiceContent()`).
- `tsx`/node script → `_current.json`: for each of the 195 combos, `{serviceId, cityId, directAnswer}`
  + a city display-name map (`newark→Newark`, `east-orange→East Orange`, `orange→Orange`).

**2. Author workflow — 1 agent per service (65 agents), structured-output JSON.**
Each agent receives: the service's gold 2a `directAnswer`, that service's 3 current city combo
`directAnswer`s, the 3 city display names, and the reframe spec. It returns
`{newark, eastOrange, orange}` = the 3 **reframed** `directAnswer` strings (data only — the 2c
pattern, no file edits by agents). Each reframed string must:
- inject the **"roofing contractor"** descriptor (mirror gold: "is a roofing contractor providing
  {service} across {City}, New Jersey, and Essex County");
- establish **"[City], New Jersey"** (Newark/East Orange/Orange);
- end with credential tail **"as a registered New Jersey Home Improvement Contractor"** (never
  "licensed"); the 21 no-tail combos get descriptor+city, appending the tail only if ≤40w allows;
- **preserve the combo's city-specific specifics** (e.g. Newark row houses/brownstones/Ironbound;
  East Orange pre-war apartments/multi-family; Orange two-/three-family/Valley Arts/Main Street);
- keep the **bolded answer span ≤40 words** (close the bold after "…Essex County"/"New Jersey" if it
  would overflow — matches gold); **no modality** (will/should/must/need to/can in declaratives).
- Workflow gotchas to honor: `args` may arrive as a JSON **string** (guard
  `typeof args==='string'?JSON.parse:...`); use backtick prose; `node --check` the `.mjs` first;
  re-collect results only after the workflow-completion notification (2c first-assemble race).

**3. Deterministic apply (one pass) — `splice-reframe.mjs`.**
- String-aware **field REPLACE** of each combo's `directAnswer` value, scope-matched by file
  (`{city}/{service}.ts`). 0 other deletions. Idempotent. Emit single-quoted/backtick-safe literal.
- **metaDescription credential sweep:** `NJ-licensed` → `NJ-registered` (78×) **with the 160-char
  Zod-cap guard** — after +2 chars, trim any meta >160 (2b build-break lesson:
  "Free written estimate." → "Free estimate." / drop a word).
- **Stray-claim sweep:** the 2 NQR "licensed contractor" hits → "registered …".
- Grep combo `faqs`/`overview` for any remaining NQR "licensed" self-claim → reword to "registered"
  (leave all legit third-party *licensed adjuster/engineer/attorney* cites untouched).

**4. Gate (all must pass before review).**
- `npm run build` → 0 (Zod validates all 195 on import).
- esbuild `transformSync` parse-check all 195 touched files → all `OK`.
- `npm run audit:headings` → `PASS`; `npm run audit:meta` → `Total issues: 0` (metas changed →
  re-verify ≤160 + still distinct); `audit:semantics --types=combos --ids=<3-city csv>` → **no
  increase** vs the captured baseline (~586 advisory = pre-existing dead-code whyChooseUs fabs).
- **Reframe checks** (small node script): each reframed `directAnswer` → bolded span ≤40w, `**`
  balanced, **0** NQR "licensed", "registered" present, "{City}, New Jersey" present (or "Newark,
  New Jersey"/"East Orange, New Jersey"/"Orange, New Jersey"), no modality token.

**5. Review → refute (Workflow).**
Dimensions = reframe integrity (≤40w bold, accurate "registered" credential, correct city name,
natural read, no modality/de-fab) + cross-city consistency with the 2a gold. Refute med/high,
auto-confirm low. **Fix in-place** (do NOT re-splice — stale data reverts fixes; 2c lesson) +
**orchestrator cross-file recurrence sweep** (per-combo reviewers under-flag systematic recurrences:
a recurring awkward appositive, a city-name slip, a leftover "licensed"). Re-parse-check + **re-gate**
(a fixer can reintroduce a >40w / modality / unescaped-apostrophe violation).

**6. Render → sign-off → commit.**
- Kill stale `next-server`; start prod `:3230` + dev `:3240` (dev server mandatory at every sign-off).
- `curl` ≥5 sample slugs (`/roof-repair-newark`, `/roof-repair-east-orange`, `/roof-repair-orange`,
  + 2 others) → 200; served HTML: single `<h1>`, first content H2 = `What Is {Service}?` (3a holds),
  `grep -c '**'` = 0 (no raw `**` leak), reframed lead reads naturally. Hand the user
  `http://localhost:3240/<service>-<city>` live URLs.
- User sign-off, then **2 commits**: `feat(content): entity-grounding Phase 3b — roofing-contractor/[City],NJ reframe on 195 done-city combos` + docs (scripts + this plan). Update memory
  (`entity-grounding-initiative.md`, `nqr-batch-resume.md`, `MEMORY.md`). **Prompt `/clear`.**

## Out of scope (surface as follow-ups)

- **Credential-chip debt** (user-deferred, separate next mini-batch): `content-constants.ts:117/124/187`
  "NJ HIC … licensed" + `credentialsHighlight: ['NJ HIC Licensed']` on the 65 service objects render
  on Service/Home (NOT combos) → "registered"; re-render Service/Home.
- **18 inherit-cities** — bake the definition + reframe into the combo-batch author brief from
  Irvington (Combo Batch 4) onward; not a Phase-3 pass.
- **Phase 4** — back-propagate the definitional-block + descriptor-vs-credential + "[City], State"
  rules to the canonical Obsidian `SEO/Semantic Content Ruleset.md` (bump version/Changelog/provenance).
- Dead-code `whyChooseUs[0]` "licensed and insured" (223×) — leave; rewritten in per-city batches.

## Verification (end-to-end)

1. `npm run build` exits 0.
2. esbuild parse-check all 195 touched files → all `OK`.
3. `audit:headings` `PASS` · `audit:meta` `Total issues: 0` · `audit:semantics --types=combos --ids`
   no increase vs captured baseline.
4. Reframe checks green: every reframed `directAnswer` ≤40w bold span, `**` balanced, 0 NQR
   "licensed", "registered" present, "{City}, New Jersey" present, no modality.
5. (Sanity, not a blocker) re-run `_dup-analysis.ts` def-included variant across the 3-city set →
   0 near-dups ≥50% Jaccard still holds (reframe touches only the short directAnswer lead).
6. Prod :3230 + dev :3240 up; sample slugs 200; single `<h1>`; first content H2 = `What Is {Service}?`;
   0 raw `**`; reframed lead natural. Hand the user live `:3240` URLs.
7. User sign-off before each commit.
