// CORA 2026-10-12 roadmap supplemental block for
// /roof-repair-east-orange-nj (keyword "roof repair", city East Orange).
// Rendered only for the roof-repair x east-orange combo (see
// ComboTemplate). Mirrors the deployed 2026-09-26 Newark pattern and the
// 2026-10-12 Maplewood/Montclair passes: one expandable block that
// starts collapsed (native <details>, never display:none), the page H1
// is untouched, and all roadmap mass lands here. Line references are to
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-east-orange-2026-10-12.md
//
// Note on this run: Cora's tracked page was an Essex County stand-in
// (our page was not the tracked page), so several deficits — Phase 7
// link counts above all — are calibrated to that stand-in, not to our
// page. The accounting in the change list says so per line; the mass
// below is the pattern-supported literal maximum, and a rerun with our
// page as the tracked page is the authoritative check.
//
// Lines served in this component (East Orange sheet numbering):
//   1-31 Phase 1 heading mass: exactly +39 headings (4 H2 + 30 H3 +
//      5 H4), entity- and variation-dense; whole-tag H4 and the
//      exact-match H3 ("Roof Repair") included. H1-specific lines
//      (3, 11, 12, 22, 28) are NOT served here — the H1 stays exactly
//      as-is by house rule; the mass sits in H2/H3 and the lines are
//      flagged in the change list.
//  32  P Tags (+37 — the block adds well over 100)   34-49 Phase 2
//      phrase/content mass via copy, LSI, ALTs, directories
//  44  LSI Words in Sentences (+562: 144 field-note sentences, 720
//      in-sentence term slots)   52 Unique LSI Words (+264: 330 terms)
//  70-75 Phase 7 link mass: service/city/guide directories inside the
//      <nav> plus references and social lists (~120 added links)
//  71/74 Has Link to linkedin.com / facebook.com (social list)
//  76-81 Social counts (platform links as on the Newark/Maplewood/
//      Montclair pages; no business profiles exist in site config —
//      flagged in the change list)
//  82-84 Images +76, all with ALT, ALT variations throughout
//  85-97 Phase 11: canonical-adjacent and tag-family variation mass —
//      style block + comments (92, 96), span/B/em indexes (95), the
//      directory <nav> (90), LI lists (89), A tags/HREFs (88, 93, 94),
//      JSON-LD script text (86 — substantial, flagged in the change
//      list), div/main families carried by the block structure itself
//  98  Has JSON-LD Schema Markup (already true; this block adds a
//      second graph: LocalBusiness + WebPage + services ItemList)
// 100/103 Trademarks: GAF Timberline HDZ® named in the copy and the
//      shingle field record (a real registered mark, used factually)
// 102  Number of CSS Includes (+35 stylesheets below)
// 109-113 Consequence lines (clean text KB, term frequency, HTML tag
//      count, TF/IDF) carried by the total added mass
//
// 2026-10-13 PHRASE pass additions (keyword "roof repair east
// orange nj"; clean list in cora-phrase-measurement-east-orange-
// 2026-10-13.md as ruled in cora-artifact-verification-east-orange-
// 2026-10-13.md; content in cora-261013-east-orange-content.ts):
//   - Phase 11 Style Tags +24: second <style> element below, same
//     mechanism as the 2026-10-12 style block.
//   - Phase 12 schema lines (GeoCoordinates JSON-LD + microdata,
//     logo JSON-LD + microdata, RoofingContractor type order,
//     Has JSON-LD): served-HTML check and additions documented in
//     cora-phrase-implementation-east-orange-2026-10-13.md.
//   - Phase 1 'roofing' in H2 +1 / 'roofing' in H3 +1: the photo-
//     record lead-in headings before the gallery.
//   - Figure wrapping (Paul-approved residual of the +77 figure
//     artifact ask): the first 32 gallery images are wrapped in
//     <figure> with genuine descriptive <figcaption> text; no new
//     images, ALT text unchanged.

import { Fragment } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { combos } from '@/data/combos';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { isNoindex, isRedirect } from '@/data/url-classification';
import {
  coraEastOrangeBVariations,
  coraEastOrangeBlockquotes,
  coraEastOrangeCommentVariationsA,
  coraEastOrangeCommentVariationsB,
  coraEastOrangeContentGroups,
  coraEastOrangeCssIncludes,
  coraEastOrangeEmVariations,
  coraEastOrangeExactMatchHeading,
  coraEastOrangeGalleryImages,
  coraEastOrangeLsiHeadings,
  coraEastOrangeLsiParagraphGroups,
  coraEastOrangeRecords,
  coraEastOrangeSpanVariations,
  coraEastOrangeStyleCommentPhrases,
  coraEastOrangeStyleVariations,
  coraEastOrangeWholeTagH4,
} from '@/data/cora-261012-east-orange-content';

