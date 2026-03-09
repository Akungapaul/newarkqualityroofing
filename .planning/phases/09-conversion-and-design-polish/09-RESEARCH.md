# Phase 9: Conversion and Design Polish - Research

**Researched:** 2026-03-09
**Domain:** CSS design systems, animation libraries, photo treatment, before/after galleries, trust signal UX, residential/commercial content balance
**Confidence:** HIGH

## Summary

Phase 9 transforms the existing functional site into a visually polished, conversion-optimized experience matching the Editorial Trust design preview. The work spans four distinct domains: (1) CSS-driven photo treatment and grain textures, (2) trust signal redesign and before/after gallery implementation, (3) Motion library animations throughout all page types, and (4) residential/commercial messaging balance on the homepage.

All existing component infrastructure is in place -- TrustBar, TestimonialCarousel, HeroSection, HomeResidentialCommercial, Header, Footer, FloatingCtaButton, and all templates. This phase refines their visual quality rather than creating new data structures or routing. The `motion` npm package (v12.x) is the correct dependency, imported as `motion/react`. No additional animation libraries are needed -- Motion includes `useReducedMotion`, `useInView`, `useScroll`, `useTransform`, `AnimatePresence`, and `stagger` functions natively.

**Primary recommendation:** Install `motion` as a production dependency. Create a shared `AnimateIn` wrapper component and a CSS `.photo-treatment` utility class as foundational pieces that all subsequent plans can reference. Build the before/after gallery as a custom component using CSS `clip-path` (no external library needed for 4 items).

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Warm tone + grain CSS treatment applied to ALL stock photos site-wide (copper/forest gradient, SVG noise at 3-5% opacity, saturate(0.85))
- Excluded from treatment: badge/logo images, map embeds, icons/SVGs
- Consistent cropping ratios by context: hero 16:9, content 4:3, gallery B/A 3:2, cards/thumbnails 1:1, team photos 3:4
- Before/after gallery: slider comparison format (interactive drag handle), homepage only, 4 projects (2 residential + 2 commercial)
- Image SEO: keyword-rich alt text, explicit width/height, ImageObject JSON-LD on gallery items
- Animation library: Motion (framer-motion) via `motion/react` import
- Animation intensity: refined and subtle (not dramatic or minimal)
- Shared `AnimateIn` wrapper component for section animations
- Section animations: fade-in + translateY(20px), 600ms ease-out
- Card grids: stagger 100ms, fade + scale(0.97 to 1)
- Buttons: scale(1.02) on hover, background-color transition 200ms
- Images: subtle parallax on scroll (5-10px movement)
- Stats: count-up animation on viewport entry, ~1.5s easeOut, trigger once
- Hero entrance: orchestrated stagger (eyebrow t=200ms, headline t=400ms, subtitle t=600ms, CTA t=800ms, form t=400ms)
- Header scroll: shrink 80px to 64px + shadow + backdrop-blur + forest/95 opacity
- Floating CTA: slides up from bottom when past hero fold
- Trust bar: text-only, NO badge images, SVG icons in copper, count-up animation, parchment-dark background
- Trust bar placement: homepage + service pages + city pages only
- Testimonial carousel: aggregate rating header ("4.9 out of 5 -- based on 200+ reviews"), remove outbound review links
- Inner page testimonials: compact variant, 1-2 relevant inline, no carousel
- Hero headline: unified "Residential & Commercial Roofing in Newark NJ"
- HomeResidentialCommercial: true 50/50 side-by-side split
- Services grid: equal mix residential + commercial (4+4 or 3+3)
- Footer: separate "Services (Residential)" and "Services (Commercial)" columns
- Commercial service pages: "Commercial" badge pill on hero
- All animations honor prefers-reduced-motion

### Claude's Discretion
- Exact grain texture opacity and blend values (3-5% range)
- Specific parallax scroll distances (5-10px range)
- AnimateIn component implementation details
- Exact count-up easing curve
- SVG icon designs for trust bar
- Gallery slider handle design
- Compact testimonial card styling for inner pages
- Specific stock photo selections for before/after (using existing public/images/ library)

