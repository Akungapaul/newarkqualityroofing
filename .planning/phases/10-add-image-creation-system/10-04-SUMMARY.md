---
phase: 10-add-image-creation-system
plan: 04
subsystem: ui
tags: [image-manifest, og-images, next-image, fallback-pattern, metadata]

# Dependency graph
requires:
  - phase: 10-add-image-creation-system
    plan: 01
    provides: Image manifest with lookup helpers (getHomepageImage, getGalleryPairs, getOGImage)
  - phase: 09-conversion-design-polish
    provides: All 8 homepage section components with hardcoded image paths
  - phase: 08-seo-technical-optimization
    provides: SEO_CONFIG, buildOG helper, metadata system in [slug]/page.tsx
provides:
  - All 8 homepage components use manifest lookups with graceful fallback to stock photos
  - BeforeAfterGallery supports 4-8 gallery pairs from manifest
  - buildOG() accepts optional ogImagePath for per-page OG images
  - Service, city, combo, and homepage pages look up per-page OG from manifest
  - Dead 0-byte badge files removed from public/images/
affects: []

# Tech tracking
tech-stack:
  added: []
  patterns: [manifest-driven image lookup with fallback, per-page OG image in metadata]

key-files:
  created: []
  modified:
    - src/components/sections/BeforeAfterGallery.tsx
    - src/components/sections/HomeResidentialCommercial.tsx
    - src/components/sections/HomeWhyChooseUs.tsx
    - src/components/sections/HomePricingTable.tsx
    - src/components/sections/HomeRepairServices.tsx
    - src/components/sections/FaqAccordion.tsx
    - src/components/sections/LocationsGrid.tsx
    - src/app/page.tsx
    - src/app/[slug]/page.tsx

key-decisions:
  - "BeforeAfterGallery requires minimum 4 manifest pairs before switching from fallback (prevents partial/empty gallery)"
  - "Combo pages reuse service OG image rather than having unique combo OG images (shared visual identity per service)"
  - "Comparison and article pages use shared default OG image (per-page OG deferred per CONTEXT.md)"
  - "Gallery pair captions stored as local PAIR_CAPTIONS map rather than in manifest (captions are presentation-layer)"

patterns-established:
  - "Manifest fallback pattern: const img = getHomepageImage('id'); const src = img?.path ? /${img.path} : '/images/fallback.jpg'"
  - "Per-page OG pattern: getOGImage(pageType, pageId) -> optional ogImagePath parameter to buildOG()"

requirements-completed: [IMG-11, IMG-12, IMG-13]

# Metrics
duration: 7min
completed: 2026-03-10
---

# Phase 10 Plan 04: Site Integration Summary

**All 8 image-referencing components use manifest lookups with graceful fallbacks, per-page OG images in metadata system, and 3 dead badge files removed**

## Performance

- **Duration:** 7 min
- **Started:** 2026-03-10T06:12:51Z
- **Completed:** 2026-03-10T06:20:20Z
- **Tasks:** 2
- **Files modified:** 11 (8 modified + 3 deleted)

## Accomplishments
- All 8 homepage components (BeforeAfterGallery, HomeResidentialCommercial, HomeWhyChooseUs, HomePricingTable, HomeRepairServices, FaqAccordion, LocationsGrid, page.tsx) use manifest lookup helpers with fallback to existing stock photos
- BeforeAfterGallery expanded from fixed 4 pairs to support 4-8 manifest pairs with pair-specific captions
- buildOG() updated with optional ogImagePath parameter; service, city, combo, and homepage pages look up per-page OG images from manifest
- 3 dead 0-byte badge files (bbb-accredited, gaf-certified, homeadvisor) removed from public/images/
- Site builds cleanly with zero errors (1,740 static pages)

## Task Commits

Each task was committed atomically:

1. **Task 1: Update homepage components to use manifest lookups** - `8d9cea6` (feat)
2. **Task 2: Per-page OG images in metadata system** - `5edcd1f` (feat)

## Files Created/Modified
- `src/components/sections/BeforeAfterGallery.tsx` - Gallery uses getGalleryPairs() with 4-pair minimum threshold and PAIR_CAPTIONS map
- `src/components/sections/HomeResidentialCommercial.tsx` - Residential/commercial split images use getHomepageImage('residential-split'/'commercial-split')
- `src/components/sections/HomeWhyChooseUs.tsx` - Team image uses getHomepageImage('why-team')
- `src/components/sections/HomePricingTable.tsx` - Estimate image uses getHomepageImage('pricing-estimate')
- `src/components/sections/HomeRepairServices.tsx` - Repair image uses getHomepageImage('repair-services')
- `src/components/sections/FaqAccordion.tsx` - FAQ image uses getHomepageImage('faq-options')
- `src/components/sections/LocationsGrid.tsx` - Service map image uses getHomepageImage('service-map')
- `src/app/page.tsx` - Consultation image uses getHomepageImage('consultation'); homepage OG uses getOGImage('homepage', 'homepage')
- `src/app/[slug]/page.tsx` - buildOG() accepts ogImagePath; service/city/combo/core pages look up per-page OG from manifest
- `public/images/bbb-accredited-badge.jpg` - Deleted (0-byte dead file)
- `public/images/gaf-certified-badge.jpg` - Deleted (0-byte dead file)
- `public/images/homeadvisor-badge.jpg` - Deleted (0-byte dead file)

## Decisions Made
- **BeforeAfterGallery 4-pair threshold**: Requires at least 4 manifest pairs before switching away from fallback data, preventing a partial or empty gallery when only some images have been generated
- **Combo pages reuse service OG**: Combo pages use getOGImage('service', combo.serviceId) rather than a unique combo OG image, sharing visual identity with the parent service
- **Comparison/article pages deferred**: Per CONTEXT.md, comparison and article pages continue using shared default OG image (not custom per-page OG this phase)
- **Gallery captions in component**: PAIR_CAPTIONS map lives in BeforeAfterGallery.tsx rather than in the manifest, since captions are a presentation concern

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required. The manifest is currently empty, so all components render with their existing fallback stock photos until images are generated (Plan 02) and approved (Plan 03).

## Next Phase Readiness
- All site components are wired to the manifest -- generating and approving images via the CLI will automatically update what the site displays
- The site renders identically to before (all fallbacks active) until manifest is populated
- No blocking issues for image generation pipeline usage

## Self-Check: PASSED

All 9 modified files verified on disk. Both task commits (8d9cea6, 5edcd1f) verified in git log. All 3 dead badge files confirmed deleted.

---
*Phase: 10-add-image-creation-system*
*Completed: 2026-03-10*
