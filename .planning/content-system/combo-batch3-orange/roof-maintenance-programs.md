# roof-maintenance-programs (Orange) — rewrite rationale

## De-fab literals cleared
- Killed `whyChooseUs` template line "NJ licensed, GAF Certified — 15+ years protecting Essex County" plus "same-day estimates and 24/7 emergency response" and "Premium materials from GAF, CertainTeed, Owens Corning with manufacturer warranties" (manufacturer-cert + years-in-business + response-time fabs); replaced with the four brief-default factual reasons (NJ HIC licensed/insured; local Essex crew; free written estimates; photo-documented workmanship).
- Deleted `overview[0]` price-in-lead + hype ("delivers expert … with prices starting from $250–$600/year and free estimates available today"); replaced with a figure-free answer-first definition.
- Deleted the invented NQR self-stat ("Our data from Orange properties shows homes … need replacement 5 to 8 years before manufacturer's rated lifespan") and the fabricated discount/priority-queue and per-year pricing ($250–$600/year, $400–$800 range) — repriced to the brief's sourced $400–$1,000 HomeAdvisor range + free-written-estimate framing.
- Deleted `conversionHooks.urgencyNote` "saves thousands" hype → factual prompt; CTA de-hyped.
- Stripped the entire fabricated **South Mountain Reservation** geography (2,100-acre canopy "borders Orange's southern neighborhoods directly," seasonal debris cycle, "mountain-adjacent" quarterly tier) — Orange is one municipality removed from the reservation (it is in West Orange). Removed the invented "Valley neighborhood chronic moisture / vapor barrier / dehumidification" below-deck narrative and the non-verified "industrial buildings along Mitchell Street." Re-grounded the tree/wind stressor on Orange's own dense street trees + the wooded West Orange / first-Watchung ridge (qualitative, no canopy figure), per brief.
- Did NOT import East Orange's "flat Watsessing plain." No river/Passaic/Newark Bay/tidal/flood-zone claim asserted.

## Local texture preserved + localized
- Heavy 2-/3-family + investor/landlord ownership → tenant-access coordination under NJ landlord-tenant notice (fixed spring-fall cadence enables advance notice).
- Converted-industrial/loft flat & low-slope membrane roofs in the **Valley Arts** area + **Main Street** commercial corridor → parapets, internal drains, scuppers.
- Older detached / mostly pre-1939 stock framing (qualitative).
- **Historic COA** brought in as ONE dedicated FAQ only (historic angle is contextual for maintenance): the four locally designated districts (Orange Valley, Montrose/Seven Oaks Park, Main Street, St. John's), COA from the City of Orange Township Historic Preservation Commission under Development Regulations Ch. 210, Art. X, binding/separate-from-permit, emergency repairs may proceed first, Register-listing-alone imposes no restriction, outside-district = no COA, confirm with Dept. of Planning & Economic Development. No per-district material rule asserted.

## Named sources cited (only what the fact packs support)
- **NRCA** — inspection cadence (twice/year spring + fall + after any severe weather event); building-owner inspection guidance.
- **ARMA** — proper maintenance extends asphalt-shingle service life ~25–30%; 50:50 chlorine-bleach-and-water low-pressure moss/algae wash; ¼-in-per-foot slope / 48-hour ponding defect (with NRCA).
- **GAF** — flashing is the most common leak source (technical guidance).
- **GAF, Carlisle, Owens Corning** — condition warranty coverage on periodic inspection, clear drains, prompt repair (maintenance record at claim).
- **InterNACHI life-expectancy chart** — EPDM 15–25 yr, TPO 7–20 yr, modified bitumen 20 yr.
- **U.S. EPA** — heat-island 1–7°F qualitative (no city-specific degree number).
- **N.J.A.C. 5:23-2.7** — detached 1-/2-family reroof = ordinary maintenance (no permit); 25% rule on commercial/multi-family/attached; administered by the City of Orange Township Building & Construction Division.
- **HomeAdvisor** — $400–$1,000 NJ routine-maintenance/leak range (pricing + cost FAQ).
- **City of Orange Township Historic Preservation Commission / Development Regulations Ch. 210, Art. X** — COA regime (four designated districts).

## Killed (not re-introduced)
- The **Firestone/ProLogis 15-year dataset** and the $0.14 vs $0.25 per-sq-ft life-cycle cost figures carried in the rewritten *service* object were NOT ported — both committed Newark and East Orange maintenance combos already dropped them as fabrications. Roof-life-extension claim limited to ARMA's sourced 25–30%.

## Verification
- directAnswer 37w; overview[0] 34w (figure-free); challenges[0] first-sentence 31w; process[0] first-sentence 34w (em-dash component list moved to sentence 2). All ≤40w counting em-dash tokens.
- 6 FAQs; exactly one cost FAQ ($400–$1,000 + free written estimate); no redundant "Who provides … in Orange?" FAQ.
- meta 152 chars; no `**` in raw fields; no links/URLs; no will/should/must/need-to modality in declaratives; esbuild parse OK.
