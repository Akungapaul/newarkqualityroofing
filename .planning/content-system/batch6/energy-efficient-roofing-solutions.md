# Energy Efficient Roofing Solutions — Draft Doc (Batch 6, entry #3 of 5)

serviceId: `energy-efficient-roofing-solutions` · category: energy-solar · isResidential=true · isCommercial=true
Primary n-gram: **energy efficient roofing** / **cool roof** (opens directAnswer + overview; closes in whyChooseUs + pricing).
Macro angle: the cool-roof + insulation levers, with the NJ heating-climate caveat and CRRC (NOT ENERGY STAR) rating framing. Reflectance (radiative) and R-value (conductive) kept as SEPARATE, non-interchangeable claims.

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Energy Efficient Roofing Solutions in Newark?" | `directAnswer` |
| H2 "What Energy Efficient Roofing Solutions Do We Provide?" | `overview[]` + `subServices[]` (5 levers) |
| H2 "How Do You Know If You Need Energy Efficient Roofing Solutions?" | `signs[]` (label = `signsHeading`) |
| H2 "How Do Our Roofing Contractors Perform Energy Efficient Roofing Solutions?" | `approachContent[]` / `approachSubheadings[]` (3/3) |
| H2 "How Much Does Energy Efficient Roofing Solutions Cost?" | `pricing.range` + `pricing.factors[]` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[1]` ("Should you repair or replace your roof?") |
| H2 "Why Choose Our Roofing Company for Energy Efficient Roofing Solutions?" | `whyChooseUs.reasons[]` |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` |
| FAQ | `faqs[]` |
| Related services / KB / Schedule | template-rendered (no field) |

---

## Named sources used → exact figure attributed in prose

| Named source | Exact figure / claim attributed |
|---|---|
| EPA | Solar reflectance = the "most important characteristic" of a cool roof; solar reflectance + thermal emittance defined on a **0-to-1** scale; a cool roof can reduce **peak cooling demand by 11-to-27%** in air-conditioned residential buildings (PEAK demand, NOT an annual bill %) |
| EPA (ENERGY STAR roof sunset) | ENERGY STAR roof products program ended: new certifications stopped **June 1, 2021**; recognition ended **June 1, 2022**; CRRC-1 is the successor |
| CRRC | CRRC-1 Rated Products Directory lists **initial and 3-year aged** reflectance + emittance; reports performance only (not a "cool" approval); reflectance/emittance the rated metrics |
| DOE (Cool Roofs / Energy Saver) | A conventional roof can exceed **150°F** on a sunny afternoon; a reflective roof can stay **>50°F cooler**; cool roofs carry a winter heating penalty in heating-dominated climates; reflectance vs R-value are separate levers; radiant barriers + ventilation + insulation named as levers |
| LBNL Heat Island Group | A clean white roof reflecting **80%** of sunlight stays roughly **55°F / 31°C cooler** than a gray roof reflecting **20%** |
| ASTM (E1980 / C1549 / C1371) | SRI per **ASTM E1980** (0-to-100 nominal); solar reflectance measured per **ASTM C1549**; thermal emittance per **ASTM C1371** |
| CRRC + ASTM C1549 (cross-ref §6) | White PVC/TPO membrane ~**0.70-to-0.85** initial solar reflectance / ~**0.80-to-0.90** thermal emittance, CRRC-listed |
| RCMA | Reflective coatings add **NO R-value**; savings come from reflectance + emittance (lower surface temp), never insulation; clean dry surface required even for ponding-resistant coating; cool-roof benefit smaller in NJ heating-dominated Zone 4–5 |
| 2021 IECC (Table R402.1.3) + NJ DCA | Ceiling **R-60** for Climate Zones 4 & 5; **R-49** full-ceiling exception at raised-heel eaves; NJ adopted 2021 IECC (residential enforcement April 2023) |
| IRS (P.L. 119-21 / OBBB) | Federal residential solar credit **was 30% through 2025** (historical framing); §25C insulation credit applied through 2025; **both repealed for 2026**; §48E commercial credit remains for business-owned solar; §179D = whole-building deduction vs ASHRAE 90.1, not a roof credit |
| NJBPU / NJ Clean Energy Program | Successor Solar Incentive (SuSI) program administered by the NJ Board of Public Utilities (QUALITATIVE — no $/MWh on page) |
| N.J.S.A. 48:3-87 | NJ net metering |
| NJ Division of Taxation (Forms ST-4 / CRES) | Solar sales-tax exemption (Form ST-4); solar property-tax exemption (Form CRES) — named qualitatively |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | Re-roof of the covering on a detached 1–2-family home = ordinary maintenance, no permit |
| NJ Division of Consumer Affairs / Contractors Registration Act | NJ HIC registration + required liability coverage (whyChooseUs) |
| Contractor-consensus thresholds | 25-to-30% area rule / 50% cost rule (repair-vs-replace FAQ) |

All attribution is name-only in prose (no outbound links, no URLs).

---

## Fact-grounding notes (facts-energy-solar.md Part C + §0; facts-materials-economics §6)

