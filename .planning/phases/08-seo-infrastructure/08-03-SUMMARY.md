---
phase: 08-seo-infrastructure
plan: 03
subsystem: seo
tags: [semantic-html, heading-hierarchy, anchor-text, 404-page, audit-scripts]

requires:
  - phase: 01-foundation
    provides: data modules, templates
  - phase: 03-service-pages
    provides: ServiceTemplate
  - phase: 04-city-pages
    provides: CityTemplate
  - phase: 06-combo-template
    provides: ComboTemplate
  - phase: 07-supporting-content
    provides: ComparisonTemplate, ArticleTemplate
provides:
  - Semantic HTML (article, section, aside, aria-labelledby) across all 5 templates
  - Anchor text rotation utility with 4 patterns each for services and cities
  - Enhanced 404 page with navigation, popular services, phone CTA
  - Heading hierarchy audit script
  - Meta title/description length audit script
affects: [08-seo-infrastructure]

tech-stack:
  added: []
  patterns: [semantic HTML template wrappers, anchor text rotation via index modulo]

key-files:
  created:
    - src/data/linking/anchor-text.ts
    - scripts/audit-headings.ts
    - scripts/audit-meta.ts
  modified:
    - src/components/templates/ServiceTemplate.tsx
    - src/components/templates/CityTemplate.tsx
    - src/components/templates/ComboTemplate.tsx
    - src/components/templates/ComparisonTemplate.tsx
    - src/components/templates/ArticleTemplate.tsx
    - src/components/sections/ComboRelatedLinks.tsx
    - src/components/sections/RelatedServices.tsx
    - src/components/sections/CityNearbyCities.tsx
    - src/components/sections/CityServicesGrid.tsx
    - src/app/not-found.tsx

key-decisions:
  - "Anchor text rotation via index % patterns.length for natural variation"
  - "Audit scripts analyze data layer, not HTML output, for accuracy and speed"
  - "404 page includes top 6 popular services as quick recovery links"

patterns-established:
  - "getServiceAnchorText(name, index) and getCityAnchorText(name, index) for varied link text"
  - "aria-labelledby on section elements referencing child heading IDs"

requirements-completed: [SEMA-01, SEMA-02, SEMA-03, SEMA-04]

duration: 5min
completed: 2026-03-09
---

# Phase 08 Plan 03: Semantic HTML, Meta Tags & 404 Page

**Semantic HTML upgrades, anchor text rotation, enhanced 404 page, and automated audit scripts**

## Performance

- **Completed:** 2026-03-09
- **Tasks:** 2
- **Files modified:** 13

## Accomplishments
- All 5 templates upgraded with semantic HTML: article for main content, section with aria-labelledby for subsections, aside for sidebars
- Anchor text rotation utility: 4 service patterns + 4 city patterns, wired into ComboRelatedLinks, RelatedServices, CityNearbyCities, CityServicesGrid
- Enhanced 404 page with navigation links (homepage, services, locations, contact), 6 popular services, phone CTA
- Heading audit script checks H1 keyword/location presence across all 1,740 pages
- Meta audit script checks title (<=60 chars) and description (<=160 chars) compliance

## Task Commits

1. **Task 1: Semantic HTML, anchor text, 404 page** - `c32b95e`
2. **Task 2: Heading and meta audit scripts** - `688fd84`

## Decisions Made
- Anchor text rotation via index % patterns.length for deterministic but varied link text
- Audit scripts analyze data-layer fields, not rendered HTML, for accuracy and speed
- 404 page recovery links target high-traffic services (roof repair, replacement, inspection, emergency, shingles, gutters)

## Deviations from Plan
None

## Issues Encountered
None

## Self-Check: PASSED

All templates verified with semantic HTML. Anchor text utility imported in 4 link components. 404 page renders navigation + services + phone. Both audit scripts execute without errors.

---
*Phase: 08-seo-infrastructure*
*Completed: 2026-03-09*
