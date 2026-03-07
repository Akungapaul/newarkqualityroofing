---
phase: 05-content-differentiation-engine
plan: 08
subsystem: combo-content
tags: [newark, material-replacement, combo-content, aggregator]
dependency-graph:
  requires: [05-01]
  provides: [newark-material-replacement-combos, newark-city-index, top-level-aggregator]
  affects: [05-09, 05-10, 05-11, 06-xx]
tech-stack:
  added: []
  patterns: [per-city-index-aggregation, zod-array-validation]
key-files:
  created:
    - src/data/combo-content/newark/asphalt-shingle-roof-replacement.ts
    - src/data/combo-content/newark/metal-roof-replacement.ts
    - src/data/combo-content/newark/slate-roof-replacement.ts
    - src/data/combo-content/newark/tile-roof-replacement.ts
    - src/data/combo-content/newark/flat-roof-replacement.ts
    - src/data/combo-content/newark/cedar-shake-roof-replacement.ts
  modified:
    - src/data/combo-content/newark/index.ts
    - src/data/combo-content/index.ts
decisions: []
metrics:
  duration: 7.5min
  completed: 2026-03-07
---

# Phase 5 Plan 08: Newark Material Replacement Combos + City Index Summary

**One-liner:** 6 material-specific replacement combo files for Newark plus full 65-import city index aggregator with Zod validation and top-level wiring.

## What Was Done

### Task 1: Newark Material-Specific Replacement Combos (6 services)

Authored 6 combo content files focused on material-specific REPLACEMENT (tear-off, disposal, upgrade paths) -- distinct from the material installation files created in 05-03:

- **asphalt-shingle-roof-replacement**: 3-tab to architectural upgrades, party wall tear-off coordination, color selection for row house neighborhood cohesion
- **metal-roof-replacement**: Standing seam upgrades from aging corrugated, Ironbound industrial conversions, panel delivery logistics, noise management
- **slate-roof-replacement**: Natural vs synthetic slate, historic Forest Hill preservation, slate salvage techniques, structural reinforcement assessment
- **tile-roof-replacement**: Clay and concrete tile for Ironbound Portuguese heritage homes, weight/structural analysis, color matching weathered neighbors
- **flat-roof-replacement**: TPO/PVC replacing aging BUR, tapered insulation for ponding, phased commercial installation, energy code compliance
- **cedar-shake-roof-replacement**: Fire-treated shake for Forest Hill estates, ventilation engineering, premium sourcing lead times

Each file contains 3-5 overview paragraphs, 2-4 challenges, 2-4 process steps, 3-5 FAQs, and a unique metaDescription under 160 characters. All pass Zod ComboContentSchema validation.

### Task 2: Newark City Index + Top-Level Aggregator

- Expanded `newark/index.ts` from 5 imports to all 65 Newark combo content imports organized by category
- Zod `z.array(ComboContentSchema).parse()` validates all 65 objects at module load
- Updated `combo-content/index.ts` to import and spread `newarkComboContent` into `allContent` array
- Map-based O(1) lookup now covers all Newark combo content

## Deviations from Plan

None -- plan executed exactly as written.

## Compilation Note

At time of commit, 3 of the 65 imported files do not yet exist (created by parallel Wave 2 agents):
- `roof-waterproofing.ts`
- `roof-deck-repair-replacement.ts`
- `infrared-roof-leak-detection.ts`

`npx tsc --noEmit` will pass once these parallel agents complete their files. The 6 material replacement files created by this plan all compile independently.

## Commits

| # | Hash | Message |
|---|------|---------|
| 1 | 38a10db | feat(05-08): Newark material-specific replacement combo content (6 services) |
| 2 | 3ef584c | feat(05-08): Newark city index (65 imports) and top-level aggregator update |

## Next Phase Readiness

- All 65 Newark combo content files authored (pending 3 files from parallel agents)
- City index wired and Zod-validated
- Top-level aggregator connected
- Ready for additional city batches in subsequent plans
