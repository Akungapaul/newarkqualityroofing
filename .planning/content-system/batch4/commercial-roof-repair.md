# Commercial Roof Repair — Answer-First Rewrite (Batch 4)

`serviceId: 'commercial-roof-repair'` | Target slug: `/commercial-roof-repair` | Commercial primary block.

Gold exemplar matched: `serviceId: 'roof-repair'`. Quality bar: human-approved gold. De-fabrication applied sitewide (no 24/7, same-day, GAF-Certified-as-credential, 0% financing, 15+ years, 500+ projects, star/review counts, hype words). `financingNote` OMITTED per commercial-service instruction. NJ energy-code continuous-insulation requirement NOT asserted (not in packs) — stated qualitatively/omitted, unlike the batch3 EPDM snippet.

## Rendered heading → field map

| Rendered H (HEADING_CONFIG.service, [Service]="Commercial Roof Repair") | Snippet field |
|---|---|
| H1: "Who Provides Commercial Roof Repair in Newark?" | `directAnswer` (37 words, opens "**Newark Quality Roofing provides commercial roof repair across Newark and Essex County…**") |
| H2: "What Commercial Roof Repair Do We Provide?" | `overview[]` + `subServices[]` (6 problems / 6 sub-services) |
| H2: "How Do You Know If You Need Commercial Roof Repair?" | `signsHeading` + `signs[]` (6 signs) |
| H2: "How Do Our Roofing Contractors Perform Commercial Roof Repair?" | `approachHeading` + `approachContent[3]` / `approachSubheadings[3]` |
| H2: "How Much Does Commercial Roof Repair Cost?" | `pricing.range` + `pricing.factors[]` (no `financingNote`) |
| H2: "Should You Repair or Replace Your Roof?" | covered in FAQ "When should you replace rather than continue repairing…" + signs (25–30% threshold) |
| H2: "Why Choose Our Roofing Company for Commercial Roof Repair?" | `whyChooseUs` (heading + 4 reasons) |
| Residential block | `residential.heading` "We Also Repair Residential Flat Roofs" |
| Commercial block (primary) | `commercial.heading` "Comprehensive Commercial Roof Repair Services" |
| Process | `processSteps[5]` |
| FAQ | `faqs[6]` |

`approachSubheadings.length === approachContent.length === 3` (gate). Eval-parse confirmed valid TS object.

## Legacy/structural fields kept for Zod
`serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings`, `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel` (both blocks: "Get Home Estimate" / "Get Commercial Quote") — all present; prose fully rewritten. Both residential + commercial blocks retained, commercial primary.

## Named sources used (cite-by-name, Register A) and the figures attributed

| Source (named in-text) | Figure / fact attributed |
|---|---|
| InterNACHI life-expectancy chart | EPDM 15–25 yr; TPO 7–20 yr; modified bitumen 20 yr; BUR 30 yr (membrane lifespans) |
| Single Ply Roofing Industry | PVC 20–30 yr service life (§6 commercial single-ply) |
| NRCA (technical guidance) | EPDM fails at splice seams / TPO at welded seams (dominant failure modes); water travels horizontally on low-slope membranes; flashing-transition failure; blistering/alligator cracking; ¼-in/ft slope; ASTM C1153 verification context |
| ARMA | ponding water >48 h = defect; ¼-in/ft slope to drain (with NRCA) |
| ASTM (C1153) | suspected wet area must be verified by core cut, probe, or calibrated moisture meter; thermal anomaly not diagnostic alone |
| Parish, Modernize, HomeGuide (flat-roof guidance) | flat-roof 25–30% replacement threshold |
| HomeAdvisor | recurring same-spot leak = systemic failure regardless of area |
| Insurance Information Institute (Triple-I, 2019–2023) | wind & hail largest claim type, 2.8%/yr = 1 in 36 |
| Owens Corning warranty guidance | material warranty (factory defects) vs written workmanship warranty (labor) |
| HomeGuide | commercial flat-roof repair $2.50–$10.00/sq ft, $300–$1,100 typical |
| Modernize / WeatherShield | seam re-weld $200–$400; section replacement $500–$1,000 |
| Angi | minor flat-roof leak $150–$500; extensive + structural $1,200–$3,000 |
| N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | commercial: >25% of roof area in 12 months requires permit; detached 1–2 family covering repair = ordinary maintenance (residential block) |
| N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | complete removal required for water-soaked covering or ≥2 existing layers |
| NJ Division of Consumer Affairs | NJ HIC registration requirement (whyChooseUs) |
| Contractors Registration Act | liability-insurance requirement for registered NJ HIC (whyChooseUs) |
| Firestone, Carlisle, Johns Manville | membrane systems NQR installs/services (brands installed — not certified-installer claims) |

