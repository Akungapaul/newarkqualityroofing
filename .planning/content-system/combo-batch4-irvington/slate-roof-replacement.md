# slate-roof-replacement × Irvington — rewrite rationale

## De-fab literals cleared (from the current combo file)
- **Price-in-prose lead** — `overview[0]` opened "Newark Quality Roofing delivers expert slate roof replacement in Irvington — with prices starting from $20,000–$45,000 and free estimates available today." Replaced with an answer-first, figure-free, entity-grounded NQR-applied lead; price now lives only in `pricing` + the cost FAQ.
- **Inline markdown self-links** — stripped `[slate roof replacement](/slate-roof-replacement)` and `[Glen Ridge](/slate-roof-replacement-glen-ridge-nj)` to plain prose (zero links anywhere, matching committed Newark/Orange combos). The Glen Ridge cross-city comparison was dropped entirely.
- **whyChooseUs templated de-fab** — removed "NJ licensed, GAF Certified — 15+ years…", "same-day estimates and 24/7 emergency response", "no hidden fees, no surprises", and "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties." Replaced with the registered-HIC / fully-insured factual reasons + a sourced NPS-29 slate-technique reason.
- **conversionHooks hype** — replaced "call now or fill out our form" and "Early action saves thousands" with factual CTA + a factual urgency note tied to the corroded-fastener/flashing failure mode.
- **Unsourced cost figures** — dropped the invented "$25,000–$45,000 natural / $15,000–$25,000 synthetic," "7–10 vs 2.5–3.5 lb/sq ft," and "3 to 5× shingle" prose numbers. Cost now states only the service-layer-sourced slate range.
- **Geography fabrications avoided** — no river/flood/reservation, no "flat plain" / Watchung import, no "Irvington's Vailsburg," no I-78-bisects claim, no unverified streets. "Olympic Park section" framed only as the dense early-20th-century stock that carries slate (no invented concentration). Removed the Montclair/Millburn property-value comparison.

## Entity-grounding (Batch-4 delta)
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing slate roof replacement across Irvington, New Jersey, and Essex County…" — bold span 33 words (≤40), credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- Credential = "a registered New Jersey Home Improvement Contractor" + "fully insured" — no "licensed" for NQR anywhere. No `definition` field (spliced post-assembly).
- **NO COA** stated plainly (Irvington has no local historic-district ordinance / no NRHP listings; Register listing alone no restriction per the National Park Service) — the key difference from the Newark/Orange slate pages.

## Named sources cited in-text
- **NPS Preservation Brief 29** — 20% replacement threshold, non-ferrous (copper/stainless) slater's nails, never coat/seal, copper/lead-coated-copper/terne-coated-stainless flashing, avoid walking on slate.
- **NPS Preservation Brief 4** — documenting slate pattern/coursing/color before tear-off; flashing as leak source.
- **N.J.A.C. 5:23-6.4** (NJ Rehabilitation Subcode) — slate cannot be recovered over; always full tear-off.
- **N.J.A.C. 5:23-2.7** (NJ UCC) — detached 1–2-family ordinary-maintenance no-permit; 25% rule for commercial/multi-family/attached; Township of Irvington's construction-code office.
- **InterNACHI life-expectancy chart** + **National Slate Association** — natural slate 60–150 yrs (premium 100-plus); synthetic 10–35 yrs.
- **CertainTeed product literature** — premium composite slate 40–50 yrs.
- **HomeGuide** (slate $10–$30/sq ft ≈ $1,500/square; tear-off $2–$5/sq ft) + **Integrity Home Exteriors** (NJ 10–40% above national) — cost FAQ + pricing.
- **National Park Service** — Register listing alone imposes no owner restriction (no-COA framing).

## Local Irvington texture preserved (restructured answer-first)
Dense older early-20th-century detached + 2-/3-family stock; majority-renter / rental- and multi-family-heavy / investor-landlord ownership → tenant-occupied access under NJ landlord-tenant notice + owner documentation; aging plank decking discovered at tear-off; small built-out lots / limited staging; cost-conscious building economics steering the natural-vs-synthetic decision.
