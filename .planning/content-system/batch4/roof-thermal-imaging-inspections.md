# Roof Thermal Imaging Inspections — Rewrite Documentation

**serviceId:** `roof-thermal-imaging-inspections`
**Batch:** 4 (commercial services)
**Primary block:** commercial. Both residential + commercial blocks retained.
**Snippet:** `roof-thermal-imaging-inspections.snippet.ts`
**Quality bar:** human-approved gold exemplar `serviceId: 'roof-repair'` (repair-maintenance.ts)

---

## Rendered heading → snippet field map

The rendered H1/H2 strings come from `HEADING_CONFIG.service` (heading-config.ts),
interpolating `[Service]` = "Roof Thermal Imaging Inspections". Each snippet field
supplies the answer-first prose rendered under the corresponding question heading.

| Rendered heading (HEADING_CONFIG) | Snippet field | Opening bolded answer (abridged) |
|---|---|---|
| **H1:** Who Provides Roof Thermal Imaging Inspections in Newark? | `directAnswer` | "Newark Quality Roofing provides roof thermal imaging inspections across Newark and Essex County, locating wet insulation … under ASTM C1153" |
| **H2 overview:** What Roof Thermal Imaging Inspections Do We Provide? | `overview` + `subServices` | "Newark Quality Roofing performs roof thermal imaging inspections across Essex County under ASTM C1153 …" |
| **H2 signs:** How Do You Know If You Need Roof Thermal Imaging Inspections? | `signsHeading` (legacy: "When to Schedule a Thermal Imaging Inspection") + `signs` | 6 signs, each opens with a bolded condition |
| **H2 approach:** How Do Our Roofing Contractors Perform Roof Thermal Imaging Inspections? | `approachHeading` (legacy: "Our Professional Thermal Imaging Process") + `approachContent` + `approachSubheadings` | 3 paragraphs / 3 subheadings (lengths equal) |
| **H2 pricing:** How Much Does Roof Thermal Imaging Inspections Cost? | `pricing` + cost FAQ | "A roof thermal imaging inspection in Essex County prices by roof size, slope, and the verification work …" |
| **H2 repair/replace:** Should You Repair or Replace Your Roof? | (template section; answered via commercial block moisture-mapping prose) | — |
| **H2 whyChooseUs:** Why Choose Our Roofing Company for Roof Thermal Imaging Inspections? | `whyChooseUs.heading` (= matches) + `reasons` | 4 reasons |
| residential block | `residential.heading/content/ctaLabel` | "Newark Quality Roofing performs thermal imaging inspections on detached one- and two-family homes …" |
| commercial block (PRIMARY) | `commercial.heading/content/ctaLabel` | "Newark Quality Roofing performs thermal imaging inspections on commercial low-slope roofs … under ASTM C1153" |
| processSteps | `processSteps` (6 steps) | Pre-Scan Planning → Solar Loading/After-Sunset → Calibrated Scan → Anomaly Interpretation → Core-Cut Verification → Wet-Insulation Map |

Legacy structural fields kept verbatim-in-shape so Zod validates: `serviceId`,
`signsHeading`, `approachHeading`, `approachSubheadings`, `residential.heading`,
`commercial.heading`, `whyChooseUs.heading`, all `ctaLabel`s. All prose rewritten.

---

## Named sources used + figures attributed (all from fact packs)

Primary fact pack: `facts-materials-economics.md §7` (Infrared / thermal roof
moisture surveys). Supporting: §0 master lifespan table; `facts-nj-regulatory-climate.md`;
`facts-process-standards.md §2`; `sources-and-nqr-facts.md` Register A + B.

