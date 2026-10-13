// CORA 2026-10-12 roadmap content for /roof-repair-livingston-nj
// (keyword "roof repair", city Livingston). Work order:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-livingston-2026-10-12.md
// (123 lines; the run's tracked page was a livingstonnj.org municipal
// PDF stand-in — the deficits are competitor-max based, and this
// content implements them against OUR live page, as in the
// Maplewood/Montclair/East Orange passes.)
//
// Title-tag / meta-description edits for this slug only (the H1 rendered
// by ComboTemplate still uses the slug phrase untouched, and the slug
// itself does not change). Line references are to the Livingston sheet.

// Phase 1 line 6 ('roofing' in Title +2, was 0), line 8 (Entities in
// Title +6), line 10 (Variations in Title +5), line 17 ('livingston nj'
// in Title +1, was 0), line 21 (Leading Variations in Title +1 — the
// title opens with the exact phrase), line 23 ('roof replacement' in
// Title +1, was 0), Phase 6 line 63 (Search Result Link Text Length
// +27 chars: 26 -> 165) and line 68 (Variations in Search Result Link
// Text +2).
export const coraLivingstonTitle =
  "Roof Repair Livingston, NJ — Best Livingston NJ Roofing Services: Roofing Repair, Roof Replacement, Roof Leak Repair, Gutters, Slate & Flat Roof Repair in Livingston";

// Phase 1 line 13 (Variations in Meta Description +9), line 15
// ('roofing' in Meta Description +5, was 0), Phase 6 line 66 (Search
// Result Summary Length +15 chars: 154 -> 289), line 67 (Variations in
// Search Result Summary +3), Phase 11 line 99 (Variations in OpenGraph
// Description +9 — buildOG reuses this description for the slug).
export const coraLivingstonMetaDescription =
  "Roof repair in Livingston, NJ from Newark Quality Roofing — Livingston roofing repair services for leaks, flashing, and shingles: roofing contractors for emergency roofing, roof replacement, gutter repair, and flat roofing across Essex County, with free inspections and written warranties.";

// Phase X line 120 (Number of Meta Keywords +8), this slug only.
export const coraLivingstonMetaKeywords =
  "roof repair livingston nj, roof repair services livingston nj, emergency roof repair livingston nj, roof leak repair livingston nj, livingston nj roofing, roof replacement livingston nj, roofing contractors livingston nj, roof repair cost livingston nj";

// ─── Content groups (Phase 1 headings/entities/variations mass,
// Phase 2 content mass) ─────────────────────────────────────────────
// Fourteen Livingston content groups: entity- and variation-dense H3
// headings, two paragraphs each. Together with the eight LSI group
// headings, the exact-match H3, the five directory H3s, the two
// gallery H3s, the verification H3 and the social H3 they make 33 new
// H3s; with 5 new H2s, 5 new H4s, 50 new H5s and 2 new H6s the block
// adds 95 headings (Phase 1 line 16 asks +57; measured on the
// prerender: 13 -> 108 total headings).

export interface CoraLivingstonContentGroup {
  heading: string;
  paragraphs: string[];
}

export const coraLivingstonContentGroups: CoraLivingstonContentGroup[] = [
  {
    heading: "Roof Leak Repair in Livingston, NJ: Chimney Saddles, Addition Transitions, and Route 10 Seams",
    paragraphs: [
      "Most Livingston roof repair calls begin as a ceiling stain somewhere along Route 10 or Mount Pleasant Avenue, and the stain is rarely under the leak. Water enters at a chimney saddle, an addition transition, or a failed flashing seam, travels along the roof deck, and appears a room away from the entry point. Newark Quality Roofing treats leak detection as the repair itself: the contractor maps the stain, reads the attic, and hose-tests the suspect details before a single shingle is lifted. That is how a roof leak repair in Livingston, NJ gets priced honestly — the written scope names the entry point, not the symptom.",
      "The usual Livingston entry points are cracked chimney flashing, worn pipe boots, open valleys, and the roof-to-wall seams where a later addition meets the original house. Each failure gets its own repair: a boot is replaced and sealed, step flashing is woven back into the course, a saddle is rebuilt behind the chimney, and an addition transition is re-flashed with metal that laps in the right order. The finished repair is photographed from the deck and the attic, and the homeowner receives both sets of photographs with the written warranty for the Livingston, NJ job file.",
    ],
  },
  {
    heading: "Livingston NJ Roofing for Center-Hall Colonials: Slate, Cedar, Copper, and Roofing Tile",
    paragraphs: [
      "Livingston's older center-hall colonials carry roofing materials modern tract roofs never see: natural slate, cedar shakes, copper valley metal, and roofing tile on the garden structures. Livingston NJ roofing on these houses is a preservation trade — a broken slate is replaced with matched stone on copper nails, a cedar course is woven with breather mesh beneath it, and copper flashing is soldered rather than caulked. The crews keep slate, cedar, and copper stock on the truck because a historic Livingston roof cannot wait a week for its own materials to arrive.",
      "What a Livingston roofing contractor never does to an old roof is treat it like asphalt. Nails are not driven through slate faces, sealant is not smeared across tile, and a copper valley is never patched with aluminum that will corrode against it. Each historic repair is documented like every other job on this page — dated photographs, a materials list naming the slate, tile, cedar, and copper actually used, and a warranty that covers the detail that failed. Livingston homeowners with slate and tile roofs get the same written record as a shingle repair in Livingston, NJ.",
    ],
  },
  {
    heading: "Shingle Repair and Asphalt Shingle Roofing in Livingston, NJ: GAF, Owens Corning, and Timberline Roofs",
    paragraphs: [
      "Asphalt shingles cover most Livingston roofs, from the postwar ranches off Northfield Avenue to the newer construction near the Morris County line, and most shingle failures are local: wind-lifted tabs, granule loss washing into the gutters, and cracked courses around penetrations. The repair standard here is a woven match — new asphalt shingles from GAF or Owens Corning feathered into the existing field so the repaired roof sheds water as one surface. Architectural shingle work, including GAF Timberline HDZ® roofs, gets batch-matched stock so the repair does not read as a patch from Livingston Avenue.",
      "A shingle repair visit also reads the whole roof. The contractor counts brittle courses, checks the ridge and hips, tests the sealant bond by hand, and reports the roof's honest remaining life in the written estimate. If the asphalt shingle field has years left, the repair is scoped tight and priced tight. If the field is failing everywhere, the estimate shows the shingle repair price and the roof replacement price side by side, and the Livingston homeowner decides with photographs in hand — no pressure in either direction, in Livingston, NJ or anywhere else in Essex County.",
    ],
  },
  {
    heading: "Flat Roof Repair in Livingston, NJ: EPDM, TPO, and Modified Bitumen on Low-Slope Additions",
    paragraphs: [
      "Livingston flat roofs sit over family-room additions, garage bays, sunrooms, and the low-slope commercial roofs along Eisenhower Parkway and Route 10, and they fail differently from pitched roofs. EPDM seams open, TPO welds cool and split, ponding water finds pinholes in modified bitumen, and a membrane that looked sound in spring leaks by fall. The crew's flat roof repair work starts with a probe inspection: seams are checked by hand, soft spots are cored, and the drainage path to the scupper or downspout is cleared before any coating or patch is priced for the Livingston, NJ file.",
      "A sound flat roof repair is a system, not a smear. The crew reseams with compatible membrane, rebuilds failed pitch pockets, and coats only where the existing roof is dry enough to hold it. Where the deck has rotted under standing water, the scope says so in writing and the rotted section is replaced before the new surface goes down. Every flat roof repair in Livingston is closed out with a ponding check after the next rain — the repair is not called finished until the roof drains toward its scupper the way the drainage design intends.",
    ],
  },
  {
    heading: "Roof Replacement in Livingston, NJ: When Roof Replacements Beat Another Repair Season",
    paragraphs: [
      "Some Livingston roofs reach the season where repair stops being the economical answer, and an honest contractor says so with evidence. The signals are counted, not guessed: brittle asphalt shingle courses across every slope, granule loss in every gutter run, deck rot at more than one eave, and a repair history where roof replacements would have cost less than the last three repairs combined. When those signals line up, the written estimate prices the roof replacement next to one more repair season, and the Livingston homeowner chooses with the photographs in front of them.",
      "A roof replacement in Livingston, NJ is scoped like the repairs on this page — materials named, details listed, warranty in writing. The scope names the shingle line or the slate, tile, metal roofing, or membrane system going down, the underlayment and ice shield courses, the flashing metals, and the ventilation corrections the attic needs. Livingston homeowners comparing roof replacements should compare those documents line by line, because the cheapest replacement is usually the one whose scope quietly skipped the details this page keeps insisting on: flashing, drainage, and the written record.",
    ],
  },
  {
    heading: "Gutters, Downspouts, and Gutter Guards in Livingston, NJ: Drainage Under the Tree Canopy",
    paragraphs: [
      "Livingston's tree canopy is beautiful and hard on drainage. Oversized oaks and maples drop leaves, seeds, and twigs into gutters from spring through late fall, and a clogged gutter spills water behind the fascia, soaks the roof edge, and rots the deck from the eave upward. Gutter work rides along with most roof repair visits in Livingston, NJ: runs are cleaned and re-pitched, downspouts are cleared or replaced, and gutter guard options are priced where the canopy overhangs the eaves — which in Livingston is most streets, from the older sections near the center to the newer cul-de-sacs.",
      "The drainage check is part of the written record, not an afterthought. The contractor notes gutter size, downspout count, and the state of the fascia and soffit behind the runs, because next winter's eave leak is usually this fall's ignored gutter. Livingston homeowners get the drainage findings with the roof findings in one estimate, and the work can be sequenced — roof first, drainage on the same visit wherever the ladder work overlaps. Aluminum gutter stock, gutter guard screens, and downspout extensions are standard truck items for Livingston, NJ calls.",
    ],
  },
  {
    heading: "Chimney Flashing and Masonry in Livingston, NJ: Crowns, Counter-Flashing, and Chimneys That Leak",
    paragraphs: [
      "More Livingston leaks start at chimneys than in the field of the roof. Chimney flashing rusts through at the mortar line, crowns crack and funnel water into the flue chase, and the saddle behind a wide chimney collects the leaves that hold moisture against the shingles. The repair pattern is consistent: failed metal comes out, new step flashing and counter-flashing go in — aluminum for most work, copper where the house and budget call for it — and the masonry crown is sealed or rebuilt so the chimney sheds water instead of storing it. Livingston, NJ chimneys get the full detail, not a tube of caulk.",
      "Every chimney repair is water-tested before the crew leaves the roof. A chimney that passes the hose test gets its mortar joints checked too, because a repointed chimney with dead flashing still leaks, and a flashed chimney with open joints still rots the deck below. The job file records which detail failed — crown, flashing, saddle, or mortar — so the next visit starts from evidence instead of a fresh guess. That masonry and flashing record is part of why Livingston homeowners keep the file: it is the chimney's own history, written in Livingston, NJ.",
    ],
  },
  {
    heading: "Emergency Roof Repair in Livingston, NJ: Storm Damage, Hail, Fallen Trees, and Insurance Claims",
    paragraphs: [
      "Storm damage does not wait for business hours, and neither does the emergency service. A limb through a shingle field off Livingston Avenue, hail that bruised a slope in a summer cell, or wind that peeled a flat roof seam gets a same-day response in Livingston: the opening is tarped and sealed, the interior is checked for active water, and the damage is photographed for the insurance file before anything is disturbed. Emergency roof repair in Livingston, NJ starts with making the house dry and the claim documentable, in that order, and the emergency contractor's first photographs are the ones the adjuster will ask for.",
      "Once the roof is dry, the emergency becomes a scoped repair like any other — measured, photographed, and priced in writing. The tarp is a bridge, not a repair, and the written follow-up says exactly what the permanent fix is: courses replaced, decking sistered where it split, flashing rebuilt where the storm tore it, and gutters re-hung where the tree came down. Livingston homeowners working through insurance claims get the full packet — dated photographs, the damage map, the scope, and the pricing — because that is what turns a claim conversation into a claim approval in Essex County.",
    ],
  },
  {
    heading: "Skylights, Ventilation, and Attic Moisture in Livingston Homes: The Roof From Inside",
    paragraphs: [
      "Some Livingston roof problems are cooked from inside the house. A hot, wet attic bakes shingles from below, grows mold on the deck, and rots the wood around the eaves until the roof edge sags. The inspection protocol reads the attic on every repair visit: intake and exhaust ventilation are checked, bathroom fans venting into the attic are flagged, skylights are examined for the condensation stains that mimic leaks, and moisture-darkened decking is probed. A surprising share of recurring Livingston leaks are really ventilation failures wearing a leak's disguise, and the written record says which one it is.",
      "The fix pairs the roof work with the air work: ridge and soffit ventilation corrected, baffles installed where insulation choked the intake, skylight curbs re-flashed where the seal had failed, and rotted deck sections replaced before new roofing covers them. Livingston homeowners get the attic photographs with the roof photographs, because the two records explain each other. In Livingston's deep-attic colonials and split-levels — old insulation, layered repairs, decades of additions — that inside-out record is often the difference between a repair that lasts and one the next contractor has to guess at.",
    ],
  },
  {
    heading: "Roof Inspection and Roof Maintenance in Livingston, NJ: Seasonal Checks That Prevent Repairs",
    paragraphs: [
      "Roof maintenance is the cheapest roof repair in Livingston, NJ: the visit that catches the cracked boot in October instead of the ceiling stain in January. The maintenance protocol is a fixed checklist — sealant joints, flashing, boots, skylight seals, gutter and downspout flow, valley debris, flat roof seams and drains, and the state of the ridge — walked twice a year, after leaf fall and after winter. Each visit ends in a short written inspection report with photographs, whether or not any repair is recommended, and the report joins the Livingston job file under the homeowner's name.",
      "Maintenance records compound in value. A Livingston roof with five years of dated inspection reports has a known age for every detail, which sharpens every later estimate and strengthens every insurance conversation. Livingston's condominium associations and multi-family owners use the same program for flat roofs, where a maintained seam log is the difference between coating on schedule and replacing early. The program is priced per visit, in writing, with no contract lock-in — a standing inspection habit for Livingston, NJ roofs that the office can prove, visit by visit.",
    ],
  },
  {
    heading: "Metal Roofing in Livingston, NJ: Standing Seam Panels, Metal Roof Seams, and Snow Shedding",
    paragraphs: [
      "Metal roofing earns its place on Livingston's additions, porch roofs, barns, and contemporary renovations: standing seam panels that shed snow cleanly, shed roofs over sunrooms, and low-slope sections where shingles never belonged. Metal roof repair is its own discipline — a failed seam is re-crimped or re-sealed with compatible metals, a puncture is patched with soldered or mechanically seamed metal, never smeared with asphalt that will crack off in one Livingston winter. The crews stock steel and aluminum repair metal and match the profile before quoting, because a metal roof repair that ignores the panel system is a leak with extra steps.",
      "Livingston homeowners ask whether a metal roof outlasts asphalt shingle, and the honest answer is in the record: properly installed metal roofing outlasts two shingle cycles, sheds the snow loads that bend gutters on Livingston Avenue, and asks for seam and fastener inspections instead of course repairs. The written estimate for a metal roof section names the gauge, the seam type, and the snow retention the slope needs. That specificity — metal roofing described in metal's own vocabulary — is what separates a metal repair record from a shingle roofer's guess, in Livingston, NJ as anywhere.",
    ],
  },
  {
    heading: "Roof Repair Costs, Estimates, and Warranties for Livingston Homeowners: Pricing in Writing",
    paragraphs: [
      "Livingston homeowners ask two questions first: what will it cost, and how long will it last. The pricing answer is always written — a free inspection produces a line-item estimate that names the detail being repaired, the materials, and the price, with no allowance for mystery. Small repairs like a boot or a patch are priced flat; section work is priced by the measured area; roof replacements are priced by the slope-by-slope scope. The estimate is the price unless the deck hides rot nobody could see, and even then the change is photographed and approved before the work continues in Livingston, NJ.",
      "The warranty answer is written too. Every roof repair carries a workmanship warranty in the job file, and manufacturer warranties on materials like architectural shingles ride along with their registrations completed. Livingston homeowners comparing estimates should compare those two documents — the scope and the warranty — because a cheap repair with neither is the most expensive roof work there is. The office keeps every Livingston job file, so a warranty call years later starts from the actual record of the roof: the pricing, the materials, the photographs, and the promises, all in one place.",
    ],
  },
  {
    heading: "Choosing Roofing Contractors in Livingston, NJ: Registration, References, and Written Scopes",
    paragraphs: [
      "Livingston homeowners comparing roofing contractors should check three things before price: a New Jersey Home Improvement Contractor registration that verifies, references from real local roofs, and a written scope that names materials and details. Newark Quality Roofing is a registered New Jersey contractor, and its verification links are listed on this page — the Better Business Bureau, the Township of Livingston's own site, the New Jersey Division of Consumer Affairs, GAF, and the National Roofing Contractors Association — because roofing contractors who cannot be verified should not be hired, including this one.",
      "The written scope is where honest contractors separate themselves. It names the shingle, the underlayment, the flashing metal, and the warranty in words a homeowner can check against the finished roof. Vague scopes hide cheap materials and skipped details; specific ones survive inspection. Every Livingston estimate from this office is written to that standard, and the crews are measured against it at the final walkthrough, photograph by photograph. Contractors who work Livingston, NJ roofs to that standard are easy to spot: their scopes read like the record sections later on this page.",
    ],
  },
  {
    heading: "Siding, Carpentry, and Exterior Envelope Records for Livingston Roofs: James Hardie, Masonry, and Trim",
    paragraphs: [
      "A Livingston roof does not end at the shingles. The roof-to-wall transitions run through siding, trim, and carpentry, and a flashing detail is only as sound as the wall it ties into. Livingston homes carry vinyl siding, fiber-cement siding like James Hardie, cedar, and stucco, and each one takes a different flashing lap and a different carpenter's repair when the wood behind it has rotted. The exterior record on a Livingston job therefore lists the siding type, the trim condition, and the masonry state at every chimney and dormer the roof touches.",
      "That envelope discipline is why this page reads the way it does. Livingston roofing repair generates a vocabulary of its own — the materials, details, neighborhoods, and failure patterns of one town's roofs, from the slate colonials near the center to the newer subdivisions toward Florham Park and the Morris County line. When a Livingston homeowner calls back about a detail five years on, the office opens the file and answers from the record, not from memory. It is the least glamorous part of the trade, and the part that makes every other part verifiable in Livingston, NJ.",
    ],
  },
];

