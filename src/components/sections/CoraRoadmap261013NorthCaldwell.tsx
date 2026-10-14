// CORA 2026-10-13 phrase-setup roadmap supplemental block for
// /roof-repair-north-caldwell-nj (keyword "roof repair north
// caldwell nj"). This is North Caldwell's FIRST Cora pass: the
// page is a plain Oct-4 combo page, and this component creates
// its first supplemental block. Rendered only for the
// roof-repair x north-caldwell combo (see ComboTemplate).
// Mirrors the deployed pattern of the six 2026-10-12 city
// passes and the Nutley/Essex Fells/Verona/Bloomfield/Caldwell/
// Belleville first passes: one expandable block that starts
// collapsed (native <details>, never display:none), the page
// H1 is untouched, and all roadmap mass lands here. Content
// lives in src/data/cora-261013-north-caldwell-content.ts; the
// title / meta / meta-keywords / twitter-description edits live
// in src/app/[slug]/page.tsx (this slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-north-caldwell-2026-10-13.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-north-caldwell-2026-10-13.md
// Change list:
// cora-phrase-implementation-north-caldwell-2026-10-13.md
//
// Lines served in this component:
//   - Heading program (clean 17-25, adjusted): 7 new H2 + 13
//     new H3 + 2 new H4 carry the run's variation tokens and
//     entity terms; heading tags 13 -> 35. Five headings open
//     with verbatim variation phrases (Leading Variations +4,
//     adjusted). Six REAL question H3s with genuine answers
//     cure this page's summary-trap (Questions in H3 +6 —
//     the Roseland treatment). Two entity-bearing H4
//     subheadings are introduced inside the block (Has
//     Entities in H4 +1 — the Essex Fells H5 precedent; black,
//     normal-case). H1 frozen.
//   - Body phrase lines (clean 27-29): 'caldwell nj' +2 and
//     'north caldwell nj' +2 (adjusted) delivered by the exact-
//     phrase service-log sentences; 'roof replacements' +2 in
//     the meta, a question H3, and the copy. P Tags +15
//     (clean 26, adjusted) rides on the same block.
//   - Images +33 / Images with ALT +14 (clean 30-31,
//     adjusted): 33 pool photographs, all with ALT, in the
//     photo record (11 -> 44 images). Gallery srcs use the
//     served /images/heroes/ path (the /public/... form 404s
//     live — PR #24 rule).
//   - Outbound (clean 32-34): genuine reference anchors to
//     gaf.com (+1) and yelp.com (+1 — ⚠️ DOMAIN ROOT: no Yelp
//     profile URL for this business is on record and none is
//     invented) plus Owens Corning / CertainTeed / NRCA
//     references; all five are plain dofollow anchors, which
//     clears the % DoFollow External ratio line (+19,
//     adjusted) against the page's one-link external base —
//     the Verona/Bloomfield treatment. The unroadmapped
//     Overview External Links deficit is NOT implemented.
//   - Schema (clean 36-39 — ROADMAP LINES ONLY): the graph
//     below carries a Service node with the business's
//     on-record email (info@billnackexpress.com) and a
//     makesOffer -> Offer describing the roof-repair service
//     (NO price/priceCurrency — none is roadmapped and none
//     is invented), and the record section carries the
//     microdata pair (a Service h-card with itemProp email
//     and a nested makesOffer Offer). Deliberately NO
//     RoofingContractor/LocalBusiness node, NO hasMap, NO
//     ContactPoint, NO telephone/streetAddress properties —
//     none of them is roadmapped for North Caldwell and the
//     verification forbids adding unroadmapped schema.
//   - Display URL Variations +1 (clean 7): the BreadcrumbList
//     crumb names in the graph are the page-side lever
//     (SERP-rendered; flagged).
//   - LSI term coverage (standing practice): the field-notes
//     sentences in the nested block use this run's own LSI
//     term inventory (from its Entities data). The +562/+264
//     numeric asks are the frozen software constant — not
//     chased.
// NOT served here (see the change list): the 29 verified
// artifacts, the 4-line rating cluster (average-fraction
// ARTIFACT shape AND blocked — no verified rating exists and
// none is ever invented, D-01), the 5 not-implementable-
// honestly lines (the roof4roof.com self-link, Is Wix, Has
// XMLRPC, Meta Generator Tags — platform fingerprints of
// other stacks — and Has Google Verify, whose real token is
// not on record), Has JSON-LD (detection discrepancy — the
// template graph is served and unread by Cora; not
// restructured), the agreed skip set, CSS Includes (Paul's
// standing skip), the 2 H1-bucket lines (flagged-open), the
// LSI pair, and the meta-counters. No HTML Comment line and
// no Style Tags line exists in this roadmap, so no boundary
// comments and no <style> block are rendered.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  coraNorthCaldwellBlockIntro,
  coraNorthCaldwellBlockSummary,
  coraNorthCaldwellFieldNotes,
  coraNorthCaldwellFieldNotesHeading,
  coraNorthCaldwellFieldNotesIntro,
  coraNorthCaldwellGalleryImages,
  coraNorthCaldwellMaterialsHeading,
  coraNorthCaldwellMaterialsParagraphs,
  coraNorthCaldwellPhotoHeading,
  coraNorthCaldwellPhotoIntro,
  coraNorthCaldwellQuestions,
  coraNorthCaldwellQuestionsHeading,
  coraNorthCaldwellQuestionsIntro,
  coraNorthCaldwellRecordCardIntro,
  coraNorthCaldwellRecordHeading,
  coraNorthCaldwellRecordIntro,
  coraNorthCaldwellReferenceLinks,
  coraNorthCaldwellSections,
  coraNorthCaldwellServiceLogEntries,
  coraNorthCaldwellServiceLogHeading,
  coraNorthCaldwellServiceLogIntro,
} from '@/data/cora-261013-north-caldwell-content';

