# glen-ridge / roof-deck-repair-replacement — rewrite rationale

De-fab literals cleared from the current file:
- Deleted the price-in-lead ("prices starting from $2,000–$6,000 and free estimates available today"); replaced overview[0] with an answer-first, entity-grounded, figure-free NQR-applied lead.
- Deleted the templated whyChooseUs trust lines ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response"); replaced with the registered-HIC / fully-insured factual set.
- Replaced the invented $2,000–$6,000 / "structural deck repair pricing" with the pack-sourced re-decking range ($2–$5/sq ft, ~$5,500 avg, Angi $2–$6/sq ft per HomeGuide/Angi) and a named-source note.
- Removed the unsourced cost FAQ ("$500 to $1,500… $3,000 to $8,000") and the unsourced "25 percent or more of the roof surface" deck-cost figure; replaced with the pack figures and the contractor-consensus 25–30% area / 50% cost repair-vs-replace thresholds.
- Stripped the inline markdown self-link `[roof replacement](/roof-replacement-glen-ridge-nj)` to plain prose (kept zero links, matching committed siblings).
- De-fabbed the conversionHooks urgencyNote ("Early action saves thousands") to a factual deck statement, and the midPageCta to a plain free-written-estimate CTA.
- No National Register / "nearly every home" overstatement was carried in (the prior file's WRONG COA framing): the binding gate is framed as the LOCAL Chapter 15.32 Certificate of Appropriateness, district covers OVER 90% (not 100% / not "every home"), and explicitly NOT a consequence of the 1982 National Register listing (per NPS, listing alone = no private restriction).
- No banned streets/sections (no Carteret Street, no "gaslit streets / century-old elms"), no reservation/ridge-elevation claim, no FEMA/canopy-% figure, no fabricated slate-quarry inventory or NJ historic-roof tax credit.

Entity-grounding applied:
- directAnswer entity-grounded: "Newark Quality Roofing is a roofing contractor providing roof deck repair replacement across Glen Ridge, New Jersey, and Essex County, …" with the credential tail "as a registered New Jersey Home Improvement Contractor." outside the ≤40-word bold (bold = 38 words).
- No `definition` field (propagated by the post-assembly splice).
- Credential = "A registered New Jersey Home Improvement Contractor, fully insured." — no "licensed" for NQR anywhere.

Named sources cited in-text (from facts-components-specialty.md §10 + facts-nj-regulatory-climate.md, localized to the rewritten service base in components-specialty.ts):
- ARMA (nail penetrates ≥3/4 in into the deck; corrosion-resistant fastening).
- InterNACHI + GAF inspection guidance (failing-deck signs; trapped moisture decays sheathing → lost fastener hold / wind resistance; OSB delaminates once saturated while plywood partly recovers).
- IRC Section R908 (no roofing over a water-soaked/deteriorated deck); IRC Section R803.2 (panels <1/2 in over rafters >20 in O.C. need H-clips/T&G/blocking); IRC Section R905.1.2 (ice barrier ≥24 in inside the exterior wall line).
- APA – The Engineered Wood Association (span ratings sized to rafter spacing).
- N.J.A.C. 5:23-2.7 / NJ Uniform Construction Code (detached 1–2-family reroof = ordinary maintenance, no permit).
- HomeGuide + Angi (re-decking $2–$5/sq ft, ~$5,500 avg, $2–$6/sq ft); contractor cost data ($50–$120 per 4×8 sheet hidden-rot add-on).
- Contractor-consensus 25–30% area / 50% cost repair-vs-replace thresholds.
- Borough of Glen Ridge (historic district covers over 90% of the borough); National Park Service (National Register listing alone places no federal restriction on a private owner); Glen Ridge Building Department at 825 Bloomfield Avenue.