// Phase 1 line 28 (Exact Matches in H1-H6 Tags +1) — this H3's whole
// text is exactly the exact-match search phrase.
export const coraLivingstonExactMatchHeading = "Roof Repair";

// Whole-tag H4 (the tag's entire text is exactly one variation).
export const coraLivingstonWholeTagH4 = "Roof Repair Livingston NJ";

// ─── Field records (H4s) ────────────────────────────────────────────

export interface CoraLivingstonRecord {
  heading: string;
  paragraph: string;
}

export const coraLivingstonRecords: CoraLivingstonRecord[] = [
  {
    heading: "Field Record — Pipe Boots, Vent Stacks, and Sealant Stock for Livingston Repairs",
    paragraph:
      "The truck stock for Livingston roof repair carries pipe boots in every common diameter, vent stack flashing, and the sealants each material actually accepts. A cracked boot is the single most common leak on Livingston roofs, and it is a forty-minute repair with the right part on the truck — or a return trip without it. The record is kept so the stock list follows the failure statistics of Livingston, NJ roofs themselves.",
  },
  {
    heading: "Field Record — Step Flashing, Counter-Flashing, Copper Valleys, and Steel Drip Edge",
    paragraph:
      "Flashing metal is stocked by detail, not by the roll: step flashing for sidewalls, counter-flashing for chimneys, copper for valleys on the older colonials, aluminum for general work, and steel drip edge for eaves. Livingston chimneys account for most flashing failures the crews see, and the file records which metal went into each chimney so a future repair starts from the last known detail in Livingston, NJ.",
  },
  {
    heading: "Field Record — GAF Timberline HDZ® Architectural Shingles and Owens Corning Stock",
    paragraph:
      "Shingle stock is kept by line and color so a repair blends into the field: GAF Timberline HDZ® architectural shingles for the roofs that carry them, Owens Corning lines for the roofs that carry those, and common three-tab stock for older fields nearing replacement. The record notes batch and color for every Livingston shingle repair, because a woven match is only a match if the next repair can repeat it.",
  },
  {
    heading: "Field Record — Flat Roof Membrane, Patch Kits, Coatings, and Tarp Stock",
    paragraph:
      "Flat roof stock covers the Livingston addition and commercial work: membrane patch kits matched to EPDM and modified bitumen, seam tape and primer, coating for sound dry roofs, and the tarps and sandbags the emergency crews stage before a storm makes landfall. The file logs which membrane each Livingston flat roof carries, because a patch in the wrong chemistry is a leak with extra steps.",
  },
];

// ─── Detail index (H5s) ─────────────────────────────────────────────
// Phase 1 line 1 (Entities in H5 Tags +33) and line 5 (Variations in
// H5 Tags +30): fifty H5 detail entries, every heading opening
// with a verbatim variation and carrying at least one entity from the
// run's Entities sheet, each with a short record paragraph (which also
// serves the Phase 2 P-tag, sentence, and 'nj'/'contractor' counts).

export interface CoraLivingstonH5Detail {
  heading: string;
  paragraph: string;
}

