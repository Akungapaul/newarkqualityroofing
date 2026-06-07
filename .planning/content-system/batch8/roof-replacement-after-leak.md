# Roof Replacement After Leak — Draft Doc (Batch 8, entry #7/15)

serviceId: `roof-replacement-after-leak` · isResidential=true · isCommercial=false
Macro angle: when repair is no longer enough — full replacement to permanently end CHRONIC/RECURRING leaks.

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1: "Who Provides Roof Replacement After Leak in Newark?" | `directAnswer` (38 words, ≤40) |
| H2: "What Roof Replacement After Leak Do We Provide?" | `overview[]` (2) + `subServices[]` (4) |
| H2: "How Do You Know If You Need Roof Replacement After Leak?" | `signs[]` (8), label `signsHeading` |
| H2: "How Do Our Roofing Contractors Perform Roof Replacement After Leak?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2: "How Much Does Roof Replacement After Leak Cost?" | `pricing.range` + `pricing.factors[]` (5) + `pricing.financingNote` |
| H2: "Should You Repair or Replace Your Roof?" | `faqs[0]` — "Should you repair or replace your roof?" |
| H2: "Why Choose Our Roofing Company for Roof Replacement After Leak?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (5) |
| FAQ | `faqs[]` (6) |

## Named sources used + exact figure attributed to each

| Figure (in prose) | Named source | Pack |
|---|---|---|
| ~90–95% of leaks at flashing / ~5–10% at field | the NRCA (hedged "industry estimate attributed to") | causes-signs §2.1 |
| 3+ repairs in 2 years → replace (3-repairs rule) | WeatherShield repair-vs-replace guidance | materials-economics §8 |
| damage >25–30% of area → replace (25% rule) | roofing industry guidance | materials-economics §8 |
| one repair ≈50% of replacement → replace (50% rule) | roofing industry guidance / WeatherShield / Home Depot | materials-economics §8 / cost-stats §5 |
| localized repair costs 5 to 10× less than replacement; roof under 10–15 yrs | Home Depot and Kelly Roofing cost data | cost-stats §5 / materials-economics §8 |
| 3-tab 20 / architectural 30 / metal 40 to 80 / slate 60 to 150 yrs | the InterNACHI life-expectancy chart | materials-economics §0 |
| daylight through deck, soft/spongy sheathing, delaminated plywood / swollen OSB; nail can't grip rotted deck | InterNACHI | components-specialty §10 |
| roofing nails penetrate ≥¾ inch into solid deck | ARMA | components-specialty §10 |
| no new covering over a water-soaked/deteriorated deck | IRC Section R908 | components-specialty §10 / batch-8 §6 |
| complete removal of a water-soaked covering | N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode) | nj-regulatory §1.4 / batch-8 §6 |
| ice barrier ≥24 inches inside exterior wall line; self-adhering OR 2 cemented layers | IRC Section R905.1.2 | components-specialty §9 |
| ice-and-water shield self-seals around fasteners | ASTM D1970 | components-specialty §9 |
| EPDM 15–25 / TPO 7–20 / modified bitumen 20 yrs | the InterNACHI life-expectancy chart | materials-economics §4 |
| flat roof ≥¼ inch per foot of slope; ponding >48 hrs = defect | the NRCA and ARMA | causes-signs §2.7 |
| recurring leaks in same spot → systemic, replace | HomeAdvisor flat-roof guidance | materials-economics §4 |
| ordinary-maintenance re-roof = no permit (1–2 family) | N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) | nj-regulatory §1.1 |
| commercial roof / 25% threshold → permit | N.J.A.C. 5:23-2.7 | nj-regulatory §1.2 |
| asphalt ROI ~60 to 68%; 8 of top 10 highest-ROI remodels exterior | the Zonda Cost vs Value report | cost-stats §6/§7 |
| wind/hail = largest claim type, 2.8% / 1 in 36, avg ~$14,747 | the Insurance Information Institute | cost-stats §8 |
| EPA: wet materials dried within 24–48 hrs in most cases grow no mold | the EPA | (gold-exemplar emergency facts) |
| NJ replacement $10,000–$25,000; national avg ~$10,000–$11,000 | HomeAdvisor and Modernize NJ cost data | materials-economics §7 / cost-stats §6 |
| NJ architectural asphalt $6.50–$11.00/sq ft; metal $9.00–$16.00; slate $10–$30 | Josten Roofing NJ pricing | materials-economics §7 |
| re-decking $2 to $5 per sq ft | HomeGuide | components-specialty §10 |
| labor ~60–70% of asphalt install; NJ 10–40% above national | HomeGuide and Integrity Home Exteriors | cost-stats §3 / materials-economics §7 |
| material warranty vs written workmanship warranty | Owens Corning warranty guidance | process-standards / gold exemplar |
| membrane brands installed/serviced | Firestone, Carlisle, Johns Manville (brand naming allowed) | NQR business facts |
| hours Mon–Fri 7:00 AM–6:00 PM, Sat 8:00 AM–2:00 PM | NQR business facts | sources-and-nqr-facts |

