import Link from 'next/link';
import {
  cora261125Intro,
  cora261125ExactParas,
  cora261125RepairServiceParas,
  cora261125RoofingRepairParas,
  cora261125GutterParas,
  cora261125NewarkRoofersParas,
  cora261125GutterInstallLinks,
  cora261125GutterGuardLinks,
} from '@/data/cora-261125-homepage-content';

// CORA run 261125 supplemental block for the HOMEPAGE
// (keyword "roofer newark nj", tracked page https://newarkqualityroofing.com/).
// Paul directed the variation lines of Phase 1 + Phase 2 be fixed first.
// Everything added for those lines lives inside this one <details> block,
// which starts collapsed; the page's title, H1, meta description and its
// exact 6 H2s (Paul's 2026-11-25 spec) are untouched — the Phase 1 heading
// carriers below are H3s only.
// Lines served (Cora goals, whole-HTML ruler; study:
// files/cora-study-homepage-roofer-261125.md):
//   Phase 1: VAR-H3-contractors +1, VAR-H3-roofing-contractors +1,
//     CP156 Leading Variations in H1/H2/H3 +2 (H3 lead-ins),
//     CP159a Exact Matches in H1-H6 +1 (first H3 leads with the exact phrase).
//   Phase 2: VAR-gutter +368, VAR-roofing-repair +31, VAR-newark-roofers +6,
//     VAR-roof-repair-service +4, VAR-roofing-experts +2,
//     CP470a Exact Matches in HTML +16 (same sentences).

const h3Class = 'mt-8 mb-3 font-heading text-2xl font-semibold text-forest';
const pClass = 'mb-4 font-body text-base leading-relaxed text-text-secondary';
const linkClass =
  'text-copper underline decoration-copper/40 underline-offset-2 hover:text-copper-dark';

export function CoraRoadmap261125Homepage() {
  return (
    <section className="bg-white py-10" aria-label="Roofer Newark NJ field notes and directory">
      <details className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 font-heading text-lg font-semibold text-forest">
          Roofer Newark NJ: Field Notes, Gutter Guides, and the Service Directory
        </summary>

        <p className={pClass}>{cora261125Intro}</p>

        <h3 className={h3Class}>Roofer Newark NJ: What Homeowners Ask Before They Hire</h3>
        {cora261125ExactParas.map((p) => (
          <p key={p.slice(0, 44)} className={pClass}>
            {p}
          </p>
        ))}
        {cora261125RepairServiceParas.map((p) => (
          <p key={p.slice(0, 44)} className={pClass}>
            {p}
          </p>
        ))}

        <h3 className={h3Class}>
          Roofing Contractors in Newark NJ: How Roofing Contractors Price and Run a Job
        </h3>
        {cora261125RoofingRepairParas.map((p) => (
          <p key={p.slice(0, 44)} className={pClass}>
            {p}
          </p>
        ))}

        <h3 className={h3Class}>Gutter Systems in Essex County: Notes From the Gutter Crew</h3>
        {cora261125GutterParas.map((p) => (
          <p key={p.slice(0, 44)} className={pClass}>
            {p}
          </p>
        ))}

        <p className={pClass}>
          Every gutter page on this site, town by town: gutter installation and repair first,
          then gutter guard installation. Each page covers the same gutter system notes for
          that town&apos;s housing stock.
        </p>
        <ul className="mb-4 grid gap-x-8 gap-y-1 font-body text-sm leading-relaxed text-text-secondary sm:grid-cols-2 lg:grid-cols-3">
          {cora261125GutterInstallLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
          {cora261125GutterGuardLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <h3 className={h3Class}>Newark Roofers: Field Notes From Local Roofing Contractors</h3>
        {cora261125NewarkRoofersParas.map((p) => (
          <p key={p.slice(0, 44)} className={pClass}>
            {p}
          </p>
        ))}
        <p className={pClass}>
          The through-line in every note above is the same: roofing repair done in the right
          order, and roofing repair documented, outlasts a quick patch. That is the standard
          this roofer newark nj page is kept to, and it is the standard the crews are held to
          on every job in Essex County.
        </p>

        {/* Phase 1 heading lines (rows 24, 26, 31, 34, 36) — added 2026-11-27
            on Paul's ruling that ALL lines be implemented and the text may be
            hidden: this H1 and the five H2s below live inside the collapsed
            block so the page's visible H1 and Paul's exact 6 visible H2s stay
            word-for-word untouched. */}
        <h1 className="mt-8 mb-3 font-heading text-3xl font-bold text-forest">
          Roofing Contractors Newark NJ: Roof Repair, Roof Installation, and Gutter Services
          from Local Roofing Contractors
        </h1>
        <p className={pClass}>
          This heading index collects the heading-level notes for the homepage: how roofing
          contractors in Newark NJ scope roof repair, roof installation, and gutter services,
          and how local roofing contractors document the work for the homeowner.
        </p>

        <h2 className={h3Class}>
          Roofing Contractors in Newark NJ: How Local Roofing Contractors Estimate a Job
        </h2>
        <p className={pClass}>
          Roofing contractors in Newark NJ estimate from a roof-level inspection: deck
          condition, flashing, ventilation, and the gutter line all enter the written scope
          before any price is quoted.
        </p>

        <h2 className={h3Class}>Roof Repair in Newark NJ: What a Repair Visit Covers</h2>
        <p className={pClass}>
          A repair visit covers the leak trace, the attic check, the flashing and vent
          inspection, and a written scope for the roof repair in Newark NJ homes and
          businesses.
        </p>

        <h2 className={h3Class}>Newark Roofers: How Newark Crews Schedule Roof Work</h2>
        <p className={pClass}>
          Newark roofers schedule inspections first, then repairs, then full installations,
          so every crew arrives with the materials the inspection called for.
        </p>

        <h2 className={h3Class}>
          Gutter Installation and Gutter Repair: Protecting the Roof Edge
        </h2>
        <p className={pClass}>
          Gutter installation and gutter repair protect the roof edge, the fascia, and the
          foundation; the gutter notes above record how the crews size and pitch each run.
        </p>

        <h2 className={h3Class}>
          Roofing Services in Newark NJ: Inspections, Repairs, and Replacements
        </h2>
        <p className={pClass}>
          The roofing services in Newark NJ covered on this site run from inspections and
          leak repairs to full replacements, each with its own page in the directory above.
        </p>
      </details>
    </section>
  );
}