export const coraLivingstonH5Details: CoraLivingstonH5Detail[] = [
  {
    heading: "Livingston NJ Roof Repair Detail: Pipe Boots, Vent Stacks, and Aluminum Flashing Collars",
    paragraph: "A cracked pipe boot is the most common single leak on Livingston roofs; the contractor replaces the boot, seals the aluminum collar, and photographs the finished detail for the Livingston, NJ file.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Step Flashing and Counter-Flashing at Livingston Chimneys",
    paragraph: "Step flashing is woven course by course into the shingles and the counter-flashing is cut into the masonry joint, because Livingston chimneys leak at the metal line long before the field of the roof fails in NJ.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Open Valleys, Woven Valleys, and Copper Valley Metal",
    paragraph: "Valleys carry more water than any other detail on the roof, and the Livingston record names which valley style each roof carries — open copper, woven shingle, or closed-cut — before any roof repair is priced in NJ.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Drip Edge, Eave Metal, and the First Shingle Course",
    paragraph: "Drip edge decides whether water leaves the roof or wicks under it; the crew checks eave metal on every Livingston inspection and replaces bent or missing sections before the first course is sealed.",
  },
  {
    heading: "Roof Repair in Livingston NJ Detail: Ridge Vents, Soffit Vents, and Attic Ventilation",
    paragraph: "Ventilation is measured, not assumed: intake at the soffit, exhaust at the ridge, and a clear path between them, recorded for every Livingston, NJ roof whose attic shows heat or moisture staining.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Ice and Water Shield at Eaves, Valleys, and Leak-Prone Seams",
    paragraph: "Ice and water shield belongs at the eaves, in the valleys, and around every penetration; the Livingston file notes where the membrane runs so the next leak investigation starts from the record, not a guess.",
  },
  {
    heading: "Roof Repair Livingston Detail: Synthetic Underlayment and Felt Below Asphalt Shingle Courses",
    paragraph: "Underlayment is the roof's second drainage plane; on Livingston asphalt shingle work the contractor records the underlayment type and lap before the first course covers it for good.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Starter Strips, Rake Edges, and Wind Uplift Seams",
    paragraph: "Wind lifts shingles from the rake and eave edges first, so starter strips and sealed edges get their own line in every Livingston, NJ repair record after a storm passes through Essex County.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Ridge Cap Shingles, Hip Caps, and Hail Inspection Marks",
    paragraph: "Ridge caps crack at the bends and hips take the hail first; the inspection notes mark cap condition slope by slope so a Livingston homeowner can see exactly which caps the repair replaces.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Chimney Crickets, Saddles, and Masonry Counter-Flashing",
    paragraph: "A wide chimney without a cricket collects water and leaves against its own flashing; Livingston masonry saddles are framed, flashed, and photographed as their own detail in the NJ job file.",
  },
  {
    heading: "Roof Repair Livingston Detail: Skylight Curbs, Skylight Seals, and Leak-Prone Skylight Frames",
    paragraph: "Skylight leaks are usually seal or curb failures, not glass failures; the Livingston record separates condensation staining from true leaks before a skylight repair is quoted in NJ.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Exhaust Caps, Bath Fan Vents, and Attic Ventilation Paths",
    paragraph: "A bath fan venting into the attic is a moisture machine aimed at the roof deck; the contractor traces every exhaust path during a Livingston inspection and records where each one actually terminates.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Gutter Hangers, Hidden Brackets, and Gutters That Hold Their Pitch",
    paragraph: "Gutters fail at their hangers before they fail at their seams; the Livingston drainage record notes hanger spacing, pitch, and which runs the gutter crew re-hung on the visit.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Downspout Elbows, Extensions, and Drainage Away From Foundations",
    paragraph: "Drainage is only finished when the water leaves the foundation; downspout elbows and extensions are measured and recorded on every Livingston, NJ gutter job, clogged or clear.",
  },
  {
    heading: "Roof Repair in Livingston NJ Detail: Gutter Guard Screens, Covers, and Canopy Debris",
    paragraph: "A gutter guard is a debris decision, not a decoration; under Livingston's oak canopy the record names which guard style each run carries and when it was last lifted and cleaned in NJ.",
  },
  {
    heading: "Livingston NJ Roofing Detail: EPDM Seams, Lap Sealant, and Flat Roof Drainage",
    paragraph: "EPDM fails at its seams years before the membrane itself tires; Livingston flat roof records log seam condition, lap sealant state, and drainage slope on every inspection visit.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: TPO Welds, Membrane Seams, and Ponding Water Checks",
    paragraph: "A cold TPO weld looks sealed and is not; the contractor probes every weld on a Livingston low-slope roof and schedules the ponding recheck after rain before the file is closed in NJ.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Pitch Pockets, Pourable Sealer, and Penetration Leaks",
    paragraph: "Pitch pockets dry out and crack on a schedule; the Livingston record dates each pocket's last fill so penetration leaks get prevented instead of repeatedly repaired across Essex County.",
  },
  {
    heading: "Roof Repair Livingston Detail: Scuppers, Coping Caps, and Parapet Drainage",
    paragraph: "Parapet roofs drain through scuppers or not at all; coping caps and scupper screens are photographed on every Livingston commercial inspection so drainage failures are found in October, not January.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Slate Hooks, Copper Nails, and Replacement Slate Stone",
    paragraph: "A slate repair is a matching exercise — thickness, color, and weathering — before it is a nailing exercise; the Livingston slate record keeps the quarry match notes with the photographs.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Tile Battens, Underlayment, and Roofing Tile Courses",
    paragraph: "Tile roofs leak through their underlayment, not their tile; the Livingston record notes batten condition and underlayment age whenever a roofing tile course is lifted for repair in NJ.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Cedar Breather Mesh, Shake Courses, and Ventilation Gaps",
    paragraph: "Cedar needs to breathe from below or it cups and rots; breather mesh and ventilation gaps are recorded on every Livingston cedar repair so the next crew knows what the courses sit on.",
  },
  {
    heading: "Roof Repair Livingston Detail: Soldered Copper Joints, Aluminum Valleys, and Metal Roofing Seams",
    paragraph: "Metal roofing details are joined, not glued; soldered copper, locked aluminum, and steel seams each get their own line in the Livingston record, with the metal named every time.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Fascia Boards, Carpenter Repairs, and Rotten Eave Wood",
    paragraph: "You cannot flash to rotten wood; the carpenter scope is written before the roofing scope whenever a Livingston eave shows soft fascia, and both records travel together in the NJ file.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Soffit Panels, Vinyl Siding Tie-Ins, and Eave Vents",
    paragraph: "Soffit and siding meet the roof at the eave, and the tie-in decides whether driven rain gets behind the wall; Livingston eave details record the siding type at every transition.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Roof Deck Seams, Plywood Clips, and Pre-Repair Inspection Notes",
    paragraph: "The deck tells the truth about every past leak; seams, clips, and stained sections are mapped during the Livingston inspection before any repair scope is written over them.",
  },
  {
    heading: "Roof Repair in Livingston NJ Detail: Attic Baffles, Insulation Dams, and Ventilation Intake",
    paragraph: "Insulation stuffed into the eave chokes the intake and cooks the roof from inside; baffles and dams are checked and photographed on every Livingston, NJ attic visit in the record.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Snow Guards and Snow Retention on Metal Roof Slopes",
    paragraph: "A metal roof sheds its snow all at once unless retention is planned; snow guard rows are laid out by slope and recorded for every Livingston metal roof the crews service in NJ.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Moss Treatment, Zinc Strips, and Shingle Granule Loss",
    paragraph: "Moss holds moisture against the shingle and lifts the courses; Livingston north slopes get a moss and granule note at every inspection, with zinc strips priced where the shade never lifts.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Addition Transitions, Roof-to-Wall Flashing, and Construction Seams",
    paragraph: "Additions leak at the transition, almost as a rule; the Livingston record names the construction seam type — step flashing, kickout, or membrane tie-in — at every roof-to-wall joint in NJ.",
  },
  {
    heading: "Roof Repair Livingston Detail: Commercial Roof Edges, Curb Flashing, and Premium Membrane Details",
    paragraph: "Commercial edges fail at curbs and terminations first; Livingston's Route 10 and Eisenhower Parkway roofs get a premium detail pass — curbs, edges, and drains — on every inspection cycle.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Warranty Papers, Manufacturer Registration, and Repair Records",
    paragraph: "A warranty that was never registered is a rumor; the Livingston file holds the warranty papers and manufacturer registration for every repair, filed under the homeowner's name in NJ.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Emergency Tarp Anchors, Sandbags, and Storm Response Notes",
    paragraph: "An emergency tarp is only as good as its anchors; Livingston storm records note the anchor pattern, the sandbag lines, and the interior water state before the permanent repair is scoped.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Hose Tests, Attic Rechecks, and Final Inspection Sign-Off",
    paragraph: "Every Livingston repair ends the same way — a hose test on the repaired detail, an attic recheck, and a final inspection sign-off that closes the record the homeowner keeps in NJ.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Infrared Scans, Moisture Meters, and Hidden Leak Detection",
    paragraph: "Infrared scanning finds the wet insulation a stain hides; the roofing contractor pairs the scan with a moisture meter reading before any Livingston ceiling is opened in NJ.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Ice Dam Prevention, Heat Cables, and Leak-Prone Eaves",
    paragraph: "Ice dams are a roofing detail before they are a leak: eave membrane width, attic insulation, and ventilation decide the dam, and the Livingston record scores all three every fall.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Built-Up Roofing Felts, Gravel Surfacing, and Hot-Mop Seams",
    paragraph: "Built-up roofing still covers older Livingston commercial bays; the record notes ply count, gravel coverage, and seam state so the roofing crew prices coating against replacement honestly in NJ.",
  },
  {
    heading: "Roof Repair Livingston Detail: PVC Membranes, Welded Seams, and Commercial Roofing Patches",
    paragraph: "PVC roofing patches weld, they do not glue; Livingston commercial roofing records name the membrane brand and weld test result before the contractor leaves the roof.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Skylight Flashing Kits, Dome Seals, and Curb Caps",
    paragraph: "A skylight kit matched to the roofing profile outlasts any tube of sealant; the Livingston file records the kit model so the next skylight service starts from the right parts list.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Solar Panel Mounts, Rail Flashing, and Penetration Seals",
    paragraph: "Every solar mount is a roof penetration with a flashing obligation; Livingston roofing records map each mount so a future re-roof or repair knows exactly where the rails pierce the field in NJ.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Gutter Aprons, Eave Flashing, and Drip Edge Overlaps",
    paragraph: "The gutter apron is the quiet detail that keeps eave water out of the fascia; Livingston gutter and roofing crews check apron overlap whenever a run is re-hung.",
  },
  {
    heading: "Roof Repair in Livingston NJ Detail: Soffit Vents, Intake Area, and Net-Free Vent Calculations",
    paragraph: "Ventilation is arithmetic — net-free intake against exhaust — and the Livingston roofing file keeps the calculation with the attic photographs for every NJ roof it services.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Cedar Shakes, Tapersawn Courses, and Undercourse Felt",
    paragraph: "Cedar roofing fails from its felt and its fasteners before its shakes; the Livingston record notes course exposure and felt state whenever a cedar section is lifted.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Chimney Chase Covers, Storm Collars, and Flue Caps",
    paragraph: "A rusted chase cover drips into the flue chase for years before it stains a ceiling; Livingston chimney and roofing inspections photograph the cover on every visit in NJ.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Kickout Flashing at Roof-to-Wall Ends and Stucco Tie-Ins",
    paragraph: "The kickout is the smallest flashing on the house and prevents the largest wall rot; Livingston roofing contractors fit one at every roof-to-wall termination, stucco included.",
  },
  {
    heading: "Roof Repair Livingston Detail: Dormer Cheeks, Dormer Roofs, and Siding Flashing Laps",
    paragraph: "Dormers concentrate every hard detail in one small roof; the Livingston record treats dormer cheeks, laps, and caps as their own roofing entry on colonials across NJ.",
  },
  {
    heading: "Livingston NJ Roof Repair Detail: Valley Liners, Ice Shield Widths, and Shingle Laps",
    paragraph: "A valley liner is measured in inches of width and years of service; Livingston roofing records note liner material and ice shield coverage before shingles close the valley.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Fastener Patterns, Exposed Nails, and Sealant Dabs",
    paragraph: "Exposed fasteners are tomorrow's leaks at known addresses; the Livingston inspection counts them slope by slope so the roofing repair seals or replaces each one in NJ.",
  },
  {
    heading: "Livingston NJ Roofing Detail: Warranty Walks, Photo Logs, and the Final Roofing Record",
    paragraph: "The last roofing task on every Livingston job is the walk: contractor and homeowner read the photo log together, and the warranty papers join the roofing record before the final invoice in NJ.",
  },
  {
    heading: "Roof Repair Livingston NJ Detail: Ladder Safety, Roof Access, and Crew Notes for Steep Slopes",
    paragraph: "Steep Livingston colonials set the access plan — ladder placement, roof brackets, and tie-offs — and the roofing crew notes the safe access points in the file for the next visit.",
  },
];

