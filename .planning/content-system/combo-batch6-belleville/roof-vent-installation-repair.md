# roof-vent-installation-repair — Belleville (rewrite rationale)

## De-fab literals cleared
- Old `$300–$1,200` price + "$500–$1,200 / $1,200–$2,500 / $400–$1,000" cost FAQ figures (all unsourced) → `pricing.range: 'Varies by scope'` + sourced free-written-estimate cost FAQ (no invented number for this components-specialty service).
- "prices starting from $X–$Y and free estimates available today" hype lead → answer-first NQR-applied figure-free lead.
- whyChooseUs "NJ licensed, GAF Certified — 15+ years", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response", "Transparent pricing… no hidden fees, no surprises" → registered-HIC/fully-insured factual reasons.
- conversionHooks "Early action saves thousands" / "call now or fill out our form" → factual CTA + ventilation-specific urgency (condensation/mold/ice-dam), no fabricated savings.
- Fabricated Belleville prose: "Washington Avenue restaurants and Belleville Turnpike industrial facilities", "ASHRAE calculations", unsourced "10-15 / 40-60 degree differential", "30+ degrees" attic claims, "typically pay back through reduced energy costs" → removed (no city-specific degree numbers; no guaranteed energy savings, which the fact pack bans).
- Inline markdown self-links `[roof vent](/roof-vent-installation-repair)` and `[Newark](/roof-vent-installation-repair-newark-nj)` → stripped to plain text (zero links).
- "Branch Brook Park" / Cape-Cod-only framing not load-bearing → dropped; meta no longer references Branch Brook.
- No `definition` field (propagated by post-assembly splice).

## Geography / COA guardrails honored
- Second River = Belleville's southern/southwestern Newark border; Passaic River = eastern boundary, Belleville on the west bank. No "Passaic separates Belleville from Newark." No reservation. No FEMA figure. No Branch Brook "in Belleville" claim.
- Verified sections/streets only: Soho (older river-edge stock), Silver Lake, Washington Avenue commercial spine, Route 21 corridor (referenced via city stock, kept qualitative). Permit office = "the Township of Belleville's construction office."
- Historic: active HPC but NO reroof COA stated implicitly via the permit FAQ (ordinary-maintenance reroof); no Ch. 302 / Property-List gate imported (this service has no historic-roof angle, so no COA paragraph needed).

## Entity-grounding
- directAnswer entity-grounded: "Newark Quality Roofing is a roofing contractor providing roof vent installation and repair across Belleville, New Jersey, and Essex County…" — bold span 27 words; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold. No NQR "licensed" anywhere; "fully insured" in whyChooseUs.

## Named sources cited in-text
- IRC Section R806.2 — 1/150 net free ventilating area; net free area = unobstructed opening after louvers/screen (also per the ARMA).
- ARMA + Air Vent Inc. — ~50% intake / 50% exhaust balance.
- Air Vent Inc. (Paul Scelsi) + Roof Assembly Ventilation Coalition — never mix two exhaust types over one attic (short-circuit; lower exhaust reverses to intake, pulls wind-driven rain/snow).
- GAF + Air Vent Inc. — powered fan + ridge vent depressurizes the attic.
- U.S. DOE Building America Solution Center + Building Science Corporation (Joseph Lstiburek) — powered/solar fans counterproductive vs. passive balanced ventilation; soffit = primary intake; rafter baffles keep the channel clear.
- NRCA — proper ventilation reduces condensation/mold/structural damage/ice dams; common shingle-warranty condition.
- N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code) — detached 1-/2-family reroof = ordinary maintenance, no permit; >25% in 12 months on commercial/multi-family/attached = permit (Township of Belleville construction office).

## Leads (≤40 words; em-dash tokens counted)
- directAnswer bold span: 27 · overview[0] sentence 1: 36 · challenges[0]: 29 · process[0]: 28.
- FAQs: 6 (one cost FAQ, free-written-estimate framing; no redundant "Who provides…" FAQ). metaDescription 155 chars. Parses via esbuild.
