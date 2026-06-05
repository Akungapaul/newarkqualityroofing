# Modified Bitumen Roofing — Answer-First Content Rewrite (Batch 3)

> Service: `modified-bitumen-roofing` ("Modified Bitumen Roofing") — COMMERCIAL system (`commercial-roof-types.ts`). Snippet: `modified-bitumen-roofing.snippet.ts`. Quality bar = the human-approved `roof-repair` gold exemplar. Structural/legacy fields (`serviceId`, `signsHeading`, `approachHeading`, `approachSubheadings` slot count, `residential.heading`, `commercial.heading`, `whyChooseUs.heading`, `ctaLabel`) preserved so Zod validates; all prose rewritten answer-first. Every hard number traces to a NAMED source in-text. No `[VERIFY]`/`[UNVERIFIED]` literals, no outbound links, no `will/should/need-to/needs-to/must` modality in declaratives, no fabricated trust claims, no `financingNote`. `directAnswer` and `subServices` ADDED to match gold exemplar shape (absent in legacy entry).
>
> **Validation run:** Zod `ServiceContentSchema.safeParse` → PASS. Replicated `audit:semantics` gate regexes (R6 modality, R9 outbound, R10 [VERIFY] + de-fab) → 0 gate failures. R8 plural-count → 0 mismatches. `approachSubheadings.length (3) === approachContent.length (3)`. `directAnswer` 35 words / 235 chars (≤40 / ≤320). Every section + FAQ opens with a bolded definitive answer span.

---

## Rendered heading → field map

The page renders question-form H-tags from `HEADING_CONFIG.service` (`heading-config.ts`); each field opens with a definitive answer to its rendered heading.

| Rendered heading (from `HEADING_CONFIG.service`, [Service] = "Modified Bitumen Roofing") | Source field | Opens by answering |
|---|---|---|
| **H1** — "Who Provides Modified Bitumen Roofing in Newark?" | `directAnswer` | "**Newark Quality Roofing installs modified bitumen roofing across Newark and Essex County…**" |
| **H2** — "What Modified Bitumen Roofing Do We Provide?" | `overview` (+ `subServices`) | "**Newark Quality Roofing provides 5 modified bitumen services across Essex County…**" |
| **H2** — "How Do You Know If You Need Modified Bitumen Roofing?" | `signs` (`signsHeading` legacy string retained) | 6 bolded signs, each a definitive symptom statement |
| **H2** — "How Do Our Roofing Contractors Perform Modified Bitumen Roofing?" | `approachContent` (`approachHeading`/`approachSubheadings` retained) | "**Newark Quality Roofing builds the modified bitumen roof as a multi-ply assembly…**" |
| **H2** — "How Much Does Modified Bitumen Roofing Cost?" | `pricing` (+ cost FAQ) | "**Flat-roof membrane repair in New Jersey runs $2.50–$10.00 per square foot…**" |
| **H2** — "Why Choose Our Roofing Company for Modified Bitumen Roofing?" | `whyChooseUs` (`whyChooseUs.heading` retained) | 5 reasons, license/insurance/method/inspection/local |
| (template H2s "Should You Repair or Replace…", "Related Services", "KB Articles", "How Can You Schedule…") | served by `faqs` + site components | repair-vs-replace FAQ answers the repair/replace H2 |

`processSteps` (6) and `residential`/`commercial` blocks render under the approach/audience sections. `subServices` (5) render under the overview/Core H2.

---

## Named sources used (in-text) + figures

All hard numbers cite a NAMED authority that appears in the fact packs.

