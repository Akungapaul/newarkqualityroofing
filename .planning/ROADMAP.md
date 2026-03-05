# Roadmap: Newark Quality Roofing

## Overview

This roadmap delivers a conversion-first roofing lead generation website targeting ~1,697 pages across 63 services, 21 Essex County cities, and their cross-product combinations. The build progresses from data foundation through templates, content differentiation at scale, and SEO infrastructure -- with lead capture functional from Phase 2 onward. Every phase produces a verifiable, working capability that builds toward the goal: every page converts visitors into roofing leads.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: Foundation and Data Layer** - Next.js project, design system, data schemas, slug registry, catch-all dispatcher
- [ ] **Phase 2: Lead Capture and Core Pages** - Lead form, GoHighLevel integration, homepage, about, contact, hub pages, thank you, privacy
- [ ] **Phase 3: Service Pages** - Service template, 63 services with residential/commercial content, related services linking
- [ ] **Phase 4: City Pages and Local SEO** - City template, 21 cities with unique local content, map embeds, NAP consistency
- [ ] **Phase 5: Content Differentiation Engine** - Content variation system, city data matrix, similarity validation for combo pages
- [ ] **Phase 6: Programmatic Scale** - 1,323 combo pages, reverse silo internal linking engine, full site navigation
- [ ] **Phase 7: Supporting Content** - 30 comparison pages, 252 supporting articles, reverse silo article linking
- [ ] **Phase 8: SEO Infrastructure** - Technical SEO, schema markup, semantic optimization, sitemaps, AI detection QA
- [ ] **Phase 9: Conversion and Design Polish** - Editorial Trust design refinement, animations, trust signals, gallery, residential/commercial homepage balance

## Phase Details

### Phase 1: Foundation and Data Layer
**Goal**: The project builds, deploys to Vercel, and serves pages through a working slug-to-template dispatcher with validated data for all 1,697 URLs
**Depends on**: Nothing (first phase)
**Requirements**: FNDN-01, FNDN-02, FNDN-03, FNDN-04, FNDN-05, FNDN-06, FNDN-07, FNDN-08
**Success Criteria** (what must be TRUE):
  1. Running `next build` produces a deployable site on Vercel with zero errors
  2. Visiting any of the ~1,697 slugs in a browser resolves to the correct template type (service, city, combo, comparison, or article)
  3. Build-time validation catches and rejects duplicate slugs across all page types
  4. Cormorant headings and Cormorant Garamond body text render correctly on all pages
  5. The forest green / copper / parchment color palette is applied site-wide via CSS variables
**Plans**: 4 plans

Plans:
- [x] 01-01-PLAN.md -- Next.js 16 project setup with TypeScript, Tailwind v4 @theme design tokens, Cormorant fonts
- [x] 01-02-PLAN.md -- Zod schemas + all 63 services, 21 cities, 30 comparisons, core pages data
- [x] 01-03-PLAN.md -- Slug registry with collision detection, combo generation, catch-all [slug] dispatcher with SSG
- [x] 01-04-PLAN.md -- Sticky header with navigation dropdowns, mega-footer, mobile menu, responsive layout shell

### Phase 2: Lead Capture and Core Pages
**Goal**: Visitors can submit leads from any page and reach a human via click-to-call, with all core informational pages live
**Depends on**: Phase 1
**Requirements**: LEAD-01, LEAD-02, LEAD-03, LEAD-04, LEAD-05, LEAD-06, CORE-01, CORE-02, CORE-03, CORE-04, CORE-05, CORE-06, CORE-07, CORE-08
**Success Criteria** (what must be TRUE):
  1. Submitting the lead form on any page sends the data to GoHighLevel and redirects to the thank you page
  2. Tapping the phone number on mobile initiates a call; the number is visible and sticky on mobile
  3. The homepage displays hero with form, trust bar, services grid, residential/commercial split, locations grid, testimonials, and FAQ
  4. All 8 core pages (home, about, contact, services hub, locations hub, HTML sitemap, thank you, privacy) are accessible and render complete content
  5. Server-side logging captures every form submission for lead loss prevention
**Plans**: TBD

Plans:
- [ ] 02-01: LeadForm component with React Hook Form + Zod validation, above-the-fold placement
- [ ] 02-02: Server-side API route for GoHighLevel webhook proxy with fallback logging
- [ ] 02-03: Click-to-call component, phone tracking integration, thank you page
- [ ] 02-04: Homepage template (hero, trust bar, services grid, locations grid, testimonials, FAQ)
- [ ] 02-05: Core pages (about, contact with map, services hub, locations hub, HTML sitemap, privacy)

