# Commercial Roof Replacement — Answer-First Rewrite (Batch 4)

`serviceId: commercial-roof-replacement` · service name interpolated as **Commercial Roof Replacement**

Snippet: `commercial-roof-replacement.snippet.ts` (commercial block primary; residential block retained)

---

## Rendered-heading → field map

The service template renders `HEADING_CONFIG.service` with `[Service]` = "Commercial Roof Replacement". Each field below answers its rendered question H1/H2 answer-first (bolded definitive answer ≤40 words, then expansion).

| Rendered heading (heading-config.ts) | Field | Answer-first lead |
|---|---|---|
| H1 — "Who Provides Commercial Roof Replacement in Newark?" | `directAnswer` (37 words) | Newark Quality Roofing replaces commercial roofs across Newark and Essex County, stripping the low-slope membrane to the deck, repairing the deck, and installing a new insulation-and-membrane system to manufacturer specification, as a NJ Home Improvement Contractor. |
| H2 — "What Commercial Roof Replacement Do We Provide?" | `overview` + `subServices` | 6 commercial roof systems: EPDM, TPO, PVC, modified bitumen, built-up roofing, standing-seam metal. |
| H2 — "How Do You Know If You Need Commercial Roof Replacement?" | `signsHeading` ("Indicators That Full Commercial Roof Replacement Is Needed") + `signs` | 6 replacement indicators (membrane past lifespan, >25–30% area, saturated insulation, recurring leaks, ponding >48h, multiple concurrent failure modes). |
| H2 — "How Do Our Roofing Contractors Perform Commercial Roof Replacement?" | `approachHeading` ("Our Commercial Roof Replacement Process") + `approachContent` (3) + `approachSubheadings` (3) | Moisture survey/deck/code assessment → membrane selection → tear-off/drainage/install to manufacturer spec. |
| H2 — "How Much Does Commercial Roof Replacement Cost?" | `pricing` + cost FAQ | $7.00–$12.00/sq ft installed single-ply membrane. |
| H2 — "Should You Repair or Replace Your Roof?" | repair-vs-replace FAQ | Replace when >25–30% area, recurring same-spot leaks, or saturated insulation across majority. |
| H2 — "Why Choose Our Roofing Company for Commercial Roof Replacement?" | `whyChooseUs` (heading matches "Why Choose Our Roofing Company for Commercial Roof Replacement?") + `credentialsHighlight` | NJ HIC registration, insured, membrane-system replacement, local Essex County. |
| Residential perspective block | `residential` | Commercial-grade EPDM/TPO/modified-bitumen on residential flat sections; no permit for 1–2-family covering. |
| Commercial perspective block (PRIMARY) | `commercial` | 6 commercial systems to manufacturer spec; NJ permit + Rehab Subcode; tapered insulation; ASTM C1153 survey. |

`approachSubheadings.length === approachContent.length === 3`. ✓

---

## Named sources + figures used (every hard number sourced)

