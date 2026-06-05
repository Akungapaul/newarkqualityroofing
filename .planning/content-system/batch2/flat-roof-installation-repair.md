# Flat Roof Installation and Repair — Answer-First Rewrite Draft

**serviceId:** `flat-roof-installation-repair`
**Batch:** 2 (full-site rewrite)
**Quality bar:** human-approved gold exemplar (`serviceId: 'roof-repair'`)
**Gate status:** `audit:semantics` hard-gate checks self-run — 0 modality-in-body, 0 outbound links, 0 `[VERIFY]`/de-fab literals, 0 `**` imbalance. directAnswer = 38 words. Every section/FAQ opens with a bolded ≤40-word answer.

---

## Rendered heading → field map

The rendered H1/H2s come from `HEADING_CONFIG.service` (heading-config.ts), NOT the legacy `signsHeading`/`approachHeading`/`heading` literals (those are kept only so the Zod schema validates). Each field's prose OPENS with a definitive answer to its rendered heading.

| Rendered heading (from heading-config) | Source field | Opening answer (bolded span) |
|---|---|---|
| **H1:** Who Provides Flat Roof Installation and Repair in Newark? | `directAnswer` | NQR installs and repairs flat/low-slope roofs across Newark and Essex County, servicing EPDM, TPO, and modified-bitumen membranes with manufacturer-approved bonding that keeps a system warranty intact, as a NJ HIC. |
| **H2:** What Flat Roof Installation and Repair Do We Provide? | `overview` (+ `subServices`) | NQR installs and repairs 3 flat-roof membrane systems across Essex County: EPDM rubber, TPO thermoplastic, and modified bitumen. |
| **H2:** How Do You Know If You Need Flat Roof Installation and Repair? | `signs` | Lead sign: ponding water held >48 hours after rain counts as a defect that breaks down membrane seams (a flat roof requires ≥¼ in/ft of slope to drain). |
| **H2:** How Do Our Roofing Contractors Perform Flat Roof Installation and Repair? | `approachContent` (+ `approachSubheadings`) | NQR contractors assess the drainage, the existing membrane, and the deck before specifying a scope, because a low-slope roof fails at the slope and the seam rather than the open field. |
| **H2:** How Much Does Flat Roof Installation and Repair Cost? | `pricing` (+ cost FAQ) | Flat-roof repair in NJ runs $2.50–$10.00/sq ft, or $300–$1,100 for a typical repair (HomeGuide). |
| **H2:** Should You Repair or Replace Your Roof? | FAQ "Should I repair or replace my flat roof?" | Repair when localized and under 25–30% of the membrane; replace when damage exceeds 25–30% or one spot leaks repeatedly (stricter for low-slope). |
| **H2:** Why Choose Our Roofing Company for Flat Roof Installation and Repair? | `whyChooseUs` (+ `credentialsHighlight`) | 4 de-fabricated reasons: NJ HIC, Insured, Free Roof Inspections, Local Essex County Roofers. |

Process detail lives in `processSteps` (6 steps: Drainage/Deck Assessment → Estimate/Membrane Selection → Permits/Ordering → Deck Prep/Tapered Insulation → Membrane Install/Seam Verification → Penetration Detailing/Verification/Warranty). Residential vs commercial perspective lives in `residential` / `commercial`.

---

## Material grounding (the page's macro context: low-slope membranes + drainage)

Flat Roof Installation and Repair is grounded in its real low-slope material facts, not steep-slope shingle facts. The page covers exactly 3 membrane systems (count matches the items listed everywhere): EPDM, TPO, modified bitumen.

---

## Named sources used (with the figures asserted in-text)

Every hard number is attributed in-text to a named authority that appears in the fact packs. No number was invented.

