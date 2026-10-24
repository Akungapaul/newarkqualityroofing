// CORA 2026-10-13 PHRASE pass — /roof-repair-essex-fells-nj
// Source: roof_repair_essex_fells_nj_goog_261013_C_US_L_EN_M5P1AS_GMW.xlsx
// (keyword "roof repair essex fells nj", Localize: Essex Fells, 10
// searches, OUR OWN page as the tracked target, appending as result
// ~101). This is the page's FIRST Cora pass — there is no supplemental
// block on the page yet; the component that consumes this file creates
// it, following the deployed per-city pattern (Nutley 2026-10-13 most
// recently). The roadmap carried 72 lines. Paul's ruling 2026-10-14:
// implement the 16 clean verification lines PLUS the 3 competitor-
// backed residues (Sentences +52, Variations in Sentences +48, P Tags
// +4); the rest of the R1 sibling-set complex (28 lines, goals set by
// our own roof-repair-and-installation-essex-fells-nj page) is
// DROPPED, not chased. Full accounting in
// files/cora-phrase-implementation-essex-fells-2026-10-13.md.
//
// What this pass does (19 lines):
//  - Title tag rewritten (Search Result Link Text Length +22; the
//    tracked value IS the live title). The rewrite also carries the
//    title entity/variation adds: Entities in Title Tag +6 delivered
//    in full (4 -> 10 entity occurrences under the validated counting)
//    and Variations in Title Tag +1. Paul's call 2026-10-14: the first
//    construction reached only 9 of 10 entities at exactly 49 chars;
//    the final title runs 53 chars ("..., NJ" location sign-off
//    appended) to deliver the full +6 cleanly, so the length line
//    delivers +26 rather than the exact +22 — disclosed in the
//    change list.
//  - A meta keywords tag is CREATED (the page served none; Cora's
//    tracked "1" was a phantom read) with 10 verbatim keyword forms
//    from this run's own keyword set (Number of Meta Keywords +9).
//  - The supplemental block adds exactly 16 headings (13 -> 29): six
//    H2s, eight entity-dense H3s, and the page's first two H5s, whose
//    text opens with verbatim variation forms (Leading Variations in
//    H5 Tags +2). H3s carry Entities in H3 Tags +11 and Variations in
//    H3 Tags +2; the word 'roofing' appears in the new headings
//    (Variation 'roofing' in H1-H6 Tags +1, delivered in H2/H3 per the
//    standing treatment — the H1 is never touched).
//  - A 32-image photo record (12 -> 44 images, all with genuine ALT
//    text) drawn from the site's existing heroes pool carries
//    Variations in ALT Text +13.
//  - One <style> element in the block carries 24 verbatim variation
//    phrases from this run's list (Variations in Style Tags +24; same
//    mechanism as the East Orange / Roseland / Irvington / Nutley
//    passes).
//  - The block's copy carries the three residues: +52 sentences, +48
//    variation occurrences inside sentences, +4 P tags (all three ride
//    the same material and overshoot; measured deltas are in the
//    change list), plus Number of Distinct Entities +12 via the
//    entity-dense copy and field notes.
//  - A block-level BreadcrumbList names its crumbs with variation
//    forms (Variations in Search Result Display URL +1, SERP-rendered).
//  - LSI terms from THIS run (the report's own Entities and variation
//    data; the workbook's LSI Keywords sheet is header-only, same as
//    the earlier passes) are written into natural sentences in the
//    field-notes section, per Paul's confirmed standing practice for
//    the new cities. Term coverage only: the +562/+264 LSI keyword
//    count pair is a software constant (identical across 20
//    consecutive reports) and is NOT chased.
//
// Standing caveats, same as the prior phrase passes: locally measured
// counts use this run's own variation/entity lists with whole-phrase
// matching on the prerendered page (entity terms deduplicated by
// normalized form, which reproduces Cora's tracked title/H2/H3 entity
// values exactly: 4 / 29 / 5); Cora's variation counting differs from
// whole-phrase occurrence counting in ways the rerun arbitrates.
// Nothing here invents a rating (AggregateRating stays OFF), no social
// profile URLs are added (pending Paul's verified URLs), and the
// template JSON-LD graph is untouched (the roadmap's Has JSON-LD line
// is a Cora detection discrepancy, not a page defect).

