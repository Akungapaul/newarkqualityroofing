# Asphalt Shingle Roof Replacement — Draft Doc (Batch 8, #10/15)

**serviceId:** `asphalt-shingle-roof-replacement`
**category:** replacement-sub-pages · **parentId:** roof-replacement
**flags:** isResidential=true, isCommercial=false (schema still requires BOTH residential{} and commercial{} blocks — both written)
**macro topic:** full roof replacement with new asphalt shingles (3-tab or architectural)
**primary n-gram:** "asphalt shingle roof replacement" — present in directAnswer opener and in the closing whyChooseUs / pricing sections.

---

## Rendered heading → content field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 "Who Provides Asphalt Shingle Roof Replacement in Newark?" | `directAnswer` (39 words ≤40) |
| H2 "What Asphalt Shingle Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (4) |
| H2 "How Do You Know If You Need Asphalt Shingle Roof Replacement?" | `signs[]` (8); `signsHeading` label |
| H2 "How Do Our Roofing Contractors Perform …?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Asphalt Shingle Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace FAQ |
| H2 "Why Choose Our Roofing Company …?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

---

## Named sources used → exact figure attributed to each

| Named source | Figure / fact attributed in-text |
|---|---|
| **InterNACHI life-expectancy chart** | 3-tab asphalt 20-year life; architectural asphalt 30-year life (also assessment basis in whyChooseUs) |
| **NRCA** | actual asphalt service life varies up to 40% with climate/install/maintenance; 1 sq ft net-free vent per 150 sq ft attic floor (with ARMA); attic ventilation extends roof life up to 25% |
| **2024 roofing-market data** | asphalt covers roughly 73% of US residential roofs |
| **ASTM D3161** | asphalt wind classes — Class A near 60 mph, Class F near 110 mph |
| **ARMA + manufacturer guidance** | 3-tab ~60 mph rating; architectural wind warranty up to 130 mph with 6-nail install |
| **GAF** | granule loss >30% beyond repair; 50% loss cuts remaining life up to 70%; curling/cupping/zipper-crack signs |
| **InterNACHI / GAF inspection guidance** | curling, cupping, zipper cracking; spongy/sagging deck |
| **This Old House** | daylight through the deck → replacement |
| **Home Depot / Kelly Roofing** | localized repair 5–10× less than replacement only under 10–15 yrs |
| roofing industry guidance (contractor-consensus) | 25–30% area rule; 50% cost rule; 3-repairs-in-2-years rule (stated as contractor-consensus, no fabricated number) |
| **IRC (International Residential Code) R905.1.2** | ice barrier from eave to ≥24 in inside exterior wall line |
| **IRC R902** | roof assemblies carry a fire classification |
| **UL 790 / ASTM E108** | Class A/B/C roof-covering fire classes via spread-of-flame / intermittent-flame / burning-brand test; Class A highest |
| **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** | 1–2 family re-roof = ordinary maintenance, no permit; commercial/structural triggers permit; commercial 25%-in-12-months exemption |
| **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** | full removal required when water-soaked or 2+ layers |
| **NRCA + ARMA** | low-slope roof needs ≥¼ in/ft slope to drain (commercial honest framing) |
| **Owens Corning warranty guidance** | material warranty (factory defects) vs written workmanship warranty (labor) |
| **Zonda Cost vs Value report** | new asphalt roof recoups roughly 60–68% of project cost at resale |
| **Josten Roofing (NJ)** | 3-tab $5.50–$9.50/sq ft; architectural $6.50–$11.00/sq ft |
| **HomeAdvisor / Modernize (NJ)** | NJ typical home $10,000–$25,000; national 2025 avg ~$10,000–$11,000 |
| **HomeGuide / Integrity Home Exteriors** | labor ~60–70% of asphalt install; NJ 10–40% above national |
| **NOAA** | severe thunderstorm at wind gusts ≥58 mph (wind FAQ) |
| **Integrity Home Exteriors** | documentation/estimate process-step framing |

All figures cross-checked against `facts-materials-economics.md` §0/§1/§7, `facts-causes-signs.md` §2.2/§2.5, `facts-process-standards.md`, `facts-replacement-reroofing-insurance.md` §7 (fire classes), and `facts-cost-stats.md` (ROI). No number appears that is flagged [UNVERIFIED] in the packs. The "% of failures" UNVERIFIED figures were NOT used (signs stated qualitatively).

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer (39w) + first sentence under each heading is a definitive ≤40-word answer wrapped in `**`. approachContent[0] tightened from 45w → 31w. All signs[] and all faqs[].answer start bolded.
- [x] **Zero modality in declaratives** — grep for `will|should|must|might|may|would|could|need to|have to` returns ZERO hits outside faqs[].question. "Should you repair or replace your roof?" and "Do you need a permit…?" are FAQ questions (exempt).
- [x] **Every number named-sourced** — each figure (20/30 yr, 73%, 60/110/130 mph, 30%/50%/70% granule, 25–30%/50%/3-repairs rules, 24 in, 1:150, 25%, 60–68% ROI, $5.50–$11.00/sq ft, $10k–$25k, 60–70% labor, 10–40%, 58 mph) carries a named source in the same sentence.
- [x] **Counted plurals** — "2 asphalt shingle types", "2 shingle types", "1 square foot … per 150 square feet" introduced with exact integers.
- [x] **approachSubheadings.length === approachContent.length** — both 3.
- [x] **No de-fab literals** — no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated", "500+", "N years of experience", no [VERIFY]/[UNVERIFIED]. "GAF/Owens Corning/CertainTeed" named as products NQR installs (no certification claim). financingNote frames a free written estimate + options-discussed (no rate/term).
- [x] **No outbound links / URLs** — grep for `https?://|www.|](` returns zero.
- [x] **No entity pronouns / no hype words** — repeats "the deck", "the shingles", "Newark Quality Roofing"; no best/leading/trusted/premier.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **INSURANCE/STORM compliance (background mention only)** — the residential storm sentence uses the COMPLIANT framing: NQR "inspects and documents the damage and performs the approved work while the homeowner files and negotiates the claim." NO public-adjuster role, NO "handle/negotiate/settle your claim", NO deductible waiver, NO guaranteed approval, NO "free roof" promise. "free roof inspections" (allowed NQR fact) is distinct from a free-roof-replacement promise.
- [x] **MATERIAL-page attribution rule** — every lifespan → InterNACHI; NJ $/sq-ft → Josten Roofing; wind class → ASTM D3161; fire class → UL 790 / ASTM E108. No invented "% of failures".
- [x] **Honest commercial block** — asphalt on steep-slope commercial/mixed-use only; low-slope uses membranes and points to flat-roof replacement. No over-claimed commercial-asphalt specialty.
- [x] **Schema shape** — overview(2), subServices(4), signs(8), approachContent(3), residential.content(2), commercial.content(2), processSteps(6), faqs(7), pricing.factors(5), whyChooseUs.reasons(4) — all within Zod min/max. Parses as one array element via `eval`.