## Self-audit checklist

- [x] **Answer-first bolded openers** — directAnswer + the FIRST item under every heading bolds the answer clause (overview[0], all 8 signs, approachContent[0..2], residential[0], commercial[0], all 6 faq answers). Expansion paragraphs (overview[1], residential[1], commercial[1]) are correctly unbolded — matches gold exemplar.
- [x] **directAnswer ≤40 words** — 38 words.
- [x] **Zero modality in declaratives** — grep for `will|should|need to|have to|must|might|may|would|could` outside `faqs[].question` returns NONE. (Only "Should you repair or replace your roof?" is a FAQ question — exempt.)
- [x] **Every number named-sourced** — every figure above carries an in-text named source from the fact packs; no invented numbers; no `[UNVERIFIED]` flagged figure stated numerically.
- [x] **approachSubheadings === approachContent length** — 3 === 3.
- [x] **Counted plurals** — "4 conditions that exceed repair: …" enumerates 4 conditions; "5 stages"-style intros match item counts.
- [x] **No de-fab literals** — no `24/7`, `same-day`, `GAF Certified`, `0% financing`, `top-rated`, `500+`, `N years of experience`, fabricated ratings/phone/address.
- [x] **No outbound links / URLs / markdown links** — grep for `https?://`, `](`, `www.` returns NONE.
- [x] **credentialsHighlight EXACT** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']`.
- [x] **financingNote compliant** — "free written estimate and discusses financing options at the estimate"; NO rate, NO term, NO "0% financing".
- [x] **No public-adjuster / deductible-waiver / guaranteed-approval / free-roof claim** — insurance FAQ states only that insurance "covers a covered peril, excludes wear/age/deferred maintenance" and NQR "documents the damage with timestamped photographs for the adjuster." No claim NQR handles/negotiates/settles the claim; no deductible language; no guarantee; no "free roof."
- [x] **Overlay-not-equal-to-tear-off honored** — the page never presents a recover as equal to a tear-off; it states a recover "hides deck rot rather than repairing it" and that a new covering "cannot be installed over a water-soaked or deteriorated deck" (IRC R908 / N.J.A.C. 5:23-6.4).
- [x] **One macro topic** — "replacement after a leak / chronic leak" repeats in the opening directAnswer + overview and the closing whyChooseUs/pricing; context vector stays on leak-driven replacement end to end.
- [x] **No entity pronoun co-reference / no analogies / no hype** — repeats "the deck", "the leak", "Newark Quality Roofing"; grep for hype words returns NONE.
- [x] **Honest commercial block** — concise low-slope membrane-replacement framing for chronic seam/flashing leaks; does not over-claim a commercial specialty.
- [x] **Repair-vs-replace FAQ present** — `faqs[0]` answers the rendered "Should You Repair or Replace Your Roof?" H2.
- [x] **Object parses** — assembled between the array header/footer and eval-parsed clean; all schema field counts within ServiceContentSchema bounds (overview 2, signs 8, approachContent 3, residential/commercial content 2 each, processSteps 5, faqs 6, pricing.factors 5).
