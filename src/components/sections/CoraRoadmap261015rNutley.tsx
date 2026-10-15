// Cora 2026-10-15 phrase roadmap — SUPPLEMENTAL BLOCK for the
// NUTLEY roof REPLACEMENT page
// (/roof-replacement-nutley-nj, keyword
// "roof replacement nutley nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword: the page is a plain Oct-4 combo page (13 headings,
// 11 images, five genuine FAQ questions invisible to heading
// counters — all five in <summary> elements; NO questions line
// is roadmapped in this run, so no question headings are
// manufactured). This block implements the CLEAN 36 lines of
// the verification file at their adjusted values (clean list
// in cora-phrase-verification-nutley-replacement-2026-10-15.md;
// the title/meta/keywords clean lines are served via the
// page.tsx override for this slug from the same data file).
//
// Heading programme: the block carries exactly +30 headings —
// 2 H2 + 19 H3 + 6 H4 + 3 H5 (13 → 43, the driver-adjusted
// total priced off R1 Rande's live-verified 43, not R5
// Recinos's 49-heading doorway stamp; the H3 count itself is
// driver-adjusted, Entities in H3 and Variations in H3 priced
// off R1's genuine counts). Ten guide articles (H3; six with
// H4 — two of those H4s are whole-variation-form headings),
// three subsections, and H3s for the service log, homeowner
// questions, photo record, service-record card, resources,
// and the directions form, plus the field-notes H2. Three H5
// photo-record labels: the first two open with verbatim
// variation forms (Leading Variations in H5, R3 genuine), the
// third carries the H5 entity vehicle (R3 genuine). The H1 is
// NOT touched (frozen; the one H1-bucket line is flagged open
// in the verification).
//
// Content programme: the block's sentences carry the phrase
// singles VERBATIM in lowercase (the factor counts
// case-sensitive literal occurrences; baseline validated
// one-for-one against Cora's tracked values) — six service-log
// entries each carry 'roof repair nutley nj' once (lines 19/20
// at the full ask, R1 genuine sole carrier), and the exact
// phrase 'roof replacement nutley nj' verbatim throughout
// (line 25 at its adjusted +1, delivered well past it and
// disclosed). This run's LSI terms are written into sentences
// in the field notes (standing practice; the LSI pair itself
// is the frozen constant, never chased).
//
// Schema: NONE built in this pass. No schema property is
// roadmapped in this run — the one Phase-12 line (Has
// JSON-LD) is a detection discrepancy: the page already
// serves two JSON-LD blocks that Cora's crawler read as 0.
// The service-record card is plain content (no microdata).
//
// External links: three GENUINE manufacturer references
// (GAF, Owens Corning, CertainTeed) and the Google Maps query
// anchors — all dofollow — are the vehicle for the run's one
// Phase-7 line (DoFollow percentage, Shared-Average goal
// corroborated in-set). NO platform-root placeholders are
// placed: no "Has Link to X" single is roadmapped in this
// run, and the Phase-8 social count lines are pending Paul's
// verified profile URLs.
//
// Images: 18 pool images, ALL with genuine ALT (29 images /
// 29 ALT page-wide — the adjusted Shared-Average field
// level), each in a <figure> with a span-wrapped plain
// caption. All srcs /images/… (never /public/images/…), each
// verified to exist in public/images by its exact file name.
//
// Form: a genuine Google Maps search form (the Bloomfield
// mechanism) — its name and two field names carry the
// NAME-variation forms (line 54 at the full ask; honest
// attributes, the Cedar Grove replacement doctrine).
// Comment variations (gray zone, at the adjusted +3): the
// two boundary comments carry the forms; section markers
// stay phrase-light.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import {
  coraReplNutleyBlockSummary,
  coraReplNutleyBlockIntro,
  coraReplNutleyGuideH2,
  coraReplNutleyGuideIntro,
  coraReplNutleySections,
  coraReplNutleySubsections,
  coraReplNutleyServiceLogIntro,
  coraReplNutleyServiceLogLabels,
  coraReplNutleyServiceLogEntries,
  coraReplNutleyQuotesH3,
  coraReplNutleyQuotesIntro,
  coraReplNutleyQuotes,
  coraReplNutleyPhotoH3,
  coraReplNutleyPhotoIntro,
  coraReplNutleyPhotoGroups,
  coraReplNutleyGalleryImages,
  coraReplNutleyCardH3,
  coraReplNutleyCardIntro,
  coraReplNutleyCardFields,
  coraReplNutleyResourcesH3,
  coraReplNutleyResourcesIntro,
  coraReplNutleyResourcesLinks,
  coraReplNutleyFormH3,
  coraReplNutleyFormIntro,
  coraReplNutleyFormName,
  coraReplNutleyFormLabelAddress,
  coraReplNutleyFormLabelService,
  coraReplNutleyFormLabelChecklist,
  coraReplNutleyFormAddressName,
  coraReplNutleyFormServiceName,
  coraReplNutleyFormQuery,
  coraReplNutleyFormButton,
  coraReplNutleyCommentTexts,
  coraReplNutleySectionComments,
  coraReplNutleyFieldNotesH2,
  coraReplNutleyFieldNotesHeading,
  coraReplNutleyFieldNotesIntro,
  coraReplNutleyFieldNotes,
} from '@/data/cora-261015r-nutley-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-nutley-nj';
const MAPS_URL = 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';
const EMAIL = 'info@newarkqualityroofing.com';

// Renders one HTML comment into the served markup. Comments
// are genuine structural markers for this block; React strips
// JSX comments, so the comment is injected as raw HTML inside
// a hidden div — the mechanism used by every prior Cora pass
// on this site.
function Cmt({ text }: { text: string }) {
  return (
    <div
      aria-hidden="true"
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }}
    />
  );
}

