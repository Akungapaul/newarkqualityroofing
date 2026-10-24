// Cora 2026-10-15 phrase roadmap — SUPPLEMENTAL BLOCK for the
// MONTCLAIR roof REPLACEMENT page
// (/roof-replacement-montclair-nj, keyword
// "roof replacement montclair nj").
//
// This is the page's FIRST Cora pass against the replacement
// keyword: the page is a rich Oct-4 combo page (22 headings,
// 62 P tags, six genuine FAQ questions in <summary> elements,
// 3 images; NO questions line is roadmapped in this run, so no
// question headings are manufactured). This block implements
// the CLEAN 57 lines of the verification file at their adjusted
// values (clean list in
// cora-phrase-verification-montclair-replacement-2026-10-15.md;
// the title/meta/keywords/og-site-name clean lines are served
// via the page.tsx override for this slug from the same data
// file).
//
// Heading programme: the block carries exactly +21 headings —
// 2 H2 + 12 H3 + 5 H4 + 2 H6 (22 → 43, R2 NJ Roofing's
// live-verified genuine 43, at the full ask). Six guide
// articles (H3; articles 1 and 3 carry whole-variation-form
// H4s), one subsection, and H3s for the service log, the
// homeowner question, the photo record, resources, and the
// directions form, plus the field-notes H2. Three H4 photo
// group labels; two H6 photo sub-labels carry the H6 entity
// vehicles (lines 12 + 17). The H1 is NOT touched (frozen; the
// two H1-bucket lines are flagged open in the verification).
//
// Content programme: the block's sentences carry the phrase
// singles VERBATIM in lowercase (the factor counts
// case-sensitive literal occurrences; baseline validated
// one-for-one against Cora's tracked values) — the service log
// and subsection carry 'roof repair nj' and 'roof repairs',
// the guide and log carry 'roof replacement services', the
// block intro carries 'roof replacement and repair', a field
// note carries 'roof installed', and the exact phrase 'roof
// replacement montclair nj' runs throughout (line 25 at its
// adjusted +2, delivered well past it and disclosed). This
// run's LSI terms are written into sentences in the field
// notes (standing practice; the LSI pair itself is the frozen
// constant, never chased). The blockquote quotes the page's
// OWN sixth FAQ question verbatim (line 55) — no testimonial
// is invented. Service-log lead-ins are genuine <strong>
// elements (line 56).
//
// Schema: ONE block-level JSON-LD graph + ONE genuine
// microdata nav serve the Phase-12 clean family (16 lines):
// an Organization node (real name, URL, and the site's own
// Montclair city image), a WebSite node with NO
// potentialAction, a WebPage node (real URL, inLanguage,
// keywords), an ImageObject node (real contentUrl + truthful
// caption), and a BreadcrumbList whose crumb names serve the
// Display URL rider. The microdata contents nav is a real
// <nav itemscope itemtype=".../SiteNavigationElement"> holding
// this block's real section links (lines 76/85/95). NOT
// built: the SearchAction chain (the site has no search
// endpoint), an Article node and any datePublished (East
// Orange doctrine), address/telephone/ContactPoint/hasMap
// (none roadmapped), any rating (none roadmapped; D-01).
//
// Markup periphery (Phase 11): the block's elements carry
// real class attributes with verbatim variation forms (line
// 58), styled by the block's own small scoped <style> element
// (line 57 — real rules for the block's real classes; style
// crediting is unproven everywhere and the rerun arbitrates,
// per the verification). The directions form is the genuine
// Google Maps search form (the Bloomfield mechanism): its
// labels carry the Label variation forms (line 52) and its
// name attribute a Form variation form (line 53).
//
// External links: three GENUINE manufacturer references, all
// dofollow. NO platform-root placeholders are placed: no "Has
// Link to X" single is roadmapped in this run, and the Phase-8
// social count lines are pending Paul's verified profile URLs.
//
// Images: 26 pool images, ALL with genuine ALT (29 images /
// 29 ALT page-wide — the adjusted Shared-Average field level),
// each in a <figure> with a span-wrapped plain caption. All
// srcs /images/… (never /public/images/…), each verified to
// exist in public/images by its exact file name.
//
// House pattern (standing): expandable <details> block
// starting collapsed, never display:none.

import {
  coraReplMontclairBlockSummary,
  coraReplMontclairBlockIntro,
  coraReplMontclairGuideH2,
  coraReplMontclairGuideIntro,
  coraReplMontclairSections,
  coraReplMontclairSubsection,
  coraReplMontclairServiceLogIntro,
  coraReplMontclairServiceLogEntries,
  coraReplMontclairQuotesH3,
  coraReplMontclairQuotesIntro,
  coraReplMontclairQuote,
  coraReplMontclairPhotoH3,
  coraReplMontclairPhotoIntro,
  coraReplMontclairPhotoGroups,
  coraReplMontclairPhotoSubLabels,
  coraReplMontclairGalleryImages,
  coraReplMontclairResourcesH3,
  coraReplMontclairResourcesIntro,
  coraReplMontclairResourcesLinks,
  coraReplMontclairFormH3,
  coraReplMontclairFormIntro,
  coraReplMontclairFormName,
  coraReplMontclairFormLabelAddress,
  coraReplMontclairFormLabelService,
  coraReplMontclairFormLabelChecklist,
  coraReplMontclairFormQuery,
  coraReplMontclairFormButton,
  coraReplMontclairFieldNotesH2,
  coraReplMontclairFieldNotesHeading,
  coraReplMontclairFieldNotesIntro,
  coraReplMontclairFieldNotes,
  coraReplMontclairGraph,
} from '@/data/cora-261015r-montclair-content';

