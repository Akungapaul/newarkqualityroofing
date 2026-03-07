---
phase: 05-content-differentiation-engine
plan: 01
subsystem: combo-content-data-layer
tags: [zod, schema, validation, dice-coefficient, cli-tooling]
dependency-graph:
  requires: [01-01, 01-02]
  provides: [ComboContentSchema, getComboContent, getAllComboContent, validate-similarity-cli]
  affects: [05-02, 05-03, 05-04, 05-05, 05-06, 05-07, 05-08, 05-09, 05-10, 05-11]
tech-stack:
  added: [cmpstr]
  patterns: [bigram-dice-coefficient, composite-key-map-lookup, tiered-threshold-validation]
key-files:
  created:
    - src/data/combo-content/schema.ts
    - src/data/combo-content/index.ts
    - src/data/combo-content/newark/.gitkeep
    - scripts/validate-similarity.ts
  modified:
    - package.json
    - package-lock.json
decisions:
  - id: "05-01-dice-manual"
    decision: "Manual bigram Dice-Sorensen implementation instead of cmpstr CmpStr class"
    reason: "CmpStr constructor is protected in TS types; manual bigram implementation is straightforward and avoids type workarounds"
  - id: "05-01-thresholds"
    decision: "Tiered thresholds: cross-city 70%, cross-service 50%, cross-category 60%"
    reason: "Matches research spec -- same service across cities needs most differentiation"
metrics:
  duration: 3min
  completed: 2026-03-07
---

# Phase 5 Plan 1: ComboContent Schema, Aggregator, and Similarity Validation Summary

**One-liner:** Zod ComboContentSchema with 7 validated fields, Map-based O(1) aggregator, and bigram Dice-Sorensen similarity CLI with tiered thresholds (70%/50%/60%).

## Tasks Completed

| Task | Name | Commit | Key Files |
|------|------|--------|-----------|
| 1 | ComboContentSchema and aggregator skeleton | 67b343e | schema.ts, index.ts, newark/.gitkeep |
| 2 | Similarity validation CLI script and cmpstr installation | 92c9d10 | validate-similarity.ts, package.json |

## What Was Built

### ComboContentSchema (schema.ts)
- Zod schema validating 7 fields: serviceId, cityId, overview (3-5 paragraphs), challenges (2-4), process (2-4), faqs (3-5 Q&A pairs), metaDescription (max 160 chars)
- Inferred `ComboContent` type exported for use throughout codebase

### Aggregator (index.ts)
- Follows exact pattern from city-content/index.ts
- Composite key `${serviceId}:${cityId}` for O(1) Map lookup
- `getComboContent()` throws on missing content (caught at build time)
- `getAllComboContent()` returns full array for validation script
- Empty content array with comments showing where city imports will be added
- Validation deferred to per-city-batch files (not on empty array)

### Similarity Validation CLI (validate-similarity.ts)
- Run via `npx tsx scripts/validate-similarity.ts [--sample]`
- Manual bigram Dice-Sorensen coefficient (cmpstr installed but TS types have protected constructor)
- Three comparison types: cross-city, cross-service, cross-category
- Tiered thresholds matching research spec
- Console table output with pair details and PASS/FAIL status
- Summary with worst offenders on failure
- `--sample` flag filters to 5 strategic services across all cities + all repair-maintenance in Newark
- Handles empty content gracefully (warning + clean exit)

## Decisions Made

1. **Manual Dice implementation over cmpstr class** -- cmpstr's CmpStr constructor is `protected` in TypeScript declarations, requiring `CmpStr.create()` factory which has unclear generic types. Manual bigram implementation is 20 lines and well-understood. cmpstr remains installed as devDependency per plan spec.

2. **Tiered thresholds from research** -- 70% cross-city, 50% cross-service, 60% cross-category. These will be tuned once real content exists.

3. **getAllComboContent() export added** -- Not in original plan but needed by validation script to iterate all content without knowing service/city IDs.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] cmpstr CmpStr protected constructor**
- **Found during:** Task 2
- **Issue:** `new CmpStr()` fails TypeScript compilation -- constructor is protected, requires `CmpStr.create()` factory
- **Fix:** Implemented manual bigram Dice-Sorensen coefficient (standard algorithm, 20 lines)
- **Files modified:** scripts/validate-similarity.ts
- **Commit:** 92c9d10

## Verification

- `npx tsc --noEmit` passes with zero errors
- `npx tsx scripts/validate-similarity.ts` runs cleanly, prints threshold config, exits 0
- Directory structure: `src/data/combo-content/` contains schema.ts, index.ts, newark/
- cmpstr in devDependencies confirmed

## Next Phase Readiness

Ready for 05-02 through 05-11 content authoring plans. The schema, aggregator, and validation tooling are all in place. Each city batch plan will:
1. Create content files in `src/data/combo-content/{city}/`
2. Import into the aggregator's allContent array
3. Run `npx tsx scripts/validate-similarity.ts` to verify differentiation