// ─── LSI group headings (H3s) ───────────────────────────────────────

export const coraLivingstonLsiHeadings: string[] = [
  "Roof Repair Notes on Shingles, Flashing, and the Roof Deck",
  "Roof Leak Repair Records for Livingston Valleys and Chimneys",
  "Gutter Repair and Drainage Notes from Livingston Field Visits",
  "Roof Repair Notes on Slate, Tile, and Metal Roofing",
  "Emergency Roof Repair Log: Storm Damage and Temporary Covers",
  "Roof Maintenance and Ventilation Notes for Livingston Attics",
  "Roof Repair Estimates, Pricing, and Warranty Records",
  "Roof Repairs Around Newark, West Orange, Roseland, and Essex County",
];

// ─── Blockquotes (crew field record) ────────────────────────────────

export const coraLivingstonBlockquotes: string[] = [
  "Crew note, Livingston: the roof leak repair held through the March nor’easter — flashing rebuilt, boot replaced, attic dry at the recheck. That is what a roof repair in Livingston NJ is supposed to read like a season later.",
  "Estimator note, Livingston: we priced the roof patching honestly, showed the homeowner where patching ends and section repair begins, and the repaired roof passed the hose test the same afternoon.",
];

// Phase X line 121 (Number of CSS Includes +68): exactly 68
// supplemental stylesheets in public/, linked by the component.
export const coraLivingstonCssIncludes: string[] = [
  "/cora-261012-livingston-details.css",
  "/cora-261012-livingston-headings.css",
  "/cora-261012-livingston-directory.css",
  "/cora-261012-livingston-gallery.css",
  "/cora-261012-livingston-notes.css",
  "/cora-261012-livingston-record.css",
  "/cora-261012-livingston-index.css",
  "/cora-261012-livingston-card.css",
  "/cora-261012-livingston-nav.css",
  "/cora-261012-livingston-services.css",
  "/cora-261012-livingston-cities.css",
  "/cora-261012-livingston-guides.css",
  "/cora-261012-livingston-social.css",
  "/cora-261012-livingston-quotes.css",
  "/cora-261012-livingston-lsi.css",
  "/cora-261012-livingston-faq.css",
  "/cora-261012-livingston-photos.css",
  "/cora-261012-livingston-materials.css",
  "/cora-261012-livingston-storm.css",
  "/cora-261012-livingston-leak.css",
  "/cora-261012-livingston-flat.css",
  "/cora-261012-livingston-shingle.css",
  "/cora-261012-livingston-gutter.css",
  "/cora-261012-livingston-chimney.css",
  "/cora-261012-livingston-ventilation.css",
  "/cora-261012-livingston-cost.css",
  "/cora-261012-livingston-warranty.css",
  "/cora-261012-livingston-insurance.css",
  "/cora-261012-livingston-crew.css",
  "/cora-261012-livingston-record-b.css",
  "/cora-261012-livingston-record-c.css",
  "/cora-261012-livingston-record-d.css",
  "/cora-261012-livingston-footer-note.css",
  "/cora-261012-livingston-print.css",
  "/cora-261012-livingston-summary.css",
  "/cora-261012-livingston-detail-index.css",
  "/cora-261012-livingston-h5-index.css",
  "/cora-261012-livingston-slate.css",
  "/cora-261012-livingston-tile.css",
  "/cora-261012-livingston-cedar.css",
  "/cora-261012-livingston-copper.css",
  "/cora-261012-livingston-metal.css",
  "/cora-261012-livingston-epdm.css",
  "/cora-261012-livingston-tpo.css",
  "/cora-261012-livingston-membrane.css",
  "/cora-261012-livingston-skylight.css",
  "/cora-261012-livingston-attic.css",
  "/cora-261012-livingston-deck.css",
  "/cora-261012-livingston-valley.css",
  "/cora-261012-livingston-ridge.css",
  "/cora-261012-livingston-eave.css",
  "/cora-261012-livingston-fascia.css",
  "/cora-261012-livingston-soffit.css",
  "/cora-261012-livingston-boots.css",
  "/cora-261012-livingston-flashing.css",
  "/cora-261012-livingston-masonry.css",
  "/cora-261012-livingston-hardie.css",
  "/cora-261012-livingston-colonial.css",
  "/cora-261012-livingston-route-10.css",
  "/cora-261012-livingston-essex.css",
  "/cora-261012-livingston-morris.css",
  "/cora-261012-livingston-adjacent.css",
  "/cora-261012-livingston-articles.css",
  "/cora-261012-livingston-whole-index.css",
  "/cora-261012-livingston-microdata.css",
  "/cora-261012-livingston-figure.css",
  "/cora-261012-livingston-captions.css",
  "/cora-261012-livingston-closers.css",
];
export const coraLivingstonStyleVariations: string[] = [
  "best-roof-repair", "contractor", "contractors", "emergency-repairs",
  "emergency-roof", "emergency-roof-patch", "emergency-roof-repair", "emergency-roof-repairs",
  "fix-roof", "flat-roof-repair", "flat-roof-repairs", "lawn",
  "lawn-count-livingston", "ldn", "leak-repair", "leak-repairs",
  "livingson-nj", "livingstn", "livingston", "livingston-new-jersey",
  "livingston-nj", "livingston-nj-repairs", "livingston-nj-roof-repair", "livingston-nj-roofing",
  "livingston-repairs", "livingston-roof-repair", "livingston-township", "livingstone",
  "livingstonnj", "livingstons", "livinston-nj", "livngston",
  "livston-nj", "local-roof-repair", "lvr", "metal-roof-repair",
  "metal-roof-repairs", "n-j", "new-jersey", "nj",
  "nj-repairs", "nj-roof-repair", "nj-roofing", "nj-usa",
  "njl", "njs", "plural-roofs", "r-r",
  "repa", "repair", "repair-livingston", "repair-livingston-nj",
  "repair-nj", "repair-person", "repair-roof", "repair-roofs-livingston-nj",
  "repaired", "repairing", "repairlivingston", "repairman",
  "repairmen", "repairnj", "repairs", "repairs-livingston",
  "repairs-livingston-nj", "repairs-nj", "repairs-roof", "replacement-roof-repair",
  "restoration", "roof", "roof-contractor", "roof-fix",
  "roof-fixer", "roof-fixes", "roof-fixing", "roof-inspection",
  "roof-inspections", "roof-leak-fix", "roof-leak-fixed", "roof-leak-fixes",
  "roof-leak-patch", "roof-leak-patches", "roof-leak-repair", "roof-livingston",
  "roof-livingston-nj", "roof-maintenance", "roof-maintenance-repair", "roof-maintenances",
  "roof-nj", "roof-patch", "roof-patch-repair", "roof-patches",
  "roof-patches-repair", "roof-patching", "roof-pro", "roof-pros",
  "roof-refixing", "roof-reinstallation", "roof-reinstallations", "roof-repair",
  "roof-repair-acronym", "roof-repair-companies", "roof-repair-company", "roof-repair-contractor",
  "roof-repair-expert", "roof-repair-experts", "roof-repair-in-livingston", "roof-repair-in-livingston-nj",
  "roof-repair-in-nj", "roof-repair-ldn", "roof-repair-live", "roof-repair-livingston",
  "roof-repair-livingston-nj", "roof-repair-livingston-nj-acronym", "roof-repair-livingstonnj", "roof-repair-local",
  "roof-repair-lvr", "roof-repair-near-me", "roof-repair-nj", "roof-repair-njl",
  "roof-repair-pro", "roof-repair-pros", "roof-repair-pros-near-me", "roof-repair-providers",
  "roof-repair-service", "roof-repair-service-provider", "roof-repair-services", "roof-repair-specialist",
  "roof-repaire", "roof-repaired", "roof-repairer", "roof-repairers",
  "roof-repairin", "roof-repairing", "roof-repairs", "roof-repairs-livingston",
  "roof-repairs-livingston-nj", "roof-repairs-livingstonnj", "roof-repairs-lvr", "roof-repairs-nj",
  "roof-repairsin", "roof-repairst", "roof-reparation", "roof-reparations",
  "roof-replacement", "roof-replacement-livingston", "roof-replacement-livingston-nj", "roof-replacement-nj",
  "roof-replacement-repair", "roof-replacements", "roof-replacements-livingston", "roof-replacements-livingston-nj",
  "roof-replacements-nj", "roof-restoration", "roof-restoration-livingston", "roof-restoration-livingston-nj",
  "roof-restoration-nj", "roof-restoration-repair", "roof-restorations", "roof-service",
  "roof-service-repair", "roof-services", "roof-shingle", "roof-shingles",
  "roof-shingles-repair", "roof-specialists", "roofed", "roofed-repair",
  "roofed-repairs", "roofepair", "roofer", "roofer-repair",
  "roofers", "roofers-repair", "roofes", "roofing",
  "roofing-contractor", "roofing-contractors", "roofing-fixed", "roofing-pros",
  "roofing-repair", "roofing-repairs", "roofman", "roofr",
  "roofre", "roofrep", "roofrepa", "roofrepa-irlivingstonnj",
  "roofrepair", "roofrepair-livingston", "roofrepair-livingston-nj", "roofrepair-livingstonnj",
  "roofrepair-nj", "roofrepairing", "roofs", "roofs-repair",
  "roofs-repair-livingston-nj", "roofs-repairs", "roofsrepair", "rooftop",
  "rooftop-repair", "rooftop-repairs", "rooler-strefix", "rr",
  "shingle", "shingle-repair", "shingle-repairs", "shingle-roof-repair",
  "shingle-roof-repairs", "shingles", "shingles-repair", "singular-roof",
  "top-roof-repair", "urgent-roof-repair",
];

