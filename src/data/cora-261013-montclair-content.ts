// CORA 2026-10-13 PHRASE roadmap (roof_repair_montclair_nj_goog_261013,
// keyword "roof repair montclair nj") supplemental content for
// /roof-repair-montclair-nj — the CLEAN 18-line list after the artifact
// verification (cora-artifact-verification-montclair-2026-10-13.md).
// Line-by-line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-montclair-2026-10-13.md
// Change list:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-implementation-montclair-2026-10-13.md
//
// Lines served from this file (rendered by CoraRoadmap261012Montclair
// inside the existing collapsed supplemental block; the title / meta
// edits live in cora-261012-montclair-content.ts; the JSON-LD,
// microdata, and BreadcrumbList edits live in the component; the OG
// site-name edit lives in src/app/[slug]/page.tsx):
//   4  Variation 'roof repaired' in the HTML Tag +1 — exactly one
//      occurrence, in the references paragraph below ("any roof
//      repaired under warranty"); the phrase appears nowhere else in
//      this pass's additions.
//  10  Has Link to www.google.com +1 — the Google Maps directions link
//      below (host www.google.com), rendered with the block's existing
//      external-link pattern (rel="nofollow external").
//  11  Number of External Links +2 — the Maps link plus the Owens
//      Corning manufacturer reference below; exactly two new external
//      anchors page-wide.
//  13  Variations in OpenGraph Site Name +1 (adjusted from Cora's +2) —
//      coraMontclairPhraseOgSiteName below: "Newark Quality Roofing —
//      Roof Repair" adds exactly one variation occurrence ('roof
//      repair') over the stock site name.
//  18  Uses JSON-LD hasMap +1 — the business node's hasMap in the
//      component carries coraMontclairPhraseMapsUrl, the same URL as
//      the visible directions link. FLAGGED: the site has no canonical
//      Google Business Profile maps URL on record (config sameAs is
//      empty, D-01), so this is a Google Maps query URL for the
//      business name + city — the same query form CityMapNap builds —
//      not a claimed GBP listing URL.

// OG site name for this slug only (line 13). Every other page keeps
// SEO_CONFIG.SITE_NAME ("Newark Quality Roofing").
export const coraMontclairPhraseOgSiteName = 'Newark Quality Roofing — Roof Repair';

// Google Maps query URL for the business (lines 10 and 18).
export const coraMontclairPhraseMapsUrl =
  'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';

export const coraMontclairPhraseDirectionsH3 =
  'Finding the Office: Directions and Manufacturer References';

export const coraMontclairPhraseDirectionsIntro =
  'The Montclair route runs out of the Newark office, roughly twenty minutes down Bloomfield Avenue in clear traffic. Homeowners who want to see where the trucks roll out from — or who are dropping off a slate sample for matching — can pull the office up on the map:';

export const coraMontclairPhraseReferencesParagraph =
  'The same visit usually settles the material question. The shingle lines named on this page are documented by their manufacturers, and the office keeps the current specification sheets on file for any roof repaired under warranty:';

export const coraMontclairPhraseExternalLinks = [
  {
    href: coraMontclairPhraseMapsUrl,
    label: 'Newark Quality Roofing on Google Maps — get directions to the Newark office at www.google.com',
  },
  {
    href: 'https://www.owenscorning.com',
    label: 'Owens Corning — asphalt shingle system documentation (the Duration series named in the field notes above)',
  },
];
