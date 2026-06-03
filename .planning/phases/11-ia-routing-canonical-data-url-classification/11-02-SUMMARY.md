---
phase: 11-ia-routing-canonical-data-url-classification
plan: 02
subsystem: infra
tags: [codegen, csv, redirects, indexation, seo, tsx, next-config, prebuild]

# Dependency graph
requires:
  - phase: 11-01
    provides: canonical src/config/site-config.ts + gated AggregateRating (unrelated to this plan but same phase wave)
provides:
  - "scripts/build-url-classification.ts — CSV->generated codegen + count/chain validator (process.exit(1) on drift)"
  - "src/generated/url-classification.json — committed verdict map { keep[255], noindex[942], redirects{168} }"
  - "src/generated/redirects.generated.mjs — committed default-export array of 176 permanent 301s (168 combo + 8 legacy)"
  - "src/data/url-classification.ts — locked six-fn verdict API (getComboVerdict/getClassification/isKeep/isNoindex/isRedirect/getComboRedirects)"
  - "prebuild npm script — regenerates artifacts before next build statically imports the .mjs"
affects: [11-04, 11-05, sitemap, next.config, seo-priority, robots, combo-routing]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Prebuild tsx codegen: CSV source-of-truth -> committed generated artifacts, regenerated each build"
    - "Build-fail count+chain assertion modeled on validate-flat-urls.ts (process.exit(1), no test framework)"
    - "Map/Set-based O(1) verdict API consumer over generated JSON (combo-content/index.ts analog)"

key-files:
  created:
    - scripts/build-url-classification.ts
    - src/generated/url-classification.json
    - src/generated/redirects.generated.mjs
    - src/data/url-classification.ts
  modified:
    - package.json

key-decisions:
  - "Chain-check validates redirect targets against the FULL KEEP-INDEX universe (622 slugs, all page types), not the combo-keep 255 — because the 8 legacy hub redirects target /roof-replacement (a KEEP Service hub, not a combo). Emitted json.keep stays combos-only (255)."
  - "Combo KEEP bucket maps verdict 'KEEP-INDEX' exactly; 'KEEP-INDEX (review)'/'REVIEW' do not appear among combos (verified) and intentionally never enter the locked buckets — any future appearance surfaces as a count mismatch."
  - "url-classification.json holds combo redirects only (168) in its redirects map; legacy redirects (8) live solely in the .mjs that next.config.ts imports — the verdict API getComboRedirects() therefore returns 168 combo redirects."
  - "Generated artifacts sorted deterministically (keep/noindex/redirects sorted) so prebuild regeneration produces zero PR diff drift (T-11-04 mitigation)."
  - "Defensive verdict-enum allow-list in the generator rejects unknown verdict values (V5 build-time input validation)."

patterns-established:
  - "Pattern: prebuild tsx generator wired in package.json so next.config.ts static .mjs import never hits a chicken-and-egg missing-file build crash (RESEARCH Pitfall 1)."
  - "Pattern: quote-aware RFC-4180 line parser (~25 lines) instead of split(',') so the quoted Reason column never corrupts Verdict/Redirect-Target columns (RESEARCH Pitfall 3)."

requirements-completed: [INDX-01, INDX-02]

# Metrics
duration: 5min
completed: 2026-06-03
---

# Phase 11 Plan 02: URL-Classification Generated Pipeline Summary

**CSV->generated indexation pipeline: a prebuild tsx generator that asserts the locked 255/942/168/8 counts and zero redirect chains, emits the committed verdict JSON + 176-entry redirects.mjs, and a locked six-function verdict API consumer over it.**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-06-03T06:03:30Z
- **Completed:** 2026-06-03T06:08:25Z
- **Tasks:** 2
- **Files modified:** 5 (4 created, 1 modified)

## Accomplishments
- `scripts/build-url-classification.ts` parses `URL-Classification.csv` quote-aware, validates the four locked counts (255 keep / 942 noindex / 168 combo-redirect / 8 legacy-redirect) and zero redirect chains + open-redirect hardening, and `process.exit(1)`s on any drift — this IS the INDX-02 build-fail validator.
- Emitted and committed both generated artifacts: `src/generated/url-classification.json` (`keep[255]`/`noindex[942]`/`redirects{168}`) and `src/generated/redirects.generated.mjs` (default-export of 176 `{source,destination,permanent:true}` 301s).
- `src/data/url-classification.ts` exposes the exact locked six-fn verdict API with redirect>keep>noindex>unknown precedence.
- `prebuild` npm script regenerates artifacts before `next build`; full build green (1,755 static pages).

