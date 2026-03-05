# Phase 2: Lead Capture and Core Pages - Research

**Researched:** 2026-03-05
**Domain:** Next.js 16 form handling, GoHighLevel webhook integration, lead capture UX, core page architecture
**Confidence:** HIGH

## Summary

This phase transforms the skeleton site into a conversion-focused lead generation machine. The primary technical domains are: (1) building a reusable lead capture form using React 19 Server Actions with `useActionState` and Zod validation, (2) proxying form submissions server-side to a GoHighLevel inbound webhook, (3) implementing click-to-call with a GoHighLevel tracking number, and (4) building out 8 core pages (homepage, about, contact, services hub, locations hub, HTML sitemap, thank you, privacy policy).

The existing codebase already has a mature foundation: Next.js 16.1.6, React 19.2.3, Tailwind v4 with `@theme` tokens, Zod for validation, a slug registry dispatching to templates via `[slug]/page.tsx`, and 63 services + 21 cities in typed data files. The core pages are already registered in `core-pages.ts` and the slug registry, and the `CoreTemplate` currently renders placeholder content. The key work is replacing those placeholders with real page content and building the lead form + API route.

**Primary recommendation:** Use React 19 `useActionState` with a dedicated Server Action (`src/app/actions/submit-lead.ts`) that validates with Zod, POSTs to GoHighLevel's inbound webhook, logs all submissions server-side, and redirects to `/thank-you`. The form is a single reusable `'use client'` component accepting optional `defaultService` and `defaultCity` props for context-aware pre-filling.

## Standard Stack

### Core (Already Installed)
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| next | 16.1.6 | Framework, SSG, API routes, Server Actions | Already in project |
| react | 19.2.3 | UI library with `useActionState`, `useFormStatus` | Already in project |
| zod | ^3.25.76 | Form validation (server-side + shared schemas) | Already in project |
| tailwindcss | ^4 | Styling with `@theme` tokens | Already in project |

### Supporting (No Additional Installs Needed)
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| next/font/google | built-in | Cormorant fonts (already configured) | Typography |
| next/navigation | built-in | `redirect()` for post-submission | Thank you redirect |

### No New Dependencies Required

This phase requires **zero new npm packages**. Everything needed is already available:
- Form handling: React 19 `useActionState` + HTML `<form action={}>` + `useFormStatus`
- Validation: Zod (already installed)
- API calls: Native `fetch()` for GoHighLevel webhook
- Carousel: CSS animations + minimal client-side state (no library needed)
- Accordion: HTML `<details>`/`<summary>` elements with Tailwind styling
- Google Maps: Plain `<iframe>` embed (no API key needed for embed-only)

**Installation:**
```bash
# No new packages needed
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── actions/
│   │   └── submit-lead.ts          # Server Action for lead form
│   ├── api/
│   │   └── leads/
│   │       └── route.ts            # Optional: Route Handler fallback endpoint
│   ├── page.tsx                     # Homepage (replace placeholder)
│   ├── thank-you/
│   │   └── page.tsx                # Dedicated thank-you page (not via [slug])
│   └── [slug]/
│       └── page.tsx                # Existing - dispatches to templates
├── components/
│   ├── forms/
│   │   ├── LeadForm.tsx            # 'use client' - reusable lead form
│   │   └── SubmitButton.tsx        # 'use client' - uses useFormStatus
│   ├── sections/
│   │   ├── HeroSection.tsx         # Homepage hero with overlaid form
│   │   ├── TrustBar.tsx            # Credentials/stats bar
│   │   ├── ServicesGrid.tsx        # Photo cards for service categories
│   │   ├── TestimonialCarousel.tsx  # 'use client' - rotating testimonials
│   │   ├── FaqAccordion.tsx        # Collapsible Q&A (can be server component)
│   │   └── LocationsGrid.tsx      # City cards grid
│   ├── ui/
│   │   └── PhoneNumber.tsx         # Click-to-call component
│   └── layout/
│       ├── Header.tsx              # Existing - add phone number
│       └── Footer.tsx              # Existing - already has NAP
├── data/
│   ├── site-config.ts              # Phone, address, business hours, trust stats
│   ├── testimonials.ts             # Placeholder testimonial data
│   └── faq.ts                      # FAQ data for homepage
└── lib/
    └── schemas.ts                  # Add LeadFormSchema
```

