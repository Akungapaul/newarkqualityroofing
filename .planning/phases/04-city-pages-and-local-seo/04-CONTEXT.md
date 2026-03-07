# Phase 4: City Pages and Local SEO - Context

**Gathered:** 2026-03-07
**Status:** Ready for planning

<domain>
## Phase Boundary

21 unique city pages for Essex County cities with genuinely local content, map embeds, lead forms above the fold, and consistent NAP data. Each page targets local search intent with 2,500+ words of unique, city-specific content. City pages cover both residential and commercial roofing audiences with distinct sections.

</domain>

<decisions>
## Implementation Decisions

### Local Content Depth
- Deep local profiles for each city — reads like a local expert wrote it
- Unique narratives per city (not template swaps) — Newark focuses on brownstones, Montclair on Victorians, East Orange on multi-family rehabs, etc.
- Both residential AND commercial sections on every city page — always both
- Heavy use of specific local references: street names, landmarks, parks, notable buildings
- City-specific weather/microclimate content — urban heat islands for Newark, tree damage for suburban towns, etc.
- Detailed local building code and permit information woven into narrative (not standalone section)
- 2,500+ word target per city page
- Historical development context woven naturally into roofing narrative (construction eras, redevelopment waves) — not a separate history section
- City-specific testimonials following existing site-wide testimonial pattern
- Project spotlights (fictional case studies) per city — Claude decides number and residential/commercial mix per city
- City-tailored emergency/storm damage content based on each city's specific vulnerabilities (flooding zones, wind corridors, tree coverage) — integrated into content, not a separate prominent section
- Unique FAQs per city (5-8 questions about roofing in that specific city — permits, local issues, costs)
- SEO-first heading hierarchy baked in: H1 with primary keyword + location, H2s with secondary local keywords, H3s with long-tail/FAQ keywords

### Page Layout & Sections
- Hero: Bold city name headline (e.g., "Roofing Services in Montclair, NJ") with lead form above the fold
- Sticky table of contents for section navigation (given 2,500+ word length)
- Permit/code info woven into narrative, not standalone section
- Emergency/storm content integrated into narrative, not separate section
- Testimonials displayed as styled visual cards
- Project spotlights displayed as featured case study blocks — visually distinct from body text
- Residential and commercial sections visually distinguished (different background colors or card styles)
- Visual neighborhoods grid showing neighborhoods served (links to combo pages when they exist in Phase 6, no links for now)
- City-specific stats bar: "X+ Projects in [City] | Serving Since [Year] | [Rating] Rating"
- Mid-page CTA placement: Claude's discretion based on content length

### Map & Location Elements
- Google Maps iframe embed centered on each city
- Nearby cities displayed as card grid (3-5 geographically adjacent cities) with links to their city pages
- Each nearby city card shows 2-3 popular services available there
- NAP block displayed both on-page (near map) AND in footer — consistent format site-wide
- Map placement on page: Claude's discretion for best flow

### City-to-Service Linking
- Services displayed in category grid (Repair, Replacement, Commercial, etc.) with visual grouping
- Service links target combo page URLs (/service-city-nj) — Claude determines cleanest approach to avoid broken links before Phase 6
- All services presented equally across all cities — no city-weighted featuring
- "Why Choose NQR in [City]" approach: Claude's discretion

### SEO Approach
- SEO-optimized heading hierarchy built into templates from the start
- H1: "Roofing Services in [City], NJ" pattern
- H2s: Local secondary keywords (residential/commercial sections, neighborhoods, weather challenges)
- H3s: Long-tail and FAQ keywords
- Deep local content creates naturally unique, geo-targeted pages
- Phase 8 will add structured data markup (LocalBusiness schema, etc.) and fine-tune

### Claude's Discretion
- Overall page layout structure (whether to mirror service pages or create distinct city layout)
- Content section ordering for maximum engagement and SEO value
- Breadcrumb format (Home > Locations > City vs Home > City, NJ)
- Map embed placement on page
- Mid-page CTA inclusion based on content length
- Zip code placement for SEO effectiveness
- "Why Choose NQR in [City]" section approach
- Demographic/economic context inclusion where it strengthens the narrative
- Number and mix of project spotlights per city
- Combo page link handling before Phase 6 exists

</decisions>

<specifics>
## Specific Ideas

- Each city should feel like someone who actually works in that city wrote it — heavy local references, not generic
- Project spotlights should be compelling case studies like "Victorian restoration in Montclair" — fictional but realistic
- Testimonials follow the same pattern as existing site-wide testimonials (see testimonials.ts data file)
- Stats bar pattern: "150+ Projects in Montclair | Serving Since 2015 | 4.9 Rating"
- Neighborhoods grid should be visual and eventually link to combo pages (Phase 6)
- Nearby cities cards should show top services to encourage cross-city navigation

</specifics>

<deferred>
## Deferred Ideas

- Schema markup (LocalBusiness, FAQ, Breadcrumb) — Phase 8: SEO Infrastructure
- XML sitemaps and technical SEO — Phase 8
- Combo page generation — Phase 6: Programmatic Scale
- Content differentiation engine for combo pages — Phase 5

</deferred>

---

*Phase: 04-city-pages-and-local-seo*
*Context gathered: 2026-03-07*
