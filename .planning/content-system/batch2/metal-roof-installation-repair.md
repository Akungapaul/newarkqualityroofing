# Metal Roof Installation and Repair — Answer-First Rewrite Draft

**serviceId:** `metal-roof-installation-repair`
**Batch:** 2 (full-site answer-first rewrite)
**Gold exemplar matched:** `roof-repair` (repair-maintenance.ts) — voice, field shape, de-fabrication treatment.
**Snippet:** `.planning/content-system/batch2/metal-roof-installation-repair.snippet.ts`

---

## Rendered heading → field map

The rendered H1/H2s come from `HEADING_CONFIG.service` with `[Service]` = "Metal Roof Installation and Repair". Each field's prose OPENS with a bolded definitive answer to its rendered heading.

| Rendered heading (DOM) | Source field | Opening answer (bolded span) |
|---|---|---|
| **H1:** Who Provides Metal Roof Installation and Repair in Newark? | `directAnswer` | "Newark Quality Roofing installs and repairs metal roofs across Newark and Essex County, fitting standing-seam panels and metal shingles and resealing failed seams, fasteners, and corroded sections" (34 words) |
| **H2:** What Metal Roof Installation and Repair Do We Provide? | `overview` | "Newark Quality Roofing installs and repairs 4 metal roof systems across Essex County: standing-seam panels, metal shingles, copper, and aluminum" |
| **H2:** How Do You Know If You Need Metal Roof Installation and Repair? | `signs` (+ `signsHeading`) | "A metal roof at or past its material lifespan signals replacement…" (6 enumerated signs) |
| **H2:** How Do Our Roofing Contractors Perform Metal Roof Installation and Repair? | `approachContent` (+ `approachHeading`, `approachSubheadings`) | "Newark Quality Roofing matches the metal substrate to the building and the Essex County climate from 4 classes…" (3 paragraphs / 3 subheadings) |
| **H2:** How Much Does Metal Roof Installation and Repair Cost? | `pricing` (+ FAQ cost question) | "Metal roof repair runs $200–$1,000 for a minor leak, up to $3,000 for severe corrosion…" |
| **H2:** Should You Repair or Replace Your Roof? | FAQ "Should you repair or replace a metal roof?" | "Repair a metal roof when the damage stays localized…; replace … when panel corrosion exceeds 20 to 25%…" |
| **H2:** Why Choose Our Roofing Company for Metal Roof Installation and Repair? | `whyChooseUs` | 4 reasons (HIC, Insured, Free Inspections, Local Essex County) |

Legacy/structural fields preserved verbatim so Zod still validates: `serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings`, `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel`, `credentialsHighlight`.

Field counts: subServices 5, signs 6, approachContent 3 (= approachSubheadings 3), processSteps 6, faqs 7, pricing.factors 5, whyChooseUs.reasons 4. `financingNote` OMITTED (0% financing is fabricated).

---

## Named sources used (with the figures cited in-text)

Every hard number is attributed in-text to a named authority that appears in the fact packs.

| Figure | Named authority (in-text) | Fact-pack location |
|---|---|---|
| Metal lasts **40 to 80 years**; copper **70-plus years** | InterNACHI life-expectancy chart | facts-materials-economics §0, §3 [PRIMARY] |
| 3-tab asphalt **20 years**; architectural asphalt **30 years** (comparison anchor) | InterNACHI life-expectancy chart | §0 [PRIMARY] |
| Sealant at metal laps **fails in 5 to 10 years** | ARMA flashing guidance | facts-causes-signs §"Flashing failure modes" |
| Replace metal above **20 to 25% panel corrosion** / **25% seam-connection damage** | roofing industry guidance (contractor consensus) | facts-materials-economics §3 repair-vs-replace [SECONDARY] |
| Minor metal leak **$200–$1,000**; severe corrosion up to **$3,000** | Modernize | §3 repair cost [SECONDARY] |
| Seam re-weld / re-seam **$250–$1,100**; fastener fixes **$150–$1,000** | Angi | §3 repair cost [SECONDARY] |
| Metal panel repair **$5–$10 per sq ft** | HomeGuide | §3 repair cost [SECONDARY] |
| NJ metal install **$9.00–$16.00 per sq ft** | Josten Roofing NJ pricing | §7 NJ per-sq-ft [SECONDARY] |
| NJ ranges sit **10–40% above national** | Integrity Home Exteriors (labor share / stricter code) | §7 + gold exemplar consistency |
| **1 sq ft net-free vent area per 150 sq ft** attic floor | NRCA and ARMA | facts-process-standards (ventilation); matches roof-replacement gold |
| Attic ventilation extends roof life **up to 25%** | NRCA | matches gold exemplar |
| Average **January low near 25.5°F** at Newark Liberty (EWR) | NOAA 1991–2020 normals | facts-nj-regulatory-climate §3.2 [verified] |
| Ice barrier from eave to **≥24 inches inside the exterior wall line** (R905.1.2) | International Residential Code | matches gold exemplar |
| Re-roof = ordinary maintenance, **no permit** (detached 1- and 2-family) | NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | facts-nj-regulatory-climate; matches gold |
| Commercial permit above **25% of total roof area** repaired in 12 months | NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | matches gold |
| Full removal when water-soaked / wood/slate/tile / **2+ layers** | NJ Rehabilitation Subcode (N.J.A.C. 5:23-6.4) | matches gold (roof-replacement) |
| Thermal expansion on long panel runs | Metal Construction Association (MCA) | Source Register Part A (MCA authoritative for standing-seam) + facts-materials-economics §3 (qualitative) |
| Manufacturer material vs written workmanship warranty | Owens Corning warranty guidance | matches gold |
| Documentation/scope-before-work; repair-execution color match | Integrity Home Exteriors | matches gold |
| Brands installed: **Englert, ATAS, McElroy Metal** | (NQR installs; Source Register Part A names these as metal panel authorities) | sources-and-nqr-facts Part B BRANDS (metal) |

