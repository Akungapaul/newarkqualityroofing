---
phase: 05-content-differentiation-engine
plan: 05
subsystem: combo-content
tags: [content, newark, components, specialty, flashing, gutters, skylights, fascia, soffit, vents, waterproofing, deck]
depends_on:
  requires: ["05-01"]
  provides: ["Newark components-specialty combo content (10 services)"]
  affects: ["05-06", "05-07", "05-08", "05-09", "05-10", "05-11"]
tech-stack:
  added: []
  patterns: ["ComboContent data files", "typed content exports"]
key-files:
  created:
    - src/data/combo-content/newark/roof-flashing-installation-repair.ts
    - src/data/combo-content/newark/chimney-flashing-repair.ts
    - src/data/combo-content/newark/gutter-installation-repair.ts
    - src/data/combo-content/newark/gutter-guard-installation.ts
    - src/data/combo-content/newark/skylight-installation-repair.ts
    - src/data/combo-content/newark/fascia-installation-repair.ts
    - src/data/combo-content/newark/soffit-installation-repair.ts
    - src/data/combo-content/newark/roof-vent-installation-repair.ts
    - src/data/combo-content/newark/roof-waterproofing.ts
    - src/data/combo-content/newark/roof-deck-repair-replacement.ts
  modified: []
decisions: []
metrics:
  duration: "11min"
  completed: "2026-03-07"
---

# Phase 5 Plan 05: Newark Components-Specialty Combo Content Summary

**Authored 10 unique ComboContent files covering all components and specialty services for Newark, each with brownstone-specific challenges, urban density considerations, and neighborhood-level detail.**

## Tasks Completed

### Task 1: Newark components-specialty combos (first 5 services)
- **roof-flashing-installation-repair**: Party wall step flashing, reglet cutting in century-old masonry, galvanic corrosion prevention across mixed-metal roofscapes, era-specific material protocols (copper/aluminum/stainless)
- **chimney-flashing-repair**: Cricket installation behind wide brownstone chimneys, lime mortar reglet compatibility, multi-flue chimney diagnostics, comprehensive crown-to-base assessment
- **gutter-installation-repair**: Box gutter rehabilitation on Victorian brownstones, combined sewer backflow prevention, urban stormwater disconnect options, SMACNA-standard commercial sizing
- **gutter-guard-installation**: Urban debris spectrum (catkins, granule wash, pigeon nesting), micro-mesh vs perforated aluminum selection by building type, box gutter custom guard fabrication
- **skylight-installation-repair**: Brownstone top-floor daylighting for party-wall-constrained layouts, warehouse conversion commercial skylights, condensation management in compact living spaces, historic preservation permitting

### Task 2: Newark components-specialty combos (remaining 5 services)
- **fascia-installation-repair**: Victorian decorative profile replication via specialty millwork, aluminum coil wrapping for rot prevention, concealed rafter tail rot remediation behind fascia
- **soffit-installation-repair**: Vented panel upgrades with rafter baffle integration, row house fire blocking at party walls, pest exclusion detailing, ventilation ratio compliance
- **roof-vent-installation-repair**: Urban heat island attic temperature management, row house party wall ventilation constraints, powered vs passive exhaust selection, data-logger-verified performance
- **roof-waterproofing**: Flat roof membrane system selection (TPO/PVC/EPDM/modified bitumen), party wall vertical water migration tracing, ponding water design solutions, stormwater compliance
- **roof-deck-repair-replacement**: Plank sheathing board-by-board assessment, plywood vs OSB in urban humidity, overlay re-sheathing over sound planks, condensation-driven deterioration diagnosis

## Content Statistics

- **Files created**: 10
- **Total content sections**: 10 overviews (3-4 paragraphs each), 10 challenges (2-3 each), 10 process sections (3-4 each), 10 FAQ sets (4-5 questions each)
- **All metaDescriptions**: Under 160 characters

## Content Differentiation Strategy

Each file addresses the specific component's interaction with Newark's building stock:
- **Brownstone-specific**: Party wall flashing, box gutters, plank sheathing, decorative fascia profiles, unventilated attics
- **Urban density**: Zero-setback access logistics, combined sewer interactions, shared-wall pest migration, fire blocking at party walls
- **Neighborhood-specific**: Forest Hill historic estates, North Ward row houses, Ironbound commercial blocks, Vailsburg/Weequahic mid-century homes
- **Material era awareness**: Pre-war lead/tin/lime mortar, mid-century galvanized steel, modern copper/aluminum/stainless

## Verification

- `npx tsc --noEmit` passed with zero errors for all 10 files
- All files import `ComboContent` type from `../schema` and conform to schema constraints

## Deviations from Plan

None -- plan executed exactly as written.

## Next Phase Readiness

All 10 Newark components-specialty combo content files are ready for aggregator registration when the batch index file is created. The aggregator at `src/data/combo-content/index.ts` has a commented import placeholder for Newark content that will be activated when all Newark service categories are complete.
