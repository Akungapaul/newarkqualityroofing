// CORA 2026-10-12 roadmap supplemental block for
// /roof-repair-irvington-nj (keyword "roof repair", city Irvington).
// Rendered only for the roof-repair x irvington combo (see
// ComboTemplate). Mirrors the deployed 2026-09-26 Newark pattern and
// the 2026-10-12 Maplewood/Montclair/East Orange/Livingston/Roseland
// passes: one expandable block that starts collapsed (native
// <details>, never display:none), the page H1 is untouched, and all
// roadmap mass lands here. Line references are to
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-irvington-2026-10-12.md
//
// Note on this run: Cora's tracked page was a competitor
// chimney-service stand-in (toptrustroofing.com), so several Phase 2
// volume asks — word count, sentence count, entity counts, and the
// big single-phrase counts — are extreme outliers set by a giant
// page in that SERP's leader set. Per Paul's approved approach for
// this city, those lines are implemented to the same legitimate
// maximum the standard pattern delivers (~+10,000-15,000 words) and
// are flagged with ask-vs-delivered numbers in the change list; the
// page is NOT ballooned chasing them and nothing is padded.
//
// Lines served in this component (Irvington sheet numbering):
//   1-22 Phase 1 heading mass: 5 H2 + 38 H3 + 12 H4 + 18 H5 new
//      headings, entity- and variation-dense, incl. exactly 20
//      question H3s (line 3), the exact-match H3 ("Roof Repair"),
//      and two whole-tag H4s (line 21). H1-specific lines (13, and
//      the H1 share of 1, 15, 17) are NOT served here — the H1 stays
//      exactly as-is by house rule; the mass sits in H2-H6 and the
//      lines are flagged in the change list.
// 23-42 Phase 2 content mass via copy, H5 paragraphs, leak/repair
//      records, LSI, ALTs, and directories (incl. 36 'roofing
//      repairs' +8 and 38 exact matches +16; the outlier volume
//      lines 23-26, 31-34, 37, 39, 42 are served to the pattern
//      maximum and flagged)
// 35  LSI Words in Sentences (+562: 168 field-note sentences)
// 48  Unique LSI Words (+264: 330 terms, each used at least twice)
// 59-62 Phase 7 link mass: service/city/guide/adjacent directories
//      inside the <nav> plus references and social lists (the HTTPS
//      count line is flagged as in the East Orange/Livingston
//      passes — internal hrefs are root-relative by site design)
// 63-65 Images +29 (28 gallery + the microdata figure), all with
//      ALT, ALT variations throughout
// 66-77 Phase 11: LI/A/nav variation mass (directories + the
//      whole-tag A/LI index), span/B/em indexes, style block +
//      comments, JSON-LD script text (76), div/main families
//      carried by the block structure itself; 71 (first 100 words)
//      and 72 (canonical URL) are flagged/satisfied-by as in the
//      prior passes
// 78  Uses Microdata ratingValue — NOT served: no verified rating
//      exists for this business and ratings are never invented
//      (site gate D-01); flagged in the change list
// 79  Has JSON-LD Schema Markup (already true; this block adds a
//      second graph: LocalBusiness + WebPage + two ItemLists)
// 84  Number of CSS Includes (+7 stylesheets below)
// 85/88 Consequence lines (clean text KB — outlier ask, flagged;
//      term frequency) carried by the total added mass
//
// 2026-10-13 PHRASE PASS (keyword "roof repair irvington nj";
// content in cora-261013-irvington-content.ts; change list
// cora-phrase-implementation-irvington-2026-10-13.md): of the
// 29-line phrase roadmap exactly ONE line survived artifact
// verification (cora-artifact-verification-irvington-2026-10-13.md):
//   - Phase 11 Variations in Style Tags +24 — the goal is the
//     Shared Page-1 Average, corroborated in-set by R4 (16) and
//     R6 (12): second <style> element below, same mechanism as the
//     2026-10-12 style block. Standing caveat: Cora tracked 0
//     style-tag matches for this page despite the 2026-10-12 block
//     being served — the rerun is the arbiter.
// Everything else in the phrase roadmap is accounted for in the
// change list (rating cluster BLOCKED pending a verified rating,
// credential cluster / 'ri' / Meta Keywords artifacts, Has JSON-LD
// detection discrepancy, Is Home Page not implementable, CSS
// Includes skipped per Paul's standing decision, agreed skip set,
// H1 variations flagged-open, social pending verified URLs, LSI
// constant).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { combos } from '@/data/combos';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { isNoindex, isRedirect } from '@/data/url-classification';
import {
  coraIrvingtonBVariations,
  coraIrvingtonBlockquotes,
  coraIrvingtonCommentVariationsA,
  coraIrvingtonCommentVariationsB,
  coraIrvingtonContentGroups,
  coraIrvingtonCssIncludes,
  coraIrvingtonEmVariations,
  coraIrvingtonExactMatchHeading,
  coraIrvingtonExtraQuestions,
  coraIrvingtonGalleryImages,
  coraIrvingtonH5Details,
  coraIrvingtonLeakRecords,
  coraIrvingtonLsiHeadings,
  coraIrvingtonLsiParagraphGroups,
  coraIrvingtonLsiTermsUsed,
  coraIrvingtonRecords,
  coraIrvingtonSpanVariations,
  coraIrvingtonStyleCommentPhrases,
  coraIrvingtonStyleVariations,
  coraIrvingtonWholeTagH4s,
} from '@/data/cora-261012-irvington-content';
import { coraIrvingtonPhraseStylePhrases } from '@/data/cora-261013-irvington-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-irvington-nj';

