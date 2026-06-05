# Custom Roof Design and Consultation — Draft Doc (Batch 7, entry #1 of 3)

serviceId: `custom-roof-design-consultation` · category: design-consultation · isResidential=true · isCommercial=true
Primary n-gram: **custom roof design and consultation** (opens directAnswer + overview; closes in whyChooseUs heading + pricing).
Macro angle: the ADVISORY design + material-evaluation + written-specification service for new builds, additions, complex geometry, and material-selection decisions — it can lead to a Newark Quality Roofing installation. NOT vendor-neutral; NQR is a roofer that installs. No fabricated consultation fee, turnaround, or guarantee — `pricing.range` = free written estimate / consultation framing.

---

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Custom Roof Design and Consultation in Newark?" | `directAnswer` |
| H2 "What Custom Roof Design and Consultation Do We Provide?" | `overview[]` + `subServices[]` (5) |
| H2 "How Do You Know If You Need Custom Roof Design and Consultation?" | `signs[]` (label = `signsHeading`) |
| H2 "How Do Our Roofing Contractors Perform Custom Roof Design and Consultation?" | `approachContent[]` / `approachSubheadings[]` (3/3) |
| H2 "How Much Does Custom Roof Design and Consultation Cost?" | `pricing.range` + `pricing.factors[]` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[3]` ("Should you repair or replace your roof?") |
| H2 "Why Choose Our Roofing Company for Custom Roof Design and Consultation?" | `whyChooseUs.reasons[]` |
| Residential block | `residential{heading,content,ctaLabel}` |
| Commercial block | `commercial{heading,content,ctaLabel}` |
| Process | `processSteps[]` |
| FAQ | `faqs[]` |
| Related services / KB / Schedule | template-rendered (no field) |

---

## Named sources used → exact figure attributed in prose

| Named source | Exact figure / claim attributed |
|---|---|
| InterNACHI (life-expectancy chart) | 3-tab asphalt **20 yr**, architectural asphalt **30 yr**, metal **40–80 yr**, natural slate **60–150 yr**, copper **70-plus yr**, wood **25 yr**, clay/concrete tile **100-plus yr**; commercial low-slope: EPDM **15–25 yr**, TPO **7–20 yr**, modified bitumen **20 yr** (commercial block) |
| ASCE 7 (load standard adopted by the NJ UCC) | wind-load and snow-load DESIGN attributed to ASCE 7 — QUALITATIVE method only (no mph/psf number, since the Essex-specific 110–115 mph / Pg≈25 psf values are flagged UNVERIFIED in facts-nj-regulatory-climate.md §3.1/§3.4) |
| NRCA + ARMA | attic ventilation sized at **1 square foot of net-free vent area per 150 square feet** of attic floor; balanced **~50% intake / 50% exhaust** |
| NRCA | proper attic ventilation extends roof life **by up to 25%** |
| N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code | detached one- and two-family re-roof of the COVERING = ordinary maintenance, no permit; structural change (rafters/trusses/ridge beams/pitch, dormer, addition) = permit; commercial roof over **25%** of total area in a **12-month** period = permit |
| International Residential Code (R905.1.2) | ice-barrier provision named as the underlayment/ice-barrier scope reference |
| NOAA 1991–2020 normals, Newark Liberty (EWR) | Newark crosses the **32°F** freezing point repeatedly; average January low near **25.5°F** (freeze-thaw framing) |
| Josten Roofing (NJ pricing) | NJ architectural asphalt **$6.50–$11.00/sq ft**, metal **$9.00–$16.00**, slate **$10–$30** |
| NRCA + ARMA (low-slope) | low-slope roof needs at least **¼ inch per foot** of slope to drain; ponding water remaining more than **48 hours** counts as a defect (commercial block) |
| HomeGuide / Integrity Home Exteriors | NJ install ranges sit **10–40%** above national; labor accounts for roughly **60–70%** of a roof install (pricing factor) |
| Owens Corning (warranty guidance) | manufacturer system warranty vs written workmanship warranty distinction (installation handoff process step) |
| Integrity Home Exteriors (documentation guidance) | the written-specification documentation sequence |
| Contractor-consensus thresholds | **25–30%** area rule / **50%** cost rule / asphalt under **10–15 yr** (repair-vs-replace FAQ) |
| GAF / CertainTeed / Owens Corning; slate; copper; Firestone / Carlisle / Johns Manville | named only as product lines/materials NQR INSTALLS (consistent with gold exemplar) — no certification claim |

All attribution is name-only in prose (no outbound links, no URLs).

---

## Fact-grounding notes (facts-process-standards.md + facts-materials-economics.md §0/§7 + facts-nj-regulatory-climate.md)

- **No vendor-neutral / "we don't sell materials" claim** (Batch-7 CUSTOM-DESIGN caution): the page frames the consultation as advisory + spec, explicitly stating it "can lead to a Newark Quality Roofing installation" (directAnswer-adjacent overview, approach #3, process "Installation Handoff", whyChooseUs). NQR is a roofer that installs — no independence claim.
- **No fabricated consultation fee / turnaround / guarantee**: `pricing.range` = "Free written estimate and consultation"; every `factors[]` item is a free-estimate or method/material-driven cost driver. No invented dollar fee for the consultation, no turnaround days, no warranty length.
- **Wind/snow load = ASCE 7, QUALITATIVE** (facts-nj-regulatory-climate.md §3.1/§3.4): the Essex-specific 110–115 mph design wind and Pg≈25 psf snow values are flagged UNVERIFIED, so the page attributes the DESIGN METHOD to ASCE 7 (the load standard the NJ UCC adopts) with NO mph or psf number on-page.
- **All lifespans → InterNACHI** (facts-materials-economics.md §0 master table): 7-family residential set + commercial low-slope set, every figure name-sourced to the InterNACHI life-expectancy chart.
- **NJ install $ → Josten Roofing** (facts-materials-economics.md §7): architectural asphalt $6.50–$11.00, metal $9.00–$16.00, slate $10–$30 per sq ft. These are INSTALL ranges feeding the design-to-install economics, not a consultation fee.
- **Permit thresholds → N.J.A.C. 5:23-2.7** (facts-nj-regulatory-climate.md §1): detached 1–2-family re-roof of covering = ordinary maintenance (no permit); structural change/dormer/addition/pitch = permit; commercial >25% in 12 months = permit. Stated as code facts ("counts as", "triggers", "requires"), zero modality.
- **Ventilation 1:150 + extend life 25% → NRCA/ARMA + NRCA** (facts-cost-stats.md / facts-causes-signs.md): 1 sq ft net-free vent per 150 sq ft attic floor; balanced 50/50; ventilation extends roof life up to 25%.
- **Cannibalization guard**: this is the ADVISORY design + material-evaluation + written-spec macro page. Historic-district restoration depth belongs to `historic-roof-restoration`; ice-dam depth to `roof-ice-dam-prevention`; per-material install deep-dives to the residential/commercial roof-type pages. This page summarizes the material comparison and delegates depth.
- **No NQR certification claim**: GAF/CertainTeed/Owens Corning/slate/copper/Firestone/Carlisle/Johns Manville named only as installed product lines/materials. No "certified", "Master Elite", "dealer", or "preservation-certified" for NQR.

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer (35 words / ≤40) + first item of every overview/signs/approach/residential/commercial array + every FAQ answer leads with a `**bolded**` definitive clause. directAnswer mirrors H1 "Who Provides…" → "Newark Quality Roofing provides…". Second paragraphs of multi-item arrays intentionally not re-bolded (only the first sentence under a heading carries the answer).
- [x] **Zero modality in declaratives** — node grep `\b(will|shall|should|need to|needs to|have to|has to|must|might|may|would|could)\b` over ALL declarative fields (everything except `faqs[].question`) returns `null`. The only "Should" hit is `faqs[3].question` "Should you repair or replace your roof?" (FAQ question field exempt). Code rules phrased as "counts as" / "triggers" / "requires" / "needs"; advisory triggers phrased as "calls for" / "warrants".
- [x] **Every number named-sourced** — material lifespans (20/30/40–80/60–150/70+/25/100+ and 15–25/7–20/20) → InterNACHI; 1 sq ft per 150 + 50/50 → NRCA/ARMA; extend life 25% → NRCA; ¼-inch/foot + 48-hour ponding → NRCA/ARMA; permit 25%/12-month + structural triggers → N.J.A.C. 5:23-2.7 / NJ UCC; 32°F + 25.5°F → NOAA 1991–2020 (EWR); $6.50–$11.00 / $9.00–$16.00 / $10–$30 → Josten Roofing NJ pricing; 10–40% above national + 60–70% labor → HomeGuide / Integrity Home Exteriors; 25–30% / 50% / 10–15 yr → contractor consensus; R905.1.2 → IRC. Wind/snow load attributed to ASCE 7 with NO number (UNVERIFIED Essex value avoided). No invented number.
- [x] **approachSubheadings === approachContent length** — 3 === 3 (verified by node eval).
- [x] **Counted plurals match item count** — "delivers 3 advisory products: [assessment, material evaluation, written specification]" = 3; "3 deliverables: [same 3]" = 3; "compares 7 roofing material families: [3-tab asphalt, architectural asphalt, metal, slate, copper, wood, clay/concrete tile]" = 7; "evaluates 7 material families" / "the 7 material families" = 7. Each enumerated set introduced by its exact integer.
- [x] **No de-fab literals** — node grep for `24/7|same-day|GAF Certified|0% financing|top-rated|500+|N+ years|[VERIFY]|[UNVERIFIED]|certified historic|preservation-certified` → `null`. No consultation fee, no turnaround, no guarantee, no license number, no fabricated rating/phone/address. No vendor-neutral / "we don't sell materials" claim.
- [x] **No outbound links / URLs** — node grep `https?://|www\.|](` across all fields → `null`.
- [x] **No pronoun co-reference to entities** — node grep `\b(it|they|them|this|that|these|those|there)\b` returns only 2 `that` hits, both RESTRICTIVE relative pronouns ("a specification that documents…", "a specification that names…") — same pattern as the gold exemplar's "a warranty that backs the labor". Repeats "the roof", "the material", "the consultation", "the specification", "Newark Quality Roofing" rather than entity pronouns.
- [x] **No hype words** — node grep best/leading/trusted/premier/top-rated/unbeatable/world-class/stunning/love/seamless → `null`.
- [x] **Macro topic discipline** — "custom roof design and consultation" runs H1 → final section; advisory design + material-evaluation + written-spec held end to end; opening directAnswer + closing whyChooseUs heading + pricing all carry the primary n-gram. "Can lead to a Newark Quality Roofing installation" stated in overview, approach, process, and whyChooseUs — no vendor-neutral framing.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Schema cardinalities** — overview 2, subServices 5, signs 7, approachContent 3, approachSubheadings 3, residential 2, commercial 2, processSteps 6, faqs 6, pricing.factors 5, whyChooseUs.reasons 5, credentialsHighlight 4. Snippet parses as a single array element (node eval OK; array length 1). FAQ #3 = the verbatim "Should you repair or replace your roof?" required by the rendered H2.