const PAGE_URL = coraReplMontclairGraph.pageUrl;

// The block graph: every assertion is true of the business or
// this page (see the data file header). No potentialAction —
// the site has no search endpoint, so no SearchAction is
// asserted at any value.
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'Newark Quality Roofing',
      url: coraReplMontclairGraph.siteUrl,
      image: coraReplMontclairGraph.orgImage,
    },
    {
      '@type': 'WebSite',
      name: 'Newark Quality Roofing',
      url: coraReplMontclairGraph.siteUrl,
    },
    {
      '@type': 'WebPage',
      url: PAGE_URL,
      name: 'Roof Replacement Montclair, NJ',
      // Group 2 (2026-10-24): the roadmap's datePublished
      // line — this page's replacement record entered the
      // repo 2026-10-15 (the run this block documents); the
      // microdata twin rides the new WebPage shell below.
      datePublished: '2026-10-15',
      inLanguage: 'en-US',
      keywords: coraReplMontclairGraph.webPageKeywords,
    },
    {
      '@type': 'ImageObject',
      contentUrl: coraReplMontclairGraph.imageObject.contentUrl,
      caption: coraReplMontclairGraph.imageObject.caption,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: coraReplMontclairGraph.crumbNames[0],
          item: 'https://newarkqualityroofing.com/roof-replacement-newark-nj',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: coraReplMontclairGraph.crumbNames[1],
          item: PAGE_URL,
        },
      ],
    },
  ],
};

// The block's own scoped styles (line 57 vehicle): real rules
// for the block's real classes — the photo grid's figure
// spacing, the contents nav's link row, the log's strong
// lead-ins, and anchor scroll offset for the nav targets. The
// two CSS comments are genuine section markers for this
// stylesheet and carry the run's phrase, as stylesheet
// comments in this codebase do.
const BLOCK_CSS = `
/* roof replacement montclair nj — supplemental record layout */
.cora-261015r-montclair-record .photo-grid figure { margin: 0; }
.cora-261015r-montclair-record .contents-nav a { text-decoration: underline; }
.cora-261015r-montclair-record .service-log strong { color: #1c2b4a; }
.cora-261015r-montclair-record section, .cora-261015r-montclair-record article { scroll-margin-top: 6rem; }
/* montclair nj roof replacement — end of record styles */
`;

