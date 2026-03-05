---
phase: 01-foundation-and-data-layer
plan: 02
subsystem: data
tags: [zod, schemas, services, cities, comparisons, data-layer, runtime-validation]

requires:
  - phase: 01-01
    provides: Next.js project with Zod 3.25.x installed
provides:
  - Zod schemas for Service, City, Combo, Comparison, CorePage, SlugEntry
  - 63 validated service definitions across 8 categories
  - 21 validated Essex County city definitions with zip codes and adjacency
  - 30 validated comparison page definitions
  - 7 validated core page definitions
  - Data verification script
affects: [01-03 slug registry, 01-04 dispatcher, all content phases]

tech-stack:
  added: [tsx (dev dependency implicit via npx)]
  patterns: [Zod runtime validation at module level, z.array(Schema).parse() for data integrity]

key-files:
  created:
    - src/lib/schemas.ts
    - src/lib/types.ts
    - src/data/services.ts
    - src/data/cities.ts
    - src/data/comparisons.ts
    - src/data/core-pages.ts
    - scripts/verify-data.ts
  modified: []

key-decisions:
  - "Trimmed replacement-sub-pages to 15 (dropped TPO/EPDM Roof Replacement) to reach exactly 63 total services since those materials are covered in commercial-roof-types"
  - "Added 4 extra comparisons: Architectural vs 3-Tab, DIY vs Pro Repair, Colonial Homes guide, Warranty guide -- all NJ-relevant"
  - "All data files use z.array(Schema).parse() at module level so invalid data crashes the build"

patterns-established:
  - "Data files export validated arrays via Zod parse at import time"
  - "Types inferred from Zod schemas via z.infer, never manually defined"
  - "City adjacency uses string IDs referencing other city records"

duration: 5min
completed: 2026-03-05
---

# Phase 1 Plan 2: Zod Schemas and Data Population Summary

**Zod-validated data layer with 63 services, 21 cities, 30 comparisons, and 7 core pages -- all runtime-validated at import time**

## Performance
- **Duration:** 5 minutes
- **Started:** 2026-03-05T16:28:04Z
- **Completed:** 2026-03-05T16:33:00Z
- **Tasks:** 2/2
- **Files created:** 7

## Accomplishments
- Defined Zod schemas for all page types: Service, City, Combo, Comparison, CorePage, SlugEntry
- Populated 63 services across 8 categories with unique slugs, meta titles (under 60 chars), meta descriptions (under 160 chars)
- Populated 21 Essex County cities with real NJ zip codes and geographically accurate adjacent city references
- Populated 30 comparison pages (16 material-vs-material, 6 service-vs-service, 8 decision-helper)
- Populated 7 core pages (about, contact, services hub, locations hub, sitemap, thank-you, privacy-policy)
- All data files use runtime Zod validation -- build crashes if any data is invalid
- Created verification script confirming counts, uniqueness, and referential integrity

## Task Commits
1. **Task 1: Create Zod schemas and TypeScript types** - `c0ecb46` (feat)
2. **Task 2: Populate all data files** - `7853891` (feat)

## Files Created
- `src/lib/schemas.ts` - Zod schemas for Service, City, Combo, Comparison, CorePage, PageType, SlugEntry
- `src/lib/types.ts` - TypeScript types inferred from Zod schemas with re-exports
- `src/data/services.ts` - 63 validated services across 8 categories
- `src/data/cities.ts` - 21 validated Essex County cities with zip codes and adjacency
- `src/data/comparisons.ts` - 30 validated comparison pages
- `src/data/core-pages.ts` - 7 validated core pages
- `scripts/verify-data.ts` - Data integrity verification script

## Decisions Made
1. Trimmed replacement-sub-pages from 17 to 15 by dropping TPO Roof Replacement and EPDM Roof Replacement (those materials already have dedicated pages in commercial-roof-types) to hit exactly 63 services
2. Added 4 NJ-specific comparisons to reach 30: Architectural vs 3-Tab Shingles, DIY vs Professional Roof Repair, Best Roofing for Essex County Colonial Homes, Roof Warranty Comparison Guide
3. All data validated at module level with `z.array(Schema).parse()` -- no safeParse, meaning invalid data immediately crashes the build

## Deviations from Plan
None - plan executed exactly as written.

## Next Phase Readiness
- All data files are importable and validated
- Slug registry (Plan 01-03) can now iterate services, cities, comparisons, and core pages to build the complete slug map
- Content phases can reference service/city/comparison data by ID
- The residential/commercial classification blocker noted in STATE.md is now resolved -- every service has isResidential and isCommercial flags

---
*Phase: 01-foundation-and-data-layer*
*Completed: 2026-03-05*
