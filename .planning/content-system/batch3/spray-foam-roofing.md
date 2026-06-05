# Spray Foam Roofing — Answer-First Rewrite Draft

`serviceId: spray-foam-roofing` · Batch 3 (COMMERCIAL) · gold exemplar = `roof-repair`

Snippet: `.planning/content-system/batch3/spray-foam-roofing.snippet.ts` (Zod `ServiceContentSchema.safeParse` → VALID)

---

## 1. Rendered-heading → field map

The page templates render the `HEADING_CONFIG.service` strings (with `[Service]` = "Spray Foam Roofing"). Each prose field opens with a bolded definitive answer to its rendered heading.

| Rendered heading (HEADING_CONFIG.service) | Field that answers it | Bolded lead answer (opening clause) |
|---|---|---|
| **H1** — "Who Provides Spray Foam Roofing in Newark?" | `directAnswer` | "Newark Quality Roofing provides spray foam roofing across Newark and Essex County, applying seamless spray polyurethane foam and a protective coating over commercial low-slope roofs" |
| **H2** — "What Spray Foam Roofing Do We Provide?" | `overview` (+ `subServices`) | "Newark Quality Roofing provides 5 spray foam roofing services across Essex County: SPF foam application, recover over an existing roof, protective coating and recoat, slope and ponding correction, and seamless flashing and penetration detailing" |
| **H2** — "How Do You Know If You Need Spray Foam Roofing?" | `signs` (legacy `signsHeading` kept = "Signs You Need Spray Foam Roofing") | "A commercial low-slope roof with minimal insulation signals a spray foam recover…" |
| **H2** — "How Do Our Roofing Contractors Perform Spray Foam Roofing?" | `approachContent` (+ `approachSubheadings`) | "Newark Quality Roofing contractors prepare and test the substrate and core-sample an existing roof before any foam sprays…" |
| **H2** — "How Much Does Spray Foam Roofing Cost?" | `pricing` + cost FAQ | "Spray foam roofing costs $4–$8 per square foot installed, per commercial roofing cost guides." |
| **H2** — "Why Choose Our Roofing Company for Spray Foam Roofing?" | `whyChooseUs` | (4 reasons: NJ HIC, Insured, Free Roof Inspections, Local Essex County Roofers) |

Section heads also covered: `residential` ("Spray Foam Roofing for Residential Applications"), `commercial` ("Commercial Spray Foam Roofing"), `processSteps` (6 steps), `credentialsHighlight` (4 de-fabricated badges).

