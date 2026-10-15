// Cora 2026-10-15 REPLACEMENT phrase roadmap — SUPPLEMENTAL
// BLOCK for the ROSELAND roof REPLACEMENT page
// (/roof-replacement-roseland-nj, keyword
// "roof replacement roseland nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword: the page is a plain Oct-4 combo page (13 headings,
// 12 images, seven genuine FAQ questions in its FAQPage schema
// and accordion — invisible to heading counters; NO questions
// line is roadmapped in this run, so no question headings are
// manufactured). This block implements the CLEAN 25 lines of
// the verification file (clean list in
// cora-phrase-verification-roseland-replacement-2026-10-15.md;
// the title/meta/keywords clean lines are served via the
// page.tsx override for this slug from the same data file).
//
// Heading programme: exactly +16 headings — 3 H2 + 8 H3 +
// 3 H4 + 2 H6 (13 → 29, line 10's goal exactly; the goal is
// R7 American Eagle's live-verified genuine count). Four
// guide articles (H3; entity-dense for line 7, Entities in
// H3 +12 = R6 DeFalco's genuine 14), the repair-vs-replace
// H2 and one guide H3 carrying the verbatim 'repair roseland'
// form (lines 5/12, delivered by construction), the service
// log, the homeowner-questions H3 (the page's OWN seven FAQ
// questions quoted verbatim in blockquotes), the photo record
// with 2 H4 group labels and 2 entity-dense H6 labels
// (lines 2/13 — ENT017 +1, ENT007 +2, R6 sole carrier), the
// service-record card, a combined resources-and-directions
// H4, and the field-notes H2. The H1 is NOT touched (frozen;
// the two H1-bucket lines are flagged open in the
// verification).
//
// Content programme: the block's sentences carry the phrase
// singles VERBATIM in lowercase (the factor counts
// case-sensitive literal occurrences; baseline validated
// one-for-one against Cora's tracked values) — six
// service-log entries each carry 'repair roseland' once
// (line 16, delivered by construction), and the exact phrase
// 'roof replacement roseland nj' runs through the log and
// field notes (the Exact-Matches line is an artifact at
// adjusted 0; delivery past the honest field level is
// reported as measured). This run's genuine topical terms
// are written into sentences in the field notes (standing
// practice; the LSI pair itself is the frozen constant,
// never chased).
//
// Schema: ONE microdata card + the section's WebPage shell +
// ONE slim JSON-LD node serve the 7 clean Phase-12 lines —
// see the graph comment below. The streetAddress meta is
// wired to the canonical config value, EMPTY by D-01 —
// nothing is invented (flagged in the verification). NO
// OfferCatalog, logo, jobTitle, rating, hasMap or
// postalCode: none is roadmapped in this run (roadmap-only
// discipline; the Nutley no-build precedent).
//
// External links: three GENUINE manufacturer references and
// the Google Maps query anchors. NO platform-root
// placeholders are placed: no "Has Link to X" single is
// roadmapped in this run, and the Phase-8 social count lines
// are pending Paul's verified profile URLs.
//
// Images: 32 pool images, ALL with genuine ALT (44 images /
// 44 ALT page-wide, lines 33/35 at full value), each in a
// <figure> with a span-wrapped caption. All srcs /images/…
// (never /public/images/…), each verified to exist in
// public/images by its exact file name before shipping.
//
// Form: a genuine Google Maps search form (the Bloomfield
// mechanism), with plain honest field names — no
// NAME-attribute line is roadmapped in this run. No HTML
// comments and no <style> element are injected — neither a
// comment-variation nor a style line is roadmapped in this
// run.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/site-config';
import {
  coraReplRoselandBlockIntro,
  coraReplRoselandBlockSummary,
  coraReplRoselandCardFields,
  coraReplRoselandCardH3,
  coraReplRoselandCardIntro,
  coraReplRoselandFieldNotes,
  coraReplRoselandFieldNotesH2,
  coraReplRoselandFieldNotesHeading,
  coraReplRoselandFieldNotesIntro,
  coraReplRoselandFormButton,
  coraReplRoselandFormQuery,
  coraReplRoselandGalleryImages,
  coraReplRoselandGuideH2,
  coraReplRoselandGuideIntro,
  coraReplRoselandPhotoGroups,
  coraReplRoselandPhotoH3,
  coraReplRoselandPhotoH6Labels,
  coraReplRoselandPhotoIntro,
  coraReplRoselandQuestionsH3,
  coraReplRoselandQuestionsIntro,
  coraReplRoselandQuotes,
  coraReplRoselandRepairH2,
  coraReplRoselandRepairP,
  coraReplRoselandResourcesH4,
  coraReplRoselandResourcesIntro,
  coraReplRoselandResourcesLinks,
  coraReplRoselandSections,
  coraReplRoselandServiceLogEntries,
  coraReplRoselandServiceLogIntro,
  coraReplRoselandServiceLogLabels,
} from '@/data/cora-261015r-roseland-content';

