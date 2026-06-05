# Solar Panel Roofing Installation — Batch 6 Draft (#1 of 5, energy-solar)

**serviceId:** `solar-panel-roofing-installation` · isResidential=true · isCommercial=true
**Macro angle:** the ROOFING side of rack-mounted PV — watertight attachment + structure + fire/electrical code, NOT electricity economics.
**Primary n-gram:** solar panel roofing installation / solar mount flashing (repeated in directAnswer opener, overview[0], approachContent, closing whyChooseUs + pricing).
**Differentiation:** this page is rack-mounted (BAPV) roofing prep + flashing; `solar-shingle-installation` (#2) is the BIPV roof-covering-replacement angle — no duplicate treatment.

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 "Who Provides Solar Panel Roofing Installation in Newark?" | `directAnswer` (38 w, bolded answer) |
| H2 "What Solar Panel Roofing Installation Do We Provide?" | `overview[]` (2) + `subServices[]` (5) |
| H2 "How Do You Know If You Need Solar Panel Roofing Installation?" | `signs[]` (6); label = `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Solar Panel Roofing Installation?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Solar Panel Roofing Installation Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` ("Should you repair or replace your roof before installing solar panels?") |
| H2 "Why Choose Our Roofing Company for Solar Panel Roofing Installation?" | `whyChooseUs.reasons[]` (5) |
| Related services / KB / scheduling H2s | template-rendered (no field) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

---

## Named sources used → exact figure/claim attributed

| Named source | Figure / claim attributed in-text |
|---|---|
| NRCA Rooftop PV Guidelines (+ IronRidge) | flashed foot = lag bolt into rafter; upper flange tucks UNDER the upslope shingle course so water sheds onto intact shingles; flashing on top of the course = leak path |
| NRCA + Solar Power World | mount flashing follows the roof-covering manufacturer instructions + compatible sealant or it voids the roofing warranty → solar installer coordinates with the roofer |
| NRCA + SPRI | flat/low-slope = 2 methods: non-penetrating ballasted on a protection pad over the membrane, OR mechanically-attached penetrating-and-flashed anchors |
| ASCE 7 | uplift + required ballast; corner/perimeter zones need more ballast than the field; roof structure verified to carry the added dead load before install (qualitative — NO fixed psf) |
| NEC 690.12 (NFPA 70) + UL 3741 | rapid shutdown: ≤30 V outside / ≤80 V inside the array boundary within 30 s; via module-level electronics or a listed UL 3741 system; array boundary = 1 ft outside; LIMITS voltage (does not zero modules) |
| UL 790 | fire Class A/B/C = module + mounting + roof-covering ASSEMBLY rating, not the module alone |
| IRC R324.6 | firefighter access pathways ≥36 in; ridge setback 18 in for array ≤33% of roof / 36 in for >33% |
| IRC/IFC/NEC (AHJ) | rooftop array requires an AHJ building + electrical permit and inspection |
| NREL + DOE | crystalline-silicon modules ~25-yr performance warranties, operate ~25–30+ yr; degradation median ~0.5%/yr → ~85–88% of rated output at 25–30 yr |
| industry rule of thumb (NOT code) | re-roof first if the roof has less remaining service life than the ~25–30-yr panels — explicitly framed as a "roofing rule of thumb, not a code requirement" |
| NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | re-roof of covering on detached 1–2 family = ordinary maintenance, no construction permit; the array itself needs an AHJ permit |
| NJ Board of Public Utilities (Successor Solar Incentive / SuSI) | NAMED qualitatively — no $/MWh on page |
| NJ net metering / NJ Division of Taxation (Form ST-4, Form CRES) | NJ sales-tax exemption (ST-4) + property-tax exemption (CRES), named qualitatively |
| IRS (P.L. 119-21 / OBBB) | federal residential solar credit was 30% for systems completed through 2025, REPEALED after Dec 31, 2025 (framed historically); §48E commercial path remains, solar facilities terminate after Dec 31, 2027 unless construction begins within 12 mo of OBBB enactment |

**Incentive handling (per §0.2 / §0.7 / Part E):** NO current "30% federal tax credit" touted. Federal residential credit framed HISTORICALLY ("was 30% … through 2025 … repealed after December 31, 2025, per the IRS"). NJ programs named QUALITATIVELY (SuSI via NJ BPU, net metering, ST-4, CRES). No hard SREC-II $/MWh. NQR referred owner to a tax professional; NQR is the roofer, not the program administrator or tax advisor.

**No de-fab literals; no certification claims.** NABCEP not claimed for NQR (not named on-page to avoid implying status). No "GAF Energy certified", "Tesla certified installer". No "panels extend roof life" (dropped per §0.12). No fixed psf dead load (qualitative per ASCE 7). No coating R-value claim (N/A this page). No fabricated efficiency/savings %.

---

## Self-audit checklist

- [x] **Answer-first, bolded:** first sentence under every heading is a definitive ≤40-word answer wrapped in `**…**` (directAnswer, overview[0], each sign, each approach item, residential[0], commercial[0], each FAQ answer). Bolded span = the answer clause, not the bare keyword. Verified by script: overview0=33, signs 6–17, approach0=39, approach1=27, approach2=31, res0=35, com0=40, all 6 faq answers ≤40. directAnswer = 38 words.
- [x] **directAnswer ≤40 words** (38), repeats primary n-gram "solar panel installation" / "roofing side".
- [x] **Zero modality in declaratives:** grep `will|should|need to|have to|must|might|may|would|could` returns 0 outside `faqs[].question`. All five "will not outlast" instances rewritten to "has/with less remaining service life than the array". (faqs[0] "Should you repair or replace…", faqs[1] "Do solar panel mounts leak…", faqs[2] "Do you need a permit…" exempt as question fields.) No "can" hedge.
- [x] **Every digit named-sourced:** 25/25–30+/0.5%/85–88% → NREL + DOE; ≤30 V / ≤80 V / 30 s / 1 ft → NEC 690.12; 36 in / 18 in / 33% → IRC R324.6; 2 methods / ballast zones → NRCA + SPRI + ASCE 7; UL 790 / UL 3741 named standards; 30% (historical) / Dec 31 2025 / Dec 31 2027 / 12 months → IRS (OBBB); N.J.A.C. 5:23-2.7 → NJ UCC; 6.625% NOT stated (ST-4 named qualitatively); SuSI → NJ BPU qualitatively. No invented numbers; no $/MWh; no fixed psf.
- [x] **Counted plurals match items:** "4 roofing tasks: watertight mount flashing, roof-structure load verification, fire and electrical code coordination, roof-age assessment" → exactly 4; "2 methods: non-penetrating ballasted … OR mechanically-attached penetrating … flashed" → exactly 2 (subServices, signs, approach, residential, commercial, processSteps mirror this).
- [x] **approachSubheadings.length === approachContent.length** → 3 === 3.
- [x] **Schema field counts valid:** overview 2 (2–5), subServices 5, signs 6 (4–10), approachContent 3 (2–5), residential.content 2 (2–5), commercial.content 2 (2–5), processSteps 6 (4–8), faqs 6 (4–10), pricing.factors 5, whyChooseUs.reasons 5.
- [x] **credentialsHighlight exact:** `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **No outbound links / URLs** in any prose; all attribution is name-only.
- [x] **No pronoun co-reference to entities:** repeats "the array", "the mount flashing", "the roof covering", "the upslope shingle course", "Newark Quality Roofing"; grep for `it/they/them/these/those/there` bound to an entity = 0.
- [x] **No hype words** (best/leading/trusted/premier/top-rated/unbeatable/amazing/seamless). 0 hits.
- [x] **No de-fab literals** (24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, 15+ years, [VERIFY]/[UNVERIFIED]). 0 hits. No manufacturer/installer-certification claim. "unverified" adjective replaced with "unconfirmed" to avoid grep collision.
- [x] **Incentive reality (2026):** no current 30% federal credit; framed historically + repeal date per IRS; NJ SuSI/net metering/ST-4/CRES named qualitatively; §48E commercial path named for business-owned.
- [x] **One macro topic:** solar panel roofing installation (the roofing side) H1→close; no jump to electricity economics; primary n-gram in opening answer + closing whyChooseUs/pricing.
- [x] **Both residential{} and commercial{} blocks substantive** (isResidential=true, isCommercial=true).
- [x] **Snippet boundaries:** starts `// ─── 1. Solar Panel Roofing Installation ───` then `{`; ends `},`; single quotes; en-dashes for ranges; apostrophe-free (no escaping needed); parses as one array element (validated via node).