### Deferred Ideas (OUT OF SCOPE)
- Image SEO covered within this phase (no additional phase needed)
- No other deferred items
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| DSGN-01 | Editorial Trust design direction implemented per approved preview | Design preview at `design-previews/direction-4-editorial-trust.html` provides CSS reference; grain texture, organic shapes, rounded corners, color palette already established in globals.css @theme tokens |
| DSGN-02 | Trust bar with text cards (licenses, insurance, years experience, BBB) -- no images | Current TrustBar.tsx has badge images that must be removed; siteConfig.trustStats data structure already provides values; needs SVG icons and count-up animation |
| DSGN-03 | Testimonials section with star ratings | TestimonialCarousel.tsx already has StarRating component; needs aggregate rating header and removal of outbound review links; compact variant needed for inner pages |
| DSGN-04 | Before/after project gallery with CSS brand treatment | New component needed; CSS clip-path slider with drag handle; 4 projects using existing stock photos; ImageObject JSON-LD schema |
| DSGN-05 | Curated stock photos with CSS warm tone filter, grain texture, consistent cropping | Shared `.photo-treatment` CSS class with mix-blend-mode multiply, SVG noise, saturate filter; applied to all 15 stock images in public/images/ |
| DSGN-06 | 50/50 residential and commercial content split throughout site | Homepage hero headline change, HomeResidentialCommercial redesign, ServicesGrid balance, Footer restructure, LeadForm optgroup verification |
| DSGN-07 | Animations and micro-interactions using motion library | Motion v12.x (`npm i motion`), AnimateIn wrapper, hero stagger, header scroll, floating CTA entrance, card stagger, parallax, count-up |
| DSGN-08 | Rounded corners, organic shapes, grain texture per Editorial Trust aesthetic | Design preview uses border-radius: 12-20px, organic circular shapes at low opacity, grain overlay on body via fixed pseudo-element |
| CONT-01 | Homepage addresses both homeowners and business owners equally | Hero headline, ResidentialCommercial 50/50 split, ServicesGrid balance, Footer columns, before/after gallery alternating res/com |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| motion | 12.x (latest) | React animation library | The standard for React animations; 30M+ monthly npm downloads; built-in useReducedMotion, useInView, useScroll, stagger; import from `motion/react` |

### Supporting (Already Installed)
| Library | Version | Purpose | Already In Project |
|---------|---------|---------|-------------------|
| next | 16.1.6 | Framework | Yes -- SSG, Image component, font optimization |
| tailwindcss | v4 | Styling | Yes -- @theme tokens for forest/copper/parchment |
| react | 19.2.3 | UI library | Yes -- useActionState, useFormStatus |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Motion | CSS-only animations | CSS lacks stagger, scroll-linked transforms, and viewport-triggered animations with the same ease |
| Motion | GSAP | Heavier, licensing complexity, overkill for this scope |
| Custom before/after slider | react-compare-slider | Adding a dependency for 4 images is unnecessary; CSS clip-path + pointer events in ~100 lines |
| react-countup | Motion's useMotionValue + useTransform | Motion already handles count-up via animate() with useInView trigger -- no extra dependency |

**Installation:**
```bash
npm install motion
```

## Architecture Patterns

### Component Organization
```
src/
  components/
    animations/
      AnimateIn.tsx           # Shared scroll-reveal wrapper (client component)
      CountUp.tsx             # Animated number counter (client component)
      StaggerGrid.tsx         # Grid container with staggered children (client component)
    sections/
      TrustBar.tsx            # REDESIGN: text-only with SVG icons + count-up
      TestimonialCarousel.tsx  # ENHANCE: aggregate rating header, remove links
      CompactTestimonial.tsx  # NEW: 1-2 inline testimonials for inner pages
      BeforeAfterGallery.tsx  # NEW: slider comparison gallery (client component)
      HeroSection.tsx         # ENHANCE: orchestrated entrance animation
      HomeResidentialCommercial.tsx  # REDESIGN: 50/50 split
      FloatingCtaButton.tsx   # ENHANCE: scroll-triggered entrance
      ServicesGrid.tsx        # ADJUST: equal residential/commercial balance
    layout/
      Header.tsx              # ENHANCE: scroll-based shrink/shadow
      Footer.tsx              # RESTRUCTURE: residential/commercial columns
  app/
    globals.css               # ADD: .photo-treatment utility, grain overlay, organic shapes
```