const PAGE_URL = 'https://newarkqualityroofing.com/roof-replacement-roseland-nj';
const MAPS_URL = 'https://www.google.com/maps?q=Newark+Quality+Roofing,+Newark,+NJ';

// The slim JSON-LD graph (clean line 44, Uses JSON-LD
// mainEntityOfPage): ONE business node in the canonical type
// order from src/lib/schema.ts, carrying the single
// roadmapped property as an explicit @id cross-reference to
// this page — the Bloomfield graph's own shape. Nothing else
// is asserted: every other schema family is unroadmapped in
// this run.
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['RoofingContractor', 'LocalBusiness', 'Organization'],
      '@id': `${PAGE_URL}#localbusiness`,
      name: 'Newark Quality Roofing',
      url: PAGE_URL,
      mainEntityOfPage: { '@id': PAGE_URL },
    },
  ],
};

export function CoraRoadmap261015rRoseland() {
  return (
    <section
      aria-label="Roof replacement in Roseland, NJ — extended guide, service log, photo record, and field notes"
      className="bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Roseland, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      {/* Clean line 37 (Uses Schema mainentityofpage): the
          WebPage shell points at the page where this record's
          business is the main entity — this page itself. */}
      <link itemProp="mainEntityOfPage" href={PAGE_URL} />
      <JsonLd data={graph} />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplRoselandBlockSummary}
          </summary>

          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplRoselandBlockIntro}</p>

          <div>
            <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
              {coraReplRoselandGuideH2}
            </h2>
            <p className="mt-3 text-navy/85 leading-relaxed">{coraReplRoselandGuideIntro}</p>

            {coraReplRoselandSections.map((s) => (
              <article key={s.h3}>
                <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">{s.h3}</h3>
                <p className="mt-2 text-navy/85 leading-relaxed">{s.p}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplRoselandRepairH2}
          </h2>
          <p className="mt-3 text-navy/85 leading-relaxed">{coraReplRoselandRepairP}</p>

          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            Roof Replacement Service Log — Roseland NJ &amp; Essex County
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplRoselandServiceLogIntro}</p>
          <p className="mt-3 text-navy/85 leading-relaxed">
            {coraReplRoselandServiceLogLabels.map((label, i) => (
              <span key={label}>
                {i > 0 && ' · '}
                <span className="font-semibold text-navy">{label}</span>
              </span>
            ))}
          </p>
          {coraReplRoselandServiceLogEntries.map((entry) => (
            <p key={entry.lead} className="mt-3 text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">{entry.lead}</span>
              {entry.rest}
            </p>
          ))}

          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplRoselandQuestionsH3}
          </h3>
          <p className="mt-2 text-navy/85 leading-relaxed">{coraReplRoselandQuestionsIntro}</p>
          {coraReplRoselandQuotes.map((q) => (
            <figure key={q.q.slice(0, 40)} className="mt-5">
              <blockquote className="border-l-4 border-navy/25 pl-4 text-navy/85 italic leading-relaxed">
                <p>&ldquo;{q.q}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-1 text-sm text-navy/70">{q.a}</figcaption>
            </figure>
          ))}

          <div>
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplRoselandPhotoH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplRoselandPhotoIntro}</p>
            {coraReplRoselandPhotoGroups.map((g, gi) => (
              <div key={g}>
                <h4 className="mt-6 font-display text-lg font-semibold text-navy">{g}</h4>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {coraReplRoselandGalleryImages.filter((img) => img.group === gi).map((img) => (
                    <figure key={img.src}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto rounded" />
                      <figcaption className="mt-1 text-sm text-navy/70">
                        <span>{img.caption}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
                {coraReplRoselandPhotoH6Labels.filter((l) => l.afterGroup === gi).map((l) => (
                  <h6 key={l.text} className="mt-4 text-xs font-semibold uppercase tracking-wide text-navy/60">
                    {l.text}
                  </h6>
                ))}
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplRoselandCardH3}
          </h3>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplRoselandCardIntro}</p>
          {/* Microdata card — the Phase-12 microdata lines
              (38, 40, 41, 42, 43) ride visible elements of
              this card: the multi-type business scope, the
              PostalAddress scope wired to the canonical
              config (streetAddress EMPTY by D-01 — the
              Bloomfield wiring; locality is Newark, the
              business's OWN published home city), and the
              visible telephone anchor on the published
              number. */}
          <div
            itemScope
            itemType="https://schema.org/RoofingContractor https://schema.org/LocalBusiness https://schema.org/Organization"
            className="mt-3 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <p className="text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Newark Quality Roofing</span>{' '}
              is the business holding the Roseland replacement files above. Its own
              record for this page lives at{' '}
              <a className="underline" href={PAGE_URL}>
                this Roseland roof replacement record
              </a>
              , and the office is on the map at{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener" className="underline">
                Newark Quality Roofing on Google Maps
              </a>
              .
            </p>
            <p className="mt-2 text-navy/85 leading-relaxed">
              Call{' '}
              <a className="underline" itemProp="telephone" href={`tel:${siteConfig.phone.tel}`}>
                {siteConfig.phone.display}
              </a>{' '}
              for a free written estimate — replacing a roof starts with the deck
              inspection, and the estimate names the system line by line.
            </p>
            <p className="mt-3 text-navy/85 leading-relaxed">
              <span className="font-semibold text-navy">Business locality</span>
              {' — '}
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <meta itemProp="streetAddress" content={siteConfig.address.street} />
                <span itemProp="addressLocality">Newark</span>,{' '}
                <span itemProp="addressRegion">NJ</span>,{' '}
                <span itemProp="addressCountry">US</span>
              </span>{' '}
              — serving Roseland and Essex County.
            </p>
            {coraReplRoselandCardFields.map((f) => (
              <p key={f.label} className="mt-3 text-navy/85 leading-relaxed">
                <span className="font-semibold text-navy">{f.label}</span>
                {' — '}
                <span>{f.value}</span>
              </p>
            ))}
          </div>

          <h4 className="mt-10 font-display text-lg font-semibold text-navy">
            {coraReplRoselandResourcesH4}
          </h4>
          <p className="mt-1 text-navy/85 leading-relaxed">{coraReplRoselandResourcesIntro}</p>
          <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
            {coraReplRoselandResourcesLinks.map((link) => (
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
          <form
            action="https://www.google.com/maps/search/"
            method="get"
            name="roseland-roof-replacement-directions"
            className="mt-4 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
          >
            <label className="block text-navy/85">
              Your starting address — Roseland NJ service area check
              <input
                type="text"
                name="q"
                defaultValue={coraReplRoselandFormQuery}
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              />
            </label>
            <label className="mt-3 block text-navy/85">
              Service needed
              <select
                name="service"
                className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
              >
                <option>Full roof replacement</option>
                <option>Slate or cedar replacement</option>
                <option>Flat roof replacement</option>
                <option>Storm damage replacement</option>
              </select>
            </label>
            <button
              type="submit"
              className="mt-4 rounded bg-navy px-5 py-2 font-semibold text-white"
            >
              {coraReplRoselandFormButton}
            </button>
          </form>

          <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
            {coraReplRoselandFieldNotesH2}
          </h2>
          <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
            <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
              {coraReplRoselandFieldNotesHeading}
            </summary>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplRoselandFieldNotesIntro}</p>
            {coraReplRoselandFieldNotes.map((note) => (
              <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                {note}
              </p>
            ))}
          </details>
        </details>
      </div>
    </section>
  );
}
