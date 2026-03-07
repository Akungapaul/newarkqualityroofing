---
phase: 05-content-differentiation-engine
plan: 09
subsystem: combo-content
tags: [montclair, bloomfield, combo-content, differentiation, cross-city]
depends_on:
  requires: ["05-08"]
  provides: ["montclair-combo-content", "bloomfield-combo-content"]
  affects: ["05-11"]
tech-stack:
  added: []
  patterns: ["per-city combo content with Zod batch validation", "cross-city differentiation by architectural period and housing stock"]
key-files:
  created:
    - src/data/combo-content/montclair/roof-repair.ts
    - src/data/combo-content/montclair/asphalt-shingle-roofing.ts
    - src/data/combo-content/montclair/tpo-roofing-installation.ts
    - src/data/combo-content/montclair/gutter-installation-repair.ts
    - src/data/combo-content/montclair/commercial-roof-installation.ts
    - src/data/combo-content/montclair/index.ts
    - src/data/combo-content/bloomfield/roof-repair.ts
    - src/data/combo-content/bloomfield/asphalt-shingle-roofing.ts
    - src/data/combo-content/bloomfield/tpo-roofing-installation.ts
    - src/data/combo-content/bloomfield/gutter-installation-repair.ts
    - src/data/combo-content/bloomfield/commercial-roof-installation.ts
    - src/data/combo-content/bloomfield/index.ts
  modified: []
decisions:
  - "Montclair content organized by architectural period (Victorian, Tudor, Arts & Crafts, mid-century) with Historic Preservation Commission workflow"
  - "Bloomfield content organized by housing stock type (Cape Cod, split-level, colonial) with practical value-oriented voice"
  - "metaDescription trimmed for montclair/roof-repair (169->143) and bloomfield/commercial (163->157) to fit Zod 160-char max"
metrics:
  duration: 12min
  completed: 2026-03-07
---

# Phase 5 Plan 09: Montclair + Bloomfield Combo Content Summary

**Cross-city differentiation validated: affluent historic (Montclair) vs working-class practical (Bloomfield) produce genuinely different articles for identical services.**

## What Was Done

Authored 10 combo content files (5 per city) covering roof repair, asphalt shingle roofing, TPO roofing installation, gutter installation/repair, and commercial roof installation for both Montclair and Bloomfield.

### Montclair Content Character
- **Roof repair**: Victorian slate/copper restoration, Tudor half-timber junction repair, HPC compliance, tree canopy damage, Watchung Ridge wind exposure
- **Asphalt shingle**: Designer color selection for steep-slope visibility, Impact Resistant Class 4 for ridge elevation, moss/algae under protected canopy, $800K-$2M resale market considerations
- **TPO roofing**: Valley Road/Church Street commercial, Arts & Crafts flat sections, Montclair State University corridor, aesthetic integration concerns
- **Gutter installation**: Copper half-rounds for Victorians, massive leaf-load engineering, gutter guard testing for steep pitches, hillside drainage systems
- **Commercial roof**: Boutique retail tenant management, mixed-use building stakeholders, university-adjacent institutional grade, planning board aesthetic oversight

### Bloomfield Content Character
- **Roof repair**: Split-level multi-plane valley failures, post-war end-of-life assessment, budget-conscious repair-vs-replace honesty, two-family landlord documentation
- **Asphalt shingle**: 3-tab to architectural upgrade economics, multiple-layer tear-off reality, ventilation deficiency in post-war attics, value-tier product guidance
- **TPO roofing**: Bloomfield Avenue commercial corridor, split-level residential flat sections, GSP-corridor office parks, small-area mobilization efficiency
- **Gutter installation**: Seamless aluminum standard, hidden fascia rot, split-level upper-to-lower routing, practical maintenance schedules
- **Commercial roof**: Bloomfield Avenue repeating storefront pattern, GSP industrial/warehouse, light commercial institutional, plain-language warranty explanation

## Differentiation Validation

Same-service content across Newark, Montclair, and Bloomfield reads as completely different articles:
- **Roof repair**: Newark = party walls + urban access; Montclair = slate restoration + HPC; Bloomfield = split-level valleys + budget guidance
- **Asphalt shingle**: Newark = heat island + wind exposure; Montclair = designer aesthetics + steep slopes; Bloomfield = upgrade economics + ventilation
- **TPO roofing**: Newark = warehouse scale + heat island; Montclair = boutique commercial + residential flat; Bloomfield = strip mall corridor + split-level flat
- **Gutters**: Newark = box gutters + combined sewers; Montclair = copper + leaf canopy + hillside; Bloomfield = aluminum + fascia rot + split-level routing
- **Commercial**: Newark = industrial transformation + portfolio; Montclair = mixed-use tenant diplomacy; Bloomfield = practical storefront + value pricing

## Commits

| Task | Commit | Description |
|------|--------|-------------|
| 1 | 0575605 | Montclair combo content (5 services + city index) |
| 2 | f1c998b | Bloomfield combo content (5 services + city index + meta fixes) |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] metaDescription exceeding 160-char Zod limit**
- **Found during:** Task 2 verification
- **Issue:** montclair/roof-repair (169 chars) and bloomfield/commercial (163 chars) exceeded max
- **Fix:** Trimmed to 143 and 157 chars respectively
- **Files modified:** montclair/roof-repair.ts, bloomfield/commercial-roof-installation.ts
- **Commit:** f1c998b

**2. [Rule 3 - Blocking] Top-level aggregator already updated**
- **Found during:** Task 2
- **Issue:** src/data/combo-content/index.ts already included montclair and bloomfield imports (from parallel plan 05-10 execution)
- **Resolution:** No changes needed to aggregator -- already correct
- **Impact:** None, aggregator was pre-configured

## Next Phase Readiness

- Montclair and Bloomfield combo content validated with Zod at module level
- Cross-city differentiation confirmed across all 5 service types
- Ready for 05-11 similarity analysis validation
