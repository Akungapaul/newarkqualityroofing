# Commercial Metal Roofing — Answer-First Rewrite Draft

**serviceId:** `commercial-metal-roofing`
**Batch:** 3 (full-site answer-first rewrite — COMMERCIAL service)
**Gold exemplar matched:** `roof-repair` (repair-maintenance.ts) — voice, field shape, de-fabrication treatment.
**Snippet:** `.planning/content-system/batch3/commercial-metal-roofing.snippet.ts`

---

## Rendered heading → field map

Rendered H1/H2s come from `HEADING_CONFIG.service` with `[Service]` = "Commercial Metal Roofing". Each field's prose OPENS with a bolded definitive answer to its rendered heading. This is a COMMERCIAL system: the `commercial` block carries the primary audience; the `residential` block is repurposed for mixed-use/multi-family per the existing entry's emphasis (heading "Metal Roofing for Mixed-Use Properties" preserved).

| Rendered heading (DOM) | Source field | Opening answer (bolded span) |
|---|---|---|
| **H1:** Who Provides Commercial Metal Roofing in Newark? | `directAnswer` | "Newark Quality Roofing installs and services commercial metal roofing across Newark and Essex County, fitting standing-seam panels and exposed-fastener panels on warehouses, distribution centers, and industrial buildings" (34 words) |
| **H2:** What Commercial Metal Roofing Do We Provide? | `overview` (+ `subServices`) | "Newark Quality Roofing installs and services 4 commercial metal roof systems across Essex County: standing-seam steel panels, exposed-fastener panels, aluminum panels, and copper" |
| **H2:** How Do You Know If You Need Commercial Metal Roofing? | `signs` (+ `signsHeading`) | "A metal roof at or past its material lifespan signals replacement…" (6 enumerated signs) |
| **H2:** How Do Our Roofing Contractors Perform Commercial Metal Roofing? | `approachContent` (+ `approachHeading`, `approachSubheadings`) | "Newark Quality Roofing matches the metal panel system and substrate to the building, the wind exposure, and the Essex County climate before fabrication…" (3 paragraphs / 3 subheadings) |
| **H2:** How Much Does Commercial Metal Roofing Cost? | `pricing` (+ FAQ cost question) | "Commercial metal roofing in New Jersey costs $9.00 to $16.00 per square foot installed…" |
| **H2:** Should You Repair or Replace Your Roof? | FAQ "Should you repair or replace a commercial metal roof?" | "Repair a commercial metal roof when the damage stays localized; replace a standing-seam roof when seam-connection damage exceeds 25% or panel corrosion exceeds 20%…" |
| **H2:** Why Choose Our Roofing Company for Commercial Metal Roofing? | `whyChooseUs` | 4 reasons (HIC, Insured, Free Inspections, Local Essex County) |

Legacy/structural fields preserved verbatim so Zod still validates: `serviceId`, `signsHeading` ("Signs You Need Commercial Metal Roofing"), `approachHeading` ("Our Commercial Metal Roofing Approach"), `approachSubheadings` (["Heavy-Duty Metal Panel Systems", "R-Panel and Standing Seam Options", "Industrial-Grade Weather Protection"]), `residential.heading` ("Metal Roofing for Mixed-Use Properties"), `commercial.heading` ("Commercial Metal Roofing"), `whyChooseUs.heading`, both `ctaLabel`s.

Field counts: overview 2, subServices 5, signs 6, approachContent 3 (= approachSubheadings 3), residential.content 2, commercial.content 3, processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 4. `financingNote` OMITTED (0% financing is fabricated). directAnswer = 34 words (≤40).

---

## Named sources used (with the figures cited in-text)

Every hard number is attributed in-text to a named authority that appears in the fact packs.

