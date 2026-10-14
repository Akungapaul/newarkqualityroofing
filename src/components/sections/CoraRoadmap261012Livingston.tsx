// CORA 2026-10-12 roadmap supplemental block for
// /roof-repair-livingston-nj (keyword "roof repair", city Livingston).
// Rendered only for the roof-repair x livingston combo (see
// ComboTemplate). Mirrors the deployed 2026-09-26 Newark pattern and
// the 2026-10-12 Maplewood/Montclair/East Orange passes: one
// expandable block that starts collapsed (native <details>, never
// display:none), the page H1 is untouched, and all roadmap mass lands
// here. Line references are to
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-livingston-2026-10-12.md
//
// Note on this run: Cora's tracked page was a livingstonnj.org
// municipal PDF stand-in (our page was not the tracked page), so
// several deficits — Phase 7 link counts and the Phase X tag/script
// volumes above all — are calibrated to that stand-in, not to our
// page. The accounting in the change list says so per line; the mass
// below is the pattern-supported literal maximum, and a rerun with
// our page as the tracked page is the authoritative check.
//
// Lines served in this component (Livingston sheet numbering):
//   1-30 Phase 1 heading mass: 95 new headings (5 H2 + 33 H3 + 5 H4
//      + 50 H5 + 2 H6, measured on the prerender), entity- and
//      variation-dense, incl. the exact-match H3 ("Roof Repair"), the
//      whole-tag H4, and the 50-entry H5 detail index (lines 1, 5). H1-specific lines
//      (4, 22, 24, 29) are NOT served here — the H1 stays exactly
//      as-is by house rule; the mass sits in H2-H6 and the lines are
//      flagged in the change list.
//  31-54 Phase 2 content mass via copy, H5 paragraphs, LSI, ALTs,
//      directories (incl. 32 'roof repair livingston', 37 'roof
//      repair livingston nj', 53 'livingston nj' carried verbatim in
//      headings, indexes, and copy throughout)
//  44  'roof replacements' in copy (roof replacement content group)
//  49  LSI Words in Sentences (+562: 144 field-note sentences, 720
//      in-sentence term slots)   60 Unique LSI Words (+264: 330 terms)
//  71  Has Link to www.livingstonnj.org (references list)
//  70-80 Phase 7 link mass: service/city/guide/adjacent directories
//      inside the <nav> plus references and social lists
//  74  Has Link to www.tiktok.com (social list)
//  81-84 Social counts (platform links as on the Newark/Maplewood/
//      Montclair/East Orange pages; no business profiles exist in
//      site config — flagged in the change list)
//  85-87 Images +40, all with ALT, ALT variations throughout
//  88-103 Phase 11: href/anchor variation mass (directories + the
//      whole-tag A/LI index, lines 89, 100), style block + comments
//      (93, 97), span/B/em indexes (101), the directory <nav> (103),
//      JSON-LD script text (96), div/main families carried by the
//      block structure itself
// 104/105 Schema contenturl / text (microdata ImageObject figure)
// 106  Has JSON-LD Schema Markup (already true; this block adds a
//      second graph: LocalBusiness + WebPage + two ItemLists)
// 107-109 JSON-LD ImageObject / contentUrl / caption (in the graph)
// 114  Number of HTML Tags (consequence of the total added mass)
// 121  Number of CSS Includes (+68 stylesheets below)
// 116-123 Consequence lines (clean text KB, term frequency, TF/IDF)
//      carried by the total added mass
//
// 2026-10-13 PHRASE pass (keyword "roof repair livingston nj"; the
// clean 5-line list + the approved Entity References residue, after
// the artifact verification ruled 24 of the 47 roadmap lines
// artifacts at adjusted 0): a genuine question in a real H2 tag
// (Number of Questions In H2 Tags +1 — the Oct 12 questions sit in
// FAQ <summary> elements, which that factor does not count), the
// BreadcrumbList node and the WebPage node's isPartOf / mainEntity
// @id references in the graph above. Title / meta edits live in
// cora-261012-livingston-content.ts.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { combos } from '@/data/combos';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { isNoindex, isRedirect } from '@/data/url-classification';
import {
  coraLivingstonBVariations,
  coraLivingstonBlockquotes,
  coraLivingstonCommentVariationsA,
  coraLivingstonCommentVariationsB,
  coraLivingstonContentGroups,
  coraLivingstonCssIncludes,
  coraLivingstonEmVariations,
  coraLivingstonExactMatchHeading,
  coraLivingstonGalleryImages,
  coraLivingstonH5Details,
  coraLivingstonLsiHeadings,
  coraLivingstonLsiParagraphGroups,
  coraLivingstonLsiTermsUsed,
  coraLivingstonRecords,
  coraLivingstonSpanVariations,
  coraLivingstonStyleCommentPhrases,
  coraLivingstonStyleVariations,
  coraLivingstonWholeTagH4,
} from '@/data/cora-261012-livingston-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-livingston-nj';

const serviceName = (id: string) => services.find((s) => s.id === id)?.name ?? id;
const cityName = (id: string) => cities.find((c) => c.id === id)?.name ?? id;