## Task Commits

Each task was committed atomically:

1. **Task 1: CSV->generated generator with count + chain assertions** - `0cf2831` (feat)
2. **Task 2: Verdict API consumer + prebuild wiring** - `88fdac1` (feat)

**Plan metadata:** committed separately (docs: complete plan)

## Files Created/Modified
- `scripts/build-url-classification.ts` - Quote-aware CSV parser; buckets combo/legacy rows; asserts 255/942/168/8 + zero-chain + open-redirect; emits the two artifacts; `process.exit(1)` on any violation.
- `src/generated/url-classification.json` - Committed verdict map: `{ keep: string[255], noindex: string[942], redirects: { sourceSlug -> /targetSlug } (168) }`.
- `src/generated/redirects.generated.mjs` - Committed `export default` of 176 permanent 301s (168 combo + 8 legacy hub -> `/roof-replacement`), statically importable by next.config.ts.
- `src/data/url-classification.ts` - Verdict API consumer: `getComboVerdict`, `getClassification`, `isKeep`, `isNoindex`, `isRedirect`, `getComboRedirects` over Set/Map built from the JSON.
- `package.json` - Added `"prebuild": "tsx scripts/build-url-classification.ts"`.

## Decisions Made
- **Full-keep chain set vs combo-keep emit set:** the redirect chain-check (T-11-03) validates every target against the full 622-slug KEEP-INDEX universe (all page types) so the 8 legacy `/roof-replacement` targets pass, while the emitted `json.keep` remains the 255 combo keep slugs the sitemap/`isKeep` consumers expect. Verified: 0 of 176 targets fall outside the full keep set; 0 true chains (no target is itself a redirect source).
- **Combo KEEP maps only `KEEP-INDEX`:** the CSV has `KEEP-INDEX (review)` (22) and `REVIEW` (1) verdicts, but none on `Service+City combo` rows, so the combo keep bucket is exactly 255 from `KEEP-INDEX`. Keeping the mapping strict means any future review-verdict combo trips the count assertion rather than silently inflating keep.
- **Deterministic sorted output** so prebuild regeneration yields no spurious diff (drift-surfacing per T-11-04).
- **Defensive verdict allow-list** rejects unknown verdict strings at build time (V5).

## Deviations from Plan

None - plan executed exactly as written. The plan's Task 1 action described the CSV verdict values in simplified form (`KEEP-INDEX`/`NOINDEX`/`CONSOLIDATE`); the real CSV additionally carries `CONSOLIDATE / 301` (the combo-redirect verdict), `KEEP-INDEX (review)`, and `REVIEW`. The generator handles the real verdict set and produces the exact locked buckets the plan, must-haves, and verify blocks require — this is faithful execution of the plan's intent (locked 255/942/168/8 counts), not a deviation in scope or behavior.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- The verdict API (`@/data/url-classification`) and the generated `.mjs` are the foundation Wave-2 plans consume:
  - **11-04** imports `redirects.generated.mjs` into `next.config.ts`, filters the sitemap `combos` case via `isKeep`, gates combo robots via `isNoindex`, and reconciles `PRIORITY_COMBO_PAIRS ⊆ keep`.
  - **11-05** audit scripts (`audit:sitemap`/`audit:redirects`) read the verdict API for cross-checks.
- No blockers. `npm run build` is green with prebuild regenerating fresh artifacts.

## Threat Surface
All redirect surface introduced is covered by the plan's threat register (T-11-03 open-redirect, T-11-04 artifact drift, T-11-05 thin-doorway indexation) and mitigated by the generator's chain/open-redirect assertions, committed+regenerated artifacts, and the noindex bucketing. No new uncovered surface.

## Self-Check: PASSED

- FOUND: scripts/build-url-classification.ts
- FOUND: src/generated/url-classification.json
- FOUND: src/generated/redirects.generated.mjs
- FOUND: src/data/url-classification.ts
- FOUND: .planning/phases/11-ia-routing-canonical-data-url-classification/11-02-SUMMARY.md
- FOUND commit: 0cf2831 (Task 1)
- FOUND commit: 88fdac1 (Task 2)

---
*Phase: 11-ia-routing-canonical-data-url-classification*
*Completed: 2026-06-03*
