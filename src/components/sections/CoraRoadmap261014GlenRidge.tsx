// CORA 2026-10-14 phrase-setup roadmap supplemental block for
// /roof-repair-glen-ridge-nj (keyword "roof repair glen ridge
// nj"). This is Glen Ridge's FIRST Cora pass: the page is a
// lean Oct-4 combo page, and this component creates its first
// supplemental block. Rendered only for the roof-repair x
// glen-ridge combo (see ComboTemplate). Mirrors the deployed
// pattern of the prior first passes: one expandable block that
// starts collapsed (native <details>, never display:none), the
// page H1 is untouched, and all roadmap mass lands here.
// Content lives in src/data/cora-261014-glen-ridge-content.ts;
// the title / meta / meta-keywords edits live in
// src/app/[slug]/page.tsx (this slug only). Line sheet:
// ~/workspace/goals/newarkqualityroofing-com-seo-analysis/files/cora-phrase-measurement-glen-ridge-2026-10-14.md
// Verification (adjusted values are the work order):
// cora-artifact-verification-glen-ridge-2026-10-14.md
// Change list:
// cora-phrase-implementation-glen-ridge-2026-10-14.md
//
// Lines served in this component:
//   - Heading program (adjusted): exactly +26 heading tags
//     (13 -> 39) = 4 new H2 + 22 new H3, serving Heading
//     Tags +26, H1-H6 Variations +13, H1-H3 Variations +11,
//     Entities in H3 +13, H3 Variations +3, Entities in
//     H2 +11, H2 Variations +3, H1+H2 Variations +3, and
//     the two Leading Variations +1 lines. H1 frozen.
//   - Questions in H3 +2 (stands; the Millburn doctrine):
//     exactly two of the page's OWN six FAQ questions are
//     surfaced as real H3 headings with their genuine
//     answers; the FAQ accordion itself is untouched. The
//     Overview-only +8/+8 headline forms are NOT pulled in.
//   - P Tags +6 (adjusted): the block's real paragraphs
//     deliver it by construction; the delivered count is
//     reported as measured in the change list.
//   - Phrase singles in the block's sentences: 'roof
//     replacements' +4 (stands), 'roof repairs' +3
//     (adjusted).
//   - SERP riders ⚠️: Display URL Variations +1 rides the
//     title work and the page's EXISTING template
//     BreadcrumbList (this pass adds no schema — see
//     below); Link Text Variations rides the title rewrite
//     in page.tsx.
//   - Images +17 / ALT +14 (stands): 17 pool photographs,
//     all with ALT, each in a genuine <figure> with a plain
//     caption (11 -> 28 images). Srcs are served
//     /images/... paths only (the PR #24 rule). ALT
//     Variations collapsed to 0 in the verification and is
//     NOT chased as a separate target — natural ALT
//     diversity rides this program.
//   - google.com link +1: the genuine Google Maps query
//     anchor below (the Roseland/Caldwell treatment) — no
//     Maps CID or profile URL is invented for it.
//   - LSI term coverage (standing practice): the
//     field-notes sentences in the nested block use this
//     page's topical term inventory. The +562/+264 numeric
//     asks are the frozen software constant — not chased.
// SCHEMA: NONE is built in this component — deliberately.
//   The sole roadmapped Phase 12 line (Has JSON-LD) is a
//   detection discrepancy: the page's template @graph is
//   provably served and Cora tracks it at 0. No JSON-LD,
//   no microdata, and nothing from the 94 Overview schema
//   deficit rows is added (no back doors). The rating
//   family is Overview-only and BLOCKED regardless under
//   D-01 (no verified rating exists and none may be
//   invented).
// NOT served here (see the change list): the 12 verified
// artifacts at adjusted 0 (incl. the trademark pair, the
// Exact Matches pair, B Tags, NAME Attributes, HTML
// Tags, Span Tags, Summary Length, ALT Variations as a
// target), Has JSON-LD (detection discrepancy), the
// agreed skip set (9 lines), CSS Includes (Paul's
// standing skip; adjusted ≈ +3 recorded), JavaScript
// Includes (residue ≈ +1 noted, not listed on its
// merits), the H1 line (flagged-open), the 5 social
// profile-count lines (pending Paul's verified profile
// URLs — and NO platform-root placeholder is created,
// because no "Has Link" social line is roadmapped here),
// the comment-variation gray zone (RULED OUT —
// Overview-only in this report), the LSI pair, and the
// 3 meta-counters.

