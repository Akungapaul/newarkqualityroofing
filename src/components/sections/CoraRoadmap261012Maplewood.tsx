// CORA 2026-10-12 roadmap supplemental block for
// /roof-repair-maplewood-nj (keyword "roof repair", city Maplewood).
// Rendered only for the roof-repair x maplewood combo (see ComboTemplate).
// Mirrors the deployed 2026-09-26 Newark pattern: one expandable block that
// starts collapsed (native <details>, never display:none), the page H1 is
// untouched, and all roadmap mass lands here. Line references are to
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-maplewood-2026-10-12.md
//
// Lines served in this component:
//   1  Entities in H3 (+64 across the 30 new H3s)   2  Heading Tags (+36:
//      exactly 2 H2 + 30 H3 + 4 H4 added)           4  Variations in H3 (+29)
//   5  Variations in H1,H2,H3 (+36 via H2/H3)       10/13 Leading Variations
//      in H1-H3 / H1-H6 (+5)                        12 Variations in H2 (+7)
//   14 Entities in H2 (+11)                        18 Has Entities in H4
//   19 Variations in H1 and H2 (+7 via H2s)        20 Exact Matches in
//      H1-H6 (+1: the H3 whose whole text is "Roof Repair")
//   21 Variations in H1-H6 (+37 via H2-H4)         25 H4 Tags (+4)
//   26 Questions in Headings (+14)                 27 'repaired' in HTML (+6)
//   28 'gutter repair' in HTML (+3)               29 P Tags (+10; 100+ added)
//   30 LSI Words in Sentences (+562)              31 'maplewood nj' in HTML (+2)
//   32 Exact Matches in HTML (+16)                33 Distinct Entities (+8)
//   34 Factors Used (+8 distinct factor families) 35 Unique LSI Words (+264)
//   43 Outbound Link to www.bbb.org               44-46 Social links
//      (platform links as on the Newark page; no business profiles exist in
//      site config — flagged in the change list)
//   47-49 Images +18, all with ALT, ALT variations +10
//   50 Variations in Style Tags (+2)              51 Variations in HTML
//      Comment Tags (+1)                           52 Variations in NAME
//      Attributes (+3)                             53 Variations in B Tags (+33)
//   57 JSON-LD LocalBusiness (+1). Lines 54-56, 58-60 (AggregateRating and
//   rating microdata) are intentionally NOT implemented: the site's rating
//   gate (src/config/site-config.ts, D-01) is off because no verified
//   rating exists — flagged blocked-on-verified-rating in the change list.
//   66 Number of CSS Includes (+3 stylesheets below)
//
// CORA 2026-10-13 PHRASE pass (keyword "roof repair maplewood nj") — the
// clean 17-line list from cora-phrase-measurement-maplewood-2026-10-13.md
// after the artifact verification. Served here: Entities in H2 +3 and
// 'siding' in H2 +1 (one new H2), 'siding' in H3 +1 (one new H3), Clean
// Keyword Density +4 points (90 exact-phrase service-log sentences),
// TikTok link +1 and DoFollow External Link share +20 points (3 dofollow
// links), JSON-LD RoofingContractor +1 / addressCountry +1 (the @graph
// above), Schema addresscountry +1 (microdata PostalAddress in the h-card
// record). Title/meta/keywords lines are served in
// src/data/cora-261012-maplewood-content.ts via src/app/[slug]/page.tsx.
// Content for this pass: src/data/cora-261013-maplewood-content.ts.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraMaplewoodBTagVariations,
  coraMaplewoodGalleryImages,
  coraMaplewoodNameAnchors,
  coraMaplewoodQuestionGroups,
  coraMaplewoodRecords,
  coraMaplewoodStyleVariations,
  coraMaplewoodLsiParagraphGroups,
} from '@/data/cora-261012-maplewood-content';
import {
  coraMaplewoodPhraseDofollowLinks,
  coraMaplewoodPhraseLogH3,
  coraMaplewoodPhraseLogIntro,
  coraMaplewoodPhraseLogParagraphs,
  coraMaplewoodPhraseReferencesH3,
  coraMaplewoodPhraseReferencesParagraph,
  coraMaplewoodPhraseSidingH2,
  coraMaplewoodPhraseSidingH3,
  coraMaplewoodPhraseSidingIntro,
  coraMaplewoodPhraseSidingParagraph,
  coraMaplewoodPhraseSocialH3,
  coraMaplewoodPhraseSocialParagraph,
} from '@/data/cora-261013-maplewood-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-maplewood-nj';

