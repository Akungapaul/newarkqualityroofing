---
phase: 09-conversion-and-design-polish
plan: 03
subsystem: ui
tags: [motion, animation, scroll-reveal, header-shrink, floating-cta, stagger-grid, micro-interactions]

# Dependency graph
requires:
  - phase: 09-conversion-and-design-polish
    provides: AnimateIn, StaggerGrid, StaggerItem, MotionProvider animation components
provides:
  - Hero stagger entrance with AnimateIn delay props (badge/heading/subtitle/CTA at 200/400/600/800ms)
  - HeroFormReveal client component for form slide-from-right animation
  - Header scroll-based shrink from py-3 to py-1.5 with shadow/backdrop-blur
  - FloatingCtaButton scroll-triggered entrance via useScroll (mobile bar + desktop pill)
  - AnimateIn scroll-reveal wrappers on all homepage sections
  - StaggerGrid/StaggerItem on ServicesGrid and LocationsGrid card grids
  - AnimateIn wrappers on all sections in ServiceTemplate, CityTemplate, ComboTemplate, ArticleTemplate, ComparisonTemplate
  - .btn-hover CSS utility with scale(1.02) and reduced-motion support
affects: [09-04]

# Tech tracking
tech-stack:
  added: []
  patterns: [AnimateIn wrappers on server component children, useScroll for scroll-triggered visibility, passive scroll listener for header shrink]

key-files:
  created:
    - src/components/animations/HeroFormReveal.tsx
  modified:
    - src/components/sections/HeroSection.tsx
    - src/components/layout/Header.tsx
    - src/components/sections/FloatingCtaButton.tsx
    - src/components/sections/ServicesGrid.tsx
    - src/components/sections/LocationsGrid.tsx
    - src/components/sections/FaqAccordion.tsx
    - src/components/sections/HomeWhyChooseUs.tsx
    - src/components/sections/HomePricingTable.tsx
    - src/components/sections/HomeRepairServices.tsx
    - src/components/sections/HomeResidentialCommercial.tsx
    - src/components/sections/TestimonialCarousel.tsx
    - src/components/templates/ServiceTemplate.tsx
    - src/components/templates/CityTemplate.tsx
    - src/components/templates/ComboTemplate.tsx
    - src/components/templates/ArticleTemplate.tsx
    - src/components/templates/ComparisonTemplate.tsx
    - src/app/globals.css

key-decisions:
  - "HeroSection stays server component -- AnimateIn wraps individual elements with delay props instead of converting to client"
  - "Header uses useState + passive scroll listener instead of motion useScroll to keep existing state management pattern"
  - "FloatingCtaButton uses separate mobile (full-width bar) and desktop (fixed pill) layouts with shared scroll trigger"
  - "AnimateIn wraps server-rendered section children -- no server components converted to client"

patterns-established:
  - "Server component sections receive AnimateIn wrappers in the template or section file, not by converting to 'use client'"
  - "Card grids use StaggerGrid as container and StaggerItem per child for staggered entrance"
  - "Scroll-based header state uses passive scroll listener with 50px threshold"

requirements-completed: [DSGN-07]

# Metrics
duration: 9min
completed: 2026-03-09
---

# Phase 9 Plan 3: Site-wide Animations and Micro-interactions Summary

**Hero stagger entrance, header scroll shrink, floating CTA scroll trigger, AnimateIn scroll reveals on all 8 homepage sections and all 5 page templates with StaggerGrid on card grids**

## Performance

- **Duration:** 9 min
- **Started:** 2026-03-09T17:34:37Z
- **Completed:** 2026-03-09T17:43:38Z
- **Tasks:** 2
- **Files modified:** 18