| Figure | Named authority (in-text) | Fact-pack location |
|---|---|---|
| Commercial metal lasts **40 to 80 years**; copper **70-plus years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §3 [PRIMARY] |
| Standing-seam metal **40 to 70 years** | This Old House | §3 [SECONDARY-named] |
| Exposed-fastener / metal shingle **about 30 to 50 years** | metal-roofing industry consensus | §3 [SECONDARY] |
| TPO **7 to 20 years**, EPDM **15 to 25 years**, modified bitumen **20 years**, BUR **30 years** (membrane comparison anchors) | InterNACHI life-expectancy chart | §0, §4 [PRIMARY] |
| Replace standing-seam above **25% seam-connection damage** or **20% panel corrosion**; exposed-fastener at **15 to 20% fasteners** or **>25% panel corrosion** | metal-roofing industry consensus | §3 repair-vs-replace [SECONDARY] |
| Recurring same-spot leaks → systemic, replace regardless of % | HomeAdvisor | §4 repair-vs-replace [SECONDARY] |
| Fastener fixes **$150 to $1,000**; seam re-weld **$250 to $1,100** | Angi | §3 repair cost [SECONDARY] |
| Minor metal leak **$200 to $1,000**; severe corrosion up to **$3,000** | Modernize | §3 repair cost [SECONDARY] |
| Panel repair/replace **$3 to $14 per sq ft**; premium copper up to **$30 per sq ft** | HomeAdvisor | §3 repair cost [SECONDARY] |
| Metal repair per-sq-ft **$5 to $10** | HomeGuide | §3 repair cost [SECONDARY] |
| Elastomeric/silicone coating **$1,500 to $7,000**; repaint sections **$1.20 to $2.70 per sq ft** | CPS Construction | §3 repair cost [SECONDARY] |
| NJ commercial metal install **$9.00 to $16.00 per sq ft** | Josten Roofing NJ pricing | §7 NJ per-sq-ft [SECONDARY] |
| NJ ranges sit **10 to 40% above national** | Integrity Home Exteriors (labor share / stricter code) | §7 + gold exemplar consistency |
| Panel runs exceeding **100 feet** need engineered expansion provisions | Metal Construction Association and the NRCA | §3 (thermal-expansion, panels >100 ft per NRCA); Source Register Part A (MCA authoritative for standing-seam) |
| Average **January low near 25.5°F** at Newark Liberty (EWR); crosses **32°F** repeatedly | NOAA 1991–2020 normals | facts-nj-regulatory-climate §3.2 [verified] |
| Low-slope roof needs at least **¼ inch per foot** of slope; ponding **>48 hours** = defect | NRCA and ARMA | facts-nj-regulatory-climate / gold exemplar (matches roof-repair commercial block) |
| Commercial permit when repairing **>25% of total roof area** in a 12-month period | NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | facts-nj-regulatory-climate §1.2; matches gold |
| Full removal when water-soaked / wood, slate, or tile / **2+ layers** | NJ Rehabilitation Subcode (N.J.A.C. 5:23-6.4) | facts-nj-regulatory-climate §1.4; matches gold |
| Manufacturer material vs written workmanship warranty | Owens Corning warranty guidance | facts-process-standards §3; matches gold |
| HIC registration required of every NJ roofing contractor; liability coverage required | NJ Division of Consumer Affairs / Contractors Registration Act | facts-nj-regulatory-climate §2; matches gold whyChooseUs |
| Brands installed: **Englert, ATAS, McElroy Metal** | (NQR installs; Source Register Part A names these as metal panel authorities) | sources-and-nqr-facts Part B BRANDS (metal). Installing ≠ certified. |

### Material accuracy guardrails honored
- **pricing.range** uses a sourced NJ commercial metal $/sq ft: **$9.00–$16.00/sq ft installed** (Josten Roofing NJ §7). `financingNote` OMITTED.
- **No wind-speed (mph) rating claimed for metal.** No named-authority metal wind figure exists in the packs; the old copy's "ASCE 7" / Factory Mutual / wind-uplift-number framing is replaced with qualitative wind-uplift-load + clip-engineering language. Wind resistance stated qualitatively only.
- **No "Class A fire rating" claimed for metal.** No named-authority metal fire-class value is in the packs (UL is a Source-Register authority but supplies no specific metal value here), so the fire-rating claim from the old copy is dropped.
- **No energy/cooling-savings %, no insurance-discount %, no "100% recyclable", no weight figures (1–2 lb/sq ft, etc.).** None appear in the fact packs; all dropped from the old commercial block's lifecycle-cost prose.
- **No coating-life numbers ("15–20 yr polyester", "30–40 yr PVDF/Kynar 500"), no gauge specs (24/26 ga, 0.032–0.040 in).** Not in the packs; replaced with the sourced coating *cost* ($1,500–$7,000; $1.20–$2.70/sq ft, CPS Construction) and qualitative substrate/coating language.
- **Freeze-thaw described qualitatively** — the "cycles per winter" COUNT (35–45) is flagged [UNVERIFIED] in facts-nj-regulatory-climate §3.2; only the verified January-low (25.5°F) and the 32°F-crossing pattern are stated.
- **Aluminum corrosion advantage** stated qualitatively (salt-air / chemical emissions) per §3 + facts-nj-regulatory-climate §3.4; the InterNACHI "aluminum coating 3–7 yr" row was NOT used (it is a coating, not the panel substrate, and would mislead).
- **No internal markdown links rendered** in this snippet. The old copy's `[commercial installation](/commercial-roof-installation)` link was dropped because anchor text "commercial installation" is not a verified substring of a target page title (Rule 23 gate); a link can be re-added in a later pass once the target title is confirmed.

