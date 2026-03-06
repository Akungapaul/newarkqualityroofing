---
phase: 02-lead-capture-core-pages
plan: 01
subsystem: lead-capture
tags: [server-action, form, zod, ghl-webhook, phone, data]
dependency-graph:
  requires: [01-01, 01-02, 01-04]
  provides: [LeadForm, SubmitButton, PhoneNumber, submitLead, siteConfig, testimonials, faqItems, LeadFormSchema]
  affects: [02-02, 02-03, 02-04, 02-05]
tech-stack:
  added: []
  patterns: [server-actions, useActionState, useFormStatus, optgroup-service-grouping]
key-files:
  created:
    - src/app/actions/submit-lead.ts
    - src/components/forms/LeadForm.tsx
    - src/components/forms/SubmitButton.tsx
    - src/components/ui/PhoneNumber.tsx
    - src/data/site-config.ts
    - src/data/testimonials.ts
    - src/data/faq.ts
    - .env.example
  modified:
    - src/lib/schemas.ts
    - .gitignore
decisions:
  - id: 02-01-01
    decision: "serviceGroups passed as prop (not imported directly) since LeadForm is 'use client'"
    rationale: "Avoids pulling Zod and services data into client bundle"
  - id: 02-01-02
    decision: "PhoneNumber is a server component (no 'use client')"
    rationale: "Reads env vars at build time via siteConfig, no interactivity needed"
  - id: 02-01-03
    decision: "Added !.env.example exception to .gitignore"
    rationale: "Default .env* pattern was too broad, blocking .env.example from being committed"
metrics:
  duration: 2min
  completed: 2026-03-06
---

# Phase 02 Plan 01: Lead Capture Foundation Summary

**One-liner:** Server action with GHL webhook proxy, LeadForm with useActionState and optgroup service dropdown, PhoneNumber click-to-call component, plus site config, testimonials, and FAQ data files.

## What Was Built

### Server Action (`src/app/actions/submit-lead.ts`)
- Zod-validated form submission with flattened field errors returned to client
- Structured `[LEAD]` logging on every submission regardless of webhook status
- GHL webhook proxy with try/catch and `shouldRedirect` pattern to avoid redirect-inside-try
- Graceful degradation: logs `[LEAD_NO_WEBHOOK]` warning when webhook URL not configured
- Redirects to `/thank-you` after successful lead capture

### LeadForm Component (`src/components/forms/LeadForm.tsx`)
- Client component using `useActionState(submitLead, initialState)`
- 4 fields: name, email, phone, service (with optgroup-grouped dropdown)
- `serviceGroups` passed as prop from server parent (keeps Zod out of client bundle)
- `defaultService` and `defaultCity` props for context-aware pre-filling
- Two variants: `hero` (dark glass effect) and `standard` (light parchment)
- Inline error display with `aria-live="polite"` for screen readers

### SubmitButton Component (`src/components/forms/SubmitButton.tsx`)
- Uses `useFormStatus` for pending state detection
- Shows "Submitting..." with disabled state during form submission

### PhoneNumber Component (`src/components/ui/PhoneNumber.tsx`)
- Server component reading from `siteConfig` (env vars with fallbacks)
- Renders `tel:` link with inline SVG phone icon
- Size variants: sm, md, lg
- `aria-label` for accessibility

### Data Files
- **site-config.ts:** Company name, phone (env-based), address, email, business hours, trust stats
- **testimonials.ts:** 6 typed testimonials from Essex County cities with service references
- **faq.ts:** 8 typed FAQ items covering cost, insurance, timeline, emergency, warranty, inspections

### Schema Addition
- `LeadFormSchema` added to `src/lib/schemas.ts` with name, email, phone, serviceNeeded validation

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] .gitignore blocking .env.example**
- **Found during:** Task 1 commit
- **Issue:** `.env*` pattern in .gitignore prevented committing `.env.example`
- **Fix:** Added `!.env.example` exception to .gitignore
- **Files modified:** .gitignore
- **Commit:** d6cf4e9

## Decisions Made

| ID | Decision | Rationale |
|----|----------|-----------|
| 02-01-01 | serviceGroups passed as prop to LeadForm | Keeps Zod/services data out of client bundle |
| 02-01-02 | PhoneNumber is server component | No interactivity needed, reads env at build |
| 02-01-03 | Added !.env.example to .gitignore | Default .env* was too broad |

## Verification Results

- TypeScript compiles without errors
- Full build succeeds (1,492 static pages generated)
- Server Action contains: 'use server', redirect, [LEAD] logging, GHL_WEBHOOK_URL, shouldRedirect
- LeadForm contains: useActionState, submitLead, optgroup, aria-live
- SubmitButton contains: useFormStatus, "Get My Free Estimate"
- PhoneNumber contains: tel:, aria-label
- 6 testimonials exported, 8 FAQ items exported
- siteConfig exports phone, address, trustStats

## Next Phase Readiness

All components from this plan are ready for consumption by:
- 02-02: Homepage (LeadForm in hero, testimonials, FAQ, PhoneNumber in header)
- 02-03: Contact page (LeadForm standard variant, site config for address/hours)
- 02-04: Thank you page (referenced by redirect in submitLead)
- 02-05: Service/city page templates (LeadForm with defaultService/defaultCity)
