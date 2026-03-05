# Phase 2: Lead Capture and Core Pages - Context

**Gathered:** 2026-03-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Visitors can submit leads from any page and reach a human via click-to-call, with all core informational pages live. This phase delivers: lead form component, GoHighLevel integration, click-to-call, and 8 core pages (homepage, about, contact, services hub, locations hub, HTML sitemap, thank you, privacy).

</domain>

<decisions>
## Implementation Decisions

### Lead Form Fields & Structure
- 4 fields: Name, Email, Phone, Service Needed
- Service needed as a dropdown (Claude's discretion on whether categories-only, all 63, or cascading)
- Headline above form with value proposition: "Get Your Free Roofing Estimate" or similar offer-oriented CTA
- Submit button with specific action text: "Get My Free Estimate" (not generic "Submit")
- No trust indicators near the form — keep it clean; trust signals live elsewhere on the page
- Single form placement: hero only (no mid-page or bottom repeats)

### Lead Form Behavior
- GoHighLevel webhook integration — API key/webhook URL is available (use env variable for the URL)
- Server-side API route proxying to GoHighLevel with fallback logging (per roadmap requirement)

### Phone & Click-to-Call
- Tracking number from GoHighLevel (not direct business line)
- Phone number displayed on both desktop and mobile
- Display format: phone icon + full number displayed (transparent, trustworthy)
- Phone number placeholder for now — actual tracking number provided later via env variable

### Hero Section
- Full-bleed roofing hero image with lead form overlaid — dramatic, conversion-focused
- Form positioned over/alongside the hero image above the fold

### Trust Bar
- Credentials + stats format: "500+ Roofs Completed / Licensed / Insured / 5-Star Rated / BBB Accredited"
- Use reasonable placeholder numbers that can be updated later

### Services Display (Homepage)
- Photo cards with actual roofing imagery per service category
- Links to individual service pages

### Testimonials (Homepage)
- Card carousel with star ratings — rotating testimonial cards
- Placeholder testimonials for now, to be swapped with real reviews later

### FAQ Section (Homepage)
- Collapsible accordions — click to expand each Q&A

### About Page
- Professional credentials + community-focused tone (combined approach)
- Certifications, team expertise, insurance alongside local roots and community involvement

### Contact Page
- Google Maps embed showing business location
- Lead form + phone number + business address
- Placeholder address for now — actual address provided later

### Services Hub Page
- Residential vs Commercial split as two main sections
- Under each split, services grouped by category (Repair, Replacement, Commercial, etc.)

### Thank You Page
- Next steps + timeline: "We'll call you within 24 hours" + what to expect
- Reduces post-submission anxiety

### Placeholder Data Strategy
- Testimonials: realistic placeholders, swappable later
- Trust stats: reasonable industry-typical numbers, updatable
- Phone number: placeholder via env variable
- Business address: placeholder via data, actual address provided later

### Claude's Discretion
- Form flow: single-step vs multi-step (given 4 fields)
- Context-aware form pre-filling (service type on service pages, city on city pages)
- Post-submission behavior (redirect to thank-you vs inline success)
- Form validation UX (inline per-field vs summary)
- Lead loss prevention backup strategy (email backup vs server logs only)
- Mobile phone placement (sticky bottom bar, header, or floating button)
- Business hours display near phone number
- Emergency/urgent roofing callout treatment
- Homepage section ordering for optimal conversion flow
- Residential/commercial content balance approach on homepage
- Locations grid display on homepage
- Locations Hub page layout
- Privacy policy approach (template vs custom)

</decisions>

<specifics>
## Specific Ideas

- Hero should feel dramatic and conversion-focused — full-bleed photo with form overlaid, not a split layout
- Services on homepage use photo cards (not icon cards) for a more realistic, premium feel
- About page should blend professional credentials with community roots — "your neighbors trust us" meets "certified and insured"
- Services hub has a clear residential/commercial split first, then category grouping within each — mirrors how customers think about their needs
- Thank-you page should set expectations: timeline for callback, what the process looks like next

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 02-lead-capture-core-pages*
*Context gathered: 2026-03-05*