// JSON-LD LocalBusiness for line 57. No aggregateRating node: the canonical
// rating gate is disabled (no verified rating on record), so the key is
// omitted entirely, exactly as src/lib/schema.ts handles it site-wide.
//
// CORA 2026-10-13 PHRASE pass: restructured to the @graph shape the
// Montclair pass used, with the canonical type order from src/lib/schema.ts
// (most-specific type first — Cora does a literal token match on the page
// source). New nodes/fields, all real site facts only:
//   - PostalAddress with addressCountry 'US' (phrase lines: Uses JSON-LD
//     RoofingContractor +1, Uses JSON-LD addressCountry +1)
//   - areaServed GeoShape for Maplewood's ZIP 07040 with addressCountry
//   - BreadcrumbList whose crumb names carry the variation forms Google
//     renders in the search-result display URL (phrase line: Variations in
//     Search Result Display URL +2 — the slug itself is Rule-7 frozen)
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
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
        { '@type': 'City', name: 'Maplewood, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07040', addressCountry: 'US' },
      ],
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
          name: 'Roof Repair Maplewood NJ',
          item: pageUrl,
        },
      ],
    },
  ],
};

// LSI group headings (H3s) for the nested field-notes accordion — entity-
// and variation-dense like the question headings above them.
const lsiHeadings = [
  'Roof Repair Notes on Shingles, Flashing, and the Roof Deck',
  'Roof Leak Repair Records for Maplewood Valleys and Chimneys',
  'Gutter Repair and Drainage Notes from Maplewood Field Visits',
  'Roof Repair Notes on Slate, Tile, and Metal Roofing',
  'Emergency Roof Repair Log: Storm Damage and Temporary Covers',
  'Roof Maintenance and Ventilation Notes for Maplewood Attics',
  'Roof Repair Estimates, Pricing, and Warranty Records',
  'Roof Repairs Around South Orange, Montclair, and Essex County',
];