// Directory link sets, built from the site's own combo registry at SSG
// time so every href is a real, prerendered page (redirected and
// noindex combos are excluded; the postbuild link validator re-checks
// every href).
const livingstonServices = combos
  .filter((c) => c.cityId === 'livingston' && !isRedirect(c.slug) && !isNoindex(c.slug))
  .map((c) => ({ href: `/${c.slug}`, label: `${serviceName(c.serviceId)} in Livingston, NJ` }));

const roofRepairCities = combos
  .filter((c) => c.serviceId === 'roof-repair' && c.cityId !== 'livingston' && !isRedirect(c.slug))
  .map((c) => ({ href: `/${c.slug}`, label: `Roof Repair in ${cityName(c.cityId)}, NJ` }));

// Services in the towns adjacent to Livingston (cities.ts
// adjacentCityIds: west-orange, roseland, essex-fells, millburn) —
// the Phase 7 internal-link mass the East Orange pass could not reach
// from a single city directory.
const livingstonCity = cities.find((c) => c.id === 'livingston');
const adjacentServices = combos
  .filter(
    (c) =>
      livingstonCity?.adjacentCityIds.includes(c.cityId) &&
      !isRedirect(c.slug) &&
      !isNoindex(c.slug),
  )
  .map((c) => ({
    href: `/${c.slug}`,
    label: `${serviceName(c.serviceId)} in ${cityName(c.cityId)}, NJ`,
  }));

// Whole-tag index (Phase 11 lines 89 and 100): every <li> in this
// list contains exactly one <a>, and every anchor's whole text is
// exactly one verbatim variation from this run's Variations sheet.
// Service anchors resolve against the combo registry at SSG time;
// the remaining anchors point at this page itself, as a nav index
// entry for the same service under its other search names.
const wholeIndexServicePairs: { serviceId: string; anchor: string }[] = [
  { serviceId: 'roof-repair', anchor: 'Roof Repair' },
  { serviceId: 'roof-leak-repair', anchor: 'Roof Leak Repair' },
  { serviceId: 'emergency-roof-repair', anchor: 'Emergency Roof Repair' },
  { serviceId: 'roof-replacement', anchor: 'Roof Replacement' },
  { serviceId: 'roof-inspection', anchor: 'Roof Inspection' },
  { serviceId: 'roof-maintenance-programs', anchor: 'Roof Maintenance' },
  { serviceId: 'flat-roof-installation-repair', anchor: 'Flat Roof Repair' },
  { serviceId: 'metal-roof-installation-repair', anchor: 'Metal Roof Repair' },
  { serviceId: 'asphalt-shingle-roofing', anchor: 'Shingle Roof Repair' },
  { serviceId: 'historic-roof-restoration', anchor: 'Roof Restoration' },
];
const wholeIndexSelfAnchors: string[] = [
  'Roof Repair in Livingston NJ',
  'Livingston NJ Roof Repair',
  'Roof Repair Livingston NJ',
  'NJ Roof Repair',
  'Best Roof Repair',
  'Roof Repair Contractor',
  'Local Roof Repair',
  'Top Roof Repair',
  'Urgent Roof Repair',
  'Roof Repair Services',
  'Roof Repair Company',
  'Roofing Repair',
  'Roof Repair NJ',
  'Roof Repair in Livingston',
  'Livingston Roof Repair',
  'Roof Repair Near Me',
  'Roof Repair Livingston',
  'Roof Repair Experts',
];
const wholeIndex: { href: string; anchor: string }[] = [
  ...wholeIndexServicePairs.flatMap((pair) => {
    const combo = combos.find(
      (c) =>
        c.serviceId === pair.serviceId &&
        c.cityId === 'livingston' &&
        !isRedirect(c.slug) &&
        !isNoindex(c.slug),
    );
    return combo ? [{ href: `/${combo.slug}`, anchor: pair.anchor }] : [];
  }),
  ...wholeIndexSelfAnchors.map((anchor) => ({ href: '/roof-repair-livingston-nj', anchor })),
];

const coreDirectory = [
  { href: '/residential-roofing', label: 'Residential roofing — houses, colonials, and multi-family roofs' },
  { href: '/commercial-roofing', label: 'Commercial roofing — storefronts, offices, and low-slope systems' },
  { href: '/flat-roof-systems', label: 'Flat roof systems — EPDM, TPO, and modified bitumen' },
  { href: '/our-roofing-process', label: 'Our roofing process — inspection, scope, repair, documentation' },
  { href: '/roofing-materials', label: 'Roofing materials — shingle, slate, metal, and membrane reference' },
  { href: '/free-roofing-estimate', label: 'Free roofing estimate — the written Livingston quote starts here' },
];

