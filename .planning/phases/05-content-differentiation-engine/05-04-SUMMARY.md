---
phase: 05-content-differentiation-engine
plan: 04
subsystem: content
tags: [combo-content, commercial-roofing, newark, b2b, tpo, epdm, modified-bitumen, bur, metal, pvc, green-roof, spray-foam]

# Dependency graph
requires:
  - phase: 05-01
    provides: ComboContentSchema, ComboContent type, aggregator skeleton
provides:
  - 8 Newark commercial roof type combo content files
  - B2B voice content targeting property managers and facility directors
affects: [05-08, 05-09, 05-10, 05-11]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "B2B primary voice for commercial roof type combo content"
    - "Material-specific differentiation through unique advantages per roof system"

key-files:
  created:
    - src/data/combo-content/newark/tpo-roofing-installation.ts
    - src/data/combo-content/newark/epdm-commercial-roofing.ts
    - src/data/combo-content/newark/modified-bitumen-roofing.ts
    - src/data/combo-content/newark/built-up-roofing.ts
    - src/data/combo-content/newark/commercial-metal-roofing.ts
    - src/data/combo-content/newark/pvc-roofing.ts
    - src/data/combo-content/newark/green-roof-installation.ts
    - src/data/combo-content/newark/spray-foam-roofing.ts
  modified: []

key-decisions:
  - "Each commercial roof type leads with its UNIQUE advantage in Newark's commercial context"
  - "B2B voice consistent across all 8 files -- property managers, facility directors, building owners as primary audience"

patterns-established:
  - "Commercial combo content pattern: overview (3-4 paras), challenges (3), process (3 steps), faqs (4-5), metaDescription"
  - "Newark commercial corridors referenced by material relevance: McCarter Highway (warehouses/TPO), Ironbound (industrial/EPDM, restaurants/PVC), Broad Street (offices/BUR/mod-bit)"

# Metrics
duration: 8min
completed: 2026-03-07
---

# Phase 5 Plan 04: Newark Commercial Roof Types Summary

**8 unique combo content files for Newark commercial roof types with B2B voice -- TPO for warehouses, EPDM for industrial, mod-bit for mixed-use, BUR for legacy offices, metal for adaptive reuse, PVC for restaurants, green roofs for sustainability, spray foam for retrofit**

## Performance

- **Duration:** 8 min
- **Started:** 2026-03-07T16:13:16Z
- **Completed:** 2026-03-07T16:21:28Z
- **Tasks:** 2
- **Files created:** 8

## Accomplishments
- 8 commercial roof type combo content files authored with distinct material positioning
- B2B voice throughout targeting property managers, facility directors, and commercial building owners
- Newark commercial corridors (Broad Street, McCarter Highway, Ironbound, Port Newark, University Heights) woven into material-specific discussions
- Each file differentiates its material through unique advantages: TPO (reflectivity/cost), EPDM (chemical resistance/longevity), mod-bit (foot traffic/redundancy), BUR (multi-ply/legacy), metal (wind/lifespan), PVC (grease/fire), green roof (stormwater/incentives), spray foam (no tear-off/R-value)

## Task Commits

Each task was committed atomically:

1. **Task 1: Newark commercial roof types (first 4)** - `52adfd5` (feat)
2. **Task 2: Newark commercial roof types (remaining 4)** - `f0a19e9` (feat)

## Files Created/Modified
- `src/data/combo-content/newark/tpo-roofing-installation.ts` - TPO membrane for McCarter Highway warehouses and downtown offices
- `src/data/combo-content/newark/epdm-commercial-roofing.ts` - EPDM rubber for Ironbound industrial and Port Newark properties
- `src/data/combo-content/newark/modified-bitumen-roofing.ts` - Multi-layer protection for Broad Street mixed-use buildings
- `src/data/combo-content/newark/built-up-roofing.ts` - Traditional multi-ply for downtown office buildings
- `src/data/combo-content/newark/commercial-metal-roofing.ts` - Standing seam for adaptive reuse and wind-exposed buildings
- `src/data/combo-content/newark/pvc-roofing.ts` - Chemical-resistant membrane for restaurants and industrial facilities
- `src/data/combo-content/newark/green-roof-installation.ts` - Stormwater management and sustainability incentives
- `src/data/combo-content/newark/spray-foam-roofing.ts` - Seamless insulation over existing roofs

## Decisions Made
- Each commercial roof type leads with its UNIQUE advantage in Newark's commercial context to avoid content blur between similar materials
- B2B voice is primary throughout -- property managers, facility directors, building owners are the audience, not homeowners
- Newark commercial corridors referenced by material relevance rather than uniformly across all files

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- 8 Newark commercial roof type combo content files ready for aggregator integration
- Files follow ComboContent schema from 05-01
- Remaining Newark combo content (residential roof types, repair/maintenance, etc.) can proceed in parallel plans

---
*Phase: 05-content-differentiation-engine*
*Completed: 2026-03-07*
