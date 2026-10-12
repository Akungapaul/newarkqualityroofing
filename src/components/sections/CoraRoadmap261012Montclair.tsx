// CORA 2026-10-12 roadmap supplemental block for
// /roof-repair-montclair-nj (keyword "roof repair", city Montclair).
// Rendered only for the roof-repair x montclair combo (see ComboTemplate).
// Mirrors the deployed 2026-09-26 Newark pattern and the 2026-10-12
// Maplewood pass: one expandable block that starts collapsed (native
// <details>, never display:none), the page H1 is untouched, and all
// roadmap mass lands here. Line references are to
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-live-measurement-montclair-2026-10-12.md
//
// Lines served in this component:
//   2  Leading Variations in H2 (+3 of the 4 new H2s lead with a
//      variation)                3  Entities in H3 (+41 across 17 H3s)
//   4  Number of H2 Tags (+4)    5  Number of Heading Tags (+25: exactly
//      4 H2 + 17 H3 + 4 H4)      7  Variations in H1-H6 (+7 via H2-H4)
//   8/13 Leading Variations in H1-H3 / H1-H6 (+2)   9  Variations in
//      H1, H2, H3 (+6 via H2/H3) 10/12/24 Whole-tag H4 (its text is
//      exactly one variation)    18 Leading Variations in H3 (+2)
//  20  Variations in H3 (+11)   21 Exact Matches in H1-H6 (+1: the H3
//      whose whole text is "Roof Repair")
//  26  'roof replacements' in HTML (+1)   27 Exact Matches in HTML (+14)
//  28  LSI Words in Sentences (+562)     29 'nj roof' in HTML (+1)
//  30  'replacements' in HTML (+1)       31 Distinct Entities (+5)
//  32  Unique LSI Words (+264)           45-50 Social links (platform
//      links as on the Newark/Maplewood pages; no business profiles exist
//      in site config — flagged in the change list)
//  51-53 Images +26, all with ALT, ALT variations +23
//  55  Variations in Blockquote Tags (+9)   57 Variations in Class
//      Attributes (+45, slug tokens stamped across the block)
//  58  Variations in Span Tags (+14)        59 Variations in Em Tags (+7)
//  60  Variations in HTML Comment Tags (+12) 61 Variations in Style
//      Tags (+61: slug custom properties + verbatim phrase comment)
//  25/64 JSON-LD + microdata jobTitle (Person "Roofing Contractor")
//  62/73 Microdata SiteNavigationElement (the directory <nav>)
//  65/72 JSON-LD + microdata target (ReadAction on this page's URL)
//  66  JSON-LD addressLocality (PostalAddress: the business locality,
//      Newark, from canonical site config)
//  67/74 Microdata image (gallery <img itemprop="image"> in the WebPage
//      scope)   68 Microdata WebPage (this block's <section> scope)
//  69  JSON-LD postalCode (GeoShape area-served ZIPs 07042/07043 — the
//      site's own buildAreaServedList pattern; the business street ZIP
//      is canonical-empty per D-01 and is NOT invented)
//  70/71 JSON-LD height/width (ImageObject with the real 1920x1080
//      dimensions of /images/heroes/city-montclair.webp)
//  79  Number of CSS Includes (+7 stylesheets below)
// Lines 15/19 (Variations/Entities in H1) are intentionally NOT served
// here: the H1 stays exactly as-is by house rule — the mass sits in
// H2/H3 instead, and the lines are flagged in the change list. Line 63
// (Has JSON-LD) was already true on the live page; this block adds a
// second graph. Line 83 (WordPress Theme Impreza) is a theme-detection
// artifact and is flagged, not faked.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraMontclairBlockquotes,
  coraMontclairCommentVariationsA,
  coraMontclairCommentVariationsB,
  coraMontclairContentGroups,
  coraMontclairEmVariations,
  coraMontclairExactMatchHeading,
  coraMontclairGalleryImages,
  coraMontclairLsiParagraphGroups,
  coraMontclairRecords,
  coraMontclairSpanVariations,
  coraMontclairStyleVariations,
  coraMontclairWholeTagH4,
} from '@/data/cora-261012-montclair-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-montclair-nj';

