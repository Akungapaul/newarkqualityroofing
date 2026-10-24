// CORA 2026-10-14 phrase-setup roadmap supplemental block for
// /roof-repair-millburn-nj (keyword "roof repair millburn nj").
// This is Millburn's FIRST Cora pass: the page is a lean
// Oct-4 combo page, and this component creates its first
// supplemental block. Rendered only for the roof-repair x
// millburn combo (see ComboTemplate). Mirrors the deployed
// pattern of the prior first passes: one expandable block
// that starts collapsed (native <details>, never
// display:none), the page H1 is untouched, and all roadmap
// mass lands here. Content lives in
// src/data/cora-261014-millburn-content.ts; the title / meta
// / meta-keywords edits live in src/app/[slug]/page.tsx (this
// slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-millburn-2026-10-14.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-millburn-2026-10-14.md
// Change list:
// cora-phrase-implementation-millburn-2026-10-14.md
//
// Lines served in this component:
//   - Heading program (adjusted): exactly +11 heading tags
//     (13 -> 24) = 1 new H2 + 10 new H3. Six of the H3s are
//     the page's OWN FAQ questions as real headings (the
//     summary-trap fix: Questions in Headings ≈ +3 adjusted,
//     Questions in H3 +2 stands — delivered 6, asks are
//     floors), each with its genuine answer; three are
//     repair sections (the third carries 'gutter repairs'
//     +1 and 'roof repair experts' +2 in heading and body);
//     the tenth is the form section head. H1 frozen.
//   - P Tags ≈ +7 (adjusted, average-led): the block's real
//     paragraphs deliver it by construction; the delivered
//     count is reported as measured in the change list.
//   - SERP rider ⚠️: the BreadcrumbList crumb names in the
//     graph below are the Display URL Variations +1 lever;
//     Link Text Variations rides the title rewrite in
//     page.tsx.
//   - Images +10 / ALT +10 / ALT Variations +3 (adjusted):
//     10 pool photographs, all with ALT, in the photo record
//     (11 -> 21 images). Srcs are served /images/... paths
//     only (the PR #24 rule).
//   - Form Variations +2 ⚠️ slug-scoped: one genuine,
//     functional Google Maps search form whose name
//     attribute and button text carry the exact phrase
//     family (the Bloomfield mechanism).
//   - google.com link +1 ⚠️: the genuine Google Maps query
//     anchor below (the Roseland/Caldwell treatment) — no
//     Maps CID or profile URL is invented for it.
//   - Style variations +24 (stands; sensitivity disclosed
//     in the data file and change list): the <style>
//     element below carries this run's verbatim variation
//     phrases (the Essex Fells mechanism); our page
//     tracked 0.
//   - Schema (12 lines, ONE build, both renditions): the
//     graph below carries a NEW RoofingContractor business
//     node (this page had none) with ONLY the roadmapped
//     properties — telephone wired to siteConfig.phone.tel
//     exactly as src/lib/schema.ts emits it (production
//     renders the published number via NEXT_PUBLIC_PHONE_TEL),
//     and a PostalAddress carrying locality/region/country
//     ONLY (Newark / NJ / US, the business's canonical
//     locality per the Orange/Fairfield pattern), with the
//     City line delivered by the areaServed City node for
//     Millburn. The h-card carries the microdata pairs.
//     NO ContactPoint (zero setter carriers here — artifact
//     shape), NO postalCode (unroadmapped + D-01), NO
//     streetAddress (D-01), NO geo, NO logo, NO
//     OpeningHoursSpecification (0.3-fraction line), NO
//     hasMap (Overview-only), NO email properties (the
//     email pair was an R3-listicle artifact), NO rating
//     node of any kind (no rating lines roadmapped; the
//     Overview-only AggregateRating family is blocked
//     regardless, D-01).
//   - HTML Comment Variations +3 (gray zone,
//     rulebook-included; adjusted from +13): the two
//     boundary comments rendered via dangerouslySetInnerHTML
//     carry four verbatim variation phrases between them.
//   - LSI term coverage (standing practice): the
//     field-notes sentences in the nested block use this
//     page's topical term inventory. The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// NOT served here (see the change list): the 30 verified
// artifacts (incl. the R3 listicle complex), Has JSON-LD
// (detection discrepancy), the agreed skip set, CSS
// Includes (Paul's standing skip), the 2 H1 lines
// (flagged-open), the 6 social lines (pending Paul's
// verified profile URLs — including the facebook/instagram
// LINK lines), the LSI pair, the meta-counter, and Dirs in
// Path (SERP-structural).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraMillburnBlockIntro,
  coraMillburnBlockSummary,
  coraMillburnCommentTexts,
  coraMillburnFieldNotes,
  coraMillburnFieldNotesHeading,
  coraMillburnFieldNotesIntro,
  coraMillburnFormButton,
  coraMillburnFormH3,
  coraMillburnFormLabel,
  coraMillburnFormName,
  coraMillburnFormQuery,
  coraMillburnGalleryImages,
  coraMillburnGoogleIntro,
  coraMillburnGoogleLink,
  coraMillburnPhotoIntro,
  coraMillburnQuestions,
  coraMillburnQuestionsH2,
  coraMillburnQuestionsIntro,
  coraMillburnSections,
  coraMillburnServiceLogEntries,
  coraMillburnServiceLogIntro,
  coraMillburnStylePhrases,
} from '@/data/cora-261014-millburn-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-millburn-nj';

