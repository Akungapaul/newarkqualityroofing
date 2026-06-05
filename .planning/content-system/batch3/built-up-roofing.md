# Built-Up Roofing — Answer-First Rewrite (Batch 3)

`serviceId: 'built-up-roofing'` — commercial roof type (commercial-roof-types.ts).
Quality bar: human-approved gold exemplar `roof-repair`. Validates against `ServiceContentSchema`.

## Rendered-heading → field map

| Rendered heading (HEADING_CONFIG.service, [Service]="Built-Up Roofing") | Backing field | Opening definitive answer |
|---|---|---|
| **H1** — Who Provides Built-Up Roofing in Newark? | `directAnswer` | "Newark Quality Roofing provides built-up roofing across Newark and Essex County, installing and restoring multi-ply BUR membranes on commercial low-slope roofs…" (28 words) |
| **H2** — What Built-Up Roofing Do We Provide? | `overview` (+ `subServices`) | "Newark Quality Roofing provides built-up roofing for commercial low-slope roofs across Essex County: 3-ply, 4-ply, and 5-ply BUR systems, gravel-surfaced and coated, plus BUR restoration and recover…" |
| **H2** — How Do You Know If You Need Built-Up Roofing? | `signsHeading` + `signs` | Each of 6 signs opens with a bolded indicator (alligatoring/bald spots, blisters, ponding >48h, heavy-traffic redundancy, recurring leaks, >25–30% membrane damage). |
| **H2** — How Do Our Roofing Contractors Perform Built-Up Roofing? | `approachHeading` + `approachContent` (3) + `approachSubheadings` (3) | "Newark Quality Roofing contractors assess the BUR membrane, the surfacing, the flashing details, and the drainage before specifying a built-up roof…" |
| **H2** — How Much Does Built-Up Roofing Cost? | `pricing` (+ cost FAQ) | "Commercial low-slope roofing in New Jersey runs $7–$12 per square foot installed, against an EPDM flat-roof install of $7–$10 per square foot…" |
| **H2** — Why Choose Our Roofing Company for Built-Up Roofing? | `whyChooseUs` + `credentialsHighlight` | 4 reasons: NJ HIC, Insured, Free Roof Inspections, Local Essex County Roofers (de-fabricated, mirrors gold). |

Other config H2s (Should You Repair or Replace; Related Roofing Services; Knowledge Base Articles; How Can You Schedule) render from `subServices`/related-link/CTA logic, not from rewritten prose fields here. Answer-first repair-vs-replace content is carried in the FAQ "Should you restore or replace a built-up roof?".

`approachSubheadings.length (3) === approachContent.length (3)` ✓. Zod parse confirmed: overview 2, signs 6, subServices 5, processSteps 6, faqs 6, pricing.factors 5, whyChooseUs.reasons 4. `financingNote` OMITTED.

## Named sources + figures used (all from fact packs)

| Figure / claim | Named authority | Pack location |
|---|---|---|
| Built-up roofing (BUR) **30 years** service life | InterNACHI life-expectancy chart | facts-materials-economics §0, §4 [PRIMARY] |
| EPDM **15–25 yr**, TPO **7–20 yr**, modified bitumen **20 yr** (comparison) | InterNACHI life-expectancy chart | §0, §4 [PRIMARY] |
| Flat-roof replace at **>25–30%** membrane damage | Parish / Modernize / HomeGuide | §4 [SECONDARY] |
| Recurring leaks in same spot → replace regardless of % | HomeAdvisor | §4 [SECONDARY] |
| **¼ inch per foot** min slope; ponding **>48 h = defect** | NRCA and ARMA | facts-nj-regulatory-climate / gold exemplar usage |
| Commercial: repair **>25%** of roof area in **12-month** period → permit | N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | facts-nj-regulatory-climate §1.2 |
| Detached 1- & 2-family roof covering = ordinary maintenance, no permit | N.J.A.C. 5:23-2.7 (NJ UCC) | §1.1 |
| Full removal when water-soaked or **2+ layers** | N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | §1.4 |
| Commercial low-slope install **$7–$12/sq ft** (EPDM flat $7–$10; TPO $8–$12) | Josten Roofing (NJ) | facts-materials-economics §7, §6 [SECONDARY] |
| Flat-roof repair **$2.50–$10/sq ft**, or **$300–$1,100** typical | HomeGuide | §4 [SECONDARY] |
| NJ runs **10–40% above national** averages | regional/NJ cost consensus | §7 [SECONDARY] |
| Reflective/cool-roof solar reflectance measured per **ASTM C1549**, listed by **CRRC** | ASTM / CRRC | §6 (PVC/SPF cool-roof entry) |

