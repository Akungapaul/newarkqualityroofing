# Silicone Elastomeric Roof Coating — Draft Doc (Batch 6, entry 5/5)

**serviceId:** `silicone-elastomeric-roof-coating`
**isResidential:** false · **isCommercial:** true
**Macro angle:** the ELASTOMERIC-COATING CATEGORY + the silicone-vs-acrylic SELECTION decision + elongation / thermal-movement accommodation.
**Differentiation vs `silicone-roof-coating` (page 4):** page 4 = the silicone restoration *service* (full ponding/prep/recoat-vs-tear-off treatment). This page (page 5) = the elastomeric-coating *category* framing — the 4 RCMA chemistries, the silicone-vs-acrylic decision threshold, and the elongation/movement angle. Prep and ponding are SUMMARIZED here, not given the full page-4 treatment (R22/R32 information gain).

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by |
|---|---|
| H1: Who Provides Silicone Elastomeric Roof Coating in Newark? | `directAnswer` |
| H2: What Silicone Elastomeric Roof Coating Do We Provide? | `overview[]` + `subServices[]` (4 RCMA chemistries + selection) |
| H2: How Do You Know If You Need Silicone Elastomeric Roof Coating? | `signs[]` (label: `signsHeading`) |
| H2: How Do Our Roofing Contractors Perform Silicone Elastomeric Roof Coating? | `approachContent[]` / `approachSubheadings[]` (3 each) |
| H2: How Much Does Silicone Elastomeric Roof Coating Cost? | `pricing.range` + `pricing.factors[]` |
| H2: Should You Repair or Replace Your Roof? | `faqs[2]` — "Should you repair, recoat, or replace your roof?" |
| H2: Why Choose Our Roofing Company …? | `whyChooseUs.reasons[]` (5) |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

---

## Named sources → exact figure each is attributed to

