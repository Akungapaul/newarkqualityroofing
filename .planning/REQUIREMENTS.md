# Requirements: Newark Quality Roofing

**Defined:** 2026-03-05
**Core Value:** Every page converts visitors into roofing leads through above-the-fold forms and click-to-call

## v1 Requirements

### Foundation & Data Layer

- [ ] **FNDN-01**: Next.js 15 project with TypeScript, Tailwind CSS v4, deployed on Vercel
- [ ] **FNDN-02**: Zod-validated data schemas for services (63), cities (21), and cross-product combos (1,323)
- [ ] **FNDN-03**: Slug registry with build-time collision detection for all ~1,697 flat URLs
- [ ] **FNDN-04**: Single catch-all `[slug]` route with dispatcher resolving to correct template
- [ ] **FNDN-05**: Full SSG with Vercel split builds for all ~1,697 pages
- [ ] **FNDN-06**: Cormorant (headings) + Cormorant Garamond (body) fonts via next/font
- [ ] **FNDN-07**: Editorial Trust design system — forest green (#1A3A2A), copper (#C17F4E), parchment (#F5F0E8) palette with CSS variables
- [ ] **FNDN-08**: Mobile-responsive, conversion-optimized layout

### Lead Capture

- [ ] **LEAD-01**: Lead form above the fold on every page (first name, last name, phone, email, service dropdown, project details textarea)
- [ ] **LEAD-02**: Form submits to server-side API route that proxies to GoHighLevel webhook
- [ ] **LEAD-03**: Thank you page redirect after form submission
- [ ] **LEAD-04**: Click-to-call phone number on every page (sticky header on mobile)
- [ ] **LEAD-05**: GoHighLevel tracking phone number integration for call source attribution
- [ ] **LEAD-06**: Server-side logging for webhook submissions (lead loss prevention)

### Page Templates — Core Pages (~8)

- [ ] **CORE-01**: Homepage with hero + form, trust bar, services grid, residential/commercial split, locations grid, testimonials, FAQ
- [ ] **CORE-02**: About page with company story, values, team (placeholder content)
- [ ] **CORE-03**: Contact page with form, map embed, NAP info
- [ ] **CORE-04**: Services hub page listing all 63 services with category grouping
- [ ] **CORE-05**: Locations hub page listing all 21 Essex County cities
- [ ] **CORE-06**: HTML sitemap page (crawlable, listing all URLs by category)
- [ ] **CORE-07**: Thank you page (post-form submission confirmation)
- [ ] **CORE-08**: Privacy policy page

### Page Templates — Service Pages (63)

- [ ] **SRVC-01**: Service page template with H1 primary keyword, H2 secondary keywords, H3 long-tail/FAQ
- [ ] **SRVC-02**: 2,000+ words per service page with residential AND commercial sections
- [ ] **SRVC-03**: Lead form above the fold in hero section
- [ ] **SRVC-04**: Related services block (internal linking)
- [ ] **SRVC-05**: Service-specific FAQ section
- [ ] **SRVC-06**: Breadcrumbs (Home > Services > [Service Name])
- [ ] **SRVC-07**: All 63 services populated: repair/maintenance (10), residential roof types (8), commercial roof types (8), components/specialty (10), energy/solar (4), commercial services (5), design/consultation (3), replacement sub-pages (17 — reduced from 18, excluding duplicate)

### Page Templates — City Pages (21)

- [ ] **CITY-01**: City page template with unique city-specific content (neighborhoods, building types, weather patterns, local codes)
- [ ] **CITY-02**: 2,000+ words per city page covering both residential and commercial roofing
- [ ] **CITY-03**: Lead form above the fold
- [ ] **CITY-04**: Map embed for the city
- [ ] **CITY-05**: Nearby cities block (geographically adjacent cities)
- [ ] **CITY-06**: Services available in this city block
- [ ] **CITY-07**: Breadcrumbs (Home > Locations > [City Name])
- [ ] **CITY-08**: All 21 Essex County cities populated with unique content

### Page Templates — Service x City Combo Pages (1,323)

- [ ] **CMBO-01**: Combo page template combining service + city data
- [ ] **CMBO-02**: City data matrix providing genuinely unique content per combo (not just city name swaps)
- [ ] **CMBO-03**: Content variation engine with multiple intro structures, rotating content blocks
- [ ] **CMBO-04**: Lead form above the fold
- [ ] **CMBO-05**: Same service in nearby cities block
- [ ] **CMBO-06**: Other services in same city block
- [ ] **CMBO-07**: Breadcrumbs (Home > [Service] > [Service] in [City])
- [ ] **CMBO-08**: Flat URL structure (/roof-repair-montclair-nj)

### Page Templates — Comparison Pages (30)

- [ ] **COMP-01**: Comparison page template with side-by-side analysis
- [ ] **COMP-02**: 15 material vs material comparisons
- [ ] **COMP-03**: 5 service vs service comparisons
- [ ] **COMP-04**: 6+ decision-helper pages (best roofing for NJ weather, etc.)
- [ ] **COMP-05**: Lead form above the fold
- [ ] **COMP-06**: Comparison table/matrix with clear winner recommendations
- [ ] **COMP-07**: FAQ section with comparison-specific questions

### Page Templates — Supporting Articles (252)

- [ ] **ARTL-01**: Supporting article template (~750 words, 60%+ optimization)
- [ ] **ARTL-02**: 3 supporting articles per money page (service pages)
- [ ] **ARTL-03**: Reverse silo linking: article links back to money page + links to next supporting article
- [ ] **ARTL-04**: No outbound links from supporting articles (all equity flows to money page)
- [ ] **ARTL-05**: Content mapped to money page's keyword cluster

### SEO — Technical

- [ ] **SEOT-01**: XML sitemap auto-generated, split by page type
- [ ] **SEOT-02**: HTML sitemap (crawlable page listing all URLs)
- [ ] **SEOT-03**: robots.txt
- [ ] **SEOT-04**: Canonical tags on every page
- [ ] **SEOT-05**: Core Web Vitals optimized (LCP, FID, CLS)
- [ ] **SEOT-06**: Breadcrumbs on all pages
- [ ] **SEOT-07**: Flat URL structure (no nesting)
- [ ] **SEOT-08**: No page more than 3 clicks from homepage

### SEO — Schema Markup

- [ ] **SCHM-01**: LocalBusiness schema on homepage, contact page, city pages
- [ ] **SCHM-02**: Service schema on service pages and combo pages
- [ ] **SCHM-03**: FAQ schema on pages with FAQ sections
- [ ] **SCHM-04**: Breadcrumb schema on all pages with breadcrumbs

### SEO — Internal Linking

- [ ] **LINK-01**: Reverse silo linking per Page Optimizer Pro methodology
- [ ] **LINK-02**: Money pages link to ONE supporting article only
- [ ] **LINK-03**: Supporting articles link to next supporting article + back to money page
- [ ] **LINK-04**: Nearby cities block on city and combo pages
- [ ] **LINK-05**: Related services block on service and combo pages
- [ ] **LINK-06**: Footer mega-links (all 21 cities + major service categories)
- [ ] **LINK-07**: Contextual in-content internal links (not just nav/footer)
- [ ] **LINK-08**: No orphan pages (every page has 3+ internal links pointing to it)

### SEO — Semantic & Content

- [ ] **SEMA-01**: NLP-optimized content with related entities, synonyms, LSI keywords
- [ ] **SEMA-02**: H1: primary keyword + location (one per page)
- [ ] **SEMA-03**: H2s: secondary keywords (major sections)
- [ ] **SEMA-04**: H3s: long-tail keywords and FAQ questions
- [ ] **SEMA-05**: Full topical map with pillar pages and content clusters
- [ ] **SEMA-06**: Content variation patterns to avoid duplicate content detection
- [ ] **SEMA-07**: AI detection QA pass (ZeroGPT or similar as sanity check)

### SEO — Local

- [ ] **LOCL-01**: NAP consistency (Name, Address, Phone) across all pages
- [ ] **LOCL-02**: Map embeds on city pages and contact page
- [ ] **LOCL-03**: City-specific unique content (neighborhoods, building types, weather)
- [ ] **LOCL-04**: Google Business Profile integration readiness

### Design & UI

- [ ] **DSGN-01**: Editorial Trust design direction implemented per approved preview
- [ ] **DSGN-02**: Trust bar with text cards (licenses, insurance, years experience, BBB) — no images
- [ ] **DSGN-03**: Testimonials section with star ratings (placeholder content initially)
- [ ] **DSGN-04**: Before/after project gallery with CSS brand treatment on stock photos
- [ ] **DSGN-05**: Curated stock photos with CSS warm tone filter, grain texture, consistent cropping
- [ ] **DSGN-06**: 50/50 residential and commercial content split throughout site
- [ ] **DSGN-07**: Animations and micro-interactions using motion library
- [ ] **DSGN-08**: Rounded corners, organic shapes, grain texture per Editorial Trust aesthetic

### Content — Residential/Commercial Split

- [ ] **CONT-01**: Homepage addresses both homeowners and business owners equally
- [ ] **CONT-02**: Service pages have residential AND commercial sections
- [ ] **CONT-03**: Commercial-specific service pages (commercial install, repair, replacement, thermal imaging, infrared detection)
- [ ] **CONT-04**: City pages cover both residential and commercial roofing needs
- [ ] **CONT-05**: Different CTA language for residential vs commercial audiences

## v2 Requirements

### Enhanced Lead Capture

- **LEAD-V2-01**: Multi-step progressive form (step 1: service -> step 2: details -> step 3: contact)
- **LEAD-V2-02**: Speed-to-lead automation via GoHighLevel workflows (instant auto-response)
- **LEAD-V2-03**: Lead loss prevention with localStorage fallback

### Enhanced Trust

- **TRST-V2-01**: Review/AggregateRating schema (once real reviews exist)
- **TRST-V2-02**: Real project photography replacing stock photos
- **TRST-V2-03**: Video testimonials

### Enhanced SEO

- **SEO-V2-01**: Google Business Profile claimed and optimized
- **SEO-V2-02**: Citation building across directories
- **SEO-V2-03**: Backlink acquisition strategy

## Out of Scope

| Feature | Reason |
|---------|--------|
| Blog / content marketing | Focus on service + location + comparison + supporting articles only |
| Real project photography | Launch with curated stock + CSS treatment, replace later |
| Google Ads / PPC | Organic SEO focus only |
| Social media integration | Not needed for lead gen |
| User accounts / login | No user-facing auth needed |
| Payment processing | Leads only, no transactions |
| Mobile app | Web only |
| Multi-language support | English only |
| Online quote calculator | Expectation mismatch -- leads to bad estimates and lost trust |
| Live chat widget | Adds complexity without proven conversion benefit for roofing |
| ISR / on-demand generation | User chose full SSG with split builds |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FNDN-01 | Phase 1 | Pending |
| FNDN-02 | Phase 1 | Pending |
| FNDN-03 | Phase 1 | Pending |
| FNDN-04 | Phase 1 | Pending |
| FNDN-05 | Phase 1 | Pending |
| FNDN-06 | Phase 1 | Pending |
| FNDN-07 | Phase 1 | Pending |
| FNDN-08 | Phase 1 | Pending |
| LEAD-01 | Phase 2 | Pending |
| LEAD-02 | Phase 2 | Pending |
| LEAD-03 | Phase 2 | Pending |
| LEAD-04 | Phase 2 | Pending |
| LEAD-05 | Phase 2 | Pending |
| LEAD-06 | Phase 2 | Pending |
| CORE-01 | Phase 2 | Pending |
| CORE-02 | Phase 2 | Pending |
| CORE-03 | Phase 2 | Pending |
| CORE-04 | Phase 2 | Pending |
| CORE-05 | Phase 2 | Pending |
| CORE-06 | Phase 2 | Pending |
| CORE-07 | Phase 2 | Pending |
| CORE-08 | Phase 2 | Pending |
| SRVC-01 | Phase 3 | Pending |
| SRVC-02 | Phase 3 | Pending |
| SRVC-03 | Phase 3 | Pending |
| SRVC-04 | Phase 3 | Pending |
| SRVC-05 | Phase 3 | Pending |
| SRVC-06 | Phase 3 | Pending |
| SRVC-07 | Phase 3 | Pending |
| CONT-02 | Phase 3 | Pending |
| CONT-03 | Phase 3 | Pending |
| CONT-05 | Phase 3 | Pending |
| CITY-01 | Phase 4 | Pending |
| CITY-02 | Phase 4 | Pending |
| CITY-03 | Phase 4 | Pending |
| CITY-04 | Phase 4 | Pending |
| CITY-05 | Phase 4 | Pending |
| CITY-06 | Phase 4 | Pending |
| CITY-07 | Phase 4 | Pending |
| CITY-08 | Phase 4 | Pending |
| LOCL-01 | Phase 4 | Pending |
| LOCL-02 | Phase 4 | Pending |
| LOCL-03 | Phase 4 | Pending |
| LOCL-04 | Phase 4 | Pending |
| CONT-04 | Phase 4 | Pending |
| CMBO-01 | Phase 5 | Pending |
| CMBO-02 | Phase 5 | Pending |
| CMBO-03 | Phase 5 | Pending |
| SEMA-06 | Phase 5 | Pending |
| CMBO-04 | Phase 6 | Pending |
| CMBO-05 | Phase 6 | Pending |
| CMBO-06 | Phase 6 | Pending |
| CMBO-07 | Phase 6 | Pending |
| CMBO-08 | Phase 6 | Pending |
| LINK-01 | Phase 6 | Pending |
| LINK-02 | Phase 6 | Pending |
| LINK-03 | Phase 6 | Pending |
| LINK-04 | Phase 6 | Pending |
| LINK-05 | Phase 6 | Pending |
| LINK-06 | Phase 6 | Pending |
| LINK-07 | Phase 6 | Pending |
| LINK-08 | Phase 6 | Pending |
| COMP-01 | Phase 7 | Pending |
| COMP-02 | Phase 7 | Pending |
| COMP-03 | Phase 7 | Pending |
| COMP-04 | Phase 7 | Pending |
| COMP-05 | Phase 7 | Pending |
| COMP-06 | Phase 7 | Pending |
| COMP-07 | Phase 7 | Pending |
| ARTL-01 | Phase 7 | Pending |
| ARTL-02 | Phase 7 | Pending |
| ARTL-03 | Phase 7 | Pending |
| ARTL-04 | Phase 7 | Pending |
| ARTL-05 | Phase 7 | Pending |
| SEOT-01 | Phase 8 | Pending |
| SEOT-02 | Phase 8 | Pending |
| SEOT-03 | Phase 8 | Pending |
| SEOT-04 | Phase 8 | Pending |
| SEOT-05 | Phase 8 | Pending |
| SEOT-06 | Phase 8 | Pending |
| SEOT-07 | Phase 8 | Pending |
| SEOT-08 | Phase 8 | Pending |
| SCHM-01 | Phase 8 | Pending |
| SCHM-02 | Phase 8 | Pending |
| SCHM-03 | Phase 8 | Pending |
| SCHM-04 | Phase 8 | Pending |
| SEMA-01 | Phase 8 | Pending |
| SEMA-02 | Phase 8 | Pending |
| SEMA-03 | Phase 8 | Pending |
| SEMA-04 | Phase 8 | Pending |
| SEMA-05 | Phase 8 | Pending |
| SEMA-07 | Phase 8 | Pending |
| DSGN-01 | Phase 9 | Pending |
| DSGN-02 | Phase 9 | Pending |
| DSGN-03 | Phase 9 | Pending |
| DSGN-04 | Phase 9 | Pending |
| DSGN-05 | Phase 9 | Pending |
| DSGN-06 | Phase 9 | Pending |
| DSGN-07 | Phase 9 | Pending |
| DSGN-08 | Phase 9 | Pending |
| CONT-01 | Phase 9 | Pending |

**Coverage:**
- v1 requirements: 101 total (corrected from initial estimate of 75)
- Mapped to phases: 101
- Unmapped: 0

---
*Requirements defined: 2026-03-05*
*Last updated: 2026-03-05 after roadmap creation -- traceability complete*