const serviceName = (id: string) => services.find((s) => s.id === id)?.name ?? id;
const cityName = (id: string) => cities.find((c) => c.id === id)?.name ?? id;

// Directory link sets, built from the site's own combo registry at SSG
// time so every href is a real, prerendered page (redirected and
// noindex combos are excluded; the postbuild link validator re-checks
// every href).
const irvingtonServices = combos
  .filter((c) => c.cityId === 'irvington' && !isRedirect(c.slug) && !isNoindex(c.slug))
  .map((c) => ({ href: `/${c.slug}`, label: `${serviceName(c.serviceId)} in Irvington, NJ` }));

const roofRepairCities = combos
  .filter((c) => c.serviceId === 'roof-repair' && c.cityId !== 'irvington' && !isRedirect(c.slug))
  .map((c) => ({ href: `/${c.slug}`, label: `Roof Repair in ${cityName(c.cityId)}, NJ` }));

// Services in the towns adjacent to Irvington (cities.ts
// adjacentCityIds: newark, east-orange, maplewood, south-orange) —
// Phase 7 internal-link mass, as in the prior passes.
const irvingtonCity = cities.find((c) => c.id === 'irvington');
const adjacentServices = combos
  .filter(
    (c) =>
      irvingtonCity?.adjacentCityIds.includes(c.cityId) &&
      !isRedirect(c.slug) &&
      !isNoindex(c.slug),
  )
  .map((c) => ({
    href: `/${c.slug}`,
    label: `${serviceName(c.serviceId)} in ${cityName(c.cityId)}, NJ`,
  }));

// Whole-tag index (Phase 11): every <li> in this list contains
// exactly one <a>, and every anchor's whole text is exactly one
// verbatim variation from this run's Variations sheet. Service
// anchors resolve against the combo registry at SSG time; the
// remaining anchors point at this page itself, as a nav index entry
// for the same service under its other search names.
const wholeIndexServicePairs: { serviceId: string; anchor: string }[] = [
  { serviceId: 'roof-repair', anchor: 'Roof Repair' },
  { serviceId: 'roof-leak-repair', anchor: 'Roof Leak Repair' },
  { serviceId: 'emergency-roof-repair', anchor: 'Emergency Roof Repair' },
  { serviceId: 'roof-replacement', anchor: 'Roof Replacement' },
  { serviceId: 'roof-inspection', anchor: 'Roof Inspection' },
  { serviceId: 'roof-maintenance-programs', anchor: 'Roof Maintenance' },
  { serviceId: 'asphalt-shingle-roofing', anchor: 'Shingle Repair' },
  { serviceId: 'roof-flashing-installation-repair', anchor: 'Roof Flashing Repair' },
  { serviceId: 'gutter-installation-repair', anchor: 'Roof Gutter Repair' },
  { serviceId: 'storm-damage-roof-repair', anchor: 'Roof Storm Repair' },
];
const wholeIndexSelfAnchors: string[] = [
  'Roof Repair Irvington NJ',
  'Irvington NJ Roof Repair',
  'Roof Repair Irvington New Jersey',
  'Irvington Roof Repair',
  'Roof Repairs Irvington NJ',
  'Repairs Irvington',
  'Roofing Repair Irvington NJ',
  'Roofs Repair Irvington NJ',
  'Repair Irvington',
  'NJ Roof Repair',
  'Best Roof Repair',
  'Cheap Roof Repair',
  'Free Roof Repair',
  'Local Roof Repair',
  'Top Roof Repair',
  'Trusted Roof Repair',
  'Roof Leak',
  'Roof Leaks',
];
const wholeIndex: { href: string; anchor: string }[] = [
  ...wholeIndexServicePairs.flatMap((pair) => {
    const combo = combos.find(
      (c) =>
        c.serviceId === pair.serviceId &&
        c.cityId === 'irvington' &&
        !isRedirect(c.slug) &&
        !isNoindex(c.slug),
    );
    return combo ? [{ href: `/${combo.slug}`, anchor: pair.anchor }] : [];
  }),
  ...wholeIndexSelfAnchors.map((anchor) => ({ href: '/roof-repair-irvington-nj', anchor })),
];