| Figure / claim (in snippet) | Named source (in-text) | Fact-pack anchor |
|---|---|---|
| Modified bitumen lasts **20 years** | InterNACHI life-expectancy chart | facts-materials-economics §0 + §4 ([PRIMARY]) |
| Service-life study cites **12–20 years** for the membrane | "a service-life study" (Progressive Materials attrib in pack) | facts-materials-economics §4 ([SECONDARY-attrib]) |
| EPDM **15–25 yrs**, TPO **7–20 yrs**, BUR **30 yrs** | InterNACHI life-expectancy chart | facts-materials-economics §0 + §4 ([PRIMARY]) |
| SBS holds low-temperature flexibility better than APP (SBS = styrene-butadiene-styrene; APP = atactic polypropylene) | ARMA modified-bitumen guidance | facts-materials-economics §4 (failure/modifier qualitative); sources Part A (ARMA = asphalt/modified-bitumen authority) |
| Failure modes: **alligator cracking** (UV/oxidation), **blistering/delamination**, **flashing separation** | ARMA modified-bitumen guidance; NRCA | facts-materials-economics §4 (qualitative, [SECONDARY]); stated qualitatively (no % shares — see gaps) |
| **¼ inch per foot** min slope; **ponding > 48 h = defect** | NRCA and ARMA | facts-nj-regulatory + repair-maintenance gold exemplar usage; NRCA positive-drainage requirement (facts-materials §6 SPF note) |
| Newark crosses **32°F** repeatedly; avg **January low ≈ 25.5°F**; freeze-thaw described qualitatively (NO cycle count) | NOAA 1991–2020 normals at Newark Liberty (EWR); ARMA (flexibility relevance) | facts-nj-regulatory-climate §3.2 ([PRIMARY] for temps; cycle COUNT is [UNVERIFIED] → omitted) |
| Detached 1- & 2-family roof-covering re-roof = **ordinary maintenance, no permit** | NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | facts-nj-regulatory-climate §1.1 |
| Commercial: repair **> 25%** of roof area in 12 months → permit | NJ Uniform Construction Code (N.J.A.C. 5:23-2.7) | facts-nj-regulatory-climate §1.2 |
| Complete removal required when water-soaked / wood-slate-tile / **2+ layers** | NJ Rehabilitation Subcode (N.J.A.C. 5:23-6.4) | facts-nj-regulatory-climate §1.4 |
| Recover permitted only when sound and **fewer than 2 applications** | N.J.A.C. 5:23-6.4 | facts-nj-regulatory-climate §1.4 (inverse of 2+ layer rule) |
| Flat-roof replace threshold **25–30% area** / repair **30%** of replacement cost | Parish, Modernize, HomeGuide flat-roof guidance | facts-materials-economics §4 + §8 ([SECONDARY]) |
| **Flat-roof membrane repair $2.50–$10.00/sq ft**, **$300–$1,100** typical | HomeGuide | facts-materials-economics §4 ([SECONDARY]) |
| **NJ low-slope membrane install $7–$12/sq ft** (EPDM $7–$10, TPO $8–$12 proxy) | Josten Roofing (NJ) | facts-materials-economics §7 / §6 ([SECONDARY]) |
| **NJ runs 10–40% above national** | regional NJ cost guidance | facts-materials-economics §7 ([SECONDARY consensus]) |
| Torch hot-work fire-watch protocol | NRCA hot-work guidance | sources Part A (NRCA workmanship/safety); facts-process-standards context |
| Solar reflectance rated by Cool Roof Rating Council (reflective coating on smooth cap) | Cool Roof Rating Council (CRRC) | sources Part A (CRRC = reflectance/emittance authority); kept qualitative (no reflectance NUMBER for MB — see gaps) |
| NJ HIC registration / liability insurance requirement | NJ Division of Consumer Affairs; Contractors Registration Act | facts-nj-regulatory-climate §2; sources Part B (license type IN-REPO) |
| Brands installed: **Firestone, Carlisle, Johns Manville** (membrane) | (named as product lines NQR installs) | sources Part B "Brands installed" [IN-REPO]; matches gold exemplar membrane brand list |
| Hours **Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM**; cities Newark/East Orange/Bloomfield/Montclair/Belleville/Irvington | NQR canonical config | sources Part B [IN-REPO] `site-config.ts` |

---

## Material-accuracy compliance