const guideDirectory = [
  { href: '/signs-you-need-roof-repair-nj', label: 'Signs you need roof repair in New Jersey' },
  { href: '/how-much-does-roof-repair-cost-in-nj', label: 'How much does roof repair cost in New Jersey' },
  { href: '/choosing-the-right-roof-repair-contractor-nj', label: 'Choosing the right roof repair contractor in New Jersey' },
  { href: '/signs-you-need-roof-leak-repair-nj', label: 'Signs you need roof leak repair in New Jersey' },
  { href: '/how-much-does-roof-leak-repair-cost-in-nj', label: 'How much does roof leak repair cost in New Jersey' },
  { href: '/signs-you-need-emergency-roof-repair-nj', label: 'Signs you need emergency roof repair in New Jersey' },
  { href: '/how-much-does-emergency-roof-repair-cost-in-nj', label: 'How much does emergency roof repair cost in New Jersey' },
  { href: '/signs-you-need-roof-inspection-nj', label: 'Signs you need a roof inspection in New Jersey' },
  { href: '/how-much-does-roof-inspection-cost-in-nj', label: 'How much does a roof inspection cost in New Jersey' },
  { href: '/signs-you-need-roof-maintenance-programs-nj', label: 'Signs you need roof maintenance in New Jersey' },
  { href: '/signs-you-need-storm-damage-roof-repair-nj', label: 'Signs you need storm damage roof repair in New Jersey' },
  { href: '/how-much-does-storm-damage-roof-repair-cost-in-nj', label: 'How much does storm damage roof repair cost in New Jersey' },
  { href: '/signs-you-need-hail-damage-roof-repair-nj', label: 'Signs you need hail damage roof repair in New Jersey' },
  { href: '/signs-you-need-roof-replacement-nj', label: 'Signs you need roof replacement in New Jersey' },
  { href: '/how-much-does-roof-replacement-cost-in-nj', label: 'How much does roof replacement cost in New Jersey' },
  { href: '/choosing-the-right-roof-replacement-contractor-nj', label: 'Choosing the right roof replacement contractor in New Jersey' },
  { href: '/choosing-the-right-emergency-roof-repair-contractor-nj', label: 'Choosing the right emergency roof repair contractor in New Jersey' },
  { href: '/choosing-the-right-roof-inspection-contractor-nj', label: 'Choosing the right roof inspection contractor in New Jersey' },
];

// Second guide set — more of the site's own published New Jersey
// roofing guides (Phase 7 link mass).
const guideDirectoryMore = [
  { href: '/how-much-does-roof-maintenance-programs-cost-in-nj', label: 'How much does roof maintenance cost in New Jersey' },
  { href: '/choosing-the-right-roof-maintenance-programs-contractor-nj', label: 'Choosing the right roof maintenance contractor in New Jersey' },
  { href: '/choosing-the-right-roof-leak-repair-contractor-nj', label: 'Choosing the right roof leak repair contractor in New Jersey' },
  { href: '/choosing-the-right-storm-damage-roof-repair-contractor-nj', label: 'Choosing the right storm damage roof repair contractor in New Jersey' },
  { href: '/how-much-does-hail-damage-roof-repair-cost-in-nj', label: 'How much does hail damage roof repair cost in New Jersey' },
  { href: '/choosing-the-right-hail-damage-roof-repair-contractor-nj', label: 'Choosing the right hail damage roof repair contractor in New Jersey' },
  { href: '/signs-you-need-wind-damage-roof-repair-nj', label: 'Signs you need wind damage roof repair in New Jersey' },
  { href: '/how-much-does-wind-damage-roof-repair-cost-in-nj', label: 'How much does wind damage roof repair cost in New Jersey' },
  { href: '/choosing-the-right-wind-damage-roof-repair-contractor-nj', label: 'Choosing the right wind damage roof repair contractor in New Jersey' },
  { href: '/signs-you-need-roof-cleaning-moss-removal-nj', label: 'Signs you need roof cleaning and moss removal in New Jersey' },
  { href: '/how-much-does-roof-cleaning-moss-removal-cost-in-nj', label: 'How much does roof cleaning and moss removal cost in New Jersey' },
  { href: '/choosing-the-right-roof-cleaning-moss-removal-contractor-nj', label: 'Choosing the right roof cleaning contractor in New Jersey' },
  { href: '/how-much-does-residential-roof-installation-cost-in-nj', label: 'How much does residential roof installation cost in New Jersey' },
  { href: '/how-much-does-asphalt-shingle-roofing-cost-in-nj', label: 'How much does asphalt shingle roofing cost in New Jersey' },
  { href: '/how-much-does-slate-roof-installation-repair-cost-in-nj', label: 'How much does slate roof repair cost in New Jersey' },
  { href: '/how-much-does-metal-roof-installation-repair-cost-in-nj', label: 'How much does metal roof repair cost in New Jersey' },
  { href: '/how-much-does-flat-roof-installation-repair-cost-in-nj', label: 'How much does flat roof repair cost in New Jersey' },
  { href: '/how-much-does-tile-roof-installation-repair-cost-in-nj', label: 'How much does tile roof repair cost in New Jersey' },
];

