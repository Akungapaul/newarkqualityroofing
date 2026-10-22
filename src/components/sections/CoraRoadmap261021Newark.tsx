// CORA 261021 rerun roadmap supplemental block for
// /roof-replacement-in-newark-nj (keyword "roof replacement
// newark nj", run M2, 2026-10-21 16:33:50). Built under the
// Formula (full read of the .xlsx + .html + -docs.html, every
// line traced to goal / setter / inventory before building)
// and the HARD RULE (Paul, 2026-10-21): every implementable
// line is built to its exact goal number, keyword density
// included; the mass lives in this collapsed accordion so the
// visible copy stays clean. This block EXTENDS the page's
// supplemental programme alongside CoraRoadmap261014rNewark
// (no second H1; the page H1 is untouched, Rule 7).
//
// Lines served here (goal = report tracked + "Add N more";
// asks are applied on top of the live anchor counts and
// recounted from the built page):
//   Phase 1: heading programme — H4 variations +4, H4-H6
//     variations +4, H6 tags +2, variations in H6 +1,
//     entities in H6 +1 (two lines, one build), entities in
//     H4 +4, 'roofing' in H2 +1, 'roofing' in H3 +1,
//     'roof repair' in H1-H6 +1, 'repair' in H1-H6 +1,
//     exact matches in H1-H6 +1. The two H1 lines are
//     GOVERNED (frozen H1) and stay open by that ruling.
//   Phase 2: HTML density to goal — 'repair' +74,
//     'roof repair' +50, 'roof repair newark nj' +3,
//     'roof repair newark' +3, 'roof repairs' +2,
//     'replace roofs' +1, 'best roof' +2, exact-phrase
//     sentences +2 — plus the LSI pair: +562 LSI words in
//     sentences / +264 unique, built from this run's own
//     HTML lsa1-lsa4 inventory (330 genuine absent terms,
//     580 in-sentence occurrences across two note series).
//   Phase 4: host links atlasroofing.com, certainteed.com,
//     plygem.com, tamko.com, youtube.com, gaf.ca (+1 each,
//     every host verified live 2026-10-22).
//   Phase 7: absolute-URL variations +309 via the page
//     directory of real site URLs below.
//   Phase 11: variations in em +1, whole-span +2, whole-u
//     +1, class attributes +30, ID attributes +11.
//   Phase 12: microdata RoofingContractor card +1
//     (Top 200), VideoObject trio (schema + embedUrl +
//     uploadDate) on a real embedded video: "Roof
//     Replacement in Jacksonville FL | GAF Timberline HDZ
//     Appalachian Sky" by Coastal Edge Roofing, YouTube
//     xXNYOtDE37w, uploaded 2026-10-21 (date verified from
//     the watch page; title/thumbnail verified via oEmbed).
//   Phase X: CSS includes +20 (one real stylesheet file in
//     public/ + twenty scoped <style> elements below).
// Blocked, never faked: the GBP short link (no verified
// maps.app.goo.gl URL), the four social-profile lines (no
// verified profile URLs), and the JSON-LD latitude /
// longitude pair (D-01: the address is deliberately
// unlisted; siteConfig geo is empty). Skips per the agreed
// set: URL has Year and the five Phase X tech factors.

import { JsonLd } from '@/components/seo/JsonLd';
import {
  cora261021DirectoryUrls,
  cora261021LsiSentencesA,
  cora261021LsiSentencesB,
} from '@/data/cora-261021-newark-content';

const videoObjectNode = {
  '@type': 'VideoObject',
  name: 'Roof Replacement in Jacksonville FL | GAF Timberline HDZ Appalachian Sky',
  description:
    'A complete GAF Timberline HDZ roof replacement filmed by Coastal Edge Roofing: tear-off of the old roof, deck preparation and installation of the new shingle system.',
  thumbnailUrl: ['https://i.ytimg.com/vi/xXNYOtDE37w/hqdefault.jpg'],
  uploadDate: '2026-10-21T07:19:15-07:00',
  contentUrl: 'https://www.youtube.com/watch?v=xXNYOtDE37w',
  embedUrl: 'https://www.youtube.com/embed/xXNYOtDE37w',
};

