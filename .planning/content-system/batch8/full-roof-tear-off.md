# Full Roof Tear Off — content draft (serviceId: full-roof-tear-off)

Batch 8 (replacement-sub-pages), entry #1 of 15. parentId: roof-replacement.
isResidential: true, isCommercial: true. Macro topic: **full roof tear off** — complete
removal of all existing roof covering down to the deck, deck inspection + repair, then a
new roofing system. Information gain vs the parent `roof-replacement` page: this sub-page
is focused specifically on the tear-off / deck-exposure / recover-prohibition angle
(N.J.A.C. 5:23-6.4 mandatory-removal conditions, IRC R908.3.1.1, deck-failure signs,
overlay dead-load that a tear-off removes), not the full material-selection treatment.

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by |
|---|---|
| H1 "Who Provides Full Roof Tear Off in Newark?" | `directAnswer` (37 words) |
| H2 "What Full Roof Tear Off Do We Provide?" | `overview[]` (2) + `subServices[]` (4) |
| H2 "How Do You Know If You Need Full Roof Tear Off?" | `signs[]` (7), label `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Full Roof Tear Off?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Full Roof Tear Off Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace item |
| H2 "Why Choose Our Roofing Company for Full Roof Tear Off?" | `whyChooseUs.reasons[]` (4) |
| Residential block | `residential{heading,content(2),ctaLabel}` |
| Commercial block | `commercial{heading,content(2),ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (6) |

## Named sources used → exact figure/fact attributed to each

- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode / NJ Uniform Construction Code)** — complete
  removal of the existing covering required in 3 conditions: (1) water-soaked/deteriorated deck,
  (2) wood-shake/slate/clay/cement/asbestos-cement tile covering, (3) 2+ existing layers. NJ subcode
  adds wood shake to the IRC list.
- **IRC Section R908.3.1.1 (ICC International Residential Code)** — recover-not-allowed conditions
  (water-soaked/deteriorated base; slate/clay/cement/asbestos-cement tile; 2+ applications). Cited as
  R908.3.1.1 (not bare R908.3) per §0 rule 5.
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — detached 1–2-family total re-roof of the
  covering is ordinary maintenance, NO construction permit; commercial >25% in 12 months needs a
  permit; exemption does not authorize a non-compliant recover.
- **Asphalt Roofing Manufacturers Association (ARMA)** — a tear-off lets a roofer inspect the deck,
  repair damage, improve deck attachment; a recover leaves underlying layers difficult to inspect so
  rot is not caught. Plus nail-application: roofing nails penetrate ≥¾ inch into the deck to grip.
- **InterNACHI** — failing-deck signs (daylight through deck, soft/spongy wood, sagging between
  rafters, delaminated plywood, swollen OSB edges); OSB once saturated swells/delaminates irreversibly
  while plywood partly recovers; sheathing that cannot hold a fastener is replaced. Life-expectancy
  chart: 3-tab asphalt 20 yr, architectural asphalt 30 yr.
- **HomeGuide (national)** — old-roof removal $1–$5/sq ft ($1–$3 shingles, $2–$5 slate/tile);
  disposal dumpster $220–$580/wk (10-yd), $280–$699/wk (20-yd); re-decking $2–$5/sq ft. Labeled national.
- **HomeAdvisor / Modernize (NJ)** — NJ roof replacement $10,000–$25,000 for a typical home (tear-off
  included).
- **Angi / Dumpsters.com (converted)** — single asphalt layer ≈ 2 to 4.5 lb/sq ft dead load; a second
  overlay layer adds that load. Re-decking range corroboration ($2–$6/sq ft Angi).
- **IRC R905.1.2 (ice barrier, NJ-enforced via N.J.A.C. 5:23)** — ice barrier from eave to ≥24 inches
  inside the exterior wall line in ice-prone regions like Essex County.
- **NRCA / ARMA** — low-slope roof needs ≥¼ inch per foot of slope to drain; ponding >48 hours = defect.
- **Owens Corning warranty guidance** — material warranty (factory defects) distinct from the written
  workmanship warranty (labor); install to manufacturer specification keeps the system warranty intact.
- **Integrity Home Exteriors** — verification/cleanup/magnet-sweep workflow step.
- **NQR business facts** — NJ HIC registration (no number), liability coverage, free roof inspections,
  Essex County service area + named cities, hours Mon–Fri 7:00 AM–6:00 PM / Sat 8:00 AM–2:00 PM.

## Self-audit checklist

- [x] **Answer-first, bolded openers** — `directAnswer` (37 words ≤40) + first sentence of every
  `overview`, `signs`, `approachContent`, `residential.content`, `commercial.content`, and every
  `faqs.answer` is a definitive factual answer wrapped in `**`. Verified programmatically (all true).
- [x] **Zero modality in declaratives** — grep for `will|should|must|may|might|would|could|need to|have to`
  outside `faqs[].question` returns empty. The one `should` is in the repair-vs-replace FAQ *question*
  (exempt). `can`/`cannot` used only as established-capability statements (matches gold-exemplar usage),
  not as hedges.
- [x] **Every hard number named-sourced** — $1–$5/sq ft + $1–$3/$2–$5 + dumpster $220–$699 + re-deck
  $2–$5 → HomeGuide/Angi (national, labeled); $10,000–$25,000 → HomeAdvisor/Modernize NJ; 2–4.5 lb/sq ft
  → Dumpsters.com/Angi conversion; ¾ inch → ARMA; 24 inches → IRC R905.1.2; ¼ inch/ft + 48 hours → NRCA/ARMA;
  20/30 yr → InterNACHI chart; 25% / 12 months → N.J.A.C. 5:23-2.7; 2 layers / 3 conditions → N.J.A.C.
  5:23-6.4 + IRC R908.3.1.1; 25–30% area / 50% cost → contractor-consensus rules. No invented figures.
- [x] **approachSubheadings.length === approachContent.length** — 3 === 3.
- [x] **No de-fab literals** — no "24/7", "same-day", "GAF Certified", "0% financing", "top-rated",
  "500+", "N years of experience", fabricated ratings/phone/address, `[VERIFY]`/`[UNVERIFIED]`.
  ("Free roof inspections" is the cleared NQR trust fact, not a "free roof" promise.)
- [x] **No outbound links / URLs** — grep for `https?://|www.|](` returns empty.
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers']`.
- [x] **Counted plurals match** — "3 phases", "3 conditions", "2 layers / 2 or more layers" introduced
  with their exact integers.
- [x] **One macro topic** — "full roof tear off" / "full tear-off" repeated in the opening `directAnswer`
  + `overview` and the closing `whyChooseUs` / pricing section; context vector stays on tear-off + deck.
- [x] **No hype words** — grep for best/leading/trusted/premier/unbeatable/amazing/seamless/exceptional empty.
- [x] **Insurance/overlay/fire/cost compliance** — this is a tear-off page; no claim version exists, but:
  no public-adjuster claim, no deductible-waiver/rebate, no guaranteed-approval, no "free roof" promise.
  Overlay (recover) is presented honestly as LESS than a tear-off (hides deck rot, adds dead load, code
  prohibits it over 2 layers / unsound deck) — never as equal. All overlay/cost figures labeled national;
  NJ benchmark from the named NJ aggregator. financingNote is qualitative ("discusses payment and financing
  options at the estimate") with NO fabricated rate/term.
- [x] **Parses** — assembled into the array wrapper between
  `export const replacementSubPagesContent: ServiceContent[] = [` … `];` and parsed clean via esbuild;
  all 16 schema fields present exactly once; apostrophes escaped (none needed; none unescaped).