### Material accuracy guardrails honored
- **No metal wind-speed rating claimed.** The old copy's "140 mph" and "130 mph" are NOT sourced for metal in the packs (130 mph belongs to *architectural shingles*, per facts-causes-signs §2.2). Metal storm performance is described qualitatively only.
- **No metal "Class A fire rating" number/cert claimed.** No named-authority metal fire figure exists in the packs; UL is a Source-Register authority but no specific metal value is provided, so the claim is omitted.
- **No energy-savings %** ("25–40% cooling reduction"), **no insurance-discount %** ("5–35%"), **no recyclability %** ("100%") — none of these appear in the fact packs; all dropped.
- **Freeze-thaw described qualitatively** — the "cycles per winter" COUNT (35–45) is flagged [UNVERIFIED] in facts-nj-regulatory-climate §3.2; only the verified January-low temperature and the 32°F-crossing pattern are stated.
- Aluminum corrosion resistance and copper longevity stated only to the extent the InterNACHI chart and the salt-air note in facts-nj-regulatory-climate §3.4 support; the chart's "aluminum coating 3–7 yr" row was NOT used (it is a coating, not the panel substrate, and would mislead).

---

## Withheld NQR specifics ([VERIFY] — omitted, never rendered, never placeholdered)

Per D-01 and the brief, the following were OMITTED or stated qualitatively. None appear as a literal `[VERIFY]`/`[UNVERIFIED]` string in the snippet.

- **NJ HIC license number** — stated qualitatively as "holds New Jersey Home Improvement Contractor registration"; number omitted.
- **Insurance carrier / policy / coverage amount / bonded / workers'-comp** — stated qualitatively as "carries liability coverage … the Contractors Registration Act requires"; "fully bonded" dropped.
- **Years in business / founding year** ("15+ years") — dropped from every field and from `credentialsHighlight`.
- **GAF certification / "GAF Certified Contractor" / Master Elite** — dropped; replaced "Premium Materials & Warranties" reason with HIC/Insured. NQR named only as an *installer* of Englert/ATAS/McElroy panels (installing ≠ certified).
- **Aggregate rating / star rating / review counts / "top-rated"** — dropped (the two legacy "What do reviews say" FAQs removed entirely).
- **"24/7 emergency" / "same-day estimates" / "fast response"** — dropped from `whyChooseUs`.
- **0% financing / flexible payment plans** — `financingNote` omitted from `pricing`.
- **Warranty term (years)** — only "written workmanship warranty" qualitatively; no term, no "up to 50 years".
- **Physical street address / ZIP / geo / phone** — not rendered (service-area named cities only: Newark, East Orange, Bloomfield, Montclair, Belleville, Irvington; hours Mon–Fri 7–6, Sat 8–2 from canonical config).
- **BBB rating / "A+"** — dropped.

---

## Self-audit (gate rules)

- Modality in declaratives (will/should/need to/have to/must/ought to/shall): **0** (FAQ `question:` fields excepted, as allowed).
- Outbound links / URLs: **0**.
- `[VERIFY]`/`[UNVERIFIED]` literals or de-fab literals: **0**.
- Banned trust claims (24/7, same-day, GAF Certified, 0% financing, top-rated, fully bonded, 15+ years, 500+, star ratings/review counts): **0**.
- Freeze-thaw cycle COUNT rendered: **none** (qualitative only).
- Answer-first: directAnswer 34 words ≤40; every section/FAQ opens with a bolded `**…**` answer span (first paragraph of multi-paragraph fields, matching gold).
- Counted plurals match item counts: "4 metal roof systems / 4 classes" → 4 named items each time; 6 signs, 5 sub-services, 6 process steps, 7 FAQs, 5 pricing factors, 4 reasons.
- Every hard number attributed in-text to a named pack authority.
- Valid TypeScript object (parsed), all gold field names present, `financingNote` absent.
