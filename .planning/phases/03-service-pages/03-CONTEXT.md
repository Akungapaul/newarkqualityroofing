# Phase 3: Service Pages - Context

**Gathered:** 2026-03-06
**Status:** Ready for planning

<domain>
## Phase Boundary

All 63 service pages live with full-length content (2,000+ words) covering both residential and commercial audiences. Each page has a lead form above the fold, breadcrumbs, related services linking, and keyword-optimized heading hierarchy. Replacement sub-pages (17) are included. City pages, combo pages, and comparison pages are separate phases.

</domain>

<decisions>
## Implementation Decisions

### Page Layout & Hero
- Split hero: service content left (H1, 3 scannable benefit bullets, click-to-call) + lead form right, above the fold on EVERY service page
- Breadcrumbs above hero: Home > Services > [Service Name]
- Below hero: content area uses ~65% width on desktop with sticky sidebar form that follows scroll
- Mobile: form in hero only + floating CTA button at bottom of viewport
- Final CTA banner with inline form repeats at the very bottom of the page
- Reference site (Huntington Beach Elite Roofing) has form ONLY on homepage -- we exceed by putting form on every service page with sticky sidebar

### Content Structure (Problem-Solution-Process Flow)
- Section order for each service page:
  1. Hero (H1 + form, split layout)
  2. Service overview (2-3 paragraphs, what this service is and why it matters)
  3. Signs You Need [Service] (scannable bullet list of symptoms/triggers)
  4. Our [Service] Approach (what we do differently, materials, techniques)
  5. For Homeowners (residential section -- protect your family, materials, timeline, financing)
  6. For Business Owners (commercial section -- minimize downtime, code compliance, scale, warranties)
  7. Our Process (numbered steps from inspection to completion)
  8. FAQ accordion (4-6 service-specific questions)
  9. Related Services block (3-4 same-category services as cards)
  10. Final CTA banner + form
- Each section uses proper H2/H3 keyword hierarchy for SEO
- Content addresses pain points BEFORE pitching solutions (problem-solution pattern)

### Residential vs Commercial Sections
- Clearly labeled, visually distinct H2 sections: "For Homeowners" and "For Business Owners"
- Residential language: protect your family, curb appeal, material options, timeline expectations
- Commercial language: ROI, code compliance, minimal disruption, warranty terms, scale
- Each section has its own CTA button with audience-appropriate label ("Get Home Estimate" / "Get Commercial Quote")
- For the 5 dedicated commercial services (commercial install, commercial repair, commercial replacement, thermal imaging, infrared detection): same ServiceTemplate but content leads with commercial section FIRST, residential second. B2B language throughout hero and overview.

### Related Services Block
- Show 3-4 other services from the same category as clickable cards
- Category-based logic: e.g., on "Roof Leak Repair" show other Repair & Maintenance services
- Card format: service name + brief description + "Learn More" link
- Keeps users within their intent/need cluster

### Claude's Discretion
- Exact hero background treatment and visual styling
- Sticky sidebar form behavior (when to unstick at bottom, offset from header)
- Loading skeleton and transition patterns
- Service overview paragraph content and tone calibration
- FAQ question selection per service
- Mobile floating CTA button design and placement
- Spacing, typography scale, and section divider styling
- Image placeholder strategy (no real photos yet -- Phase 9 handles gallery)

</decisions>

<specifics>
## Specific Ideas

- Reference site: huntingtonbeacheliteroofing.com -- analyzed for best practices. Key takeaway: their service pages lack above-the-fold forms and have no sticky form, no residential/commercial separation, and use generic alternating image/text blocks. We exceed on all fronts.
- Service pages should feel authoritative and content-rich, not like thin landing pages
- The split hero pattern matches what's already working on the homepage (hero + form), creating visual consistency across the site
- Content should be genuinely useful (symptoms, process steps, material comparisons) not just keyword-stuffed filler

</specifics>

<deferred>
## Deferred Ideas

None -- discussion stayed within phase scope

</deferred>

---

*Phase: 03-service-pages*
*Context gathered: 2026-03-06*
