# Roof Deck Repair and Replacement — Draft Doc (Batch 5, entry 10/10)

**serviceId:** `roof-deck-repair-replacement`
**Category:** components-specialty · **isResidential:** true · **isCommercial:** true
**Primary n-gram:** "roof deck" / "the deck" (opens directAnswer/overview, closes whyChooseUs/pricing)

---

## Rendered heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Answered by field |
|---|---|
| H1 — "Who Provides Roof Deck Repair and Replacement in Newark?" | `directAnswer` |
| H2 — "What Roof Deck Repair and Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (4 conditions) |
| H2 — "How Do You Know If You Need Roof Deck Repair and Replacement?" | `signs[]` (6) under `signsHeading` label |
| H2 — "How Do Our Roofing Contractors Perform Roof Deck Repair and Replacement?" | `approachContent[]` (2) + `approachSubheadings[]` (2) |
| H2 — "How Much Does Roof Deck Repair and Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) |
| H2 — "Should You Repair or Replace Your Roof?" | `faqs[]` item #3 ("Should you repair or replace your roof?") |
| H2 — "Why Choose Our Roofing Company…?" | `whyChooseUs.reasons[]` (4) |
| Related services / KB / Schedule | template-rendered (no field) |
| Residential block | `residential{heading, content[2], ctaLabel}` |
| Commercial block | `commercial{heading, content[2], ctaLabel}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

---

## Named sources → exact figure/claim each is attributed to

| Named source | Figure / claim as stated in copy |
|---|---|
| ARMA (nail-application guidance) | "roofing nails penetrate at least 3/4 inch into the deck, or fully through plus 1/8 inch where the deck measures under 3/4 inch thick"; "corrosion-resistant nails of at least a 12-gauge shank and a 3/8-inch head" |
| InterNACHI | "trapped moisture decays the sheathing until the deck loses the ability to hold fasteners and the roof loses wind resistance"; failing-deck signs (soft/spongy/crumbling, delaminated plywood, swollen OSB, daylight, underside staining); "5/8-inch minimum at 24-inch rafter spacing"; plywood partly recovers vs OSB delaminates irreversibly |
| GAF (inspection guidance) | failing-deck signs corroborated (daylight, soft wood) alongside InterNACHI |
| IRC Section R908 (reroofing) | "prohibit roofing over a water-soaked or deteriorated deck" |
| IRC Section R803.2 | "panels thinner than 1/2 inch over rafters spaced more than 20 inches on center require H-clips, tongue-and-groove edges, or solid blocking" |
| APA – The Engineered Wood Association | span ratings "7/16-inch = 24/16, 15/32-inch = 32/16, 19/32-inch = 40/20, 23/32-inch = 48/24" |
| IRC Section R905.1.2 | "ice barrier from the eave to at least 24 inches inside the exterior wall line" (process step) |
| NRCA | "proper attic ventilation extends roof life by up to 25%"; low-slope "at least 1/4 inch per foot of slope to drain"; ponding >48 hr = defect (with ARMA) |
| ARMA (ponding/slope, with NRCA) | "ponding water remaining more than 48 hours counts as a defect"; "1/4 inch per foot of slope" |
| HomeGuide + Angi | "$2–$5 per square foot, with a national average near $5,500" (HomeGuide); "$2–$6 per square foot" (Angi) |
| contractor cost data (Refined Home Services / HomeHero) | "hidden-rot re-deck added during a re-roof runs about $50–$120 per 4-by-8 sheet" |
| InterNACHI + trade guidance | "OSB sheathing costs less than plywood per 4-by-8 sheet" (OSB cheaper, plywood recovers) |
| N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code | detached 1–2 family roof covering = ordinary maintenance, no permit; commercial >25% in 12 months requires a permit |
| Integrity Home Exteriors | "labor accounts for roughly 60% of a repair total"; "NJ ranges sit 10–40% above national figures" |
| NJ Division of Consumer Affairs | NJ HIC registration requirement (whyChooseUs) |
| Contractors Registration Act | liability-coverage requirement (whyChooseUs) |

Product brands named (install-only, no certification claimed): **Firestone, Carlisle, Johns Manville** (commercial membrane systems) — mirrors gold-exemplar allowance. No "GAF Certified" / cert claim anywhere.

---

## Numbers used, each with its in-text named source

- **3/4 inch nail penetration; 1/8 inch through a sub-3/4-inch deck; 12-gauge shank; 3/8-inch head** → ARMA nail-application guidance (the cornerstone fact).
- **APA 24/16, 32/16, 40/20, 48/24 (for 7/16, 15/32, 19/32, 23/32-inch panels)** → APA – The Engineered Wood Association.
- **1/2 inch panel over rafters > 20 inches o.c. → H-clips/T&G/blocking** → IRC Section R803.2.
- **5/8 inch at 24-inch rafter spacing** → InterNACHI.
- **Section R908** (reroofing prohibition over water-soaked/deteriorated deck) → IRC; cited as a Section number only (allowed list).
- **Section R905.1.2; 24 inches inside the wall line** → IRC (ice barrier, process step).
- **up to 25%** (ventilation extends roof life) → NRCA.
- **1/4 inch per foot; 48 hours** → NRCA and ARMA (commercial drainage/ponding).
- **$2–$5/sq ft, ~$5,500 avg** → HomeGuide; **$2–$6/sq ft** → Angi; **$50–$120 per 4×8 sheet** → contractor cost data.
- **25% in a 12-month period** → N.J.A.C. 5:23-2.7, NJ Uniform Construction Code (commercial permit).
- **roughly 60% labor / 10–40% above national** → Integrity Home Exteriors.
- **25–30% area rule / 50% cost rule** → contractor-consensus thresholds (FAQ repair-vs-replace).
- NO deck-specific lifespan number stated (correctly omitted — none exists in the packs).
- OSB-vs-plywood durability stated qualitatively (no invented "% of re-roofs that uncover rot").

---

## Self-audit checklist

- [x] **Answer-first bolded openers** — every section's first sentence is a definitive answer wrapped in `**…**` (directAnswer, overview[0], each signs[], each approachContent[], residential[0], commercial[0], each faqs[].answer). Bold wraps the ANSWER clause, not the bare keyword. 19 bolded answer spans total, all ≤40 words (verified by script).
- [x] **directAnswer ≤40 words** — 39 words.
- [x] **overview[0] bolded answer span ≤40 words** — 35 words (counted-list enumeration: 4 conditions), em-dash tail continues after the bold close (gold-exemplar pattern).
- [x] **Zero modality in declaratives** — `grep -E '\b(will|should|need to|have to|must|might|may|would|could)\b'` returns ONLY two hits, both `faqs[].question` fields ("How thick should…", "…have to be replaced?") — both exempt. Declarative prose uses indicative present ("requires replacement", "prohibit", "penetrate", "take H-clips") — no modality.
- [x] **Every number named-sourced** — 3/4 in + 1/8 in + 12-ga + 3/8 in (ARMA); APA span ratings (APA); 1/2 in / 20 in o.c. (IRC R803.2); 5/8 in at 24 in (InterNACHI); R908 / R905.1.2 / 24 in (IRC); up to 25% (NRCA); 1/4 in/ft + 48 hr (NRCA/ARMA); $2–$5 + ~$5,500 (HomeGuide), $2–$6 (Angi), $50–$120/sheet (contractor); 25%/12 mo (N.J.A.C. 5:23-2.7); 60%/10–40% (Integrity Home Exteriors); 25–30%/50% (contractor consensus). No invented figures; no deck-lifespan number; no failure-share %.
- [x] **Counted plurals match** — "4 roof-deck conditions: rotted sheathing…, delaminated plywood and swollen OSB, sagging deck sections…, and water-soaked decking…" = exactly 4, and `subServices[]` has exactly 4 entries.
- [x] **approachSubheadings.length === approachContent.length** — 2 === 2.
- [x] **Schema field counts** — overview 2 (2–5), subServices 4, signs 6 (4–10), approachContent 2 (2–5), residential.content 2, commercial.content 2, processSteps 6 (4–8), faqs 7 (4–10), pricing.factors 5, whyChooseUs.reasons 4. Parses as a single array element via node.
- [x] **No de-fab literals** — no 24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, 15+ years, fabricated rating/phone/address, no [VERIFY]/[UNVERIFIED]. (grep clean.)
- [x] **No certification claims** — brands named install-only (Firestone/Carlisle/Johns Manville); no "GAF Certified"/cert status.
- [x] **No outbound links / URLs** — `grep -E 'https?://|www\.|](' ` returns NOTHING.
- [x] **No entity pronoun co-reference** — repeats "the deck", "the sheathing", "the panel", "Newark Quality Roofing", "OSB", "plywood"; the one "it" co-reference ("cost it the ability") was rewritten to "cost the sheathing its fastener hold". Remaining "that/this/these" hits are restrictive relative pronouns ("the condition that points…"), not entity co-references.
- [x] **No hype words** — no best/leading/trusted/premier/top-rated/seamless-as-praise (grep clean).
- [x] **credentialsHighlight exact** — `['NJ HIC Licensed', 'Insured', 'Free Roof Inspections', 'Local Essex County Roofers']` (verified byte-identical via node).
- [x] **One macro topic, linear vector** — "roof deck" leads the directAnswer and recurs through whyChooseUs/pricing; every section descends from the deck H1 (definition → conditions → signs → approach → cost → repair-vs-replace → why-choose).
- [x] **Single-quote TS object literal**, en-dashes for ranges, fractions as plain ASCII (3/4, 1/2, 1/4) to avoid encoding drift, leading `// ─── 10. … ───` comment, opens `{`, closes `},` for array drop-in.
