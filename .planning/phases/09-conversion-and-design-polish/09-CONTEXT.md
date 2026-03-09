# Phase 9: Conversion and Design Polish - Context

**Gathered:** 2026-03-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Elevate the existing site to match the Editorial Trust design preview with polished visuals, CSS photo treatment, animations, trust signals, and balanced residential/commercial messaging. All components and templates already exist — this phase refines their visual quality, adds motion, and ensures 50/50 audience balance across the homepage.

</domain>

<decisions>
## Implementation Decisions

### Photo Treatment & CSS Brand Filter
- Warm tone + grain CSS treatment applied to ALL stock photos site-wide
- Treatment stack: warm color overlay (mix-blend-mode: multiply, copper/forest gradient), grain texture (SVG noise at 3-5% opacity), slight desaturation (filter: saturate(0.85))
- Excluded from treatment: badge/logo images, map embeds, icons/SVGs
- Consistent cropping ratios by context: hero 16:9, content 4:3, gallery B/A 3:2, cards/thumbnails 1:1, team photos 3:4
- Next.js Image component handles format optimization automatically (WebP/AVIF)
- Create a shared CSS utility class for the treatment to apply consistently

### Before/After Gallery
- Slider comparison format (interactive drag handle revealing before/after)
- Homepage only — positioned between ResidentialCommercial and TestimonialCarousel sections
- 4 projects: 2 residential + 2 commercial, alternating order
- Projects: residential shingle repair, commercial flat roof install, residential full replacement, commercial TPO membrane
- Each slider has caption: location, service type
- Stock photos with CSS brand treatment on both before and after sides

### Image SEO
- Keyword-rich descriptive alt text: service + location keywords naturally integrated
- Example: "Residential roof repair completed in Newark NJ by licensed contractor"
- File names already follow kebab-case descriptive pattern — maintain this
- Explicit width/height on all Next.js Image components
- loading="lazy" for all below-fold images
- ImageObject JSON-LD schema on before/after gallery items for Google Images visibility

### Animation Choreography
- Library: Motion (framer-motion) — `motion/react` import pattern
- Overall intensity: refined and subtle (not dramatic or minimal)
- Scope: all page types (homepage, service, city, combo, article, comparison)
- Shared `AnimateIn` wrapper component — wrap once, works everywhere
- Section animations: fade-in + translateY(20px), 600ms ease-out
- Card grids: stagger 100ms between items, fade + slight scale(0.97→1)
- Buttons: scale(1.02) on hover, background-color transition 200ms
- Images: subtle parallax on scroll (5-10px movement)
- Stats: count-up animation on viewport entry, ~1.5s with easeOut, trigger once
- All animations honor prefers-reduced-motion

### Hero Entrance
- Orchestrated stagger on page load (homepage and template heroes):
  - t=0ms: background renders
  - t=200ms: eyebrow fades in
  - t=400ms: headline slides up + fades
  - t=600ms: subtitle fades in
  - t=800ms: phone/CTA fades in
  - t=400ms: form card slides in from right
- No layout shift — content space reserved before animation
- Total orchestration: ~1 second

### Header Scroll Behavior
- Shrink + shadow on scroll: header reduces from 80px to 64px height
- Background gains backdrop-blur and shadow-lg
- Background opacity shifts to forest/95 (slight transparency)
- Smooth CSS transition between states

### Floating CTA Button
- Slides up from bottom edge when user scrolls past hero fold
- translateY(100%) → 0, 300ms ease-out
- Mobile: full-width bottom bar
- Desktop: fixed bottom-right pill

### Trust Bar Redesign
- Text-only, NO badge images (remove GAF, BBB, HomeAdvisor images)
- Icon + stat cards on parchment-dark background
- Custom SVG icons in copper color (shield, certificate, clock, checkmark)
- Numbers in forest, bold heading font; labels in text-secondary, body font
- Count-up animation on scroll (numbers animate 0 → value)
- Placement: homepage + service pages + city pages (NOT combo/article/comparison)