### Phase 3: Service Pages
**Goal**: All 63 service pages are live with full-length content covering both residential and commercial audiences
**Depends on**: Phase 2
**Requirements**: SRVC-01, SRVC-02, SRVC-03, SRVC-04, SRVC-05, SRVC-06, SRVC-07, CONT-02, CONT-03, CONT-05
**Success Criteria** (what must be TRUE):
  1. All 63 service pages render with 2,000+ words, H1/H2/H3 keyword hierarchy, and residential AND commercial sections
  2. Each service page has a lead form above the fold in the hero section
  3. Each service page displays a related services block linking to other services in the same category
  4. Breadcrumbs show Home > Services > [Service Name] on every service page
  5. Commercial-specific services (commercial install, repair, replacement, thermal imaging, infrared detection) have dedicated pages with B2B-appropriate language
**Plans**: TBD

Plans:
- [ ] 03-01: ServiceTemplate component with hero/form, content sections, FAQ, breadcrumbs
- [ ] 03-02: Service data population -- repair/maintenance (10), residential roof types (8), commercial types (8)
- [ ] 03-03: Service data population -- components/specialty (10), energy/solar (4), commercial services (5), design/consultation (3)
- [ ] 03-04: Replacement sub-pages (17), related services block, residential/commercial CTA language

### Phase 4: City Pages and Local SEO
**Goal**: All 21 Essex County city pages are live with genuinely unique local content, map embeds, and consistent NAP data
**Depends on**: Phase 2
**Requirements**: CITY-01, CITY-02, CITY-03, CITY-04, CITY-05, CITY-06, CITY-07, CITY-08, LOCL-01, LOCL-02, LOCL-03, LOCL-04, CONT-04
**Success Criteria** (what must be TRUE):
  1. All 21 city pages render with 2,000+ words of unique content including neighborhoods, building types, weather patterns, and local codes
  2. Each city page displays a map embed, lead form above the fold, and services available in that city
  3. Nearby cities block on each page links to geographically adjacent Essex County cities
  4. NAP (Name, Address, Phone) information is identical across every page on the site
  5. City pages address both residential and commercial roofing needs with distinct sections
**Plans**: TBD

Plans:
- [ ] 04-01: CityTemplate component with hero/form, local content sections, map embed, breadcrumbs
- [ ] 04-02: City data research and population (21 cities -- neighborhoods, building stock, weather, codes)
- [ ] 04-03: Nearby cities block, services-in-city block, NAP consistency enforcement, GBP readiness

### Phase 5: Content Differentiation Engine
**Goal**: A validated content variation system produces genuinely unique combo pages that pass cross-page similarity checks below 70%
**Depends on**: Phase 3, Phase 4
**Requirements**: CMBO-01, CMBO-02, CMBO-03, SEMA-06
**Success Criteria** (what must be TRUE):
  1. The content variation engine produces combo pages with 5-8 distinct intro structures per service category
  2. A sample batch of 50 combo pages shows less than 70% similarity between any two pages for the same service
  3. City-specific data (neighborhoods, building types, weather challenges) is injected into combo content -- not just city name swaps
  4. Content variation patterns are demonstrably different enough to avoid duplicate content detection by search engines
**Plans**: TBD

Plans:
- [ ] 05-01: Content variation engine architecture (intro templates, rotating blocks, city data injection)
- [ ] 05-02: City differentiation matrix (unique data points per city for content injection)
- [ ] 05-03: Sample batch generation (50 pages), cross-page similarity validation script, iteration

### Phase 6: Programmatic Scale
**Goal**: All 1,323 service-x-city combo pages are live with full internal linking following reverse silo methodology
**Depends on**: Phase 5
**Requirements**: CMBO-04, CMBO-05, CMBO-06, CMBO-07, CMBO-08, LINK-01, LINK-02, LINK-03, LINK-04, LINK-05, LINK-06, LINK-07, LINK-08
**Success Criteria** (what must be TRUE):
  1. All 1,323 combo pages render with lead form above the fold, breadcrumbs, and flat URLs (/service-city-nj)
  2. Each combo page links to the same service in nearby cities and other services in the same city
  3. Money pages link to exactly ONE supporting article; supporting articles link back to the money page and forward to the next article
  4. Footer mega-links display all 21 cities and major service categories on every page
  5. No orphan pages exist -- every page has 3+ internal links pointing to it
**Plans**: TBD

Plans:
- [ ] 06-01: ComboTemplate component with hero/form, differentiated content, breadcrumbs, flat URLs
- [ ] 06-02: Full 1,323 combo page generation with ISR/split build configuration
- [ ] 06-03: Reverse silo internal linking engine (money page -> article, article -> article -> money page)
- [ ] 06-04: Navigation blocks (nearby cities, related services, footer mega-links), orphan page audit

