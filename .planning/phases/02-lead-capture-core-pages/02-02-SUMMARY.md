---
phase: 02-lead-capture-core-pages
plan: 02
subsystem: homepage
tags: [hero, lead-form, testimonials, faq, locations, services-grid, trust-bar]
dependency-graph:
  requires: [02-01]
  provides: [Homepage, HeroSection, TrustBar, ServicesGrid, TestimonialCarousel, FaqAccordion, LocationsGrid]
  affects: [02-05, 03-01]
tech-stack:
  added: []
  patterns: [server-component-sections, client-carousel, native-details-summary, css-only-backgrounds]
key-files:
  created:
    - src/components/sections/HeroSection.tsx
    - src/components/sections/TrustBar.tsx
    - src/components/sections/ServicesGrid.tsx
    - src/components/sections/TestimonialCarousel.tsx
    - src/components/sections/FaqAccordion.tsx
    - src/components/sections/LocationsGrid.tsx
  modified:
    - src/app/page.tsx
    - src/app/layout.tsx
decisions:
  - id: 02-02-01
    decision: "ServicesGrid shows one representative service per category (not all 63)"
    rationale: "Prevents overwhelming the homepage; links to /services for full list"
  - id: 02-02-02
    decision: "HeroSection calls getServiceMenuGroups() internally (server component)"
    rationale: "No need to prop-drill from page since HeroSection is a server component"
metrics:
  duration: 4min
  completed: 2026-03-06
---

# Phase 02 Plan 02: Homepage Sections Summary

**One-liner:** Full conversion homepage with hero+LeadForm, trust bar, residential/commercial services grid, auto-rotating testimonial carousel, 21-city locations grid, native FAQ accordion, and final CTA section.

## What Was Built

### HeroSection (server component)
- Full viewport height (min-h-[85vh]) with layered CSS background: radial gradients, geometric grid overlay, and SVG noise grain texture
- Two-column desktop layout: H1 headline with copper accent + subtitle on left, LeadForm (variant="hero") on right
- PhoneNumber click-to-call link below subtitle
- Form wrapper has id="lead-form" for header CTA anchor scrolling
- Mobile stacks vertically

### TrustBar (server component)
- Horizontal stats bar from siteConfig.trustStats (4 items)
- Desktop: flex row; mobile: 2x2 grid
- BBB Accredited text placeholder
- Bordered top/bottom on parchment-dark background

### ServicesGrid (server component)
- Residential and commercial subsections with category-representative filtering
- One service per category shown (8 residential categories, 6+ commercial)
- Photo-card style with CSS gradient backgrounds, hover scale/shadow effects
- "View All Services" link to /services page
- Arrow icons on card hover

### TestimonialCarousel (client component)
- Auto-rotates every 5 seconds, disabled when prefers-reduced-motion detected
- Star rating SVGs with full/half/empty star support
- 1 card on mobile, 3 cards on desktop
- Dot navigation indicators with tablist role
- role="region" aria-label="Customer testimonials" with aria-live="polite"

### FaqAccordion (server component, zero JavaScript)
- Native details/summary HTML elements
- Chevron rotates on open via group-open:rotate-180
- Hides default WebKit marker with [&::-webkit-details-marker]:hidden
- max-w-3xl centered layout

### LocationsGrid (server component)
- All 21 Essex County cities from cities data
- Links use generateCityPageSlug for correct roofing-in-{city}-nj pattern
- Newark marked with "Headquarters" badge (checks city.isHQ)
- Dark forest background for visual contrast

### Homepage Assembly (page.tsx)
- Server component importing all 6 sections + data
- Conversion-optimized order: Hero, TrustBar, ServicesGrid, Testimonials, Locations, FAQ, CTA
- Final CTA section: copper background, #lead-form anchor link, PhoneNumber
- SEO metadata exported with targeted title and description

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Fixed layout.tsx missing phoneDisplay/phoneTel props**
- **Found during:** Task 1 TypeScript verification
- **Issue:** Header component expects phoneDisplay and phoneTel props but layout.tsx was not passing them
- **Fix:** Imported siteConfig in layout.tsx and passed phone.display/phone.tel to Header
- **Files modified:** src/app/layout.tsx
- **Commit:** e661061

## Decisions Made

| ID | Decision | Rationale |
|----|----------|-----------|
| 02-02-01 | One representative service per category on homepage | Prevents overwhelming visitors; "View All" links to full catalog |
| 02-02-02 | HeroSection calls getServiceMenuGroups() internally | Server component can call data functions directly, no prop-drilling needed |

## Verification Results

- TypeScript compiles without errors (npx tsc --noEmit)
- npm run build succeeds (1,492 static pages)
- All 6 section components exist in src/components/sections/
- TestimonialCarousel.tsx contains 'use client', 'prefers-reduced-motion', 'aria-live'
- FaqAccordion.tsx does NOT contain 'use client', uses native details/summary
- ServicesGrid.tsx filters by isResidential and isCommercial
- LocationsGrid.tsx uses generateCityPageSlug for city links
- page.tsx imports all 6 sections and exports metadata

## Next Phase Readiness

Homepage sections are reusable patterns for:
- 02-05: Service/city page templates may reuse FAQ, testimonial patterns
- Phase 3: SEO optimization can enhance homepage metadata and structured data
