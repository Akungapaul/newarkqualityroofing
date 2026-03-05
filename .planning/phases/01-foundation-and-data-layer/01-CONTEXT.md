# Phase 1: Foundation and Data Layer - Context

**Gathered:** 2026-03-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Next.js project setup, design system tokens (Cormorant fonts, forest green/copper/parchment palette), Zod data schemas for all services/cities/combos, slug registry with collision detection, and catch-all route dispatcher. The project builds, deploys to Vercel, and serves all ~1,697 URLs through the correct template type.

</domain>

<decisions>
## Implementation Decisions

### Header & Navigation
- Sticky header on all devices, always visible on scroll
- Expanded navigation: Services dropdown, Locations dropdown, About, Contact
- Services dropdown displays services organized by category groups (Repair, Installation, etc. with services nested under each)
- Prominent "Get Free Estimate" CTA button always visible in header
- Mobile menu style: Claude's discretion

### Footer Structure
- Mega-footer listing all 21 Essex County cities and major service categories (SEO internal linking value)
- Full NAP (Name, Address, Phone) plus a mini lead form in the footer
- Trust signals placement in footer: Claude's discretion
- Social media links: Claude's discretion

### Color Palette
- Forest green, copper, and parchment as the three-color system (from PROJECT.md)
- No dark mode -- single light theme only
- Exact hex values: Claude's discretion
- Role assignments (primary/accent/background): Claude's discretion
- Section contrast approach: Claude's discretion
- Copper treatment (flat vs gradient): Claude's discretion
- Text color on dark backgrounds: Claude's discretion

### Service Categorization
- Parent-child hierarchy for services (e.g., "Roof Replacement" parent with "Asphalt Shingle Replacement" child)
- Claude derives the 63 service list from huntingtonbeacheliteroofing.com's service structure, adapted for Newark/Essex County
- Service grouping logic, residential/commercial tagging, and slug format: Claude's discretion
- Whether to pre-define comparison/article schemas in Phase 1: Claude's discretion

### City Data
- Claude compiles the 21 Essex County municipalities
- Newark is the HQ/primary city -- gets priority treatment in content and NAP
- Business name: Newark Quality Roofing (address and phone TBD from user)

### Claude's Discretion
- Mobile menu pattern (full-screen overlay vs slide-in drawer)
- Footer trust signals and social links placement
- All color palette specifics (hex values, roles, contrast, copper treatment, text on dark)
- Service grouping/tagging approach and URL format
- When to introduce parent-child hierarchy in data schemas
- Whether comparison/article Zod schemas belong in Phase 1

</decisions>

<specifics>
## Specific Ideas

- **Content/structure benchmark:** huntingtonbeacheliteroofing.com -- mirror their services, other services, and locations structure (NOT their design). Their service categories, names, and residential/commercial organization are the starting blueprint adapted for Essex County/NJ.
- **Design direction:** Handled by Frontend Design Skill -- Editorial Trust aesthetic (Cormorant headings, Cormorant Garamond body, grain texture, rounded corners, organic shapes). Design is entirely independent from the benchmark site.
- **Typography:** Cormorant for headings, Cormorant Garamond for body text (locked in PROJECT.md success criteria)

</specifics>

<deferred>
## Deferred Ideas

None -- discussion stayed within phase scope

</deferred>

---

*Phase: 01-foundation-and-data-layer*
*Context gathered: 2026-03-05*
