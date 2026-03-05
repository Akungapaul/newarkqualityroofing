# Newark Quality Roofing

## What This Is

A conversion-first roofing lead generation website for newarkqualityroofing.com targeting Newark, NJ and all Essex County cities. The site captures leads (form submissions + phone calls) to sell to local roofing contractors, with the goal of eventually partnering with them. Modeled after huntingtonbeacheliteroofing.com's structure but tailored to Essex County, NJ with a full programmatic SEO strategy generating ~1,689 pages.

## Core Value

Every page converts visitors into roofing leads through above-the-fold forms and click-to-call — the entire site architecture, content, and design exists to generate phone calls and form submissions.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Design & Frontend**
- [ ] Editorial Trust design direction (forest green #1A3A2A, copper #C17F4E, parchment #F5F0E8)
- [ ] Cormorant font for headings, Cormorant Garamond for body text
- [ ] Lead capture form above the fold on EVERY page
- [ ] Click-to-call phone number on every page
- [ ] Mobile-responsive, conversion-optimized layout
- [ ] Curated stock photos with CSS brand treatment (warm tone filter, grain, consistent cropping)
- [ ] Must use Frontend Design Skill for all UI work

**Tech Stack**
- [ ] Next.js with Static Site Generation (SSG)
- [ ] Tailwind CSS
- [ ] Vercel hosting
- [ ] GoHighLevel CRM integration (form submissions + phone tracking)

**Page Types & Structure**
- [ ] Homepage with hero + form, trust bar, services grid, residential/commercial split, locations grid, testimonials, FAQ
- [ ] 63 service pages (repair, replacement, roof types, components, specialty, commercial, energy/solar)
- [ ] 21 city pages (all Essex County cities)
- [ ] 1,323 service x city combo pages (63 services x 21 cities, programmatic)
- [ ] 30 comparison pages (material vs material, service vs service, decision-helper)
- [ ] 252 supporting articles (3 per money page, reverse silo method)
- [ ] About page
- [ ] Contact page
- [ ] Locations hub page
- [ ] Services hub page
- [ ] HTML sitemap page (crawlable)
- [ ] Thank you page (post-form submission)
- [ ] Privacy policy page

**SEO — Topical Map & Authority**
- [ ] Full topical map with pillar pages and content clusters
- [ ] Reverse silo internal linking (per Page Optimizer Pro methodology)
- [ ] Each money page has 3+ supporting articles linking back to it
- [ ] Supporting articles link to next supporting article + back to money page
- [ ] Money pages link to ONE supporting article only
- [ ] No outbound links from supporting articles (all equity flows to money page)
- [ ] Contextual in-content internal links (not just nav/footer)

**SEO — Technical**
- [ ] XML sitemap (auto-generated, split by page type)
- [ ] HTML sitemap (crawlable page listing all URLs)
- [ ] robots.txt
- [ ] Canonical tags on every page
- [ ] Core Web Vitals optimized (LCP, FID, CLS)
- [ ] Breadcrumbs on all pages (Home > Service > Service in City)
- [ ] Flat URL structure (no nesting: /roof-repair-montclair-nj)
- [ ] No page more than 3 clicks from homepage

**SEO — Local**
- [ ] Google Business Profile integration readiness
- [ ] NAP consistency (Name, Address, Phone) across all pages
- [ ] Map embeds on city pages and contact page
- [ ] Local content on city pages (neighborhoods, building types, weather patterns)

**SEO — Schema Markup**
- [ ] LocalBusiness schema (business info, service area)
- [ ] Service schema on every service page
- [ ] FAQ schema on every page with FAQ sections
- [ ] Review/AggregateRating schema
- [ ] Breadcrumb schema

**SEO — Semantic & Content**
- [ ] NLP-optimized content with related entities, synonyms, LSI keywords
- [ ] Full semantic coverage per page (primary, secondary, long-tail keywords mapped to H-tags)
- [ ] H1: primary keyword + location (one per page)
- [ ] H2s: secondary keywords (major sections)
- [ ] H3s: long-tail keywords and FAQ questions
- [ ] 2000+ words on money pages, ~750 words on supporting articles
- [ ] City-specific unique content (not just city name swapped)
- [ ] Content variation patterns (multiple intro structures, rotating content blocks)
- [ ] AI detection QA pass (ZeroGPT or similar as sanity check)

**SEO — Internal Linking**
- [ ] Nearby cities block on every city page (geographically adjacent)
- [ ] Related services block on every service page
- [ ] Same service nearby cities block on combo pages
- [ ] Other services same city block on combo pages
- [ ] Footer mega-links (all cities + all major service categories)
- [ ] No orphan pages (every page has 3+ internal links pointing to it)

**Lead Capture & CRM**
- [ ] Lead form: first name, last name, phone, email, service needed (dropdown), project details (textarea)
- [ ] Form submits to GoHighLevel CRM via webhook/API
- [ ] Click-to-call tracking
- [ ] Thank you page redirect after submission
- [ ] Form on every page (above the fold in hero section)

**Content — 50/50 Residential/Commercial Split**
- [ ] Equal weight to residential and commercial roofing content
- [ ] Homepage addresses both homeowners and business owners
- [ ] Service pages have residential AND commercial sections
- [ ] Commercial-specific service pages (commercial install, repair, replacement)
- [ ] City pages cover both residential and commercial roofing needs

### Out of Scope

- Blog / content marketing — focus purely on service + location + comparison pages
- Real project photography — launch with curated stock, replace later
- Google Ads / PPC — organic SEO focus only
- Social media integration — not needed for lead gen
- User accounts / login — no user-facing auth needed
- Payment processing — leads only, no transactions
- Mobile app — web only
- Multi-language support — English only

## Context

**Reference Site:** huntingtonbeacheliteroofing.com — exact structure replicated for Essex County
- 43+ service pages, 40+ location pages, service/subcity templates
- Built on DudaOne platform, we're upgrading to Next.js for performance + programmatic SEO

**Business Model:** Lead generation → sell leads to local Newark/Essex County roofing contractors → eventually partner with them

**Target Market:** Homeowners (50%) and commercial property owners/managers (50%) in Essex County, NJ who need roofing services

**Essex County Cities (21):**
Newark, East Orange, Orange, West Orange, Montclair, Bloomfield, Belleville, Nutley, Irvington, Maplewood, South Orange, Livingston, Millburn, Cedar Grove, Verona, Glen Ridge, Caldwell, Essex Fells, Fairfield, North Caldwell, Roseland

**Service Pages (63):**

Repair & Maintenance:
- Roof Repair, Roof Replacement, Emergency Roof Repair, Roof Inspection, Roof Maintenance Programs, Roof Leak Repair, Storm Damage Roof Repair, Hail Damage Roof Repair, Wind Damage Roof Repair, Roof Cleaning and Moss Removal

Residential Roof Types:
- Asphalt Shingle Roofing, Slate Roof Installation and Repair, Wood Shake Roofing, Metal Roof Installation and Repair, Flat Roof Installation and Repair, Tile Roof Installation and Repair, Cedar Shake Roofing, Rubber Roofing EPDM

Commercial Roof Types:
- TPO Roofing Installation, EPDM Commercial Roofing, Modified Bitumen Roofing, Built-Up Roofing, Commercial Metal Roofing, PVC Roofing, Green Roof Installation, Spray Foam Roofing

Components & Specialty:
- Roof Flashing Installation Repair, Chimney Flashing Repair, Gutter Installation Repair, Gutter Guard Installation, Skylight Installation Repair, Fascia Installation Repair, Soffit Installation Repair, Roof Vent Installation Repair, Roof Waterproofing, Roof Deck Repair and Replacement

Energy & Solar:
- Solar Panel Roofing Installation, Solar Shingle Installation, Energy Efficient Roofing Solutions, Silicone Roof Coating

Commercial Services:
- Commercial Roof Installation, Commercial Roof Repair, Commercial Roof Replacement, Roof Thermal Imaging Inspections, Infrared Roof Leak Detection

Design & Consultation:
- Custom Roof Design and Consultation, Historic Roof Restoration, Roof Ice Dam Prevention

Replacement Sub-Pages:
- Full Roof Tear Off, Roof Overlay Installation, Re-Roofing, Insurance Roof Replacement, Storm Damage Roof Replacement, Aging Roof Replacement, Roof Replacement After Leak, Fire Damage Roof Replacement, Roof Replacement Cost, Asphalt Shingle Roof Replacement, Metal Roof Replacement, Slate Roof Replacement, Tile Roof Replacement, Flat Roof Replacement, Cedar Shake Roof Replacement, TPO Roof Replacement, EPDM Roof Replacement

**Comparison Pages (30):**

Material vs Material:
- Asphalt Shingles vs Metal Roofing, Slate vs Tile Roofing, TPO vs EPDM Roofing, Metal vs Tile Roofing, Asphalt vs Slate Roofing, Wood Shake vs Asphalt Shingles, PVC vs TPO Roofing, Standing Seam vs Corrugated Metal, Modified Bitumen vs TPO, Rubber Roofing vs TPO, Cedar Shake vs Wood Shingle, Built-Up Roofing vs Modified Bitumen, Spray Foam vs TPO, Green Roof vs Traditional Roofing, Solar Shingles vs Solar Panels

Service vs Service:
- Roof Repair vs Replacement, Roof Coating vs Replacement, Roof Overlay vs Tear Off, Patching vs Full Roof Repair, Preventive Maintenance vs Emergency Repair

Decision-Helper:
- Best Roofing Material for NJ Weather, Best Commercial Roofing Material, Best Roofing for Flat Roofs, Best Roofing for Historic Homes NJ, Cheapest vs Most Durable Roofing, Most Energy Efficient Roofing Materials

Plus 4 more to reach 30 (to be determined during content planning)

**Page Count Summary:**
| Type | Count |
|------|-------|
| Service pages | 63 |
| City pages | 21 |
| Service x City combos | 1,323 |
| Comparison pages | 30 |
| Supporting articles | 252 |
| Core pages (home, about, contact, etc.) | ~8 |
| **Total** | **~1,697** |

## Constraints

- **Tech Stack**: Next.js + Tailwind CSS + Vercel — non-negotiable per user decision
- **Design**: Editorial Trust direction with Cormorant/Cormorant Garamond fonts — locked in
- **CRM**: GoHighLevel — form submissions and phone tracking must integrate
- **Content Quality**: Must pass AI detection QA (ZeroGPT) — no thin or obviously AI-generated content
- **SEO Method**: Reverse silo per Page Optimizer Pro methodology
- **Budget**: $0 for images (curated stock with CSS treatment)
- **Content**: Placeholders for business details (phone, address, about text) — user provides later
- **Target Split**: 50/50 residential and commercial roofing content

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Editorial Trust design (forest green/copper/parchment) | Stands out from generic contractor sites, builds trust, warm and approachable for lead gen | — Pending |
| Cormorant + Cormorant Garamond fonts | User preference, distinctive serif pairing that elevates the brand | — Pending |
| Next.js SSG on Vercel | Best for programmatic SEO at scale, fast page loads, excellent Core Web Vitals | — Pending |
| All 900+ combo pages at launch | Full topical authority from day one, programmatic generation means same engineering effort | — Pending |
| Reverse silo method (POP) | Proven internal linking strategy for authority flow to money pages | — Pending |
| 50/50 residential/commercial | Newark has enough commercial density, commercial leads worth more | — Pending |
| Full 18 replacement sub-pages | Roof replacement is highest-value lead category, granular pages capture specific intent | — Pending |
| Curated stock + CSS treatment | $0 cost, real photos more trustworthy than AI, brand-consistent via CSS filters | — Pending |
| No blog for v1 | Focus effort on money pages and supporting articles, blog adds volume without direct lead gen value | — Pending |
| All schema types | LocalBusiness + Service + FAQ + Review for maximum rich result coverage | — Pending |
| Flat URL structure | SEO-friendly, keeps pages close to root, max 3 clicks from homepage | — Pending |

---
*Last updated: 2026-03-05 after initialization*