## Accomplishments
- Hero entrance plays orchestrated stagger: badge at 200ms, heading at 400ms, subtitle at 600ms, phone CTA at 800ms, form slides from right at 400ms
- Header smoothly transitions between normal (py-3, no shadow) and scrolled (py-1.5, shadow-lg, backdrop-blur-md) at 50px scroll threshold
- FloatingCtaButton slides up from bottom when past hero fold (600px scroll), hides on scroll back; mobile full-width bar + desktop fixed pill button
- All 8 homepage sections wrapped in AnimateIn for scroll-triggered fade-in reveal
- ServicesGrid and LocationsGrid use StaggerGrid/StaggerItem for staggered card entrance
- All 5 templates (Service, City, Combo, Article, Comparison) have section-level AnimateIn wrappers
- Added .btn-hover CSS utility with scale(1.02) and prefers-reduced-motion support
- Build passes with all 1,752 static pages

## Task Commits

Each task was committed atomically:

1. **Task 1: Hero entrance orchestration, header scroll behavior, and floating CTA** - `d7f01c0` (feat)
2. **Task 2: Wrap all section components in AnimateIn and add StaggerGrid to card grids** - `d25d895` (feat)

## Files Created/Modified
- `src/components/animations/HeroFormReveal.tsx` - Client component for form slide-from-right animation (opacity:0,x:30 -> opacity:1,x:0)
- `src/components/sections/HeroSection.tsx` - Added AnimateIn wrappers with staggered delays on all hero elements
- `src/components/layout/Header.tsx` - Added scrolled state with passive scroll listener for shrink/shadow/blur
- `src/components/sections/FloatingCtaButton.tsx` - Replaced static visibility with useScroll-triggered entrance + dual mobile/desktop layouts
- `src/components/sections/ServicesGrid.tsx` - Wrapped content in AnimateIn, card grids in StaggerGrid/StaggerItem
- `src/components/sections/LocationsGrid.tsx` - Wrapped content in AnimateIn, city card grid in StaggerGrid/StaggerItem
- `src/components/sections/FaqAccordion.tsx` - Wrapped content in AnimateIn
- `src/components/sections/HomeWhyChooseUs.tsx` - Wrapped content in AnimateIn
- `src/components/sections/HomePricingTable.tsx` - Wrapped content in AnimateIn
- `src/components/sections/HomeRepairServices.tsx` - Wrapped content in AnimateIn
- `src/components/sections/HomeResidentialCommercial.tsx` - Wrapped content in AnimateIn
- `src/components/sections/TestimonialCarousel.tsx` - Wrapped content in AnimateIn
- `src/components/templates/ServiceTemplate.tsx` - AnimateIn on all 12 article sections
- `src/components/templates/CityTemplate.tsx` - AnimateIn on all 12 article sections
- `src/components/templates/ComboTemplate.tsx` - AnimateIn on all 8 article sections
- `src/components/templates/ArticleTemplate.tsx` - AnimateIn on body, CTA, and nav sections
- `src/components/templates/ComparisonTemplate.tsx` - AnimateIn on all 6 article sections
- `src/app/globals.css` - Added .btn-hover utility with reduced-motion support

## Decisions Made
- HeroSection stays as server component -- AnimateIn wraps individual elements with incremental delay props (no client conversion needed)
- Header uses useState + passive scroll listener at 50px threshold (simple, no motion dependency needed for scroll detection)
- FloatingCtaButton shows at 600px scroll (approximately past hero fold), separate layouts for mobile (full-width bar) and desktop (fixed bottom-right pill)
- No server components converted to client -- AnimateIn wraps server-rendered children, maintaining the SSG architecture

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All animation layers applied across the entire site
- MotionConfig with reducedMotion='user' ensures all animations respect user preferences
- Ready for 09-04 (final polish, if any)
- Build: 1,752 static pages, zero errors

## Self-Check: PASSED

All 18 files verified present. Both task commits (d7f01c0, d25d895) verified in git log. All plan verification checks pass: HeroSection has AnimateIn, Header has passive scroll listener, FloatingCtaButton has useScroll, ServicesGrid has StaggerGrid, all 5 templates import AnimateIn, no server components converted to client.

---
*Phase: 09-conversion-and-design-polish*
*Completed: 2026-03-09*
