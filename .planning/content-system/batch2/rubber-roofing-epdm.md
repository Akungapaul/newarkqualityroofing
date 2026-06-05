# Rubber Roofing EPDM — Answer-First Rewrite Draft

`serviceId: rubber-roofing-epdm` · Batch 2 · gold exemplar = `roof-repair`

---

## 1. Rendered-heading → field map

The page templates render the HEADING_CONFIG.service strings; each prose field opens with a bolded definitive answer to its rendered heading.

| Rendered heading (HEADING_CONFIG.service) | Field that answers it | Bolded lead answer (opening clause) |
|---|---|---|
| **H1** — "Who Provides Rubber Roofing EPDM in Newark?" | `directAnswer` | "Newark Quality Roofing provides rubber roofing EPDM across Newark and Essex County, installing, repairing, and reseaming EPDM single-ply membrane on flat and low-slope roofs" |
| **H2** — "What Rubber Roofing EPDM Do We Provide?" | `overview` (+ `subServices`) | "Newark Quality Roofing provides 5 rubber roofing EPDM services across Essex County: EPDM membrane installation, EPDM seam reseaming, EPDM puncture and patch repair, flashing and penetration detailing, and drainage correction" |
| **H2** — "How Do You Know If You Need Rubber Roofing EPDM?" | `signs` (legacy `signsHeading` kept = "Signs You Need Rubber Roofing EPDM") | "Seam separation along the membrane laps ranks as the most common EPDM failure…" |
| **H2** — "How Do Our Roofing Contractors Perform Rubber Roofing EPDM?" | `approachContent` (+ `approachSubheadings`) | "Newark Quality Roofing contractors diagnose an EPDM leak by tracing the water path to the failed seam, puncture, or flashing detail, then reseam or patch the membrane…" |
| **H2** — "How Much Does Rubber Roofing EPDM Cost?" | `pricing` + cost FAQ | "EPDM flat-roof repair in the Newark area runs $2.50–$10.00 per square foot, or $300–$1,100 for a typical repair…" |
| **H2** — "Why Choose Our Roofing Company for Rubber Roofing EPDM?" | `whyChooseUs` | (4 reasons: NJ HIC, Insured, Free Roof Inspections, Local Essex County Roofers) |

Section heads also covered: `residential` ("Residential EPDM Rubber Roofing"), `commercial` ("Commercial EPDM Rubber Roofing"), `processSteps` (6 steps), `credentialsHighlight` (4 de-fabricated badges).