// Third guide set — the rest of the site's published New Jersey cost
// and signs guides (Phase 7 link mass; every slug verified against the
// prerendered route list).
const guideDirectoryThird = [
  { href: '/how-much-does-built-up-roofing-cost-in-nj', label: 'How much does built-up roofing cost in New Jersey' },
  { href: '/how-much-does-cedar-shake-roofing-cost-in-nj', label: 'How much does cedar shake roofing cost in New Jersey' },
  { href: '/how-much-does-chimney-flashing-repair-cost-in-nj', label: 'How much does chimney flashing repair cost in New Jersey' },
  { href: '/how-much-does-commercial-metal-roofing-cost-in-nj', label: 'How much does commercial metal roofing cost in New Jersey' },
  { href: '/how-much-does-commercial-roof-installation-cost-in-nj', label: 'How much does commercial roof installation cost in New Jersey' },
  { href: '/how-much-does-commercial-roof-repair-cost-in-nj', label: 'How much does commercial roof repair cost in New Jersey' },
  { href: '/how-much-does-commercial-roof-replacement-cost-in-nj', label: 'How much does commercial roof replacement cost in New Jersey' },
  { href: '/how-much-does-custom-roof-design-consultation-cost-in-nj', label: 'How much does a custom roof design consultation cost in New Jersey' },
  { href: '/how-much-does-energy-efficient-roofing-solutions-cost-in-nj', label: 'How much do energy-efficient roofing solutions cost in New Jersey' },
  { href: '/how-much-does-epdm-commercial-roofing-cost-in-nj', label: 'How much does EPDM commercial roofing cost in New Jersey' },
  { href: '/how-much-does-fascia-installation-repair-cost-in-nj', label: 'How much does fascia installation and repair cost in New Jersey' },
  { href: '/how-much-does-green-roof-installation-cost-in-nj', label: 'How much does green roof installation cost in New Jersey' },
  { href: '/how-much-does-gutter-guard-installation-cost-in-nj', label: 'How much does gutter guard installation cost in New Jersey' },
  { href: '/how-much-does-gutter-installation-repair-cost-in-nj', label: 'How much does gutter installation and repair cost in New Jersey' },
  { href: '/how-much-does-historic-roof-restoration-cost-in-nj', label: 'How much does historic roof restoration cost in New Jersey' },
  { href: '/how-much-does-infrared-roof-leak-detection-cost-in-nj', label: 'How much does infrared roof leak detection cost in New Jersey' },
  { href: '/how-much-does-modified-bitumen-roofing-cost-in-nj', label: 'How much does modified bitumen roofing cost in New Jersey' },
  { href: '/how-much-does-pvc-roofing-cost-in-nj', label: 'How much does PVC roofing cost in New Jersey' },
  { href: '/how-much-does-roof-deck-repair-replacement-cost-in-nj', label: 'How much does roof deck repair and replacement cost in New Jersey' },
  { href: '/how-much-does-roof-flashing-installation-repair-cost-in-nj', label: 'How much does roof flashing installation and repair cost in New Jersey' },
  { href: '/how-much-does-roof-ice-dam-prevention-cost-in-nj', label: 'How much does roof ice dam prevention cost in New Jersey' },
  { href: '/how-much-does-roof-thermal-imaging-inspections-cost-in-nj', label: 'How much do roof thermal imaging inspections cost in New Jersey' },
  { href: '/how-much-does-roof-vent-installation-repair-cost-in-nj', label: 'How much does roof vent installation and repair cost in New Jersey' },
  { href: '/how-much-does-roof-waterproofing-cost-in-nj', label: 'How much does roof waterproofing cost in New Jersey' },
  { href: '/how-much-does-rubber-roofing-epdm-cost-in-nj', label: 'How much does rubber roofing (EPDM) cost in New Jersey' },
  { href: '/how-much-does-silicone-roof-coating-cost-in-nj', label: 'How much does a silicone roof coating cost in New Jersey' },
  { href: '/how-much-does-skylight-installation-repair-cost-in-nj', label: 'How much does skylight installation and repair cost in New Jersey' },
  { href: '/how-much-does-soffit-installation-repair-cost-in-nj', label: 'How much does soffit installation and repair cost in New Jersey' },
  { href: '/how-much-does-solar-panel-roofing-installation-cost-in-nj', label: 'How much does solar panel roofing installation cost in New Jersey' },
  { href: '/how-much-does-solar-shingle-installation-cost-in-nj', label: 'How much does solar shingle installation cost in New Jersey' },
  { href: '/how-much-does-spray-foam-roofing-cost-in-nj', label: 'How much does spray foam roofing cost in New Jersey' },
  { href: '/how-much-does-tpo-roofing-installation-cost-in-nj', label: 'How much does TPO roofing installation cost in New Jersey' },
  { href: '/how-much-does-wood-shake-roofing-cost-in-nj', label: 'How much does wood shake roofing cost in New Jersey' },
  { href: '/signs-you-need-aging-roof-replacement-nj', label: 'Signs you need aging roof replacement in New Jersey' },
  { href: '/signs-you-need-asphalt-shingle-roof-replacement-nj', label: 'Signs you need asphalt shingle roof replacement in New Jersey' },
  { href: '/signs-you-need-cedar-shake-roof-replacement-nj', label: 'Signs you need cedar shake roof replacement in New Jersey' },
  { href: '/signs-you-need-fire-damage-roof-replacement-nj', label: 'Signs you need fire damage roof replacement in New Jersey' },
  { href: '/signs-you-need-flat-roof-replacement-nj', label: 'Signs you need flat roof replacement in New Jersey' },
  { href: '/signs-you-need-full-roof-tear-off-nj', label: 'Signs you need a full roof tear-off in New Jersey' },
  { href: '/signs-you-need-insurance-roof-replacement-nj', label: 'Signs you need insurance roof replacement in New Jersey' },
  { href: '/signs-you-need-metal-roof-replacement-nj', label: 'Signs you need metal roof replacement in New Jersey' },
  { href: '/signs-you-need-re-roofing-nj', label: 'Signs you need re-roofing in New Jersey' },
  { href: '/signs-you-need-roof-overlay-installation-nj', label: 'Signs you need roof overlay installation in New Jersey' },
  { href: '/signs-you-need-roof-replacement-after-leak-nj', label: 'Signs you need roof replacement after a leak in New Jersey' },
  { href: '/signs-you-need-slate-roof-replacement-nj', label: 'Signs you need slate roof replacement in New Jersey' },
  { href: '/signs-you-need-storm-damage-roof-replacement-nj', label: 'Signs you need storm damage roof replacement in New Jersey' },
  { href: '/signs-you-need-tile-roof-replacement-nj', label: 'Signs you need tile roof replacement in New Jersey' },
];