### Pattern 1: Server Action with useActionState for Lead Form
**What:** A Server Action handles form submission, validates with Zod, proxies to GoHighLevel, logs the submission, and returns status. The client uses `useActionState` for pending/error/success states.
**When to use:** All lead form submissions across the site.

```typescript
// Source: https://nextjs.org/docs/app/guides/forms (verified 2026-02-27)

// src/app/actions/submit-lead.ts
'use server'

import { z } from 'zod'
import { redirect } from 'next/navigation'

const LeadSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  serviceNeeded: z.string().min(1, 'Please select a service'),
})

export type LeadFormState = {
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    serviceNeeded?: string[]
  }
  message?: string
  success?: boolean
}

export async function submitLead(
  prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const validatedFields = LeadSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    serviceNeeded: formData.get('serviceNeeded'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please fix the errors above.',
    }
  }

  const payload = validatedFields.data

  // Server-side logging (lead loss prevention)
  console.log('[LEAD]', JSON.stringify({ ...payload, timestamp: new Date().toISOString() }))

  // Proxy to GoHighLevel webhook
  try {
    const webhookUrl = process.env.GHL_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: payload.name,
          email: payload.email,
          phone: payload.phone,
          tags: [payload.serviceNeeded],
          source: 'website-lead-form',
        }),
      })
    }
  } catch (error) {
    console.error('[LEAD_WEBHOOK_ERROR]', error)
    // Don't fail the user submission - lead is already logged
  }

  redirect('/thank-you')
}
```

```typescript
// src/components/forms/LeadForm.tsx
'use client'

import { useActionState } from 'react'
import { submitLead, type LeadFormState } from '@/app/actions/submit-lead'
import { SubmitButton } from './SubmitButton'

interface LeadFormProps {
  defaultService?: string
  defaultCity?: string
  className?: string
}

const initialState: LeadFormState = {}

export function LeadForm({ defaultService, className }: LeadFormProps) {
  const [state, formAction] = useActionState(submitLead, initialState)

  return (
    <form action={formAction} className={className} id="lead-form">
      <h2 className="font-heading text-2xl font-bold text-forest">
        Get Your Free Roofing Estimate
      </h2>

      <div>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required autoComplete="name" />
        {state.errors?.name && <p aria-live="polite">{state.errors.name[0]}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required autoComplete="email" />
        {state.errors?.email && <p aria-live="polite">{state.errors.email[0]}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required autoComplete="tel" />
        {state.errors?.phone && <p aria-live="polite">{state.errors.phone[0]}</p>}
      </div>

      <div>
        <label htmlFor="serviceNeeded">Service Needed</label>
        <select id="serviceNeeded" name="serviceNeeded" required defaultValue={defaultService || ''}>
          <option value="">Select a service...</option>
          {/* Grouped by category */}
        </select>
        {state.errors?.serviceNeeded && <p aria-live="polite">{state.errors.serviceNeeded[0]}</p>}
      </div>

      <SubmitButton />
    </form>
  )
}
```

### Pattern 2: Context-Aware Form Pre-filling
**What:** The LeadForm accepts `defaultService` and `defaultCity` props so it can be contextually pre-filled on service pages and city pages in future phases.
**When to use:** When placing the lead form on service-specific or city-specific pages.

### Pattern 3: Dedicated Page Routes vs CoreTemplate Dispatch
**What:** The homepage (`/`) already has its own `page.tsx`. For the thank-you page, create a dedicated route at `app/thank-you/page.tsx` rather than using the `[slug]` catch-all, because thank-you pages need special behavior (no-index, conversion tracking). Other core pages (about, contact, services hub, locations hub, sitemap, privacy) should get their own dedicated page files OR have their CoreTemplate expanded with page-specific content based on `corePage.id`.
**When to use:** Pages that need unique layouts or special metadata handling.

