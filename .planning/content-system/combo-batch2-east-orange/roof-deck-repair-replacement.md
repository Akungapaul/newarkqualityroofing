# roof-deck-repair-replacement — East Orange (Combo Batch 2) rewrite rationale

**De-fab literals cleared (all GATE-failing):**
- `overview[0]` hero hype "Newark Quality Roofing delivers **expert** roof deck repair replacement … **prices starting from $2,000–$6,000** and **free estimates available today**" → replaced with a figure-free definitional lead; price removed from all prose (lives only in `pricing` + the cost FAQ).
- `whyChooseUs` templated trust line: `GAF Certified`, `15+ years`, `same-day` estimates, `24/7` emergency response, and the "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties" brand-as-credential claim → replaced with the 4 brief-default factual reasons (NJ HIC licensed & insured; local Essex County crew; free written estimates; photo-documented workmanship).
- `conversionHooks.urgencyNote` "Don't wait … **Early action saves thousands**" hype → factual prompt about replacing rotted decking before re-covering to keep fasteners holding and limit further structural water damage.
- Inline markdown self-links `[roof decks](/roof-deck-repair-replacement)` and `[Newark](/roof-deck-repair-replacement-newark-nj)` → stripped to plain text; zero links anywhere (matches committed Newark combos).
- Fabricated `pricing.note` "structural deck repair pricing" → sourced HomeGuide/Angi note; range moved to the pack-sourced `$2–$5 per sq ft` (replacing the unsourced `$2,000–$6,000` band and the cost FAQ's unsourced `$2 to $5 per square foot` + invented `$500–$5,000` building-specific figures).
- Dropped the unverified neighborhood "Elmwood Park" used as a building locale and kept only brief-verified references (Brick Church district; Central Avenue; Dr. Martin Luther King Jr. Boulevard). No river/flood/tidal/reservation claim was present to delete, but the rewrite holds East Orange to its flat inner-ring plain.
- No local Certificate of Appropriateness / HPC / historic-district design-review gate asserted — historic FAQ uses the brief's exact negating framing ("no identified local historic-preservation ordinance, so a Certificate of Appropriateness is not triggered … Register listing alone places no restriction … verify with the East Orange Department of Planning, Policy & Development").

**Named sources cited in-text:**
- **ARMA** — roofing nails penetrate ≥3/4 in into the deck (or fully through +1/8 in under 3/4 in); corrosion-resistant covering fasteners.
- **InterNACHI** — trapped moisture decays sheathing until it loses fastener hold and the roof loses wind resistance; OSB swells/delaminates irreversibly once saturated while plywood partly recovers.
- **IRC Section R908** (reroofing) — no roofing over a water-soaked/deteriorated deck; **IRC Section R803.2** — panels <1/2 in over rafters >20 in O.C. need H-clips/T&G/blocking; **IRC Section R905.1.2** — ice barrier ≥24 in inside the exterior wall line.
- **APA – The Engineered Wood Association** — span ratings set the max rafter spacing.
- **GAF inspection guidance** — deck-condition signs (soft/spongy wood, delamination, swelling, staining).
- **NRCA and ARMA** — ponding >48 hours counts as a defect on low-slope membrane roofs.
- **HomeGuide and Angi** cost data — $2–$5/sq ft re-decking ($5,500 national avg; Angi $2–$6); contractor cost data — hidden-rot add-on ~$50–$120 per 4-by-8 sheet.
- **U.S. Census QuickFacts** — ~69% renter / 87.6% multi-unit (frames the multi-family permit-required path qualitatively).
- **National Park Service** — Register listing alone places no restriction on a privately funded reroof.
- **N.J.A.C. 5:23-2.7** (NJ UCC) — detached 1–2-family reroof = ordinary maintenance, no permit; 25% rule on commercial/multi-family/attached; East Orange Building Division (designated State UCC Enforcement Agency, Department of Property Maintenance, 44 City Hall Plaza) enforces but does not override the state classification.

**Preserved East Orange texture (restructured answer-first):** multi-family/rental landlord economics, layered flat-roof systems on pre-war walk-ups, occupied-building access coordination during deck work, Brick Church district, Central Avenue & Dr. Martin Luther King Jr. Boulevard corridors. Tenant-access framing kept qualitative (no invented NJ notice-period statute — no fact pack supports one).

**Gate status:** leads ≤40w (directAnswer 37, overview 17, challenges 31, process 24, FAQ first sentences 21–33), meta 149 chars, 6 FAQs (one cost FAQ), no `**` in raw fields, no de-fab literals, no links, no banned geography/climate numbers, parses as valid TS.
