# EPDM Commercial Roofing — answer-first rewrite (Batch 3)

- **serviceId:** `epdm-commercial-roofing`
- **service name (heading interpolation):** EPDM Commercial Roofing
- **system:** COMMERCIAL (commercial block carries primary audience; residential block retained for schema)
- **snippet:** `.planning/content-system/batch3/epdm-commercial-roofing.snippet.ts`
- **gold exemplar matched:** `serviceId: 'roof-repair'` (repair-maintenance.ts)

---

## Rendered-heading → field map

| Rendered heading (heading-config.ts `service`) | Snippet field | Definitive answer that opens the field |
|---|---|---|
| **H1** "Who Provides EPDM Commercial Roofing in Newark?" | `directAnswer` | "Newark Quality Roofing provides EPDM commercial roofing across Newark and Essex County, installing and servicing EPDM rubber membrane on flat and low-slope commercial roofs as a New Jersey Home Improvement Contractor." (31 words / 217 chars) |
| **H2** "What EPDM Commercial Roofing Do We Provide?" | `overview` (+ `subServices`) | "Newark Quality Roofing installs and services EPDM commercial roofing across Essex County: mechanically attached, fully adhered, and ballasted EPDM rubber membrane…" |
| **H2** "How Do You Know If You Need EPDM Commercial Roofing?" | `signsHeading` + `signs` | 6 bolded signs, each opening with the definitive failure indicator |
| **H2** "How Do Our Roofing Contractors Perform EPDM Commercial Roofing?" | `approachHeading` + `approachContent` + `approachSubheadings` | "Newark Quality Roofing engineers the EPDM assembly before tear-off, sizing the attachment method, the insulation, and the drainage slope…" |
| **H2** "How Much Does EPDM Commercial Roofing Cost?" | `pricing` (+ cost FAQ) | range "$7.00–$10.00/sq ft installed" |
| **H2** "Why Choose Our Roofing Company for EPDM Commercial Roofing?" | `whyChooseUs` | 4 reasons, each a de-fabricated NQR fact |

