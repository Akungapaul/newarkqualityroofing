---
phase: 12-question-form-h-tag-core-outer-template-system
plan: 01
subsystem: testing
tags: [seo, headings, audit, node-html-parser, tsx, ssg, question-form]

# Dependency graph
requires:
  - phase: 11-ia-routing-canonical-data-url-classification
    provides: slug-registry getSlugsByType, url-classification isKeep/isNoindex, articles.ts with cluster field (252), prerendered .next/server/app/*.html
provides:
  - "src/data/heading-config.ts — central verbatim §4.1-4.4 + §17 question-form H-tag strings (single source for templates + audit)"
  - "scripts/audit-headings.ts — hybrid build-failing heading audit (static registry pass + rendered .next HTML DOM pass), process.exit(1) on violation"
  - "node-html-parser@7.1.0 pinned devDependency (rendered-pass HTML parser)"
  - "package.json scripts audit:headings:full + generate:articles"
affects: [12-02, 12-03, 12-04, 12-05, 13-knowledge-base]

# Tech tracking
tech-stack:
  added: [node-html-parser@7.1.0]
  patterns:
    - "Central heading-config registry consumed by both render and audit (drift-proof)"
    - "Hybrid static+rendered build-failing audit (Phase 11 fail-pattern + DOM ancestry parse)"
    - "Article-count assertion via articles.length (never hardcoded), surfacing 252-vs-253"

key-files:
  created:
    - src/data/heading-config.ts
  modified:
    - scripts/audit-headings.ts
    - package.json

key-decisions:
  - "node-html-parser pinned EXACT 7.1.0 (no caret) post-checkpoint; T-12-SC supply-chain gate approved by human"
  - "Core/hub H1 question strings assigned (Open Question Q3): /roofing-services 'What Roofing Services Do We Provide?', /service-areas 'Where Do We Provide Roofing Services?', /contact 'How Can You Contact Our Roofing Team?', /about 'Who Are We as a Newark Roofing Company?'"
  - "6 hub-scaffold H1s assigned natural questions (DOM-safety subset only per Q2): residential/commercial/flat-roof/materials/free-estimate/process"
  - "252-vs-253 reconciliation: audit asserts question-form + uniqueness over articles.length (252 actual); never hardcodes 253"
  - "Audit intentionally RED (exit 1) against current pre-rewrite code — strictness proof, turns green in 12-05 after 12-02..12-04 land + rebuild"

patterns-established:
  - "Pattern 1: heading-config.ts is the single source both templates render and the static audit asserts"
  - "Pattern 2: rendered pass parses .next/server/app/*.html with node-html-parser; skips gracefully with 'build required' notice when HTML absent"
  - "Pattern 3: one representative prerendered file per template proves DOM rules; static pass enforces across all pages"

requirements-completed: [AUD-01, KB-03, HTAG-01, HTAG-02, HTAG-03, HTAG-04, HTAG-05, HTAG-06, HTAG-07, HTAG-08]

# Metrics
duration: 18min
completed: 2026-06-03
---

# Phase 12 Plan 01: Question-Form H-Tag Audit Foundation Summary

**Central question-form heading-config module + hybrid (static registry + rendered `.next` DOM) build-failing `audit:headings`, gated on a human-approved pinned `node-html-parser@7.1.0` install — the audit is the phase validator and is intentionally RED against the current code.**

## Performance

- **Duration:** ~18 min
- **Started:** 2026-06-03
- **Completed:** 2026-06-03
- **Tasks:** 3 (1 supply-chain checkpoint + 2 auto)
- **Files modified:** 3 (1 created, 2 modified; + package-lock.json)

## Accomplishments
- Installed `node-html-parser@7.1.0` **pinned exact** (no caret) as a devDependency after the human-approved T-12-SC supply-chain checkpoint; `require('node-html-parser')` exits 0.
- Created `src/data/heading-config.ts`: verbatim BRIEF §4.1–4.4 + PLAN §17 question-form strings (home constant, service/city/combo entity-token functions, in-scope core/hub H1s) with `permitsH2`/`materialsH2` accessors. Every interpolated string ends in "?"; no page-type H1 equals any of its own H2s.
- Fully rewrote `scripts/audit-headings.ts` as the hybrid build-failing audit (the OLD advisory location-keyword policy was discarded, not extended). Static pass over registries + config; rendered pass parses one prerendered `.html` per template. `process.exit(1)` on any violation, `errors.slice(0,40)` print cap.
- Wired `audit:headings:full` (`next build && npm run audit:headings`) and `generate:articles` into package.json.

## Task Commits

Each task was committed atomically:

1. **Task 1: Install node-html-parser (gated supply-chain checkpoint)** — `62cceb5` (chore)
2. **Task 2: Create central heading-config module** — `3a3cc65` (feat)
3. **Task 3: Rewrite audit-headings.ts as hybrid build-failing audit + wire scripts** — `008a325` (feat)

**Plan metadata:** (final docs commit — see git log)

_Task 2 was TDD: behavior assertions verified via tsx (GREEN), with the Task 3 static pass as the persistent test harness. No separate failing-test commit since the repo has no unit-test framework (script-based audits per RESEARCH)._

## Files Created/Modified
- `src/data/heading-config.ts` (NEW) — central verbatim question-form H-tag strings; single source for templates + static audit.
- `scripts/audit-headings.ts` (REWRITTEN) — hybrid static+rendered build-failing heading audit; `process.exit(1)` on violation.
- `package.json` (MODIFIED) — `node-html-parser@7.1.0` devDep + `audit:headings:full` + `generate:articles` scripts.

## Verification Results

| Check | Result |
|-------|--------|
| Task 1: `node -e "require('node-html-parser')"` | exit 0 — parser installed OK |
| package.json devDependency pin | `"node-html-parser": "7.1.0"` (exact, no caret) |
| Task 2: heading-config behavior assertions (tsx) | 15/15 PASS (all locked H1/coreH2/permitsH2/materialsH2 + all strings end "?" + H1≠H2) |
| Task 2: plan automated verify (grep home H1 + permitsH2 + materialsH2) | PASS |
| **Task 3: `npm run audit:headings`** | **exit 1 — 585 violations (THE SUCCESS CONDITION for this plan)** |
| Static pass article count | **252** (printed dynamically, NOT hardcoded) |
| Static registry enumeration | 65 services, 21 cities, 1197 live combos, 8 core pages |
| Rendered pass | RAN — confirmed DOM violations (home H1 split + non-question + first-H2≠Core) |
| grep `process.exit(1)` | present |
| grep `HEADING_CONFIG` import | present |
| grep `hasLocationRef` | absent (old location-keyword logic fully removed) |
| grep literal `=== 253` / `=== 252` | absent (uniqueness uses `articles.length`) |
| package.json `audit:headings:full` / `generate:articles` | both present |

**The audit exit-1 is the intended, correct outcome of this plan** — it proves the audit is wired and strict against the still-old templates/titles. It turns green only after plans 12-02..12-04 rewrite the heroes/templates/article titles and a rebuild refreshes `.next` (verified in 12-05). No templates, pages, or article data were modified in this plan to make the audit pass.

## Decisions Made
- **node-html-parser pinned EXACT 7.1.0** (no caret) per the approved T-12-SC checkpoint decision — provenance verified (8yr age, 7.18M wk downloads, real repo taoqf/node-fast-html-parser, no postinstall). No cheerio fallback used.
- **252-vs-253 reconciliation (Open Question Q1):** the audit asserts question-form + uniqueness over `articles.length` (252 actual), printing the count dynamically. It NEVER hardcodes 253 (would fail against correct data) or 252 (would re-introduce a brittle literal). The registry holds 252 (63 article-services × 3 + 60 comparison + 3 core; 2 services excluded in 07-01); spec said 253.
- **Open Question Q3 (core/hub H1 strings):** assigned natural question-form H1s — `/roofing-services` → "What Roofing Services Do We Provide?", `/service-areas` → "Where Do We Provide Roofing Services?", `/contact` → "How Can You Contact Our Roofing Team?", `/about` → "Who Are We as a Newark Roofing Company?". The 6 hub scaffolds got natural questions too (enforced only at H1 level per Q2).
- **Open Question Q2 (hub scaffolds):** the rendered pass enforces only the DOM-safety subset on the 6 noindex hub scaffolds (one question H1, no split, no nav/footer H-tags, no skipped levels) — NOT the full §4.x tree (scaffold tree content is Phase 13).
- **TDD harness:** since the repo has no jest/vitest, the Task 3 static pass IS the persistent test for heading-config; Task 2 behavior was verified inline via tsx (GREEN gate).

## Deviations from Plan

None — plan executed exactly as written. Task 1's checkpoint was pre-approved by the human in the orchestrator (decision: install node-html-parser@7.1.0 pinned exact), so it proceeded as an install rather than a pause.

## Issues Encountered
- `package.json` was modified by the `npm install` (node-html-parser added to devDependencies) between the initial Read and the Edit, triggering a stale-file error. Re-read the file and re-applied the script edits cleanly. No impact.
- The first-40 violation print cap is filled by the 252 static article-title failures, so the rendered DOM violations don't appear in the truncated console output. Confirmed directly via tsx that the rendered pass IS firing real DOM violations (home H1 split, non-question H1, first-H2≠Core). The audit is genuinely hybrid, not static-only.

## Threat Flags

None — no new security surface. The single new dependency (`node-html-parser`) parses only the repo's own `.next` build artifact (T-12-PARSE accepted), and its install was gated behind the approved T-12-SC checkpoint with an exact version pin.

## Known Stubs

None. The hub-scaffold H1 strings and core H1 strings are real assigned questions (not placeholders); the audit enforces them at H1 level. Downstream template/title rewrites that turn the audit green are plans 12-02..12-04 (explicitly tracked, by design).

## Next Phase Readiness
- AUD-01 deliverable exists and is strict: future plans 12-02..12-04 (hero/template/article-title rewrites) are validated against `npm run audit:headings`; the phase gate (12-05) runs `npm run audit:headings:full` and must reach exit 0.
- `heading-config.ts` is the single source the upcoming template/hero rewrites should import (prevents drift).
- Carry-forward: the audit is RED by design until 12-02..12-04 land + a rebuild. Plans 12-02..12-04 must NOT hand-edit `articles.ts` (regenerate via `npm run generate:articles`).

## Self-Check: PASSED

- FOUND: `src/data/heading-config.ts`
- FOUND: `scripts/audit-headings.ts`
- FOUND: `.planning/phases/12-question-form-h-tag-core-outer-template-system/12-01-SUMMARY.md`
- FOUND commit `62cceb5` (Task 1), `3a3cc65` (Task 2), `008a325` (Task 3)

---
*Phase: 12-question-form-h-tag-core-outer-template-system*
*Completed: 2026-06-03*