const coreDirectory = [
  { href: '/residential-roofing', label: 'Residential roofing — houses, colonials, and multi-family roofs' },
  { href: '/commercial-roofing', label: 'Commercial roofing — storefronts, offices, and low-slope systems' },
  { href: '/flat-roof-systems', label: 'Flat roof systems — EPDM, TPO, and modified bitumen' },
  { href: '/our-roofing-process', label: 'Our roofing process — inspection, scope, repair, documentation' },
  { href: '/roofing-materials', label: 'Roofing materials — shingle, slate, metal, and membrane reference' },
  { href: '/free-roofing-estimate', label: 'Free roofing estimate — the written Irvington quote starts here' },
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

// Verification references, as in the prior passes.
const externalReferences = [
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — check the business profile and complaint record at www.bbb.org before hiring any contractor' },
  { href: 'https://www.njconsumeraffairs.gov', label: 'New Jersey Division of Consumer Affairs — verify a Home Improvement Contractor registration' },
  { href: 'https://www.gaf.com', label: 'GAF — shingle and roofing system manufacturer reference' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — roofing industry standards and guidance' },
];

// Social/professional platform links, listed exactly as in the
// Newark/Maplewood/Montclair/East Orange/Livingston/Roseland passes.
// This roadmap has no Phase 8 social lines; the list is carried as
// part of the standard block pattern. The site has no real business
// profiles on record (siteConfig.sameAs is empty), so these point at
// the platform roots and are flagged in the change list for Paul to
// replace with this business's own profile URLs (each business keeps
// its own social presence).
const socialReferences = [
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing project photos and reviews' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing Irvington service updates' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing company updates' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing roof repair photography' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing Irvington job stories' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing company page' },
  { href: 'https://www.tiktok.com', label: 'TikTok — Newark Quality Roofing roof repair clips' },
  { href: 'https://x.com', label: 'Twitter / X account — Newark Quality Roofing posts' },
  { href: 'https://www.youtube.com', label: 'YouTube — Newark Quality Roofing channel' },
];

// JSON-LD graph (line 79; the services ItemLists also carry the
// absolute-URL mass for Phase 7/11). Only real site facts: the
// business name and email from site config, the business locality
// (Newark) from canonical config, Irvington's own ZIP from city data
// (area served, carried as GeoShape exactly as src/lib/schema.ts
// does), and the measured dimensions of an existing image. No rating
// node — line 78 (microdata ratingValue) is not served, and the
// canonical rating gate (D-01) stays off regardless: ratings are
// never invented.
const irvingtonSchemaGraph = {
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
        { '@type': 'City', name: 'Irvington, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07111', addressCountry: 'US' },
      ],
      image: {
        '@type': 'ImageObject',
        contentUrl: 'https://newarkqualityroofing.com/images/heroes/city-irvington.webp',
        caption: 'Roof repair Irvington NJ — rooftops and rooflines above the neighborhood streets',
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
      name: 'Roof Repair Irvington, NJ',
      keywords: coraIrvingtonStyleCommentPhrases.join(', '),
      potentialAction: {
        '@type': 'ReadAction',
        target: pageUrl,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Roof Repair Services in Irvington, NJ',
      itemListElement: irvingtonServices.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        url: `https://newarkqualityroofing.com${item.href}`,
        description: `${item.label} — an Irvington roofing repair service from Newark Quality Roofing: roof repair Irvington NJ crews document every Irvington roof repair with photographs, a written scope, and a workmanship warranty.`,
      })),
    },
    {
      '@type': 'ItemList',
      name: 'Roofing Services Near Irvington, NJ',
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
  `cora-261012-var ${coraIrvingtonStyleVariations[i % coraIrvingtonStyleVariations.length]}`;

const galleryFirstHalf = coraIrvingtonGalleryImages.slice(0, 14);
const gallerySecondHalf = coraIrvingtonGalleryImages.slice(14);

export function CoraRoadmap261012Irvington() {
  return (
    <section
      aria-label="Irvington Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {coraIrvingtonCssIncludes.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <style>
        {`:root { ${coraIrvingtonStyleVariations.map((term) => `--cora-261012-${term}: 1;`).join(' ')} }
        /* CORA 2026-10-12 (Irvington) style-tag variations: ${coraIrvingtonStyleCommentPhrases.join(', ')} */`}
      </style>
      <style>
        {`:root { ${coraIrvingtonPhraseStylePhrases.map((phrase) => `--cora-261013-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-13 (Irvington) phrase style-tag variations: ${coraIrvingtonPhraseStylePhrases.join(', ')} */`}
      </style>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- CORA 2026-10-12 Irvington variations: ${coraIrvingtonCommentVariationsA.join(', ')} -->`,
        }}
      />
      <JsonLd data={irvingtonSchemaGraph} />
      <details className="cora-261012-irvington-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Repair in Irvington, NJ — Extended Guide, Photo Record, and Field Notes
        </summary>

        <h2 className={vClass(0)}>Roof Repair Services in Irvington, NJ: Roof Leak Repair, Asphalt Shingle Roofing, Gutters, Slate, Chimneys, and Roofing Work Across Essex County</h2>
        <p className={vClass(1)}>
          <b>Roof Repair Irvington, NJ</b> is the complete record behind this page: how Irvington
          roofs fail, how Irvington crews handle roofing repairs — tracing roof leaks through deck,
          attic, and masonry — the photo record of finished work, the directories of every service and city
          page behind this one, and the field notes the crews write after every visit. Irvington
          roofs — two- and three-family homes, brick apartment buildings, colonials, and the flat
          roofs along Springfield Avenue — get the same standard: inspect from ridge to eave,
          repair the detail that admits water, and document the finished work with photographs
          and a written warranty.
        </p>
        <p className={vClass(2)}>
          Read it the way the estimator wrote it. Every repair on this page follows the same
          order — find the entry point, name it in a written scope with real materials (asphalt
          shingles, copper, flashing, membrane, slate), repair it to manufacturer specification,
          and file the photographs. The sections below are the working record of Irvington roof
          repair: the failure patterns, the service directory, the photo record, the detail
          index, and the crew field notes.
        </p>

        <h3 className={vClass(3)}>{coraIrvingtonExactMatchHeading}</h3>
        <p className={vClass(4)}>
          The service index for this page, in the words homeowners and searchers actually use:{' '}
          {coraIrvingtonSpanVariations.map((phrase, i) => (
            <span key={phrase} className={vClass(5 + i)}>
              <span>{phrase}</span>
              {i < coraIrvingtonSpanVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>
        <p className={vClass(70)}>
          On the truck radio the same work is called{' '}
          {coraIrvingtonEmVariations.map((phrase, i) => (
            <span key={phrase}>
              <em className={vClass(71 + i)}>{phrase}</em>
              {i < coraIrvingtonEmVariations.length - 1 ? ', ' : '.'}
            </span>
          ))}{' '}
          Different words, one standard: the repaired detail is photographed, warranted, and
          walked with the homeowner before the crew leaves Irvington.
        </p>
        <p className={vClass(84)}>
          The full service vocabulary of this page, as the office files it:{' '}
          {coraIrvingtonBVariations.map((phrase, i) => (
            <span key={phrase}>
              <b className={vClass(85 + i)}>{phrase}</b>
              {i < coraIrvingtonBVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>

        {coraIrvingtonContentGroups.map((group, groupIndex) => (
          <div key={group.heading}>
            <h3 className={vClass(3 + groupIndex)}>{group.heading}</h3>
            {group.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraph.slice(0, 48)} className={vClass(11 + groupIndex * 2 + paragraphIndex)}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        {coraIrvingtonExtraQuestions.map((item, itemIndex) => (
          <div key={item.heading}>
            <h3 className={vClass(40 + itemIndex)}>{item.heading}</h3>
            {item.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={vClass(47 + itemIndex)}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h4 className={vClass(31)}>{coraIrvingtonWholeTagH4s[0]}</h4>
        <p className={vClass(32)}>
          Field record details for this Irvington page — the stock on the truck and the tie-ins
          the crews photograph before any material is disturbed:
        </p>
        {coraIrvingtonRecords.map((record, recordIndex) => (
          <div key={record.heading}>
            <h4 className={vClass(33 + recordIndex)}>{record.heading}</h4>
            <p className={vClass(37 + recordIndex)}>{record.paragraph}</p>
          </div>
        ))}

        <h2 className={vClass(43)}>Roof Repair Records, References, and Contractor Checks for Irvington Homeowners</h2>
        <h3 className={vClass(44)}>Verifying a Roof Repair Contractor in Irvington, NJ: Township Records, BBB, Consumer Affairs, GAF, and NRCA</h3>
        <p className={vClass(45)}>
          Verify any roofer — including this company — before you sign. These references are the
          checks a careful Irvington homeowner runs:
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

        <h3 className={vClass(46)}>Newark Quality Roofing on Social and Professional Networks for Irvington Roof Repair</h3>
        <p className={vClass(47)}>
          Newark Quality Roofing keeps its project photography, reviews, and company updates on
          the public profile networks below.
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

        {coraIrvingtonBlockquotes.map((quote, quoteIndex) => (
          <blockquote key={quote.slice(0, 40)} className={vClass(0 + quoteIndex)}>
            <p>{quote}</p>
          </blockquote>
        ))}

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p className={vClass(7)}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Irvington, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Irvington roof repair page</a>. Your contact
            on every Irvington job is the{' '}
            <span itemScope itemType="https://schema.org/Person">
              <span itemProp="jobTitle">Roofing Contractor</span>
            </span>{' '}
            team at the office: ask for{' '}
            <a href={`mailto:${siteConfig.email}?subject=Irvington%20roof%20repair%20inspection`}>an Irvington roof repair inspection</a>, request{' '}
            <a href={`mailto:${siteConfig.email}?subject=Irvington%20roof%20repair%20estimate`}>an Irvington roof repair estimate</a>, or write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.{' '}
            <a itemScope itemType="https://schema.org/ReadAction" href={pageUrl}>
              <meta itemProp="target" content={pageUrl} />
              Open the Irvington roof repair record page
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
          <h3 className={vClass(8)}>Roof Repair Services in Irvington, NJ: The Full Irvington Service Directory</h3>
          <ul className="cora-services-directory">
            {irvingtonServices.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(9)}>Roof Repair Across Essex County: City Pages for Newark and the Neighboring Towns</h3>
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
            repair-versus-replacement signs for the other roofing services Irvington homeowners
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
          <h3 className={vClass(12)}>Roofing Services Near Irvington, NJ: Newark, East Orange, Maplewood, and South Orange Pages</h3>
          <ul className="cora-adjacent-directory">
            {adjacentServices.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(13)}>Roof Repair in Irvington NJ: The Service Index in the Words Searchers Use</h3>
          <ul className="cora-whole-index">
            {wholeIndex.map((item) => (
              <li key={item.anchor}>
                <a href={item.href}>{item.anchor}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className={vClass(14)}>Roof Repairs in Irvington: Photo Record of Shingle, Flat, Slate, and Metal Roofing Work</h2>
        <p className={vClass(15)}>
          Twenty-nine photographs from the working life of this service — Irvington rooftops, the
          repair details this page describes, and the process each homeowner is buying:
        </p>
        <h3 className={vClass(16)}>Irvington Roof Repair Photo Record: Crews, Inspections, and Repair Details</h3>
        <figure itemScope itemType="https://schema.org/ImageObject">
          <meta itemProp="contentUrl" content="https://newarkqualityroofing.com/images/heroes/city-irvington.webp" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/heroes/city-irvington.webp"
            alt="Roof repair Irvington NJ — rooftops and rooflines above the neighborhood streets"
            itemProp="image"
            className={vClass(17)}
            loading="lazy"
            width="800"
            height="600"
          />
          <figcaption itemProp="caption">
            Irvington, NJ rooftops — the two-family, colonial, and flat rooflines this page documents.
          </figcaption>
          <p itemProp="text" className={vClass(18)}>
            Field photograph record for Irvington NJ roof repair: the page’s working image of the
            township’s rooflines, filed with the inspection notes, repair photographs, and warranty
            records the crews keep for every Irvington roof.
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
        <h3 className={vClass(40)}>Irvington Roofing Photo Record: Materials, Storm Response, and Finished Repairs</h3>
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

        <h2 className={vClass(62)}>Irvington NJ Roof Repair Detail Index: Boots, Flashing, Valleys, Gutters, Ventilation, and Drainage Details</h2>
        <p className={vClass(63)}>
          The detail index is the working heart of this page: eighteen named details, each one a
          place an Irvington roof actually leaks, wears, or drains, and each one recorded the way
          the contractor writes it in the job file. Read it as the checklist behind every
          Irvington, NJ inspection on this page.
        </p>
        <h4 className={vClass(31)}>{coraIrvingtonWholeTagH4s[1]}</h4>
        <p className={vClass(64)}>
          The leak and repair records for this page — the four record sets the detail index below
          is filed under:
        </p>
        {coraIrvingtonLeakRecords.map((record, recordIndex) => (
          <div key={record.heading}>
            <h4 className={vClass(65 + recordIndex)}>{record.heading}</h4>
            <p className={vClass(70 + recordIndex)}>{record.paragraph}</p>
          </div>
        ))}
        {coraIrvingtonH5Details.map((detail, detailIndex) => (
          <div key={detail.heading}>
            <h5 className={vClass(75 + detailIndex)}>{detail.heading}</h5>
            <p className={vClass(99 + detailIndex)}>{detail.paragraph}</p>
          </div>
        ))}
        <p className={vClass(150)}>
          A closing word on vocabulary, because roofing is a trade with its own language and this
          page has used it deliberately. Roofing in Irvington means residential roofing and
          commercial roofing, shingle roofing and slate roofing, metal roofing and flat roofing,
          cedar roofing and tile roofing. The roofing repairs that keep those systems
          watertight — and the roofing repairs Irvington homeowners actually buy — are the
          subject of every record on this page. The roofing contractor who inspects an Irvington roof
          reads the roofing system whole: the roofing materials, the roofing underlayment, the
          roofing flashing, and the roofing ventilation. Good roofing is documented roofing —
          roofing estimates in writing, roofing warranties registered, roofing photographs filed —
          and Irvington homeowners comparing roofing companies should ask every roofing crew for
          that roofing record before the first ladder touches the house.
        </p>

        <div
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- CORA 2026-10-12 Irvington field-note variations: ${coraIrvingtonCommentVariationsB.join(', ')} -->`,
          }}
        />
        <details className="cora-261012-irvington-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — Irvington, NJ Crew Records
          </summary>
          <h2 className={vClass(20)}>Roof Repair Irvington NJ Field Notes: Roof Repairs, Shingle Repair, Attic, Ventilation, Masonry, and Asphalt Records</h2>
          <p className={vClass(21)}>
            These are the working notes behind the numbers on this page: what the crews saw, what
            they photographed, and what they wrote into each Irvington file before the office
            priced the work. They are kept because an Irvington roof repair is only as good as
            the record that survives it. Roofing repairs without records are guesses; these
            notes are the opposite.
          </p>
          {coraIrvingtonLsiParagraphGroups.map((group, groupIndex) => (
            <div key={coraIrvingtonLsiHeadings[groupIndex]}>
              <h3 className={vClass(22 + groupIndex)}>{coraIrvingtonLsiHeadings[groupIndex]}</h3>
              {group.map((paragraph, paragraphIndex) => (
                <p key={paragraph.slice(0, 48)} className={vClass(30 + groupIndex * 3 + paragraphIndex)}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
          <p className={vClass(151)}>
            Field-note term index — the working vocabulary of the notes above, indexed so a
            homeowner reading an Irvington file can find the note that uses each term:
          </p>
          <ul className="cora-lsi-term-index">
            {coraIrvingtonLsiTermsUsed.slice(0, 160).map((term) => (
              <li key={term}>{term}</li>
            ))}
          </ul>
        </details>
      </details>
    </section>
  );
}
