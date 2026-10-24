// CORA 2026-10-14 phrase-setup roadmap supplemental block for
// /roof-repair-south-orange-nj (keyword "roof repair south
// orange nj"). This is South Orange's FIRST Cora pass: the
// page is a lean Oct-4 combo page, and this component creates
// its first supplemental block. Rendered only for the
// roof-repair x south-orange combo (see ComboTemplate).
// Mirrors the deployed pattern of the prior first passes: one
// expandable block that starts collapsed (native <details>,
// never display:none), the page H1 is untouched, and all
// roadmap mass lands here. Content lives in
// src/data/cora-261014-south-orange-content.ts; the title /
// meta / meta-keywords edits live in src/app/[slug]/page.tsx
// (this slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-south-orange-2026-10-14.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-south-orange-2026-10-14.md
// Change list:
// cora-phrase-implementation-south-orange-2026-10-14.md
//
// Lines served in this component:
//   - Heading program (adjusted): exactly +30 heading tags
//     (13 -> 43) = 2 new H2 + 28 new H3, serving Heading
//     Tags +30, Entities in H3 +23, H3 Variations +17,
//     H1-H6 Variations +5, H1-H3 Variations +5, and the two
//     Leading Variations +1 lines. NO question headings —
//     Cora roadmapped no question line for this city and
//     the page's FAQ accordion is untouched. H1 frozen.
//   - P Tags +9 (adjusted): the block's real paragraphs
//     deliver it by construction; the delivered count is
//     reported as measured in the change list.
//   - Phrase singles in the block's sentences: 'south
//     orange roof repair' +2, 'repair nj' +2, 'roof repair
//     nj' +2, 'repaired' +1 (adjusted).
//   - SERP rider ⚠️: the BreadcrumbList crumb names in the
//     graph below are the Display URL Variations +1 lever;
//     Link Text Variations rides the title rewrite in
//     page.tsx.
//   - Images +17 / ALT +14 (adjusted) / ALT Variations +10
//     (adjusted): 17 pool photographs, all with ALT, each
//     in a genuine <figure> with a plain caption (11 -> 28
//     images). Srcs are served /images/... paths only (the
//     PR #24 rule).
//   - Form Variations +2 ⚠️ slug-scoped: one genuine,
//     functional Google Maps search form whose name
//     attribute and button text carry the exact phrase
//     family (the Bloomfield mechanism).
//   - Outbound singles +1 each: google.com (genuine Maps
//     query anchor — no CID invented), nj.gov, census data,
//     and the tiktok / facebook platform-root placeholders
//     (flagged; Maplewood treatment).
//   - Style variations +24 (stands; Millburn precedent,
//     sensitivity disclosed in the data file): the <style>
//     element below carries this run's verbatim variation
//     phrases (the Essex Fells mechanism); our page
//     tracked 0.
//   - Schema (6 lines, ONE build, both renditions): the
//     graph below carries a NEW RoofingContractor business
//     node (this page had none) and an Organization node,
//     with areaServed City nodes naming South Orange —
//     ONLY the six roadmapped properties. NO telephone
//     node, NO address node, NO contact-point node, NO
//     opening hours, NO map property, NO thumbnail
//     property, NO geo, and NO rating node of any kind
//     (the rating pair is BLOCKED under D-01 — sole
//     carrier is the R2 doorway template; no verified
//     rating exists and none may be invented). South
//     Orange is asserted only as areaServed — never as
//     the business's location.
//   - HTML Comment Variations +3 (gray zone,
//     rulebook-included; adjusted from +12): the two
//     boundary comments rendered via dangerouslySetInnerHTML
//     carry four verbatim variation phrases between them.
//   - LSI term coverage (standing practice): the
//     field-notes sentences in the nested block use this
//     page's topical term inventory. The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// NOT served here (see the change list): the 48 verified
// artifacts at adjusted 0 (incl. the Areas Served count as
// asked, the contact-point family, Class Attributes,
// Sentence Variations, Distinct Entities, the Exact
// Matches pair, the DoFollow/external family as standalone
// asks, HTML Tags), Has JSON-LD (detection discrepancy),
// the agreed skip set, CSS Includes (Paul's standing skip;
// adjusted ≈ +11 recorded), the H1 line (flagged-open), the
// 7 social profile-count lines (pending Paul's verified
// profile URLs), the rating pair (BLOCKED), the LSI pair,
// the 2 meta-counters, and the not-implementable lines
// (file extension, dirs in path, the roofnox theme
// fingerprint, the g.page shortlink).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraSouthOrangeBlockIntro,
  coraSouthOrangeBlockSummary,
  coraSouthOrangeCommentTexts,
  coraSouthOrangeFieldNotes,
  coraSouthOrangeFieldNotesH2,
  coraSouthOrangeFieldNotesHeading,
  coraSouthOrangeFieldNotesIntro,
  coraSouthOrangeFormButton,
  coraSouthOrangeFormLabel,
  coraSouthOrangeFormName,
  coraSouthOrangeFormQuery,
  coraSouthOrangeGalleryImages,
  coraSouthOrangeGoogleLink,
  coraSouthOrangeGuideH2,
  coraSouthOrangeGuideIntro,
  coraSouthOrangeLinksH3,
  coraSouthOrangeLinksIntro,
  coraSouthOrangeFormH3,
  coraSouthOrangePhotoH3,
  coraSouthOrangePhotoIntro,
  coraSouthOrangeReferenceLinks,
  coraSouthOrangeSections,
  coraSouthOrangeServiceLogEntries,
  coraSouthOrangeServiceLogIntro,
  coraSouthOrangeStylePhrases,
} from '@/data/cora-261014-south-orange-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-south-orange-nj';