- Modified bitumen **20 yr** stated as InterNACHI primary; 12–20 yr secondary spread flagged in FAQ via "a service-life study." Comparators (EPDM 15–25, TPO 7–20, BUR 30) all from InterNACHI per the brief.
- SBS-vs-APP cold-flexibility difference stated **qualitatively** ("holds low-temperature flexibility better than APP") — the pack gives no specific low-temperature flex figure for SBS, so no degrees-below-zero number is asserted (the legacy entry's "well below zero degrees Fahrenheit" claim was DROPPED as unsourced).
- Freeze-thaw stated qualitatively with the sourced **January low ≈ 25.5°F** and **32°F** crossing; the freeze-thaw **cycle count** ([UNVERIFIED] in facts-nj-regulatory §3.2) is OMITTED — no "dozens of cycles" or numeric cycle claim.
- Failure-share percentages ("68% seam," "78% welded-seam," "X% flashing") are [UNVERIFIED] across the pack and are OMITTED; failure modes stated qualitatively only.
- Pricing uses sourced commercial/low-slope $/sq ft (HomeGuide repair + Josten NJ install proxy). `financingNote` OMITTED per brief.

---

## Withheld [VERIFY] / [UNVERIFIED] NQR specifics (omitted or stated qualitatively — never literal in snippet)

Per sources-and-nqr-facts Part B + D-01, these are withheld:

1. **NJ HIC registration number** (13VH######00) — omitted; "holds NJ Home Improvement Contractor registration" stated without a number.
2. **GAF Certified / Master Elite certification tier** — omitted entirely (legacy "GAF Certified Contractor" credential REMOVED); no certified-installer claim rendered.
3. **"15+ years of experience" tenure claim** — REMOVED (legacy `credentialsHighlight` + whyChooseUs); replaced with role/scope descriptors.
4. **24/7 emergency response / same-day estimates** — REMOVED (legacy "Fast Response & Emergency Service" reason); replaced with method/inspection reasons.
5. **0% financing / flexible payment plans** — REMOVED; `financingNote` omitted; legacy cost-FAQ financing line dropped.
6. **"Fully insured and bonded" / BBB A+ / 5-star / family-owned** — REMOVED; only "Insured" (statutory liability requirement) and truthful "Free Roof Inspections" / "Local Essex County Roofers" badges retained.
7. **Manufacturer warranty "up to 50 years"** and **NQR workmanship-warranty term** — OMITTED (workmanship term [VERIFY]; warranty tier depends on unconfirmed certification). No specific MB manufacturer warranty term (legacy "10 to 20 years") asserted as NQR's.
8. **Phone number** — not referenced in prose (env-driven, [VERIFY]).
9. **Specific reviews/testimonials and rating counts** — the two legacy "What do reviews say" / "How experienced is your team" FAQs were DROPPED (review/rating + tenure claims).

---

## factGapsFlagged (figures NOT in the fact packs → stated qualitatively or omitted)

1. **Modified-bitumen-specific NJ install $/sq ft** — the pack has no MB-specific NJ install price. Used HomeGuide flat-roof **repair** $2.50–$10/sq ft and Josten NJ **EPDM/TPO install** $7–$12/sq ft as the closest sourced low-slope proxy, labeled in-text as "comparable EPDM and TPO systems" and "the closest NJ benchmark." (Legacy "$6–$10/sq ft" MB figure was unsourced and DROPPED.)
2. **SBS low-temperature flexibility threshold** (e.g., "−40°F" / "below zero") — not in pack; stated qualitatively ("holds low-temperature flexibility better than APP").
3. **Modified-bitumen membrane thickness (130–180 mil), ply-count cost deltas, mil-by-warranty** — not sourced in pack; ply-count cost difference stated qualitatively ("a 3-ply torch-applied SBS assembly involves more material and labor than a 2-ply self-adhered system") without a dollar figure.
4. **Failure-share percentages** for MB (seam/flashing/blister %) — [UNVERIFIED] in pack; failure modes stated qualitatively only.
5. **Freeze-thaw cycles per winter** — [UNVERIFIED] count; omitted, replaced by qualitative freeze-thaw + sourced January-low temperature.
6. **Solar reflectance number for MB reflective coating** — pack gives reflectance figures for PVC (≈0.70–0.85) not for MB coatings; the MB coating claim is kept qualitative ("rated for solar reflectance by the Cool Roof Rating Council") with no MB-specific reflectance value, and no ASHRAE 90.1 cool-roof numeric claim asserted.
7. **APP heat/UV-stability quantification** — stated qualitatively ("heat-resistant and UV-stable but stiffer in cold"), no figure.