export const coraEssexFellsTitle =
  'Roof Repair Essex Fells, NJ — Tile Roof, Ice Dams, NJ';

// Meta keywords: the page served NO meta keywords tag before this pass
// (Cora tracked a phantom 1). All 10 forms are verbatim from this
// run's own keyword set.
export const coraEssexFellsMetaKeywords: string[] = [
  'roof repair essex fells nj',
  'roof repair',
  'roofing',
  'roof repair service',
  'roof leak repair',
  'roof repair contractor essex fells nj',
  'emergency roof repair',
  'roof replacement essex fells nj',
  'affordable roof repair',
  'roof repair company essex fells nj',
];

export const coraEssexFellsBlockSummary =
  'Roof Repair in Essex Fells, NJ — Extended Guide, Photo Record, and Field Notes';

export const coraEssexFellsBlockIntro =
  'Roof Repair Essex Fells, NJ is the complete record behind this page: the services, materials, seasonal problems, and inspection process behind the summary above, written for Essex Fells homeowners. The borough\u2019s housing stock runs older and larger than most of Essex County, with steep slate roofs, cedar shakes, clay tile, and long tree-covered lots, and the repair work follows that stock. Everything in this record is expandable and starts collapsed, so the page above stays the short version.';

export interface CoraEssexFellsSub {
  h3: string;
  p: string;
}

export interface CoraEssexFellsSection {
  h2: string;
  intro: string;
  subs: CoraEssexFellsSub[];
}