### Pattern 1: AnimateIn Wrapper Component
**What:** A reusable client component that wraps any section for scroll-triggered fade-in animation.
**When to use:** Wrap every major section on every page type for consistent reveal behavior.
**Implementation approach:**
```typescript
'use client';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### Pattern 2: Hero Orchestration with Variants
**What:** Staggered entrance using Motion variants with delayChildren.
**When to use:** Homepage hero and template heroes.
```typescript
const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};
```

### Pattern 3: Header Scroll Behavior
**What:** CSS transition + scroll listener for header shrink/shadow.
**When to use:** Header component only.
**Implementation approach:**
```typescript
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 50);
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);
// Apply classes conditionally: h-20 vs h-16, shadow-lg, backdrop-blur-md, bg-forest/95
```

### Pattern 4: CSS Photo Treatment Utility
**What:** A shared CSS class applying warm tone + grain + desaturation to stock photos.
**When to use:** Every `<Image>` component displaying stock photography.
```css
.photo-treatment {
  position: relative;
  overflow: hidden;
}
.photo-treatment::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(193,127,78,0.15), rgba(26,58,42,0.1));
  mix-blend-mode: multiply;
  pointer-events: none;
}
.photo-treatment img {
  filter: saturate(0.85);
}
```
Plus a grain overlay using the same SVG noise pattern already in HeroSection.tsx.

### Pattern 5: Before/After Slider
**What:** Custom slider using CSS clip-path with pointer event tracking.
**When to use:** BeforeAfterGallery component on homepage.
```typescript
// Track mouse/touch position as percentage
const [position, setPosition] = useState(50);
// Before image: full width, after image: clip-path: inset(0 0 0 {position}%)
// Drag handle: positioned at {position}% with copper accent
```

### Pattern 6: Count-Up Animation
**What:** Animates numeric values from 0 to target when in viewport.
**When to use:** Trust bar stats, any numeric display.
```typescript
'use client';
import { useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

export function CountUp({ target, suffix = '', duration = 1500 }: {
  target: number; suffix?: string; duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubic
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}{suffix}</span>;
}
```

### Anti-Patterns to Avoid
- **Animating layout properties:** Never animate width, height, padding, margin. Use only transform and opacity for 60fps performance.
- **Missing `viewport={{ once: true }}`:** Without `once: true`, elements re-animate on every scroll pass -- wastes performance and annoys users.
- **`'use client'` on server components:** Only add `'use client'` to components that actually need interactivity. Wrap animations around server-rendered content, not replace server components.
- **`transition: all`:** Never use `transition: all` -- always specify properties (`transition-transform`, `transition-opacity`).
- **Animating without reserved space:** Always set explicit dimensions before animation starts to prevent CLS (Cumulative Layout Shift).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Scroll-triggered reveals | Custom IntersectionObserver wrappers | Motion `whileInView` prop | Built-in viewport detection with animation, handles cleanup, respects reduced motion |
| Staggered animations | Manual setTimeout chains | Motion `staggerChildren` in variants | Declarative, handles timing automatically, propagates through component tree |
| Parallax scroll effects | Custom scroll event math | Motion `useScroll` + `useTransform` | Uses browser ScrollTimeline API when available, hardware accelerated |
| Reduced motion detection | Custom `matchMedia` listener | Motion `useReducedMotion` hook or `<MotionConfig reducedMotion="user">` | Handles all edge cases, SSR-safe, zero boilerplate |
| Number animation library | Bringing in react-countup | Custom `requestAnimationFrame` + `useInView` from motion | Avoids extra dependency for 4 numbers; trivial to implement in ~20 lines |

**Key insight:** Motion already provides every animation primitive needed for this phase. The only code to write is the thin wrapper components (AnimateIn, CountUp) and the before/after slider (pure CSS clip-path + pointer events).

## Common Pitfalls

### Pitfall 1: Client Component Boundary Creep
**What goes wrong:** Adding `'use client'` to existing server components (like ServiceTemplate, CityTemplate) to use Motion, pulling Zod and all data into the client bundle.
**Why it happens:** Motion requires client-side rendering for interactivity.
**How to avoid:** Keep templates as server components. Create small client wrapper components (AnimateIn) and wrap server-rendered children. The pattern is: ServerTemplate renders content, wraps sections in `<AnimateIn>` client component.
**Warning signs:** Bundle size spike, Zod appearing in client bundle, `getServiceContent()` running client-side.

### Pitfall 2: Layout Shift from Animations
**What goes wrong:** Elements pop in and shift surrounding content (CLS penalty).
**Why it happens:** Animating from `opacity: 0` without reserving space, or animating height/width.
**How to avoid:** Always use `transform` for movement (translateY, scale), never animate dimensional properties. Set explicit min-height or use CSS Grid with fixed tracks.
**Warning signs:** Content jumping on page load, CLS score above 0.1.

### Pitfall 3: Grain Texture Performance on Mobile
**What goes wrong:** SVG noise filter overlay causes janky scrolling on low-end mobile devices.
**Why it happens:** The SVG noise filter is computationally expensive when applied as `position: fixed` covering entire viewport.
**How to avoid:** Use `will-change: transform` on the grain overlay element. Consider reducing grain opacity to 2-3% on mobile. The grain overlay should have `pointer-events: none` and a high z-index but not interfere with scrolling.
**Warning signs:** Scroll jank on mobile, high paint times in DevTools.

### Pitfall 4: Header Scroll Listener Without Passive Flag
**What goes wrong:** Scroll performance degrades because the scroll event listener blocks the main thread.
**Why it happens:** Default scroll listeners are non-passive.
**How to avoid:** Always add `{ passive: true }` to scroll event listeners. Use `requestAnimationFrame` to throttle state updates. For the header shrink, a simple boolean state (scrolled vs not) with a threshold check is sufficient.
**Warning signs:** Scroll stuttering, DevTools showing "Violation: handler took Xms".

### Pitfall 5: Before/After Slider Touch Events on Mobile
**What goes wrong:** Slider doesn't work on touch devices, or scrolling interferes with slider dragging.
**Why it happens:** Touch events need explicit handling; vertical scroll must be prevented while dragging horizontally.
**How to avoid:** Use `onPointerDown/Move/Up` (unified API for mouse+touch). Set `touch-action: none` on the slider container. Add `pointer-events: none` on images to prevent drag.
**Warning signs:** Slider unresponsive on mobile, page scrolls when trying to drag slider handle.

### Pitfall 6: Trust Bar SVG Icons Not Matching Brand
**What goes wrong:** Generic SVG icons look out of place with the Editorial Trust aesthetic.
**Why it happens:** Grabbing random icon sets instead of designing cohesive ones.
**How to avoid:** Use simple, line-drawn SVGs in copper color with consistent stroke width (1.5-2px). Keep icons minimal: shield for insurance, certificate for license, clock for years, checkmark for BBB. Match the editorial feel -- refined, not clip-art.
**Warning signs:** Icons feel "corporate template" rather than "editorial magazine."

### Pitfall 7: Count-Up Firing During SSR
**What goes wrong:** `requestAnimationFrame` called during server-side rendering causes errors.
**Why it happens:** Motion hooks and RAF don't exist in Node.js environment.
**How to avoid:** Ensure CountUp component has `'use client'` directive. The `useInView` hook from Motion is SSR-safe and returns `false` on server.
**Warning signs:** Hydration mismatch errors, "requestAnimationFrame is not defined."

## Code Examples

Verified patterns from official sources and project codebase:

### Motion Import and Basic Animation
```typescript
// Source: https://motion.dev/docs/react (verified import path for v12.x)
'use client';
import { motion } from 'motion/react';

// Basic fade-in on viewport entry
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6, ease: 'easeOut' }}
>
  {children}