const pageUrl = 'https://newarkqualityroofing.com/roof-repair-north-caldwell-nj';
const businessEmail = 'info@billnackexpress.com';

// Minimal block-level graph for this page (clean lines 36/38
// + 7 ONLY): a WebPage node, a Service node carrying the
// business's on-record email and the makesOffer -> Offer
// plumbing (an Offer describing the roof-repair service —
// no price data, none is roadmapped or invented), and the
// BreadcrumbList whose crumb names are the Display URL
// lever. Deliberately NO business node, NO hasMap, NO
// ContactPoint — this roadmap roadmaps none of them (see
// the header's discipline note).
const northCaldwellSchemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: 'Roof Repair North Caldwell, NJ',
      potentialAction: {
        '@type': 'ReadAction',
        target: pageUrl,
      },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Roof Repair in North Caldwell, NJ',
      serviceType: 'Roof repair',
      url: pageUrl,
      email: businessEmail,
      areaServed: 'North Caldwell, NJ',
      makesOffer: {
        '@type': 'Offer',
        name: 'Free roof inspection and written estimate',
        description:
          'A standing offer to North Caldwell homeowners: a roof inspection and a written, itemized repair estimate at no charge.',
        itemOffered: {
          '@type': 'Service',
          name: 'Roof Repair',
          serviceType: 'Roof repair',
        },
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
          item: 'https://newarkqualityroofing.com/roof-repair-in-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Roof Repair North Caldwell NJ',
          item: pageUrl,
        },
      ],
    },
  ],
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const h4Class = 'mt-5 mb-2 font-heading text-lg font-semibold text-black';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261013NorthCaldwell() {
  return (
    <section aria-label="North Caldwell Roof Repair Guide and Records" className="bg-white">
      <JsonLd data={northCaldwellSchemaGraph} />
      <details className="cora-261013-north-caldwell-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraNorthCaldwellBlockSummary}
        </summary>

        <p className={pClass}>{coraNorthCaldwellBlockIntro}</p>

        {coraNorthCaldwellSections.map((section) => (
          <div key={section.h2}>
            <h2 className={h2Class}>{section.h2}</h2>
            <p className={pClass}>{section.intro}</p>
            {section.subs.map((sub) => (
              <div key={sub.h3}>
                <h3 className={h3Class}>{sub.h3}</h3>
                <p className={pClass}>{sub.p}</p>
                {sub.h4 && (
                  <>
                    <h4 className={h4Class}>{sub.h4}</h4>
                    <p className={pClass}>{sub.h4p}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}

        <h2 className={h2Class}>{coraNorthCaldwellQuestionsHeading}</h2>
        <p className={pClass}>{coraNorthCaldwellQuestionsIntro}</p>
        {coraNorthCaldwellQuestions.map((q) => (
          <div key={q.h3}>
            <h3 className={h3Class}>{q.h3}</h3>
            <p className={pClass}>{q.p}</p>
          </div>
        ))}

        <h2 className={h2Class}>{coraNorthCaldwellMaterialsHeading}</h2>
        {coraNorthCaldwellMaterialsParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 28)} className={pClass}>{paragraph}</p>
        ))}

        <h2 className={h2Class}>{coraNorthCaldwellPhotoHeading}</h2>
        <p className={pClass}>{coraNorthCaldwellPhotoIntro}</p>
        <div>
          {coraNorthCaldwellGalleryImages.map((image) => (
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

        <h2 className={h2Class}>{coraNorthCaldwellRecordHeading}</h2>
        <p className={pClass}>{coraNorthCaldwellRecordIntro}</p>
        <ul className="mb-4 list-disc space-y-1 pl-6 font-body text-base text-slate-700">
          {coraNorthCaldwellReferenceLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className={pClass}>{coraNorthCaldwellRecordCardIntro}</p>
        <div
          itemScope
          itemType="https://schema.org/Service"
          className="mb-4 border border-slate-200 p-4 font-body text-base text-slate-700"
        >
          <p className="mb-2">
            <span itemProp="name">Roof Repair in North Caldwell, NJ</span> — Newark Quality
            Roofing, run out of the Newark office. Written estimates and job photographs are
            filed against every call.
          </p>
          <p className="mb-2">
            Email:{' '}
            <a
              itemProp="email"
              href={`mailto:${businessEmail}`}
              className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper"
            >
              {businessEmail}
            </a>
          </p>
          <div itemProp="makesOffer" itemScope itemType="https://schema.org/Offer">
            <p className="mb-0">
              <span itemProp="name">Free roof inspection and written estimate</span> — the
              service&rsquo;s standing offer to North Caldwell homeowners: an inspection and a
              written, itemized repair estimate at no charge.
            </p>
          </div>
        </div>

        <h2 className={h2Class}>{coraNorthCaldwellServiceLogHeading}</h2>
        <p className={pClass}>{coraNorthCaldwellServiceLogIntro}</p>
        {coraNorthCaldwellServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <details className="cora-261013-north-caldwell-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraNorthCaldwellFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraNorthCaldwellFieldNotesIntro}</p>
          {coraNorthCaldwellFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
    </section>
  );
}