**Structural fields kept verbatim for Zod/legacy:** `serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings` (length 3 = `approachContent` length 3), `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `*.ctaLabel`.

**Field counts (Zod-validated):** overview 2, subServices 5, signs 6, approachContent 3, approachSubheadings 3, processSteps 6, faqs 6, pricing.factors 5, whyChooseUs.reasons 4, credentialsHighlight 4.

---

## Named sources + figures used (every hard number traced)

| Figure on page | Named source (in fact pack) | Pack location |
|---|---|---|
| EPDM 15–25 yr | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 |
| EPDM 25–30 yr (service-life study) | "attributed via Progressive Materials" | facts-materials-economics §4 |
| TPO 7–20 yr | InterNACHI chart | §0, §4 |
| Modified bitumen 20 yr | InterNACHI chart | §0, §4 |
| EPDM fails most often at seams; shrinkage/creep; ponding stretch (qualitative) | NRCA technical guidance | §4 EPDM failure modes |
| Flat roof ¼ in/ft min slope; ponding >48 h = defect | NRCA and ARMA | facts-nj-regulatory-climate / gold exemplar commercial block |
| Commercial >25% roof area / 12 mo triggers permit | N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | facts-nj-regulatory §1.2 |
| Full removal when water-soaked or ≥2 layers | N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | facts-nj-regulatory §1.4 |
| Detached 1–2 family re-roof = ordinary maintenance, no permit | N.J.A.C. 5:23-2.7 | facts-nj-regulatory §1.1 |
| Flat-roof replace at >25–30% membrane damage | Parish, Modernize, HomeGuide | facts-materials-economics §4 / §8 |
| Recurring same-spot leak → replace regardless of % | HomeAdvisor | facts-materials-economics §4 |
| EPDM commercial install $7.00–$10.00/sq ft | Josten Roofing (NJ) — EPDM (flat) | facts-materials-economics §7 |
| Flat-roof repair $2.50–$10.00/sq ft | HomeGuide | facts-materials-economics §4 |
| EPDM repair/install $5–$9/sq ft | HomeAdvisor | facts-materials-economics §4 |
| NJ ranges 10–40% above national | NJ regional pricing consensus | facts-materials-economics §7 |
| Newark crosses 32°F repeatedly; Jan low ~25.5°F | NOAA 1991–2020 normals, Newark Liberty (EWR) | facts-nj-regulatory §3.2 |
| NJ design wind speed per ASCE 7 (qualitative, no number) | ASCE 7 as adopted by NJ UCC | facts-nj-regulatory §3.4 |
| Continuous rigid insulation, NJ energy code (qualitative) | NJ energy code | gold exemplar approach pattern |
| Firestone, Carlisle, Johns Manville EPDM systems | sources-and-nqr-facts Part B (brands installed) | sources-and-nqr-facts |
| NJ HIC registration; liability insurance; hours; cities | site-config.ts via sources-and-nqr-facts Part B | sources-and-nqr-facts |

---

## Withheld [VERIFY] / [UNVERIFIED] items — OMITTED or stated qualitatively (never literal in snippet)

- **NJ HIC license number** (13VH…) — OMITTED; only "New Jersey Home Improvement Contractor registration" stated.
- **GAF Certified / Master Elite / Platinum / SSM tier** — OMITTED; no manufacturer-certification credential claimed for NQR. Firestone/Carlisle/Johns Manville named only as systems NQR "installs and services," not as certified-applicator status (legacy entry's "commercial applicator certifications" claim dropped).
- **Years in business / "15+ years"** — OMITTED (de-fabrication).
- **24/7 / same-day / 0% financing / flexible payment plans** — OMITTED; `financingNote` removed from `pricing` per brief.
- **BBB rating / 5-star / project counts / aggregate rating** — OMITTED.
- **NQR workmanship-warranty term (years)** — OMITTED; only "written workmanship warranty" stated qualitatively (no number).
- **Manufacturer warranty terms ("up to 50 years," NDL, 15–30 yr tiers)** — OMITTED; legacy commercial block's warranty-tier table dropped; only "manufacturer system warranty kept intact" stated qualitatively.
- **Specific membrane mil thickness / 50-ft sheet width / ballast 10–12 psf** — OMITTED (not in fact packs as sourced figures).
- **EPDM "-40°F flexibility"** — OMITTED (legacy figure not in fact packs); replaced with NOAA-sourced Newark Jan-low context + qualitative "stays flexible."
- **R-25 to R-30 commercial insulation value** — OMITTED (specific R-value not in EPDM/NJ packs); stated as "continuous rigid insulation to the NJ energy code" qualitatively.
- **Freeze-thaw cycles-per-winter COUNT** — never stated as a number (the 35–45 figure is [UNVERIFIED] per facts-nj-regulatory §3.2); described qualitatively as "freeze-thaw movement."

---

## factGapsFlagged (figures not in packs → stated qualitatively or omitted)

1. **EPDM membrane thickness range (45–90 mil) and 60-mil standard** — not in fact packs; omitted.
2. **EPDM "-40°F low-temperature flexibility"** — not in packs; replaced with NOAA Newark Jan-low (25.5°F) + qualitative flexibility.
3. **Commercial insulation R-25 to R-30** — exact R-value not in EPDM/NJ packs; stated as "continuous rigid insulation to the NJ energy code."
4. **Ballast weight 10–12 psf** — not in packs; ballasted EPDM described qualitatively ("under washed stone").
5. **Exact NJ design wind speed (110–115 mph in facts-nj §3.4 is [UNVERIFIED] for Essex County)** — number withheld; cited as "the NJ design wind speed per ASCE 7 as adopted by the NJ UCC" without a figure.
6. **Freeze-thaw cycle count** — [UNVERIFIED]; described qualitatively, no number.
7. **PVC 20–30 yr / SPF 30+ yr / green roof 5–40 yr** — available in §6/§0 but out of scope for an EPDM page; not used (cross-membrane comparison limited to TPO 7–20 and modified bitumen 20, which are the gold exemplar's commercial comparators).

---

## Self-audit vs gate rules (all clean)

- **Answer-first:** directAnswer ≤40 w (31); every section/FAQ opens with a `**bolded answer**` (verified: overview, approachContent, all 6 signs, residential[0], commercial[0], all 6 FAQ answers, whyChooseUs reasons are NQR-fact declarations).
- **R6 modality (gate, excl. FAQ `question:`):** clean — no will/shall/should/need to/needs to/have to/has to/must/ought to in declaratives.
- **R9 outbound links (gate):** clean — zero URLs / `<a href>`; all authorities cited by name.
- **R10 [VERIFY] + de-fab literals (gate):** clean — no [VERIFY]/[UNVERIFIED]; no 24/7, GAF-certified, Master Elite, 0% financing, top-rated, N+ experience, N+ count.
- **R8 plural-count (gate, COUNTED_LIST pattern):** clean — no "N nouns: a, b, c." inline counted list.
- **Sentiment/casual/analogy (advisory):** clean — no best/leading/trusted/premier; no like-a/imagine/at-the-end-of-the-day.
- **Entity-pronoun (advisory):** no co-referential it/they/them; entities repeated ("the membrane", "EPDM", "Newark Quality Roofing").
- **Freeze-thaw count:** never a number.
- **Zod:** `ServiceContentSchema.parse` passes; `approachSubheadings.length === approachContent.length === 3`.
- **pricing.financingNote:** omitted per brief; `pricing.range` uses sourced commercial $/sq ft (Josten Roofing NJ).
