// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-fairfield-nj (keyword "roof repair fairfield nj").
// This is Fairfield's FIRST Cora pass: the page is a plain
// Oct-4 page, and this component creates its first
// supplemental block. Rendered only for the roof-repair x
// fairfield combo (see ComboTemplate). Mirrors the deployed
// pattern of the six 2026-10-12 city passes and the
// Nutley-through-Orange first passes: one expandable block
// that starts collapsed (native <details>, never
// display:none), the page H1 is untouched, and all roadmap
// mass lands here. Content lives in
// src/data/cora-261013-fairfield-content.ts; the title / meta
// / meta-keywords edits live in src/app/[slug]/page.tsx (this
// slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-fairfield-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-fairfield-2026-10-13.md
// Change list:
// cora-phrase-implementation-fairfield-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 11-21, adjusted): exactly +10
//     heading tags (13 -> 23) = 1 new H2 + 7 new H3 + 2 new
//     H4. Six of the H3s are the page's OWN FAQ questions as
//     real headings (clean 12, +6 — the summary-trap fix),
//     each with its genuine answer; the seventh H3 is the
//     siding section. The two H4s introduce a heading level
//     the page has never had (clean 18/19 ⚠️, the Essex
//     Fells H5 precedent). The H2 opens with a verbatim
//     variation phrase (the leading-variation residues,
//     clean 14/15) and carries the literal 'fairfield nj'
//     (clean 21); the siding H3 carries it too (clean 20).
//     H1 frozen.
//   - Body copy (clean 22/23): the siding section, service
//     log, and field notes carry 'siding' at field scale
//     (clean 22, +57 stands — a two-setter pattern) and the
//     block's exact-phrase sentences carry 'fairfield nj'
//     (clean 23, ≈ +5 soft).
//   - SERP rider (clean 6 ⚠️): the BreadcrumbList crumb names
//     in the graph below are the Display URL lever; Link Text
//     rides the title rewrite in page.tsx.
//   - Images +34 / ALT +9 / ALT Variations +1 (clean 24-26,
//     adjusted): 34 pool photographs, all with ALT, in the
//     photo record (12 -> 46 images). Srcs are served
//     /images/... paths only (the PR #24 rule).
//   - Outbound (clean 27): the genuine dofollow manufacturer
//     / association references move the DoFollow External
//     share from 0% (0 of 1 external link) past the +13 goal.
//     The unroadmapped external-count deficits are NOT owed.
//   - Style variations +24 (clean 28): the <style> element
//     below carries this run's verbatim variation phrases
//     (the Essex Fells mechanism); our page tracked 0.
//   - Schema (clean 30-39): the graph below carries a NEW
//     RoofingContractor business node (this page had none)
//     with ONLY the roadmapped properties — the published
//     telephone from site config, the site's canonical logo
//     asset, and a PostalAddress carrying locality/region/
//     country ONLY (the street value stays the canonical
//     empty D-01 value and the postalCode pair is HELD OUT
//     under D-01 — no canonical business ZIP is on record).
//     The h-card carries the microdata pairs. NO geo, NO
//     opening-hours properties (the dayOfWeek pair was
//     excluded with the sibling complex — nothing about
//     opening hours is owed by this roadmap), NO rating node
//     of any kind (no rating lines are roadmapped; the
//     Overview-only AggregateRating family is blocked
//     regardless, D-01). Roadmap lines only — no ContactPoint,
//     no hasMap, no anchor lines beyond the graph
//     scaffolding.
//   - HTML Comment Variations +3 (clean 40, gray zone,
//     rulebook-included; adjusted from +12): the two boundary
//     comments rendered via dangerouslySetInnerHTML carry
//     four verbatim variation phrases between them. The
//     headline was set by our sibling page alone; the +3
//     residue is the Shared Average — flagged in the change
//     list for the morning review.
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI
//     term inventory (from its Entities data). The +562/+264
//     numeric asks are the frozen software constant — not
//     chased.
// NOT served here (see the change list): the sibling
// complex's other 30 lines at adjusted 0 (incl. the
// dayOfWeek pair), the 12 verified artifacts, Has JSON-LD
// (detection discrepancy), the Canonical/URL Path variation
// lines (not implementable — frozen Rule-7 URL), the agreed
// skip set, CSS Includes (Paul's standing skip), the 3 H1
// lines (flagged-open), the 6 social lines (pending Paul's
// verified profile URLs), the meta-counters, and the
// postalCode pair (held out under D-01).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraFairfieldBlockIntro,
  coraFairfieldBlockSummary,
  coraFairfieldCommentTexts,
  coraFairfieldFieldNotes,
  coraFairfieldFieldNotesHeading,
  coraFairfieldFieldNotesIntro,
  coraFairfieldGalleryImages,
  coraFairfieldLinksIntro,
  coraFairfieldPhotoIntro,
  coraFairfieldQuestions,
  coraFairfieldQuestionsH2,
  coraFairfieldQuestionsIntro,
  coraFairfieldReferenceLinks,
  coraFairfieldServiceLogEntries,
  coraFairfieldServiceLogIntro,
  coraFairfieldSidingDetails,
  coraFairfieldSidingH3,
  coraFairfieldSidingIntro,
  coraFairfieldStylePhrases,
} from '@/data/cora-261013-fairfield-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-fairfield-nj';