- **CRRC, never ENERGY STAR** (§0.1): the ENERGY STAR roof products program ended (new certs June 1, 2021; recognition June 1, 2022). Page cites CRRC-1 throughout; "ENERGY STAR roof" appears ONLY in the historical-sunset FAQ and approach sentence, never as a current label.
- **PEAK demand framing** (§0.4): EPA "11-to-27%" stated as PEAK cooling demand in air-conditioned residential buildings — NEVER restated as "cuts your bill 11-27%".
- **NJ heating-climate caveat** (§0.4): every reflective-roof benefit carries the Zone 4A–5 winter-heating-penalty caveat; net annual benefit framed as climate-and-insulation-dependent; no "year-round savings" promise.
- **Reflectance ≠ R-value** (§0.3): coatings add NO R-value, stated explicitly in subServices, approach, FAQ, and pricing. Reflectance (radiative, surface) and R-value (conductive, assembly) kept as two separate measures throughout.
- **Surface-temp facts**: DOE conventional >150°F / reflective >50°F cooler; LBNL clean white (80%) ~55°F/31°C cooler than gray (20%).
- **SRI math**: reflectance + emittance combine into SRI per ASTM E1980; reflectance per ASTM C1549, emittance per ASTM C1371.
- **NJ code** (§0.5): only the 2021 IECC R-60 (Zones 4 & 5) + R-49 raised-heel exception cited. No Title 24 / CALGreen (CA-only).
- **Incentives** (§0.2 + Part E): federal §25D solar + §25C insulation framed HISTORICALLY (was 30% through 2025) and stated as repealed for 2026, per the IRS. §48E commercial path remains for business-owned solar; §179D = whole-building deduction, not a roof credit. NJ programs (SuSI/NJBPU, net metering, ST-4, CRES) named QUALITATIVELY — NO SREC-II $/MWh on page. NQR named as installer + refers to a tax professional (not a tax advisor).
- **No NQR certification claim**: no "GAF Energy certified", "NABCEP certified", "CRRC listed/certified" for NQR. CRRC and ASTM named as the PRODUCT rating/standard. Membrane brands (Firestone, Carlisle, Johns Manville) named only as systems NQR installs — consistent with gold exemplar.
- **No dollar cost asserted**: §0.9 — no hard energy-roof $ has a primary source, so `pricing.range` = free-estimate framing and every `factors[]` item is qualitative/method-driven, zero invented dollar figure.
- **Cannibalization guard**: this page is the cool-roof + insulation LEVERS macro page (membrane + coating + insulation + radiant barrier + ventilation). Coating mechanics deep-dives belong to `silicone-roof-coating` / `silicone-elastomeric-roof-coating`; solar electricity to `solar-panel-roofing-installation` / `solar-shingle-installation`. This page summarizes the reflective-coating lever and does not duplicate the silicone-coating full treatment.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer (34 words / ≤40) + first item of every overview/signs/approach/residential/commercial array + every FAQ answer leads with a `**bolded**` definitive clause. All gated answer-first bolded clauses ≤40 words (verified by node: directAnswer 27, faq bolded clauses 32/34/34/35/30/31/29). Second items of multi-paragraph arrays intentionally not re-bolded (only the first sentence under a heading carries the answer).
- [x] **Zero modality in declaratives** — `grep -E "\b(will|should|need to|have to|must|might|may|would|could)\b"` returns ONLY `faqs[1].question` "Should you repair or replace your roof?" (FAQ question fields exempt). All declarative prose is indicative present ("installs", "reduces", "carries", "adds no", "sets", "requires"). No "must" in declaratives — code rules phrased as "sets" / "requires" / "counts as".
- [x] **Every number named-sourced** — 0-to-1 reflectance/emittance → EPA/CRRC; 0-to-100 SRI + ASTM E1980/C1549/C1371 → ASTM/CRRC; 150°F + >50°F → DOE; 80%/20% + 55°F/31°C → LBNL; 11-to-27% peak → EPA; 0.70-0.85 / 0.80-0.90 → CRRC + ASTM C1549; R-60 / R-49 / Zones 4 & 5 → 2021 IECC; June 1 2021 / June 1 2022 → EPA; 30% (historical) + 2025 repeal → IRS; 25-to-30% / 50% / 10-to-15 yr → contractor consensus. No invented number.
- [x] **approachSubheadings === approachContent length** — 3 === 3.
- [x] **No de-fab literals** — grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|N+ years|[VERIFY]|[UNVERIFIED]` → none. No "30% federal tax credit" as current (historical framing only). No ENERGY STAR roof label as current. No SREC-II $/MWh. No license number, no fabricated rating/phone/address.
- [x] **No outbound links / URLs** — grep `https?://|www\.|](` → none.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Counted plurals** — "installs 5 energy efficient roofing solutions: …", "works on 2 measured radiative properties: …", "measures the roof against 2 separate energy levers — …", "assesses the roof against 2 levers — …" — each enumerated set introduced by its exact integer.
- [x] **No pronoun co-reference** — node grep for `\b(it|they|them|these|those|there)\b` → none. Repeats "the coating", "the membrane", "the reflective surface", "the roof", "Newark Quality Roofing".
- [x] **No hype words** — node grep for best/leading/trusted/premier/top-rated/unbeatable/world-class/stunning/seamless → none.
- [x] **Macro topic discipline** — "energy efficient roofing" / "cool roof" runs H1 → final section; reflectance + R-value separation held end to end; opening directAnswer + closing whyChooseUs + pricing both carry the primary n-gram.
- [x] **Schema cardinalities** — overview 2, subServices 5, signs 6, approachContent 3, residential 2, commercial 2, processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 5, credentialsHighlight 4. Snippet parses as a single array element (node eval OK; array length 1).