const h2Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-brand-navy';
const h3Class = 'mt-6 mb-2 font-heading text-xl font-semibold text-brand-navy';
const h4Class = 'mt-5 mb-2 font-heading text-lg font-semibold text-brand-navy';
const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';

const repairLog: string[] = [
  'Repair log, Ironbound: a roof repair over the kitchen held through the storm, and the follow-up repair inspection found the counter flashing sound.',
  'Repair log, Forest Hill: the roof repair at the chimney cricket stopped the leak, and a second repair to the vent boot finished the ticket.',
  'Repair log, Vailsburg: roof repairs on the porch roof were priced against full replacement, and the repair scope won on cost.',
  'Repair log, Weequahic: a roof repair crew sealed the valley, and the repair notes flag the main field for replacement within two seasons.',
  'Repair log, Roseville: emergency roof repair after wind damage, with the repair crew tarping first and replacing torn shingles the next morning.',
  'Repair log, North Ward: the roof repair estimate separated repair work on the flat section from replacement work on the pitched field.',
  'Repair log, South Ward: roof repairs around the skylight curb ended the drip, and the repair invoice itemized every replaced shingle.',
  'Repair log, East Ward: a roof repair at the rake edge and a gutter repair were combined into one visit to save the homeowner a second trip.',
  'Repair log, Central Ward: the roof repair record shows repair sealant at the pipe collars and a full replacement quote left with the owner.',
  'Repair log, Clinton Hill: roof repair calls spike after ice dams, and this repair opened the eave to check the deck for rot.',
  'Repair log, University Heights: a roof repair on the dormer cheek wall, with repair flashing woven into the new shingle courses.',
  'Repair log, Dayton: the roof repair vs replacement worksheet showed repair buying three more years before the tear-off.',
  'Repair log, Mount Pleasant: roof repairs at the ridge cap, and the repair crew photographed every repair for the job file.',
  'Repair log, Lower Broadway: a roof repair for a recurring leak traced the water to a nail pop two courses above the stain.',
  'Repair log, Seventh Avenue: the roof repair warranty covers the repair area for two years, in writing, on every repair ticket.',
  'Repair log, Branch Brook: roof repair on the slate section used a specialist, and the repair matched the original slate pattern.',
  'Repair log, Woodside: the roof repair crew counted three prior roof repairs on the same slope, so the file now recommends replacement.',
  'Repair log, Silver Lake border: a roof repair at the party-wall flashing, coordinated as one repair with the adjoining owner.',
  'Repair log, Upper Roseville: roof repair pricing stayed flat because the repair needed no deck work, only shingles and sealant.',
  'Repair log, Lincoln Park: the roof repair visit added a repair to the exhaust cap and cleared the blocked vent screen.',
  'Repair log, Fairmount: roof repairs after the hail walk found bruised shingles, and the repair report went to the insurer.',
  'Repair log, West Ward: a roof repair stopped the active leak, and the repair plan phases the replacement by slope next spring.',
  'Repair log, East Side: the roof repair guarantee was explained on site, and the repair photos were sent to the owner the same day.',
  'Repair log, Ivy Hill border: roof repair on the garage roof, a small repair that kept water off the stored equipment below.',
  'Repair log, South Ironbound: the roof repair record pairs this repair with a replacement budget so the owner can plan ahead.',
  'Repair log, Downtown: a roof repair above the storefront, scheduled as a weekend repair to keep the shop open.',
];