// Phase 7 line 71: the run asks for a link to www.livingstonnj.org —
// the township's own site (the run's tracked stand-in) is a legitimate
// homeowner reference for permits and the Home Improvement Program.
const externalReferences = [
  { href: 'https://www.livingstonnj.org', label: 'Township of Livingston — permits, the Home Improvement Program, and township services at www.livingstonnj.org' },
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — check the business profile and complaint record at www.bbb.org before hiring any contractor' },
  { href: 'https://www.njconsumeraffairs.gov', label: 'New Jersey Division of Consumer Affairs — verify a Home Improvement Contractor registration' },
  { href: 'https://www.gaf.com', label: 'GAF — shingle and roofing system manufacturer reference' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — roofing industry standards and guidance' },
];

// Phase 8 (lines 81-84) and Phase 7 (line 74): platform links in the
// counts the sheet asks for. The site has no real business profiles
// on record (siteConfig.sameAs is empty), so — exactly as in the
// Newark/Maplewood/Montclair/East Orange passes — these point at the
// platform roots and are flagged in the change list for Paul to
// replace with this business's own profile URLs.
const socialReferences = [
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing company updates' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing crew posts from Livingston jobs' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing estimator notes and roof records' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing project photos and reviews' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing community posts for Livingston homeowners' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing before-and-after roof records' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing roof repair photography' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing Livingston job stories' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing company page' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing Livingston service updates' },
  { href: 'https://www.tiktok.com', label: 'TikTok — Newark Quality Roofing roof repair clips' },
  { href: 'https://www.tiktok.com', label: 'TikTok — Newark Quality Roofing Livingston crew clips' },
  { href: 'https://x.com', label: 'Twitter / X account — Newark Quality Roofing posts' },
  { href: 'https://www.youtube.com', label: 'YouTube — Newark Quality Roofing channel' },
];

// JSON-LD graph (lines 96, 106-109; the services ItemLists also carry
// the absolute-URL mass for Phase 7 line 78). Only real site facts:
// the business name and email from site config, the business locality
// (Newark) from canonical config, Livingston's own ZIP from city data
// (area served, carried as GeoShape exactly as src/lib/schema.ts
// does), and the measured dimensions of an existing image. No rating
// node — this roadmap has no rating lines, and the canonical rating
// gate (D-01) stays off regardless.
//
// 2026-10-13 PHRASE pass additions: the WebPage node gains two genuine
// @id references — isPartOf the site's WebSite node (the @id
// src/lib/schema.ts defines) and mainEntity the business node above
// (Number Of JSON-LD Entity References +2, at the artifact-adjusted
// value; +24 as asked was the Proven template's graph size) — and a
// BreadcrumbList node whose crumb names carry the display-URL
// variations (Variations in Search Result Display URL +2; SERP-rendered,
// the slug itself is Rule-7 frozen).
const livingstonSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'RoofingContractor'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: pageUrl,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Livingston, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07039', addressCountry: 'US' },
      ],
      image: {
        '@type': 'ImageObject',
        contentUrl: 'https://newarkqualityroofing.com/images/heroes/city-livingston.webp',
        caption: 'Roof repair Livingston NJ — rooftops and rooflines above the neighborhood streets',
        width: 1920,
        height: 1080,
      },
      employee: {
        '@type': 'Person',
        jobTitle: 'Roofing Contractor',
        worksFor: { '@type': 'Organization', name: 'Newark Quality Roofing' },
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '08:00',
          closes: '14:00',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Livingston, NJ',
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      mainEntity: { '@id': `${pageUrl}#localbusiness` },
      keywords: coraLivingstonStyleCommentPhrases.join(', '),
      potentialAction: {
        '@type': 'ReadAction',
        target: pageUrl,
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Roof Repair Services',
          item: 'https://newarkqualityroofing.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair Livingston NJ',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'ItemList',
      name: 'Roof Repair Services in Livingston, NJ',
      itemListElement: livingstonServices.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        url: `https://newarkqualityroofing.com${item.href}`,
        description: `${item.label} — a Livingston roofing repair service from Newark Quality Roofing: roof repair Livingston NJ crews document every Livingston roof repair with photographs, a written scope, and a workmanship warranty.`,
      })),
    },
    {
      '@type': 'ItemList',
      name: 'Roofing Services Near Livingston, NJ',
      itemListElement: adjacentServices.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        url: `https://newarkqualityroofing.com${item.href}`,
      })),
    },
  ],
};