**Recommendation:** Create dedicated page directories for pages with unique layouts (homepage already done, thank-you, contact). For simpler pages (about, privacy, sitemap), expand the CoreTemplate dispatch or create individual templates.

### Pattern 4: Service Dropdown with Category Grouping
**What:** Use `<optgroup>` elements to group the 63 services by category in the dropdown, matching the category labels already defined in `nav-data.ts`.
**When to use:** The service dropdown in the lead form.

```typescript
// Using existing category data from nav-data.ts
<select name="serviceNeeded">
  <option value="">Select a service...</option>
  <optgroup label="Repair & Maintenance">
    <option value="roof-repair">Roof Repair</option>
    {/* ... */}
  </optgroup>
  <optgroup label="Residential Roof Types">
    <option value="asphalt-shingle-roofing">Asphalt Shingle Roofing</option>
    {/* ... */}
  </optgroup>
  {/* etc. */}
</select>
```

### Pattern 5: FAQ with HTML details/summary
**What:** Use native HTML `<details>` and `<summary>` elements for the accordion. These are accessible by default, require zero JavaScript, and work without hydration.
**When to use:** FAQ section on homepage.

```typescript
// Server component - no 'use client' needed
<details className="group border-b border-border">
  <summary className="cursor-pointer list-none py-4 font-heading text-lg font-semibold text-forest">
    <span className="flex items-center justify-between">
      {question}
      <svg className="h-5 w-5 transition-transform group-open:rotate-180" .../>
    </span>
  </summary>
  <div className="pb-4 font-body text-text-secondary">
    {answer}
  </div>
</details>
```

### Anti-Patterns to Avoid
- **Putting the Server Action in the component file:** Keep actions in `app/actions/` for clear separation and reusability.
- **Using `fetch` from client to call your own API route:** Use Server Actions directly instead of building a separate API route + client fetch. Server Actions are the Next.js 16 standard for mutations.
- **Making the lead form a server component:** It needs `useActionState` for pending/error states, so it must be `'use client'`. But keep it minimal -- pass service data as props from a server parent.
- **Installing a carousel library for 5-6 testimonials:** A CSS animation with `useEffect`-based auto-rotation is simpler and avoids bundle bloat.
- **Installing a maps library for a simple embed:** Use a plain iframe. No API key needed for Google Maps embed-only.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Form validation | Custom regex validators | Zod `safeParse` with `.flatten().fieldErrors` | Zod is already installed, handles edge cases, type-safe |
| Pending/loading states | Custom useState + fetch | `useActionState` pending boolean + `useFormStatus` | Built into React 19, handles race conditions |
| Phone number formatting | Custom formatter | `<a href="tel:+1XXXXXXXXXX">` with display formatting | Native tel: links work everywhere |
| Accordion/collapsible | Custom state + animation | `<details>`/`<summary>` HTML elements | Zero JS, accessible by default, CSS-styleable |
| Form submission proxy | Custom middleware | Next.js Server Action with `fetch()` to webhook | Server Actions handle CSRF, serialization automatically |
| Privacy policy text | Write from scratch | Industry-standard template adapted for roofing | Legal content should follow proven templates |

**Key insight:** The entire form submission pipeline (validation, pending states, error display, server-side proxy, redirect) is handled by React 19 + Next.js 16 built-in primitives. No form library, no state management library, no HTTP client library is needed.

## Common Pitfalls

### Pitfall 1: redirect() Inside try/catch
**What goes wrong:** `redirect()` from `next/navigation` works by throwing a special error internally. If called inside a try/catch, the catch block swallows it.
**Why it happens:** Developers wrap the entire Server Action in try/catch for error handling.
**How to avoid:** Call `redirect('/thank-you')` AFTER the try/catch block, not inside it. Or use a `shouldRedirect` flag.
**Warning signs:** Form submits successfully but stays on the same page.

