# Silicone Roof Coating — Batch-6 Draft (serviceId: silicone-roof-coating)

Entry #4 of 5, energy-solar category. isResidential=false, isCommercial=true.
Macro angle = the **silicone RESTORATION coating service** (ponding resistance,
reflectivity, recoat-instead-of-tear-off). Differentiated from page 5
(`silicone-elastomeric-roof-coating` = the elastomeric CATEGORY + silicone-vs-acrylic
selection + elongation/movement). No duplicate full chemistry-comparison treatment here.

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Field that answers it |
|---|---|
| H1 "Who Provides Silicone Roof Coating in Newark?" | `directAnswer` |
| H2 "What Silicone Roof Coating Do We Provide?" | `overview[]` + `subServices[]` |
| H2 "How Do You Know If You Need Silicone Roof Coating?" | `signs[]` (`signsHeading` = label) |
| H2 "How Do Our Roofing Contractors Perform Silicone Roof Coating?" | `approachContent[]` / `approachSubheadings[]` |
| H2 "How Much Does Silicone Roof Coating Cost?" | `pricing.range` + `pricing.factors[]` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[]` item "Should you repair or replace your roof?" |
| H2 "Why Choose Our Roofing Company for Silicone Roof Coating?" | `whyChooseUs.reasons[]` |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` |
| FAQ | `faqs[]` |

## Named sources → exact figure attributed

| Named source | Figure / fact attributed on page |
|---|---|
| ASTM (D6694) | ASTM D6694 governs liquid-applied silicone for SPF roofing; principal polymer >95% silicone |
| ASTM C1549 / CRRC | cool-roof reflectance/emittance rated by CRRC under ASTM C1549; successor to retired ENERGY STAR roof label |
| CRRC + Henry + Mule-Hide | initial solar reflectance ~0.80–0.88; thermal emittance ~0.85–0.92 |
| CRRC + Henry | aged reflectance ~0.88→0.73 at 3 yr (Henry Tropi-Cool) — silicone holds dirt, reflectance drops faster than emittance |
| RCMA / Gaco / Tremco / Henry / GE-Momentive | 100% silicone resists permanent/standing water without softening (hydrophobic Si-O backbone) |
| RCMA + Western Colloid | acrylic re-emulsifies under continuous immersion; most acrylic warranties exclude ponded areas |
| Henry + RCMA | silicone = single-component moisture-cure (atmospheric moisture), enables colder/higher-humidity application |
| Gaco + Henry + Mule-Hide | high-solids ~90%; ~1.5 gal/100 sq ft → ~22 dry mils |
| RCMA + Henry + Mule-Hide + Gaco | warranty scales with DFT: ~20–22 mils → 10–15 yr; ~30 mils → 15–20 yr; renewable 10/15/20-yr |
| RCMA + Gaco | recoat-vs-tear-off; maintained silicone roof recoated at ~15–20 yr interval; recoated again |
| Gaco | 24-hr adhesion test before full coat; aged asphalt takes epoxy primer for bleed-through |
| RCMA + Gaco + Henry | "a primer is no substitute for thorough cleaning"; clean + fully dry first; reinforce details |
| Gaco + RCMA | cured silicone recoated with silicone only, not acrylic/urethane |
| RCMA + DOE + CRRC | coating adds NO meaningful R-value; benefit from reflectance, never insulation (§0.3) |
| DOE | reflective roof stays >50°F cooler than conventional roof on a sunny afternoon |
| EPA | cool roof reduces PEAK cooling demand 11–27% in air-conditioned residential buildings (NOT an annual bill %) |
| DOE | NJ heating-climate caveat: smaller net annual benefit in Climate Zone 4–5 (§0.4) |
| SPFA + NRCA | SPF UV-sensitive, stays serviceable only while coated; silicone recoat cycle ~15–20 yr (§6) |
| NRCA + ARMA + RCMA | flat roof needs ≥¼ in/ft slope to drain; ponding >48 hr |
| RCMA | coatings "typically classified as maintenance" — defers tax treatment to owner's tax professional (qualitative only) |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | re-roof/repair of covering on detached 1–2-family = ordinary maintenance, no permit |