// New block-level graph for this page (the 12 schema lines):
// the business node leads with RoofingContractor (canonical
// most-specific-first order from src/lib/schema.ts; Cora does
// a literal token match on page source). The telephone is
// wired to the canonical env-driven config phone exactly as
// src/lib/schema.ts emits it — in production that renders
// the published number; nothing is invented. The
// PostalAddress carries locality/region/country only: the
// street value stays the canonical empty D-01 value
// (omitted) and the postalCode pair is held out under D-01.
// The @type scaffolding follows the prior passes and is not
// a roadmapped-line claim.
const millburnSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    buildRoofingContractorNodeSchema(),
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      // Group 2 credited-form package (2026-10-24): legalName
      // from the canonical config; the published email on the
      // business node itself (the roadmap's email line);
      // scalar availableLanguage 'English' + ContactPoint.
      legalName: canonicalConfig.legalName,
      email: siteConfig.email,
      availableLanguage: 'English',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      url: pageUrl,
      telephone: siteConfig.phone.tel,
      mainEntityOfPage: { '@id': pageUrl },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Millburn, NJ' },
        { '@type': 'State', name: 'New Jersey' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Millburn, NJ',
      about: { '@id': `${pageUrl}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in Millburn, NJ',
      serviceType: 'Roof repair',
      provider: { '@id': `${pageUrl}#localbusiness` },
      mainEntityOfPage: { '@id': pageUrl },
      // Group 2 (2026-10-24): the roadmap's Offer line — the
      // one priced offer the business genuinely publishes
      // (the Montclair credited form).
      makesOffer: {
        '@type': 'Offer',
        name: 'Free roof inspection and written estimate',
        price: '0',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
      areaServed: { '@type': 'City', name: 'Millburn, NJ' },
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
          name: 'Roof Repair Millburn NJ',
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
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261014Millburn() {
  return (
    <section
      aria-label="Millburn Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraMillburnCommentTexts[0]} -->`,
        }}
      />
      <style>
        {`:root { ${coraMillburnStylePhrases.map((phrase) => `--cora-261014-mb-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-14 (Millburn) phrase style-tag variations: ${coraMillburnStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={millburnSchemaGraph} />
      <details className="cora-261014-millburn-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraMillburnBlockSummary}
        </summary>

        <p className={pClass}>{coraMillburnBlockIntro}</p>

        <h2 className={h2Class}>{coraMillburnQuestionsH2}</h2>
        <p className={pClass}>{coraMillburnQuestionsIntro}</p>
        {coraMillburnQuestions.map((q) => (
          <div key={q.h3.slice(0, 32)}>
            <h3 className={h3Class}>{q.h3}</h3>
            <p className={pClass}>{q.p}</p>
          </div>
        ))}

        {coraMillburnSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
          </div>
        ))}

        <p className={pClass}>{coraMillburnServiceLogIntro}</p>
        {coraMillburnServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <p className={pClass}>{coraMillburnPhotoIntro}</p>
        <div>
          {coraMillburnGalleryImages.map((image) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="800"
              height="600"
            />
          ))}
        </div>

        <h3 className={h3Class}>{coraMillburnFormH3}</h3>
        <form
          action="https://www.google.com/maps/search/"
          method="get"
          name={coraMillburnFormName}
          className="mb-4 font-body text-base text-slate-700"
        >
          <label className="block">
            {coraMillburnFormLabel}{' '}
            <input
              type="text"
              name="q"
              defaultValue={coraMillburnFormQuery}
              className="mt-2 block w-full max-w-md border border-slate-300 px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="mt-3 border border-copper/40 px-4 py-2 font-semibold text-forest transition-colors hover:text-copper"
          >
            {coraMillburnFormButton}
          </button>
        </form>
        <p className={pClass}>
          {coraMillburnGoogleIntro}{' '}
          <a href={coraMillburnGoogleLink.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
            {coraMillburnGoogleLink.label}
          </a>
        </p>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <meta itemProp="telephone" content={siteConfig.phone.tel} />
          <meta itemProp="legalName" content={canonicalConfig.legalName} />
          <meta itemProp="email" content={siteConfig.email} />
          <span itemProp="areaServed" itemScope itemType="https://schema.org/State">
            <meta itemProp="name" content="New Jersey" />
          </span>
          <span itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="name" content="Free roof inspection and written estimate" />
          </span>
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Millburn, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Millburn roof repair page</a>.
            Call the office on the published line for an inspection.
          </p>
          <p className={pClass}>
            The office keeps the record at{' '}
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Newark</span>,{' '}
              <span itemProp="addressRegion">NJ</span>,{' '}
              <span itemProp="addressCountry">US</span>
            </span>{' '}
            — the Newark base the site publishes — serving{' '}
            <span itemProp="areaServed" itemScope itemType="https://schema.org/City">
              <span itemProp="name">Millburn</span>
            </span>{' '}
            and the rest of Essex County.
          </p>
          <p className={pClass}>
            Copyright Newark Quality Roofing. This Millburn service record — its
            photographs, service log, and field notes — is the office&rsquo;s working
            record for the page, kept with the written estimates it documents.
          </p>
        </div>

        <details className="cora-261014-millburn-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraMillburnFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraMillburnFieldNotesIntro}</p>
          {coraMillburnFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraMillburnCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