### Phase 7: Supporting Content
**Goal**: All 30 comparison pages and 252 supporting articles are live, completing the topical authority structure
**Depends on**: Phase 6
**Requirements**: COMP-01, COMP-02, COMP-03, COMP-04, COMP-05, COMP-06, COMP-07, ARTL-01, ARTL-02, ARTL-03, ARTL-04, ARTL-05
**Success Criteria** (what must be TRUE):
  1. All 30 comparison pages render with side-by-side analysis, comparison tables, clear winner recommendations, and FAQ sections
  2. All 252 supporting articles (~750 words each) are mapped to their parent money page's keyword cluster
  3. Supporting articles link back to their money page and forward to the next supporting article -- with zero outbound links
  4. Each comparison page has a lead form above the fold
  5. 3 supporting articles exist per money page (service pages), completing the reverse silo structure
**Plans**: TBD

Plans:
- [ ] 07-01: ComparisonTemplate component (side-by-side layout, comparison matrix, FAQ, form)
- [ ] 07-02: Comparison page content -- 15 material vs material, 5 service vs service, 6+ decision-helpers
- [ ] 07-03: ArticleTemplate component (~750 words, reverse silo links, no outbound links)
- [ ] 07-04: Supporting article content generation -- 252 articles mapped to money page keyword clusters

### Phase 8: SEO Infrastructure
**Goal**: Complete technical SEO, schema markup, and semantic optimization are in place across all ~1,697 pages
**Depends on**: Phase 6
**Requirements**: SEOT-01, SEOT-02, SEOT-03, SEOT-04, SEOT-05, SEOT-06, SEOT-07, SEOT-08, SCHM-01, SCHM-02, SCHM-03, SCHM-04, SEMA-01, SEMA-02, SEMA-03, SEMA-04, SEMA-05, SEMA-07
**Success Criteria** (what must be TRUE):
  1. XML sitemaps are auto-generated and split by page type; robots.txt is present and correct
  2. Every page has a canonical tag, proper breadcrumb markup, and is reachable within 3 clicks from the homepage
  3. LocalBusiness schema renders on homepage, contact page, and city pages; Service schema on service and combo pages; FAQ schema on pages with FAQ sections; Breadcrumb schema on all pages
  4. Every page has an H1 with primary keyword + location, H2s with secondary keywords, and H3s with long-tail/FAQ keywords
  5. Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1) on representative pages across all templates
**Plans**: TBD

Plans:
- [ ] 08-01: XML sitemaps (split by type), HTML sitemap updates, robots.txt, canonical tags
- [ ] 08-02: Schema markup generators (LocalBusiness, Service, FAQ, Breadcrumb) with per-page-type strategy
- [ ] 08-03: Semantic heading audit (H1/H2/H3 keyword mapping), NLP content optimization, topical map validation
- [ ] 08-04: Core Web Vitals optimization, 3-click depth validation, flat URL audit, AI detection QA pass

### Phase 9: Conversion and Design Polish
**Goal**: The site looks and feels like a premium, trustworthy roofing company with polished design, animations, and balanced residential/commercial messaging
**Depends on**: Phase 2
**Requirements**: DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05, DSGN-06, DSGN-07, DSGN-08, CONT-01
**Success Criteria** (what must be TRUE):
  1. The Editorial Trust design direction is fully implemented -- rounded corners, organic shapes, grain texture, warm tone photography treatment
  2. Trust bar displays license, insurance, years experience, and BBB credentials as text cards (no images)
  3. Testimonials section with star ratings and before/after project gallery with CSS brand treatment are visible on appropriate pages
  4. Page load animations, scroll-triggered reveals, and hover micro-interactions are present using the motion library
  5. The homepage addresses both homeowners and business owners equally with balanced residential/commercial messaging
**Plans**: TBD

Plans:
- [ ] 09-01: Editorial Trust design implementation (grain, rounded corners, organic shapes, CSS photo treatment)
- [ ] 09-02: Trust signals (trust bar, testimonials, star ratings, before/after gallery)
- [ ] 09-03: Animations and micro-interactions (page load orchestration, scroll triggers, hover states)
- [ ] 09-04: Residential/commercial content balance audit, homepage messaging, 50/50 split enforcement

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9
Note: Phases 3 and 4 can run in parallel (both depend only on Phase 2). Phases 7 and 8 can run in parallel (both depend on Phase 6). Phase 9 can run anytime after Phase 2.

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation and Data Layer | 4/4 | Complete | 2026-03-05 |
| 2. Lead Capture and Core Pages | 0/5 | Not started | - |
| 3. Service Pages | 0/4 | Not started | - |
| 4. City Pages and Local SEO | 0/3 | Not started | - |
| 5. Content Differentiation Engine | 0/3 | Not started | - |
| 6. Programmatic Scale | 0/4 | Not started | - |
| 7. Supporting Content | 0/4 | Not started | - |
| 8. SEO Infrastructure | 0/4 | Not started | - |
| 9. Conversion and Design Polish | 0/4 | Not started | - |

---
*Roadmap created: 2026-03-05*
*Last updated: 2026-03-05 — Phase 1 complete*
