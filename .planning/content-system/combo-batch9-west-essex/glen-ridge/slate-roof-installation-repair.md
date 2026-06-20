# glen-ridge / slate-roof-installation-repair — rewrite rationale

## De-fab literals cleared
- **Price-in-lead** removed from `overview[0]` ("prices starting from $20,000–$45,000 and free estimates available today") → answer-first, figure-free, entity-grounded lead.
- **WRONG COA framing corrected** (the biggest Glen Ridge fix): the current file framed the gate via the "Historic Preservation Commission" preference and implied broad coverage but earlier sibling files used "National Register Historic District / nearly every home / virtually every home." Replaced throughout with the binding **LOCAL Chapter 15.32 Certificate of Appropriateness**, district covers **over 90% of the borough (NOT 100%/every home)**, framed as a local-ordinance requirement **NOT** the 1982 National Register listing (per NPS, listing alone places no federal restriction on a private owner).
- **Fabricated named-quarry slate inventory** deleted ("unfading Vermont green, Pennsylvania blue-grey, Buckingham Virginia black, imported Welsh purple," "network of quarry relationships across Vermont, Pennsylvania, Virginia"). Replaced with the generic verified match-to-existing-color/size/thickness language from the service layer.
- **Fabricated street** "Hillside Avenue" deleted from `overview[0]` (not on the verified list). Kept only Ridgewood Avenue / Bloomfield Avenue station edge by reference to verified texture.
- **"comprehensive warranty" invented term** deleted from `process` → replaced with documented-with-photos + workmanship framing.
- **`whyChooseUs` templated trust lines** deleted ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "same-day estimates and 24/7 emergency response") → 4 de-fabbed factual reasons using "A registered New Jersey Home Improvement Contractor, fully insured."
- **`conversionHooks.urgencyNote`** "Early action saves thousands" → factual interior/structural-water-damage framing.
- **Unsourced numbers** corrected: the old "$40,000–$80,000 / $400–$5,000" prose costs and "20 to 30 percent" repair-vs-replace rule → name-sourced (HomeAdvisor/Modernize replacement range; HomeGuide/Angi slate repair ranges; the 30–40% fastener-corrosion replace threshold attributed to Kellow/Modernize/Josten Roofing).
- **Pricing range** retiered from the invented `$20,000–$45,000` to the brief's sourced replacement/installation default `$10,000–$25,000` (HomeAdvisor + Modernize).
- No inline markdown self-links in the source file; none introduced (the service-layer base carried an asphalt cross-link — dropped).

## Entity-grounding applied
- `directAnswer` entity-grounded: "Newark Quality Roofing is a roofing contractor providing slate roof installation repair across Glen Ridge, New Jersey, and Essex County…" — bold span **35 words**; credential tail "as a registered New Jersey Home Improvement Contractor." outside the bold.
- **No `definition` field** (propagated by post-assembly splice).
- Credential = "a registered New Jersey Home Improvement Contractor" / "fully insured" everywhere; no "licensed" for NQR. No third-party "licensed" cites were needed for this service.

## Named sources cited in-text
- **InterNACHI life-expectancy chart** — natural slate 60–150 yrs; copper 70-plus yrs.
- **National Slate Association** + **NRCA** — natural slate rarely fails as a tile; failures trace to corroded fasteners and degraded flashing; tile-by-tile replaceability.
- **HomeAdvisor + Modernize** — NJ roof-replacement range $10,000–$25,000 (pricing field + cost FAQ).
- **HomeGuide + Angi** — slate repair $500–$2,100; broken-tile $50–$300/tile; flashing/fastener $400–$3,000.
- **Kellow / Modernize / Josten Roofing** — the 30–40% fastener-corrosion repair-vs-replace threshold (materials-economics §2/§8).
- **N.J.A.C. 5:23-2.7 (NJ Uniform Construction Code)** — detached 1–2-family reroof = ordinary maintenance (no permit); structural rafter/truss change triggers a permit; commercial/multi-family/attached 25%-rule.
- **Borough of Glen Ridge** — historic district covers over 90% of the borough.
- **Borough of Glen Ridge Building Department, 825 Bloomfield Avenue** — permit office.
- **Glen Ridge Historic Preservation ordinance, Chapter 15.32** — binding local Certificate of Appropriateness; **National Park Service** — National Register listing alone places no federal restriction on a private owner.
- **Integrity Home Exteriors** — verification/cleanup documentation guidance.

## Differentiation (§F)
Foregrounded Glen Ridge-distinct anchors: the **broadest-in-batch binding Chapter 15.32 COA (district >90% of borough)**, the **no-reservation inner-lowland geography** with the **mature street-tree canopy** as the defining stressor (not ridge/reservation), pre-WWII Victorian/Edwardian/Colonial-Revival/Tudor stock, plank/deteriorated sheathing at tear-off, and the 825 Bloomfield Avenue Building Department. No West Orange / Montclair / Verona / Cedar Grove COA frameworks or reservations imported.
