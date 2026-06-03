---
status: partial
phase: 11-ia-routing-canonical-data-url-classification
source: [11-VERIFICATION.md, 11-REVIEW.md]
started: 2026-06-03
updated: 2026-06-03
---

## Current Test

[awaiting human visual sign-off on item 1; items 2–4 confirmed at HTTP level by the orchestrator]

## Tests

### 1. TrustBar renders credibly without fabricated/placeholder values (WR-07)
expected: The homepage TrustBar shows real credentials without an empty-feeling placeholder. The 3 badge entries currently render the literal "Yes" as a large `text-3xl` value above each label ("Yes / Licensed & Insured", "Yes / Free Roof Inspections", "Yes / Local Essex County Roofers"). The fabricated 5.0 rating / 500+ projects were correctly removed from the stat grid + JSON-LD by plan 11-01. Decide whether the bare "Yes" headline reads acceptably or should be dropped/badge-styled.
result: [pending — human visual judgment]
disposition: advisory (Warning WR-07). Not a fabricated value and not a Phase-11 must-have failure; candidate for `/gsd:code-review 11 --fix` or Phase 16 trust polish.

### 2. KB routes resolve collision-free at HTTP 200 (SC-4, D-10)
expected: /roofing-knowledge-base/, all 6 cluster hubs, and the 44 nested KB-article URLs resolve at 200 with robots:{index:false,follow:true} and one <h1>.
result: PASS — verified via `next start` on the production build. /roofing-knowledge-base 200; /roofing-knowledge-base/roof-problems 200; nested /roofing-knowledge-base/roofing-process/how-do-roofing-contractors-repair-leaks → 200, `<meta name="robots" content="noindex, follow">`, exactly 1 <h1>. 51 KB paths prerendered (hub + 6 clusters + 44 articles).

### 3. /roofing-glossary resolves via a dedicated route at HTTP 200 (SC-4, D-11)
expected: /roofing-glossary returns 200 from its own dedicated route (not the flat [slug] dispatcher).
result: PASS — /roofing-glossary 200 (dedicated route confirmed; excluded from the [slug] dispatcher's generateStaticParams via the CR-01 fix).

### 4. Hub-migration redirects return permanent 301/308 to the new targets (SC-2, D-07)
expected: /services → /roofing-services, /locations → /service-areas, /resources → /roofing-knowledge-base as permanent redirects; renamed core pages serve at the new slugs.
result: PASS — /services, /locations, /resources each return HTTP 308 (Next.js method-preserving permanent redirect, SEO-equivalent to 301) to the correct targets; /roofing-services 200 and /service-areas 200. Pre-existing flat-roof + www redirects preserved; unknown slug → 404; keep combo 200; noindex combo 200 + `noindex,follow`.

## Summary

total: 4
passed: 3
issues: 0
pending: 1
skipped: 0
blocked: 0

## Gaps

(none — no must-have failures. The 1 pending item is an advisory visual sign-off. Related but OUT OF PHASE-11 SCOPE: the homepage hero subcopy in `src/components/sections/HeroSection.tsx` still renders "backed by 500+ five-star reviews" — a fabricated trust claim in body copy, pre-existing since commit 564ded0 (2026-03-12), untouched by Phase 11. Sitewide trust-copy scrubbing is assigned to Phase 16 [audit:trust]. Phase 11's D-01 scope was the single-source canonical config + the JSON-LD AggregateRating gate, both delivered.)
