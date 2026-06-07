# Re-Roofing — Draft Doc (Batch 8, entry #3 of 15)

serviceId: `re-roofing` | parentId: `roof-replacement` | category: `replacement-sub-pages`
isResidential: true · isCommercial: true · MACRO TOPIC: re-roofing = replacing a worn roof covering with a new roofing system when age/condition crosses the replace threshold.

## Rendered-heading → content-field map

| Rendered H-tag (HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Re-Roofing in Newark?" | `directAnswer` (39 words, ≤40) |
| H2 "What Re-Roofing Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Re-Roofing?" | `signs[]` (8); `signsHeading` label |
| H2 "How Do Our Roofing Contractors Perform Re-Roofing?" | `approachContent[]` (3) + `approachSubheadings[]` (3) |
| H2 "How Much Does Re-Roofing Cost?" | `pricing.range` + `pricing.factors[]` (5) + `pricing.financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` — repair-vs-replace FAQ (re-roof at >25–30% area / 50% cost; repair if localized + <10–15 yr) |
| H2 "Why Choose Our Roofing Company for Re-Roofing?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

## Named sources used → exact figure attributed

- **InterNACHI life-expectancy chart** — 3-tab asphalt 20 yr; architectural asphalt 30 yr; metal 40–80 yr; copper 70+; slate 60–150 yr; EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr.
- **NRCA** — actual asphalt life varies up to 40% with climate/install/maintenance; attic ventilation extends roof life up to 25%; low-slope ¼ in/ft slope + ponding >48 hr = defect (with ARMA).
- **National Slate Association** — premium slate commonly 100-plus years.
- **ARMA** — re-roofing definition (recover OR replace); tear-off exposes deck for inspection/repair; a recover hides deck rot; recover-unsuitable conditions; ¼ in/ft slope (with NRCA).
- **Mordor Intelligence** — replacement = 79.2% of US roofing installations in 2025.
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — detached 1–2-family re-roof of the covering = ordinary maintenance, no permit; commercial repair >25% of total roof area in 12 months requires a permit.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** + **IRC R908.3.1.1** — full removal required when existing roof water-soaked/deteriorated, is wood shake/slate/clay/cement/asbestos-cement tile, or carries 2+ applications.
- **IRC R908 / ARMA** — reroofing = recovering or replacing; R908 reroofing section.
- **IRC R905.1.2** — ice barrier from eave to ≥24 in inside the exterior wall line.
- **Angi** — overlay/recover traps heat that industry estimates cut shingle service life ~20–30%.
- **HomeGuide** — tear-off/removal cost $1–$3/sq ft shingles, $2–$5/sq ft slate/tile (national); NJ labor 60–70%; NJ ranges 10–40% over national (with Integrity Home Exteriors).
- **HomeAdvisor + Modernize (NJ)** — NJ re-roof $10,000–$25,000; 2025 national avg near $10,000–$11,000.
- **Josten Roofing (NJ)** — NJ $/sq ft: architectural asphalt $6.50–$11.00, metal $9.00–$16.00, slate $10–$30.
- **WeatherShield / RapidRestore / MyQuoteIQ / Home Depot / Kelly Roofing** — 25% area rule, 50% cost rule, 30% cost rule, age rule (20 yr / 15 coastal), 3-repairs-in-2-yr rule; localized repair 5–10× less than re-roof while roof <10–15 yr.
- **GAF** — granule loss >30% of surface = beyond repair; sagging/spongy deck.
- **This Old House** — daylight through deck.
- **Zonda Cost vs Value** — asphalt re-roof recoups ~60–68%; 8 of top 10 highest-ROI remodels are exterior replacement.
- **NOAA 1991–2020 normals (Newark Liberty/EWR)** — average January low ~25.5°F (freeze-thaw stress).
- **Owens Corning** — material warranty (factory defects) vs written workmanship warranty.
- **Integrity Home Exteriors** — verification/cleanup; NJ labor ~60–70%; NJ 10–40% over national.
- 2024 roofing-market data — asphalt ~73% of US residential roofs (stated as market data, no precise source claimed as primary).

## Compliance / Batch-8 cautions — handled

- TEAR-OFF / RE-ROOFING page (per facts-replacement-reroofing-insurance §0 rule 5 & §6): full tear-off exposes the deck for inspection — deck/recover rules attributed to **IRC R908.3.1.1** and **N.J.A.C. 5:23-6.4**; deck-hide fact attributed to **ARMA/InterNACHI**. Wood shake included in the 5:23-6.4 list, NOT attributed to the model IRC list (model IRC list cited only via R908.3.1.1 for the three non-wood-shake conditions; NJ list cited via 5:23-6.4). Recover conditions cited to R908.3.1.1, never bare "R908.3".
- Overlay NOT presented as equal to a tear-off: the recover is framed as hiding deck rot and trapping heat that cuts shingle life ~20–30% (Angi); tear-off is the method that exposes the deck. No claim a recover equals a tear-off.
- Permit nuance: detached 1–2-family re-roof = ordinary maintenance, no permit (N.J.A.C. 5:23-2.7); commercial re-roof requires a permit (25% threshold).
- No insurance-claim / public-adjuster framing on this page (not an insurance/storm/fire page) — no claim-handling, no deductible language, no guaranteed-approval, no "free roof" claim. (The only "free" assertions are "Free Roof Inspections" / "free written estimate" — verified NQR business facts, not the banned "free roof" replacement claim.)
- `pricing.financingNote` framed qualitatively ("free written estimate and reviews financing options at the estimate") — NO 0% / invented rate or term.
- All dollar figures NJ-named (HomeAdvisor/Modernize/Josten) or explicitly labeled national (HomeGuide tear-off $/sq ft).

## Self-audit checklist

- [x] Answer-first: first sentence under every heading is a definitive ≤40-word answer, **bold**-wrapped (directAnswer 39 words; overview[0], signs each, approachContent[0], residential[0], commercial[0], every FAQ answer lead, every signs item lead). Second paragraphs of overview/residential/commercial are expansion (unbolded) — matches gold exemplar.
- [x] Zero modality in declarative prose: grep for will/should/must/might/may/would/could/need to/have to → only hit is FAQ question "Should you repair or replace your roof?" (exempt). No `may`/`will`/`would`/`could`/`must`/`might` in any declarative.
- [x] Every hard number named-sourced in-text: 20/30/40–80/60–150-yr lifespans → InterNACHI; 40% variance + 25% ventilation → NRCA; 79.2% → Mordor Intelligence; 25%/50%/30%/age/3-repairs rules → WeatherShield/RapidRestore/MyQuoteIQ/Home Depot; 5–10× → Home Depot/Kelly Roofing; >30% granule → GAF; 20–30% overlay haircut → Angi; $1–$3/$2–$5 tear-off → HomeGuide; $10,000–$25,000 → HomeAdvisor/Modernize; $6.50–$11.00 / $9–$16 / $10–$30 → Josten Roofing; 60–68% ROI + 8-of-top-10 → Zonda Cost vs Value; 25.5°F → NOAA; ¼ in/ft + 48 hr → NRCA/ARMA; ≥24 in ice barrier → IRC R905.1.2; 100+ slate → National Slate Association; ~73% → 2024 roofing-market data.
- [x] No fabricated/UNVERIFIED figures: no "% of failures" invented stat; overlay haircut kept as the ~20–30% Angi range (not the demoted 40%); no roof-only claim payout; no NJ/Essex overlay cost asserted (tear-off $/sq ft labeled national).
- [x] Counted plurals match item counts: "5 roof systems" (subServices=5); "5 contractor-consensus rules" (named 5 in approachContent[0]); "5 material classes" (overview + approach); "5 classes" in process + FAQ.
- [x] approachSubheadings.length (3) === approachContent.length (3).
- [x] No de-fab literals (24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N+ years, VERIFY/UNVERIFIED) anywhere.
- [x] No outbound links / URLs in prose.
- [x] No entity pronoun co-reference (repeats "the deck", "the recover", "the roof covering", "Newark Quality Roofing", "a re-roof").
- [x] credentialsHighlight exact 4-item array: ['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers'].
- [x] One macro topic (re-roofing) repeated in opening directAnswer and closing whyChooseUs/pricing; linear context vector definition → signs → process → cost.
- [x] Insurance/storm/fire compliance: N/A page-type, but verified — no public-adjuster / deductible-waiver / guaranteed-approval / "free roof" claim present.
- [x] Overlay compliance: recover never presented as equal to a tear-off.
- [x] Parses as one array element (eval test passed); all schema array bounds satisfied; residential{} and commercial{} blocks both substantive (2 paragraphs each).