export const coraEssexFellsSections: CoraEssexFellsSection[] = [
  {
    h2: 'Roof Repair Services in Essex Fells, NJ: Leak Repair, Slate and Tile Roofing, Flashing, Gutters, and Chimney Work in Essex County',
    intro:
      'Most roof repair calls in Essex Fells start with water: a ceiling stain, a drip at a chimney, shingles on the lawn after a storm. The repair work itself is usually focused, a section of failed flashing, a run of cracked slate, a leaking valley, or a gutter line that has pulled away from the fascia. This section of the record covers the core services, the leak work first and the specialty slate and tile work after it.',
    subs: [
      {
        h3: 'Roof Leak Repair in Essex Fells, NJ: Tracing Stains, Drips, and Hidden Water Damage',
        p: 'A leak rarely enters where the stain appears, because water travels along rafters, decking, and underlayment before it drops. A proper roof leak repair in Essex Fells starts with tracing: the attic is checked for wet decking and daylight at penetrations, and the roof above the stain is inspected course by course. Once the entry point is found, the repair replaces the failed material, whether that is cracked flashing, a lifted shingle, a split slate, or a dried-out vent boot, and the surrounding courses are resealed so the leak path stays closed.',
      },
      {
        h3: 'Slate Roof and Tile Roof Repair in Essex Fells: Matching Historic Roofing Materials',
        p: 'Essex Fells still carries many original slate roofs and a share of clay tile roofs, and both materials repair differently from asphalt. A slate roof repair replaces individual broken slates with matching stone, cut and punched on site and set with copper or stainless fasteners, so the roof keeps its pattern and its weight balance. Tile roof repair follows the same discipline: cracked clay tiles are swapped for matching profiles, the underlayment beneath them is checked, and broken pieces are never simply glued and left.',
      },
    ],
  },
  {
    h2: 'Roofing Materials on Essex Fells Homes: Slate, Cedar Shingle, Asphalt Shingle, Clay Tile, and Flat Roof Systems',
    intro:
      'Material decides how a repair is done, how long it lasts, and what it costs. Essex Fells homes carry a wider mix of roofing materials than most Essex County towns: natural slate and cedar on the older houses, architectural asphalt shingle on most of the rest, clay tile on a few, and flat roof sections over additions, garages, and porches. The two headings below cover the shingle and shake work and the flat, skylight, and chimney work.',
    subs: [
      {
        h3: 'Asphalt Shingle and Cedar Shake Roofing Repairs in Essex Fells, NJ',
        p: 'Asphalt shingle repairs in Essex Fells usually mean replacing wind-lifted or curling shingles, resealing exposed fasteners, and checking the courses around valleys and vents where water concentrates. Cedar shake roofing asks for a different hand: split or rotted shakes are removed individually, the felt interlay is renewed, and new shakes are woven in so the roof sheds water the way it was built to. Both materials fail early when ventilation is poor, so a shingle or shake repair here includes a look at attic airflow, not just the surface.',
      },
      {
        h3: 'Flat Roof, Skylight, and Chimney Flashing Repairs on Essex Fells Homes',
        p: 'Flat roof sections on Essex Fells additions and garages fail at seams and edges first, and the repair is a membrane patch, a re-welded seam, or new edge metal, depending on the system. Skylight repairs are usually flashing repairs: the kit around the skylight is rebuilt, the surrounding shingles are reset, and the leak that looked like a failed window closes. Chimney flashing is the most common repair of the three, because the counterflashing set into the masonry loosens as mortar ages, and Essex Fells chimneys are tall, wide, and fully exposed to the weather.',
      },
    ],
  },
  {
    h2: 'Storm, Hail, Ice Dams, and Snowfall: Seasonal Roof Repair in Essex Fells, New Jersey',
    intro:
      'Essex Fells sits under a heavy tree canopy, and the seasons work the roofs hard: summer storms drop limbs, autumn fills gutters with leaves, and winter snowfall loads the steep pitches and feeds ice dams at the eaves. Seasonal roof repair here is mostly prevention handled on time, plus fast emergency work when the weather wins. The headings below cover storm response and the winter ice and gutter work.',
    subs: [
      {
        h3: 'Emergency Roof Repair After Storms and Fallen Tree Damage in Essex Fells',
        p: 'When a tree or limb comes through a roof in Essex Fells, the first job is drying the house in: the opening is tarped or boarded, debris is cleared, and the damaged decking is made weather-tight the same visit. Emergency roof repair then moves to the permanent work, replacing decking, underlayment, and the roofing material in kind, slate for slate and shingle for shingle. Hail damage is slower to show: bruised shingles and dented flashing are documented during the inspection, and the repair list is written before small hail marks turn into leaks.',
      },
      {
        h3: 'Ice Dams, Gutter Guards, and Winter Roof Upkeep in Essex Fells, NJ',
        p: 'Ice dams form on Essex Fells roofs when heat escaping into the attic melts snowfall that refreezes at the cold eave, and the backed-up water finds the shingle laps. The durable fixes are ventilation, insulation at the attic floor, and ice-and-water shield carried far enough up the roof, with heat cable reserved for the eaves that history says will freeze. Gutter guards earn their keep in this borough: with the tree canopy overhead, open gutters clog by November, overflow against the fascia, and feed the same ice problem from the outside.',
      },
    ],
  },
  {
    h2: 'Roof Inspection, Repair Estimates, and the Repair Process for Essex Fells Homeowners in Essex County, NJ',
    intro:
      'A repair should never start with a guess. The process on this page is inspection first, a written estimate second, and the repair itself third, with photographs at each step so the homeowner sees what the roofer sees. This closing section covers what the inspection checks, how the estimate is built, and how to judge the roofing contractor doing the work.',
    subs: [
      {
        h3: 'Roof Inspection and Repair Estimates in Essex Fells, New Jersey',
        p: 'A roof inspection in Essex Fells covers the full system: the roofing material course by course, flashing at every chimney, valley, and wall, the gutters and downspouts, and the attic side for ventilation, moisture, and daylight. The repair estimate that follows is itemized, separating the repair the roof needs now from the upkeep it will need within a few years, so nothing is bundled or padded. Estimates name the materials to be used, including the shingle or slate line and the manufacturer, with GAF, CertainTeed, and Owens Corning shingles the common choices in this area.',
      },
      {
        h3: 'Choosing a Roofing Contractor or Roofer in Essex Fells, NJ',
        p: 'Essex Fells homeowners should ask any roofing contractor three things: whether the company carries its own license and insurance, whether the estimate is written and itemized, and whether the repair will be photographed before, during, and after. A roofer who works the borough regularly also knows its stock, which slate quarries match the older roofs, which streets carry clay tile, and how the tree canopy changes the maintenance cycle. Local knowledge does not replace paperwork, but on a hundred-year-old roof it prevents expensive surprises.',
      },
    ],
  },
];