---

## Withheld NQR specifics ([VERIFY] — omitted, never rendered, never placeholdered)

Per D-01 and the brief, the following were OMITTED or stated qualitatively. None appear as a literal `[VERIFY]`/`[UNVERIFIED]` string in the snippet.

- **NJ HIC license number** — stated qualitatively as "holds New Jersey Home Improvement Contractor registration"; number omitted.
- **Insurance carrier / policy / coverage amount / bonded / workers'-comp** — stated qualitatively as "carries liability coverage … the Contractors Registration Act requires"; "fully insured and bonded" dropped.
- **Years in business / founding year** ("15+ years") — dropped from every field and from `credentialsHighlight`.
- **GAF certification / "GAF Certified Contractor" / Master Elite** — dropped; the old "Licensed & Certified Experts", "Premium Materials & Warranties up to 50 years" reasons replaced with HIC / Insured. NQR named only as an *installer* of Englert/ATAS/McElroy panels (installing ≠ certified).
- **Aggregate rating / star rating / review counts / "top-rated"** — dropped (the two legacy "What do reviews say" + "How experienced is your team" FAQs removed entirely).
- **"24/7 emergency" / "same-day estimates" / "Fast Response & Emergency Service"** — dropped from `whyChooseUs`.
- **0% financing / flexible payment plans** — `financingNote` omitted from `pricing`.
- **Workmanship warranty term (years)** — only "written workmanship warranty" qualitatively; no term, no "up to 50 years".
- **Physical street address / ZIP / geo / phone** — not rendered (service-area named cities only: Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington; hours Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM from canonical config).
- **BBB rating / "A+"** — dropped.

---

## Fact gaps flagged (figure NOT in packs → stated qualitatively or omitted)

- **Metal wind-uplift mph rating** — no pack figure → wind resistance stated qualitatively (clip-engineering for the wind-uplift load), no number.
- **Metal Class A fire rating** — no named-authority metal fire value in packs → omitted.
- **Energy/cooling-savings %, insurance-premium-discount %, recyclability %** — no pack figures → omitted.
- **Metal panel gauge specs and coating service-life years (polyester 15–20 yr, PVDF 30–40 yr)** — not in packs → omitted; coating addressed via sourced cost only.
- **Metal roof weight (lb/sq ft) vs BUR** — not in packs → omitted.
- **Freeze-thaw cycle COUNT (35–45/winter)** — [UNVERIFIED] in facts-nj-regulatory-climate §3.2 → stated qualitatively (32°F crossing + January low 25.5°F) only.
- **NJ-specific metal *repair* (not install) $/sq ft** — packs carry only national metal repair figures (§3) and NJ *install* $9–$16 (§7) → national repair figures used and named (HomeGuide/Angi/Modernize/HomeAdvisor/CPS), NJ +10–40% qualifier applied per §7.

---

## Self-audit (gate rules) — verified programmatically

- Zod `ServiceContentSchema.safeParse`: **PASS**. approachContent length (3) === approachSubheadings length (3).
- Modality in declaratives (will/shall/should/need to/have to/must/ought to): **0** (FAQ `question:` fields excepted, as allowed; questions use "Should you…", "Do you need…", "Can a…").
- Outbound links / URLs: **0**.
- `[VERIFY]`/`[UNVERIFIED]` literals or de-fab literals (24/7, same-day, 0% financing, GAF Certified, Master Elite, top-rated, fully bonded, 15+ years, 500+, 5-star, A+): **0**.
- Freeze-thaw cycle COUNT rendered: **0** (qualitative only).
- Answer-first: directAnswer 34 words ≤40; every section opener and every FAQ answer begins with a bolded `**…**` answer span.
- All FAQ questions end with `?`.
- Counted plurals match item counts: "4 commercial metal roof systems" / "4 classes" each list exactly 4 items (standing-seam, exposed-fastener, aluminum, copper).
- Every hard number attributed in-text to a named pack authority.
- Valid TypeScript object literal (starts `{`, ends `},`), all gold field names present, `financingNote` absent.
