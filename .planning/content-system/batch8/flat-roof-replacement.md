# Flat Roof Replacement — Draft Doc (Batch 8, entry #14 of 15)

serviceId: `flat-roof-replacement` · category: replacement-sub-pages · parentId: roof-replacement
isResidential: true · isCommercial: true · macro topic: full replacement of a low-slope/flat roof with a modern single-ply or modified-bitumen system.

## Rendered heading → content-field map

| Rendered H-tag (HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Flat Roof Replacement in Newark?" | `directAnswer` (38 words, ≤40) |
| H2 "What Flat Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (4: EPDM, TPO, PVC, modified bitumen) |
| H2 "How Do You Know If You Need Flat Roof Replacement?" | `signsHeading` + `signs[]` (7) |
| H2 "How Do Our Roofing Contractors Perform Flat Roof Replacement?" | `approachHeading` + `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Flat Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` — "Should you repair or replace your flat roof?" |
| H2 "Why Choose Our Roofing Company for Flat Roof Replacement?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` (flat sections / additions / porches) |
| Commercial block | `commercial{heading,content(2),ctaLabel}` (primary market; membrane selection + 25% permit threshold) |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

## Named sources → exact figure attributed

| Named source | Figure / fact used |
|---|---|
| InterNACHI life-expectancy chart | EPDM 15–25 yr; TPO 7–20 yr (flagged: commonly 15–25 yr in practice); modified bitumen 20 yr; built-up roofing (BUR) 30 yr |
| Single Ply Roofing Industry | PVC single-ply 20–30 yr |
| SPFA (Spray Polyurethane Foam Alliance) | Spray polyurethane foam 30+ yr when the protective coating stays maintained (commercial only) |
| NRCA and ARMA | flat roof needs ≥ ¼ inch per foot of slope to drain; ponding water > 48 hr = defect |
| Josten Roofing (NJ) | NJ EPDM $7.00–$10.00 / sq ft; NJ TPO $8.00–$12.00 / sq ft |
| HomeAdvisor and Modernize (NJ) | typical NJ roof replacement $10,000–$25,000 |
| N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | detached 1–2 family reroof = ordinary maintenance, no permit; commercial reroof > 25% of total area in 12 months requires a permit |
| N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | complete removal required when deck water-soaked/deteriorated or roof carries 2+ layers |
| ASTM C1549 + CRRC | white TPO/PVC cool-roof solar reflectance ~0.70–0.85 |
| Owens Corning warranty guidance | material warranty (factory defects) vs written workmanship warranty (labor); install-to-spec keeps system warranty intact |
| roofing industry guidance | flat-roof replace-vs-repair: > 25–30% membrane damage threshold (stricter than sloped); recurring same-spot leaks = systemic |

Product brands named (allowed — install/service only): Firestone, Carlisle, Johns Manville membrane systems. Membrane materials named: EPDM, TPO, PVC, modified bitumen, BUR, spray polyurethane foam.

## Counted enumerations (Rule 8)
- "4 flat-roof membrane systems: EPDM rubber, TPO, PVC, and modified bitumen" → subServices has exactly 4.
- approachContent "4 systems: EPDM rubber, TPO, PVC, and modified bitumen" → matches.
- residential permit nuance, commercial 25% threshold — no count mismatch.

## Self-audit checklist
- [x] Answer-first: directAnswer + first sentence of every overview/sign/approach/residential/commercial/faq/processStep is a bolded definitive answer; directAnswer = 38 words (≤40).
- [x] Zero modality in declaratives — grepped `will|should|need to|needs to|have to|must|might|may|would|could`: NONE. ("a flat roof requires ¼ inch per foot of slope for drainage" replaced the earlier "needs to drain"; "needs at least ¼ inch" governs a noun, not a verb.) "Should you repair…" and "Do you need a permit…" appear ONLY in `faqs[].question` (exempt).
- [x] Every hard number named-sourced: all lifespans → InterNACHI / Single Ply Roofing Industry / SPFA; slope ¼ in/ft + 48-hr ponding → NRCA and ARMA; $/sq ft → Josten Roofing; $10,000–$25,000 → HomeAdvisor and Modernize; 25% permit → N.J.A.C. 5:23-2.7; reflectance 0.70–0.85 → ASTM C1549 + CRRC. No invented "% of failures" figure (UNVERIFIED in pack — omitted).
- [x] approachSubheadings.length (3) === approachContent.length (3).
- [x] No de-fab literals (no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N years of experience", fabricated ratings/warranties). "free roof inspections" is the legitimate NQR business fact, not a "free roof" promise.
- [x] No outbound links / URLs in prose (grep clean).
- [x] credentialsHighlight exact 4-item array: ['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers'].
- [x] One macro topic (flat roof replacement) repeated in opening directAnswer and closing whyChooseUs/pricing.
- [x] TPO spread flagged ("7–20 years on the InterNACHI chart and commonly 15–25 years in practice").
- [x] Both a substantive residential block (flat sections, rear additions, porch roofs, dormers; ordinary-maintenance no-permit) AND a substantive commercial block (primary market; 4 membranes + SPF; 25% permit threshold; recover limits) per schema requirement.
- [x] No hype words (best/leading/trusted/premier/top-rated/seamless-as-praise) — grep clean.
- [x] financingNote frames a free written estimate + "discusses payment and financing options at the estimate" — NO fabricated rate/term.

## Compliance check (this page = material/replacement, not insurance/storm/fire)
- No public-adjuster claim, no deductible-waiver, no guaranteed-approval, no "free roof" promise — none present (this is not an insurance page; insurance pack used only as background §0).
- Not presented as overlay-equal-to-tear-off — N/A (no overlay framing); the recover-vs-tear-off rule is cited only as the N.J.A.C. 5:23-6.4 mandatory-removal condition.
- No fabricated financing.