export const coraEssexFellsPhotoHeading =
  'Essex Fells Roof Repair Photo Record: Slate Roofs, Shingle Roofs, Chimneys, Skylights, and Gutters';

export const coraEssexFellsPhotoIntro =
  'The photographs below come from the site\u2019s existing service library and show the kinds of roofs, materials, and repair situations this page covers: slate and tile work, shingle and cedar repairs, flashing, gutters, skylights, flat roof sections, and storm and ice work. Each photograph carries a full description in its alternative text for Essex Fells readers using assistive technology.';

export interface CoraEssexFellsH5Note {
  h5: string;
  p: string;
}

// The page's first H5 subheadings. Each one OPENS with a verbatim
// variation form from this run's keyword set ('roof repair essex
// fells nj' and 'emergency roof repair'), which is what the roadmap's
// Leading Variations in H5 Tags line counts.
export const coraEssexFellsH5Notes: CoraEssexFellsH5Note[] = [
  {
    h5: 'Roof Repair Essex Fells NJ Homeowner Notes',
    p: 'Homeowners in the borough tend to call about the same three things: a slate that has slipped after a freeze, a stain under a chimney, and gutters that overflow every autumn. All three are small repairs when they are caught in the season they start, and all three become decking and plaster work when they wait a year.',
  },
  {
    h5: 'Emergency Roof Repair Calls in Essex Fells, NJ',
    p: 'After-hours calls in Essex Fells are almost always storm calls: a limb through a shingle field, a lifted flat roof seam in high wind, or a fast drip over a stairwell. The answering priority is a dry house the same night, with the permanent repair scheduled once the damage has been photographed and measured.',
  },
];

export interface CoraEssexFellsGalleryImage {
  src: string;
  alt: string;
}

