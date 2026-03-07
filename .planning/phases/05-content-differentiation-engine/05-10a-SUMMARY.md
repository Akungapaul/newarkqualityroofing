---
phase: 05-content-differentiation-engine
plan: 10a
subsystem: combo-content
tags: [caldwell, combo-content, content-differentiation, small-town]
dependency-graph:
  requires: [05-01, 05-08]
  provides: [caldwell-combo-content]
  affects: [05-10b, 05-11]
tech-stack:
  added: []
  patterns: [small-town-voice, neighborhood-recommendation-culture, tree-canopy-roofing]
key-files:
  created:
    - src/data/combo-content/caldwell/roof-repair.ts
    - src/data/combo-content/caldwell/asphalt-shingle-roofing.ts
    - src/data/combo-content/caldwell/tpo-roofing-installation.ts
    - src/data/combo-content/caldwell/gutter-installation-repair.ts
    - src/data/combo-content/caldwell/commercial-roof-installation.ts
    - src/data/combo-content/caldwell/index.ts
  modified: []
decisions:
  - Caldwell content uses small-town trust, neighborly reputation, and tree canopy as defining themes
  - Commercial content scaled to Bloomfield Avenue small-shop reality, not urban warehouse scale
  - Five-inch K-style gutters as standard (vs Newark six-inch) reflecting accessible detached housing
metrics:
  duration: 6min
  completed: 2026-03-07
---

# Phase 5 Plan 10a: Caldwell Combo Content Summary

Authored 5 Caldwell combo content files with distinct small-town suburban character -- tree canopy challenges, neighborhood reputation dynamics, and Bloomfield Avenue commercial scale completely differentiated from Newark urban density.

## Tasks Completed

### Task 1: Caldwell sample combos (5 services + index)

| File | Service | Word Count | Key Angles |
|------|---------|-----------|------------|
| roof-repair.ts | Roof Repair | ~1,800 | Colonial dormers, mature tree damage, neighborly contractor reputation |
| asphalt-shingle-roofing.ts | Asphalt Shingle | ~1,900 | GAF/CertainTeed HD, neighborhood color matching, moss under canopy |
| tpo-roofing-installation.ts | TPO Roofing | ~1,600 | Bloomfield Avenue shops, small-footprint economics, municipal buildings |
| gutter-installation-repair.ts | Gutter Install/Repair | ~1,800 | Fall leaf cleanup culture, gutter guards as investment, K-style standard |
| commercial-roof-installation.ts | Commercial Roof Install | ~1,900 | Local shop owners, face-to-face relationships, 1,500-10,000 sq ft scale |
| index.ts | Aggregator | -- | Zod z.array(ComboContentSchema).parse() validation |

**Commit:** efefb05

## Differentiation from Newark

| Dimension | Newark | Caldwell |
|-----------|--------|----------|
| Building type | Row houses, brownstones, multi-story commercial | Detached colonials, capes, small storefronts |
| Roof challenge | Party walls, urban heat island, access complexity | Tree canopy, leaf debris, dormer valleys |
| Commercial scale | Warehouses, office towers, 30,000+ sq ft | Bloomfield Ave shops, 1,500-5,000 sq ft |
| Contractor relationship | Portfolio management, tenant coordination | Neighborhood reputation, kitchen-table proposals |
| Gutter sizing | 6-inch K-style, 3x4 downspouts | 5-inch K-style, 2x3 downspouts |
| Key material concern | Heat island thermal cycling | Moss/algae under shade canopy |

## Deviations from Plan

None -- plan executed exactly as written.

## Verification

- `npx tsc --noEmit` passes with zero errors
- All 5 files conform to ComboContentSchema (Zod validated at module load)
- All metaDescription values under 160 characters

## Next Phase Readiness

- Caldwell combo content ready for aggregation in 05-10b
- Content differentiation patterns established for remaining Caldwells-Roseland cities