export function CoraRoadmap261015rNutley() {
  const c = coraReplNutleySectionComments;

  return (
    <section
      aria-label="Roof replacement in Nutley, NJ — extended guide, service log, photo record, and field notes"
      className="bg-cream py-14"
    >
      <Cmt text={coraReplNutleyCommentTexts[0]} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplNutleyBlockSummary}
          </summary>

          <Cmt text={c[0]} />
          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplNutleyBlockIntro}</p>

          <div>
            <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
              {coraReplNutleyGuideH2}
            </h2>
            <p className="mt-3 text-navy/85 leading-relaxed">{coraReplNutleyGuideIntro}</p>

            {coraReplNutleySections.map((s, i) => (
              <article key={s.h3}>
                <Cmt text={c[1 + i]} />
                <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
                {s.h4 && (
                  <>
                    <h4 className="mt-5 font-display text-lg font-semibold text-navy">{s.h4}</h4>
                    <p className="mt-1 text-navy/85 leading-relaxed">{s.h4p}</p>
                  </>
                )}
              </article>
            ))}

            {coraReplNutleySubsections.map((s, i) => (
              <div key={s.h3}>
                <Cmt text={c[11 + i]} />
                <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              </div>
            ))}
          </div>

          <Cmt text={c[14]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            Roof Replacement Service Log — Nutley NJ &amp; Essex County
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplNutleyServiceLogIntro}</p>
          <p className="mt-3 text-navy/85 leading-relaxed">
            {coraReplNutleyServiceLogLabels.map((label, i) => (
              <span key={label}>
                {i > 0 && ' · '}
                <span className="font-semibold text-navy">{label}</span>
              </span>
            ))}
          </p>
          {coraReplNutleyServiceLogEntries.map((entry) => (
            <p key={entry.lead} className="mt-3 text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">{entry.lead}</span>
              {entry.rest}
            </p>
          ))}

          <Cmt text={c[15]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplNutleyQuotesH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplNutleyQuotesIntro}</p>
          {coraReplNutleyQuotes.map((q) => (
            <figure key={q.q.slice(0, 40)} className="mt-5">
              <blockquote className="border-l-4 border-navy/25 pl-4 text-navy/85 italic leading-relaxed">
                <p>&ldquo;{q.q}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-1 text-sm text-navy/70">{q.a}</figcaption>
            </figure>
          ))}

          <Cmt text={c[16]} />
          <div>
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplNutleyPhotoH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplNutleyPhotoIntro}</p>
            {coraReplNutleyPhotoGroups.map((g, gi) => (
              <div key={g}>
                <h5 className="mt-6 font-display text-base font-semibold text-navy">{g}</h5>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {coraReplNutleyGalleryImages.filter((img) => img.group === gi).map((img) => (
                    <figure key={img.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                      <figcaption className="mt-1 text-sm text-navy/70">
                        <span>{img.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <Cmt text={c[17]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplNutleyCardH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplNutleyCardIntro}</p>
          <div className="mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4">
            <p className="text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Newark Quality Roofing</span>{' '}
              is the business holding the Nutley replacement files above. Its own record
              for this page lives at{' '}
              <a className="underline" href={PAGE_URL}>
                this Nutley roof replacement record
              </a>
              , and the office is on the map at{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline">
                Newark Quality Roofing on Google Maps
              </a>
              .
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Email the office at <span>{EMAIL}</span> for a free written
              estimate — replacing a roof starts with the deck inspection, and the estimate
              names the system line by line.
            </p>
            {coraReplNutleyCardFields.map((f) => (
              <p key={f.label} className="mt-3 text-navy/85 leading-relaxed">
                <span className="font-semibold text-navy">{f.label}</span>
                {' — '}
                <span>{f.value}</span>
              </p>
            ))}
          </div>

          <Cmt text={c[18]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplNutleyResourcesH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplNutleyResourcesIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplNutleyResourcesLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener" className="underline">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline">
                Newark Quality Roofing on Google — maps listing, directions &amp; service area
              </a>
            </li>
          </ul>

          <Cmt text={c[19]} />
          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplNutleyFormH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplNutleyFormIntro}</p>
          <form
            action="https://www.google.com/maps/search/"
            method="get"
            name={coraReplNutleyFormName}
            className="mt-4 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <label className="block text-navy/85">
              {coraReplNutleyFormLabelAddress}
              <input
                type="text"
                name={coraReplNutleyFormAddressName}
                defaultValue={coraReplNutleyFormQuery}
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              />
            </label>
            <label className="mt-3 block text-navy/85">
              {coraReplNutleyFormLabelService}
              <select
                name={coraReplNutleyFormServiceName}
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              >
                <option>Full roof replacement</option>
                <option>Slate or cedar replacement</option>
                <option>Flat roof replacement</option>
                <option>Storm damage replacement</option>
              </select>
            </label>
            <label className="mt-3 flex items-start gap-2 text-navy/85">
              <input type="checkbox" name="checklist" className="mt-1" />
              <span>{coraReplNutleyFormLabelChecklist}</span>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-navy px-5 py-2 font-semibold text-white"
            >
              {coraReplNutleyFormButton}
            </button>
          </form>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplNutleyFieldNotesH2}
          </h2>
          <Cmt text={c[20]} />
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplNutleyFieldNotesHeading}
            </summary>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplNutleyFieldNotesIntro}</p>
            {coraReplNutleyFieldNotes.map((note) => (
              <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                {note}
              </p>
            ))}
          </details>
        </details>
      </div>
      <Cmt text={coraReplNutleyCommentTexts[1]} />
    </section>
  );
}