## Differentiation from `silicone-elastomeric-roof-coating` (page 5)

- THIS page: silicone RESTORATION service — ponding resistance, reflectivity, recoat-vs-tear-off,
  surface prep, DFT/warranty, silicone-over-silicone limitation, SPF recoat.
- Page 5: elastomeric CATEGORY framing + silicone-vs-acrylic SELECTION decision (ponding → silicone;
  dirt-pickup/recoatability → acrylic) + elongation/movement accommodation.
- This page mentions acrylic ONLY as the ponding-limitation contrast that justifies silicone for
  restoration — it does NOT run the full silicone-vs-acrylic chemistry comparison or the elongation
  deep-dive. No duplicate full treatment.

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer (36 words / 254 chars, bolded); overview[0],
  every signs[], every approachContent[], residential[0], commercial[0], every faqs[].answer leads
  with a `**bolded answer clause**` ≤40 words. Verified by script.
- [x] **Zero modality in declaratives** — grep `will|should|need to|have to|must|might|may|would|could`
  outside `faqs[].question` returns 0 hits. ("Should you repair or replace your roof?" is a FAQ
  question — exempt.) Removed `may be expensed` → `typically classified as maintenance`.
- [x] **Every number named-sourced** — all numeric tokens (0.80–0.88, 0.85–0.92, 0.73, 11–27%, >50°F,
  1.5 gal/100 sq ft, 22 mils, 30 mils, 10/15/20 yr, 15–20 yr, >95%, 90%, ¼ in/ft, 48 hr, ASTM D6694,
  ASTM C1549, N.J.A.C. 5:23-2.7) carry an in-text named source from the fact packs. No invented numbers.
  No hard coating COST $ figure (per §0.9 — free-estimate framing).
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **Counted plurals** — no bare enumerated set without its integer; subService/process sets are
  named lists, each list item self-introduces its own figure.
- [x] **No de-fab literals** — no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated",
  "500+", "N+ years of experience", "15+", fabricated rating/phone/address, `[VERIFY]`/`[UNVERIFIED]`.
  Grep returns 0.
- [x] **No banned standard** — D6511 absent; uses ASTM D6694 (correct, §0.10).
- [x] **No ENERGY STAR roof claim** — ENERGY STAR named only historically ("the retired ENERGY STAR
  roof program/label"), CRRC used as the active program (§0.1).
- [x] **No federal solar/insulation tax-credit tout** — not applicable; tax framing is the RCMA
  maintenance-vs-capital qualitative note, defers to owner's tax professional.
- [x] **No R-value/insulation claim for the coating** — explicitly states "adds no meaningful R-value;
  benefit comes from reflectance, never insulation" (§0.3).
- [x] **NJ heating caveat present** — "smaller net annual benefit in Newark's heating-dominated
  Climate Zone 4 to 5, per the DOE" (§0.4); EPA figure framed as PEAK demand, not annual bill.
- [x] **No NQR certification claim** — no "CRRC certified", "GAF certified", "NABCEP certified". Names
  Gaco/Henry/Mule-Hide as products NQR installs (allowed); CRRC/ASTM/EPA/DOE/RCMA/SPFA as authorities.
- [x] **No outbound links / URLs** — grep `http|www.|](|<a ` returns 0.
- [x] **No pronoun co-reference** — repeats "the coating", "silicone roof coating", "Newark Quality
  Roofing", "the roof"; no it/they/this/that/there standing for a named entity.
- [x] **No hype words** — grep best/leading/trusted/premier/top-rated/unbeatable/amazing/seamless/
  world-class/cutting-edge returns 0. ("monolithic membrane" used as a technical descriptor, not hype.)
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Primary n-gram repeated** — "silicone roof coating" in directAnswer (opening) and in
  whyChooseUs + pricing + FAQ (closing).
- [x] **Schema field counts** — overview 2, subServices 5, signs 6, approachContent 3, residential 2,
  commercial 3, processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 5. All within bounds.
- [x] **Parses as one array element** — leading `// ─── 4. ... ───` comment, `{ ... },` drop-in;
  validated by node eval (`PARSE OK; elements=1`).