// 32 photographs from the site's existing heroes pool (no external or
// generated media). ALT texts are genuine descriptions written to
// carry this run's variation forms (Variations in ALT Text +13).
export const coraEssexFellsGalleryImages: CoraEssexFellsGalleryImage[] = [
  { src: '/images/heroes/service-slate-roof-installation-repair.webp', alt: 'Slate roof repair in Essex Fells NJ, a roofer setting replacement slates during a roof repair essex fells nj call' },
  { src: '/images/heroes/service-slate-roof-replacement.webp', alt: 'Slate roof section opened for roof repair essex fells nj work on a historic Essex Fells home' },
  { src: '/images/heroes/service-tile-roof-installation-repair.webp', alt: 'Tile roof repair in Essex Fells, clay tiles lifted for underlayment work during roof repair in Essex Fells NJ' },
  { src: '/images/heroes/service-tile-roof-replacement.webp', alt: 'Clay tile roof repair essex fells nj project with replacement tiles staged on the roof' },
  { src: '/images/heroes/service-historic-roof-restoration.webp', alt: 'Historic roof restoration and roof repair in Essex Fells NJ on an older slate and shingle roof' },
  { src: '/images/heroes/service-asphalt-shingle-roofing.webp', alt: 'Asphalt shingle roofing and roof repair essex fells nj work, new shingles woven into an existing roof' },
  { src: '/images/heroes/service-asphalt-shingle-roof-replacement.webp', alt: 'Shingle roof repair in Essex Fells NJ, damaged asphalt shingles removed down to the decking' },
  { src: '/images/heroes/service-cedar-shake-roofing.webp', alt: 'Cedar shake roofing repair in Essex Fells, split shakes replaced during a roof repair essex fells nj visit' },
  { src: '/images/heroes/service-wood-shake-roofing.webp', alt: 'Wood shake roof repair essex fells nj service, a roofer weaving new shakes into the roof field' },
  { src: '/images/heroes/service-chimney-flashing-repair.webp', alt: 'Chimney flashing repair in Essex Fells NJ, new counterflashing set into the masonry during roof repair' },
  { src: '/images/heroes/service-roof-flashing-installation-repair.webp', alt: 'Roof flashing installation and roof repair in Essex Fells, step flashing rebuilt along a sidewall' },
  { src: '/images/heroes/service-roof-leak-repair.webp', alt: 'Roof leak repair essex fells nj work, the entry point of a leak opened and dried before patching' },
  { src: '/images/heroes/service-infrared-roof-leak-detection.webp', alt: 'Infrared roof leak detection during a roof repair essex fells nj inspection, moisture mapped under the shingles' },
  { src: '/images/heroes/service-emergency-roof-repair.webp', alt: 'Emergency roof repair in Essex Fells NJ, a tarp secured over storm damage the same night' },
  { src: '/images/heroes/service-storm-damage-roof-repair.webp', alt: 'Storm damage roof repair essex fells nj service after a fallen tree limb crossed the roof' },
  { src: '/images/heroes/service-wind-damage-roof-repair.webp', alt: 'Wind damage roof repair in Essex Fells, lifted and missing shingles marked for replacement' },
  { src: '/images/heroes/service-hail-damage-roof-repair.webp', alt: 'Hail damage roof repair essex fells nj inspection, bruised shingles chalked across the slope' },
  { src: '/images/heroes/service-roof-ice-dam-prevention.webp', alt: 'Roof ice dam prevention in Essex Fells NJ, ice and water shield carried up a steep roof before winter' },
  { src: '/images/heroes/service-gutter-installation-repair.webp', alt: 'Gutter installation and repair in Essex Fells during a roof repair essex fells nj project' },
  { src: '/images/heroes/service-gutter-guard-installation.webp', alt: 'Gutter guard installation in Essex Fells NJ to keep the tree canopy leaves out of the gutters' },
  { src: '/images/heroes/service-skylight-installation-repair.webp', alt: 'Skylight installation and roof repair in Essex Fells, flashing kit rebuilt around an existing skylight' },
  { src: '/images/heroes/service-flat-roof-installation-repair.webp', alt: 'Flat roof repair essex fells nj work on an addition roof, membrane seam re-welded and sealed' },
  { src: '/images/heroes/service-flat-roof-replacement.webp', alt: 'Flat roof section prepared for roof repair in Essex Fells NJ, old membrane removed to the deck' },
  { src: '/images/heroes/service-roof-inspection.webp', alt: 'Roof inspection for roof repair essex fells nj, a roofer checking flashing and shingle courses' },
  { src: '/images/heroes/service-roof-thermal-imaging-inspections.webp', alt: 'Thermal imaging roof inspection in Essex Fells during a roof repair essex fells nj assessment' },
  { src: '/images/heroes/service-roof-maintenance-programs.webp', alt: 'Roof maintenance and upkeep in Essex Fells NJ, gutters cleared and flashing resealed for the season' },
  { src: '/images/heroes/service-roof-repair.webp', alt: 'Roof repair essex fells nj crew at work on a residential shingle roof in the borough' },
  { src: '/images/heroes/service-roof-deck-repair-replacement.webp', alt: 'Roof deck repair in Essex Fells, rotted decking replaced during a roof repair essex fells nj job' },
  { src: '/images/heroes/service-roof-vent-installation-repair.webp', alt: 'Roof vent installation and repair in Essex Fells NJ to correct attic ventilation and ice dams' },
  { src: '/images/heroes/service-fascia-installation-repair.webp', alt: 'Fascia repair in Essex Fells during roof repair essex fells nj work along the gutter line' },
  { src: '/images/heroes/service-soffit-installation-repair.webp', alt: 'Soffit repair and roof repair in Essex Fells NJ, vented soffit panels replaced at the eaves' },
  { src: '/images/heroes/service-metal-roof-installation-repair.webp', alt: 'Metal roof repair essex fells nj service on a standing seam section over a porch roof' },
];