export function CoraRoadmap261015rMontclair() {
  return (
    <section
      aria-label="Roof replacement in Montclair, NJ — extended guide, service log, photo record, and field notes"
      className="cora-261015r-montclair-record roof replacement montclair nj record bg-cream py-14"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Roof Replacement Montclair, NJ" />
      <meta itemProp="url" content={PAGE_URL} />
      <meta itemProp="datePublished" content="2026-10-15" />
      <style dangerouslySetInnerHTML={{ __html: BLOCK_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <details className="group border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
          <summary className="cursor-pointer font-display text-xl md:text-2xl font-semibold text-navy">
            {coraReplMontclairBlockSummary}
          </summary>

          <p className="mt-4 text-navy/85 leading-relaxed">{coraReplMontclairBlockIntro}</p>

          {/* Genuine microdata contents nav (lines 76/85/95):
              a real SiteNavigationElement holding this block's
              real section links. */}
          <nav
            itemScope
            itemType="https://schema.org/SiteNavigationElement"
            className="contents-nav roof replacement montclair nj contents mt-6 flex flex-wrap gap-x-5 gap-y-2 text-navy/85"
            aria-label="On this record"
          >
            <a href="#cora-261015r-montclair-guide">The Replacement Guide</a>
            <a href="#cora-261015r-montclair-log">Service Log</a>
            <a href="#cora-261015r-montclair-photos">Photo Record</a>
            <a href="#cora-261015r-montclair-resources">Resources</a>
            <a href="#cora-261015r-montclair-directions">Directions &amp; Service Area</a>
            <a href="#cora-261015r-montclair-notes">Field Notes</a>
          </nav>

          <section id="cora-261015r-montclair-guide" className="roof replacement guide montclair">
            <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
              {coraReplMontclairGuideH2}
            </h2>
            <p className="mt-3 text-navy/85 leading-relaxed">{coraReplMontclairGuideIntro}</p>

            {coraReplMontclairSections.map((s) => (
              <article key={s.h3} className="roof replacement montclair nj article">
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

            <div className="roof repair montclair nj decision">
              <h3 className="mt-8 font-display text-xl md:text-2xl font-semibold text-navy">
                {coraReplMontclairSubsection.h3}
              </h3>
              <p className="mt-2 text-navy/85 leading-relaxed">{coraReplMontclairSubsection.p}</p>
            </div>
          </section>

          <section id="cora-261015r-montclair-log" className="service-log roof replacement services montclair">
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              Roof Replacement Service Log — Montclair NJ &amp; Essex County
            </h3>
            <p className="mt-2 text-navy/85 leading-relaxed">{coraReplMontclairServiceLogIntro}</p>
            {coraReplMontclairServiceLogEntries.map((entry) => (
              <p key={entry.lead} className="mt-3 text-navy/85 leading-relaxed">
                <strong className="text-navy">{entry.lead}</strong>
                {entry.rest}
              </p>
            ))}
          </section>

          <section className="roof replacement montclair nj question">
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplMontclairQuotesH3}
            </h3>
            <p className="mt-2 text-navy/85 leading-relaxed">{coraReplMontclairQuotesIntro}</p>
            <figure className="mt-5">
              <blockquote className="border-l-4 border-navy/25 pl-4 text-navy/85 italic leading-relaxed">
                <p>&ldquo;{coraReplMontclairQuote.q}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-1 text-sm text-navy/70">{coraReplMontclairQuote.a}</figcaption>
            </figure>
          </section>

          <section id="cora-261015r-montclair-photos" className="roof replacement montclair nj photos">
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplMontclairPhotoH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplMontclairPhotoIntro}</p>
            {coraReplMontclairPhotoGroups.map((g, gi) => (
              <div key={g}>
                <h4 className="mt-6 font-display text-lg font-semibold text-navy">{g}</h4>
                {gi === 0 && (
                  <h6 className="mt-2 font-display text-sm font-semibold text-navy/80">
                    {coraReplMontclairPhotoSubLabels[0]}
                  </h6>
                )}
                {gi === 2 && (
                  <h6 className="mt-2 font-display text-sm font-semibold text-navy/80">
                    {coraReplMontclairPhotoSubLabels[1]}
                  </h6>
                )}
                <div className="photo-grid mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {coraReplMontclairGalleryImages.filter((img) => img.group === gi).map((img) => (
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
          </section>

          <section id="cora-261015r-montclair-resources" className="roof replacement resources montclair nj">
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplMontclairResourcesH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplMontclairResourcesIntro}</p>
            <ul className="mt-2 list-disc pl-6 text-navy/85 leading-relaxed">
              {coraReplMontclairResourcesLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener" className="underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section id="cora-261015r-montclair-directions" className="roof replacement montclair nj directions">
            <h3 className="mt-10 font-display text-xl md:text-2xl font-semibold text-navy">
              {coraReplMontclairFormH3}
            </h3>
            <p className="mt-1 text-navy/85 leading-relaxed">{coraReplMontclairFormIntro}</p>
            <form
              action="https://www.google.com/maps/search/"
              method="get"
              name={coraReplMontclairFormName}
              className="mt-4 border border-navy/15 rounded-lg bg-white/70 px-5 py-4"
            >
              <label className="block text-navy/85">
                {coraReplMontclairFormLabelAddress}
                <input
                  type="text"
                  name="q"
                  defaultValue={coraReplMontclairFormQuery}
                  className="mt-2 block w-full max-w-md border border-navy/25 rounded px-3 py-2 text-navy"
                />
              </label>
              <label className="mt-3 block text-navy/85">
                {coraReplMontclairFormLabelService}
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
              <label className="mt-3 flex items-start gap-2 text-navy/85">
                <input type="checkbox" name="checklist" className="mt-1" />
                <span>{coraReplMontclairFormLabelChecklist}</span>
              </label>
              <button
                type="submit"
                className="mt-4 rounded bg-navy px-5 py-2 font-semibold text-white"
              >
                {coraReplMontclairFormButton}
              </button>
            </form>
          </section>

          <section id="cora-261015r-montclair-notes" className="roof replacement montclair nj field notes">
            <h2 className="mt-10 font-display text-2xl md:text-3xl font-semibold text-navy">
              {coraReplMontclairFieldNotesH2}
            </h2>
            <details className="group mt-3 border border-navy/15 rounded-lg bg-white/60 px-5 py-4">
              <summary className="cursor-pointer font-display text-lg md:text-xl font-semibold text-navy">
                {coraReplMontclairFieldNotesHeading}
              </summary>
              <p className="mt-1 text-navy/85 leading-relaxed">{coraReplMontclairFieldNotesIntro}</p>
              {coraReplMontclairFieldNotes.map((note) => (
                <p key={note.slice(0, 32)} className="mt-3 text-navy/85 leading-relaxed">
                  {note}
                </p>
              ))}
            </details>
          </section>
        </details>
      </div>
    </section>
  );
}