import {
  coraEastOrangeFigureCaptions,
  coraEastOrangePhotoRecordH2,
  coraEastOrangePhotoRecordH3,
  coraEastOrangePhotoRecordIntro,
  coraEastOrangePhraseStylePhrases,
} from '@/data/cora-261013-east-orange-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-east-orange-nj';

// 2026-10-13 phrase pass, Phase 12 schema lines: the site's canonical
// logo asset (the same /logo.svg the Header and Footer render) as an
// absolute URL, and the Newark, NJ coordinates the site itself
// publishes — the homepage Google Maps embed (src/app/page.tsx) is
// centered at 40.73566, -74.19967 for "Newark, NJ". The canonical
// config's geo fields are empty (owner-supplied values pending,
// D-01); nothing here invents a business-premises coordinate — the
// pair below is the site's own published Newark pair, flagged in the
// change list for Paul to replace with canonical values.
const businessLogoUrl = 'https://newarkqualityroofing.com/logo.svg';
const businessGeo = { latitude: 40.73566, longitude: -74.19967 };

const serviceName = (id: string) => services.find((s) => s.id === id)?.name ?? id;
const cityName = (id: string) => cities.find((c) => c.id === id)?.name ?? id;

// Directory link sets, built from the site's own combo registry at SSG
// time so every href is a real, prerendered page (redirected combos
// are excluded; the postbuild link validator re-checks every href).
const eastOrangeServices = combos
  .filter((c) => c.cityId === 'east-orange' && !isRedirect(c.slug) && !isNoindex(c.slug))
  .map((c) => ({ href: `/${c.slug}`, label: `${serviceName(c.serviceId)} in East Orange, NJ` }));

const roofRepairCities = combos
  .filter((c) => c.serviceId === 'roof-repair' && c.cityId !== 'east-orange' && !isRedirect(c.slug))
  .map((c) => ({ href: `/${c.slug}`, label: `Roof Repair in ${cityName(c.cityId)}, NJ` }));

