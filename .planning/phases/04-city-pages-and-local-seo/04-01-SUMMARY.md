---
phase: 04-city-pages-and-local-seo
plan: 01
subsystem: ui
tags: [city-pages, zod-schema, scroll-spy, intersection-observer, next-ssg, lead-form]

# Dependency graph
requires:
  - phase: 01-project-foundation
    provides: design tokens, slug dispatcher, city data, service data
  - phase: 02-shared-components-and-pages
    provides: LeadForm, FloatingCtaButton, Breadcrumbs, PhoneNumber, siteConfig
  - phase: 03-service-pages
    provides: ServiceTemplate pattern (content schema + template + section components)
provides:
  - CityContentSchema with 14 validated fields for city page content
  - CityContent type inferred from schema
  - useScrollSpy hook with IntersectionObserver
  - 14 city section components (Hero, StatsBar, ToC, Overview, Residential, Commercial, Neighborhoods, ServicesGrid, Testimonials, ProjectSpotlights, Faqs, MapNap, NearbyCities, CtaBanner)
  - CityTemplate with full layout, ToC sidebar, and graceful content fallback
  - getCityContent aggregator ready for content plans 04-02 through 04-06
  - Metadata wiring with content metaTitle/metaDescription fallback
affects: [04-02, 04-03, 04-04, 04-05, 04-06, 06-combo-pages]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "City page content schema pattern (Zod schema -> type inference -> content aggregator)"
    - "Scroll spy with IntersectionObserver for sticky ToC"
    - "Graceful content fallback (try/catch getCityContent -> placeholder shell)"

key-files:
  created:
    - src/lib/hooks/useScrollSpy.ts
    - src/data/city-content/index.ts
    - src/components/sections/CityHero.tsx
    - src/components/sections/CityStatsBar.tsx
    - src/components/sections/CityTableOfContents.tsx
    - src/components/sections/CityOverview.tsx
    - src/components/sections/CityResidential.tsx
    - src/components/sections/CityCommercial.tsx
    - src/components/sections/CityNeighborhoods.tsx
    - src/components/sections/CityServicesGrid.tsx
    - src/components/sections/CityTestimonials.tsx
    - src/components/sections/CityProjectSpotlights.tsx
    - src/components/sections/CityFaqs.tsx
    - src/components/sections/CityMapNap.tsx
    - src/components/sections/CityNearbyCities.tsx
    - src/components/sections/CityCtaBanner.tsx
  modified:
    - src/lib/schemas.ts
    - src/lib/types.ts
    - src/components/templates/CityTemplate.tsx
    - src/app/[slug]/page.tsx

key-decisions:
  - "CityCtaBanner uses phone CTA + contact page link instead of inline LeadForm (simpler end-of-page conversion)"
  - "WhyChoose rendered inline in CityTemplate rather than separate component (content is simple grid)"
  - "Category labels duplicated in CityServicesGrid (self-contained, per project pattern from 02-05)"

patterns-established:
  - "City content aggregator pattern: getCityContent(cityId) with Map-based O(1) lookup"
  - "City section components follow same naming convention: City{Section}.tsx"
  - "Residential uses bg-forest/5 + border-forest; commercial uses bg-copper/5 + border-copper"

# Metrics
duration: 4min
completed: 2026-03-07
---

# Phase 4 Plan 01: City Page Infrastructure Summary

**CityContentSchema with 14 validated fields, 14 section components with Editorial Trust theming, CityTemplate with scroll spy ToC and graceful content fallback**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-07T07:40:40Z
- **Completed:** 2026-03-07T07:44:59Z
- **Tasks:** 4
- **Files modified:** 20

## Accomplishments

- CityContentSchema validates all city content with strict Zod constraints (min/max arrays, string lengths, enum types)
- 14 section components built with Editorial Trust design system (forest/copper/parchment theming, Cormorant fonts)
- CityTemplate renders full layout with ToC sidebar, graceful fallback for cities without content
- Metadata wiring uses content metaTitle/metaDescription with generic fallback during incremental content population
- Build succeeds: 1492 static pages including 21 city pages

## Task Commits

Each task was committed atomically:

1. **Task 1: CityContentSchema, CityContent type, and useScrollSpy hook** - `94e39c2` (feat)
2. **Task 2: 7 core layout components** - `95e0db1` (feat)
3. **Task 3: 7 engagement components** - `4212f01` (feat)
4. **Task 4: CityTemplate assembly and metadata wiring** - `7930c48` (feat)

## Files Created/Modified

- `src/lib/schemas.ts` - Added CityContentSchema with 14 validated fields
- `src/lib/types.ts` - Added CityContent type and CityContentSchema re-export
- `src/lib/hooks/useScrollSpy.ts` - IntersectionObserver scroll spy hook
- `src/data/city-content/index.ts` - Content aggregator with getCityContent()
- `src/components/sections/CityHero.tsx` - Hero with LeadForm above fold, breadcrumbs
- `src/components/sections/CityStatsBar.tsx` - Horizontal stats bar with project count, rating
- `src/components/sections/CityTableOfContents.tsx` - Sticky ToC with scroll spy highlighting
- `src/components/sections/CityOverview.tsx` - Overview paragraphs + weather challenges
- `src/components/sections/CityResidential.tsx` - Forest-themed residential section
- `src/components/sections/CityCommercial.tsx` - Copper-themed commercial section
- `src/components/sections/CityNeighborhoods.tsx` - Responsive neighborhood grid cards
- `src/components/sections/CityServicesGrid.tsx` - Category-grouped service links
- `src/components/sections/CityTestimonials.tsx` - Star-rated testimonial cards
- `src/components/sections/CityProjectSpotlights.tsx` - Featured project blocks
- `src/components/sections/CityFaqs.tsx` - FAQ accordion with details/summary
- `src/components/sections/CityMapNap.tsx` - Google Maps iframe + NAP from siteConfig
- `src/components/sections/CityNearbyCities.tsx` - Adjacent city cards with service links
- `src/components/sections/CityCtaBanner.tsx` - Full-width CTA with phone and contact link
- `src/components/templates/CityTemplate.tsx` - Full city page template with 14 sections + WhyChoose
- `src/app/[slug]/page.tsx` - Metadata wiring for city content

## Decisions Made

- CityCtaBanner uses phone CTA + contact page link instead of inline LeadForm for simpler end-of-page conversion
- WhyChoose rendered inline in CityTemplate rather than as a separate component (content is a simple reasons grid)
- Category labels duplicated in CityServicesGrid for self-containment (per project pattern established in 02-05)
- Service links point to service pages (not combo URLs) with TODO comment for Phase 6 update

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- City page infrastructure complete -- all 14 section components and CityTemplate ready
- Content aggregator at src/data/city-content/index.ts ready to receive content files
- Plans 04-02 through 04-06 can populate CityContent objects and see fully rendered pages immediately
- Service links in CityServicesGrid have TODO for Phase 6 combo URL update

---
*Phase: 04-city-pages-and-local-seo*
*Completed: 2026-03-07*
