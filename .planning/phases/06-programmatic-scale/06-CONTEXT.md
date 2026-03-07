# Phase 6: Programmatic Scale - Context

**Gathered:** 2026-03-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Render all 1,365 service-x-city combo pages with a ComboTemplate component, wire up reverse silo internal linking engine, and ensure full site navigation with zero orphan pages. Content for all combos is hand-written. Template and linking infrastructure is built first, then content is populated city by city.

</domain>

<decisions>
## Implementation Decisions

### Combo page layout
- Distinct hybrid layout — blends service page structure with city-colored sections (not a copy of either template)
- Sticky sidebar with form + quick links stays visible as user scrolls content
- Content sections: Overview + Challenges, Process Steps, FAQs, Related Links Block (all four required)
- Flat URLs matching existing slug registry: /roof-repair-newark-nj pattern
- Target 2,000+ words per combo page, matching service page standard

### Combo page hero
- Claude's discretion on hero format — recommend split hero (headline + trust signals left, form right) based on conversion patterns from service pages

### Content generation approach
- All 1,365 combos hand-written (no templates, no AI generation)
- Batched by city: write all 65 services for one city before moving to next
- Expand existing 5-sample cities (Montclair, Bloomfield, East Orange, Caldwell, Millburn) to full 63 first, then new cities
- New cities ordered by population/traffic priority (largest first)
- Strict voice consistency: each city's 63 combos must match the voice/vocabulary/lens established in their city page content (Phase 4)
- For cities with existing 5 samples, remaining 58 must strictly match that established voice
- New cities derive voice from their Phase 4 city page content
- One file per combo (1,365 .ts files total), matching current pattern
- Per-city batch similarity validation after each city's 63 combos are written

### Sequencing
- Template first: build ComboTemplate + linking engine before populating content
- Deploy all at once when all 1,365 combos are complete (not incrementally)

### Internal linking strategy
- Nearby city links use ALL THREE formats: card grid in main content, inline text links within content paragraphs, and sidebar section under "Nearby" heading
- Orphan page audit script required: crawls all internal links, flags pages with < 3 inbound links
- CityServicesGrid link update (Phase 4 TODO) — Claude decides timing

### Claude's Discretion
- Breadcrumb structure (Home > Service > City vs Home > City > Service vs flat)
- Mid-content CTA placement (between sections vs top/bottom only)
- Trust bar inclusion below hero
- Testimonial/social proof section inclusion
- Visual differentiation between city-specific and service sections (background shifts, accent borders, etc.)
- Service category badge in hero
- "Other services in this city" link format (categorized list vs top picks vs full grid)
- Article link section pre-wiring vs deferring to Phase 7
- Footer mega-link updates
- Parent page linking (both parents vs service only)
- Nearby city link count (3-5 nearest vs all adjacent)
- Internal linking engine approach (computed from registry vs explicit link maps)
- Build monitoring/verification tooling
- Image strategy (text-only vs hero images, given Phase 9 photo asset concern)
- TypeScript compile time optimization if needed
- Combo content schema expansion if content needs require it

</decisions>

<specifics>
## Specific Ideas

- Combo pages should feel like a distinct third template type — not a watered-down service page or a service-flavored city page, but a genuine hybrid that earns its own identity
- The 90 existing hand-written combos (Phase 5) set the quality bar — all 1,275 remaining must match that standard
- Each city's voice is deeply rooted in its Phase 4 city page content: Millburn uses estate/luxury language, East Orange uses landlord/investor voice, Caldwell uses small-town trust, etc.
- Vercel Pro tier available — no build time concerns for full SSG of ~2,800+ pages

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 06-programmatic-scale*
*Context gathered: 2026-03-07*