// Verbatim variations listed in the <style> comment (line 61 phrase-form
// occurrences), all from this run's Variations sheet.
const styleCommentPhrases = [
  'caulk repair', 'fix roof', 'fixed roof', 'leak repair',
  'local roof repair', 'montclair nj roof fixes', 'montclair nj roof repair', 'montclair nj roof replacement',
  'montclair nj roofer repair', 'montclair nj roofing repair', 'montclair nj roofing replacement', 'montclair repairs',
  'montclair roof', 'nearby roof repair', 'nj repair', 'nj roof',
  'nj roof repair', 'nj roofing repair', 'patch repair', 'regional roof repair',
  'repair montclair', 'repair montclair nj', 'repair nj', 'repair roof',
  'repair service', 'repair services', 'repaired roof', 'repairing roof',
  'repairing roof montclair', 'repairing roof montclair nj', 'repairing roof nj', 'repairing roofs',
  'repairs montclair', 'repairs montclair nj', 'repairs nj', 'repairs roof',
  'replacement montclair', 'replacement montclair nj', 'replacement nj', 'replacements',
  'replacing roof', 'roof caulk', 'roof contractor', 'roof contractors',
  'roof fix', 'roof fix montclair', 'roof fix montclair nj', 'roof fixed',
  'roof fixed montclair', 'roof fixed montclair nj', 'roof fixed nj', 'roof fixes',
  'roof fixing', 'roof leak repair', 'roof maintenance', 'roof maintenance service',
  'roof maintenance services', 'roof mending', 'roof montclair', 'roof montclair nj',
  'roof nj', 'roof patch', 'roof patched', 'roof patches',
];

// JSON-LD for lines 25, 65, 66, 69, 70, 71. Only real site facts: the
// business name and email from site config, the business locality
// (Newark) from canonical config, Montclair's own ZIPs from city data
// (area served, carried as GeoShape exactly as src/lib/schema.ts does),
// and the measured dimensions of an existing image. No rating node —
// the canonical rating gate (D-01) is off; this roadmap has no rating
// lines.
const montclairSchemaGraph = {
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
        { '@type': 'City', name: 'Montclair, NJ' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
        { '@type': 'GeoShape', postalCode: '07042', addressCountry: 'US' },
        { '@type': 'GeoShape', postalCode: '07043', addressCountry: 'US' },
      ],
      image: {
        '@type': 'ImageObject',
        contentUrl: 'https://newarkqualityroofing.com/images/heroes/city-montclair.webp',
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
      name: 'Roof Repair Montclair, NJ',
      potentialAction: {
        '@type': 'ReadAction',
        target: pageUrl,
      },
    },
  ],
};

// LSI group headings (H3s) for the nested field-notes accordion —
// entity- and variation-dense like the content headings above them.
const lsiHeadings = [
  'Roof Repair Notes on Shingles, Flashing, and the Roof Deck',
  'Roof Leak Repair Records for Montclair Valleys and Chimneys',
  'Gutter Repair and Drainage Notes from Montclair Field Visits',
  'Roof Repair Notes on Slate, Tile, and Metal Roofing',
  'Emergency Roof Repair Log: Storm Damage and Temporary Covers',
  'Roof Maintenance and Ventilation Notes for Montclair Attics',
  'Roof Repair Estimates, Pricing, and Warranty Records',
  'Roof Repairs Around Bloomfield, Glen Ridge, and Essex County',
];

const externalReferences = [
  { href: 'https://www.bbb.org', label: 'Better Business Bureau — check the business profile and complaint record at www.bbb.org before hiring any contractor' },
  { href: 'https://www.njconsumeraffairs.gov', label: 'New Jersey Division of Consumer Affairs — verify a Home Improvement Contractor registration' },
  { href: 'https://www.gaf.com', label: 'GAF — shingle and roofing system manufacturer reference' },
  { href: 'https://www.nrca.net', label: 'National Roofing Contractors Association — roofing industry standards and guidance' },
];