</motion.div>
```

### Staggered Grid Children
```typescript
// Source: https://motion.dev/docs/stagger
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-3 gap-6"
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

### Scroll-Linked Parallax
```typescript
// Source: https://motion.dev/docs/react-scroll-animations
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

function ParallaxImage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -10]); // 10px parallax

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img
        style={{ y }}
        src="/images/newark-roofing-team.jpg"
        alt="Newark Quality Roofing team"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
```

### Reduced Motion Global Configuration
```typescript
// Source: https://motion.dev/docs/react-accessibility
// In layout.tsx or a provider wrapper:
import { MotionConfig } from 'motion/react';

// Wraps all motion components -- automatically disables transform animations
// for users with prefers-reduced-motion enabled
<MotionConfig reducedMotion="user">
  {children}
</MotionConfig>
```

### CSS Photo Treatment Class (globals.css)
```css
/* Warm tone + grain treatment for stock photos */
.photo-treatment {
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem; /* 12px -- Editorial Trust standard */
}

.photo-treatment::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(193,127,78,0.12), rgba(26,58,42,0.08));
  mix-blend-mode: multiply;
  pointer-events: none;
  z-index: 1;
}

.photo-treatment img {
  filter: saturate(0.85);
}

/* Grain texture -- applied globally via body pseudo-element */
body::after {
  content: '';
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E");
  pointer-events: none;
  z-index: 9999;
}
```
This pattern is directly extracted from the design preview (`direction-4-editorial-trust.html` line 36-39).

