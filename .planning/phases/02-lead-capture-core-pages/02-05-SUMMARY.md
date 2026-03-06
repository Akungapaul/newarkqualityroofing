---
phase: 02-lead-capture-core-pages
plan: 05
subsystem: ui
tags: [next.js, server-components, hub-pages, sitemap, privacy-policy, seo]

# Dependency graph
requires:
  - phase: 01-foundation
    provides: services, cities, combos, comparisons, corePages data; slug-registry; nav-data categoryLabels
  - phase: 02-01
    provides: PhoneNumber component, siteConfig data
provides:
  - ServicesHubPage with 63 services in residential/commercial split
  - LocationsHubPage with 21 city cards and HQ badge
  - SitemapPage with all ~1,448 URLs organized by type
  - PrivacyPolicyPage with standard privacy policy sections
  - CoreTemplate dispatcher wired to all 6 dedicated page components
affects: [phase-08-content, phase-09-polish]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Hub page pattern: filter/group data, render card grids with Link components"
    - "Collapsible sections with native details/summary for large lists"

key-files:
  created:
    - src/components/pages/ServicesHubPage.tsx
    - src/components/pages/LocationsHubPage.tsx
    - src/components/pages/SitemapPage.tsx
    - src/components/pages/PrivacyPolicyPage.tsx
  modified:
    - src/components/templates/CoreTemplate.tsx

key-decisions:
  - "Category labels duplicated from nav-data.ts rather than importing to keep hub pages self-contained"
  - "Sitemap uses native details/summary for collapsible combo sections (1,323 items)"
  - "Preserved 02-04 AboutPage/ContactPage cases in CoreTemplate dispatcher"

patterns-established:
  - "Hub page pattern: server component, import data, filter/group, render card grid with Link"
  - "Collapsible list pattern: details/summary for very large link lists"

# Metrics
duration: 4min
completed: 2026-03-06
---

# Phase 2 Plan 5: Hub Pages, Sitemap, and Privacy Policy Summary

**Services/Locations hub pages with residential/commercial split, HTML sitemap with all 1,448 URLs, and privacy policy with GoHighLevel CRM disclosure**

## Performance

- **Duration:** 4 min
- **Started:** 2026-03-06T07:27:24Z
- **Completed:** 2026-03-06T07:31:24Z
- **Tasks:** 2
- **Files modified:** 5

## Accomplishments
- ServicesHubPage lists all 63 services grouped by category under Residential and Commercial sections with distinct visual styling
- LocationsHubPage displays all 21 Essex County cities in a responsive grid with Newark HQ badge and zip code display
- SitemapPage organizes all ~1,448 URLs by type (core, services, cities, comparisons, combos) with collapsible city combo sections
- PrivacyPolicyPage covers data collection, GoHighLevel CRM sharing, cookies, data security, and user rights
- CoreTemplate now dispatches all 6 dedicated page components (about, contact, services, locations, sitemap, privacy-policy)

## Task Commits

1. **Task 1: Services Hub, Locations Hub, and Sitemap Pages** - `45068dd` (feat)
2. **Task 2: Privacy Policy and CoreTemplate Wiring** - `da14cdf` (feat)

## Files Created/Modified
- `src/components/pages/ServicesHubPage.tsx` - 63 services with residential/commercial split, category grouping, PhoneNumber CTA
- `src/components/pages/LocationsHubPage.tsx` - 21 city cards with HQ badge, zip codes, generateCityPageSlug links
- `src/components/pages/SitemapPage.tsx` - All URLs organized by type, collapsible combo sections per city
- `src/components/pages/PrivacyPolicyPage.tsx` - Standard privacy policy with GoHighLevel mention, siteConfig contact info
- `src/components/templates/CoreTemplate.tsx` - Dispatcher with 6 page components (about, contact, services, locations, sitemap, privacy)

## Decisions Made
- Category labels duplicated in ServicesHubPage and SitemapPage rather than importing from nav-data.ts, keeping hub pages self-contained without coupling to navigation data structure
- Used native `<details>`/`<summary>` HTML elements for collapsible combo sections in sitemap rather than a client-side accordion, keeping it a pure server component
- Built name lookup maps in SitemapPage since Combo type only has serviceId/cityId (not name fields)

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed Combo type mismatch in SitemapPage**
- **Found during:** Task 1 (SitemapPage)
- **Issue:** Initially referenced combo.serviceName and combo.cityName which do not exist on the Combo type (only serviceId and cityId)
- **Fix:** Built serviceNames and cityNames lookup Maps from services and cities data arrays
- **Files modified:** src/components/pages/SitemapPage.tsx
- **Verification:** npx tsc --noEmit passes
- **Committed in:** 45068dd (Task 1 commit)

---

**Total deviations:** 1 auto-fixed (1 bug)
**Impact on plan:** Type mismatch fix was necessary for compilation. No scope creep.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- All 8 core pages now render complete content (about, contact, services, locations, sitemap, privacy-policy, thank-you, home)
- Only thank-you and home remain with default/simple rendering (thank-you has dedicated route, home is index)
- Phase 2 complete: all 5 plans executed
- Ready for Phase 3 (service page templates) and Phase 4 (city page templates) which can run in parallel

---
*Phase: 02-lead-capture-core-pages*
*Completed: 2026-03-06*
