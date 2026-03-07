---
phase: 04
plan: 02
subsystem: city-content
tags: [city-pages, content, seo, urban-core, newark, east-orange, orange, irvington]
dependency-graph:
  requires: [04-01]
  provides: [urban-core-city-content]
  affects: [04-07, 05-xx, 06-xx]
tech-stack:
  added: []
  patterns: [city-content-module, zod-validated-content-arrays]
key-files:
  created:
    - src/data/city-content/urban-core.ts
  modified:
    - src/data/city-content/index.ts
decisions:
  - id: "04-02-01"
    description: "Newark metaDescription trimmed from 161 to 150 chars to pass Zod max(160) validation"
metrics:
  duration: "9min"
  completed: "2026-03-07"
---

# Phase 04 Plan 02: Urban Core City Content Summary

**One-liner:** 4 urban core cities (Newark, East Orange, Orange, Irvington) with 11,724 words of locally-specific roofing content covering brownstones, Victorians, multi-family rehab, and affordable housing.

## What Was Built

Created `src/data/city-content/urban-core.ts` exporting `urbanCoreContent: CityContent[]` with 4 city content objects, each exceeding 2,500 words of unique, locally-detailed roofing content.

### Newark (2,874 words)
- Ironbound brownstone party-wall flashing, Ferry Street commercial storefronts
- Forest Hill Victorian slate restoration, turret caps, copper valleys
- Downtown mixed-use with TPO/EPDM membranes at Gateway Center area
- Multi-family investment property packages for North Ward, Roseville, Clinton Hill
- Urban heat island, Passaic River flooding, nor'easter wind tunnel challenges
- 9 neighborhoods, 3 project spotlights, 3 testimonials, 8 FAQs

### East Orange (2,820 words)
- Brick Church Victorian multi-family conversions with complex gable intersections
- Main Street commercial corridor flat-roof replacements
- Medical office roofing near East Orange General Hospital
- Investment property pricing for landlords with multiple properties
- Tree canopy damage, ice dams on older homes, aging infrastructure
- 6 neighborhoods, 2 project spotlights, 3 testimonials, 7 FAQs

### Orange (2,868 words)
- Main Street revitalization with historic commercial building sensitivity
- Valley neighborhood moisture management from South Mountain runoff
- Scotland Road Victorian restoration with Vermont slate and copper
- Tight-lot roofing expertise for 25-40 foot lot widths
- South Mountain Reservation tree damage, localized ice storms
- 6 neighborhoods, 2 project spotlights, 3 testimonials, 7 FAQs

### Irvington (3,162 words)
- Springfield Avenue commercial corridor with decades of patch-over-patch roofs
- Olympic Park 1920s-1940s colonials at end of roofing lifecycle
- Affordable multi-family roofing for investment property market
- Route 78 industrial corridor with vibration-resistant fully adhered membranes
- Community renewal partnerships, Habitat for Humanity collaboration
- 7 neighborhoods, 3 project spotlights, 3 testimonials, 7 FAQs

## Aggregator Wiring

Added `urbanCoreContent` import and spread into `src/data/city-content/index.ts` alongside existing `affluentSuburbanContent` and `caldwellsRoselandContent` (added by parallel agents). All content validated through `z.array(CityContentSchema).parse()`.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Newark metaDescription exceeded 160 character Zod limit**
- **Found during:** Task 2 (build verification)
- **Issue:** Newark metaDescription was 161 characters, 1 over the Zod max(160) constraint
- **Fix:** Changed "all neighborhoods" to "beyond" to bring to 150 characters
- **Files modified:** src/data/city-content/urban-core.ts
- **Commit:** 2ab542c

## Commits

| # | Hash | Message |
|---|------|---------|
| 1 | f83dc7c | feat(04-02): add Newark and East Orange city content |
| 2 | 2ab542c | feat(04-02): add Orange and Irvington content, wire urban-core aggregator |

## Verification

- TypeScript compiles without errors
- All 4 cities pass Zod CityContentSchema validation
- `npm run build` succeeds with 1,488+ static pages generated
- Word counts: Newark 2,874 / East Orange 2,820 / Orange 2,868 / Irvington 3,162

## Next Phase Readiness

No blockers. Urban core content is complete and rendering. Remaining city content plans (04-03 through 04-06) can continue in parallel.