### ImageObject JSON-LD for Gallery
```typescript
// Source: https://schema.org/ImageObject
function buildImageObjectSchema(image: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return {
    '@type': 'ImageObject',
    contentUrl: `https://www.newarkqualityroofing.com${image.src}`,
    name: image.alt,
    caption: image.caption,
    width: { '@type': 'QuantitativeValue', value: image.width },
    height: { '@type': 'QuantitativeValue', value: image.height },
  };
}
```

### Before/After Slider Core Logic
```typescript
'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';

interface SliderProps {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  caption: string;
}

function BeforeAfterSlider({ before, after, caption }: SliderProps) {
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, [isDragging]);

  return (
    <div
      className="photo-treatment relative aspect-[3/2] cursor-ew-resize select-none"
      style={{ touchAction: 'none' }}
      onPointerDown={() => setIsDragging(true)}
      onPointerMove={handleMove}
      onPointerUp={() => setIsDragging(false)}
      onPointerLeave={() => setIsDragging(false)}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
    >
      {/* After image (full) */}
      <Image src={after.src} alt={after.alt} fill className="object-cover" />
      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={before.src} alt={before.alt} fill className="object-cover" />
      </div>
      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-copper"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper p-2 shadow-lg">
          {/* Arrows icon */}
        </div>
      </div>
    </div>
  );
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `import { motion } from 'framer-motion'` | `import { motion } from 'motion/react'` | Motion v11 (2024) | New import path; framer-motion still works but deprecated |
| Custom IntersectionObserver for scroll reveals | Motion `whileInView` prop | Motion v7+ | Declarative, no cleanup code, SSR-safe |
| GSAP ScrollTrigger for parallax | Motion `useScroll` + `useTransform` | Motion v10+ | Uses browser ScrollTimeline API, lighter weight |
| Manual `prefers-reduced-motion` matchMedia | `<MotionConfig reducedMotion="user">` | Motion v10+ | Global configuration, automatic for all motion components |
| `staggerChildren` in variants object | `stagger()` function import also available | Motion v11+ | Both approaches work; variants approach preferred for tree propagation |

**Deprecated/outdated:**
- `framer-motion` package name: Still published but redirects to `motion`. Use `motion` for new installs.
- `AnimateSharedLayout`: Removed in Motion v11. Use `LayoutGroup` instead (not needed for this phase).

## Open Questions

1. **Stock Photo Assignments for Before/After Gallery**
   - What we know: 15 images exist in `public/images/`, 4 gallery slots needed (2 residential, 2 commercial)
   - What's unclear: Which specific images to pair as before/after for each project type
   - Recommendation: Claude's discretion per CONTEXT.md; use existing images that best represent the 4 project types (shingle repair, flat roof install, full replacement, TPO membrane)

2. **Trust Bar Data Structure Update**
   - What we know: `siteConfig.trustStats` has 4 items with `value` and `label`
   - What's unclear: Whether `value` strings like "500+", "15+", "5.0", "Yes" need restructuring for count-up animation (need numeric targets)
   - Recommendation: Extend trust stat objects to include `numericValue: number` and `suffix: string` properties alongside existing display values

3. **Compact Testimonial Data for Inner Pages**
   - What we know: 6 testimonials exist in `testimonials.ts` with `service` and `location` fields
   - What's unclear: Selection logic for which testimonials appear on which service/city pages
   - Recommendation: Filter by `service` field for service pages, by `location` field for city pages; show first match + one fallback

