import { JsonLd } from '@/components/seo/JsonLd';
import {
  cora261022WoCards,
  cora261022WoCitedHosts,
  cora261022WoDirectory,
} from '@/data/cora-261022-west-orange-content';

// CORA 261022 rerun roadmap supplemental block for
// /roof-replacement-west-orange-nj (keyword "roof replacement
// west orange nj", run M3, 2026-10-22 18:04:03). Built under the
// Formula as amended by the 2026-10-22 self-audit: every line
// traced to goal / setter / inventory, counting source declared
// per family, baseline sanity checked against the live page
// before building. This block EXTENDS the page's supplemental
// programme alongside CoraRoadmap261015rWestOrange (no second
// H1; the page H1 is untouched, Rule 7).
//
// Lines served here (goal = run tracked + "Add N more", Shared
// Data Result 34 column; local zone counts validate the build
// only and Paul's rerun arbitrates):
//   Phase 7 (DOM): Number of Links +333, DoFollow +334, HTTPS
//     +333, Internal +338 \u2014 460 directory anchors below
//     (absolute https, no nofollow), all real site pages.
//   Phase 11 (DOM, locally counted only): LI +722, A +742,
//     Div +862, Host Citations +5, Distinct HREF +939,
//     HREF +587, Nav +1932 \u2014 the directory, 60 field-note
//     cards and the cited-hosts list, all wrapped in one <nav>.
//   Phase 12 (DOM): JSON-LD ContactPoint +1 with contactType
//     and availableLanguage (telephone = the number this page
//     itself displays; url = the real /contact page), plus a
//     microdata ContactPoint card (Schema contactpoint /
//     contacttype / availablelanguage).
//   Phase X (DOM): CSS Includes +11 \u2014 thirteen real stylesheet
//     files in public/ linked below.
// NOT built, named in the implementation report: the H1 line is
// GOVERNED (frozen H1); the LSI pair is a measurement-artifact
// exception (export constants, verified 2026-10-22); Phase 6 is
// SERP-measured and carried; the five social lines are blocked
// on the business's own profile URLs; the six geo lines are
// blocked under D-01 (no verified geo; coordinates are never
// faked); the four credential lines are blocked (no verified
// license or credential exists for this business and the site
// asserts none); the Phase X skip set stands by factor name.

const contactPointNode = {
  '@type': 'ContactPoint',
  telephone: '+1-973-649-9535',
  contactType: 'customer service',
  availableLanguage: ['English'],
  url: 'https://newarkqualityroofing.com/contact',
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

export function CoraRoadmap261022WestOrange() {
  return (
    <section
      aria-label="West Orange Roof Replacement Directory, Field Notes and Cited Sources"
      className="bg-white cora-261022-west-orange"
    >
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [contactPointNode] }} />
      <link rel="stylesheet" href="/cora-261022-wo-a.css" />
      <link rel="stylesheet" href="/cora-261022-wo-b.css" />
      <link rel="stylesheet" href="/cora-261022-wo-c.css" />
      <link rel="stylesheet" href="/cora-261022-wo-d.css" />
      <link rel="stylesheet" href="/cora-261022-wo-e.css" />
      <link rel="stylesheet" href="/cora-261022-wo-f.css" />
      <link rel="stylesheet" href="/cora-261022-wo-g.css" />
      <link rel="stylesheet" href="/cora-261022-wo-h.css" />
      <link rel="stylesheet" href="/cora-261022-wo-i.css" />
      <link rel="stylesheet" href="/cora-261022-wo-j.css" />
      <link rel="stylesheet" href="/cora-261022-wo-k.css" />
      <link rel="stylesheet" href="/cora-261022-wo-l.css" />
      <link rel="stylesheet" href="/cora-261022-wo-m.css" />
      <details className="c261022wo-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Replacement West Orange NJ: Page Directory, Field Notes and Cited Sources
        </summary>
        <nav aria-label="West Orange roof replacement directory and field notes" className="c261022wo-nav">
          <h2 className={h2Class}>
            Roof Replacement West Orange NJ: Every Replacement and Repair Page on This Site
          </h2>
          <p className={pClass}>
            This index lists the roof replacement and roof repair pages published on this
            site, town by town across Essex County and northern New Jersey, so a West Orange
            homeowner can move from this roof replacement west orange nj page to the matching
            page for any nearby town. Every entry is a live page on newarkqualityroofing.com.
          </p>
          <ul className="c261022wo-dir mb-4 font-body text-sm leading-relaxed text-slate-700">
            {cora261022WoDirectory.map((d) => (
              <li key={d.url}>
                <a href={d.url} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                  {d.anchor}
                </a>
              </li>
            ))}
          </ul>

          <h2 className={h2Class}>West Orange Roof Replacement Field Notes</h2>
          <div className="c261022wo-cards">
            {cora261022WoCards.map((c) => (
              <div key={c.slice(0, 44)} className="c261022wo-card">
                <p className={pClass}>{c}</p>
              </div>
            ))}
          </div>

          <h3 className={h3Class}>Sources Cited for This West Orange Roof Replacement Page</h3>
          <ul className="mb-4 list-disc pl-6 font-body text-base leading-relaxed text-slate-700">
            {cora261022WoCitedHosts.map((c) => (
              <li key={c.host}>
                <a href={c.url} rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                  {c.host}
                </a>
                {': '}{c.note}
              </li>
            ))}
          </ul>

          <div
            itemScope
            itemType="https://schema.org/ContactPoint"
            className="c261022wo-card"
          >
            <p className={pClass}>
              <span itemProp="name">Newark Quality Roofing \u2014 replacement desk</span>: 
              <span itemProp="contactType">customer service</span> for roof replacement in
              West Orange, NJ. Call 
              <a itemProp="telephone" href="tel:+19736499535" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                (973) 649-9535
              </a> 
              or use the 
              <a itemProp="url" href="https://newarkqualityroofing.com/contact" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                contact page
              </a>
              . Languages: <span itemProp="availableLanguage">English</span>.
            </p>
          </div>
        </nav>
      </details>
    </section>
  );
}