```typescript
// WRONG
try {
  await fetch(webhookUrl, ...)
  redirect('/thank-you')  // This throw gets caught!
} catch (error) {
  console.error(error)
}

// CORRECT
let shouldRedirect = false
try {
  await fetch(webhookUrl, ...)
  shouldRedirect = true
} catch (error) {
  console.error(error)
  shouldRedirect = true  // Still redirect -- lead was logged
}
if (shouldRedirect) redirect('/thank-you')
```

### Pitfall 2: GoHighLevel Webhook Field Naming
**What goes wrong:** GoHighLevel inbound webhooks require JSON with specific field naming conventions -- no spaces in keys, use camelCase or snake_case.
**Why it happens:** Developers use arbitrary field names that don't map to GHL contact properties.
**How to avoid:** Use standard GHL contact field names: `firstName`, `lastName`, `email`, `phone`, `tags`. Send a test payload during development.
**Warning signs:** Leads arrive in GHL but fields are empty or unmapped.

### Pitfall 3: Missing Environment Variable Causes Silent Failure
**What goes wrong:** If `GHL_WEBHOOK_URL` is not set, the webhook call is skipped silently and leads are only logged to console.
**Why it happens:** Env vars differ between dev, preview, and production environments.
**How to avoid:** Log a clear warning when the env var is missing. Add the env var to `.env.example`. Ensure server-side logging always runs regardless of webhook status.
**Warning signs:** No leads appearing in GoHighLevel, only in server logs.

### Pitfall 4: dynamicParams = false Blocking New Routes
**What goes wrong:** The existing `[slug]/page.tsx` has `dynamicParams = false`. If new core pages are added to `core-pages.ts`, they are picked up by `generateStaticParams`. But if you create a dedicated route like `app/thank-you/page.tsx`, it takes precedence over the catch-all -- which is correct. Just be aware of the routing priority.
**Why it happens:** Next.js App Router route priority: specific routes > dynamic segments.
**How to avoid:** For pages with unique layouts (thank-you, contact), use dedicated route files. For pages that fit the standard core template, keep them in the catch-all.
**Warning signs:** 404 errors on pages that exist in core-pages.ts but have conflicting route files.

### Pitfall 5: Google Maps Embed Without Loading Attribute
**What goes wrong:** The maps iframe loads eagerly, blocking initial page paint with a heavy request.
**Why it happens:** Default iframe behavior is eager loading.
**How to avoid:** Always use `loading="lazy"` on the maps iframe. Also set explicit `width` and `height` to prevent layout shift.
**Warning signs:** Slow LCP on the contact page.

### Pitfall 6: useActionState Signature Mismatch
**What goes wrong:** The Server Action must accept `(prevState, formData)` as arguments when used with `useActionState`. Forgetting `prevState` causes a runtime error.
**Why it happens:** Regular Server Actions take only `formData`. The `useActionState` variant needs the extra first parameter.
**How to avoid:** Always check that the Server Action signature matches: `async function action(prevState: StateType, formData: FormData): Promise<StateType>`
**Warning signs:** TypeScript error or runtime "too many arguments" error.

## Code Examples

### GoHighLevel Inbound Webhook POST
```typescript
// Source: GoHighLevel docs + WebSearch verification
// The webhook URL is provided by GHL when you create an Inbound Webhook trigger in Workflows

const response = await fetch(process.env.GHL_WEBHOOK_URL!, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstName: 'John',
    email: 'john@example.com',
    phone: '+19735551234',
    tags: ['roof-repair'],
    source: 'website-lead-form',
    // GHL maps these fields to contact properties
    // Keys must be camelCase or snake_case (no spaces)
  }),
})
```