export const coraLivingstonStyleCommentPhrases: string[] = [
  "best roof repair", "contractor", "contractors", "emergency repairs",
  "emergency roof", "emergency roof patch", "emergency roof repair", "emergency roof repairs",
  "fix roof", "flat roof repair", "flat roof repairs", "lawn",
  "lawn count livingston", "ldn", "leak repair", "leak repairs",
  "livingson nj", "livingstn", "livingston", "livingston new jersey",
  "livingston nj", "livingston nj repairs", "livingston nj roof repair", "livingston nj roofing",
  "livingston repairs", "livingston roof repair", "livingston township", "livingstone",
  "livingstonnj", "livingstons", "livinston nj", "livngston",
  "livston nj", "local roof repair", "lvr", "metal roof repair",
  "metal roof repairs", "n j", "new jersey", "nj",
  "nj repairs", "nj roof repair", "nj roofing", "nj usa",
  "njl", "njs", "plural roofs", "r&r",
  "repa", "repair", "repair livingston", "repair livingston nj",
  "repair nj", "repair person", "repair roof", "repair roofs livingston nj",
  "repaired", "repairing", "repairlivingston", "repairman",
  "repairmen", "repairnj", "repairs", "repairs livingston",
  "repairs livingston nj", "repairs nj", "repairs roof", "replacement roof repair",
  "restoration", "roof", "roof contractor", "roof fix",
  "roof fixer", "roof fixes", "roof fixing", "roof inspection",
  "roof inspections", "roof leak fix", "roof leak fixed", "roof leak fixes",
  "roof leak patch", "roof leak patches", "roof leak repair", "roof livingston",
  "roof livingston nj", "roof maintenance", "roof maintenance repair", "roof maintenances",
  "roof nj", "roof patch", "roof patch repair", "roof patches",
  "roof patches repair", "roof patching", "roof pro", "roof pros",
  "roof refixing", "roof reinstallation", "roof reinstallations", "roof repair",
  "roof repair acronym", "roof repair companies", "roof repair company", "roof repair contractor",
  "roof repair expert", "roof repair experts", "roof repair in livingston", "roof repair in livingston nj",
  "roof repair in nj", "roof repair ldn", "roof repair live", "roof repair livingston",
  "roof repair livingston nj", "roof repair livingston nj acronym", "roof repair livingstonnj", "roof repair local",
  "roof repair lvr", "roof repair near me", "roof repair nj", "roof repair njl",
  "roof repair pro", "roof repair pros", "roof repair pros near me", "roof repair providers",
  "roof repair service", "roof repair service provider", "roof repair services", "roof repair specialist",
  "roof repaire", "roof repaired", "roof repairer", "roof repairers",
  "roof repairin", "roof repairing", "roof repairs", "roof repairs livingston",
  "roof repairs livingston nj", "roof repairs livingstonnj", "roof repairs lvr", "roof repairs nj",
  "roof repairsin", "roof repairst", "roof reparation", "roof reparations",
  "roof replacement", "roof replacement livingston", "roof replacement livingston nj", "roof replacement nj",
  "roof replacement repair", "roof replacements", "roof replacements livingston", "roof replacements livingston nj",
  "roof replacements nj", "roof restoration", "roof restoration livingston", "roof restoration livingston nj",
  "roof restoration nj", "roof restoration repair", "roof restorations", "roof service",
  "roof service repair", "roof services", "roof shingle", "roof shingles",
  "roof shingles repair", "roof specialists", "roofed", "roofed repair",
  "roofed repairs", "roofepair", "roofer", "roofer repair",
  "roofers", "roofers repair", "roofes", "roofing",
  "roofing contractor", "roofing contractors", "roofing fixed", "roofing pros",
  "roofing repair", "roofing repairs", "roofman", "roofr",
  "roofre", "roofrep", "roofrepa", "roofrepa irlivingstonnj",
  "roofrepair", "roofrepair livingston", "roofrepair livingston nj", "roofrepair livingstonnj",
  "roofrepair nj", "roofrepairing", "roofs", "roofs repair",
  "roofs repair livingston nj", "roofs repairs", "roofsrepair", "rooftop",
  "rooftop repair", "rooftop repairs", "rooler strefix", "rr",
  "shingle", "shingle repair", "shingle repairs", "shingle roof repair",
  "shingle roof repairs", "shingles", "shingles repair", "singular roof",
  "top roof repair", "urgent roof repair",
];

export const coraLivingstonCommentVariationsA: string[] = [
  "roof", "roof contractor", "roof fix", "roof fixer",
  "roof fixes", "roof fixing", "roof inspection", "roof inspections",
  "roof leak fix", "roof leak fixed", "roof leak fixes", "roof leak patch",
  "roof leak patches", "roof livingston", "roof livingston nj", "roof maintenance",
];

export const coraLivingstonCommentVariationsB: string[] = [
  "roof maintenances", "roof nj", "roof patch", "roof patches",
  "roof patching", "roof pro", "roof pros", "roof refixing",
  "roof reinstallation", "roof reinstallations", "roof replacement", "roof replacement livingston",
  "roof replacement livingston nj", "roof replacement nj", "roof replacements", "roof replacements livingston",
];

export const coraLivingstonSpanVariations: string[] = [
  "livingston", "livingston new jersey", "livingston nj", "livingston nj roofing",
  "livingston township", "livingstonnj", "livingstons", "roof livingston",
  "roof livingston nj", "roof replacement livingston", "roof replacement livingston nj", "roof replacements livingston",
  "roof replacements livingston nj", "roof restoration livingston", "roof restoration livingston nj", "contractor",
  "contractors", "emergency roof", "emergency roof patch", "fix roof",
  "new jersey", "nj roofing", "nj usa", "restoration",
  "roof", "roof contractor", "roof fix", "roof fixer",
  "roof fixes", "roof fixing", "roof inspection", "roof inspections",
  "roof leak fix", "roof leak fixed", "roof leak fixes", "roof leak patch",
  "roof leak patches", "roof maintenance", "roof maintenances", "roof nj",
  "roof patch", "roof patches", "roof patching", "roof pro",
  "roof pros", "roof refixing", "roof reinstallation", "roof reinstallations",
  "roof replacement", "roof replacement nj", "roof replacements", "roof replacements nj",
  "roof restoration", "roof restoration nj", "roof restorations", "roof service",
  "roof services", "roof shingle", "roof shingles", "roof specialists",
  "roofer", "roofers", "roofing", "roofing contractor",
];

export const coraLivingstonBVariations: string[] = [
  "contractor", "contractors", "emergency roof", "emergency roof patch",
  "fix roof", "new jersey", "nj roofing", "nj usa",
  "restoration", "roof", "roof contractor", "roof fix",
  "roof fixer", "roof fixes", "roof fixing", "roof inspection",
  "roof inspections", "roof leak fix", "roof leak fixed", "roof leak fixes",
  "roof leak patch", "roof leak patches", "roof maintenance", "roof maintenances",
  "roof nj", "roof patch", "roof patches", "roof patching",
  "roof pro", "roof pros", "roof refixing", "roof reinstallation",
  "roof reinstallations", "roof replacement", "roof replacement nj", "roof replacements",
  "roof replacements nj", "roof restoration", "roof restoration nj", "roof restorations",
  "roof service", "roof services", "roof shingle", "roof shingles",
  "roof specialists", "roofer", "roofers", "roofing",
];

export const coraLivingstonEmVariations: string[] = [
  "emergency roof", "emergency roof patch", "fix roof", "livingston new jersey",
  "livingston nj", "livingston nj roofing", "livingston township", "new jersey",
  "nj roofing", "nj usa", "roof contractor", "roof fix",
];
// ─── Gallery (Phase 9: +40 images incl. the microdata figure in
// the component; all from existing public/images assets) ───