// Variations in Style Tags +24: 24 verbatim variation phrases from
// this run's keyword set, carried in the block's <style> element as
// CSS custom properties plus a listing comment (the East Orange /
// Roseland / Irvington mechanism). None of the 24 appears anywhere in
// the page's pre-pass HTML. (Standing caveat, shared with the earlier
// phrase passes: Cora tracked 0 style-tag matches for this page in
// the 2026-10-13 run; whether a rerun credits any of this is Cora's
// call.)
export const coraEssexFellsStylePhrases: string[] = [
  'roof repair essex fells nj roofing',
  'roof repair essex fells nj service',
  'roof repair essex fells nj roofers',
  'roof repair service essex fells nj',
  'roof repairs essex fells nj',
  'roof replacement essex fells nj',
  'roof restoration essex fells nj',
  'roof maintenance essex fells nj',
  'roofing contractor essex fells nj',
  'roof repair contractor essex fells nj',
  'roof repair company essex fells nj',
  'essex fells nj roof repair',
  'essex fells nj roof repairs',
  'essex fells nj roofers',
  'fells nj roof repair',
  'fells nj roof repairs',
  'fells nj roofers',
  'repair roof essex fells nj',
  'roofs repair essex fells nj',
  'roofs repairs essex fells nj',
  'roof repair inspections',
  'roof repair estimates',
  'roof repair materials',
  'best roof repair essex fells nj',
];

export const coraEssexFellsFieldNotesHeading =
  'Essex Fells Roof Repair Field Notes: Terms From the Work Itself';

export const coraEssexFellsFieldNotesIntro =
  'The field notes below collect the working vocabulary of this page: the materials, assemblies, weather problems, and service terms that Essex Fells roof work actually uses, each one in a plain sentence. They are the terms this run\u2019s own report surfaced from the pages Google ranks for roof repair in the borough, kept here as the page\u2019s reference list.';

export const coraEssexFellsFieldNotesSummary =
  'Show the field-notes term list for roof repair essex fells nj';

export interface CoraEssexFellsFieldNote {
  term: string;
  note: string;
}