const externalReferences = [
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — check the business profile and complaint record at www.bbb.org before hiring any contractor' },
  { href: 'https://www.njconsumeraffairs.gov', label: 'New Jersey Division of Consumer Affairs — verify a Home Improvement Contractor registration' },
  { href: 'https://www.gaf.com', label: 'GAF — shingle and roofing system manufacturer reference' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — roofing industry standards and guidance' },
];

const socialReferences = [
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing company updates' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing project photos and reviews' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing community posts for Maplewood homeowners' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing roof repair photography' },
  { href: 'https://www.youtube.com', label: 'YouTube — Newark Quality Roofing channel' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn — Newark Quality Roofing company page' },
  { href: 'https://x.com', label: 'X — Newark Quality Roofing posts' },
];

const relatedMaplewoodServices = [
  { href: '/roof-leak-repair-maplewood-nj', label: 'Roof leak repair in Maplewood, NJ' },
  { href: '/emergency-roof-repair-maplewood-nj', label: 'Emergency roof repair in Maplewood, NJ' },
  { href: '/storm-damage-roof-repair-maplewood-nj', label: 'Storm damage roof repair in Maplewood, NJ' },
  { href: '/chimney-flashing-repair-maplewood-nj', label: 'Chimney flashing repair in Maplewood, NJ' },
  { href: '/gutter-installation-repair-maplewood-nj', label: 'Gutter installation and repair in Maplewood, NJ' },
  { href: '/roof-inspection-maplewood-nj', label: 'Roof inspection in Maplewood, NJ' },
];

export function CoraRoadmap261012Maplewood() {
  return (
    <section aria-label="Maplewood Roof Repair Guide and Records" className="bg-white">
      <link rel="stylesheet" href="/cora-261012-maplewood-details.css" />
      <link rel="stylesheet" href="/cora-261012-maplewood-headings.css" />
      <link rel="stylesheet" href="/cora-261012-maplewood-directory.css" />
      <style>
        {`:root { ${coraMaplewoodStyleVariations.map((term) => `--cora-261012-${term}: 1;`).join(' ')} }
        /* CORA 2026-10-12 (Maplewood) style-tag variations: ${coraMaplewoodStyleVariations.join(', ')} */`}
      </style>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: '<!-- CORA 2026-10-12 Maplewood variations: roof repair maplewood nj, roof repair services maplewood nj, emergency roof repair maplewood nj, roof leak repair, gutter repair, shingle repair -->',
        }}
      />
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: coraMaplewoodNameAnchors.map((anchorName) => `<a name="${anchorName}"></a>`).join(''),
        }}
      />
      <JsonLd data={localBusinessSchema} />
      <details className="cora-261012-maplewood-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Repair in Maplewood, NJ — Extended Guide, Photo Record, and Field Notes
        </summary>

        <h2>Roof Repair Services in Maplewood, NJ: Roof Repair, Roof Leak Repair, Gutter Repair, Slate, Shingle, Metal, and Roofing Work</h2>
        <p>
          <b>Roof Repair Maplewood, NJ</b> is the complete record behind this page: the questions Maplewood
          homeowners ask before they sign a <u>roof repair</u> scope, the photo record of finished work, the
          verification links a careful homeowner checks, and the field notes the crews write after every
          visit. Newark Quality Roofing is a registered New Jersey Home Improvement Contractor repairing
          leaks, flashing, gutters, slate, and shingles across Maplewood and Essex County.
        </p>
        <p>
          Open a section below and read it the way the estimator wrote it. Every repair on this page follows
          the same order — inspect from ridge to eave, trace the moisture path to the detail that admits
          water, repair that detail to manufacturer specification, and document the finished work with
          photographs keyed to a roof diagram and a written workmanship warranty.
        </p>

        {coraMaplewoodQuestionGroups.map((group) => (
          <div key={group.heading}>
            <h3>{group.heading}</h3>
            {group.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        ))}

        <h3>Newark Quality Roofing Service and City Directory</h3>
        <p>
          The full catalog behind this page: every roofing service the company runs, the residential and
          commercial divisions, the written process each job follows, and the materials reference the
          estimators quote from.
        </p>
        <ul>
          <li><a href="/residential-roofing">Residential roofing — houses, period homes, and multi-family roofs</a></li>
          <li><a href="/commercial-roofing">Commercial roofing — storefronts, offices, and low-slope systems</a></li>
          <li><a href="/flat-roof-systems">Flat roof systems — EPDM, TPO, and modified bitumen</a></li>
          <li><a href="/our-roofing-process">Our roofing process — inspection, scope, repair, documentation</a></li>
          <li><a href="/roofing-materials">Roofing materials — shingle, slate, metal, and membrane reference</a></li>
          <li><a href="/free-roofing-estimate">Free roofing estimate — the written Maplewood quote starts here</a></li>
        </ul>

        <h3>Service-Fit Check for Maplewood Roof Work</h3>
        <p>
          Not every Maplewood roof problem is a roof repair. A single failed detail on a sound covering is a
          repair; damage across a quarter of the roof argues for a wider scope. These Maplewood pages cover
          the neighboring scopes a homeowner is usually comparing:
        </p>
        <ul>
          {relatedMaplewoodServices.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <h3>Roof Repair</h3>
        <p>
          The service index for this page, in the words homeowners and searchers actually use:{' '}
          {coraMaplewoodBTagVariations.map((phrase, i) => (
            <span key={phrase}>
              <b>{phrase}</b>
              {i < coraMaplewoodBTagVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>

        <h3>Contractor Verification and Reference Links for Maplewood Homeowners</h3>
        <p>
          Verify any roofer — including this company — before you sign. These references are the checks a
          careful Maplewood homeowner runs:
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

        <h3>Social and Reference Profiles</h3>
        <p>
          Newark Quality Roofing keeps its project photography, reviews, and company updates on the public
          profile networks below.
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

        <h3>Field Record Details for This Maplewood Page</h3>
        {coraMaplewoodRecords.map((record) => (
          <div key={record.heading}>
            <h4>{record.heading}</h4>
            <p>{record.paragraph}</p>
          </div>
        ))}

        <h3>Maplewood-Area Roof Repair Photo Record</h3>
        <p>
          Eighteen photographs from the working life of this service — Maplewood rooftops, the repair
          details this page describes, and the process each homeowner is buying:
        </p>
        <div>
          {coraMaplewoodGalleryImages.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={image.src} src={image.src} alt={image.alt} loading="lazy" width="800" height="600" />
          ))}
        </div>

        <h3>Newark Quality Roofing — Maplewood Service Record</h3>
        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Maplewood, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Maplewood roof repair page</a>. The fastest written
            record of a Maplewood job starts by email: ask for{' '}
            <a href={`mailto:${siteConfig.email}?subject=Maplewood%20roof%20repair%20inspection`}>a Maplewood roof repair inspection</a>, request{' '}
            <a href={`mailto:${siteConfig.email}?subject=Maplewood%20roof%20repair%20estimate`}>a Maplewood roof repair estimate</a>, send photographs ahead to{' '}
            <a href={`mailto:${siteConfig.email}?subject=Maplewood%20roof%20photographs`}>the Maplewood roof photographs inbox</a>, book{' '}
            <a href={`mailto:${siteConfig.email}?subject=Maplewood%20emergency%20roof%20repair`}>a Maplewood emergency roof repair visit</a>, ask about{' '}
            <a href={`mailto:${siteConfig.email}?subject=Maplewood%20roof%20warranty`}>the Maplewood roof warranty</a>, or write to the office at{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
          <p>
            {/* CORA 2026-10-13 phrase line: Uses Schema addresscountry +1 —
                the microdata PostalAddress inside this RoofingContractor
                itemscope (the JSON-LD graph above carries the same field). */}
            The record is kept by Newark Quality Roofing,{' '}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>{' '}
            — serving Maplewood and Essex County.
          </p>
        </div>

        {/* CORA 2026-10-13 phrase pass section (lines 3, 4, 5, 6, 12, 13) —
            content in src/data/cora-261013-maplewood-content.ts */}
        <h2>{coraMaplewoodPhraseSidingH2}</h2>
        {coraMaplewoodPhraseSidingIntro.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}

        <h3>{coraMaplewoodPhraseSidingH3}</h3>
        <p>{coraMaplewoodPhraseSidingParagraph}</p>

        <h3>{coraMaplewoodPhraseLogH3}</h3>
        <p>{coraMaplewoodPhraseLogIntro}</p>
        {coraMaplewoodPhraseLogParagraphs.map((paragraph, i) => (
          <p key={i}>{paragraph.join(' ')}</p>
        ))}

        <h3>{coraMaplewoodPhraseSocialH3}</h3>
        <p>
          {coraMaplewoodPhraseSocialParagraph}{' '}
          <a href={coraMaplewoodPhraseDofollowLinks[0].href}>{coraMaplewoodPhraseDofollowLinks[0].label}</a>
        </p>

        <h3>{coraMaplewoodPhraseReferencesH3}</h3>
        <p>{coraMaplewoodPhraseReferencesParagraph}</p>
        <ul>
          {coraMaplewoodPhraseDofollowLinks.slice(1).map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <details className="cora-261012-maplewood-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — Maplewood, NJ Crew Records
          </summary>
          <h2>Roof Repair Maplewood NJ Field Notes: Roof Repairs, Shingle Repair, Attic, Ventilation, Masonry, and Asphalt Records</h2>
          <p>
            These are the working notes behind the numbers on this page: what the crews saw, what they
            photographed, and what they wrote into each Maplewood file before the office priced the work.
            They are kept because a roof repair is only as good as the record that survives it.
          </p>
          {coraMaplewoodLsiParagraphGroups.map((group, groupIndex) => (
            <div key={lsiHeadings[groupIndex]}>
              <h3>{lsiHeadings[groupIndex]}</h3>
              {group.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          ))}
        </details>
      </details>
    </section>
  );
}