### Click-to-Call Component
```typescript
// src/components/ui/PhoneNumber.tsx
import { Phone } from 'lucide-react'  // or inline SVG

interface PhoneNumberProps {
  className?: string
}

export function PhoneNumber({ className }: PhoneNumberProps) {
  const displayNumber = process.env.NEXT_PUBLIC_PHONE_DISPLAY || '(973) 555-0123'
  const telNumber = process.env.NEXT_PUBLIC_PHONE_TEL || '+19735550123'

  return (
    <a
      href={`tel:${telNumber}`}
      className={className}
      aria-label={`Call us at ${displayNumber}`}
    >
      {/* Phone icon SVG */}
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span>{displayNumber}</span>
    </a>
  )
}
```

### Google Maps Embed (Contact Page)
```typescript
// Simple iframe embed - no API key needed for embed mode
<iframe
  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=Newark+Quality+Roofing+Newark+NJ`}
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Newark Quality Roofing location on Google Maps"
/>

// Alternative: Use a static embed URL without API key (limited but works)
<iframe
  src="https://maps.google.com/maps?q=Newark+NJ&t=&z=13&ie=UTF8&iwloc=&output=embed"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  title="Newark Quality Roofing location"
/>
```

### Testimonial Auto-Rotate (Minimal Client Component)
```typescript
'use client'
import { useState, useEffect, useCallback } from 'react'

interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
}

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % testimonials.length)
  }, [testimonials.length])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <div role="region" aria-label="Customer testimonials" aria-live="polite">
      {/* Render testimonial cards with CSS transitions */}
    </div>
  )
}
```

## Discretionary Decisions (Research Recommendations)

These are areas marked as "Claude's Discretion" in CONTEXT.md. Based on research, here are prescriptive recommendations:

### Form Flow: Single-step
**Recommendation:** Single-step form. With only 4 fields, multi-step adds unnecessary friction and complexity. Research shows multi-step only helps when forms exceed 6-8 fields.

### Service Dropdown: All 63 Services Grouped by Category
**Recommendation:** Show all 63 services using `<optgroup>` elements grouped by the 8 categories already defined in `nav-data.ts`. This leverages existing data, avoids cascading dropdown complexity, and gives users the most specific option. The `<optgroup>` makes 63 options scannable.

### Post-submission: Redirect to /thank-you
**Recommendation:** Use `redirect('/thank-you')` from the Server Action. A dedicated thank-you page enables conversion tracking (Google Ads, Meta Pixel), sets clear expectations, and is the industry standard for lead gen sites.

### Form Validation UX: Inline per-field
**Recommendation:** Inline per-field validation using `state.errors.fieldName` from the Server Action return. Each field shows its error below the input with `aria-live="polite"`. This is the pattern shown in official Next.js docs.

### Lead Loss Prevention: Server-side console logging
**Recommendation:** Use structured `console.log('[LEAD]', JSON.stringify(payload))` for every submission, regardless of webhook success. This ensures leads are captured in Vercel server function logs. Email backup adds complexity and a second point of failure -- not worth it for v1.

### Mobile Phone Placement: Sticky header with phone number
**Recommendation:** Add the phone number to the existing sticky header (which already has `sticky top-0`). On mobile, show a compact phone icon + number. No separate sticky bottom bar needed -- the header already persists. This avoids covering content and is the simplest implementation.

### Homepage Section Ordering
**Recommendation (conversion-optimized):**
1. Hero with lead form (above the fold)
2. Trust bar (immediate credibility)
3. Services grid (what we do)
4. Testimonials carousel (social proof)
5. Locations grid (where we serve)
6. FAQ accordion (objection handling)
7. Final CTA (redundant call-to-action before footer)

### Locations Hub Layout
**Recommendation:** Grid of city cards (3 columns desktop, 2 tablet, 1 mobile) with city name and a brief tagline. Link each to `roofing-in-{city}-nj`. Mark Newark as headquarters.

### Privacy Policy
**Recommendation:** Use a standard privacy policy template adapted for a roofing contractor. Cover: data collection (form submissions, cookies), data use (contacting about services), third-party sharing (GoHighLevel CRM), contact info. This is placeholder legal text with a note to have an attorney review.

### Emergency/Urgent Roofing Callout
**Recommendation:** A small callout banner or badge near the phone number: "24/7 Emergency Service Available". Not a separate section -- just a visual indicator that emergency calls are welcome.

### Business Hours Display
**Recommendation:** Display business hours near the phone number in the footer and on the contact page. Use a simple text format. Don't add complexity for "open now" indicators in v1.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `useFormState` from `react-dom` | `useActionState` from `react` | React 19 (Dec 2024) | Import changed, same API |
| API Route Handler + client `fetch` for forms | Server Actions with `<form action={}>` | Next.js 14+ / stable in 16 | Simpler, type-safe, built-in CSRF |
| `getServerSideProps` for form handling | Server Actions + `useActionState` | Next.js App Router | No separate API layer needed |
| Accordion via JS state management | `<details>`/`<summary>` HTML | Always available, newly popular | Zero JS, accessible by default |

**Deprecated/outdated:**
- `useFormState` from `react-dom`: Renamed to `useActionState` in React 19. Import from `react`, not `react-dom`.
- Pages Router API routes for form mutations: While still functional, Server Actions are the standard in App Router.

## Open Questions

1. **GoHighLevel Webhook URL Format**
   - What we know: GHL provides a webhook URL when you create an "Inbound Webhook" trigger in the Workflows section. The URL accepts POST with JSON body.
   - What's unclear: The exact URL format and field mapping depends on the user's GHL account configuration. We cannot test without the actual URL.
   - Recommendation: Use `process.env.GHL_WEBHOOK_URL` as a placeholder. Document the expected JSON payload format. Include a `.env.example` file. The form works (logging leads) even without the webhook URL configured.

2. **Google Maps Embed API Key**
   - What we know: Simple embeds can work with a direct URL or with the Embed API (requires key). The API key approach offers more control.
   - What's unclear: Whether the project has a Google Cloud project/API key.
   - Recommendation: Start with the keyless embed URL approach. Add `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` to `.env.example` as an optional enhancement.

3. **Hero Image Source**
   - What we know: The homepage hero needs a full-bleed roofing image.
   - What's unclear: Whether actual roofing photos are available or if placeholders are needed.
   - Recommendation: Use a high-quality placeholder (gradient/pattern background with CSS) that can be swapped for a real image via the `public/` directory. Use Next.js `<Image>` component with priority loading for LCP.

## Sources

### Primary (HIGH confidence)
- Next.js 16.1.6 Official Forms Guide (https://nextjs.org/docs/app/guides/forms) - Server Actions, useActionState, Zod validation, redirect pattern
- Project codebase analysis - package.json, layout.tsx, slug-registry.ts, core-pages.ts, services.ts, cities.ts, nav-data.ts

### Secondary (MEDIUM confidence)
- GoHighLevel Support Portal (https://help.gohighlevel.com/support/solutions/articles/48001237383) - Inbound webhook format, JSON-only, camelCase keys
- GoHighLevel Support Portal (https://help.gohighlevel.com/support/solutions/articles/155000003305) - Custom webhook auth and payload structure

### Tertiary (LOW confidence)
- WebSearch results on testimonial carousel patterns and Google Maps embed practices - general community patterns, not critical to implementation

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Verified against existing package.json and Next.js 16 official docs
- Architecture: HIGH - Patterns directly from official Next.js forms guide, verified for v16.1.6
- GoHighLevel integration: MEDIUM - Webhook format verified via official docs, but exact field mapping depends on user's GHL configuration
- Pitfalls: HIGH - redirect() in try/catch and useActionState signature are well-documented issues
- Discretionary decisions: MEDIUM - Based on conversion optimization research and industry patterns

**Research date:** 2026-03-05
**Valid until:** 2026-04-05 (30 days - stable stack, no major changes expected)