| Figure / claim | Named authority (in-text) | Pack |
|---|---|---|
| EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr, built-up roofing 30 yr | InterNACHI life-expectancy chart | facts-materials-economics §0/§4 |
| PVC 20–30 yr | Single Ply Roofing Industry | facts-materials-economics §6 |
| SPF (spray polyurethane foam) 30+ yr w/ maintained coating | Spray Polyurethane Foam Alliance | facts-materials-economics §6 |
| Replacement = 79.2% of 2025 US roofing installations | Mordor Intelligence | facts-cost-stats §9 |
| Flat-roof replace threshold >25–30% of membrane damaged | Parish, Modernize, HomeGuide | facts-materials-economics §4 |
| Recurring same-spot leak → systemic, replace regardless of % | HomeAdvisor | facts-materials-economics §4 |
| Ponding >48h = defect; ¼ in/ft slope to drain | NRCA and ARMA | facts-process-standards; facts-nj-regulatory; ruleset |
| Commercial roof replacement needs permit; ordinary maintenance = repair up to 25% of total roof area / 12 mo | N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | facts-nj-regulatory §1.2 |
| Detached 1- & 2-family roof-covering re-roof = ordinary maintenance, no permit | N.J.A.C. 5:23-2.7 (NJ UCC) | facts-nj-regulatory §1.1 |
| Full removal (no recover-over) when water-soaked / slate-clay-cement tile / 2+ layers | N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | facts-nj-regulatory §1.4 |
| ASTM C1153 IR moisture survey; wet insulation retains heat / warm anomaly after sunset; locates wet insulation NOT leak entry; core-cut verification required | ASTM, NRCA, Fluke | facts-materials-economics §7 |
| White PVC/TPO solar reflectance measured per ASTM C1549 (cool roof) | ASTM C1549; Duro-Last (PVC grease/chemical resistance) | facts-materials-economics §6 |
| PVC $6–$12/sq ft; SPF $4–$8/sq ft | commercial cost guides | facts-materials-economics §6 |
| NJ flat membrane install: EPDM $7.00–$10.00, TPO $8.00–$12.00 /sq ft | Josten Roofing (NJ) | facts-materials-economics §7 |
| NJ ranges sit 10–40% above national | NJ regional pricing consensus | facts-materials-economics §7 |
| Newark crosses 32°F repeatedly; avg January low ≈ 25.5°F | NOAA 1991–2020 normals, Newark Liberty (EWR) | facts-nj-regulatory §3.2 |
| Workmanship vs material warranty distinction (manufacturer spec keeps system warranty intact) | Owens Corning warranty guidance | facts-process-standards §3 |
| Membrane installer (brands installed) Firestone, Carlisle, Johns Manville | Source Register A (manufacturers) / Part B "Brands installed" | sources-and-nqr-facts |
| NJ HIC registration required of every NJ roofing contractor | NJ Division of Consumer Affairs | facts-nj-regulatory §2 |
| Liability coverage required of registered NJ HIC | Contractors Registration Act | facts-nj-regulatory §2.3 |
| Hours Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM; cities served | site-config.ts (canonical) | sources-and-nqr-facts Part B [IN-REPO] |

Cool-roof reflectance is stated qualitatively ("high solar reflectance measured per ASTM C1549") — no specific 0.70–0.85 number used on-page to keep attribution clean and avoid a manufacturer-specific figure stated as universal.

---

## Withheld [VERIFY] / de-fabrication items (OMITTED from snippet, qualitative only)

All sourced to `sources-and-nqr-facts.md` Part B. None render in the snippet:

