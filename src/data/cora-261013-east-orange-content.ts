// CORA 2026-10-13 phrase-setup roadmap content for
// /roof-repair-east-orange-nj (keyword "roof repair east orange nj").
// Work order: the CLEAN 10-line list in
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-east-orange-2026-10-13.md
// as ruled in cora-artifact-verification-east-orange-2026-10-13.md,
// plus the Paul-approved figure-wrapping residual (adjusted from the
// +77 figure-variation artifact ask). Everything here is consumed by
// CoraRoadmap261012EastOrange.tsx, inside the existing collapsed
// supplemental block; the page H1 is untouched.

// ─── Phase 11 line 26: Variations in Style Tags (+24) ───────────────
// Cora's factor (CP465d) is "number of matches in web page style
// tags". These are 24 verbatim variation phrases for THIS run's
// phrase keyword, none of which appeared in the 2026-10-12 style
// block (verified against the prerendered page). The component
// stamps them into a second <style> element exactly the way the
// 2026-10-12 pass served its style-tag line: slugified forms as CSS
// custom properties plus the verbatim phrases in the style comment.
// Cora tracked 0 style-tag matches for this page in the phrase run
// despite the 2026-10-12 style block being present in the served
// HTML (verified on the prerender) — the rerun is the arbiter, as
// recorded in the change list.
export const coraEastOrangePhraseStylePhrases: string[] = [
  "east orange nj roof repairs",
  "east orange nj roofer",
  "east orange roof repairs nj",
  "east orange roofer",
  "nj roof repair in east orange",
  "repair a roof east orange nj",
  "repair my roof east orange nj",
  "repair the roof east orange nj",
  "repaired roofs in east orange nj",
  "repairing a roof east orange nj",
  "repairing roofs in east orange nj",
  "repairs to roofs east orange nj",
  "roof fix in east orange nj",
  "roof fixed east orange nj",
  "roof fixes in east orange nj",
  "roof leak repairs east orange nj",
  "roof repair company in east orange nj",
  "roof repair contractor in east orange nj",
  "roof repair east orange new jersey",
  "roof repair essex county nj",
  "roof repaired in east orange nj",
  "roof repairing in east orange nj",
  "roof repairs in east orange nj",
  "roofer east orange nj",
];

// ─── Figure wrapping (Paul-approved gray-zone residual) ─────────────
// Captions for the first 32 images of the 2026-10-12 gallery
// (coraEastOrangeGalleryImages, same order). Each caption is a
// genuine, human description of what that photograph shows — the
// detail, material, or moment in the frame — written from the job
// record the image belongs to. No keyword strings: per house rule,
// captions are descriptive copy, and the images' ALT text is
// unchanged. The component wraps exactly these 32 images in
// <figure> elements with these <figcaption> texts (tracked figure
// count 0 -> 32); no images are added.
export const coraEastOrangeFigureCaptions: string[] = [
  "Ice dam damage along a shaded eave, photographed before the repair was scoped.",
  "Meltwater staining under lifted shingles where an ice dam had formed at the eave.",
  "Granule loss and curled shingle edges on a slope that ices over every winter.",
  "A built-up roof edge where meltwater had backed up under the flashing.",
  "A cedar shake section above a dormer, split and weathered before replacement.",
  "New cedar shakes woven into the slope above the dormer.",
  "Chimney counter-flashing in copper, with step flashing woven into the shingle courses.",
  "A standing seam on a low-slope metal roof, checked for open laps and loose fasteners.",
  "Shingle courses at a shaded eave, lifted by repeated freeze and thaw cycles.",
  "The eave line after the damaged courses were stripped back to sound decking.",
  "Decking exposed at the eave during a tear-off, showing water staining from past ice dams.",
  "A consultation photograph of the shaded north slope where ice dams form each winter.",
  "The crew securing a storm opening with a tarp before the permanent repair begins.",
  "A ridge ventilation upgrade, opened up to correct attic moisture problems.",
  "An EPDM field seam near the eave, probed for separation during the inspection.",
  "Fascia, soffit, and drip edge rebuilt at the eave after the rotted sections came out.",
  "Heat- and water-damaged decking at the eave, documented for the job file.",
  "A flat roof membrane seam, cleaned and resealed once the surface was dry.",
  "The same flat roof after resealing, checked for ponding at the drain.",
  "A full tear-off in progress, with the old field removed down to the deck.",
  "The roof edge during a tear-off, where meltwater had rotted the first deck boards.",
  "Gutter guards fitted at a cleaned eave, with a new downspout carrying water clear of the fascia.",
  "An aluminum gutter run and downspout at the eave, re-pitched so the run drains fully.",
  "Hail-damaged asphalt shingles, chalked and marked for replacement during the storm survey.",
  "Restoration work on an older home in the city, matched to the original roof materials.",
  "A traced leak entry point at a valley, with wet decking exposed underneath.",
  "The damaged slope photographed for the insurance file before any material was disturbed.",
  "Panel seams and fasteners on a low-slope metal roof during a repair visit.",
  "A replaced metal roof section, seamed and sealed at the laps.",
  "A modified bitumen surface at the eave, checked for splits along the laps.",
  "A PVC membrane field near the roof edge, inspected for punctures and open seams.",
  "The re-roofing slope after new underlayment went down over the prepared deck.",
];

// ─── Photo-record lead-in headings ──────────────────────────────────
// Phase 1 lines 3 and 5 of the phrase sheet: Variation 'roofing' in
// H2 Tags (+1) and Variation 'roofing' in H3 Tags (+1). Each heading
// below carries the token 'roofing' exactly once; they introduce the
// captioned photo record inside the collapsed block. No other
// heading added in this pass carries the token.
export const coraEastOrangePhotoRecordH2 =
  "The East Orange Photo Record: Roofing Details, Captions, and Crew Photographs";

export const coraEastOrangePhotoRecordH3 =
  "How the Crew Captions a Roofing Photograph";

export const coraEastOrangePhotoRecordIntro =
  "Every photograph in the record below now carries a written caption naming the detail in the frame — the seam, the flashing, the damaged course, the finished repair — so the picture can be read without guessing. The captions are part of the job file: they say what the crew saw, what state the detail was in, and what was done to it, in the order the photographs were taken.";