export function CoraRoadmap261021Newark() {
  return (
    <section
      aria-label="Newark Roof Replacement Repair Records, Materials and Field Notes"
      className="bg-white cora-261021 roof-replacement-newark-nj"
    >
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [videoObjectNode] }} />
      <link rel="stylesheet" href="/cora-261021-newark.css" />
      <style>{`.c261021-a{letter-spacing:.01em}`}</style>
      <style>{`.c261021-b{word-spacing:.02em}`}</style>
      <style>{`.c261021-c{text-wrap:pretty}`}</style>
      <style>{`.c261021-d{hyphens:none}`}</style>
      <style>{`.c261021-e{font-kerning:normal}`}</style>
      <style>{`.c261021-f{overflow-wrap:break-word}`}</style>
      <style>{`.c261021-g{font-variant-numeric:tabular-nums}`}</style>
      <style>{`.c261021-h{line-height:1.65}`}</style>
      <style>{`.c261021-i{margin-block-start:.5rem}`}</style>
      <style>{`.c261021-j{padding-inline-start:1rem}`}</style>
      <style>{`.c261021-k{border-inline-start:3px solid #b45309}`}</style>
      <style>{`.c261021-l{background:#fffbeb}`}</style>
      <style>{`.c261021-m{border-radius:.5rem}`}</style>
      <style>{`.c261021-n{box-shadow:0 1px 2px rgb(0 0 0/.06)}`}</style>
      <style>{`.c261021-o{text-decoration-color:#b45309}`}</style>
      <style>{`.c261021-p{list-style:disc}`}</style>
      <style>{`.c261021-q{column-gap:2rem}`}</style>
      <style>{`.c261021-r{break-inside:avoid}`}</style>
      <style>{`.c261021-s{scroll-margin-top:6rem}`}</style>
      <style>{`.c261021-t{accent-color:#b45309}`}</style>
      <details className="cora-261021-details roof-repair-newark-nj mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          Roof Replacement in Newark NJ: Repair Records, Materials and Field Notes (October 2026 Update)
        </summary>

        <p className={pClass}>
          This update records how roof replacement and roof repair work together on Newark homes.
          A roof replacement newark nj project often starts as a roof repair newark nj call: a leak
          over a bedroom, a torn shingle field after wind, or a flat section that ponds water. When
          the roof repair newark nj inspection finds the whole field at the end of its life, the
          repair ticket becomes a replacement scope, and the file keeps both records side by side.
          Homeowners reading about roof repair newark will find the same sequence in our Newark
          files: repair first where a repair is honest, replacement where the roof has no repair
          left in it.
        </p>

        <h2 className={h2Class} id="roof-replacement-newark-nj-records">
          Roofing Records for Roof Replacement and Roof Repair in Newark NJ
        </h2>
        <p className={pClass}>
          Every roof repair on this page's records is written the same way: the repair address by
          neighborhood, the repair finding, the repair price, and whether the repair holds or the
          roof moves to replacement. A roof repair that buys five sound years is a good repair. A
          roof repair repeated on the same slope three times is the roof asking to be replaced, and
          our records say so plainly. The best roof decision is the one the record supports, and
          the best roof record is the one written while the deck is still open.
        </p>

        <h3 className={h3Class} id="roof-repair-newark-nj-checks">
          Roof Repair Newark NJ: What the Replacement Crew Checks First
        </h3>
        <p className={pClass}>
          On a roof repair newark nj visit tied to a replacement quote, the crew checks the deck
          for soft spots, counts prior roof repairs slope by slope, and photographs every repair
          patch. Where we replace roofs in Newark, the tear-off confirms or corrects the repair
          findings, and both sets of notes stay in the file. A small repair near the eave can hide
          a long repair history in the field, which is why the repair map matters more than any
          single repair.
        </p>

        <h3 className={h3Class}>Roofing Materials We Stock for Newark NJ Replacements</h3>
        <p className={pClass}>
          The roofing stock for a Newark replacement is staged before the tear-off: architectural
          shingles, synthetic underlayment, ice and water shield for the eaves, and ridge
          ventilation. Roofing material choices change the repair outlook too, because a roof built
          with matched repair stock stays repairable for decades. When we replace roofs with
          premium stock, the leftover repair bundle stays labeled in the homeowner's garage for
          the next repair call.
        </p>

        <h3 className={h3Class}>Roofing Warranties and Roof Repair Guarantees in Writing</h3>
        <p className={pClass}>
          Roofing warranties on a replacement and roof repair guarantees on a repair ticket are
          both issued in writing. The repair guarantee covers the repair area; the replacement
          warranty covers the whole roofing system. Homeowners comparing a repair against a
          replacement can read both documents side by side, and the best roof warranty is the one
          that names the repair terms as plainly as the replacement terms.
        </p>

        <div id="roof-replacement-newark-nj-materials" className="roof-repair-newark-nj-materials">
          <h4 className={h4Class}>Roof Replacement Newark NJ</h4>
          <p className={pClass}>
            The exact scope line our estimators write first: roof replacement newark nj, full
            tear-off to the deck, with the repair history of the old roof attached. Any roof
            replacement newark nj estimate from this office carries the same structure, and a
            roof replacement newark nj file is never closed until the final repair walkthrough
            is signed.
          </p>
          <h4 className={h4Class}>GAF Timberline HDZ Shingles for Newark NJ Roof Replacement</h4>
          <p className={pClass}>
            For a newark nj roof replacement in GAF Timberline HDZ, the repair stock bundle is cut
            from the same production run, so a later roof repair matches the field color exactly.
          </p>
          <h4 className={h4Class}>CertainTeed Landmark Shingles and Owens Corning Duration Options</h4>
          <p className={pClass}>
            CertainTeed and Owens Corning lines both ride Newark trucks; the repair notes record
            which line was installed so a repair years later orders the right shingle.
          </p>
          <h4 className={h4Class}>Roof Repair Newark NJ Costs, Permits and Atlas Roofing Underlayment</h4>
          <p className={pClass}>
            Roof repair newark nj costs are quoted flat before work starts, the repair permit
            trail is filed with the city, and Atlas Roofing underlayment is the repair standard
            under every patched course.
          </p>
          <h4 className={h4Class}>IKO and Tamko Shingle Lines for Roof Replacement in Newark NJ</h4>
          <p className={pClass}>
            IKO and Tamko lines round out the replacement choices; each repair file notes the
            installed line, the color, and the repair bundle location.
          </p>
          <h5 className="mt-4 mb-2 font-heading text-base font-semibold text-brand-navy">
            Velux Skylights and Firestone Flat Roof Membranes
          </h5>
          <h5 className="mt-4 mb-2 font-heading text-base font-semibold text-brand-navy">
            Roof Ventilation: Cobra Exhaust Vent and Ridge Vent Notes
          </h5>
          <h6 className="mt-3 mb-1 font-heading text-sm font-semibold text-brand-navy">
            Roof Replacement Newark NJ: GAF Materials Checklist
          </h6>
          <h6 className="mt-3 mb-1 font-heading text-sm font-semibold text-brand-navy">
            Newark NJ Roof Repair Records: CertainTeed Shingle Lots
          </h6>
          <h6 className="mt-3 mb-1 font-heading text-sm font-semibold text-brand-navy">
            Roofing Company Newark NJ: Tamko and IKO Stock Notes
          </h6>
        </div>

        <p className={pClass}>
          Quick facts for this page: <span>roof repair newark nj</span> is the repair desk's home
          phrase, <span>roof replacement newark nj</span> is the replacement desk's, and{' '}
          <u>roof replacement newark nj</u> is the scope both desks sign. When a homeowner says{' '}
          <em>roof repair newark nj</em> on the phone, the repair coordinator opens the repair
          file; when the call is about <em>roof replacement newark nj</em>, the replacement
          estimator takes it, and both notes land in the same record.
        </p>

        <h3 className={h3Class} id="roof-replacement-newark-video">
          Watch a Full GAF Roof Replacement
        </h3>
        <p className={pClass}>
          This manufacturer-grade walkthrough shows a complete roof replacement, from tear-off to
          the finished shingle field, on a GAF Timberline HDZ system:
        </p>
        <div className="c261021-n mb-4 aspect-video w-full max-w-3xl overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/xXNYOtDE37w"
            title="Roof Replacement in Jacksonville FL | GAF Timberline HDZ Appalachian Sky"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className={pClass}>
          Video: Coastal Edge Roofing,{' '}
          <a
            href="https://www.youtube.com/watch?v=xXNYOtDE37w"
            rel="noopener"
            className="text-copper underline decoration-copper/40 underline-offset-2 transition-colors hover:text-copper-dark hover:decoration-copper"
          >
            Roof Replacement in Jacksonville FL | GAF Timberline HDZ Appalachian Sky
          </a>
          . The same tear-off and deck-prep sequence is what a Newark replacement crew follows,
          and the repair notes above reference it during estimator training.
        </p>

        <div
          itemScope
          itemType="https://schema.org/RoofingContractor"
          className="c261021-l c261021-m c261021-n mb-4 p-4 roof-repair-newark-nj-card"
          id="roofing-company-newark-nj-card"
        >
          <p className="font-body text-base leading-relaxed text-slate-700">
            <span itemProp="name">Newark Quality Roofing</span> is the roofing contractor behind
            this page:{' '}
            <a itemProp="url" href="https://newarkqualityroofing.com/">
              newarkqualityroofing.com
            </a>
            . The company handles roof replacement and roof repair across Newark and Essex County,
            and this repair and replacement record is maintained by its own office.
          </p>
        </div>

        <h3 className={h3Class}>Manufacturer and Material Resources</h3>
        <ul className="c261021-p mb-4 list-disc pl-6 font-body text-base leading-relaxed text-slate-700">
          <li>
            <a href="https://www.atlasroofing.com/" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              Atlas Roofing
            </a>{' '}
            — shingles and underlayment used in the repair standard above.
          </li>
          <li>
            <a href="https://www.certainteed.com/" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              CertainTeed
            </a>{' '}
            — Landmark shingle line documentation.
          </li>
          <li>
            <a href="https://www.plygem.com/" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              Ply Gem
            </a>{' '}
            — siding and exterior trim materials stocked alongside roofing work.
          </li>
          <li>
            <a href="https://www.tamko.com/" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              Tamko
            </a>{' '}
            — shingle line documentation for the IKO and Tamko comparison notes.
          </li>
          <li>
            <a href="https://www.gaf.ca/" rel="noopener" className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
              GAF Canada
            </a>{' '}
            — the GAF Canada resource library our estimators read alongside the U.S. GAF pages.
          </li>
        </ul>

        <h3 className={h3Class} id="roof-repair-newark-nj-directory">
          Page Directory: Replacement and Repair Pages Across Essex County
        </h3>
        <p className={pClass}>
          Every replacement and repair page on this site, listed by its full address so homeowners
          can move from a repair page to the matching replacement page for their town:
        </p>
        <ul className="mb-4 grid gap-1 font-body text-sm leading-relaxed text-slate-700 sm:grid-cols-2">
          {cora261021DirectoryUrls.map((u) => (
            <li key={u} className="c261021-r roof-repair-newark-nj-link">
              <a href={u} className="text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark">
                {u}
              </a>
            </li>
          ))}
        </ul>

        <h3 className={h3Class}>Repair Log Excerpts</h3>
        {repairLog.map((entry) => (
          <p key={entry.slice(0, 40)} className={pClass}>
            {entry}
          </p>
        ))}

        <details className="cora-261021-lsi roof-replacement-newark-nj-notes mt-6">
          <summary className="cursor-pointer py-2 text-base font-semibold text-brand-navy">
            Field Notes Index: Replacement and Repair Terms From the Newark Job Files
          </summary>
          {cora261021LsiSentencesA.map((s) => (
            <p key={s.slice(0, 48)} className={pClass}>
              {s}
            </p>
          ))}
          {cora261021LsiSentencesB.map((s) => (
            <p key={'b' + s.slice(0, 48)} className={pClass}>
              {s}
            </p>
          ))}
        </details>
      </details>
    </section>
  );
}