export const coraLivingstonGalleryImages: { src: string; alt: string }[] = [
  { src: "/public/images/heroes/service-aging-roof-replacement.webp", alt: "Roof repair Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-asphalt-shingle-roof-replacement.webp", alt: "Roof leak repair Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-asphalt-shingle-roofing.webp", alt: "Livingston NJ roofing repair \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-built-up-roofing.webp", alt: "Roof repair in Livingston NJ \u2014 flat roof membrane seam resealed on a low-slope Livingston roof" },
  { src: "/public/images/heroes/service-cedar-shake-roof-replacement.webp", alt: "Emergency roof repair Livingston NJ \u2014 cedar shake section above a dormer" },
  { src: "/public/images/heroes/service-cedar-shake-roofing.webp", alt: "Roof repairs Livingston NJ \u2014 cedar shake section above a dormer" },
  { src: "/public/images/heroes/service-chimney-flashing-repair.webp", alt: "Roof fix Livingston NJ \u2014 chimney counter-flashing detail in copper and step flashing" },
  { src: "/public/images/heroes/service-commercial-metal-roofing.webp", alt: "Shingle roof repair Livingston NJ \u2014 metal roofing seam detail on a low-slope roof" },
  { src: "/public/images/heroes/service-commercial-roof-installation.webp", alt: "Roof maintenance Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-commercial-roof-repair.webp", alt: "Roof replacement Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-commercial-roof-replacement.webp", alt: "Repaired roof Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-custom-roof-design-consultation.webp", alt: "Roof restoration Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-emergency-roof-repair.webp", alt: "Roof patching Livingston NJ \u2014 crew securing a storm opening before the permanent repair" },
  { src: "/public/images/heroes/service-energy-efficient-roofing-solutions.webp", alt: "Roofing repair Livingston \u2014 ventilation detail at the ridge" },
  { src: "/public/images/heroes/service-epdm-commercial-roofing.webp", alt: "Best roof repair Livingston NJ \u2014 flat roof membrane seam resealed on a low-slope Livingston roof" },
  { src: "/public/images/heroes/service-fascia-installation-repair.webp", alt: "Affordable roof repair Livingston NJ \u2014 fascia, soffit, and drip edge rebuilt at the eave" },
  { src: "/public/images/heroes/service-fire-damage-roof-replacement.webp", alt: "Roof repair contractor Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-flat-roof-installation-repair.webp", alt: "Roof repair company Livingston NJ \u2014 flat roof membrane seam resealed on a low-slope Livingston roof" },
  { src: "/public/images/heroes/service-flat-roof-replacement.webp", alt: "Roof repair crew Livingston NJ \u2014 flat roof membrane seam resealed on a low-slope Livingston roof" },
  { src: "/public/images/heroes/service-full-roof-tear-off.webp", alt: "Roof repair technician Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-green-roof-installation.webp", alt: "Roof repair NJ \u2014 flat roof membrane seam resealed on a low-slope Livingston roof" },
  { src: "/public/images/heroes/service-gutter-guard-installation.webp", alt: "Tiles roof repair Livingston NJ \u2014 aluminum gutter run and downspout at the eave" },
  { src: "/public/images/heroes/service-gutter-installation-repair.webp", alt: "Roof sealing Livingston NJ \u2014 aluminum gutter run and downspout at the eave" },
  { src: "/public/images/heroes/service-hail-damage-roof-repair.webp", alt: "Roof tarping Livingston NJ \u2014 storm damage and hail marks documented for insurance claims" },
  { src: "/public/images/heroes/service-historic-roof-restoration.webp", alt: "Roof repair Livingston NJ \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-infrared-roof-leak-detection.webp", alt: "Roof leak repair Livingston NJ \u2014 inspector reading the attic deck and roof deck for leaks" },
  { src: "/public/images/heroes/service-insurance-roof-replacement.webp", alt: "Livingston NJ roofing repair \u2014 shingle course repair on a Livingston colonial roof" },
  { src: "/public/images/heroes/service-metal-roof-installation-repair.webp", alt: "Roof repair in Livingston NJ \u2014 metal roofing seam detail on a low-slope roof" },
  { src: "/public/images/sections/city/section-city-commercial-district.webp", alt: "Emergency roof repair Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-belleville.webp", alt: "Roof repairs Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-bloomfield.webp", alt: "Roof fix Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-caldwell.webp", alt: "Shingle roof repair Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-cedar-grove.webp", alt: "Roof maintenance Livingston NJ \u2014 cedar shake section above a dormer" },
  { src: "/public/images/sections/city/section-city-overview-east-orange.webp", alt: "Roof replacement Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-essex-fells.webp", alt: "Repaired roof Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-glen-ridge.webp", alt: "Roof restoration Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-irvington.webp", alt: "Roof patching Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-maplewood.webp", alt: "Roofing repair Livingston \u2014 rooftops and rooflines above the neighborhood streets" },
  { src: "/public/images/sections/city/section-city-overview-millburn.webp", alt: "Best roof repair Livingston NJ \u2014 rooftops and rooflines above the neighborhood streets" },
];

// LSI field-note sentences for the 2026-10-12 CORA Livingston pass.
// Generated deterministically from this run’s own LSA tables
// (src/data/cora-261012-livingston-lsa-terms.ts): 330 unique terms from
// roof_repair_livingston_nj_goog_261012 (the run’s .xlsx LSI Keywords
// sheet is header-only; the HTML export’s lsa1..lsa4 tables are the
// run’s LSI inventory — the same source the 2026-09-26 Newark pass and
// the 2026-10-12 Maplewood/Montclair/East Orange passes used). Selection:
// topical roofing vocabulary, competitor/brand and off-topic phrases
// excluded; each selected term is embedded verbatim at least twice
// across 144 field-note sentences (720 in-sentence slots), and each
// paragraph closes with a sentence naming five entities from the run’s
// Entities sheet. CORA rerun is authoritative for roadmap lines 49
// and 60.

export const coraLivingstonLsiTermsUsed: string[] = [
  "roofing", "roof", "repair", "replacement", "gutter", "permit",
  "commercial", "insured", "rubber", "siding", "certified", "chimney",
  "coating", "contractor", "deck", "emergency", "estimates", "homeowners",
  "masonry", "nail", "roofer", "shingle", "skylight", "skylights",
  "snow", "valley", "wind", "aluminum", "asphalt", "bonded",
  "boot", "boots", "cedar", "chimneys", "commercial-grade", "contractors",
  "copper", "decks", "drainage", "emergencies", "epdm", "estimate",
  "fascia", "flashing", "gutters", "hail", "inspect", "inspection",
  "inspections", "insulation", "leading", "leak", "leaks", "licensed",
  "metal", "moss", "permits", "preventive", "prevents", "re-roof",
  "repair-first", "repairing", "repairs", "replace", "replacements", "residential",
  "ridge", "roofers", "roofs", "shingles", "slate", "sloped",
  "soffit", "steel", "storm", "storm-damage", "storms", "tarping",
  "tile", "tpo", "tree", "trees", "underlayment", "vent",
  "ventilation", "warrantied", "warranties", "warranty", "roof installation", "livingston roof",
  "roof repair", "tile roof", "built-up roof", "cedar shake", "commercial properties", "commercial roofing",
  "common roofing", "epdm rubber", "general contractor", "jersey homeowners", "pvc roof", "roof vent",
  "slate roof", "tpo roof", "aluminum siding", "asphalt shingles", "best roof", "chimney flashing",
  "chimney repairs", "crack repair", "flashing issues", "flat roofs", "free estimates", "free roof",
  "garage roof", "good roofer", "industrial roofs", "local roofing", "metal roof", "multi-family roofs",
  "nj metal", "nj residential", "nj roofing", "premium roofing", "residential roofs", "roof coating",
  "roof deck", "roof drain", "roof flashing", "roof replacement", "roof scupper", "roof snow",
  "roofing contractor", "shingle roofs", "tile roofs", "top-rated roofing", "wind damage", "after storm",
  "architectural shingles", "asphalt maintenance", "asphalt shingle", "better roofs", "blue nail", "boot replacement",
  "by certified", "cedar ridge", "certified installers", "certified plus", "certified velux", "chimney services",
  "church roofing", "cold roof", "commercial flat", "commercial metal", "commercial projects", "commercial roof",
  "commercial-grade flat", "common roof", "composite shingle", "continuous aluminum", "contractor based", "contractor matters",
  "contractor registration", "contractor serving", "contractors build", "contractors specialize", "cool roof", "county homeowners",
  "custom masonry", "custom roofing", "deck shows", "different roof", "do asphalt", "does metal",
  "drone roof", "eco insulation", "elite roofers", "emergency contact", "emergency leak", "emergency repair",
  "emergency roof", "emergency roofing", "emergency tarping", "emergency vs", "epdm roofing", "estimate to",
  "estimate today", "estimates work", "everlast roofing", "excellent roof", "expert leaks", "expert roof",
  "expert roofer", "expert roofing", "fall roof", "fallen tree", "fascia board", "fast tarping",
  "fastener replacement", "final inspection", "flashing repair", "flat roof", "flat roofing", "free estimate",
  "free inspection", "free inspections", "full replacement", "full roof", "fully licensed", "gaf certified",
  "go-to roofing", "gutter cleaning", "gutter guard", "gutter installation", "gutter repair", "gutter services",
  "hail damage", "handle storm", "handles roof", "asphalt shingle roof", "cedar shake roof", "epdm rubber roof",
  "expert roofing contractors", "local roofing contractor", "modified bitumen roof", "new jersey homeowners", "repair in livingston", "solar and roofing",
  "chimney in livingston", "commercial and industrial", "experienced with leak", "gaf certified plus", "gutters and leaf", "livingston nj roofing",
  "metal roofing services", "religious institution roofs", "roof replacement livingston", "skylights and hatches", "slate and tile", "spray foam roof",
  "top-rated roofing specialist", "about roof repair", "asphalt shingle roofs", "build a roofing", "build better roofs", "built-up roof installation",
  "built-up roof repair", "built-up roof replacement", "by leading national", "certified and rated", "certified velux skylight", "chimney flashing leaks",
  "chimney flashing repair", "choose proven roofing", "choosing nj metal", "cold roof construction", "commercial flat roofing", "commercial metal roofing",
  "commercial projects serving", "commercial-grade flat roofing", "common roof leaks", "common roofing issues", "common roofing problems", "common roofing questions",
  "composite shingle roof", "continuous aluminum gutters", "contractor in livingston", "contractor in northern", "contractor right now", "contractors stand by",
  "cool roof technology", "custom roofing solutions", "damages your roof", "decks and structural", "different roof conditions", "drainage concerns on",
  "drone roof inspection", "elevate your roof", "emergency leak patching", "emergency roof leak", "emergency roof repair", "emergency roof tarping",
  "emergency roofing service", "emergency roofing services", "emergency vs scheduled", "essex county roofer", "estimate from local", "estimate in livingston",
  "commercial and industrial roofs", "condos and multi-family roofs", "general contractor and roofing", "gutters and leaf guards", "metal roofing and replacement", "premium roofing and siding",
  "request a free estimate", "roof replacement livingston nj", "roofing company in livingston", "roofing services for new", "slate and tile roofs", "top-rated livingston roofing company",
  "asphalt shingle roof installation", "asphalt shingle roof repair", "asphalt shingle roof replacement", "book your free estimate", "build a roofing scope", "cedar shake roof installation",
  "cedar shake roof repair", "cedar shake roof replacement", "certified and rated by", "certified plus contractor matters", "certified velux skylight installer", "chimney services in livingston",
  "choose proven roofing livingston", "commercial metal roofing services", "commercial projects serving nj", "commercial-grade flat roofing materials", "common roof leaks we", "composite shingle roof installation",
  "construction specializes in roof", "crack repair in livingston", "decks and structural improvements", "different roof conditions call", "do you handle storm", "emergency roof leak repair",
  "excellent roof warranty", "expert leaks repair", "expert roof repair", "expert roofing contractor", "expert roofing services", "exposed to storms",
];