`pricing.range = $300–$1,100 for most commercial repairs` — sourced commercial flat-roof figure (HomeGuide). Per-sq-ft $2.50–$10.00 stated in factors. `financingNote` OMITTED.

## Internal links (Rule 23 — anchor ⊂ target title)
- `[commercial roof replacement](/commercial-roof-replacement)` — anchor "commercial roof replacement" is a substring of the target H1 "Who Provides Commercial Roof Replacement in Newark?". Markdown relative path, no outbound URL.

## Withheld [VERIFY] / de-fabricated items (NOT rendered in snippet; listed here only)
- **NJ HIC license number** (13VH…) — omitted; "holds NJ Home Improvement Contractor registration" stated without a number.
- **Phone, street address, ZIP, geo, social `sameAs`** — omitted; service-area + hours only.
- **24/7 / same-day / emergency premium / callback-within-1-hour** — removed; no response-time literal asserted.
- **GAF Certified Contractor / Master Elite tier** — removed; only "installs and services Firestone, Carlisle, Johns Manville" (installed brands, not certified status).
- **"15+ years of experience", "500+ projects", "5-star", BBB A+, "fully insured & bonded", "family-owned", "premium materials", warranties "up to 50 years"** — all removed.
- **0% financing / flexible payment plans** — `financingNote` omitted entirely.
- **Workmanship-warranty term** (5/10/25 yr) — qualitative only ("a written workmanship warranty backs the labor"); no length asserted.

## factGapsFlagged (figure not in packs → stated qualitatively or omitted)
1. **Freeze-thaw cycle COUNT** (35–45/yr, [UNVERIFIED]) — not used; cold-weather framing omitted on this page (qualitative only if used elsewhere).
2. **NJ energy-code continuous-insulation requirement** — not in packs; NOT asserted (the batch3 EPDM snippet asserts it; this snippet intentionally omits to satisfy the gate rule against unsourced regulatory requirements).
3. **Per-material commercial *repair* (not install) $ deltas for PVC/SPF/BUR specifically in NJ** — no NJ-specific repair figures; used national flat-roof repair ranges (HomeGuide/Modernize/Angi/WeatherShield) + the NJ +10–40% consensus.
4. **"X% of leaks/failures from Y" membrane failure-share percentages** — flagged [UNVERIFIED] in packs; stated qualitatively ("fails most often at the seams"), no invented percentage.
5. **Commercial annual-repair-cost-vs-replacement-cost percentage threshold** (the legacy "10% of replacement cost" line) — not in packs; replaced with the sourced flat-roof 25–30% area rule + 30% repair-cost rule (Parish/Modernize/HomeGuide) and recurring-leak systemic rule (HomeAdvisor).
6. **TPO lifespan spread** — InterNACHI lists 7–20 yr; industry often cites 15–25 yr. Used the InterNACHI 7–20 figure for chart consistency with the gold exemplar.

## Self-audit (gate rules)
- No modality in declaratives (only hit: FAQ `question:` "When should you replace…" — excluded). ✓
- No `[VERIFY]`/`[UNVERIFIED]` literals; no de-fab literals (grep clean). ✓
- No outbound links/URLs; internal link markdown relative + anchor ⊂ target title. ✓
- Every hard number attributed to a named authority in the packs. ✓
- Answer-first: directAnswer 37 w (≤40); every overview/signs/approach/residential/commercial/FAQ paragraph opens with a bolded **answer** span (answer bolded, not keyword). ✓
- Drainage phrasing verb+noun: "needs at least ¼ inch per foot of slope to drain" (no "needs to"). ✓
- Counted plurals match items: "6 commercial roof problems" → 6 listed + 6 subServices; "5 commercial membrane types: EPDM, TPO, PVC, modified bitumen, and built-up roofing" → 5. ✓
- No hype/sentiment/superlatives; no analogy/casual; no entity-pronoun co-reference (entities repeated: "the membrane", "the seam", "Newark Quality Roofing"). ✓
- Object eval-parses as valid TS; trailing comma; apostrophe escaped (`manufacturer\'s`). ✓
