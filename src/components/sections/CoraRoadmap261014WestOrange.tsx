// CORA 2026-10-14 phrase-setup roadmap supplemental block for
// /roof-repair-west-orange-nj (keyword "roof repair west
// orange nj"). This is West Orange's FIRST Cora pass: the
// page is the rich variant of the Oct-4 combo template, and
// this component creates its first supplemental block.
// Rendered only for the roof-repair x west-orange combo (see
// ComboTemplate). Mirrors the deployed pattern of the prior
// first passes: one expandable block that starts collapsed
// (native <details>, never display:none), the page H1 is
// untouched, and all roadmap mass lands here. Content lives
// in src/data/cora-261014-west-orange-content.ts; the title /
// meta / meta-keywords edits live in src/app/[slug]/page.tsx
// (this slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-west-orange-2026-10-14.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-west-orange-2026-10-14.md
// Change list:
// cora-phrase-implementation-west-orange-2026-10-14.md
//
// Lines served in this component:
//   - Heading program (clean 5, adjusted +17): exactly +17
//     heading tags (22 -> 39) = 3 new H2 + 14 new H3 (8
//     repair sections, the form and social section heads,
//     and 4 field-note H3s in the nested block). H1 frozen;
//     the page's existing 7 question headings are untouched
//     (NO summary-trap on this page — its questions already
//     sit in real heading tags).
//   - Distinct Entities +1 (clean 6, adjusted): the block's
//     entity-dense copy (James Hardie, Timberline, roof
//     coating, safety inspections, walkthrough, carpentry,
//     technician) rides on the sections, log, and notes.
//   - SERP rider (clean 9 ⚠️): the BreadcrumbList crumb
//     names in the graph below are the Display URL lever;
//     Link Text rides the title rewrite in page.tsx.
//   - Facebook link +1 (clean 10) ⚠️ platform-root
//     placeholder (https://www.facebook.com, the
//     Maplewood/Verona treatment) — FLAGGED in the data
//     file for one-line replacement when Paul supplies the
//     real profile URL. The Phase 8 profile-COUNT lines
//     stay pending.
//   - Images +20 / ALT +18 / ALT Variations +18 (clean
//     11-13, adjusted): 20 pool photographs, all with ALT,
//     in the photo record (3 -> 23 images). Srcs are served
//     /images/... paths only (the PR #24 rule).
//   - Figure Variations ≈ +6 (clean 14, adjusted): the 20
//     photographs are wrapped in genuine <figure> elements
//     with genuine captions (the East Orange treatment).
//   - Form Variations +2 (clean 15, adjusted) ⚠️: one
//     genuine, functional Google Maps search form whose
//     name attribute and button text carry the exact phrase
//     family (the Bloomfield mechanism) — slug-scoped,
//     rendered only in this block.
//   - Style variations +24 (clean 16): the <style> element
//     below carries this run's verbatim variation phrases
//     (the Essex Fells mechanism); our page tracked 0.
//   - LSI term coverage (standing practice): the
//     field-notes sentences in the nested block use this
//     run's own LSI term inventory (from its Entities data).
//     The +562/+264 numeric asks are the frozen software
//     constant — not chased.
// NO schema build (Phase 12 verified to ZERO implementable
// lines for this city): the only JSON-LD below is a
// BreadcrumbList (the Display URL lever, as in the prior
// passes' graphs) — NO business node, NO ContactPoint, NO
// rating node of any kind (the 16-line rating cluster is
// PATTERN-shaped but BLOCKED under D-01 — no verified
// rating exists and none may be invented), NO streetAddress
// (held out under D-01). The template's own @graph is
// untouched.
// NOT served here (see the change list): the 31 verified
// artifacts (incl. the ContactPoint family at adjusted 0 —
// single-carrier doorway shape; Areas Served; the
// credential cluster; Absolute URLs; Images without ALT —
// not implementable honestly), Has JSON-LD (detection
// discrepancy), the 16 BLOCKED rating lines, the
// streetAddress pair (blocked, D-01), the agreed skip set,
// CSS Includes (Paul's standing skip), the H1 line
// (flagged-open), the 4 social profile-count lines
// (pending Paul's verified URLs), the LSI pair, the
// meta-counters, and Dirs in Path (SERP-structural).

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import { siteConfig as canonicalConfig } from '@/config/site-config';
import { buildRoofingContractorNodeSchema } from '@/lib/schema';
import {
  coraWestOrangeBlockIntro,
  coraWestOrangeBlockSummary,
  coraWestOrangeFieldNotes,
  coraWestOrangeFieldNotesHeading,
  coraWestOrangeFieldNotesIntro,
  coraWestOrangeFormButton,
  coraWestOrangeFormH3,
  coraWestOrangeFormLabel,
  coraWestOrangeFormName,
  coraWestOrangeFormQuery,
  coraWestOrangeGalleryImages,
  coraWestOrangePhotoH2,
  coraWestOrangePhotoIntro,
  coraWestOrangeSections,
  coraWestOrangeSectionsH2,
  coraWestOrangeSectionsIntro,
  coraWestOrangeServiceLogEntries,
  coraWestOrangeServiceLogH2,
  coraWestOrangeServiceLogIntro,
  coraWestOrangeSocialH3,
  coraWestOrangeSocialIntro,
  coraWestOrangeSocialLinks,
  coraWestOrangeStylePhrases,
} from '@/data/cora-261014-west-orange-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-west-orange-nj';