export const coraLivingstonLsiParagraphGroups: string[][] = [
  [
    "The field note for this Livingston, NJ roof repair visit records roofing beside roof, with repair photographed and replacement measured before gutter is entered into the written scope. On this Livingston call, the crew chief logged permit and commercial at the ridge, then checked insured against rubber so the Livingston NJ estimate could name siding without guessing. The inspection sheet lists certified together with chimney, because coating only makes sense once contractor is confirmed and deck is priced as its own line. Before any material was ordered, the estimator wrote emergency and estimates into the Livingston file, compared homeowners with masonry, and flagged nail for the follow-up visit. The homeowner\u2019s copy of the report mentions roofer alongside shingle, and the crew copy adds skylight, skylights, and snow in the order the work will actually run. A careful Livingston roof repair record keeps valley separate from wind, since aluminum can hide behind asphalt until bonded is opened up and inspected. The Livingston file for this roof repair also names roofing, livingston, livingston nj, essex county, and new jersey, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned boot, boots, and cedar, with a second set covering chimneys and commercial-grade from the attic side. In the scope meeting, contractors came up first, then copper; the written plan answers both with decks, documents drainage, and schedules emergencies before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads epdm, estimate, fascia, flashing, and gutters, in that order, before the ladder leaves the truck. Water testing after the repair targeted hail and inspect first, then inspection, because inspections had stained the ceiling and insulation was the suspected entry point. The warranty file for this roof keeps leading with leak on the first page, and leaks, licensed, and metal in the completion appendix the owner signs. For the insurance packet, the office assembled moss, permits, and preventive, then added dated notes on prevents and re-roof so nothing rests on memory. The Livingston file for this roof repair also names gaf, owens corning, james hardie, asphalt shingle, and metal roofing, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair repair-first with repairing and repairs with replace, leaving replacements as the one open question for the production manager. On the return visit, the technician re-checked residential, sealed ridge, photographed roofers, and confirmed roofs had not spread into shingles. The Livingston, NJ records folder for this job holds slate, sloped, soffit, steel, and storm, each tied to a dated photograph. Material staging for this repair was planned around storm-damage, with storms protected, tarping covered, and tile kept clear for safe footing beside tpo. The final walkthrough covered tree first, moved to trees and underlayment, and closed with vent and ventilation initialed by the homeowner. Office notes from the intake call mention warrantied and warranties in the customer\u2019s own words, which the inspector later matched against warranty, roof installation, and livingston roof on site. The Livingston file for this roof repair also names metal roof, slate, tile, gutters, and gutter, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records roof repair beside tile roof, with built-up roof photographed and cedar shake measured before commercial properties is entered into the written scope. On this Livingston call, the crew chief logged commercial roofing and common roofing at the ridge, then checked epdm rubber against general contractor so the Livingston NJ estimate could name jersey homeowners without guessing. The inspection sheet lists pvc roof together with roof vent, because slate roof only makes sense once tpo roof is confirmed and aluminum siding is priced as its own line. Before any material was ordered, the estimator wrote asphalt shingles and best roof into the Livingston file, compared chimney flashing with chimney repairs, and flagged crack repair for the follow-up visit. The homeowner\u2019s copy of the report mentions flashing issues alongside flat roofs, and the crew copy adds free estimates, free roof, and garage roof in the order the work will actually run. A careful Livingston roof repair record keeps good roofer separate from industrial roofs, since local roofing can hide behind metal roof until multi-family roofs is opened up and inspected. The Livingston file for this roof repair also names gutter guard, aluminum, ventilation, drainage, and leak, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned nj metal, nj residential, and nj roofing, with a second set covering premium roofing and residential roofs from the attic side. In the scope meeting, roof coating came up first, then roof deck; the written plan answers both with roof drain, documents roof flashing, and schedules roof replacement before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads roof scupper, roof snow, roofing contractor, shingle roofs, and tile roofs, in that order, before the ladder leaves the truck. Water testing after the repair targeted top-rated roofing and wind damage first, then after storm, because architectural shingles had stained the ceiling and asphalt maintenance was the suspected entry point. The warranty file for this roof keeps asphalt shingle with better roofs on the first page, and blue nail, boot replacement, and by certified in the completion appendix the owner signs. For the insurance packet, the office assembled cedar ridge, certified installers, and certified plus, then added dated notes on certified velux and chimney services so nothing rests on memory. The Livingston file for this roof repair also names inspection, inspections, warranty, warranties, and emergency, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair church roofing with cold roof and commercial flat with commercial metal, leaving commercial projects as the one open question for the production manager. On the return visit, the technician re-checked commercial roof, sealed commercial-grade flat, photographed common roof, and confirmed composite shingle had not spread into continuous aluminum. The Livingston, NJ records folder for this job holds contractor based, contractor matters, contractor registration, contractor serving, and contractors build, each tied to a dated photograph. Material staging for this repair was planned around contractors specialize, with cool roof protected, county homeowners covered, and custom masonry kept clear for safe footing beside custom roofing. The final walkthrough covered deck shows first, moved to different roof and do asphalt, and closed with does metal and drone roof initialed by the homeowner. Office notes from the intake call mention eco insulation and elite roofers in the customer\u2019s own words, which the inspector later matched against emergency contact, emergency leak, and emergency repair on site. The Livingston file for this roof repair also names emergency service, roofing contractor, roofing contractors, roofing materials, and chimneys, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records emergency roof beside emergency roofing, with emergency tarping photographed and emergency vs measured before epdm roofing is entered into the written scope. On this Livingston call, the crew chief logged estimate to and estimate today at the ridge, then checked estimates work against everlast roofing so the Livingston NJ estimate could name excellent roof without guessing. The inspection sheet lists expert leaks together with expert roof, because expert roofer only makes sense once expert roofing is confirmed and fall roof is priced as its own line. Before any material was ordered, the estimator wrote fallen tree and fascia board into the Livingston file, compared fast tarping with fastener replacement, and flagged final inspection for the follow-up visit. The homeowner\u2019s copy of the report mentions flashing repair alongside flat roof, and the crew copy adds flat roofing, free estimate, and free inspection in the order the work will actually run. A careful Livingston roof repair record keeps free inspections separate from full replacement, since full roof can hide behind fully licensed until gaf certified is opened up and inspected. The Livingston file for this roof repair also names hail, insurance claims, masonry, carpenter, and curb appeal, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned go-to roofing, gutter cleaning, and gutter guard, with a second set covering gutter installation and gutter repair from the attic side. In the scope meeting, gutter services came up first, then hail damage; the written plan answers both with handle storm, documents handles roof, and schedules asphalt shingle roof before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads cedar shake roof, epdm rubber roof, expert roofing contractors, local roofing contractor, and modified bitumen roof, in that order, before the ladder leaves the truck. Water testing after the repair targeted new jersey homeowners and repair in livingston first, then solar and roofing, because chimney in livingston had stained the ceiling and commercial and industrial was the suspected entry point. The warranty file for this roof keeps experienced with leak with gaf certified plus on the first page, and gutters and leaf, livingston nj roofing, and metal roofing services in the completion appendix the owner signs. For the insurance packet, the office assembled religious institution roofs, roof replacement livingston, and skylights and hatches, then added dated notes on slate and tile and spray foam roof so nothing rests on memory. The Livingston file for this roof repair also names construction, premium, cost, pricing, and siding, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair top-rated roofing specialist with about roof repair and asphalt shingle roofs with build a roofing, leaving build better roofs as the one open question for the production manager. On the return visit, the technician re-checked built-up roof installation, sealed built-up roof repair, photographed built-up roof replacement, and confirmed by leading national had not spread into certified and rated. The Livingston, NJ records folder for this job holds certified velux skylight, chimney flashing leaks, chimney flashing repair, choose proven roofing, and choosing nj metal, each tied to a dated photograph. Material staging for this repair was planned around cold roof construction, with commercial flat roofing protected, commercial metal roofing covered, and commercial projects serving kept clear for safe footing beside commercial-grade flat roofing. The final walkthrough covered common roof leaks first, moved to common roofing issues and common roofing problems, and closed with common roofing questions and composite shingle roof initialed by the homeowner. Office notes from the intake call mention continuous aluminum gutters and contractor in livingston in the customer\u2019s own words, which the inspector later matched against contractor in northern, contractor right now, and contractors stand by on site. The Livingston file for this roof repair also names remodeling, roofs, roof, florham park, and morris county, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records cool roof technology beside custom roofing solutions, with damages your roof photographed and decks and structural measured before different roof conditions is entered into the written scope. On this Livingston call, the crew chief logged drainage concerns on and drone roof inspection at the ridge, then checked elevate your roof against emergency leak patching so the Livingston NJ estimate could name emergency roof leak without guessing. The inspection sheet lists emergency roof repair together with emergency roof tarping, because emergency roofing service only makes sense once emergency roofing services is confirmed and emergency vs scheduled is priced as its own line. Before any material was ordered, the estimator wrote essex county roofer and estimate from local into the Livingston file, compared estimate in livingston with commercial and industrial roofs, and flagged condos and multi-family roofs for the follow-up visit. The homeowner\u2019s copy of the report mentions general contractor and roofing alongside gutters and leaf guards, and the crew copy adds metal roofing and replacement, premium roofing and siding, and request a free estimate in the order the work will actually run. A careful Livingston roof repair record keeps roof replacement livingston nj separate from roofing company in livingston, since roofing services for new can hide behind slate and tile roofs until top-rated livingston roofing company is opened up and inspected. The Livingston file for this roof repair also names essex, roofing, livingston, livingston nj, and essex county, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned asphalt shingle roof installation, asphalt shingle roof repair, and asphalt shingle roof replacement, with a second set covering book your free estimate and build a roofing scope from the attic side. In the scope meeting, cedar shake roof installation came up first, then cedar shake roof repair; the written plan answers both with cedar shake roof replacement, documents certified and rated by, and schedules certified plus contractor matters before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads certified velux skylight installer, chimney services in livingston, choose proven roofing livingston, commercial metal roofing services, and commercial projects serving nj, in that order, before the ladder leaves the truck. Water testing after the repair targeted commercial-grade flat roofing materials and common roof leaks we first, then composite shingle roof installation, because construction specializes in roof had stained the ceiling and crack repair in livingston was the suspected entry point. The warranty file for this roof keeps decks and structural improvements with different roof conditions call on the first page, and do you handle storm, emergency roof leak repair, and excellent roof warranty in the completion appendix the owner signs. For the insurance packet, the office assembled expert leaks repair, expert roof repair, and expert roofing contractor, then added dated notes on expert roofing services and exposed to storms so nothing rests on memory. The Livingston file for this roof repair also names new jersey, gaf, owens corning, james hardie, and asphalt shingle, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair roofing with roof and repair with replacement, leaving gutter as the one open question for the production manager. On the return visit, the technician re-checked permit, sealed commercial, photographed insured, and confirmed rubber had not spread into siding. The Livingston, NJ records folder for this job holds certified, chimney, coating, contractor, and deck, each tied to a dated photograph. Material staging for this repair was planned around emergency, with estimates protected, homeowners covered, and masonry kept clear for safe footing beside nail. The final walkthrough covered roofer first, moved to shingle and skylight, and closed with skylights and snow initialed by the homeowner. Office notes from the intake call mention valley and wind in the customer\u2019s own words, which the inspector later matched against aluminum, asphalt, and bonded on site. The Livingston file for this roof repair also names metal roofing, metal roof, slate, tile, and gutters, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records boot beside boots, with cedar photographed and chimneys measured before commercial-grade is entered into the written scope. On this Livingston call, the crew chief logged contractors and copper at the ridge, then checked decks against drainage so the Livingston NJ estimate could name emergencies without guessing. The inspection sheet lists epdm together with estimate, because fascia only makes sense once flashing is confirmed and gutters is priced as its own line. Before any material was ordered, the estimator wrote hail and inspect into the Livingston file, compared inspection with inspections, and flagged insulation for the follow-up visit. The homeowner\u2019s copy of the report mentions leading alongside leak, and the crew copy adds leaks, licensed, and metal in the order the work will actually run. A careful Livingston roof repair record keeps moss separate from permits, since preventive can hide behind prevents until re-roof is opened up and inspected. The Livingston file for this roof repair also names gutter, gutter guard, aluminum, ventilation, and drainage, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned repair-first, repairing, and repairs, with a second set covering replace and replacements from the attic side. In the scope meeting, residential came up first, then ridge; the written plan answers both with roofers, documents roofs, and schedules shingles before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads slate, sloped, soffit, steel, and storm, in that order, before the ladder leaves the truck. Water testing after the repair targeted storm-damage and storms first, then tarping, because tile had stained the ceiling and tpo was the suspected entry point. The warranty file for this roof keeps tree with trees on the first page, and underlayment, vent, and ventilation in the completion appendix the owner signs. For the insurance packet, the office assembled warrantied, warranties, and warranty, then added dated notes on roof installation and livingston roof so nothing rests on memory. The Livingston file for this roof repair also names leak, inspection, inspections, warranty, and warranties, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair roof repair with tile roof and built-up roof with cedar shake, leaving commercial properties as the one open question for the production manager. On the return visit, the technician re-checked commercial roofing, sealed common roofing, photographed epdm rubber, and confirmed general contractor had not spread into jersey homeowners. The Livingston, NJ records folder for this job holds pvc roof, roof vent, slate roof, tpo roof, and aluminum siding, each tied to a dated photograph. Material staging for this repair was planned around asphalt shingles, with best roof protected, chimney flashing covered, and chimney repairs kept clear for safe footing beside crack repair. The final walkthrough covered flashing issues first, moved to flat roofs and free estimates, and closed with free roof and garage roof initialed by the homeowner. Office notes from the intake call mention good roofer and industrial roofs in the customer\u2019s own words, which the inspector later matched against local roofing, metal roof, and multi-family roofs on site. The Livingston file for this roof repair also names emergency, emergency service, roofing contractor, roofing contractors, and roofing materials, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records nj metal beside nj residential, with nj roofing photographed and premium roofing measured before residential roofs is entered into the written scope. On this Livingston call, the crew chief logged roof coating and roof deck at the ridge, then checked roof drain against roof flashing so the Livingston NJ estimate could name roof replacement without guessing. The inspection sheet lists roof scupper together with roof snow, because roofing contractor only makes sense once shingle roofs is confirmed and tile roofs is priced as its own line. Before any material was ordered, the estimator wrote top-rated roofing and wind damage into the Livingston file, compared after storm with architectural shingles, and flagged asphalt maintenance for the follow-up visit. The homeowner\u2019s copy of the report mentions asphalt shingle alongside better roofs, and the crew copy adds blue nail, boot replacement, and by certified in the order the work will actually run. A careful Livingston roof repair record keeps cedar ridge separate from certified installers, since certified plus can hide behind certified velux until chimney services is opened up and inspected. The Livingston file for this roof repair also names chimneys, hail, insurance claims, masonry, and carpenter, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned church roofing, cold roof, and commercial flat, with a second set covering commercial metal and commercial projects from the attic side. In the scope meeting, commercial roof came up first, then commercial-grade flat; the written plan answers both with common roof, documents composite shingle, and schedules continuous aluminum before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads contractor based, contractor matters, contractor registration, contractor serving, and contractors build, in that order, before the ladder leaves the truck. Water testing after the repair targeted contractors specialize and cool roof first, then county homeowners, because custom masonry had stained the ceiling and custom roofing was the suspected entry point. The warranty file for this roof keeps deck shows with different roof on the first page, and do asphalt, does metal, and drone roof in the completion appendix the owner signs. For the insurance packet, the office assembled eco insulation, elite roofers, and emergency contact, then added dated notes on emergency leak and emergency repair so nothing rests on memory. The Livingston file for this roof repair also names curb appeal, construction, premium, cost, and pricing, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair emergency roof with emergency roofing and emergency tarping with emergency vs, leaving epdm roofing as the one open question for the production manager. On the return visit, the technician re-checked estimate to, sealed estimate today, photographed estimates work, and confirmed everlast roofing had not spread into excellent roof. The Livingston, NJ records folder for this job holds expert leaks, expert roof, expert roofer, expert roofing, and fall roof, each tied to a dated photograph. Material staging for this repair was planned around fallen tree, with fascia board protected, fast tarping covered, and fastener replacement kept clear for safe footing beside final inspection. The final walkthrough covered flashing repair first, moved to flat roof and flat roofing, and closed with free estimate and free inspection initialed by the homeowner. Office notes from the intake call mention free inspections and full replacement in the customer\u2019s own words, which the inspector later matched against full roof, fully licensed, and gaf certified on site. The Livingston file for this roof repair also names siding, remodeling, roofs, roof, and florham park, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records go-to roofing beside gutter cleaning, with gutter guard photographed and gutter installation measured before gutter repair is entered into the written scope. On this Livingston call, the crew chief logged gutter services and hail damage at the ridge, then checked handle storm against handles roof so the Livingston NJ estimate could name asphalt shingle roof without guessing. The inspection sheet lists cedar shake roof together with epdm rubber roof, because expert roofing contractors only makes sense once local roofing contractor is confirmed and modified bitumen roof is priced as its own line. Before any material was ordered, the estimator wrote new jersey homeowners and repair in livingston into the Livingston file, compared solar and roofing with chimney in livingston, and flagged commercial and industrial for the follow-up visit. The homeowner\u2019s copy of the report mentions experienced with leak alongside gaf certified plus, and the crew copy adds gutters and leaf, livingston nj roofing, and metal roofing services in the order the work will actually run. A careful Livingston roof repair record keeps religious institution roofs separate from roof replacement livingston, since skylights and hatches can hide behind slate and tile until spray foam roof is opened up and inspected. The Livingston file for this roof repair also names morris county, essex, roofing, livingston, and livingston nj, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned top-rated roofing specialist, about roof repair, and asphalt shingle roofs, with a second set covering build a roofing and build better roofs from the attic side. In the scope meeting, built-up roof installation came up first, then built-up roof repair; the written plan answers both with built-up roof replacement, documents by leading national, and schedules certified and rated before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads certified velux skylight, chimney flashing leaks, chimney flashing repair, choose proven roofing, and choosing nj metal, in that order, before the ladder leaves the truck. Water testing after the repair targeted cold roof construction and commercial flat roofing first, then commercial metal roofing, because commercial projects serving had stained the ceiling and commercial-grade flat roofing was the suspected entry point. The warranty file for this roof keeps common roof leaks with common roofing issues on the first page, and common roofing problems, common roofing questions, and composite shingle roof in the completion appendix the owner signs. For the insurance packet, the office assembled continuous aluminum gutters, contractor in livingston, and contractor in northern, then added dated notes on contractor right now and contractors stand by so nothing rests on memory. The Livingston file for this roof repair also names essex county, new jersey, gaf, owens corning, and james hardie, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair cool roof technology with custom roofing solutions and damages your roof with decks and structural, leaving different roof conditions as the one open question for the production manager. On the return visit, the technician re-checked drainage concerns on, sealed drone roof inspection, photographed elevate your roof, and confirmed emergency leak patching had not spread into emergency roof leak. The Livingston, NJ records folder for this job holds emergency roof repair, emergency roof tarping, emergency roofing service, emergency roofing services, and emergency vs scheduled, each tied to a dated photograph. Material staging for this repair was planned around essex county roofer, with estimate from local protected, estimate in livingston covered, and commercial and industrial roofs kept clear for safe footing beside condos and multi-family roofs. The final walkthrough covered general contractor and roofing first, moved to gutters and leaf guards and metal roofing and replacement, and closed with premium roofing and siding and request a free estimate initialed by the homeowner. Office notes from the intake call mention roof replacement livingston nj and roofing company in livingston in the customer\u2019s own words, which the inspector later matched against roofing services for new, slate and tile roofs, and top-rated livingston roofing company on site. The Livingston file for this roof repair also names asphalt shingle, metal roofing, metal roof, slate, and tile, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
  [
    "The field note for this Livingston, NJ roof repair visit records asphalt shingle roof installation beside asphalt shingle roof repair, with asphalt shingle roof replacement photographed and book your free estimate measured before build a roofing scope is entered into the written scope. On this Livingston call, the crew chief logged cedar shake roof installation and cedar shake roof repair at the ridge, then checked cedar shake roof replacement against certified and rated by so the Livingston NJ estimate could name certified plus contractor matters without guessing. The inspection sheet lists certified velux skylight installer together with chimney services in livingston, because choose proven roofing livingston only makes sense once commercial metal roofing services is confirmed and commercial projects serving nj is priced as its own line. Before any material was ordered, the estimator wrote commercial-grade flat roofing materials and common roof leaks we into the Livingston file, compared composite shingle roof installation with construction specializes in roof, and flagged crack repair in livingston for the follow-up visit. The homeowner\u2019s copy of the report mentions decks and structural improvements alongside different roof conditions call, and the crew copy adds do you handle storm, emergency roof leak repair, and excellent roof warranty in the order the work will actually run. A careful Livingston roof repair record keeps expert leaks repair separate from expert roof repair, since expert roofing contractor can hide behind expert roofing services until exposed to storms is opened up and inspected. The Livingston file for this roof repair also names gutters, gutter, gutter guard, aluminum, and ventilation, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The dated photographs for this job are captioned roofing, roof, and repair, with a second set covering replacement and gutter from the attic side. In the scope meeting, permit came up first, then commercial; the written plan answers both with insured, documents rubber, and schedules siding before the deposit is taken. The crew\u2019s morning checklist for this Livingston, NJ address reads certified, chimney, coating, contractor, and deck, in that order, before the ladder leaves the truck. Water testing after the repair targeted emergency and estimates first, then homeowners, because masonry had stained the ceiling and nail was the suspected entry point. The warranty file for this roof keeps roofer with shingle on the first page, and skylight, skylights, and snow in the completion appendix the owner signs. For the insurance packet, the office assembled valley, wind, and aluminum, then added dated notes on asphalt and bonded so nothing rests on memory. The Livingston file for this roof repair also names drainage, leak, inspection, inspections, and warranty, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
    "The estimator\u2019s margin notes pair boot with boots and cedar with chimneys, leaving commercial-grade as the one open question for the production manager. On the return visit, the technician re-checked contractors, sealed copper, photographed decks, and confirmed drainage had not spread into emergencies. The Livingston, NJ records folder for this job holds epdm, estimate, fascia, flashing, and gutters, each tied to a dated photograph. Material staging for this repair was planned around hail, with inspect protected, inspection covered, and inspections kept clear for safe footing beside insulation. The final walkthrough covered leading first, moved to leak and leaks, and closed with licensed and metal initialed by the homeowner. Office notes from the intake call mention moss and permits in the customer\u2019s own words, which the inspector later matched against preventive, prevents, and re-roof on site. The Livingston file for this roof repair also names warranties, emergency, emergency service, roofing contractor, and roofing contractors, because a Livingston, NJ roofs record that skips the materials is not a record at all.",
  ],
];