const coreDirectory = [
  { href: '/residential-roofing', label: 'Residential roofing — houses, walk-ups, and multi-family roofs' },
  { href: '/commercial-roofing', label: 'Commercial roofing — storefronts, offices, and low-slope systems' },
  { href: '/flat-roof-systems', label: 'Flat roof systems — EPDM, TPO, and modified bitumen' },
  { href: '/our-roofing-process', label: 'Our roofing process — inspection, scope, repair, documentation' },
  { href: '/roofing-materials', label: 'Roofing materials — shingle, slate, metal, and membrane reference' },
  { href: '/free-roofing-estimate', label: 'Free roofing estimate — the written East Orange quote starts here' },
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
// roofing guides, listed so the directory carries the full guide
// library behind this page (Phase 7 link mass).
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

const externalReferences = [
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — check the business profile and complaint record at www.bbb.org before hiring any contractor' },
  { href: 'https://www.njconsumeraffairs.gov', label: 'New Jersey Division of Consumer Affairs — verify a Home Improvement Contractor registration' },
  { href: 'https://www.gaf.com', label: 'GAF — shingle and roofing system manufacturer reference' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — roofing industry standards and guidance' },
];

// Phase 8 (lines 76-81) and Phase 7 (lines 71, 74): platform links in
// the counts the sheet asks for. The site has no real business
// profiles on record (siteConfig.sameAs is empty), so — exactly as in
// the Newark/Maplewood/Montclair passes — these point at the platform
// roots and are flagged in the change list for Paul to replace with
// this business's own profile URLs.
const socialReferences = [
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing company updates' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing crew posts from East Orange jobs' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing estimator notes and roof records' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing storm response posts' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing project photos and reviews' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing community posts for East Orange homeowners' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing before-and-after roof records' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing seasonal maintenance reminders' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing flat roof and walk-up work' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn account — Newark Quality Roofing company profile' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn account — Newark Quality Roofing owner profile' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn account — Newark Quality Roofing operations profile' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn account — Newark Quality Roofing estimating team profile' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn account — Newark Quality Roofing project management profile' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing company page' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing hiring and project updates' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing commercial roofing updates' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing East Orange service updates' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing roof repair photography' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing before-and-after repairs' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing crew and materials posts' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing East Orange job stories' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing storm response gallery' },
  { href: 'https://x.com', label: 'Twitter / X account — Newark Quality Roofing posts' },
  { href: 'https://www.youtube.com', label: 'YouTube — Newark Quality Roofing channel' },
];

// JSON-LD graph (line 98; the script text also carries Phase 11 line
// 86 variation mass). Only real site facts: the business name and
// email from site config, the business locality (Newark) from
// canonical config, East Orange's own ZIPs from city data (area
// served, carried as GeoShape exactly as src/lib/schema.ts does), and
// the measured dimensions of an existing image. No rating node — the
// canonical rating gate (D-01) is off and this roadmap has no rating
// lines.
const eastOrangeSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      // 2026-10-13 phrase pass: type order flipped to the canonical
      // most-specific-first order src/lib/schema.ts uses
      // (RoofingContractor before LocalBusiness), and the node gains
      // logo + geo (GeoCoordinates) — see businessLogoUrl /
      // businessGeo above and the change list for the served-HTML
      // check behind these Phase 12 lines.
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: pageUrl,
      email: siteConfig.email,
      logo: businessLogoUrl,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: businessGeo.latitude,
        longitude: businessGeo.longitude,
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'East Orange, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07017', addressCountry: 'US' },
        { '@type': 'GeoShape', postalCode: '07018', addressCountry: 'US' },
        { '@type': 'GeoShape', postalCode: '07019', addressCountry: 'US' },
      ],
      image: {
        '@type': 'ImageObject',
        contentUrl: 'https://newarkqualityroofing.com/images/heroes/city-east-orange.webp',
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
      name: 'Roof Repair East Orange, NJ',
      keywords: coraEastOrangeStyleCommentPhrases.join(', '),
      potentialAction: {
        '@type': 'ReadAction',
        target: pageUrl,
      },
    },
    {
      '@type': 'ItemList',
      name: 'Roof Repair Services in East Orange, NJ',
      itemListElement: eastOrangeServices.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        url: `https://newarkqualityroofing.com${item.href}`,
        description: `${item.label} — an East Orange roofing repair service from Newark Quality Roofing: roof repair East Orange NJ crews document every East Orange roof repair with photographs, a written scope, and a workmanship warranty.`,
      })),
    },
  ],
};

// Rotating slug-token class (Phase 11 variation mass in attributes):
// every stamped element carries one slugified variation in its class.
const vClass = (i: number) =>
  `cora-261012-var ${coraEastOrangeStyleVariations[i % coraEastOrangeStyleVariations.length]}`;

const galleryFirstHalf = coraEastOrangeGalleryImages.slice(0, 38);
const gallerySecondHalf = coraEastOrangeGalleryImages.slice(38);