## Validation Architecture

> Config does not explicitly set `workflow.nyquist_validation` to false, so validation section is included.

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual UAT (no automated test framework installed) |
| Config file | none |
| Quick run command | `npm run build` (SSG build validates all pages compile) |
| Full suite command | `npm run build && npm run seo:validate` |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| DSGN-01 | Editorial Trust design matches preview (grain, rounded corners, organic shapes) | manual/visual | `npm run build` (compile check) | N/A |
| DSGN-02 | Trust bar text-only, no images, SVG icons, count-up | manual/visual | `npm run build` | N/A |
| DSGN-03 | Testimonials with star ratings, aggregate header | manual/visual | `npm run build` | N/A |
| DSGN-04 | Before/after gallery with slider and CSS treatment | manual/visual | `npm run build` | N/A |
| DSGN-05 | Stock photos with warm tone filter, grain, consistent cropping | manual/visual | `npm run build` | N/A |
| DSGN-06 | 50/50 residential/commercial split | manual/visual + content audit | `npm run build` | N/A |
| DSGN-07 | Animations using motion library, prefers-reduced-motion honored | manual/visual | `npm run build` | N/A |
| DSGN-08 | Rounded corners, organic shapes, grain texture | manual/visual | `npm run build` | N/A |
| CONT-01 | Homepage equally addresses homeowners and business owners | manual/visual + content review | `npm run build` | N/A |

### Sampling Rate
- **Per task commit:** `npm run build` (verifies all 1,752 pages compile with changes)
- **Per wave merge:** `npm run build && npm run seo:validate`
- **Phase gate:** Full build green + visual UAT checklist

### Wave 0 Gaps
- [ ] `motion` package installation: `npm install motion`
- [ ] No automated visual regression framework -- all DSGN requirements are manual/visual verification
- [ ] Build verification is the primary automated check (all pages must compile)

## Sources

### Primary (HIGH confidence)
- Motion official site (https://motion.dev/docs/react) -- import path, API surface, version
- Motion npm (https://www.npmjs.com/package/motion) -- v12.35.2, 30M+ monthly downloads
- Motion stagger docs (https://motion.dev/docs/stagger) -- staggerChildren, delayChildren API
- Motion useInView docs (https://motion.dev/docs/react-use-in-view) -- viewport detection, 0.6kb hook
- Motion useScroll docs (https://motion.dev/docs/react-use-scroll) -- scroll-linked animations, ScrollTimeline API
- Motion accessibility docs (https://motion.dev/docs/react-accessibility) -- useReducedMotion, MotionConfig reducedMotion="user"
- Schema.org ImageObject (https://schema.org/ImageObject) -- structured data properties
- Project design preview (`design-previews/direction-4-editorial-trust.html`) -- CSS patterns, grain texture SVG, color values, organic shapes

### Secondary (MEDIUM confidence)
- Framer Motion Complete Guide 2026 (https://inhaq.com/blog/framer-motion-complete-guide-react-nextjs-developers) -- code patterns for whileInView, useScroll, AnimatePresence, useReducedMotion verified against official docs
- Let's Build UI before/after slider (https://www.letsbuildui.dev/articles/how-to-build-an-image-comparison-slider/) -- CSS clip-path approach for slider
- Google Image structured data (https://www.searchenginejournal.com/google-updates-image-structured-data/467786/) -- ImageObject properties for Google Images

### Tertiary (LOW confidence)
- None -- all findings verified against official docs or project source code

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- Motion v12.x is the clear standard; import path and API verified via npm and official docs
- Architecture: HIGH -- Patterns derived from official Motion docs and existing project codebase conventions; design preview provides exact CSS values
- Pitfalls: HIGH -- Based on known React/Next.js animation patterns, SSR constraints, and CLS concerns from official documentation
- Photo treatment: HIGH -- CSS values extracted directly from the design preview HTML file in the project
- Before/after gallery: MEDIUM -- Custom implementation approach (clip-path + pointer events) is well-established but untested in this specific project context

**Research date:** 2026-03-09
**Valid until:** 2026-04-09 (stable domain -- CSS patterns and Motion v12 API unlikely to change)
