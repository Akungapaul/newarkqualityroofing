# Entity-Grounding — Phase 2 (Money-Page Backfill) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Backfill the entity-grounding fields and apply the contractor/"[City], NJ" reframe across all rewritten **money pages** — 64 service `definition`s (+ reframe all 65 service leads), 21 city `whereIs` (Newark exemplar already done → 20 new + reframe all 21), and 30 comparison `definitionA/B` pairs (asphalt-vs-metal exemplar done → 29 new + light reframe) — all green against the existing build + audit gates, shipped as three independently-gated, independently-committed sub-batches with `/clear` between.

**Architecture:** Phase 1 already shipped the infra (optional `definition?`/`whereIs?`/`definitionA?`/`definitionB?` Zod fields, the `EntityDefinition` section rendered as the first H2 after the hero, the conditional heading audit, and the def-Q&A → FAQ-JSON-LD wiring). Phase 2 is **content only** — it populates those optional fields and edits committed answer-first leads. We reuse the proven NQR per-batch pipeline (author-workflow → assemble → gate → review→refute → fix+sweep → render → sign-off → 2 commits → `/clear`), one author agent per page writing a drop-in snippet, spliced scope-safely by id into the shared category/archetype files. No schema, template, component, or audit code changes — those are frozen from Phase 1.

**Tech Stack:** Next.js App Router (prerendered HTML), TypeScript, Zod content schemas, `tsx` audit scripts (`audit:headings` / `audit:semantics` / `audit:meta`), `esbuild.transformSync` parse-checks, `ProseLead`/`parseRichText` (copper-rail answer-first rendering), `buildFaqSchema` (FAQPage JSON-LD), the Workflow tool (fan-out authoring + adversarial review).

---

## Locked decisions (from the resume-session clarifications, 2026-06-11)

| Decision | Resolution |
|---|---|
| **Reframe scope** | **Targeted.** Reframe the ~94 committed descriptor sign-offs (`…as a New Jersey Home Improvement Contractor`) to lead with the **"roofing contractor"** descriptor + **"[City], New Jersey"** naming, AND add the new `definition`/`whereIs`/`definitionA-B` fields. Do NOT do a full site-wide rework of every credential sentence; do NOT freeze the leads. |
| **Credential wording** | **"registered New Jersey Home Improvement Contractor … and insured."** NO "licensed" (NJ has no standalone roofing license — HIC is a *registration*, N.J.S.A. 56:8-136). This also implies a deterministic sweep of any "the **licensing** the NJ Division of Consumer Affairs requires" → "the **registration** …" where it describes HIC. |
| **Canon gate** | **Generate `.planning/seo/CANON-ANALYSIS.md` now** (Task 0) to satisfy the SessionStart canon gate before content work. |
| **Batch structure** | **Three sub-batches**, each its own gate + sign-off + 2 commits + `/clear`: **2a Services (65)**, **2b Cities (21)**, **2c Comparisons (30)**. This session: Task 0 + Sub-batch 2a. |
| **Combos** | **Out of scope (Phase 3).** The 195 done-city combos (Newark/EO/Orange) + the 18 inherit-cities get the definition + reframe in their combo batches, per the design spec. |

---

## Content specs (the exact authoring contract)

### A. Service `definition` ("What Is {Service}?")
- Answer-first: the **first sentence is the definition, ≤40 words**, may run 1–3 sentences total.
- **Figure-free** clean entity definition (per the CMP gold-exemplar lesson — move any figures to the body, not the definition). It defines the *service/material entity*, NOT the company.
- The **central entity is pre-bolded** with `**…**` (e.g. `**Roof repair**`), 1 bolded span at the open.
- **No modality** (`will`/`should`/`need to`/`must`/`can`), no de-fab literals (no invented prices/stats/guarantees), **no outbound links**, no superlatives.
- Gold exemplar (committed, `repair-maintenance.ts`):
  > `**Roof repair** restores a roof's weatherproof barrier by fixing localized damage — leaks, missing or torn shingles, failed flashing, and cracked seals — without replacing the entire roof. It targets specific failure points to extend the service life of an otherwise sound roof.`