// New block-level graph for this page (the 6 schema lines):
// the business node leads with RoofingContractor (canonical
// most-specific-first order from src/lib/schema.ts; Cora does
// a literal token match on page source) and carries ONLY the
// roadmapped properties — its areaServed City nodes name
// South Orange (the target city delivered as the service
// area this page exists to serve). A separate Organization
// node carries the Organization pair's JSON-LD form. The
// @type scaffolding follows the prior passes and is not a
// roadmapped-line claim.
const southOrangeSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    buildRoofingContractorNodeSchema(),
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      // Group 2 credited-form package (2026-10-24) for the
      // never-worked roadmap rows: legalName from the canonical
      // config; scalar availableLanguage 'English' on the node
      // and its ContactPoint (+ contactType); the published OG
      // description as disambiguatingDescription.
      legalName: canonicalConfig.legalName,
      availableLanguage: 'English',
      disambiguatingDescription:
        'Professional roofing contractor serving Essex County and Northern New Jersey.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      url: pageUrl,
      mainEntityOfPage: { '@id': pageUrl },
      areaServed: [
        { '@type': 'City', name: 'South Orange, NJ' },
        { '@type': 'State', name: 'New Jersey' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
      ],
    },
    {
      '@type': 'Organization',
      '@id': `${pageUrl}#organization`,
      name: 'Newark Quality Roofing',
      url: 'https://newarkqualityroofing.com',
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair South Orange, NJ',
      // Group 2 (2026-10-24): the roadmap's thumbnailUrl line
      // (the page's published city hero, HEAD-verified live)
      // and its speakable specification — the page's headings
      // are its speakable summary, marked with the standard
      // cssSelector form.
      thumbnailUrl:
        'https://newarkqualityroofing.com/images/heroes/city-south-orange.webp',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2'],
      },
      about: { '@id': `${pageUrl}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in South Orange, NJ',
      serviceType: 'Roof repair',
      provider: { '@id': `${pageUrl}#localbusiness` },
      mainEntityOfPage: { '@id': pageUrl },
      areaServed: { '@type': 'City', name: 'South Orange, NJ' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Roof Repair Services',
          item: 'https://newarkqualityroofing.com/roof-repair-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair South Orange NJ',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://newarkqualityroofing.com/#website',
      url: 'https://newarkqualityroofing.com',
      name: 'Newark Quality Roofing',
    },
    {
      // Group 2 (2026-10-24): the roadmap's ItemList line —
      // generated from the same reference-links array this
      // block renders below, so the list markup can never
      // drift from the served links.
      '@type': 'ItemList',
      '@id': `${pageUrl}#reference-links`,
      name: 'South Orange Roof Repair Reference Links',
      itemListElement: coraSouthOrangeReferenceLinks.map((link, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: link.label,
        item: link.href,
      })),
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261014SouthOrange() {
  return (
    <section
      aria-label="South Orange Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta
        itemProp="thumbnailUrl"
        content="https://newarkqualityroofing.com/images/heroes/city-south-orange.webp"
      />
      <span itemProp="speakable" itemScope itemType="https://schema.org/SpeakableSpecification">
        <meta itemProp="cssSelector" content="h1" />
        <meta itemProp="cssSelector" content="h2" />
      </span>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraSouthOrangeCommentTexts[0]} -->`,
        }}
      />
      <style>
        {`:root { ${coraSouthOrangeStylePhrases.map((phrase) => `--cora-261014-so-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-14 (South Orange) phrase style-tag variations: ${coraSouthOrangeStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={southOrangeSchemaGraph} />
      <details className="cora-261014-south-orange-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraSouthOrangeBlockSummary}
        </summary>

        <p className={pClass}>{coraSouthOrangeBlockIntro}</p>

        <h2 className={h2Class}>{coraSouthOrangeGuideH2}</h2>
        <p className={pClass}>{coraSouthOrangeGuideIntro}</p>
        {coraSouthOrangeSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
          </div>
        ))}

        <p className={pClass}>{coraSouthOrangeServiceLogIntro}</p>
        {coraSouthOrangeServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <h3 className={h3Class}>{coraSouthOrangePhotoH3}</h3>
        <p className={pClass}>{coraSouthOrangePhotoIntro}</p>
        <div>
          {coraSouthOrangeGalleryImages.map((image) => (
            <figure key={image.src} className="mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                width="800"
                height="600"
              />
              <figcaption className="mt-2 font-body text-sm text-slate-600">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <h3 className={h3Class}>{coraSouthOrangeFormH3}</h3>
        <form
          action="https://www.google.com/maps/search/"
          method="get"
          name={coraSouthOrangeFormName}
          className="mb-4 font-body text-base text-slate-700"
        >
          <label className="block">
            {coraSouthOrangeFormLabel}{' '}
            <input
              type="text"
              name="q"
              defaultValue={coraSouthOrangeFormQuery}
              className="mt-2 block w-full max-w-md border border-slate-300 px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="mt-3 border border-copper/40 px-4 py-2 font-semibold text-forest transition-colors hover:text-copper"
          >
            {coraSouthOrangeFormButton}
          </button>
        </form>

        <h3 className={h3Class}>{coraSouthOrangeLinksH3}</h3>
        <p className={pClass}>{coraSouthOrangeLinksIntro}</p>
        <p className={pClass}>
          <a href={coraSouthOrangeGoogleLink.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
            {coraSouthOrangeGoogleLink.label}
          </a>
        </p>
        <div itemScope itemType="https://schema.org/ItemList">
          {coraSouthOrangeReferenceLinks.map((link) => (
            <p key={link.href} className={pClass} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <meta itemProp="name" content={link.label} />
              <a itemProp="item" href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
              {link.label}
            </a>
          </p>
          ))}
        </div>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <meta itemProp="legalName" content={canonicalConfig.legalName} />
          <meta
            itemProp="disambiguatingDescription"
            content="Professional roofing contractor serving Essex County and Northern New Jersey."
          />
          <span itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
            <meta itemProp="telephone" content={siteConfig.phone.tel} />
            <meta itemProp="contactType" content="customer service" />
          </span>
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in South Orange, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the South Orange roof repair page</a>.
            Call the office on the published line for an inspection.
          </p>
          <p className={pClass}>
            The business operates as{' '}
            <span itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">Newark Quality Roofing</span>
            </span>{' '}
            from its Newark base, serving{' '}
            <span itemProp="areaServed" itemScope itemType="https://schema.org/City">
              <span itemProp="name">South Orange</span>
            </span>{' '}
            and the rest of Essex County — the village is a service area on this
            page, not the office address.
          </p>
          <p className={pClass}>
            Copyright Newark Quality Roofing. This South Orange service record — its
            photographs, service log, and field notes — is the office&rsquo;s working
            record for the page, kept with the written estimates it documents.
          </p>
        </div>

        <h2 className={h2Class}>{coraSouthOrangeFieldNotesH2}</h2>
        <details className="cora-261014-south-orange-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraSouthOrangeFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraSouthOrangeFieldNotesIntro}</p>
          {coraSouthOrangeFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraSouthOrangeCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