- **NJ HIC license number** ([VERIFY], 13VH######00) — omitted; "holds NJ Home Improvement Contractor registration" only.
- **24/7 / emergency response / same-day estimates / 1-hour callback** ([VERIFY] marketing literals) — omitted entirely.
- **0% financing / payment plans** — omitted; `financingNote` field OMITTED per task instruction for commercial.
- **GAF Certified Contractor / Master Elite / any certified-installer tier** ([VERIFY]) — omitted. Firestone/Carlisle/Johns Manville named only as systems NQR "installs and services" (brands installed ≠ certified).
- **"15+ years" tenure / 500+ projects / aggregate rating / "A+ BBB" / "fully insured & bonded"** ([VERIFY] / UNVERIFIED marketing literals) — omitted; replaced with "Insured" (Contractors Registration Act minimum) and credential badges D-01 cleared.
- **Manufacturer warranty "up to 50 years" / specific NDL term lengths** ([VERIFY]) — omitted; warranty described qualitatively (manufacturer material warranty vs written workmanship warranty, per Owens Corning).
- **Physical street address / ZIP / geo / phone** ([VERIFY]) — omitted; service-area framing (Essex County + named cities) only.
- **NQR's own workmanship-warranty length** ([VERIFY]) — omitted; "written workmanship warranty" with no term.

Replaced legacy fabricated content from the prior `commercial-roof-replacement` entry: "$8–$16/sq ft full tear-off" pricing kept conceptually but re-sourced to NJ single-ply figures ($7.00–$12.00); removed "0% financing", "Same-day estimates and 24/7 emergency crews", "GAF Certified Contractor with 15+ years", "warranties up to 50 years", "premier/top-tier/best" hype, the fabricated review FAQs ("Building owners rate our…"), and the "over 15 years of experience" team FAQ.

---

## factGapsFlagged (stated qualitatively or omitted — no number invented)

1. **NJ energy-code insulation mandate** — no pack source establishes an NJ energy code requiring continuous insulation R-value on commercial roofs. Insulation is stated as installed practice ("installs rigid insulation in staggered layers", "tapered insulation to at least ¼ inch per foot of slope"), NOT as an asserted code requirement. (Batch 3 EPDM snippet asserted "the NJ energy code requires continuous rigid insulation" — deliberately NOT replicated here per gate rules.)
2. **Freeze-thaw cycle COUNT** ([UNVERIFIED], 35–45 cycles) — stated qualitatively only ("crosses the 32°F freezing point repeatedly", "freeze-thaw movement stresses the seams and flashing"); the count is never published.
3. **NJ-specific commercial replacement $/sq ft for PVC, SPF, BUR, metal** — no NJ-specific figure in packs; used national commercial cost-guide ranges for PVC ($6–$12) and SPF ($4–$8), and NJ flat single-ply (EPDM/TPO) from Josten. BUR and metal commercial replacement $/sq ft not separately sourced — stated qualitatively (membrane class drives per-sq-ft cost) rather than with a number.
4. **Per-material *replacement* lifespan for standing-seam metal on commercial** — §3 gives metal 40–80 yr (InterNACHI, general/residential framing); on the commercial page metal is named as a system class without re-asserting the 40–80 figure to avoid mixing the residential-context number into a commercial $/sq ft claim. Lifespans cited are the low-slope membrane figures.
5. **Specific cool-roof solar-reflectance values** (0.70–0.85) — present in §6 but manufacturer/secondary-named; stated qualitatively ("high solar reflectance measured per ASTM C1549") rather than as a hard number, since the figure is product-specific.
6. **"Majority of roof" for saturated insulation** — qualitative threshold from the legacy/industry framing; no precise percentage published (kept as "across a majority of the roof").

---

## Self-audit (gate rules)

- **Answer-first:** directAnswer = 37 words (≤40), answers the H1 "Who Provides…". Every overview/section/FAQ string opens with a `**…**` bolded definitive answer; all 7 FAQ answers lead BOLD. ✓
- **Modality (gate):** zero `will/shall/should/need to/needs to/have to/has to/must/ought to` in body prose. Two "Should" tokens are FAQ `question:` fields only (excluded). Verbs use "needs at least ¼ inch per foot of slope to drain" / "requires a permit" / "requires complete removal" (verb+noun), never "needs to". ✓
- **No hedges:** zero can/may/might/could/would. ✓
- **Outbound links / URLs:** none. Internal link: `[roof repair](/commercial-roof-repair)` — anchor "roof repair" is a substring of target H1/title "Commercial Roof Repair". ✓
- **[VERIFY]/[UNVERIFIED] literals:** none in snippet. ✓
- **De-fab literals (gate):** none — no 24/7, same-day, GAF-certified, master-elite, 0% financing, top-rated, "N+ years experience", "N+ projects/roofs/reviews", fake NAP. No `N+` tokens at all. ✓
- **Counted plurals:** "6 commercial roof systems" / "6 membrane classes" / "6 classes" all match 6 subServices and the 6-class list. ✓
- **approachSubheadings.length === approachContent.length:** 3 === 3. ✓
- **Sentiment/hype:** none. ✓
- **Trust:** "Insured" only (statutory minimum), brands named as installed-not-certified, lifespans = facts (allowed). ✓
- **Schema bounds:** overview 2, signs 6, approachContent 2–5 (3), residential.content 2, commercial.content 2, processSteps 6, faqs 7, whyChooseUs reasons 4, credentialsHighlight 4, pricing.factors 5, financingNote OMITTED. ✓
- **TS validity:** object literal starts `{`, ends `},` (trailing comma), apostrophes escaped (e.g. none needed — copy avoids contractions; "1 in 36"-style figures n/a). ✓
