# montclair/roof-replacement-after-leak — rewrite rationale

Answer-first, de-fabbed, entity-grounded rewrite of the Montclair × roof-replacement-after-leak combo.
Localized the finished service object (`replacement-sub-pages.ts`, serviceId `roof-replacement-after-leak`)
to Montclair, using the committed Orange combo as the voice/structure exemplar and the committed Montclair
city page (`west-essex.ts`, cityId `montclair`) as the verified geography crib. `definition` field omitted
(splice-propagated).

## De-fab literals cleared
- **Price-in-lead** — deleted `overview[0]` "prices starting from $8,500–$25,000 and free estimates available today."
- **Old fabricated pricing** `$8,500–$25,000` / note "when repair is no longer viable" → sourced default `$10,000–$25,000` (HomeAdvisor/Modernize).
- **whyChooseUs trust lines** — removed "NJ licensed, GAF Certified — 15+ years," "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties," "Local team that knows Montclair — same-day estimates and 24/7 emergency response." Replaced with the registered-HIC / fully-insured factual set.
- **conversionHooks.urgencyNote** "Early action saves thousands" → factual "Addressing a chronic leak early limits interior and structural water damage."
- **Inline markdown self-links** — stripped `[roof replacement after leak](...)`, `[Montclair](...)`, `[Glen Ridge](...)`, `[Bloomfield](...)` to plain text (zero links, matching committed siblings).
- **Unsourced hard numbers** — the bare "twenty-five percent" / "thirty to forty percent" repair-vs-replace rule and decade lifespans → name-sourced (25–30%/50% rules to WeatherShield/Kellow/Modernize; lifespans to the InterNACHI life-expectancy chart).
- **"licensed" for NQR** — none present; credential framing is "a registered New Jersey Home Improvement Contractor" + "fully insured."
- No fabricated Montclair streets/sections (North Mountain Ave, Church St, Valley Rd, Montclair Heights), no "15–20 mph higher wind," no "130 mph / six-nail," no tree-preservation ordinance, no slate-quarry inventory, no response-time/same-day/24/7 claims, no Village-wide or township-wide COA.

## Entity-grounding
- `directAnswer` bold span (37w): "Newark Quality Roofing is a roofing contractor providing roof replacement after leak across Montclair, New Jersey, and Essex County…" with credential tail outside the bold. Establishes "Montclair, New Jersey" + "roofing contractor."
- Credential = registered NJ Home Improvement Contractor; "fully insured" in whyChooseUs.
- Conditional local COA stated correctly: Article XXIII of Chapter 347 §347-136, four locally designated districts (Town Center, Upper Montclair Business, Pine Street, Watchung Plaza) + local landmarks, in-kind exempt, Estate Section nominated-not-designated, NPS National-Register note, COA separate from building permit. Permit office = Township of Montclair Building Office (function only).

## Named sources cited in-text
- **InterNACHI** life-expectancy chart (3-tab 20yr, architectural 30yr, metal 40–80, slate 60–150; deck-rot/nail-grip).
- **NRCA** (attrib) — ~90–95% of leaks at flashing.
- **WeatherShield** (3-repairs rule); **Kellow / Modernize / Josten** (25–30% and 50% rules); **Home Depot / Kelly Roofing** (5–10× repair-vs-replace cost gate).
- **IRC Section R908** (no recover over deteriorated deck); **N.J.A.C. 5:23-6.4** (full removal of water-soaked covering); **IRC Section R905.1.2** (ice barrier 24in inside wall line); **ASTM D1970** (self-seal); **ARMA** (¾-in nail penetration).
- **N.J.A.C. 5:23-2.7** (1–2 family ordinary-maintenance no-permit; 25% commercial permit) via the NJ Uniform Construction Code; Township of Montclair Building Office.
- **HomeAdvisor / Modernize** (NJ replacement $10,000–$25,000); **HomeGuide** (re-decking $2–$5/sq ft).
- **Insurance Information Institute** (wind/hail 2.8%, 1 in 36).
- **U.S. Census Bureau** (~54% units multi-unit); **Township of Montclair Housing Element** (large majority pre-WWII, qualitative); **National Park Service** (National Register listing places no federal restriction).
- Montclair geography (Eagle Rock + Mills Reservations, First Watchung ridge) per Essex County Parks, kept qualitative.