| Named source | Figure / fact attributed in-text |
|---|---|
| **RCMA** | 4 elastomeric chemistries recognized; silicone resists ponding; acrylic re-emulsifies under immersion + most acrylic warranties exclude ponded areas; coating = negligible R-value (savings from reflectance); clean+dry prep, "primer is no substitute for cleaning"; recoat at a fraction of tear-off cost, avoids landfill; 10/15/20-yr warranty scales with DFT; silicone recoats only with silicone; polyurethane tensile floor 1,500 psi; coating "classified as maintenance" (defers tax to owner's professional); NJ cool-roof peak-cooling framing |
| **ASTM D6694** | silicone elastomeric chemistry standard |
| **ASTM D6083** | acrylic (water-dispersed latex) chemistry standard |
| **ASTM D6947** | polyurethane chemistry standard |
| **ASTM D412** | Simiron TEKTOP silicone **279% elongation** |
| **ASTM D2370** | Acrymax AF-130FR acrylic **220% elongation** |
| **Simiron / Acrymax (product data)** | the 279% / 220% datasheet elongation values |
| **CRRC** | white coating initial SR **~0.80–0.88**; emittance **~0.85–0.92**; Henry Tropi-Cool **0.88→0.73** at 3 yr; Mule-Hide A-300 **0.87→0.75** at 3 yr; CRRC = successor to ended ENERGY STAR roof program |
| **Henry / Mule-Hide / Gaco / GE-Momentive / Western Colloid** | dirt-pickup vs ponding trade-off; 90% vs 50–60% solids / one-coat vs two-coat; moisture-cure; adhesion test 24-hr / epoxy primer for bleed-through; silicone-over-silicone recoat limitation |
| **SPFA + RCMA** | recoat cycle **~10–15 yr acrylic / ~15–20 yr silicone** (cross-ref §6) |
| **EPA** | reflective roof reduces **peak summer cooling demand 11–27%** in air-conditioned buildings (peak demand, NOT annual bill) |
| **DOE** | energy effect = lower surface temp not insulation; NJ heating-penalty / net-benefit-depends-on-climate caveat |
| **NJ Uniform Construction Code (N.J.A.C. 5:23-2.7)** | re-roof/recoat of covering on detached 1–2-family = ordinary maintenance, no permit |
| **NJ Division of Consumer Affairs / Contractors Registration Act** | NJ HIC registration + liability-coverage requirement |
| regional NJ cost guidance | NJ ranges **10–40%** above national (labor + stricter code) |

**Climate caveat applied:** Newark = IRC Climate Zone 4–5 (heating-dominated); reflective roof = winter heating penalty; net annual benefit climate/insulation-dependent (§0.4).

---

## Compliance with the hard gate (§0 corrections honored)

- **No ENERGY STAR** for any coating — CRRC used throughout (§0.1). CRRC named as "the third-party rating system that succeeded the ended ENERGY STAR roof program."
- **No federal 30% solar/insulation credit** touted — credits not mentioned (coating page; §0.2). §25C is repealed; not invoked.
- **No R-value / "insulating coating" claim** — explicit "adds negligible R-value and does not insulate; energy effect comes from reflectance and emittance" (§0.3).
- **No fabricated savings %** — only EPA's 11–27% PEAK cooling demand, framed as peak demand not annual bill (§0.4).
- **No NQR certification claim** — NQR "references" / "applies" / "selects"; never "CRRC certified", "RCMA certified", or any installer status (§0.6).
- **No hard NQR coating price** — pricing.range = free written estimate + "a fraction of tear-off and replacement cost"; cost factors qualitative or attributed (§0.9).
- **Standard hygiene** — silicone = D6694 (not D6511); acrylic = D6083; polyurethane = D6947; elongation via D412/D2370 manufacturer datasheet values, NOT invented in-standard minimums (§0.10).
- **Differentiation from page 4** — prep/ponding summarized; focus on chemistry selection + elongation/movement; comparison proposition (silicone-over-acrylic-when-ponding / acrylic-over-silicone-when-dirt-pickup) drives the page.

---

## Self-audit checklist

- [x] **Answer-first, bolded openers** — directAnswer (40 words, 290 chars, ≤40/≤320); every `overview[0]`, `approachContent[*]`, `signs[*]`, `residential[0]`, `commercial[0]`, and `faqs[*].answer` opens with a bolded answer clause ≤40 words (verified max = 37). `overview[1]` is continuation prose (no bold) — matches gold exemplar pattern.
- [x] **Zero modality in declaratives** — grep for `will|should|need to|needs to|have to|must|might|may|would|could` (lowercase) returns ZERO. "Should you…" appears only in `faqs[].question` (exempt). Removed "owner may expense" → "an owner may expense" dropped to "classifies a coating as maintenance"; "may need an epoxy primer" → "takes an epoxy primer".
- [x] **Every number named-sourced** — 279% (ASTM D412/Simiron), 220% (ASTM D2370/Acrymax), 0.80–0.88 / 0.85–0.92 (CRRC), 0.88→0.73 / 0.87→0.75 (CRRC/Henry/Mule-Hide), ~90% / 50–60% solids (Gaco/Henry/Mule-Hide), 10/15/20-yr (RCMA/Henry/Mule-Hide), 10–15 / 15–20 yr recoat (SPFA/RCMA), 1,500 psi (RCMA), 11–27% (EPA), 24-hr (Gaco), 25–30% (RCMA flat-roof), 10–40% (regional NJ), Zone 4–5 (IRC), 5:23-2.7 (NJ UCC). No bare numbers.
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|N+ years|[VERIFY]|[UNVERIFIED]|ENERGY STAR rated/certified|30% federal/tax` returns ZERO. ("24-hour adhesion test" is a Gaco-sourced figure, not "24/7".)
- [x] **No outbound links / URLs** — grep for `https?://|www.|<a href|](` returns ZERO.
- [x] **No hype words** — grep for `best|leading|trusted|premier|unbeatable|amazing|seamless|world-class|cutting-edge|renowned|exceptional|stunning` returns ZERO.
- [x] **Entity pronouns** — no `it/they/this/that/there` co-referring a named entity; the one `them` ("the roof needs them") was rewritten to "a roof that needs the extra prep".
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **Counted plurals** — "4 elastomeric chemistries: silicone (ASTM D6694), acrylic (ASTM D6083), polyurethane (ASTM D6947), and SEBS"; subServices = 4 (3 chemistries + selection; SEBS named in overview, the 3 spec'd chemistries get sub-items + a selection item).
- [x] **Schema field set + cardinality** — overview 2, subServices 4, signs 6, approachContent 3, residential.content 2, commercial.content 2, processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 5. Parses as one array element (trailing comma).
- [x] **One macro topic, n-gram repeat** — "silicone elastomeric roof coating" in directAnswer (open) and whyChooseUs / faqs (close); page stays on the elastomeric-coating selection topic end to end.