// The site's canonical logo asset (the same /logo.svg the
// Header and Footer render) as an absolute URL — the value
// the clean logo pair (38/39) is implemented with (the
// Orange treatment). No geo is published here: no geo line
// is roadmapped for this page, and the canonical config's
// geo fields are empty (owner-supplied values pending,
// D-01).
const businessLogoUrl = 'https://newarkqualityroofing.com/logo.svg';

// New block-level graph for this page (clean lines 30-39):
// the business node leads with RoofingContractor (canonical
// most-specific-first order from src/lib/schema.ts; Cora does
// a literal token match on page source). The telephone is
// wired to the canonical env-driven config phone exactly as
// src/lib/schema.ts emits it — in production that renders
// the published number; nothing is invented. The
// PostalAddress carries locality/region/country only: the
// street value stays the canonical empty D-01 value
// (omitted, as the config omits it) and the postalCode pair
// is held out under D-01.
const fairfieldSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: pageUrl,
      email: siteConfig.email,
      telephone: siteConfig.phone.tel,
      logo: businessLogoUrl,
      mainEntityOfPage: { '@id': pageUrl },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Newark',
        addressRegion: 'NJ',
        addressCountry: 'US',
      },
      areaServed: [
        { '@type': 'City', name: 'Fairfield, NJ' },
        { '@type': 'State', name: 'New Jersey' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair Fairfield, NJ',
      about: { '@id': `${pageUrl}#localbusiness` },
      isPartOf: { '@id': 'https://newarkqualityroofing.com/#website' },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in Fairfield, NJ',
      serviceType: 'Roof repair',
      provider: { '@id': `${pageUrl}#localbusiness` },
      mainEntityOfPage: { '@id': pageUrl },
      areaServed: { '@type': 'City', name: 'Fairfield, NJ' },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Roof Repair Services',
          item: 'https://newarkqualityroofing.com/roof-repair-in-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair Fairfield NJ',
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
const h4Class = 'mt-5 mb-2 font-heading text-lg font-semibold text-slate-900';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261013Fairfield() {
  return (
    <section
      aria-label="Fairfield Roof Repair Guide and Records"
      className="bg-white"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraFairfieldCommentTexts[0]} -->`,
        }}
      />
      <style>
        {`:root { ${coraFairfieldStylePhrases.map((phrase) => `--cora-261013-ff-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-13 (Fairfield) phrase style-tag variations: ${coraFairfieldStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={fairfieldSchemaGraph} />
      <details className="cora-261013-fairfield-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraFairfieldBlockSummary}
        </summary>

        <p className={pClass}>{coraFairfieldBlockIntro}</p>

        <h2 className={h2Class}>{coraFairfieldQuestionsH2}</h2>
        <p className={pClass}>{coraFairfieldQuestionsIntro}</p>
        {coraFairfieldQuestions.map((q) => (
          <div key={q.h3.slice(0, 32)}>
            <h3 className={h3Class}>{q.h3}</h3>
            <p className={pClass}>{q.p}</p>
          </div>
        ))}

        <h3 className={h3Class}>{coraFairfieldSidingH3}</h3>
        <p className={pClass}>{coraFairfieldSidingIntro}</p>
        {coraFairfieldSidingDetails.map((d) => (
          <div key={d.h4.slice(0, 32)}>
            <h4 className={h4Class}>{d.h4}</h4>
            <p className={pClass}>{d.p}</p>
          </div>
        ))}

        <p className={pClass}>{coraFairfieldServiceLogIntro}</p>
        {coraFairfieldServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <p className={pClass}>{coraFairfieldPhotoIntro}</p>
        <div>
          {coraFairfieldGalleryImages.map((image) => (
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

        <p className={pClass}>{coraFairfieldLinksIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraFairfieldReferenceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="h-card" itemScope itemType="https://schema.org/RoofingContractor">
          <link itemProp="logo" href={businessLogoUrl} />
          <meta itemProp="telephone" content={siteConfig.phone.tel} />
          <p className={pClass}>
            <span className="p-name" itemProp="name">Newark Quality Roofing</span> provides{' '}
            <u>roof repair in Fairfield, NJ</u> and across Essex County from{' '}
            <a className="u-url" href={pageUrl}>the Fairfield roof repair page</a>.
            Write to{' '}
            <a className="u-email" itemProp="email" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            , or call the office on the published line for an inspection.
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
              <span itemProp="name">Fairfield</span>
            </span>{' '}
            and the rest of Essex County.
          </p>
          <p className={pClass}>
            Copyright Newark Quality Roofing. This Fairfield service record — its
            photographs, service log, and field notes — is the office&rsquo;s working
            record for the page, kept with the written estimates it documents.
          </p>
        </div>

        <details className="cora-261013-fairfield-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraFairfieldFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraFairfieldFieldNotesIntro}</p>
          {coraFairfieldFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html: `<!-- ${coraFairfieldCommentTexts[1]} -->`,
        }}
      />
    </section>
  );
}