Structural/legacy fields preserved verbatim so Zod still validates: `serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings` (rewritten labels), `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `residential.ctaLabel`, `commercial.ctaLabel`.

---

## 2. Named sources used (with the figures)

Every hard number is attributed in-text to a named authority that appears in the fact packs. No figure is invented.

| Figure / claim | Named authority (in-text) | Fact pack |
|---|---|---|
| EPDM **15–25 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 [PRIMARY] |
| TPO **7–20 years**, modified bitumen **20 years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 [PRIMARY] |
| EPDM fails most often at the **seams** (seam separation = dominant failure mode); membrane shrinkage at penetrations = secondary | HomeGuide membrane-repair guidance (stated qualitatively) | facts-materials-economics §4 (EPDM common repair issues) |
| TPO fails at the **welded seams** | InterNACHI / industry (mirrors gold exemplar phrasing) | facts-materials-economics §4 |
| Ponding water > **48 hours** = defect; flat roof needs ≥ **¼ inch per foot** of slope to drain | NRCA and ARMA | facts-causes-signs §2.7; facts-materials-economics §4 |
| Standing water weighs roughly **5 pounds per inch per square foot**, deflecting the deck | NRCA and ARMA | facts-causes-signs §2.7 |
| EPDM **small patch $300–$500**; **seam re-weld $200–$400**; **section replace $500–$1,000** | Modernize and WeatherShield cost data | facts-materials-economics §4 |
| EPDM flat-roof repair **$2.50–$10.00 / sq ft**, or **$300–$1,100** typical | HomeGuide | facts-materials-economics §4 |
| NJ EPDM installation **$7.00–$10.00 / sq ft** | Josten Roofing NJ pricing | facts-materials-economics §7 |
| NJ ranges sit **10–40%** above national figures (higher labor, stricter NJ code) | Josten Roofing NJ pricing / NJ consensus | facts-materials-economics §7 |
| Detached 1- and 2-family roof-covering repair/replacement = ordinary maintenance, **no permit** under N.J.A.C. 5:23-2.7 | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.1 |
| Commercial: repairing > **25%** of total roof area in a 12-month period requires a permit under N.J.A.C. 5:23-2.7 | NJ Uniform Construction Code | facts-nj-regulatory-climate §1.2 |
| Rehab Subcode N.J.A.C. 5:23-6.4 requires full removal when membrane is water-soaked or already carries **2 or more layers** | NJ Rehabilitation Subcode | facts-nj-regulatory-climate §1.4 |
| Newark crosses the **32°F** freezing point repeatedly; average January low near **25.5°F** | NOAA 1991–2020 normals at Newark Liberty (EWR) | facts-nj-regulatory-climate §3.2 |
| Freeze-thaw cycling stresses seams/flashing (stated **qualitatively** — no cycle count) | (mechanism; NJ cycle COUNT is [UNVERIFIED], deliberately omitted) | facts-nj-regulatory-climate §3.2 (KNOWN TRAP) |
| Workmanship warranty backs labor, separate from manufacturer material/system warranty; manufacturer-approved bonding keeps system warranty intact | Owens Corning warranty guidance | facts-process-standards §3 |
| Repair sequence (inspection → estimate → surface prep → repair → verification → cleanup/warranty) | Integrity Home Exteriors process guidance | facts-process-standards §1 |
| Brown/yellow ceiling stains = active leak indicator | GAF and This Old House inspection guidance | facts-causes-signs §3 |
| Membrane brands installed/serviced: Firestone, Carlisle, Johns Manville | Source Register Part A (membrane manufacturers; mirrors gold exemplar) | sources-and-nqr-facts Part A |

**Material-accuracy note:** EPDM is grounded only in its sourced figures (15–25 yr life, seam-dominant failure, low-slope drainage thresholds, NJ/national repair $). No overclaim beyond the pack — the legacy draft's "earliest installations still performing after more than 50 years," "flexible down to −40°F," "20–30% cheaper than TPO," "60-mil / 90-mil," and "50 ft × 200 ft sheet" claims were all dropped (not present in the fact packs).

---

## 3. Withheld NQR specifics ([VERIFY] — omitted, never rendered, never placeholdered)

Per D-01 and the Source Register Part B, the following NQR business specifics are unverified and were OMITTED or stated qualitatively. None render as a literal "[VERIFY]"/"[UNVERIFIED]" string in the snippet.

- **NJ HIC license number** (13VH######00 format) — credential stated qualitatively as "holds New Jersey Home Improvement Contractor registration"; no number rendered.
- **Physical street address, ZIP, geo coordinates** — omitted; service-area framing only (Essex County + named cities).
- **Phone number** — omitted (env-driven, no hardcoded value).
- **Years in business / founding year** ("15+ years") — omitted; replaced the legacy claim.
- **GAF certification / "GAF Certified Contractor" / "Master Elite"** — omitted from credentials; legacy `credentialsHighlight` "GAF Certified Contractor" replaced with "NJ HIC Licensed / Insured / Free Roof Inspections / Local Essex County Roofers" (the D-01-cleared badge set from the gold exemplar).
- **BBB accreditation / "A+ rated" / aggregate star rating / review counts** — omitted; no review-based "What do reviews say…" FAQ (legacy two review/experience FAQs dropped).
- **"Fully insured and bonded"** — "bonded" claim dropped; rendered as "Insured" only (liability coverage required by the Contractors Registration Act).
- **Workmanship warranty term** (e.g., 5/10/25 yr) — stated as "a written workmanship warranty" with no specific term; no number rendered.
- **Financing** ("0% financing," "flexible payment plans") — `pricing.financingNote` OMITTED entirely (the field is absent from the snippet).
- **"24/7 emergency," "same-day estimates," "1-hour callback"** — none rendered.
- **Manufacturer warranty term ("up to 50 years")** — dropped; warranties referenced only as the generic manufacturer system warranty vs. NQR workmanship warranty distinction (Owens Corning warranty guidance).

**KNOWN TRAP honored:** the NJ freeze-thaw "cycles per winter" COUNT (~35–45, flagged [UNVERIFIED]) is **not** rendered. Freeze-thaw is described qualitatively via the NOAA-sourced 32°F-crossing / 25.5°F January-low facts only.

---

## 4. Gate self-audit (all pass)

- **Answer-first:** `directAnswer` 24w (≤40); all 18 section/FAQ leads open with a bolded answer span, every span ≤40w (max 37w).
- **Bold the answer, not the keyword:** each `**…**` wraps the definitive answer clause.
- **Modality (declarative prose):** zero `will/shall/should/need to/needs to/have to/has to/must/ought to` outside FAQ `question:` fields.
- **Hard numbers attributed:** every figure carries a named in-pack authority; no invented number or source.
- **No outbound links / URLs:** none. No internal markdown links used (none warranted; anchor-↔-title rule not triggered).
- **De-fab literals:** none (no 24/7, same-day, GAF Certified, 0% financing, top-rated, 15+ years, 500+, fully bonded, star ratings).
- **[VERIFY]/[UNVERIFIED] literals:** none in snippet.
- **Counted plurals:** "5 rubber roofing EPDM services" = exactly 5 `subServices` items.
- **Zod:** `ServiceContentSchema.safeParse` → VALID (overview 2, signs 6, approach 2, subServices 5, processSteps 6, faqs 6, residential 2, commercial 2; `financingNote` absent).
