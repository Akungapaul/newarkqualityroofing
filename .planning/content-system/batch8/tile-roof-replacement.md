# Tile Roof Replacement — Draft Doc (Batch 8, #13/15)

serviceId: `tile-roof-replacement` · category: replacement-sub-pages · isResidential=true · isCommercial=false
Macro topic: clay and concrete tile roof replacement (underlayment-limited service life; tile cannot be roofed-over; structural load).

## Rendered-heading → content-field map

| Rendered H-tag (from HEADING_CONFIG) | Content field that answers it |
|---|---|
| H1 "Who Provides Tile Roof Replacement in Newark?" | `directAnswer` (38 words, bolded answer span) |
| H2 "What Tile Roof Replacement Do We Provide?" | `overview[]` (2) + `subServices[]` (4: clay, concrete, underlayment-under-salvaged-tile, tile-to-deck tear-off) |
| H2 "How Do You Know If You Need Tile Roof Replacement?" | `signs[]` (8) under `signsHeading` |
| H2 "How Do Our Roofing Contractors Perform Tile Roof Replacement?" | `approachContent[]` (3) / `approachSubheadings[]` (3) |
| H2 "How Much Does Tile Roof Replacement Cost?" | `pricing.range` + `pricing.factors[]` (5) + `financingNote` |
| H2 "Should You Repair or Replace Your Roof?" | `faqs[0]` repair-vs-replace FAQ (underlayment-failure trigger) |
| H2 "Why Choose Our Roofing Company for Tile Roof Replacement?" | `whyChooseUs.reasons[]` (4) |
| Residential / Commercial blocks | `residential{}` / `commercial{}` |
| Process | `processSteps[]` (6) |
| FAQ | `faqs[]` (7) |

## Named sources used → exact figure each is attributed to

- **Tile Roofing Industry Alliance** — clay tile 75 to 100-plus years; concrete tile 40 to 75 years; underlayment is the real service-life limiter (fails well before the tile).
- **InterNACHI** (Standard Estimated Life Expectancy Chart) — clay/concrete tile listed at 100-plus years (named alongside the TRI Alliance split).
- **This Old House** — underlayment fails well before the tile (corroborating the underlayment-limiter trigger); daylight-through-deck sign.
- **NHI Contractors (NJ)** — premium tile $10 to $20-plus per square foot (NJ).
- **Modernize / HomeGuide** — concrete tile $9 to $18/sq ft; clay tile $12 to $25/sq ft; tile-repair per-sq-ft framing.
- **HomeAdvisor / Modernize (NJ)** — typical NJ new-roof range $10,000 to $25,000.
- **N.J.A.C. 5:23-6.4 (NJ Rehabilitation Subcode)** — complete removal of an existing clay/cement/slate tile covering required; a tile roof cannot be roofed-over.
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — 1–2-family re-roof of the covering = ordinary maintenance, no permit; commercial/structural change triggers a permit; 25%-in-12-months commercial repair threshold.
- **NOAA 1991–2020 normals, Newark Liberty (EWR)** — average January low near 25.5°F; Newark crosses the 32°F freezing point repeatedly (concrete-tile freeze-thaw spalling).
- **NRCA** — flashing seals the transitions that ~90 to 95% of leaks trace back to (industry estimate attributed to the NRCA).
- **GAF** — spongy/sagging deck = moisture-rotted sheathing structural sign.
- **IRC (International Residential Code) R905.1.2** — self-adhering ice barrier from the eave to ≥24 inches inside the exterior wall line.
- **Zillow analysis / Zonda Cost vs Value report** — a new roof recoups roughly 60 to 68% of cost at resale.
- **Integrity Home Exteriors** — documentation/verification workflow; NJ ranges 10–40% above national (labor share).
- **Owens Corning** — material warranty (factory defects) separate from written workmanship warranty.
- Repair-vs-replace tile thresholds (clay 20–25% / concrete 15–20% broken-tile) — industry repair-vs-replace consensus (stated as contractor-consensus, no fabricated precision).

## Hard numbers → named source present in fact packs

- Clay 75–100+ yr, concrete 40–75 yr → Tile Roofing Industry Alliance (facts-materials-economics §6).
- Clay/concrete tile 100+ yr → InterNACHI chart (§0 master table / §6).
- $10–$20+/sq ft premium tile → NHI Contractors (§7).
- $9–$18/sq ft concrete, $12–$25/sq ft clay → Modernize/HomeGuide (§6).
- $10,000–$25,000 NJ new-roof range → HomeAdvisor/Modernize (§7 / facts-cost-stats §6).
- 25% area in 12 months → N.J.A.C. 5:23-2.7 (facts-nj-regulatory-climate §1.1/§1.2).
- 24 inches inside exterior wall line → IRC R905.1.2.
- 25.5°F Jan low / 32°F freeze point → NOAA 1991–2020 EWR normals.
- 90–95% of leaks at flashing → NRCA (industry estimate).
- 60–68% resale recoup → Zillow / Zonda Cost vs Value.
- 10–40% NJ-over-national → HomeGuide / Integrity Home Exteriors.

## Self-audit checklist

- [x] Answer-first bolded openers on every field (directAnswer, each overview[0], each signs item, each approachContent item, residential[0], commercial[0], each faqs answer). directAnswer = 38 words (≤40).
- [x] Zero modality in declaratives — grepped `will|should|must|might|would|could|may|need to|have to` outside `faqs[].question`: no hits. (FAQ question "Should You Repair or Replace Your Roof?" / "Do you need a permit…" / "Does a home structure carry…" exempt.)
- [x] Every hard number named-sourced in-text (table above); no invented figure. No fabricated "% of failures" used (flagged UNVERIFIED in §6 — stated qualitatively).
- [x] No fabricated structural psf number for tile — tile weight stated qualitatively ("tile is heavy → deck/framing carry the dead load"), no name-sourced psf existed in the packs.
- [x] approachSubheadings.length (3) === approachContent.length (3).
- [x] Counted plurals match: "2 tile roof systems: clay … and concrete"; "2 tile classes: clay tile and concrete tile"; "2 classes — clay … and concrete" in estimate step. subServices=4, signs=8, processSteps=6, faqs=7.
- [x] No de-fab literals (24/7, same-day, GAF Certified, 0% financing, top-rated, 500+, N+ years, fabricated guarantee). "Free Roof Inspections" is the approved NQR business fact (credentialsHighlight + gold exemplar), NOT a "free roof" replacement claim.
- [x] No outbound links / URLs in prose (grep clean).
- [x] No pronoun co-reference standing in for a named entity at clause head; "it" appears only in bound relative clauses ("the service life … that limits it", "tile that outlives it").
- [x] credentialsHighlight exactly ['NJ HIC Licensed','Insured','Free Roof Inspections','Local Essex County Roofers'].
- [x] One macro topic (tile roof replacement) from H1 to closing whyChooseUs; primary n-gram "tile roof replacement" repeated in opening answer and closing reasons + pricing.
- [x] Overlay caution honored: tile is explicitly NOT roofed-over — N.J.A.C. 5:23-6.4 full-removal cited (no overlay-as-equal framing; tile is a tear-off material).
- [x] Insurance/public-adjuster caution: page does not claim to handle/file/negotiate/settle a claim, does not waive/rebate a deductible, does not promise a "free roof" or guaranteed approval. (No insurance-claim core needed — material page; no deductible/ACV/RCV claims made.)
- [x] financingNote = free written estimate + qualitative "discusses payment options" (NO rate/term).
- [x] Parse check: wraps cleanly as one ServiceContent[] array element (node parse PARSE_OK).