| Figure / claim (in-text) | Named authority cited | Pack source |
|---|---|---|
| ASTM C1153 governs IR wet-insulation location; most commonly used standard | **ASTM**, **NRCA** | mat-econ §7 [PRIMARY] |
| Wet insulation higher heat capacity, cools slower; after sunset stays warmer → warm anomaly | **Fluke**, **IIBEC** | mat-econ §7 [SECONDARY-named] |
| IR survey non-destructive / non-intrusive; surface thermal patterns w/o opening assembly | **NRCA**, **IIBEC** | mat-econ §7 [PRIMARY-attrib] |
| C1153 requires verification of every suspected wet area by core cut, probe, or calibrated moisture meter | **ASTM C1153**, **Fluke** | mat-econ §7 [PRIMARY] |
| Optimal conditions: no precip ~48h prior; dry surface; wind <~15 mph; ~18°F differential; clear day+night; scan after sunset | **ASTM C1153** via **IIBEC / NRCA / Fluke** | mat-econ §7 [PRIMARY-attrib] |
| Locates wet insulation NOT the leak entry point; footprint displaced from breach; detects temperature not water | **Fluke**, **IIBEC**, **NRCA** | mat-econ §7 [SECONDARY-named] |
| IR imager resolves ~0.2°F; wet-area anomalies ~0.5°F–30°F; winter ~5°F vs summer ~20°F | **IIBEC**, **Fluke** | mat-econ §7 [SECONDARY-named] |
| Broad-area scan faster than point-by-point moisture-meter survey | **IIBEC**, **NRCA** | mat-econ §7 [SECONDARY-named, qual.] |
| ASTM D7954 nuclear moisture surveys + capacitance moisture meters as companion confirmation | **ASTM**, trade guidance | mat-econ §7 [PRIMARY/SECONDARY] |
| EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr, BUR 30 yr | **InterNACHI** life-expectancy chart | mat-econ §0 [PRIMARY] |
| Ponding >48h = defect; flat roof needs ≥¼ in/ft slope to drain | **NRCA**, **ARMA** | nj-reg / repair pilot [PRIMARY-attrib] |
| Repair >25% total roof area in 12-mo on commercial → permit | **N.J.A.C. 5:23-2.7** / **NJ Uniform Construction Code** | nj-reg §1.2 [PRIMARY] |
| Detached 1–2-family roof-covering repair/replace = ordinary maintenance, no permit | **N.J.A.C. 5:23-2.7** / **NJ Uniform Construction Code** | nj-reg §1.1 [PRIMARY] |
| NJ HIC registration required of every NJ roofing contractor | **NJ Division of Consumer Affairs** | nj-reg §2 / Register A |
| Liability coverage required of registered HIC | **Contractors Registration Act** (N.J.S.A. 56:8-142) | nj-reg §2.3 / Register A |
| Hours Mon–Fri 7AM–6PM, Sat 8AM–2PM; cities Newark/East Orange/Bloomfield/Montclair/Belleville/Irvington | NQR canonical (`site-config.ts`) | Register B [IN-REPO] |

Counted plurals: lifespan enumeration of 4 membranes (EPDM/TPO/modified bitumen/BUR)
follows the gold-exemplar inline pattern (no leading integer for the lifespan list,
matching roof-repair commercial block). subServices=5, signs=6, approachContent=3,
processSteps=6, faqs=7, whyChooseUs.reasons=4 — none asserted with a mismatched
in-text count.

---

## Withheld [VERIFY] items (OMITTED from snippet; listed here only)

Per D-01 + Register B — these were stripped from the prior fabricated entry and are
NOT rendered (no placeholder, no literal `[VERIFY]` in the snippet):

- **"GAF Certified Contractor"** credential — [VERIFY] cert tier; removed from
  `credentialsHighlight` and `whyChooseUs`. Replaced with the ASTM C1153 standard reason.
- **"15+ years of experience" / "15+ Years in Essex County"** — [VERIFY] founding year;
  removed from credentials + whyChooseUs.