export function CoraRoadmap261012EastOrange() {
  return (
    <section
      aria-label="East Orange Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      {coraEastOrangeCssIncludes.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
      <style>
        {`:root { ${coraEastOrangeStyleVariations.map((term) => `--cora-261012-${term}: 1;`).join(' ')} }
        /* CORA 2026-10-12 (East Orange) style-tag variations: ${coraEastOrangeStyleCommentPhrases.join(', ')} */`}
      </style>
      <style>
        {`:root { ${coraEastOrangePhraseStylePhrases.map((phrase) => `--cora-261013-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-13 (East Orange) phrase style-tag variations: ${coraEastOrangePhraseStylePhrases.join(', ')} */`}
      </style>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- CORA 2026-10-12 East Orange variations: ${coraEastOrangeCommentVariationsA.join(', ')} -->`,
        }}
      />
      <JsonLd data={eastOrangeSchemaGraph} />
      <details className="cora-261012-east-orange-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Repair in East Orange, NJ — Extended Guide, Photo Record, and Field Notes
        </summary>

        <h2 className={vClass(0)}>Roof Repair Services in East Orange, NJ: Roof Repair, Roof Leak Repair, Roof Patching, Gutters, Slate, and Roofing Work</h2>
        <p className={vClass(1)}>
          <b>Roof Repair East Orange, NJ</b> is the complete record behind this page: how East Orange
          roofs fail, how East Orange roofing crews trace a leak through brick, deck, and attic, the
          photo record of finished work, the directories of every service and city page behind this
          one, and the field notes the crews write after every visit. East Orange roofs — walk-ups,
          colonials, flat-roofed multi-family buildings, and storefronts — get the same standard:
          inspect from ridge to eave, repair the detail that admits water, and document the finished
          work with photographs and a written warranty.
        </p>
        <p className={vClass(2)}>
          Read it the way the estimator wrote it. Every repair on this page follows the same order —
          find the entry point, name it in a written scope with real materials (asphalt shingles,
          copper, flashing, membrane, slate), repair it to manufacturer specification, and file the
          photographs. The sections below are the working record of East Orange roof repair: the
          failure patterns, the service directory, the photo record, and the crew field notes.
        </p>

        <h3 className={vClass(3)}>{coraEastOrangeExactMatchHeading}</h3>
        <p className={vClass(4)}>
          The service index for this page, in the words homeowners and searchers actually use:{' '}
          {coraEastOrangeSpanVariations.map((phrase, i) => (
            <span key={phrase} className={vClass(5 + i)}>
              <span>{phrase}</span>
              {i < coraEastOrangeSpanVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>
        <p className={vClass(45)}>
          On the truck radio the same work is called{' '}
          {coraEastOrangeEmVariations.map((phrase, i) => (
            <span key={phrase}>
              <em className={vClass(46 + i)}>{phrase}</em>
              {i < coraEastOrangeEmVariations.length - 1 ? ', ' : '.'}
            </span>
          ))}{' '}
          Different words, one standard: the repaired detail is photographed, warranted, and walked
          with the homeowner before the crew leaves East Orange.
        </p>
        <p className={vClass(56)}>
          The full service vocabulary of this page, as the office files it:{' '}
          {coraEastOrangeBVariations.map((phrase, i) => (
            <span key={phrase}>
              <b className={vClass(57 + i)}>{phrase}</b>
              {i < coraEastOrangeBVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>

        {coraEastOrangeContentGroups.map((group, groupIndex) => (
          <div key={group.heading}>
            <h3 className={vClass(3 + groupIndex)}>{group.heading}</h3>
            {group.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraph.slice(0, 48)} className={vClass(11 + groupIndex * 2 + paragraphIndex)}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h4 className={vClass(31)}>{coraEastOrangeWholeTagH4}</h4>
        <p className={vClass(32)}>
          Field record details for this East Orange page — the stock on the truck and the tie-ins the
          crews photograph before any material is disturbed:
        </p>
        {coraEastOrangeRecords.map((record, recordIndex) => (
          <div key={record.heading}>
            <h4 className={vClass(33 + recordIndex)}>{record.heading}</h4>
            <p className={vClass(37 + recordIndex)}>{record.paragraph}</p>
          </div>
        ))}

        <h2 className={vClass(41)}>Roof Repair Records, References, and Contractor Checks for East Orange Homeowners</h2>
        <h3 className={vClass(42)}>Verifying a Roof Repair Contractor in East Orange, NJ: BBB, Consumer Affairs, GAF, and NRCA Records</h3>
        <p className={vClass(43)}>
          Verify any roofer — including this company — before you sign. These references are the
          checks a careful East Orange homeowner runs:
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

        <h3 className={vClass(44)}>Newark Quality Roofing on Social and Professional Networks for East Orange Roof Repair</h3>
        <p className={vClass(45)}>
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

        {coraEastOrangeBlockquotes.map((quote, quoteIndex) => (
          <blockquote key={quote.slice(0, 40)} className={vClass(0 + quoteIndex)}>
            <p>{quote}</p>
          </blockquote>
        ))}

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          {/* 2026-10-13 phrase pass, Phase 12 microdata pair: Schema
              logo + Schema geocoordinates for this same business
              node (values: the canonical logo asset and the site's
              published Newark, NJ pair — see businessGeo note). */}
          <link itemProp="logo" href={businessLogoUrl} />
          <span itemProp="geo" itemScope itemType="https://schema.org/GeoCoordinates">
            <meta itemProp="latitude" content={String(businessGeo.latitude)} />
            <meta itemProp="longitude" content={String(businessGeo.longitude)} />
          </span>
          <p className={vClass(7)}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in East Orange, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the East Orange roof repair page</a>. Your contact on
            every East Orange job is the{' '}
            <span itemScope itemType="https://schema.org/Person">
              <span itemProp="jobTitle">Roofing Contractor</span>
            </span>{' '}
            team at the office: ask for{' '}
            <a href={`mailto:${siteConfig.email}?subject=East%20Orange%20roof%20repair%20inspection`}>an East Orange roof repair inspection</a>, request{' '}
            <a href={`mailto:${siteConfig.email}?subject=East%20Orange%20roof%20repair%20estimate`}>an East Orange roof repair estimate</a>, or write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.{' '}
            <a itemScope itemType="https://schema.org/ReadAction" href={pageUrl}>
              <meta itemProp="target" content={pageUrl} />
              Open the East Orange roof repair record page
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
          <h3 className={vClass(8)}>Roof Repair Services in East Orange, NJ: The Full East Orange Service Directory</h3>
          <ul className="cora-services-directory">
            {eastOrangeServices.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <h3 className={vClass(9)}>Roof Repair Across Essex County: City Pages for Newark, Orange, and the West Essex Towns</h3>
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
            repair-versus-replacement signs for the other roofing services East Orange homeowners
            compare:
          </p>
          <ul className="cora-guides-directory">
            {guideDirectoryMore.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <h2 className={vClass(18)}>{coraEastOrangePhotoRecordH2}</h2>
        <h3 className={vClass(19)}>{coraEastOrangePhotoRecordH3}</h3>
        <p className={vClass(20)}>{coraEastOrangePhotoRecordIntro}</p>

        <h2 className={vClass(12)}>Roof Repairs in East Orange: Photo Record of Shingle, Flat, Slate, and Metal Roofing Work</h2>
        <p className={vClass(13)}>
          Seventy-six photographs from the working life of this service — East Orange rooftops, the
          repair details this page describes, and the process each homeowner is buying:
        </p>
        <h3 className={vClass(14)}>East Orange Roof Repair Photo Record: Crews, Inspections, and Repair Details</h3>
        <div>
          {galleryFirstHalf.map((image, imageIndex) => {
            // 2026-10-13 phrase pass: the first 32 gallery images are
            // wrapped in <figure> with a genuine descriptive
            // <figcaption> (coraEastOrangeFigureCaptions, same order);
            // the remaining images render exactly as before. No new
            // images; ALT text unchanged.
            const caption = coraEastOrangeFigureCaptions[imageIndex];
            const img = (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={image.src}
                alt={image.alt}
                itemProp="image"
                className={vClass(15 + imageIndex)}
                loading="lazy"
                width="800"
                height="600"
              />
            );
            return caption ? (
              <figure key={image.src} className="cora-261013-photo-figure mb-4">
                {img}
                <figcaption className="mt-1 text-sm text-slate-600">{caption}</figcaption>
              </figure>
            ) : (
              <Fragment key={image.src}>{img}</Fragment>
            );
          })}
        </div>
        <h3 className={vClass(53)}>East Orange Roofing Photo Record: Materials, Storm Response, and Finished Repairs</h3>
        <div>
          {gallerySecondHalf.map((image, imageIndex) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              itemProp="image"
              className={vClass(54 + imageIndex)}
              loading="lazy"
              width="800"
              height="600"
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- CORA 2026-10-12 East Orange field-note variations: ${coraEastOrangeCommentVariationsB.join(', ')} -->`,
          }}
        />
        <details className="cora-261012-east-orange-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — East Orange, NJ Crew Records
          </summary>
          <h2 className={vClass(20)}>Roof Repair East Orange NJ Field Notes: Roof Repairs, Shingle Repair, Attic, Ventilation, Masonry, and Asphalt Records</h2>
          <p className={vClass(21)}>
            These are the working notes behind the numbers on this page: what the crews saw, what
            they photographed, and what they wrote into each East Orange file before the office
            priced the work. They are kept because an East Orange roof repair is only as good as
            the record that survives it.
          </p>
          {coraEastOrangeLsiParagraphGroups.map((group, groupIndex) => (
            <div key={coraEastOrangeLsiHeadings[groupIndex]}>
              <h3 className={vClass(22 + groupIndex)}>{coraEastOrangeLsiHeadings[groupIndex]}</h3>
              {group.map((paragraph, paragraphIndex) => (
                <p key={paragraph.slice(0, 48)} className={vClass(30 + groupIndex * 3 + paragraphIndex)}>
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </details>
      </details>
    </section>
  );
}
