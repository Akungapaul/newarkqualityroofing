---
phase: 08-seo-infrastructure
plan: 01
subsystem: seo
tags: [sitemap, robots, canonical, opengraph, metadata, next-config]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: data modules (services, cities, combos, comparisons, articles, corePages), slug utilities
  - phase: 07-supporting-content
    provides: 252 articles, 30 comparisons, all data modules complete
provides:
  - robots.txt generation via MetadataRoute.Robots
  - 6 type-split XML sitemaps via generateSitemaps()
  - sitemap-index.xml route handler
  - SEO_CONFIG shared constants (BASE_URL, OG_IMAGE, SITE_NAME)
  - canonical tags on every page via alternates.canonical
  - Open Graph tags on every page (title, description, url, siteName, type, image)
  - noindex on thank-you and privacy-policy pages
  - trailingSlash: false in next.config.ts
  - metadataBase on root layout
affects: [08-seo-infrastructure, 09-launch-optimization]

# Tech tracking
tech-stack:
  added: []
  patterns: [MetadataRoute.Robots, generateSitemaps() with type-split IDs, sitemap-index.xml route handler, SEO_CONFIG shared constants, buildOG helper]

key-files:
  created:
    - src/lib/seo-config.ts
    - src/app/robots.ts
    - src/app/sitemap.ts
    - src/app/sitemap-index.xml/route.ts
  modified:
    - next.config.ts
    - src/app/layout.tsx
    - src/app/page.tsx
    - src/app/[slug]/page.tsx

key-decisions:
  - "SEO_CONFIG as single exported constant object for shared SEO values across all pages"
  - "6 sitemap IDs (core, services, cities, combos, comparisons, articles) for type-split crawling"
  - "Sitemap-index.xml as route handler to avoid conflict with sitemap.ts claiming /sitemap/[id].xml"
  - "OG image path referenced before file exists -- Phase 9 creates actual branded image"
  - "buildOG helper function for consistent OG tag generation across all page types"
  - "Article pages use og:type article; all other pages use og:type website"

patterns-established:
  - "SEO_CONFIG import pattern: import { SEO_CONFIG } from '@/lib/seo-config' for canonical/OG"
  - "buildOG helper for DRY Open Graph metadata generation in [slug]/page.tsx"
  - "NOINDEX_PAGES set for centralized noindex page management"

requirements-completed: [SEOT-01, SEOT-02, SEOT-03, SEOT-04, SEOT-07]

# Metrics
duration: 3min
completed: 2026-03-09
---

# Phase 08 Plan 01: Crawlability Foundation Summary

**XML sitemaps (6 type-split), robots.txt, canonical tags, OG metadata, and metadataBase for 1,744 pages**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-09T07:49:27Z
- **Completed:** 2026-03-09T07:52:53Z
- **Tasks:** 2
- **Files modified:** 8

## Accomplishments
- 6 type-split XML sitemaps covering all 1,744 pages (core, services, cities, combos, comparisons, articles)
- Sitemap index at /sitemap-index.xml referencing all 6 sitemaps
- robots.txt blocking /api/, /thank-you, /_next/ with sitemap reference
- Canonical tags on every page (homepage + all [slug] pages) via alternates.canonical
- Open Graph tags (title, description, url, siteName, type, image) on every page
- noindex/nofollow on thank-you and privacy-policy pages
- trailingSlash: false in next.config.ts
- metadataBase on root layout enabling relative URL resolution

## Task Commits

Each task was committed atomically:

1. **Task 1: SEO config, robots.txt, XML sitemaps, and next.config** - `c891fb7` (feat)
2. **Task 2: Canonical tags, OG tags, metadataBase, and noindex pages** - `48438f4` (feat)

## Files Created/Modified
- `src/lib/seo-config.ts` - Shared SEO constants (BASE_URL, OG_IMAGE, SITE_NAME)
- `src/app/robots.ts` - robots.txt generation via MetadataRoute.Robots
- `src/app/sitemap.ts` - 6 type-split sitemaps via generateSitemaps()
- `src/app/sitemap-index.xml/route.ts` - Sitemap index XML response
- `next.config.ts` - Added trailingSlash: false
- `src/app/layout.tsx` - Added metadataBase for URL resolution
- `src/app/page.tsx` - Added canonical and OG tags to homepage metadata
- `src/app/[slug]/page.tsx` - Added canonical, OG, and noindex to all page types

## Decisions Made
- SEO_CONFIG as single exported constant object for shared SEO values across all pages
- 6 sitemap IDs (core, services, cities, combos, comparisons, articles) for type-split crawling
- Sitemap-index.xml as route handler to avoid conflict with sitemap.ts claiming /sitemap/[id].xml
- OG image path referenced before file exists -- Phase 9 creates actual branded image
- buildOG helper function for consistent OG tag generation across all page types
- Article pages use og:type article; all other pages use og:type website

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Crawlability foundation complete, ready for structured data (JSON-LD), performance optimization, and image assets
- OG image placeholder path in place; Phase 9 will create actual branded image at /images/og-default.jpg

## Self-Check: PASSED

All created files verified on disk. Both task commits (c891fb7, 48438f4) verified in git log.

---
*Phase: 08-seo-infrastructure*
*Completed: 2026-03-09*