- **"24/7 emergency crews" / "Same-day estimates"** — [VERIFY]; removed.
- **"0% financing available"** (`financingNote`) — [VERIFY] financing partner/terms; OMITTED.
- **"Premium Materials & Warranties … up to 50 years"** — [VERIFY]; removed (no manufacturer
  warranty claim made; thermal imaging is a diagnostic service, not a covering install).
- **"Fully Insured & Bonded"** → reduced to "Insured" (bonded status [VERIFY]).
- **Aggregate rating / review counts / "revealing hidden problems" testimonial framing** —
  rating disabled, [VERIFY]; all review-claim FAQs removed.
- **NJ HIC license number, street address, ZIP, geo** — [VERIFY]; never rendered.
- **Detection-rate "exceeding 90 percent"** (was in prior FAQ) — NOT in fact packs;
  removed (no named-authority figure for IR moisture detection accuracy). See fact gaps.
- **Lifecycle-cost reduction "20 to 40 percent"** (prior commercial block) — NOT in
  fact packs; removed.

---

## factGapsFlagged (figure not in packs → stated qualitatively or omitted)

1. **IR roof thermal imaging inspection cost $ range** — NO named-source $ figure exists
   in any pack for an infrared/thermal roof moisture survey. The prior entry's
   `$300–$700` was an unsourced de-fab literal. `pricing.range` is therefore stated
   QUALITATIVELY ("Priced per roof size and the verification work the scan requires");
   `pricing.factors` are all sourced to ASTM C1153 / IIBEC / NRCA / Fluke scan
   mechanics, not to a dollar figure. Re-source a named NJ/Northeast IR-survey cost
   before publishing a number.
2. **IR moisture-detection accuracy percentage** (e.g. "90%+ detection rate") — not
   present in packs; stated qualitatively (verification-required framing) and omitted
   as a number.
3. **Lifecycle-cost / energy-savings percentages** for thermal-imaging-driven
   maintenance — not in packs; omitted.
4. **Scan-area throughput** (e.g. "50,000–100,000 sq ft per session") — prior entry's
   figure not in packs; stated qualitatively ("surveys a large low-slope roof faster
   than a point-by-point moisture-meter survey", sourced to IIBEC/NRCA).
5. **NQR-specific** thermal-imaging equipment/technician credentials and report
   deliverable specifics — [VERIFY]; stated only at the standard/process level (ASTM
   C1153, core-cut verification), no fabricated NQR capability claim.

---

## Self-audit (against gate rules)

- directAnswer = 33 words (≤40), bolds the ANSWER, mirrors H1 ("Who Provides … →
  Newark Quality Roofing provides …").
- Every section/FAQ opens with a bolded definitive answer span; first paragraph of
  residential + commercial bolded (expansion paragraph unbolded, per gold pattern).
- approachSubheadings.length === approachContent.length === 3.
- No modality (will/should/need to/must/might/may/can-as-hedge) in declaratives;
  FAQ `question:` lines excluded. "needs at least ¼ inch per foot of slope to drain"
  uses the allowed verb+noun form (not "needs to drain").
- Every hard number attributed to a named pack authority (ASTM C1153, NRCA, IIBEC,
  Fluke, ASTM, InterNACHI, N.J.A.C. 5:23-2.7). Freeze-thaw cycle COUNT not used.
- No outbound links/URLs; no internal links required (no anchor matched a sibling
  target title cleanly; omitted rather than forced).
- No fabricated trust (24/7, same-day, GAF-cert, 0% financing, 15+ years, review/star
  counts). financingNote OMITTED. "Insured" (not "fully insured & bonded").
- No `[VERIFY]`/`[UNVERIFIED]` literal strings; no de-fab literals in any field.
- No hype/sentiment/opinion words; no analogy/casual language; no entity-pronoun
  co-reference (the one "it" co-reference rewritten to the named entity).
- One macro context (thermal imaging / wet-insulation location) H1→close; key n-gram
  "roof thermal imaging inspection" + "ASTM C1153" repeated in opening and closing
  (whyChooseUs) sections.