import {
  coraGlenRidgeBlockIntro,
  coraGlenRidgeBlockSummary,
  coraGlenRidgeFieldNotes,
  coraGlenRidgeFieldNotesH2,
  coraGlenRidgeFieldNotesHeading,
  coraGlenRidgeFieldNotesIntro,
  coraGlenRidgeGalleryImages,
  coraGlenRidgeGoogleLink,
  coraGlenRidgeGuideH2,
  coraGlenRidgeGuideIntro,
  coraGlenRidgeLinksH3,
  coraGlenRidgeLinksIntro,
  coraGlenRidgeNeighborhoodSections,
  coraGlenRidgePhotoH3,
  coraGlenRidgePhotoIntro,
  coraGlenRidgeQuestions,
  coraGlenRidgeQuestionsH2,
  coraGlenRidgeQuestionsIntro,
  coraGlenRidgeSections,
  coraGlenRidgeServiceLogEntries,
  coraGlenRidgeServiceLogH2,
  coraGlenRidgeServiceLogIntro,
} from '@/data/cora-261014-glen-ridge-content';

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261014GlenRidge() {
  return (
    <section
      aria-label="Glen Ridge Roof Repair Guide and Records"
      className="bg-white"
    >
      <details className="cora-261014-glen-ridge-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {coraGlenRidgeBlockSummary}
        </summary>

        <p className={pClass}>{coraGlenRidgeBlockIntro}</p>

        <h2 className={h2Class}>{coraGlenRidgeGuideH2}</h2>
        <p className={pClass}>{coraGlenRidgeGuideIntro}</p>
        {coraGlenRidgeSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
          </div>
        ))}

        {coraGlenRidgeNeighborhoodSections.map((s) => (
          <div key={s.h3.slice(0, 32)}>
            <h3 className={h3Class}>{s.h3}</h3>
            <p className={pClass}>{s.p}</p>
          </div>
        ))}

        <h2 className={h2Class}>{coraGlenRidgeQuestionsH2}</h2>
        <p className={pClass}>{coraGlenRidgeQuestionsIntro}</p>
        {coraGlenRidgeQuestions.map((q) => (
          <div key={q.h3.slice(0, 32)}>
            <h3 className={h3Class}>{q.h3}</h3>
            <p className={pClass}>{q.p}</p>
          </div>
        ))}

        <h2 className={h2Class}>{coraGlenRidgeServiceLogH2}</h2>
        <p className={pClass}>{coraGlenRidgeServiceLogIntro}</p>
        {coraGlenRidgeServiceLogEntries.map((entry) => (
          <p key={entry.slice(0, 28)} className={pClass}>{entry}</p>
        ))}

        <h3 className={h3Class}>{coraGlenRidgePhotoH3}</h3>
        <p className={pClass}>{coraGlenRidgePhotoIntro}</p>
        <div>
          {coraGlenRidgeGalleryImages.map((image) => (
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

        <h3 className={h3Class}>{coraGlenRidgeLinksH3}</h3>
        <p className={pClass}>{coraGlenRidgeLinksIntro}</p>
        <p className={pClass}>
          <a href={coraGlenRidgeGoogleLink.href} className="text-forest underline decoration-copper/30 underline-offset-2 transition-colors hover:text-copper">
            {coraGlenRidgeGoogleLink.label}
          </a>
        </p>

        <h2 className={h2Class}>{coraGlenRidgeFieldNotesH2}</h2>
        <details className="cora-261014-glen-ridge-lsi">
          <summary className="cursor-pointer py-3 font-semibold text-brand-navy">
            {coraGlenRidgeFieldNotesHeading}
          </summary>
          <p className={pClass}>{coraGlenRidgeFieldNotesIntro}</p>
          {coraGlenRidgeFieldNotes.map((note) => (
            <p key={note.slice(0, 28)} className={pClass}>{note}</p>
          ))}
        </details>
      </details>
    </section>
  );
}