| Figure asserted on-page | Named authority (in-text) | Fact pack |
|---|---|---|
| EPDM lasts **15–25 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 |
| TPO lasts **7–20 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 |
| Modified bitumen lasts **20 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 |
| Built-up roofing (BUR) lasts **30 years** | InterNACHI life-expectancy chart | facts-materials-economics §0 |
| Flat roof requires **≥ ¼ inch per foot of slope** to drain | NRCA and ARMA | facts-causes-signs §2.7; gold exemplar |
| **Ponding water > 48 hours = defect** | NRCA and ARMA | facts-causes-signs §2.7 |
| Standing water weighs **~5 lb per inch per sq ft**; **1-in pond over 100 sq ft ≈ 500 lb** | NRCA and ARMA | facts-causes-signs §2.7 (ARMA "Ponding Water Basics") |
| EPDM fails most often at **the seams** / membrane shrinkage at perimeter (qualitative) | InterNACHI + trade guidance | facts-materials-economics §4 (EPDM seam separation, shrinkage/creep) |
| TPO fails at **the heat-welded seams** (qualitative) | InterNACHI + trade guidance | facts-materials-economics §4 (TPO welded-seam failure) |
| Modified bitumen develops **blistering / alligator cracking** from UV/oxidation (qualitative) | (descriptive, trade) | facts-materials-economics §4 |
| Flat-roof repair **$2.50–$10.00 / sq ft, or $300–$1,100** typical | HomeGuide | facts-materials-economics §4 |
| Minor flat-roof leak **$150–$500**; extensive + structural **$1,200–$3,000** | Angi | facts-materials-economics §4 |
| NJ EPDM install **$7.00–$10.00 / sq ft**; NJ TPO **$8.00–$12.00 / sq ft** | Josten Roofing (NJ) | facts-materials-economics §7 |
| NJ ranges sit **10–40% above national** | Integrity Home Exteriors / Josten Roofing (NJ) | facts-materials-economics §7 |
| Repair vs replace: replace when **>25–30% of membrane** damaged (stricter on low-slope); recurring same-spot leak = systemic | flat-roof industry guidance (Parish/Modernize/HomeAdvisor) | facts-materials-economics §4 |
| Commercial roof: repairing **>25% of total roof area in 12 months requires a permit** | N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code | facts-nj-regulatory-climate §1.2 |
| Detached 1- and 2-family roof covering = **ordinary maintenance, no permit** | N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code | facts-nj-regulatory-climate §1.1 |
| Complete removal required when water-soaked or **2+ layers** exist (no recover-over) | N.J.A.C. 5:23-6.4 / NJ Rehabilitation Subcode | facts-nj-regulatory-climate §1.4 |
| NJ HIC registration required of every NJ roofing contractor | NJ Division of Consumer Affairs | facts-nj-regulatory-climate §2; sources Part A |
| Liability coverage required of a registered HIC | Contractors Registration Act | facts-nj-regulatory-climate §2.3 |
| Manufacturer system warranty vs written workmanship warranty (labor) | Owens Corning warranty guidance | facts-process-standards §3 |
| Documentation/estimate-before-work sequence | Integrity Home Exteriors | facts-process-standards §1 |

**Freeze-thaw handled qualitatively (KNOWN TRAP respected):** the page states "Newark crosses the 32°F freezing point repeatedly through winter, and the freeze-thaw cycling stresses membrane seams and adhesives" — NO cycles-per-winter COUNT is rendered (the count is `[UNVERIFIED]` in facts-nj-regulatory-climate §3.2). The 25.5°F January-low figure was deliberately omitted from the flat-roof page to keep the freeze-thaw mention strictly qualitative.

**Brands installed (not certified):** Firestone, Carlisle, and Johns Manville named as membrane systems NQR "installs and services" — matches the gold exemplar's commercial-membrane brand statement and Source Register Part B ("installing ≠ certified"). No "GAF Certified" / "Master Elite" credential asserted.

---

## Withheld NQR specifics ([VERIFY] — omitted, never rendered, never placeholdered)

Per D-01 and the prompt, the following NQR business specifics are flagged `[VERIFY]`/unverified in `sources-and-nqr-facts.md` Part B and were OMITTED or stated qualitatively — never rendered as a literal placeholder in the snippet:

1. **NJ HIC license number** (13VH######00 format) — stated qualitatively as "holds New Jersey Home Improvement Contractor registration"; number omitted.
2. **Physical street address / ZIP / geo coordinates** — omitted entirely (service-area framing only: Essex County + named cities).
3. **Phone number** — omitted (no hardcoded number; fabricated `(973) 555-0123` forbidden).
4. **Years in business / founding year** ("15+ years") — omitted; no tenure claim rendered.
5. **Projects-completed count** ("500+ projects") — omitted.
6. **Aggregate rating / review counts / star ratings / "top-rated" / "5-star"** — omitted.
7. **GAF certification tier / "GAF Certified" / "Master Elite"** — omitted; brands named only as systems NQR installs/services.
8. **Manufacturer warranty term** ("up to 50 years") — omitted; warranty stated qualitatively (manufacturer system warranty vs written workmanship warranty).
9. **NQR workmanship warranty length** — omitted (not in repo); stated qualitatively as "a written workmanship warranty."
10. **"24/7" / "same-day" / emergency-response / callback-time claims** — omitted; hours stated only in the de-fabricated `whyChooseUs` Local Essex County Roofers reason (Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM, from `site-config.ts`).
11. **"0% financing" / financing terms** — omitted; `pricing.financingNote` deliberately NOT included (gold-exemplar treatment).
12. **BBB rating / "fully bonded" / workers'-comp dollar statement** — omitted; only "Insured" rendered (the Contractors Registration Act liability requirement).
13. **Freeze-thaw cycles-per-winter count** — omitted (KNOWN TRAP); freeze-thaw stated qualitatively only.

---

## De-fabrication parity with the gold exemplar

- `pricing.range` uses a material-appropriate sourced cost ($300–$1,100+ for most flat-roof repairs, from HomeGuide), mirroring the gold roof-repair `$200–$1,000+ for most repairs`.
- `pricing.financingNote` OMITTED (0% financing is fabricated) — matches gold.
- `whyChooseUs.reasons` = the same 4 de-fabricated reasons the gold uses (NJ Home Improvement Contractor, Insured, Free Roof Inspections, Local Essex County Roofers).
- `credentialsHighlight` = `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']` — matches gold (legacy "GAF Certified Contractor / Fully Insured & Bonded / 15+ Years" stripped).
- Legacy structural fields kept verbatim for Zod validity: `serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings` (rewritten to descriptive sub-section labels), `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel`.
