# Roof Vent Installation Repair — Draft Doc (Batch 5, entry #8 of 10)

**serviceId:** `roof-vent-installation-repair` · **category:** components-specialty · isResidential=true, isCommercial=true
**Primary n-gram:** "roof vent" / "roof vent installation repair" (opens in directAnswer, closes in pricing + whyChooseUs).
**Strongest differentiated claim:** NEVER mix two exhaust-vent types over a shared attic (ridge + power fan / ridge + gable / ridge + box/turbine) — it short-circuits airflow and the lower exhaust reverses into an intake that pulls in wind-driven rain/snow. (Air Vent Inc./Paul Scelsi; RAVC; GAF.) Carried in overview, signs[3][4][6], approach[1], processSteps[3], faqs[0][4], pricing, whyChooseUs.

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 — Who Provides Roof Vent Installation Repair in Newark? | `directAnswer` |
| H2 — What Roof Vent Installation Repair Do We Provide? | `overview[]` + `subServices[]` (5 exhaust types) |
| H2 — How Do You Know If You Need Roof Vent Installation Repair? | `signs[]` (7) under `signsHeading` label |
| H2 — How Do Our Roofing Contractors Perform Roof Vent Installation Repair? | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 — How Much Does Roof Vent Installation Repair Cost? | `pricing.range` + `pricing.factors[]` (5) |
| H2 — Should You Repair or Replace Your Roof? | covered in `faqs[5]` (permit) + repair-vs-add-exhaust logic in `faqs[0]` |
| H2 — Why Choose Our Roofing Company…? | `whyChooseUs.reasons[]` (5) |
| Residential block | `residential{heading,content[2],ctaLabel}` |
| Commercial block | `commercial{heading,content[2],ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (6) |

---

## Named sources → exact figure / claim attributed

| Named source | Figure / claim used in copy |
|---|---|
| IRC Section R806.2 (ICC, NJ-adopted via N.J.A.C. 5:23) | Minimum net free ventilating area = **1/150** of the vented attic floor (Newark Zone 4–5 designs to 1/150; 1/300 NOT claimed) |
| ARMA | Net free area = the **actual unobstructed opening** after louvers/screen reduce the vent; balanced **~50% intake / 50% exhaust** |
| Air Vent Inc. (Paul Scelsi) | **5** exhaust-vent types named (ridge, box/static, turbine, powered/solar, gable); 50/50 balance; never-mix-two-exhaust rule |
| Roof Assembly Ventilation Coalition (RAVC) | Never mix two exhaust-vent types over a shared attic — short-circuits airflow; lower exhaust reverses to intake |
| GAF | Ridge vent = preferred passive exhaust on adequate ridge + open soffits; power fan + ridge vent pulls outdoor air down through ridge |
| U.S. DOE Building America Solution Center (PNNL) | Soffit vents = primary intake; rafter baffles keep clear soffit-to-ridge channel; powered fans depressurize attic; air-seal + insulate + ventilate together vs ice dams |
| Building Science Corp. (Joseph Lstiburek) | Powered/solar attic fans run counterproductive vs balanced passive ventilation |
| NRCA | Proper ventilation reduces condensation → mold / structural damage / ice dams; common shingle-warranty condition |
| N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | Detached 1–2 family roof-covering/vent work = ordinary maintenance, no permit; commercial >25% of roof area in 12 months requires a permit |
| NJ Division of Consumer Affairs | NJ Home Improvement Contractor registration requirement |
| Contractors Registration Act | Liability-insurance requirement for a registered NJ HIC |
| Integrity Home Exteriors | Verification/cleanup + magnet-sweep guidance (processSteps[4]) |

**Deliberately HEDGED / OMITTED (per §0 + §8 of facts pack):**
- "Ventilation extends shingle life ~20–30% / up to 25%" — flagged as an industry estimate only, NOT verbatim NRCA/ARMA. **Omitted as a number**; stated qualitatively via the NRCA condensation/warranty point instead.
- 1/300 reduced-ventilation ratio — NOT claimed for Newark (Zone 4–5); only 1/150 asserted.
- No product NFA/CFM specs invented; no guaranteed energy-bill savings %; no manufacturer-certification claim.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — every section's first sentence is a definitive answer wrapped in `**…**` (bold on the answer clause, not the keyword). directAnswer = 34 words. All openers verified ≤40 words (directAnswer 34; overview 33/29; signs 16/28/29/24/35/27/32; approach 32/27/27; res 30/36; com 34/27; faqs 35/26/28/23/27/21).
- [x] **Zero modality in declaratives** — grep for `will|should|need to|have to|must|might|may|would|could` returns only `faqs[0].question` and `faqs[2].question` ("Should you…"), which are exempt. No modality in any answer/declarative prose.
- [x] **Every number named-sourced** — only hard figures are `1/150` (IRC R806.2), `~50% / 50%` (ARMA; Air Vent Inc.), `5` exhaust types (counted, Air Vent Inc.), `25%` roof-area permit trigger (N.J.A.C. 5:23-2.7), and hours `7:00 AM–6:00 PM / 8:00 AM–2:00 PM` (NQR canonical). Each attributed in-text.
- [x] **Counted plurals** — "5 exhaust-vent types: ridge, box and static, turbine, powered and solar, and gable" (overview[0]) matches the 5 subServices. No naked plural.
- [x] **approachSubheadings === approachContent length** — 3 === 3 (validated by parse).
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|15+ years|[VERIFY]|[UNVERIFIED]|certified installer|Master Elite` = none.
- [x] **No outbound links / URLs** — grep for `https?://|<a href|www.` = none. All authorities cited by name.
- [x] **No hype/sentiment words** — grep for best/amazing/trusted/leading/premier/seamless/etc. = none.
- [x] **No entity pronoun co-reference** — grep for it/they/them/these/those/there = none; entities repeated ("the vent system", "the airflow", "the lower exhaust", "Newark Quality Roofing").
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']` (validated by parse).
- [x] **NQR business facts** — only asserted facts: NJ Home Improvement Contractor (no license number), liability coverage, free roof inspections, Essex County + 6 named cities, hours. No phone/address/rating/cert.
- [x] **One macro topic** — roof vent installation/repair end to end; primary n-gram in opening answer and closing whyChooseUs + pricing.
- [x] **Parses as one array element** — `// ─── 8. Roof Vent Installation Repair ───` line comment → `{` → `},`; validated drop-in between the `componentsSpecialtyContent` wrapper and `];`.
- [x] **Schema fields complete** — serviceId, directAnswer, overview(2), subServices(5), signsHeading, signs(7), approachHeading, approachContent(3), approachSubheadings(3), residential{2}, commercial{2}, processSteps(5), faqs(6), credentialsHighlight(4), pricing{range,factors(5)}, whyChooseUs{heading,reasons(5)}.