### Testimonial Enhancements
- Homepage: full carousel with NEW aggregate rating header ("4.9 out of 5 — based on 200+ reviews") above the cards
- Individual cards keep per-card star ratings
- Review platform links REMOVED (no Google, HomeAdvisor, BBB outbound links — keep equity internal)
- Inner pages (service, city): compact variant — 1-2 relevant testimonials inline, no carousel
- Dot indicators remain on homepage carousel

### Residential/Commercial Balance (CONT-01)
- Hero headline changed to unified "Residential & Commercial Roofing in Newark NJ" (currently residential-leaning)
- Hero uses one unified stock photo (team at work), no split image
- HomeResidentialCommercial redesigned as true 50/50 side-by-side split: left residential (warm photo, homeowner CTA), right commercial (professional photo, business CTA). Stacks vertically on mobile.
- Services grid shows equal mix: 4 residential + 4 commercial service cards (or 3+3 with View All CTA)
- Lead form dropdown already has optgroups — verify commercial categories are equally prominent
- Footer restructured: separate "Services (Residential)" and "Services (Commercial)" columns
- Before/after gallery: 2 residential + 2 commercial projects, alternating
- Commercial service pages get subtle "Commercial" badge pill on hero (rounded pill, copper bg)

### Claude's Discretion
- Exact grain texture opacity and blend values (3-5% range)
- Specific parallax scroll distances (5-10px range)
- AnimateIn component implementation details
- Exact count-up easing curve
- SVG icon designs for trust bar
- Gallery slider handle design
- Compact testimonial card styling for inner pages
- Specific stock photo selections for before/after (using existing public/images/ library)

</decisions>

<code_context>
## Existing Code Insights

### Reusable Assets
- `HeroSection.tsx`: already has grain texture SVG and gradient overlays — pattern can be extracted into shared utility
- `TestimonialCarousel.tsx`: has StarRating component, prefers-reduced-motion detection, auto-rotate — extend with aggregate rating
- `TrustBar.tsx`: needs full redesign (remove badge images, add SVG icons, count-up)
- `HomeResidentialCommercial.tsx`: needs 50/50 split redesign (currently text-left, image-right layout)
- `FloatingCtaButton.tsx`: exists — needs entrance animation added
- `LeadForm.tsx`: already uses optgroups from nav-data — verify commercial balance
- 15 stock images in `public/images/` for photo treatment
- Design preview at `design-previews/direction-4-editorial-trust.html` — reference for Editorial Trust aesthetic

### Established Patterns
- Tailwind v4 @theme tokens for colors (forest, copper, parchment variants)
- Cormorant (heading) + Cormorant Garamond (body) via next/font CSS variables
- Server/client component split: data-heavy components are server, interactive are client
- All section components use consistent `className` pattern: `py-16 lg:py-24` padding, `mx-auto max-w-7xl px-6 lg:px-8` container
- `aria-labelledby` pattern on all sections with `id` on heading elements

### Integration Points
- `globals.css`: add shared photo treatment utility class, grain overlay styles
- `Header.tsx`: add scroll-based shrink/shadow behavior (needs client-side scroll listener)
- `ServiceTemplate.tsx`: add trust bar and compact testimonial sections
- `CityTemplate.tsx`: add trust bar and compact testimonial sections
- Homepage `page.tsx`: add gallery section, reorder sections per new layout
- `Footer.tsx`: restructure into residential/commercial service columns
- `package.json`: add `motion` (framer-motion) dependency

</code_context>

<specifics>
## Specific Ideas

- Design preview at `design-previews/direction-4-editorial-trust.html` is the aesthetic target — particularly the form styling, section spacing, and typography hierarchy
- Photos should feel "like the same photographer shot them on warm film" — cohesive stock feel via CSS
- Gallery slider should feel smooth and responsive on both mobile and desktop
- Trust bar should feel "editorial" not "loud contractor site" — refined typography, not badge clutter
- Compact testimonials on inner pages should feel like a subtle endorsement, not a full marketing section

</specifics>

<deferred>
## Deferred Ideas

- Image SEO note from user about "Optimizing Images for SEO" — covered within this phase via alt text, file naming, ImageObject schema, and Next.js auto-optimization. No additional phase needed.

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 09-conversion-and-design-polish*
*Context gathered: 2026-03-09*