`pricing.range = "$7–$12/sq ft for commercial low-slope systems"` — sourced commercial $/sqft (Josten Roofing NJ flat-roof install range, used as the BUR low-slope proxy). `financingNote` OMITTED per brief.

## Withheld [VERIFY] items (omitted from snippet, listed per D-01)

- **NJ HIC registration number** (13VH…) — omitted; "NJ HIC Licensed" badge + "holds New Jersey Home Improvement Contractor registration" stated qualitatively (no number).
- **Insurance carrier / coverage statement** — omitted; "carries liability coverage … the insurance the Contractors Registration Act requires" (no policy detail).
- **GAF / manufacturer certification tier** — omitted entirely (no "GAF Certified Contractor" claim). Membrane/asphalt brand names not asserted as NQR certifications.
- **Years in business / "15+ years"** — omitted (banned fabricated literal).
- **24/7 / same-day / emergency-response / callback-time** claims — omitted.
- **0% financing / financingNote** — omitted (and `financingNote` field dropped).
- **Star ratings / review counts / "trusted"/"top-rated"** — omitted.
- **Phone number** — env-driven, not asserted in prose.
- **Workmanship warranty term** — stated qualitatively as "a written workmanship warranty on the labor" (no length, since term is [VERIFY]).
- **Project counts / "500+"** — omitted.

## factGapsFlagged (figures NOT in packs → stated qualitatively or omitted)

1. **BUR-specific install $/sq ft** — the packs carry no BUR-specific NJ install price. Used the NJ flat-roof / EPDM low-slope install range ($7–$12, Josten Roofing NJ) as the sourced low-slope proxy and named it as a commercial low-slope figure rather than inventing a BUR-specific number.
2. **BUR ply count vs. lifespan deltas** (e.g., "4-ply lasts X yr longer than 3-ply") — no sourced figure; ply-count effect on cost stated qualitatively ("a 4-ply or 5-ply BUR system adds reinforcing fabric and bitumen over a 3-ply system").
3. **Hot-asphalt / kettle application temperatures** (e.g., 400–475 °F) — present only in the legacy entry, NOT in the fact packs; OMITTED rather than asserted. Bitumen-grade-to-slope matching stated qualitatively.
4. **Gravel surfacing weight** (e.g., 300–400 lb/100 sq ft) — legacy-entry figure, not in packs; OMITTED; surfacing role stated qualitatively (shields plies from UV/impact).
5. **Solar-reflectance/cooling % for coated BUR** — no BUR-specific reflectance figure in packs; described qualitatively ("raises solar reflectance against the dark bitumen") with ASTM C1549/CRRC measurement attribution from §6.
6. **Freeze-thaw "cycles per winter" count** — [UNVERIFIED] per brief; not stated numerically. (Snippet does not assert a cycle count; Essex County climate referenced only qualitatively.)
7. **BUR multi-century track record ("120 years")** — legacy claim, no pack source; OMITTED.

## Self-audit (gate rules)

- Answer-first: directAnswer 28 words / 204 chars ≤ limits; every section field + all 6 FAQs open with a bolded definitive answer. ✓
- Modality grep (will/shall/should/need to/have to/must/ought to/might/may) in declaratives: **none** (FAQ questions use "Do you need…", "Should you…", which are permitted). ✓
- Every hard number attributed to a named authority present in the packs (InterNACHI, NRCA, ARMA, N.J.A.C. 5:23-2.7 / 5:23-6.4, Josten Roofing NJ, HomeGuide, HomeAdvisor, Parish/Modernize, ASTM C1549/CRRC). ✓
- No outbound links/URLs; no internal markdown links added (legacy entry's `[built-up roofing]` self-link not reproduced; no self-referential or unverified anchors). ✓
- No fabricated trust claims; no `[VERIFY]`/`[UNVERIFIED]` literals; no de-fabrication literals. ✓
- Counted plurals match: "3 options" → 3 items (replacement / restoration / conversion). ✓
- `**` bold spans balanced on every line; `¼` and en-dash characters intact. ✓
- Both residential + commercial blocks retained (schema requires); commercial carries the primary audience per the commercial system. ✓
