# Phase 5: Content Differentiation Engine - Context

**Gathered:** 2026-03-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Build a content variation system that produces genuinely unique combo page content (65 services x 21 cities = 1,323 pages) passing <70% cross-page similarity. This phase delivers the content engine and validated content data -- not the combo page template or internal linking (those are Phase 6).

</domain>

<decisions>
## Implementation Decisions

### Variation Strategy
- City-context driven approach: intro content is dynamically composed based on city attributes (urban vs suburban, housing stock, weather), not fixed rotating templates
- All content blocks vary between combo pages: problem/challenge section, social proof/examples, process/approach details, and FAQ variations
- Content should read as natural prose -- each page should feel written by a local expert with flowing paragraphs, no visible template structure
- Mix approach allowed: some sections (intro, challenges) flow as prose; others (process, FAQ) can be structured with headings

### City Data Injection
- All four data dimensions drive differentiation: housing stock & building types, neighborhoods & areas, weather & geography, local codes & permits
- Neighborhood-level references required: name-drop specific neighborhoods for hyperlocal feel (e.g., "In Newark's Ironbound district, clay tile roofs...")
- Challenge coverage: lead with the #1 roofing challenge for that service+city combo, then cover 2-3 additional relevant challenges weighted by relevance
- Pricing language: subtle market-tier implications through housing stock and neighborhood context, not explicit price tier language
- Local market references included: reference local roofing market conditions (e.g., "In Montclair's competitive renovation market...")
- Historic preservation: always flag historic district requirements for cities with historic districts (Glen Ridge, Montclair) on all relevant services
- Seasonal patterns: include city-specific seasonal roofing data (storm damage peaks, winter prep timing, etc.)
- Residential/commercial balance: every combo page covers both audiences regardless of city character
- Audience matching: even residential-only services get a brief commercial mention and vice versa

### Content Structure per Combo Page
- Word count: 1,500-2,000 words per combo page
- Required sections: Hero + lead form, city-specific service overview, local process/what to expect, FAQ section (3-5 city-specific FAQs)
- Layout: sidebar layout matching service pages (sticky sidebar with ToC, lead form, phone CTA)
- Hero: match service page hero style (split hero with embedded form)
- Related combos: both directions -- "Also in [City]: [other services]" AND "[Service] in nearby cities"
- H1 pattern: strict "[Service] in [City], NJ" format
- Meta descriptions: fully unique per combo page, service-focused with city name (not neighborhood-level detail in metas)
- Schema markup: defer to Phase 8 or Claude's discretion on phase boundary

### Claude's Discretion
- Build-time generation vs pre-authored content files -- choose best approach for 1,323 page scale
- Data source architecture: reuse existing CityContent objects vs separate city data matrix
- City grouping strategy beyond existing 5 regional groups
- Usage tracking across combos (whether to track which data points have been used per city)
- "Why Choose Us" section: include as dedicated section or weave into overview
- Trust/social proof elements on combo pages
- Parent linking strategy (breadcrumbs and/or explicit links to service + city pages)
- Related combos data production: Phase 5 vs Phase 6 responsibility
- Similarity validation script type (standalone CLI vs build-integrated)
- Sample batch selection strategy for the 50-page validation
- Validation report format
- Tiered vs flat similarity thresholds

</decisions>

<specifics>
## Specific Ideas

- Content should feel like it was written by a local roofing expert who knows each neighborhood -- not algorithmically generated
- Existing Phase 4 city content already has rich neighborhood, building type, weather, and code data that can inform the engine
- Phase 4 regional groupings (Urban Core, First Suburbs, West Essex, Caldwells-Roseland, Affluent Suburban) capture meaningful city differences
- West Essex cities have elevation/geography data (valley, mid-slope, ridge zones for West Orange; architectural periods for Montclair)
- Affluent suburban content uses estate/luxury language (Millburn) and professional suburban voice (Livingston)
- Caldwell/Essex Fells content uses premium/estate language with architect collaboration focus
- Service content (Phase 3) already has residential/commercial flags and category organization

</specifics>

<deferred>
## Deferred Ideas

None -- discussion stayed within phase scope

</deferred>

---

*Phase: 05-content-differentiation-engine*
*Context gathered: 2026-03-07*