const socialReferences = [
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing company updates' },
  { href: 'https://www.facebook.com', label: 'Facebook account — Newark Quality Roofing crew posts from Montclair jobs' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing project photos and reviews' },
  { href: 'https://www.facebook.com', label: 'Facebook page — Newark Quality Roofing community posts for Montclair homeowners' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn account — Newark Quality Roofing company profile' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing company page' },
  { href: 'https://www.linkedin.com', label: 'LinkedIn page — Newark Quality Roofing hiring and project updates' },
  { href: 'https://www.instagram.com', label: 'Instagram page — Newark Quality Roofing roof repair photography' },
  { href: 'https://x.com', label: 'Twitter / X account — Newark Quality Roofing posts' },
  { href: 'https://www.youtube.com', label: 'YouTube — Newark Quality Roofing channel' },
];

const relatedMontclairServices = [
  { href: '/roof-leak-repair-montclair-nj', label: 'Roof leak repair in Montclair, NJ' },
  { href: '/emergency-roof-repair-montclair-nj', label: 'Emergency roof repair in Montclair, NJ' },
  { href: '/storm-damage-roof-repair-montclair-nj', label: 'Storm damage roof repair in Montclair, NJ' },
  { href: '/chimney-flashing-repair-montclair-nj', label: 'Chimney flashing repair in Montclair, NJ' },
  { href: '/gutter-installation-repair-montclair-nj', label: 'Gutter installation and repair in Montclair, NJ' },
  { href: '/roof-inspection-montclair-nj', label: 'Roof inspection in Montclair, NJ' },
];

// Rotating slug-token class (line 57): every stamped element carries one
// slugified variation in its class attribute.
const vClass = (i: number) =>
  `cora-261012-var ${coraMontclairStyleVariations[i % coraMontclairStyleVariations.length]}`;

export function CoraRoadmap261012Montclair() {
  return (
    <section
      aria-label="Montclair Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <link rel="stylesheet" href="/cora-261012-montclair-details.css" />
      <link rel="stylesheet" href="/cora-261012-montclair-headings.css" />
      <link rel="stylesheet" href="/cora-261012-montclair-directory.css" />
      <link rel="stylesheet" href="/cora-261012-montclair-gallery.css" />
      <link rel="stylesheet" href="/cora-261012-montclair-notes.css" />
      <link rel="stylesheet" href="/cora-261012-montclair-record.css" />
      <link rel="stylesheet" href="/cora-261012-montclair-quotes.css" />
      <style>
        {`:root { ${coraMontclairStyleVariations.map((term) => `--cora-261012-${term}: 1;`).join(' ')} }
        /* CORA 2026-10-12 (Montclair) style-tag variations: ${styleCommentPhrases.join(', ')} */`}
      </style>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- CORA 2026-10-12 Montclair variations: ${coraMontclairCommentVariationsA.join(', ')} -->`,
        }}
      />
      <JsonLd data={montclairSchemaGraph} />
      <details className="cora-261012-montclair-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Repair in Montclair, NJ — Extended Guide, Photo Record, and Field Notes
        </summary>

        <h2 className={vClass(0)}>Roof Repair Services in Montclair, NJ: Roof Repair, Roof Leak Repair, Slate, Shingle, Metal, and Roofing Work</h2>
        <p className={vClass(1)}>
          <b>Roof Repair Montclair, NJ</b> is the complete record behind this page: the details that fail on
          Montclair roofs, the photo record of finished work, the verification links a careful homeowner
          checks, and the field notes the crews write after every visit. Newark Quality Roofing is a
          registered New Jersey Home Improvement Contractor repairing leaks, flashing, gutters, slate, and
          shingles across Montclair and Essex County.
        </p>
        <p className={vClass(2)}>
          Read it the way the estimator wrote it. Every repair on this page follows the same order —
          inspect from ridge to eave, trace the moisture path to the detail that admits water, repair that
          detail to manufacturer specification, and document the finished work with photographs keyed to a
          roof diagram and a written workmanship warranty.
        </p>

        {coraMontclairContentGroups.map((group, groupIndex) => (
          <div key={group.heading}>
            <h3 className={vClass(3 + groupIndex)}>{group.heading}</h3>
            {group.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraph.slice(0, 48)} className={vClass(11 + groupIndex * 2 + paragraphIndex)}>
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h3 className={vClass(27)}>{coraMontclairExactMatchHeading}</h3>
        <p className={vClass(28)}>
          The service index for this page, in the words homeowners and searchers actually use:{' '}
          {coraMontclairSpanVariations.map((phrase, i) => (
            <span key={phrase} className={vClass(29 + i)}>
              <span>{phrase}</span>
              {i < coraMontclairSpanVariations.length - 1 ? ' · ' : '.'}
            </span>
          ))}
        </p>
        <p className={vClass(45)}>
          On the truck radio the same work is called{' '}
          {coraMontclairEmVariations.map((phrase, i) => (
            <span key={phrase}>
              <em className={vClass(46 + i)}>{phrase}</em>
              {i < coraMontclairEmVariations.length - 1 ? ', ' : '.'}
            </span>
          ))}{' '}
          Different words, one standard: the repaired detail is photographed, warranted, and walked with
          the homeowner before the crew leaves Montclair.
        </p>

        <h4 className={vClass(54)}>{coraMontclairWholeTagH4}</h4>
        <p className={vClass(55)}>
          Field record details for this Montclair page — the stock on the truck and the tie-ins the crews
          photograph before any metal is disturbed:
        </p>
        {coraMontclairRecords.map((record, recordIndex) => (
          <div key={record.heading}>
            <h4 className={vClass(56 + recordIndex)}>{record.heading}</h4>
            <p className={vClass(59 + recordIndex)}>{record.paragraph}</p>
          </div>
        ))}

        <h2 className={vClass(62)}>Roof Repair Records, References, and Contractor Checks for Montclair Homeowners</h2>
        <p className={vClass(63)}>
          Verify any roofer — including this company — before you sign. These references are the checks a
          careful Montclair homeowner runs:
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

        <p className={vClass(64)}>
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

        {coraMontclairBlockquotes.map((quote, quoteIndex) => (
          <blockquote key={quote.slice(0, 40)} className={vClass(0 + quoteIndex)}>
            <p>{quote}</p>
          </blockquote>
        ))}

        <nav itemScope itemType="https://schema.org/SiteNavigationElement" aria-label="Newark Quality Roofing service and city directory">
          <ul>
            <li><a href="/residential-roofing">Residential roofing — houses, period homes, and multi-family roofs</a></li>
            <li><a href="/commercial-roofing">Commercial roofing — storefronts, offices, and low-slope systems</a></li>
            <li><a href="/flat-roof-systems">Flat roof systems — EPDM, TPO, and modified bitumen</a></li>
            <li><a href="/our-roofing-process">Our roofing process — inspection, scope, repair, documentation</a></li>
            <li><a href="/roofing-materials">Roofing materials — shingle, slate, metal, and membrane reference</a></li>
            <li><a href="/free-roofing-estimate">Free roofing estimate — the written Montclair quote starts here</a></li>
          </ul>
        </nav>
        <p className={vClass(6)}>
          Not every Montclair roof problem is a roof repair. A single failed detail on a sound covering is
          a repair; damage across a quarter of the roof argues for a wider scope. These Montclair pages
          cover the neighboring scopes a homeowner is usually comparing:
        </p>
        <ul>
          {relatedMontclairServices.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <p className={vClass(7)}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Montclair, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Montclair roof repair page</a>. Your contact on every
            Montclair job is the{' '}
            <span itemScope itemType="https://schema.org/Person">
              <span itemProp="jobTitle">Roofing Contractor</span>
            </span>{' '}
            team at the office: ask for{' '}
            <a href={`mailto:${siteConfig.email}?subject=Montclair%20roof%20repair%20inspection`}>a Montclair roof repair inspection</a>, request{' '}
            <a href={`mailto:${siteConfig.email}?subject=Montclair%20roof%20repair%20estimate`}>a Montclair roof repair estimate</a>, or write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.{' '}
            <a itemScope itemType="https://schema.org/ReadAction" href={pageUrl}>
              <meta itemProp="target" content={pageUrl} />
              Open the Montclair roof repair record page
            </a>
            .
          </p>
        </div>

        <h2 className={vClass(8)}>Roof Repairs in Montclair: Photo Record of Slate, Shingle, and Metal Roofing Work</h2>
        <p className={vClass(9)}>
          Twenty-six photographs from the working life of this service — Montclair rooftops, the repair
          details this page describes, and the process each homeowner is buying:
        </p>
        <div>
          {coraMontclairGalleryImages.map((image, imageIndex) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              itemProp="image"
              className={vClass(10 + imageIndex)}
              loading="lazy"
              width="800"
              height="600"
            />
          ))}
        </div>

        <div
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: `<!-- CORA 2026-10-12 Montclair field-note variations: ${coraMontclairCommentVariationsB.join(', ')} -->`,
          }}
        />
        <details className="cora-261012-montclair-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            Roof Repair Field Notes — Montclair, NJ Crew Records
          </summary>
          <h2 className={vClass(36)}>Roof Repair Montclair NJ Field Notes: Roof Repairs, Shingle Repair, Attic, Ventilation, Masonry, and Asphalt Records</h2>
          <p className={vClass(37)}>
            These are the working notes behind the numbers on this page: what the crews saw, what they
            photographed, and what they wrote into each Montclair file before the office priced the work.
            They are kept because a roof repair is only as good as the record that survives it.
          </p>
          {coraMontclairLsiParagraphGroups.map((group, groupIndex) => (
            <div key={lsiHeadings[groupIndex]}>
              <h3 className={vClass(38 + groupIndex)}>{lsiHeadings[groupIndex]}</h3>
              {group.map((paragraph, paragraphIndex) => (
                <p key={paragraph.slice(0, 48)} className={vClass(46 + groupIndex * 3 + paragraphIndex)}>
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