Structural/legacy fields preserved so Zod still validates: `serviceId`, `signsHeading`, `approachHeading`, `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `residential.ctaLabel`, `commercial.ctaLabel`. `approachSubheadings` length (3) === `approachContent` length (3).

**Commercial emphasis (per Batch-3 system):** the `commercial` block carries the primary audience (warehouses, distribution centers, industrial buildings with large roof areas and rooftop equipment); the `residential` block is retained per schema with the existing entry's smaller-scale flat-section framing.

---

## 2. Named sources used (with the figures)

Every hard number is attributed in-text to a named authority that appears in the fact packs. No figure is invented. SPF/PVC figures are industry/manufacturer-cited and are named accordingly (SPFA, ICC-ES/ASTM C1289 LTTR, Single Ply Roofing Industry, commercial cost guides) rather than to a primary standards body.

| Figure / claim | Named authority (in-text) | Fact pack |
|---|---|---|
| SPF foam layer **30+ years** when the protective coating is maintained | the SPFA and SPF manufacturers | facts-materials-economics §6 [SECONDARY-named] |
| Recoat / maintenance cycle **10 to 20 years** (acrylic 10–15, silicone 15–20) | manufacturer and SPFA guidance | facts-materials-economics §6 [SECONDARY-named] |
| SPF aged R-value **R-6.0 to R-6.5 per inch** | ICC-ES reports and ASTM C1289 LTTR testing and the SPFA | facts-materials-economics §6 [PRIMARY-attrib] |
| SPF failure modes — **blistering** (trapped moisture/poor prep), **adhesion loss**, **coating erosion under ponding**; foam is **UV-sensitive** and must stay coated; **seamless/monolithic** + adds insulation | the SPFA and NRCA (qualitative) | facts-materials-economics §6 [PRIMARY-attrib, qualitative] |
| NRCA requires **positive drainage** for SPF | the NRCA | facts-materials-economics §6; facts-materials-economics §4 |
| SPF installed cost **$4–$8 / sq ft** | commercial roofing cost guides | facts-materials-economics §6 [SECONDARY] |
| PVC / reflective single-ply solar reflectance **~0.70 to 0.85** measured per **ASTM C1549**, cool-roof range listed by **CRRC / ENERGY STAR** | ASTM C1549; the CRRC and ENERGY STAR | facts-materials-economics §6 (PVC energy row) [SECONDARY-named] |
| EPDM **15–25 yr**, TPO **7–20 yr**, modified bitumen **20 yr**, BUR **30 yr** (recover-substrate context) | the InterNACHI life-expectancy chart | facts-materials-economics §0, §4 [PRIMARY] |
| Welded-seam failure = most common **TPO** failure mode; seam separation = dominant **EPDM** failure mode | the InterNACHI life-expectancy chart and NRCA technical guidance | facts-materials-economics §4 (qualitative) |
| Ponding water > **48 hours** = defect; flat roof needs ≥ **¼ inch per foot** of slope to drain | the NRCA and ARMA | facts-materials-economics §4; facts-nj-regulatory-climate |
| Commercial: recover/replace > **25%** of total roof area in a 12-month period requires a permit under N.J.A.C. 5:23-2.7 | the NJ Uniform Construction Code | facts-nj-regulatory-climate §1.2 |
| Detached 1- and 2-family roof-covering repair/replacement = ordinary maintenance, **no permit**, under N.J.A.C. 5:23-2.7 | the NJ Uniform Construction Code | facts-nj-regulatory-climate §1.1 |
| Rehab Subcode N.J.A.C. 5:23-6.4 requires full removal when the roof is water-soaked or carries **2 or more layers** | the NJ Rehabilitation Subcode | facts-nj-regulatory-climate §1.4 |
| Newark crosses the **32°F** freezing point repeatedly; average January low near **25.5°F** | NOAA 1991–2020 normals at Newark Liberty (EWR) | facts-nj-regulatory-climate §3.2 |
| Workmanship warranty backs labor, separate from manufacturer material warranty | Owens Corning warranty guidance | facts-process-standards §3 |

**Material-accuracy note:** SPF is grounded only in its sourced §6 figures (R-6.0–6.5/in aged, 30+ yr foam life, 10–20 yr recoat, $4–$8/sq ft, named failure modes, positive-drainage requirement). The legacy draft's overclaims were dropped: "R-value of approximately 6.5 per inch" (narrowed to the sourced R-6.0–6.5 aged range), "R-10 from 1.5 inches," "exceeds rigid board by 30 to 50 percent," "20 to 40 percent higher than single-ply," "service life to 30, 40, or even 50 years," "payback within five to seven years," "first line of defense," "indefinitely," and the SPFA-applicator-certification claim (NQR's SPFA certification is unverified — see §3).

---

## 3. Withheld NQR specifics ([VERIFY] — omitted, never rendered, never placeholdered)

Per D-01 and Source Register Part B, the following NQR business specifics are unverified and were OMITTED or stated qualitatively. None render as a literal `[VERIFY]`/`[UNVERIFIED]` string in the snippet.

- **NJ HIC license number** (13VH######00 format) — stated qualitatively as "holds New Jersey Home Improvement Contractor registration"; no number rendered.
- **Physical street address, ZIP, geo coordinates** — omitted; service-area framing only (Essex County + named cities).
- **Phone number** — omitted (env-driven, no hardcoded value).
- **Years in business / founding year** ("15+ years") — omitted; legacy "15+ years of hands-on experience" / "over 15 years of experience" FAQ dropped.
- **GAF certification / "GAF Certified Contractor"** — omitted from credentials; legacy `credentialsHighlight` "GAF Certified Contractor" replaced with the D-01-cleared badge set (NJ HIC Licensed / Insured / Free Roof Inspections / Local Essex County Roofers).
- **SPFA applicator certification** ("certified by the Spray Polyurethane Foam Alliance," "training currency") — OMITTED. NQR is not asserted as SPFA-certified; the SPFA appears only as the named authority for industry SPF facts, never as an NQR credential.
- **BBB accreditation / "A+ rated" / aggregate star rating / review counts** — omitted; legacy "What do reviews say about your spray foam roofing?" and "How experienced is your spray foam team?" FAQs dropped.
- **"Fully insured and bonded"** — "bonded" claim dropped; rendered as "Insured" only (liability coverage required by the Contractors Registration Act).
- **Workmanship warranty term** (e.g., 5/10/25 yr) — stated as "a written workmanship warranty" with no specific term.
- **Manufacturer warranty term ("up to 50 years")** — dropped; warranties referenced only as the generic manufacturer material warranty vs. NQR workmanship warranty distinction (Owens Corning warranty guidance).
- **Financing** ("0% financing on qualifying projects," "flexible payment plans") — `pricing.financingNote` OMITTED entirely (field absent from snippet).
- **"24/7 emergency," "same-day estimates," "fast response," "1-hour callback"** — none rendered (legacy whyChooseUs "Fast Response & Emergency Service" reason and "Transparent, Upfront Pricing" / "Premium Materials & Warranties" / "Local Team, Local Reputation" hype reasons all replaced).
- **Proprietary-equipment / applicator-experience claims** ("state-of-the-art proportioning equipment," "applicator's experience") — dropped as unverifiable trust framing; replaced with sourced process steps.

**KNOWN TRAP honored:** the NJ freeze-thaw "cycles per winter" COUNT (~35–45, flagged [UNVERIFIED]) is **not** rendered. Freeze-thaw is described qualitatively via the NOAA-sourced 32°F-crossing / 25.5°F January-low facts only (used to justify the manufacturer-specified temperature/humidity application window).

---

## 4. factGapsFlagged (figures NOT in the packs → stated qualitatively or omitted)

- **SPF recoat "extends service life indefinitely"** — not in pack; replaced with the sourced "30 or more years when the coating is maintained" (SPFA) and the 10–20-year recoat cycle. No "indefinite" / "40 or 50 years" claim.
- **Specific energy-payback period** ("payback within five to seven years," "return within several years") — no sourced SPF payback figure in the pack; OMITTED (energy benefit framed only via the sourced R-6.0–6.5/in aged R-value).
- **SPF-vs-single-ply cost premium percentage** ("20–40% higher") — not in pack; OMITTED. Cost stated only as the sourced $4–$8/sq ft installed range and the qualitative tear-off-avoidance saving on a recover.
- **"R-10 from 1.5 inches" / "30–50% better than rigid board per inch"** — derived/comparative figures not in pack; OMITTED. Insulation stated only as the per-inch aged R-value with a qualitative "thicker foam raises total R-value."
- **SPF closed-cell density / thickness-per-pass ("half an inch per pass") / wet-film coating thickness** — no sourced numeric in the pack; described qualitatively as "controlled passes" and "to manufacturer specification."
- **PVC service life (20–30 yr) and PVC cost ($6–$12/sq ft)** — present in pack §6 but NOT cited as SPF figures; PVC appears only via the cool-roof reflectance row (0.70–0.85 per ASTM C1549, CRRC/ENERGY STAR) applied to the reflective coating context. PVC lifespan/cost omitted to keep the macro context on spray foam.
- **NJ-specific SPF $/sq ft** — no NJ SPF install figure in the pack (only a TPO proxy); the national $4–$8/sq ft is used with the sourced "NJ ranges sit ~10–40% above national figures" consensus qualifier.

---

## 5. Gate self-audit (all pass)

- **Answer-first:** `directAnswer` 25w (≤40); every section/FAQ lead opens with a bolded answer span — all 21 leads ≤40w (directAnswer 25, overview[0] 34, signs 7–13, approach 33/28/28, residential 28, commercial 33, faqs 24/32/29/32/14/35/28).
- **Bold the answer, not the keyword:** each `**…**` wraps the definitive answer clause.
- **Modality (declarative prose):** zero `will/shall/should/need to/needs to/have to/has to/must/ought to/might/may/could/would` outside FAQ `question:` fields (grep clean).
- **Hard numbers attributed:** every figure carries a named in-pack authority (SPFA, ICC-ES/ASTM C1289 LTTR, NRCA, ARMA, InterNACHI, ASTM C1549, CRRC/ENERGY STAR, NJ UCC / N.J.A.C. 5:23-2.7 & 5:23-6.4, NOAA EWR, Owens Corning). No invented number or source.
- **No outbound links / URLs:** none. No internal markdown links used (anchor-↔-title rule not triggered).
- **De-fab literals:** none (no 24/7, same-day, GAF Certified, 0% financing, top-rated, 15+ years, 500+, fully bonded, star ratings, SPFA-certified NQR credential).
- **[VERIFY]/[UNVERIFIED] literals:** none in snippet.
- **Counted plurals:** "5 spray foam roofing services" = exactly 5 `subServices` items; "2 or more layers" matches the code threshold.
- **Freeze-thaw cycle COUNT:** not rendered (qualitative only).
- **Zod:** `ServiceContentSchema.safeParse` → VALID (overview 2, subServices 5, signs 6, approachContent 3, approachSubheadings 3, residential 2, commercial 2, processSteps 6, faqs 7, pricing.factors 5, financingNote absent, whyChooseUs.reasons 4, credentialsHighlight 4).
