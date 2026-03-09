---
phase: 09-conversion-and-design-polish
plan: 02
subsystem: ui
tags: [trust-bar, testimonials, before-after-gallery, svg-icons, countup, slider, json-ld, compact-testimonial]

# Dependency graph
requires:
  - phase: 09-conversion-and-design-polish
    plan: 01
    provides: AnimateIn, CountUp, StaggerGrid animation components, photo-treatment CSS, MotionProvider
provides:
  - Text-only TrustBar with SVG icons and CountUp animation (variant full/compact)
  - Enhanced TestimonialCarousel with aggregate rating header, no outbound links
  - BeforeAfterGallery with 4 drag slider items and ImageObject JSON-LD
  - CompactTestimonial component for service/city page inline testimonials
  - TrustBar on homepage, service pages, and city pages
  - CompactTestimonial on service and city template pages
affects: [09-03, 09-04]

# Tech tracking
tech-stack:
  added: []
  patterns: [CSS clipPath slider with pointer events, SVG icon components inline, client component for interactive slider, server component for static testimonials]

key-files:
  created:
    - src/components/sections/BeforeAfterGallery.tsx
    - src/components/sections/CompactTestimonial.tsx
  modified:
    - src/data/site-config.ts
    - src/components/sections/TrustBar.tsx
    - src/components/sections/TestimonialCarousel.tsx
    - src/app/page.tsx
    - src/components/templates/ServiceTemplate.tsx
    - src/components/templates/CityTemplate.tsx

key-decisions:
  - "TrustBar converted to client component for CountUp child; variant prop controls full vs compact sizing"
  - "BeforeAfterGallery uses CSS clipPath with pointer event tracking for unified mouse+touch drag control"
  - "CompactTestimonial as server component with case-insensitive partial match filter and fallback to first available testimonials"
  - "StarRating duplicated in CompactTestimonial (simpler than extracting shared util from client TestimonialCarousel)"

patterns-established:
  - "SVG icons inline as React components rather than image files for trust signals"
  - "Pointer event pattern (onPointerDown/Move/Up with setPointerCapture) for cross-device drag interaction"
  - "ImageObject JSON-LD via dangerouslySetInnerHTML script tag for gallery images"

requirements-completed: [DSGN-02, DSGN-03, DSGN-04]

# Metrics
duration: 4min
completed: 2026-03-09
---

# Phase 9 Plan 2: Trust Signal Components + Before/After Gallery + Compact Testimonials Summary

**Text-only TrustBar with SVG icons and CountUp animation, BeforeAfterGallery with 4 CSS clipPath drag sliders, aggregate-rated TestimonialCarousel, and CompactTestimonial for service/city inner pages**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-09T17:34:11Z
- **Completed:** 2026-03-09T17:38:49Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments
- Redesigned TrustBar from badge images to text-only with 4 custom SVG icons (shield, certificate, clock, checkmark) and CountUp animation on 3 numeric stats
- Enhanced TestimonialCarousel with aggregate rating header ("4.9 out of 5 -- based on 200+ reviews") and removed all outbound review links (Google, HomeAdvisor, BBB)
- Built BeforeAfterGallery with 4 interactive drag slider items (2 residential + 2 commercial) using CSS clipPath and pointer events, with ImageObject JSON-LD schema
- Created CompactTestimonial server component showing 1-2 filtered testimonials on service and city pages
- Wired TrustBar (compact) into ServiceTemplate and CityTemplate after hero sections
- Full build passes with all 1,752 static pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Redesign TrustBar and enhance TestimonialCarousel** - `65081db` (feat)
2. **Task 2: Create BeforeAfterGallery and CompactTestimonial, wire into pages** - `2335183` (feat)

## Files Created/Modified
- `src/data/site-config.ts` - Added numericValue, suffix, prefix, icon fields to trustStats for CountUp animation support
- `src/components/sections/TrustBar.tsx` - Complete redesign: removed badge images, added SVG icons + CountUp, variant prop (full/compact)
- `src/components/sections/TestimonialCarousel.tsx` - Added aggregate rating header with 5 star icons, removed outbound review links
- `src/components/sections/BeforeAfterGallery.tsx` - New: 4 drag slider items with CSS clipPath, pointer events, ARIA slider role, ImageObject JSON-LD
- `src/components/sections/CompactTestimonial.tsx` - New: server component with filtered testimonials for service/city pages
- `src/app/page.tsx` - Added BeforeAfterGallery between HomeResidentialCommercial and HomeWhyChooseUs
- `src/components/templates/ServiceTemplate.tsx` - Added TrustBar (compact) after hero, CompactTestimonial after comparisons
- `src/components/templates/CityTemplate.tsx` - Added TrustBar (compact) after hero, CompactTestimonial after FAQs

## Decisions Made
- TrustBar is a client component ('use client') because it renders CountUp child components that need viewport detection; variant prop controls text sizing (3xl full vs 2xl compact)
- BeforeAfterGallery uses CSS clipPath with pointer event tracking (setPointerCapture) for unified mouse and touch drag control, avoiding separate mouse/touch event handlers
- CompactTestimonial kept as server component since it has no interactivity; StarRating duplicated from TestimonialCarousel rather than extracting to shared utility (simpler, stateless component)
- BeforeAfterGallery placed between HomeResidentialCommercial and HomeWhyChooseUs on homepage, keeping it within the plan's specified position between residential/commercial content and testimonials

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All trust signal components deployed across homepage, service pages, and city pages
- BeforeAfterGallery ready for real photography swap when stock images are sourced
- CompactTestimonial filtering logic ready for expanded testimonials data
- Animation foundation from 09-01 fully wired into trust components

## Self-Check: PASSED

All 8 files verified present. Both task commits (65081db, 2335183) verified in git log.

---
*Phase: 09-conversion-and-design-polish*
*Completed: 2026-03-09*
