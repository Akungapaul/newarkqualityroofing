# Roof Overlay Installation — Draft Doc (Batch 8, entry #2 of 15)

**serviceId:** `roof-overlay-installation`
**Macro topic:** an HONEST asphalt roof-over (recover) — a second asphalt-shingle layer over one existing sound asphalt layer, no tear-off; cheaper and faster but with real trade-offs and strict eligibility limits. NEVER presented as equal to a tear-off.
**isResidential:** true · **isCommercial:** false (concise honest commercial block written; no commercial overlay specialty over-claimed)
**Zod ServiceContentSchema:** PASS (validated via tsx).

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Roof Overlay Installation in Newark?" | `directAnswer` (34 words) |
| H2 "What Roof Overlay Installation Do We Provide?" | `overview[]` (2) + `subServices[]` (3) |
| H2 "How Do You Know If You Need Roof Overlay Installation?" | `signs[]` (6); `signsHeading` = "Signs a Roof Overlay Fits Your Roof" |
| H2 "How Do Our Roofing Contractors Perform Roof Overlay Installation?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Roof Overlay Installation Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace FAQ |
| H2 "Why Choose Our Roofing Company for Roof Overlay Installation?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (7) |

`approachSubheadings.length (3) === approachContent.length (3)` ✓

---

## Named sources → exact figure / fact attributed

| Named source | Figure / fact used on page |
|---|---|
| **ARMA** (Asphalt Roofing Manufacturers Association) | Recover = "installing an additional roof covering on an existing roof covering"; tear-off lets the roofer inspect/repair the deck while a recover hides it |
| **HomeGuide** + **Angi** | Overlay runs roughly **20–25% less** than a full tear-off, commonly **$2,000–$5,000** cheaper for a typical home (labeled NATIONAL) |
| **Angi** | Trapped heat cuts the new shingles' service life by roughly **20–30%** (national industry estimate, ranged); future re-roof over 2 layers removes both at higher cost |
| **InterNACHI** life-expectancy chart | 3-tab asphalt **20 years**, architectural **30 years**; hidden-deck-rot framing (with ARMA) |
| **N.J.A.C. 5:23-6.4** (NJ Rehabilitation Subcode) | 3 conditions barring a recover — (a) water-soaked/deteriorated deck, (b) wood shake / slate / clay / cement / asbestos-cement tile, (c) 2+ existing layers; wood shake listed expressly |
| **IRC Section R908.3.1.1** (NJ UCC) | Roof capped at **2 total layers**, no third layer; reroofing recover-not-allowed conditions |
| **IRC Section R908** | Prohibits roofing over a water-soaked / deteriorated (unsound) base |
| **N.J.A.C. 5:23-2.7** (NJ UCC) | 1–2 family roof-covering repair/replacement = ordinary maintenance, no construction permit; commercial >25%/12-mo needs a permit |
| **GAF Technical Bulletin TAB-R-145** | Recover permitted only with ONE existing layer + smooth surface; complete tear-off necessary where more than one roof is in place |
| **GAF Shingle & Accessory Limited Warranty** | Applies only when shingles install in strict accordance with printed instructions; a non-conforming recover falls outside coverage |
| **Owens Corning** installation instructions | Surface must be smooth before shingles install; shingles take the shape beneath and telegraph the old profile (with GAF) |
| **Josten Roofing** (NJ pricing) | NJ architectural asphalt **$6.50–$11.00/sq ft**, 3-tab **$5.50–$9.50/sq ft** installed |
| **NRCA** + **ARMA** | Low-slope roof needs ≥¼ in per foot of slope to drain; ponding >48 hours = a defect (commercial block) |

NQR product brands named (allowed): GAF, Owens Corning shingles; Firestone, Carlisle, Johns Manville membranes.

---

## Self-audit checklist

- [x] **Answer-first, bolded opener** on every section: directAnswer, overview[0], all 6 signs, all 3 approach paragraphs, residential[0], commercial[0], all 7 FAQ answers begin with a bolded definitive answer clause. directAnswer = 34 words (≤40).
- [x] **Zero modality** in declaratives (will / should / need to / have to / must / might / may / would / could) — node grep across every field EXCEPT `faqs[].question`: 0 hits. (FAQ question "Should you repair or replace your roof?" is the exempt rendered-H2 form.)
- [x] **Every hard number named-sourced:** 20–25% & $2,000–$5,000 (HomeGuide/Angi, national); 20–30% lifespan cut (Angi, national estimate); 20 yr / 30 yr (InterNACHI); 2 layers / R908.3.1.1 / 5:23-6.4 (NJ UCC); 25%/12-mo & ¼ in/ft & 48 hr (NRCA/ARMA/UCC); $6.50–$11.00 & $5.50–$9.50 per sq ft (Josten). No invented figure; no UNVERIFIED stat stated numerically.
- [x] **Counted plurals match:** "the 3 conditions that bar a recover" (3 listed: deck / covering / layers); "2 or more layers"; "2 total layers".
- [x] **approachSubheadings.length === approachContent.length** (3 === 3).
- [x] **credentialsHighlight** exactly `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **No de-fab literals:** no 24/7, same-day, "GAF Certified", 0% financing, top-rated, 500+, N+ years, fabricated ratings/phone/address, [VERIFY]/[UNVERIFIED]. (Brand names GAF/Owens Corning/Firestone/Carlisle/Johns Manville are product-install mentions, not certification claims. "Free Roof Inspections" is the approved credential, not a "free roof" replacement promise.)
- [x] **No outbound links / URLs** in any prose field.
- [x] **No pronoun co-reference** to entities — repeats "the deck", "the overlay", "a roof overlay", "Newark Quality Roofing", "a tear-off".
- [x] **No hype words** (best/leading/trusted/premier/top-rated/seamless-as-praise).
- [x] **One macro topic** — "roof overlay" repeats in the opening answer and the closing whyChooseUs / pricing sections; the page stays on the asphalt recover end to end.

### OVERLAY-specific compliance (Batch 8 §0 rule 9 + §4)
- [x] Overlay is **explicitly stated as LESS than a tear-off** (directAnswer frames it as no-tear-off; overview[1], approach[1], whyChooseUs reason 2, and the "Is a roof overlay as good as a full tear-off?" FAQ all disclose the trade-offs). Never presented as equal.
- [x] All 4 honest trade-offs carried: hides deck rot (ARMA/InterNACHI), traps heat → ~20–30% shorter life (Angi), telegraphs old profile (Owens Corning/GAF), adds dead load.
- [x] Eligibility limits stated plainly: single sound asphalt layer only; barred over water-soaked/deteriorated deck, over wood shake/slate/clay/cement/asbestos-cement tile, and where 2+ layers exist (N.J.A.C. 5:23-6.4 / IRC R908.3.1.1).
- [x] Cost delta labeled **national** (HomeGuide/Angi); NJ per-sq-ft labeled to **Josten Roofing**. No invented Newark/Essex overlay-vs-tear-off price.
- [x] Manufacturer warranty stated as ATTRIBUTED conditional (GAF/Owens Corning printed-instruction condition) — NOT a flat "overlay voids the warranty" claim; no invented warranty clause number.
- [x] IRC cited as **R908.3.1.1** for the layer cap (not bare R908.3); wood shake attributed to **N.J.A.C. 5:23-6.4** (not the model IRC).

### Insurance/public-adjuster compliance (N/A surface, but confirmed clean)
- [x] No public-adjuster / claim-handling / deductible-waiver / guaranteed-approval / "free roof" / "no out-of-pocket" language anywhere (this overlay page does not address insurance claims; no such claim is made).
