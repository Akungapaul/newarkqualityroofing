# slate-roof-replacement (Bloomfield) — rewrite rationale

**De-fab literals cleared:**
- Deleted the priced/hype `overview[0]` opener ("delivers expert … prices starting from $20,000–$45,000 and free estimates available today") → answer-first NQR-applied lead, figure-free, bolded topics.
- Replaced fabricated `whyChooseUs` ("NJ licensed, GAF Certified — 15+ years…", "Premium materials from GAF, CertainTeed, and Owens Corning with manufacturer warranties", "same-day estimates and 24/7 emergency response") with the registered-HIC / fully-insured / local-crew / free-written-estimate / photo-documentation set.
- Replaced `conversionHooks.urgencyNote` "Early action saves thousands" with a factual interior/structural-water-damage note; rewrote `midPageCta` to the plain free-written-estimate CTA.
- Dropped the old `$20,000–$45,000` pricing + the unsourced "$25–$45/sq ft" and "$50–$90k / $30–$50k" figures → brief default `$10,000–$25,000` (HomeAdvisor/Modernize), with the per-square-foot figure named-sourced in the cost FAQ only.
- Stripped the inline markdown self-links `[Bloomfield](/…)` and `[slate roofs](/…)` to plain text (page carries zero links).
- Removed the unsourced "5–8% annual breakage" repair-vs-replace threshold → replaced with the source-cited 20% threshold per NPS Preservation Brief 29.
- Reframed Bloomfield's stock off the prior "dominant Cape Cod and split-level character" → pre-war Colonials/Dutch Colonials + period homes near Bloomfield Center (split-levels not mentioned); no NQR "licensed".

**Entity-grounding applied:** `directAnswer` opens "Newark Quality Roofing is a roofing contractor providing slate roof replacement across Bloomfield, New Jersey, and Essex County…" (bold span 30 words) with the credential tail "as a registered New Jersey Home Improvement Contractor" outside the bold. No `definition` field (spliced post-assembly). Credential framing throughout = registered NJ HIC / fully insured.

**Historic posture:** CONDITIONAL Chapter 302 listed-parcel COA — the Township's Historic District Property List sets jurisdiction (not the NR Bloomfield Green boundary), NPS = NR listing alone places no federal restriction. Process[2-step] and the historic FAQ state the listed-parcel gate, not a whole-neighborhood or "no-COA" claim.

**Geography:** Watsessing → Second River + Toney's Brook (SE); Brookdale → Brookdale Park canopy debris (Montclair line); Bloomfield Center historic core. No reservation, no Third-River misattribution, no Watchung/Vailsburg/I-78 import.

**Named sources cited in-text:** the InterNACHI life-expectancy chart and the National Slate Association (slate 60–150 yr / premium 100+); NPS Preservation Brief 29 (60–125 yr+, 20% replacement threshold, non-ferrous copper/stainless slater's nails, copper/lead-coated-copper/terne-coated-stainless flashing, metal-hook vs copper-strip in freeze-thaw, no coating/sealing); NPS Preservation Brief 4 (flashing as the common slate leak source, pattern/coursing/color documentation); CertainTeed product literature (composite slate 40–50 yr); N.J.A.C. 5:23-6.4 (slate listed for complete removal, no recover-over); Bloomfield Township Code Chapter 302 + the Historic District Property List; National Park Service (NR listing = no federal restriction); HomeGuide ($2–$5/sq ft slate tear-off) and named NJ roofing guides ($10–$30/sq ft, ~$1,500/square, NJ 10–40% above national); HomeAdvisor/Modernize (combo replacement range).

5 FAQs (one cost FAQ; no redundant "Who provides…" FAQ). All ≤40-word leads verified (directAnswer 30, overview[0] 32, challenges[0] 37, process[0] 18, FAQ first sentences ≤40). Parse-checked with esbuild; no `**` in raw fields; meta 160 chars.