// BreadcrumbList only (clean line 9 ⚠️ — the Display URL
// Variations lever): the crumb names carry the phrase
// family. This page's Phase 12 verified to zero
// implementable lines, so NO business node is added — no
// RoofingContractor, no ContactPoint, no rating, no
// address. The template's own @graph already serves a
// BreadcrumbList with generic names; this block-level one
// carries the variation-bearing crumb names, the
// Maplewood/Caldwell treatment.
const westOrangeBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${pageUrl}#cora-breadcrumb`,
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
      name: 'Roof Repair West Orange NJ',
      item: pageUrl,
    },
  ],
};

// Group 2 credited-form package (2026-10-24): the 261014
// roadmap DOES roadmap the ContactPoint / contactType /
// Person pairs for this page (master ledger Group 2). The
// business node + ContactPoint go in this graph; the
// credited plain-string node rides alongside; the microdata
// twins ride the standard WebPage shell below as a
// metas-only business itemscope (the Caldwell form — this
// block has no card). Zero visible change.
const westOrangeBusinessGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    buildRoofingContractorNodeSchema(),
    {
      '@type': ['RoofingContractor', 'LocalBusiness'],
      '@id': `${pageUrl}#localbusiness`,
      name: 'Newark Quality Roofing',
      legalName: canonicalConfig.legalName,
      url: pageUrl,
      telephone: siteConfig.phone.tel,
      email: siteConfig.email,
      availableLanguage: 'English',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: siteConfig.phone.tel,
        contactType: 'customer service',
        areaServed: 'US',
        availableLanguage: 'English',
      },
      employee: {
        '@type': 'Person',
        jobTitle: 'Roofing Contractor',
      },
      areaServed: [
        { '@type': 'City', name: 'West Orange, NJ' },
        { '@type': 'State', name: 'New Jersey' },
        { '@type': 'AdministrativeArea', name: 'Essex County, NJ' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair West Orange, NJ',
      about: { '@id': `${pageUrl}#localbusiness` },
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261014WestOrange() {
  return (
    <section aria-label="West Orange Roof Repair Guide and Records" className="bg-white" itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Roof Repair West Orange, NJ" />
      <meta itemProp="url" content={pageUrl} />
      <div itemScope itemType="https://schema.org/RoofingContractor" className="hidden" aria-hidden="true">
        <meta itemProp="name" content="Newark Quality Roofing" />
        <meta itemProp="legalName" content={canonicalConfig.legalName} />
        <span itemProp="contactPoint" itemScope itemType="https://schema.org/ContactPoint">
          <meta itemProp="contactType" content="customer service" />
        </span>
        <span itemProp="employee" itemScope itemType="https://schema.org/Person">
          <meta itemProp="jobTitle" content="Roofing Contractor" />
        </span>
      </div>
      <style>
        {`:root { ${coraWestOrangeStylePhrases.map((phrase) => `--cora-261014-wo-${phrase.replace(/ /g, '-')}: 1;`).join(' ')} }
        /* CORA 2026-10-14 (West Orange) phrase style-tag variations: ${coraWestOrangeStylePhrases.join(', ')} */`}
      </style>
      <JsonLd data={westOrangeBreadcrumb} />
      <JsonLd data={westOrangeBusinessGraph} />
      <details className="cora-261014-west-orange-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraWestOrangeBlockSummary}
        </summary>

        <p className={pClass}>{coraWestOrangeBlockIntro}</p>

        <h2 className={h2Class}>{coraWestOrangeSectionsH2}</h2>
        <p className={pClass}>{coraWestOrangeSectionsIntro}</p>
        {coraWestOrangeSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
          </div>
        ))}

        <h2 className={h2Class}>{coraWestOrangeServiceLogH2}</h2>
        <p className={pClass}>{coraWestOrangeServiceLogIntro}</p>
        {coraWestOrangeServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <h2 className={h2Class}>{coraWestOrangePhotoH2}</h2>
        <p className={pClass}>{coraWestOrangePhotoIntro}</p>
        <div>
          {coraWestOrangeGalleryImages.map((image) => (
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

        <h3 className={h3Class}>{coraWestOrangeFormH3}</h3>
        <form
          action="https://www.google.com/maps/search/"
          method="get"
          name={coraWestOrangeFormName}
          className="mb-4 font-body text-base text-slate-700"
        >
          <label className="block">
            {coraWestOrangeFormLabel}{' '}
            <input
              type="text"
              name="q"
              defaultValue={coraWestOrangeFormQuery}
              className="mt-2 block w-full max-w-md border border-slate-300 px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="mt-3 border border-copper/40 px-4 py-2 font-semibold text-forest transition-colors hover:text-copper"
          >
            {coraWestOrangeFormButton}
          </button>
        </form>

        <h3 className={h3Class}>{coraWestOrangeSocialH3}</h3>
        <p className={pClass}>{coraWestOrangeSocialIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraWestOrangeSocialLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <details className="cora-261014-west-orange-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraWestOrangeFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraWestOrangeFieldNotesIntro}</p>
          {coraWestOrangeFieldNotes.map((note) => (
            <div key={note.h3.slice(0, 32)}>
              <h3 className={h3Class}>{note.h3}</h3>
              <p className={pClass}>{note.p}</p>
            </div>
          ))}
        </details>
      </details>
    </section>
  );
}