### B. City `whereIs` ("Where Is {City}, NJ?")
- Answer-first locational answer, **first sentence ≤40 words**, 1–3 sentences.
- **"[City], New Jersey"** pre-bolded at the open; **county + a true geographic anchor** (border/river/distance-to-NYC/township-vs-borough) from the city's fact bank.
- May close with one light service-area clause (the company's crews serve it) — like the Newark exemplar — but stays primarily a *place* definition.
- All facts trace to `.planning/content-system/cities-batch*/CITY-FACTS-*.md`. No invented demographics/figures in the ≤40w answer (qualitative only, as the city batches established).
- Gold exemplar (committed, `urban-core.ts`):
  > `**Newark, New Jersey** is the state's largest city and the seat of **Essex County**, set along the Passaic River at the western edge of the New York metropolitan area. It anchors the dense urban core our roofing crews serve.`

### C. Comparison `definitionA` / `definitionB` ("What Is {A}?" / "What Is {B}?")
- One ≤40-word answer-first definition per side; `itemA`/`itemB` supply the heading label.
- **Reuse the canonical service/material definition** where the comparison side maps to a service entity (e.g. `asphalt-vs-slate` → asphalt def from the service layer + a slate def). Author only genuinely-new sides (e.g. "cheapest vs most durable", "best roofing for flat roofs" are *concept* sides — define the concept, or define the representative material).
- Same figure-free / entity-bolded / no-modality / no-de-fab rules.
- Gold exemplar (committed, `material-vs-material.ts`): asphalt-shingles-vs-metal-roofing `definitionA`/`definitionB`.

### D. Contractor / "[City], NJ" reframe (targeted)
Apply to the **descriptor-position** passages only (the answer-first lead sign-offs + heroes). The canonical transformation:

**Service overview[0] / hero lead — BEFORE:**
> `**{Company} provides {service} across Newark and Essex County, {specifics}** as a New Jersey Home Improvement Contractor.`

**AFTER (targeted reframe):**
> `**{Company} is a roofing contractor providing {service} across Newark, New Jersey, and Essex County**, {specifics} as a registered New Jersey Home Improvement Contractor.`

Rules for the reframe:
1. Inject **"roofing contractor"** as the descriptor near the company name (the SEO-strong central entity term).
2. Establish **"Newark, New Jersey"** (full state name) once in the lead (cities use their own "[City], New Jersey").
3. Keep the credential accurate: **"registered New Jersey Home Improvement Contractor"** (never "licensed"); where a credential sentence says "the **licensing** the NJ Division… requires," sweep to "the **registration** …".
4. **Preserve the answer-first gates**: the bolded answer span stays **≤40 words** (if the descriptor injection pushes it over, end the bold after "…Essex County" and let specifics+credential run unbolded); preserve **R3 strict-bold** (the first body paragraph re-bolds the lead's bolded topics, in order); **no modality** introduced.
5. Do NOT touch already-accurate credential sentences beyond the "licensing"→"registration" fix; do NOT rewrite bodies.

---

## File structure / blast radius

| Layer | Files (data only — templates/schema/audit FROZEN) | Count |
|---|---|---|
| **Task 0** | `.planning/seo/CANON-ANALYSIS.md` (CREATE) | 1 |
| **2a Services** | `src/data/service-content/{repair-maintenance,replacement-sub-pages,residential-roof-types,commercial-roof-types,commercial-services,components-specialty,energy-solar,design-consultation}.ts` | 8 files / 65 objects |
| **2b Cities** | `src/data/city-content/{urban-core,first-suburbs,west-essex,caldwells-roseland,affluent-suburban}.ts` | 5 files / 21 objects |
| **2c Comparisons** | `src/data/comparison-content/{material-vs-material,service-vs-service,decision-helper}.ts` | 3 files / 30 objects |

No changes to: any `*/schema.ts` or `src/lib/schemas.ts` (fields already exist), any template/component, `scripts/audit-headings.ts`, `heading-config.ts`. **If a task wants to touch one of those, stop — it's a Phase-1 file and a sign the reframe over-reached.**

**Testing note (project convention):** this repo has no unit-test harness; its "tests" are the build + audit gates + a rendered curl/screenshot check. Each gate step below states the command and the exact expected output. Per-batch the established cadence runs **one** `npm run build` after assemble and another after fixes.

---

## Task 0: Satisfy the SEO canon gate

**Files:** Create `.planning/seo/CANON-ANALYSIS.md`

- [ ] **Step 1: Dispatch one subagent** to write `.planning/seo/CANON-ANALYSIS.md` — a retroactive semantic-content analysis of the NQR site against the canon. It must read `~/Documents/Obsidian Vault/SEO/Semantic Content Ruleset.md` (canonical) + `.planning/content-system/ENTITY-GROUNDING-DESIGN.md` + sample 4–6 committed pages (a service, a city, a comparison, a combo) and produce: (1) Source Context / Central Entity statement (Newark Quality Roofing = roofing contractor, Essex County NJ; central entity = "roofing"); (2) a scored audit of the committed pages against the gated ruleset subset (answer-first ≤40w, named-source attribution, no modality/de-fab/outbound links, question-heading discipline, R3 strict-bold, R39 rendered prose-links); (3) the entity-grounding pass rationale (definitional blocks + contractor/[City],NJ reframe) as the active improvement. Confidence-scored, evidence-cited.

- [ ] **Step 2: Verify** `.planning/seo/CANON-ANALYSIS.md` exists and is non-trivial (`wc -l` ≥ 80). The SessionStart canon gate keys off the file's existence — this stops the nag.

- [ ] **Step 3: Commit** (standalone — it's infra/docs, not part of a content sub-batch):
```bash
git add .planning/seo/CANON-ANALYSIS.md
git commit -m "docs(seo): retroactive canon analysis (satisfies SessionStart canon gate)

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

---

## Sub-batch 2a: Services (65) — 64 new definitions + reframe all 65 leads

**Working dir:** `.planning/content-system/entity-grounding-2a-services/` (CREATE; holds the author workflow script, per-service `<id>.snippet.ts` + `<id>.md`, and the assemble script).

The 65 service ids, grouped by their category file (for the scope-safe assemble):
- **repair-maintenance.ts** (13): roof-repair*, roof-leak-repair, emergency-roof-repair, storm-damage-roof-repair, wind-damage-roof-repair, hail-damage-roof-repair, chimney-flashing-repair, roof-flashing-installation-repair, roof-inspection, roof-maintenance-programs, roof-cleaning-moss-removal, roof-deck-repair-replacement, roof-waterproofing  *(roof-repair already has `definition` — keep it, reframe its lead only)*
- **replacement-sub-pages.ts** (15): full-roof-tear-off, roof-overlay-installation, re-roofing, insurance-roof-replacement, storm-damage-roof-replacement, aging-roof-replacement, roof-replacement-after-leak, fire-damage-roof-replacement, roof-replacement-cost, asphalt-shingle-roof-replacement, metal-roof-replacement, slate-roof-replacement, tile-roof-replacement, flat-roof-replacement, cedar-shake-roof-replacement
- **residential-roof-types.ts** (~11): roof-replacement, residential-roof-installation, asphalt-shingle-roofing, metal-roof-installation-repair, slate-roof-installation-repair, tile-roof-installation-repair, cedar-shake-roofing, wood-shake-roofing, flat-roof-installation-repair, solar-shingle-installation, solar-panel-roofing-installation *(verify exact membership at runtime via `grep serviceId`)*
- **commercial-roof-types.ts** (~8): built-up-roofing, modified-bitumen-roofing, epdm-commercial-roofing, rubber-roofing-epdm, tpo-roofing-installation, pvc-roofing, spray-foam-roofing, commercial-metal-roofing
- **commercial-services.ts** (~4): commercial-roof-installation, commercial-roof-repair, commercial-roof-replacement, green-roof-installation
- **components-specialty.ts** (~9): gutter-installation-repair, gutter-guard-installation, soffit-installation-repair, fascia-installation-repair, skylight-installation-repair, roof-vent-installation-repair, roof-ice-dam-prevention, infrared-roof-leak-detection, roof-thermal-imaging-inspections
- **energy-solar.ts** (~3): energy-efficient-roofing-solutions, silicone-roof-coating, silicone-elastomeric-roof-coating
- **design-consultation.ts** (~2): custom-roof-design-consultation, historic-roof-restoration

> ⚠️ **Verify exact per-file membership at runtime** before authoring: `for f in src/data/service-content/*.ts; do echo "== $f"; grep -o "serviceId: '[^']*'" "$f"; done`. The author workflow must group snippets by their true category file so the assemble rebuilds each file from its own complete snippet set.

### Task A1: Build the service-name map + reframe-pattern audit

**Files:** none (reconnaissance)

- [ ] **Step 1: Extract the service-name map** (id → display name, needed for the `What Is {name}?` heading + the lead reframe):
```bash
cd /Users/akungapaul/Projects/Newarkqualityroofing
node -e "const {services}=require('./src/data/services.ts'); console.log(JSON.stringify(services.map(s=>({id:s.id,slug:s.slug,name:s.name})),null,0))" 2>/dev/null \
  || grep -A2 "id: '" src/data/services.ts | grep -E "id:|name:" | head -200
```
(If the `.ts` require fails, read `src/data/services.ts` directly and build the id→name map by hand.)

- [ ] **Step 2: Snapshot the descriptor-sign-off surface** so the reframe is verifiable:
```bash
grep -rno "as a New Jersey Home Improvement Contractor" src/data/service-content/ | wc -l   # baseline = 65 (before)
grep -rno "the licensing the NJ Division" src/data/service-content/ | wc -l                 # count "licensing"→"registration" sweeps
```
Record both counts; after assemble, the "as a New Jersey Home Improvement Contractor" count should DROP toward 0 (reframed to "as a registered New Jersey Home Improvement Contractor" + descriptor moved up) and "the licensing the NJ Division" should be 0.

### Task A2: Author the 65 service snippets (Workflow fan-out)

**Files:** Create `.planning/content-system/entity-grounding-2a-services/AUTHOR-WORKFLOW.js` + (workflow output) `<id>.snippet.ts` + `<id>.md` × 65.

- [ ] **Step 1: Write the author workflow script.** One agent per service. Each agent receives: the service `id` + display `name` + its **current object literal** (read from the category file) + the **content spec A** + the **reframe spec D** + the **credential decision** ("registered … and insured", never "licensed") + a pointer to `.planning/content-system/NQR-SEMANTIC-CONTENT-RULESET.md`. Each agent:
  1. Writes the new `definition:` field (`What Is {name}?` answer, content spec A) — figure-free, entity-bolded, ≤40w first sentence, no modality/de-fab.
  2. Applies the **targeted reframe** to that object's descriptor sign-offs (overview[0] lead + any hero/approach lead ending in "as a New Jersey Home Improvement Contractor"): inject "roofing contractor" + "Newark, New Jersey", change the credential tail to "as a registered New Jersey Home Improvement Contractor", sweep any "the licensing the NJ Division" → "the registration the NJ Division". Preserve ≤40w bold span + R3 strict-bold + no modality.
  3. Leaves every other field byte-identical.
  4. Self-audits: re-reads its snippet, confirms (a) `definition` first sentence ≤40w counting standalone em-dashes, (b) bold markers balanced, (c) no `will/should/must/need to/can` in declaratives, (d) no `as a New Jersey Home Improvement Contractor` without "registered" remaining.
  5. Writes `<id>.snippet.ts` (the full drop-in object literal, leading-comma-free, ready to splice) + `<id>.md` (a human-readable draft: the new definition + the before→after lead).

  ⚠️ Workflow gotchas (from the runbook): `args` may arrive as a JSON **string** — guard `typeof args==='string'?JSON.parse(args):args`. Use **backtick** strings for long prose in the script. `node --check` the script as `.mjs` first (top-level `return` warning is benign).

- [ ] **Step 2: Run the workflow**, then **wait for the completion notification** before assembling (the runbook's "first-assemble race": agents keep finalizing snippets after `ls` shows them present).

- [ ] **Step 3: Verify snippet count:** `ls .planning/content-system/entity-grounding-2a-services/*.snippet.ts | wc -l` → **65**. Spot-grep that every snippet carries a `definition:` field: `grep -L "definition:" .../*.snippet.ts` → empty.

### Task A3: Assemble the 8 category files from snippets (scope-safe)

**Files:** Modify the 8 `src/data/service-content/*.ts` files. Create `.../assemble.mjs`.

- [ ] **Step 1: Write `assemble.mjs`** that, per category file, rebuilds the `export const <name>: ServiceContent[] = [ … ]` array by concatenating that file's member snippets **in their original order** (preserve the existing id order — grep the current file for the order first). Keep the file header/imports verbatim. This mirrors the runbook's Step-2 assemble (full rebuild per file) — valid here because **every** object in each file is touched.

- [ ] **Step 2: Run assemble**, then `git diff --stat src/data/service-content/` → expect all 8 files changed, only.

- [ ] **Step 3: Parse-check each assembled file** with esbuild before building (fix agents/authors can drop unescaped apostrophes):
```bash
node -e "const {transformSync}=require('esbuild');const fs=require('fs');for(const f of process.argv.slice(1)){try{transformSync(fs.readFileSync(f,'utf8'),{loader:'ts'});console.log('OK',f)}catch(e){console.log('FAIL',f,e.message);process.exit(1)}}" src/data/service-content/*.ts
```
Expected: `OK` for all 8.

### Task A4: Gate (build + audits)

**Files:** none

- [ ] **Step 1: Build.** `npm run build` → exit 0 (Zod validates all 65 on import; 64 now carry `definition`).
- [ ] **Step 2: Heading audit.** `npm run audit:headings` → `0 violation(s) found.` → `PASS`. (The conditional audit now flips the `roof-repair` sample's expected first-H2 to `What Is Roof Repair?` — exercising the present branch; build must render the EntityDefinition section as the first content H2.)
- [ ] **Step 3: Meta audit.** `npm run audit:meta` → `Total issues: 0`.
- [ ] **Step 4: Semantics gate** (scoped to services — the `--types=combos` 5802 are PRE-EXISTING dead-code whyChooseUs fabs, NOT this batch):
```bash
IDS=$(grep -rho "serviceId: '[^']*'" src/data/service-content/ | sed "s/serviceId: '//;s/'//" | paste -sd, -)
npm run audit:semantics -- --quiet --types=services --ids=$IDS 2>&1 | grep -E "GATE violations|PASS"
```
Expected: `0` gate violations / `PASS`.
- [ ] **Step 5: Definition ≤40-word wordcount check** (audit:semantics classifies the field as body but does NOT wordcount-gate it — check programmatically). Write/reuse a tiny script that, for each service object's `definition`, strips `**`, splits the first sentence on whitespace counting standalone ` — ` em-dashes as tokens, and asserts ≤40. Expected: all 64 ≤40.
- [ ] **Step 6: Reframe verification:**
```bash
grep -rno "as a New Jersey Home Improvement Contractor" src/data/service-content/ | grep -v "registered New Jersey Home Improvement Contractor" | wc -l   # → 0 (every descriptor sign-off now reads "registered")
grep -rn "the licensing the NJ Division" src/data/service-content/ | wc -l   # → 0
grep -rc "roofing contractor" src/data/service-content/ | grep -v ":0"        # → up from baseline (descriptor injected)
```

### Task A5: Adversarial review → refute (Workflow)

**Files:** Create `.../REVIEW-WORKFLOW.js` + `findings-services.json`.

- [ ] **Step 1: Write the review workflow.** Dimensions per service: (1) **definition accuracy** — is the `What Is {service}?` answer a correct, figure-free entity definition (no invented stats, no wrong material chemistry)? (2) **answer-first discipline** — first sentence ≤40w, entity bolded, no modality. (3) **reframe integrity** — did the lead reframe keep ≤40w bold + R3 strict-bold + the accurate "registered" credential + no "licensed"? (4) **de-fab** — no new prices/guarantees/superlatives. Each finding goes through a refuter (med/high adversarially challenged; low auto-confirmed). Returns `{perService, confirmedFindings, totalConfirmed}`.

- [ ] **Step 2: Run it**, extract findings via `node -e` over the output JSON (`result` may be object OR JSON string — try both).

### Task A6: Fix confirmed findings + orchestrator cross-file sweep

**Files:** Modify the affected `src/data/service-content/*.ts` (in-place Edits — do NOT re-run assemble, which would revert in-place fixes with stale snippets).

- [ ] **Step 1: Apply confirmed fixes** in-place. For >~12 findings, dispatch one fixer per category file (never parallel-edit the same file).
- [ ] **Step 2: Orchestrator cross-file recurrence sweep** (the per-service reviewers under-flag systematic recurrences — this is the orchestrator's job): grep the whole batch for each corrected pattern (e.g. a mis-stated material lifespan in a definition, a recurring modality verb, a definition that smuggled a figure, an un-reframed descriptor) and fix ALL instances. Inspect each grep hit (sweeps over-match legit content).
- [ ] **Step 3: Re-parse-check** (esbuild, Task A3 Step 3) — fixers insert unescaped apostrophes.
- [ ] **Step 4: Re-gate** — re-run Task A4 Steps 1–6. A fixer can REINTRODUCE a violation (e.g. a reworded definition >40w or with modality) → must be green again before render.

### Task A7: Render spot-check (prod :3230) + live dev (:3240)

**Files:** none

- [ ] **Step 1: Kill stale servers** (`next-server` children survive `pkill "next start"`):
```bash
pkill -f "next-server" 2>/dev/null; pkill -f "next start" 2>/dev/null; pkill -f "next dev" 2>/dev/null; sleep 2
(PORT=3230 npm run start >/tmp/srv-eg2a.log 2>&1 &); sleep 7
```
- [ ] **Step 2: Per-page checks** on a representative sample (one per category file, ~8 slugs). For each slug confirm: first content H2 = `What Is {Service}?`; `grep -c '\*\*'` in served HTML = **0** (no raw `**` leak); `"FAQPage"` present and the def Q&A question string appears in JSON-LD; the reframed lead reads naturally ("roofing contractor", "Newark, New Jersey", "registered"). Use `grep -c` and compare counts (never `grep … | head && echo`).
- [ ] **Step 3: Live dev server** (mandatory per [[nqr-dev-server-on-render]]): `(PORT=3240 npm run dev >/tmp/dev-eg2a.log 2>&1 &); sleep 8`, warm each sampled route with curl, hand the user `http://localhost:3240/<slug>`. Leave both servers up.
- [ ] **Step 4: Screenshots** via the batch screenshot script (`NODE_PATH=/opt/homebrew/lib/node_modules node /tmp/pw-eg2a-shots.js`, `PORT=3230`, SLUGS = the ~8 sample). Prints per-page 200/h1count/`**`/defab.

### Task A8: Sign-off

- [ ] **Step 1:** Present screenshots + the live URLs + per-sample verdicts (EntityDefinition is the first H2; copper-rail answer-first; 0 `**` leaks; def Q&A in JSON-LD; reframe natural + credential accurate). **The user signs off before commit.**

### Task A9: Commit + memory + prompt to clear

- [ ] **Step 1: Two commits** (stage ONLY batch paths — leave pre-existing untracked audit/competitor files unstaged):
```bash
git add src/data/service-content/*.ts
git commit -m "$(cat <<'EOF'
feat(content): entity-grounding Phase 2a — 64 service definitions + roofing-contractor/[City],NJ reframe (65 services)

Adds the "What Is {Service}?" definitional answer to 64 services (roof-repair
exemplar kept) and reframes every service lead to lead with the "roofing contractor"
descriptor + "Newark, New Jersey" naming, with the accurate "registered New Jersey
Home Improvement Contractor … and insured" credential (no "licensed").

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
git add .planning/content-system/entity-grounding-2a-services/ .planning/content-system/ENTITY-GROUNDING-PHASE2-PLAN.md
git commit -m "docs(content): entity-grounding Phase 2a drafts + plan

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```
- [ ] **Step 2: Update memory** — `[[entity-grounding-initiative]]`, `[[nqr-batch-resume]]`, `MEMORY.md`: mark 2a DONE, point to 2b (cities).
- [ ] **Step 3: STOP and prompt the user to `/clear`** before Sub-batch 2b (per [[nqr-clear-after-each-batch]]).

---

## Sub-batch 2b: Cities (21) — 20 new whereIs + reframe all 21 leads

**Working dir:** `.planning/content-system/entity-grounding-2b-cities/`. Same pipeline as 2a, adapted to the `CityContent` archetype-file model (5 files; per-city objects; `cityId` key; **never parallel-write the same archetype file**).

### Task B1: Reconnaissance
- [ ] City id→name map: `grep -rho "cityId: '[^']*'" src/data/city-content/*.ts`; names from `src/data/cities.ts`.
- [ ] Confirm fact-bank coverage per city (`.planning/content-system/cities-batch{A,B,C,D,E}/CITY-FACTS-*.md`).
- [ ] Baseline `grep -rno "as a New Jersey Home Improvement Contractor" src/data/city-content/` (≈29).

### Task B2: Author 21 city snippets (Workflow — 1 agent/city)
- [ ] Each agent writes the new `whereIs:` (content spec B, from the city's fact-bank section: county + geographic anchor + light service-area clause; "[City], New Jersey" bolded; ≤40w; qualitative facts only) + applies the targeted reframe to that city object's descriptor sign-offs (inject "roofing contractor" + the **city's own** "[City], New Jersey"; credential → "registered … and insured"). Newark keeps its committed `whereIs` (exemplar) — reframe its lead only.
- [ ] Output `<cityId>.snippet.ts` + `.md` × 21. Verify all carry `whereIs:`.

### Task B3: Assemble (scope-safe, per archetype file)
- [ ] Splice each archetype file from its member city snippets **in committed order**. **Edit/splice one city object at a time within a file; never parallel-write an archetype file.** Parse-check (esbuild) all 5 files.

### Task B4: Gate
- [ ] `npm run build` 0 · `npm run audit:headings` PASS (the `newark` sample flips to `Where Is Newark, NJ?` — present branch; the conditional audit must stay green) · `npm run audit:meta` 0 · `npm run audit:semantics -- --quiet --types=cities --ids=<21 csv>` 0 gate · `whereIs` ≤40w check · reframe verification grep (`as a New Jersey Home Improvement Contractor` without "registered" → 0; "[City], New Jersey" present per city).

### Task B5–B6: Review→refute + fix + sweep
- [ ] Review dimensions: whereIs geographic accuracy (county/border/river correct per fact bank; no invented demographics in the ≤40w answer), answer-first discipline, reframe integrity, **COA/geography guardrails** (don't re-introduce geography errors the city batches corrected — e.g. South Mountain is West Orange not Orange; Hilltop reservation is North-Caldwell-only; floodplain is Fairfield/Roseland). Fix in-place; orchestrator cross-archetype sweep (check committed siblings before "fixing" a stylistic recurrence — FAQ 2nd-sentence bold + whyChoose stat-repeat are template-consistent, KEEP). Re-parse-check + re-gate.

### Task B7–B9: Render (`roofing-in-<slug>-nj` on :3230 + :3240) → sign-off → 2 commits (`feat(content): entity-grounding Phase 2b — 20 city whereIs + reframe (21 cities)` + docs) → memory → prompt `/clear`.

---

## Sub-batch 2c: Comparisons (30) — 29 new definitionA/B + light reframe

**Working dir:** `.planning/content-system/entity-grounding-2c-comparisons/`. Pipeline as 2a, adapted to `ComparisonContent` (3 files; `comparisonId` key; reuse the CMP batch assemble pattern — string-aware brace-splice by `comparisonId`, scope-safe).

### Task C1: Reconnaissance
- [ ] Map each comparison's `itemA`/`itemB` (the heading labels) + identify which sides **reuse** a canonical service/material definition (asphalt, metal, slate, tile, TPO, EPDM, modified-bitumen, BUR, PVC, spray-foam, green-roof, cedar/wood-shake, solar-shingle/panel) vs which are **concept** sides (cheapest/most-durable, best-for-flat, best-for-historic, best-NJ-weather, warranty-guide, roof-coating, roof-overlay, patching, preventive-maintenance, DIY) that need a fresh concept definition.
- [ ] Baseline reframe grep (only 3 HIC occurrences in `service-vs-service.ts`).

### Task C2: Author 29 comparison snippets (Workflow — 1 agent/comparison)
- [ ] Each agent writes `definitionA` + `definitionB` (content spec C): reuse the canonical service/material definition where the side maps to one (keep wording consistent with the 2a service definitions for entity stability), author concept sides fresh. Apply light reframe only where a `service-vs-service` object carries an HIC descriptor sign-off. asphalt-shingles-vs-metal keeps its committed pair (exemplar).
- [ ] Output `<comparisonId>.snippet.ts` + `.md` × 29. Verify all carry `definitionA:` and `definitionB:`.

### Task C3: Assemble (scope-safe brace-splice by comparisonId)
- [ ] Reuse `comparisons-batch4/assemble-cmp4.mjs` pattern: replace only the batch's `comparisonId` objects in each of the 3 category files, leaving the committed asphalt-vs-metal object + all other fields untouched. Parse-check (esbuild) all 3 files.

### Task C4: Gate
- [ ] `npm run build` 0 · `npm run audit:headings` PASS (comparisons are NOT DOM-audited — but build must render two EntityDefinition sections) · `npm run audit:meta` 0 · `npm run audit:semantics -- --quiet --types=comparisons --ids=<30 csv>` 0 gate · each `definitionA`/`definitionB` ≤40w check · `**`-leak.
- [ ] **Render-verify the plural-grammar polish** noted in Phase 1: `What Is Asphalt Shingles?` reads awkwardly. Decide per-comparison: either accept (ends in "?", snippet-eligible) or make the heading data-driven. Lightweight fix only if trivial; otherwise note for a later polish.

### Task C5–C6: Review→refute (definition accuracy + cross-side consistency with the 2a service definitions) + fix + sweep + re-gate.

### Task C7–C9: Render (3–4 comparison slugs on :3230 + :3240; force-visible CSS `*{opacity:1!important;transform:none!important}` for full-page screenshots) → sign-off → 2 commits (`feat(content): entity-grounding Phase 2c — 29 comparison definition pairs + reframe (30 comparisons)` + docs) → memory → prompt `/clear`.

---

## Phase 2 completion → Phase 3 handoff

After 2a + 2b + 2c are committed:
- [ ] Update `[[entity-grounding-initiative]]` + `[[nqr-batch-resume]]` + `MEMORY.md`: **Phase 2 DONE**; NEXT = **Phase 3 (combo backfill)** — propagate the 65 service definitions (now authoritative in 2a) to the 195 done-city combos (Newark/EO/Orange) + apply the reframe; the 18 inherit-cities bake the definitional block + reframe into their combo-batch author brief from Irvington (Batch 4) onward. Then **Phase 4** (ruleset back-propagation — defer; the canonical-vault edit per global CLAUDE.md).
- [ ] Re-run `_dup-analysis.ts` (deferred to Phase 3): a shared ≤40-word definition among ~15 localized combos must NOT cross the doorway threshold — confirm the 0-near-dup state holds once combos share a definition.

---

## Self-review

**1. Spec coverage** — every Phase-2 design-spec item maps to a task:
- 65 service definitions (64 new + roof-repair kept) → Sub-batch 2a. ✓
- 21 city whereIs (20 new + Newark kept) → Sub-batch 2b. ✓
- 30 comparison sides (29 new + asphalt-vs-metal kept) → Sub-batch 2c. ✓
- Contractor "roofing contractor" descriptor + credential ("registered … and insured", no "licensed") + "[City], New Jersey" naming → reframe spec D, applied in 2a/2b (+ light 2c). ✓
- Canon gate → Task 0. ✓
- `_dup-analysis.ts` re-run → deferred to Phase 3 (no combos share a definition until Phase 3), as the spec states. ✓
- Combo backfill (195 done + 18 inherit) → explicitly Phase 3, out of scope here. ✓
- Ruleset back-prop → Phase 4, deferred. ✓

**2. Placeholder scan** — gate commands + expected outputs are exact; content specs show the literal gold-exemplar strings + the canonical reframe before→after; per-file membership is verified at runtime (Task A1/the grep), not guessed. ✓

**3. Type consistency** — no new types/fields (all four optional fields shipped in Phase 1: `definition`/`whereIs`/`definitionA`/`definitionB`); the heading accessors (`service.definitionH2`/`city.whereIsH2`/`combo.definitionH2`) + the `EntityDefinition` props are frozen Phase-1 code, called by the templates already. Phase 2 only writes data. ✓

**4. Gate-safety** — every sub-batch re-uses the identical, proven gate (`build`/`audit:headings`/`audit:semantics`/`audit:meta` + ≤40w wordcount + `**`-leak + esbuild parse-check) and the render/sign-off/clear cadence. The one Phase-1 coupling (conditional heading audit) auto-flips its expectation as the exemplar pages already carry the fields — verified green in Phase 1. ✓