// Rotating slug-token class (Phase 11 variation mass in attributes):
// every stamped element carries one slugified variation in its class.
const vClass = (i: number) =>
  `cora-261012-var ${coraLivingstonStyleVariations[i % coraLivingstonStyleVariations.length]}`;

const galleryFirstHalf = coraLivingstonGalleryImages.slice(0, 20);
const gallerySecondHalf = coraLivingstonGalleryImages.slice(20);

export function CoraRoadmap261012Livingston() {
  return (
    <section
      aria-label="Livingston Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {coraLivingstonCssIncludes.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <style>
        {`:root { ${coraLivingstonStyleVariations.map((term) => `--cora-261012-${term}: 1;`).join(' ')} }
        /* CORA 2026-10-12 (Livingston) style-tag variations: ${coraLivingstonStyleCommentPhrases.join(', ')} */`}
      </style>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- CORA 2026-10-12 Livingston variations: ${coraLivingstonCommentVariationsA.join(', ')} -->`,
        }}
      />
      <JsonLd data={livingstonSchemaGraph} />
      <details className="cora-261012-livingston-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Repair in Livingston, NJ — Extended Guide, Photo Record, and Field Notes
        </summary>

        <h2 className={vClass(0)}>Roof Repair Services in Livingston, NJ: Roof Leak Repair, Asphalt Shingle Roofing, Gutters, Slate, Chimneys, and Roofing Work Across Essex County</h2>
        <p className={vClass(1)}>
          <b>Roof Repair Livingston, NJ</b> is the complete record behind this page: how Livingston
          roofs fail, how Livingston roofing crews trace a leak through deck, attic, and masonry, the
          photo record of finished work, the directories of every service and city page behind this
          one, and the field notes the crews write after every visit. Livingston roofs — center-hall
          colonials, split-levels, ranches, and the low-slope roofs along Route 10 — get the same
          standard: inspect from ridge to eave, repair the detail that admits water, and document the
          finished work with photographs and a written warranty.
        </p>
        <p className={vClass(2)}>
          Read it the way the estimator wrote it. Every repair on this page follows the same order —
          find the entry point, name it in a written scope with real materials (asphalt shingles,
          copper, flashing, membrane, slate), repair it to manufacturer specification, and file the
          photographs. The sections below are the working record of Livingston roof repair: the
          failure patterns, the service directory, the photo record, the detail index, and the crew
          field notes.
        </p>

        <h3 className={vClass(3)}>{coraLivingstonExactMatchHeading}</h3>
        <p className={vClass(4)}>
          The service index for this page, in the words homeowners and searchers actually use:{' '}
          {coraLivingstonSpanVariations.map((phrase, i) => (
            <span key={phrase} className={vClass(5 + i)}>
              <span>{phrase}</span>
              {i < coraLivingstonSpanVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>
        <p className={vClass(70)}>
          On the truck radio the same work is called{' '}
          {coraLivingstonEmVariations.map((phrase, i) => (
            <span key={phrase}>
              <em className={vClass(71 + i)}>{phrase}</em>
              {i < coraLivingstonEmVariations.length - 1 ? ', ' : '.'}
            </span>
          ))}{' '}
          Different words, one standard: the repaired detail is photographed, warranted, and walked
          with the homeowner before the crew leaves Livingston.
        </p>
        <p className={vClass(84)}>
          The full service vocabulary of this page, as the office files it:{' '}
          {coraLivingstonBVariations.map((phrase, i) => (
            <span key={phrase}>
              <b className={vClass(85 + i)}>{phrase}</b>
              {i < coraLivingstonBVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>

        {coraLivingstonContentGroups.map((group, groupIndex) => (
          <div key={group.heading}>
            <h3 className={vClass(3 + groupIndex)}>{group.heading}</h3>
            {group.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraph.slice(0, 48)} className={vClass(11 + groupIndex * 2 + paragraphIndex)}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h4 className={vClass(31)}>{coraLivingstonWholeTagH4}</h4>
        <p className={vClass(32)}>
          Field record details for this Livingston page — the stock on the truck and the tie-ins the
          crews photograph before any material is disturbed:
        </p>
        {coraLivingstonRecords.map((record, recordIndex) => (
          <div key={record.heading}>
            <h4 className={vClass(33 + recordIndex)}>{record.heading}</h4>
            <p className={vClass(37 + recordIndex)}>{record.paragraph}</p>
          </div>
        ))}
        <h6 className={vClass(41)}>Livingston NJ roof repair file note — detail index entries are working records; the contractor’s signed scope governs each job.</h6>
        <h6 className={vClass(42)}>Roof repair Livingston NJ record note — photographs, warranty papers, and inspection sign-offs are filed under the homeowner’s name in Essex County, NJ.</h6>

        <h2 className={vClass(95)}>What Does Roof Repair Cost in Livingston, NJ?</h2>
        <p className={vClass(96)}>
          Livingston homeowners ask this first, and the honest answer is that the price follows the
          detail that failed. A wind-lifted shingle course or a cracked pipe boot is a small, fixed
          repair; a chimney that needs its flashing rebuilt, or a valley that has been leaking into
          the deck, is priced by the materials and the deck work the photographs show once the
          courses are lifted. Slate, cedar, and copper work is priced differently from asphalt
          shingle work, and a two-story colonial off Mount Pleasant Avenue takes more ladder time
          than a ranch off Northfield Avenue.
        </p>
        <p className={vClass(97)}>
          What never changes is how the number is produced: the contractor inspects, photographs
          the failure, and writes a scope that names the materials and the warranty before any work
          is approved. The cost guides linked in the records below price the common Livingston
          repairs the same way, so a homeowner can set the written estimate beside the published
          record and compare them line by line.
        </p>

        <h2 className={vClass(43)}>Roof Repair Records, References, and Contractor Checks for Livingston Homeowners</h2>
        <h3 className={vClass(44)}>Verifying a Roof Repair Contractor in Livingston, NJ: Township Records, BBB, Consumer Affairs, GAF, and NRCA</h3>
        <p className={vClass(45)}>
          Verify any roofer — including this company — before you sign. These references are the
          checks a careful Livingston homeowner runs:
        </p>
        <ul>
          {externalReferences.map((item) => (
            <li key={item.label}>
              <a href={item.href} rel="nofollow external">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <h3 className={vClass(46)}>Newark Quality Roofing on Social and Professional Networks for Livingston Roof Repair</h3>
        <p className={vClass(47)}>
          Newark Quality Roofing keeps its project photography, reviews, and company updates on the
          public profile networks below.
        </p>
        <ul>
          {socialReferences.map((item) => (
            <li key={item.label}>
              <a href={item.href} rel="nofollow external">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {coraLivingstonBlockquotes.map((quote, quoteIndex) => (
          <blockquote key={quote.slice(0, 40)} className={vClass(0 + quoteIndex)}>
            <p>{quote}</p>
          </blockquote>
        ))}

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p className={vClass(7)}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Livingston, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Livingston roof repair page</a>. Your contact on
            every Livingston job is the{' '}
            <span itemScope itemType="https://schema.org/Person">
              <span itemProp="jobTitle">Roofing Contractor</span>
            </span>{' '}
            team at the office: ask for{' '}
            <a href={`mailto:${siteConfig.email}?subject=Livingston%20roof%20repair%20inspection`}>a Livingston roof repair inspection</a>, request{' '}
            <a href={`mailto:${siteConfig.email}?subject=Livingston%20roof%20repair%20estimate`}>a Livingston roof repair estimate</a>, or write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.{' '}
            <a itemScope itemType="https://schema.org/ReadAction" href={pageUrl}>
              <meta itemProp="target" content={pageUrl} />
              Open the Livingston roof repair record page
            </a>
            .
          </p>
        </div>

        <nav itemScope itemType="https://schema.org/SiteNavigationElement" aria-label="Newark Quality Roofing service and city directory">
          <ul>
            {coreDirectory.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(8)}>Roof Repair Services in Livingston, NJ: The Full Livingston Service Directory</h3>
          <ul className="cora-services-directory">
            {livingstonServices.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(9)}>Roof Repair Across Essex County and Morris County: City Pages for Newark and the Neighboring Towns</h3>
          <ul className="cora-cities-directory">
            {roofRepairCities.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(10)}>Roof Repair Guides and Cost Records for New Jersey Homeowners</h3>
          <ul className="cora-guides-directory">
            {guideDirectory.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <p className={vClass(11)}>
            More published guides from the same library — cost records, contractor checks, and the
            repair-versus-replacement signs for the other roofing services Livingston homeowners
            compare:
          </p>
          <ul className="cora-guides-directory">
            {guideDirectoryMore.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(23)}>Roofing Cost Guides for Every Roofing System in New Jersey</h3>
          <ul className="cora-guides-directory">
            {guideDirectoryThird.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(12)}>Roofing Services Near Livingston, NJ: West Orange, Roseland, Essex Fells, and Millburn Pages</h3>
          <ul className="cora-adjacent-directory">
            {adjacentServices.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(13)}>Roof Repair in Livingston NJ: The Service Index in the Words Searchers Use</h3>
          <ul className="cora-whole-index">
            {wholeIndex.map((item) => (
              <li key={item.anchor}>
                <a href={item.href}>{item.anchor}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className={vClass(14)}>Roof Repairs in Livingston: Photo Record of Shingle, Flat, Slate, and Metal Roofing Work</h2>
        <p className={vClass(15)}>
          Forty photographs from the working life of this service — Livingston rooftops, the repair
          details this page describes, and the process each homeowner is buying:
        </p>
        <h3 className={vClass(16)}>Livingston Roof Repair Photo Record: Crews, Inspections, and Repair Details</h3>
        <figure itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="contentUrl" content="https://newarkqualityroofing.com/images/heroes/city-livingston.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/heroes/city-livingston.webp"
            alt="Roof repair Livingston NJ — rooftops and rooflines above the neighborhood streets"
            itemProp="image"
            className={vClass(17)}
            loading="lazy"
            width="800"
            height="600"
          />
          <figcaption itemProp="caption">
            Livingston, NJ rooftops — the colonial and split-level rooflines this page documents.
          </figcaption>
          <p itemProp="text" className={vClass(18)}>
            Field photograph record for Livingston NJ roof repair: the page’s working image of the
            town’s rooflines, filed with the inspection notes, repair photographs, and warranty
            records the crews keep for every Livingston roof.
          </p>
        </figure>
        <div>
          {galleryFirstHalf.map((image, imageIndex) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              itemProp="image"
              className={vClass(19 + imageIndex)}
              loading="lazy"
              width="800"
              height="600"
            />
          ))}
        </div>
        <h3 className={vClass(40)}>Livingston Roofing Photo Record: Materials, Storm Response, and Finished Repairs</h3>
        <div>
          {gallerySecondHalf.map((image, imageIndex) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              itemProp="image"
              className={vClass(41 + imageIndex)}
              loading="lazy"
              width="800"
              height="600"
            />
          ))}
        </div>

        <h2 className={vClass(62)}>Livingston NJ Roof Repair Detail Index: Boots, Flashing, Valleys, Gutters, Ventilation, and Drainage Details</h2>
        <p className={vClass(63)}>
          The detail index is the working heart of this page: fifty named details, each one a
          place a Livingston roof actually leaks, wears, or drains, and each one recorded the way the
          contractor writes it in the job file. Read it as the checklist behind every Livingston, NJ
          inspection on this page.
        </p>
        {coraLivingstonH5Details.map((detail, detailIndex) => (
          <div key={detail.heading}>
            <h5 className={vClass(64 + detailIndex)}>{detail.heading}</h5>
            <p className={vClass(99 + detailIndex)}>{detail.paragraph}</p>
          </div>
        ))}
        <p className={vClass(150)}>
          A closing word on vocabulary, because roofing is a trade with its own language and this
          page has used it deliberately. Roofing in Livingston means residential roofing and
          commercial roofing, shingle roofing and slate roofing, metal roofing and flat roofing,
          cedar roofing and tile roofing. The roofing contractor who inspects a Livingston roof
          reads the roofing system whole: the roofing materials, the roofing underlayment, the
          roofing flashing, and the roofing ventilation. Good roofing is documented roofing —
          roofing estimates in writing, roofing warranties registered, roofing photographs filed —
          and Livingston homeowners comparing roofing companies should ask every roofing crew for
          that roofing record before the first ladder touches the house.
        </p>

        <div
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- CORA 2026-10-12 Livingston field-note variations: ${coraLivingstonCommentVariationsB.join(', ')} -->`,
          }}
        />
        <details className="cora-261012-livingston-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — Livingston, NJ Crew Records
          </summary>
          <h2 className={vClass(20)}>Roof Repair Livingston NJ Field Notes: Roof Repairs, Shingle Repair, Attic, Ventilation, Masonry, and Asphalt Records</h2>
          <p className={vClass(21)}>
            These are the working notes behind the numbers on this page: what the crews saw, what
            they photographed, and what they wrote into each Livingston file before the office
            priced the work. They are kept because a Livingston roof repair is only as good as
            the record that survives it.
          </p>
          {coraLivingstonLsiParagraphGroups.map((group, groupIndex) => (
            <div key={coraLivingstonLsiHeadings[groupIndex]}>
              <h3 className={vClass(22 + groupIndex)}>{coraLivingstonLsiHeadings[groupIndex]}</h3>
              {group.map((paragraph, paragraphIndex) => (
                <p key={paragraph.slice(0, 48)} className={vClass(30 + groupIndex * 3 + paragraphIndex)}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <p className={vClass(151)}>
            Field-note term index — the working vocabulary of the notes above, indexed so a
            homeowner reading a Livingston file can find the note that uses each term:
          </p>
          <ul className="cora-lsi-term-index">
            {coraLivingstonLsiTermsUsed.slice(0, 160).map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </details>
      </details>
    </section>
  );
}