// LSI / entity terms from THIS run's own report (the workbook's
// Entities sheet and keyword set; its LSI Keywords sheet is
// header-only, same as the earlier passes), each written into natural
// sentences. Contamination and competitor terms from the sheet
// (directory and remodeling-company vocabulary) are excluded; the
// topical roofing subset is what the page uses. This material is also
// the vehicle for the Distinct Entities, Sentences, and Sentence
// Variations residues.
export const coraEssexFellsFieldNotes: CoraEssexFellsFieldNote[] = [
  { term: 'Slate', note: 'Natural slate is the signature roofing material of older Essex Fells homes, and a slate roof that is maintained slate by slate can outlast the house around it. Broken or slipped slates are replaced individually, never nailed through the face.' },
  { term: 'Tile roof', note: 'A clay tile roof in Essex Fells is repaired by lifting the surrounding tiles, renewing the underlayment, and resetting sound tiles with matching replacements for the cracked ones. The tile itself is rarely the leak; the felt beneath it is.' },
  { term: 'Ice dams', note: 'Ice dams are the borough\u2019s recurring winter repair, forming where warm attic air melts snow that refreezes at the eave. Ventilation, insulation, and ice-and-water shield are the standing answers.' },
  { term: 'Gutter guards', note: 'Under the Essex Fells tree canopy, gutter guards are close to standard equipment, keeping oak and maple leaves out of the gutter runs. Guards do not end gutter maintenance, but they stretch it from every autumn to every few years.' },
  { term: 'Flat roof', note: 'Most Essex Fells flat roof work is on additions, garages, and porch roofs tied into steep main roofs. The repair points are the seams, the edges, and the tie-in where the flat section meets the slope.' },
  { term: 'Roofing materials', note: 'Roofing materials in the borough range from Vermont slate and cedar shakes to architectural asphalt shingles and standing seam metal. A repair estimate should always name the material and its manufacturer, not just the color.' },
  { term: 'Flashing', note: 'Flashing is the metal work that keeps water out where the roof meets something else: chimneys, walls, valleys, skylights, and vents. More Essex Fells leaks trace to failed flashing than to failed roofing material.' },
  { term: 'Skylight', note: 'A leaking skylight in Essex Fells is usually a flashing failure around a sound window, and the repair rebuilds the flashing kit rather than replacing the unit. Skylights near the end of their seal life are flagged during the same inspection.' },
  { term: 'Chimney', note: 'Essex Fells chimneys are large, and their flashing systems have two parts: step flashing woven into the shingles and counterflashing set into the masonry. When the mortar joints soften, the counterflashing loosens and the chimney leaks at the ceiling below.' },
  { term: 'Shingle', note: 'A single missing shingle is a small repair; a pattern of curling, cupping, or shedding granules is a roof telling you its age. Essex Fells shingle repairs include checking the surrounding field, because one failed shingle usually has neighbors close behind it.' },
  { term: 'Leak', note: 'A roof leak is a symptom, not a diagnosis, and the repair starts by finding where the water actually enters. Stains in Essex Fells homes often sit rooms away from the entry point, especially under slate, where water travels far along the deck.' },
  { term: 'Hail', note: 'Hail damage in Essex County is usually bruising rather than breakage: shingle mats cracked under the granules and soft metals dented. A post-storm inspection documents hail marks while they are still readable, which matters for both repair and insurance.' },
  { term: 'Snowfall', note: 'Heavy snowfall loads the steep Essex Fells roofs unevenly, piling drifts against chimneys and in valleys. The repair season that follows a hard winter is mostly flashing, ice damage at the eaves, and gutters pulled by sliding snow.' },
  { term: 'Tree', note: 'The tree canopy is part of Essex Fells\u2019 character and its biggest roof hazard, dropping limbs in storms and shade that keeps north slopes damp. Moss, algae, and slow drying are the quiet costs, and they shorten shingle life on shaded roofs.' },
  { term: 'Gutter', note: 'A gutter that overflows is not a gutter problem alone; it wets the fascia, the soffit, and the foundation planting below. Essex Fells gutter repairs include re-pitching runs that have sagged and resizing downspouts that were undersized for the roof area.' },
  { term: 'Inspection', note: 'A roof inspection in the borough means the roof surface, every flashing point, the gutters, and the attic side, photographed as it goes. The written findings separate repairs the roof needs now from upkeep it will need soon.' },
  { term: 'Roofer', note: 'A roofer who knows Essex Fells knows which roofs are original slate, which streets carry tile, and how the canopy changes the maintenance cycle. That local knowledge shows up in the estimate, in matched materials and realistic timelines.' },
  { term: 'Upkeep', note: 'Roof upkeep in Essex Fells is seasonal: gutters cleared after leaf fall, flashing checked after winter, and shaded slopes watched for moss. Small upkeep done on schedule is what keeps repair bills small on older roofs.' },
  { term: 'Fasteners', note: 'The right fasteners matter more than they look: copper or stainless nails in slate, ring-shank nails in decking, and corrosion-resistant screws in metal work. Wrong fasteners stain slate, back out of shakes, and fail quietly inside finished roofs.' },
  { term: 'Masonry', note: 'Chimney masonry and roof work meet at the flashing line, and each trade affects the other. Repointing a chimney without renewing its counterflashing, or flashing a chimney whose mortar is soft, leaves half the job undone.' },
  { term: 'Renovation', note: 'Many Essex Fells roof repairs land in the middle of a larger renovation, when additions tie new roofs into old ones. The tie-in is the leak-prone detail, and it deserves the same flashing discipline as the main roof.' },
  { term: 'Essex County', note: 'Essex Fells sits in the western edge of Essex County, and its roof work follows the county\u2019s older housing pattern: slate in the Fells and Short Hills, shingles almost everywhere, and flat sections on additions. Neighboring towns in the run\u2019s own data include Livingston, along with Morris County and Passaic County communities just over the county lines.' },
];
