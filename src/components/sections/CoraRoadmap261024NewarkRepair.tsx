import {
  cora261024NewarkRepairComments as comments,
  cora261024NewarkRepairCss,
  cora261024NewarkRepairExperts,
  cora261024NewarkRepairH3s,
  cora261024NewarkRepairIntro,
  cora261024NewarkRepairQuote,
  cora261024NewarkRepairQuoteFooter,
  cora261024NewarkRepairSummary,
} from '@/data/cora-261024-newark-repair-content';

// CORA 261024 block for /roof-repair-in-newark-nj (keyword
// "roof repair newark nj"). Study: cora-study-newark-repair-261024.md.
// Run 261024 measured the restructured page; the POP pass 1982649
// (PR #102) then reduced the live page at Paul's direction. This
// block builds ONLY the non-colliding implementable lines:
//   Phase 1:  Entities in H3 Tags +3 (two entity-rich H3s below)
//   Phase 2:  Variation 'roof repair experts' in the HTML Tag +3
//   Phase 11: Variations in Blockquote Tags +1, Variations in
//             Style Tags +319, Variations in HTML Comment Tags +3
// The colliding density lines are escalated in the study for
// Paul's ruling and are not built. Content sits in a collapsed
// supplemental accordion (the house carrier), per the Formula.
// The comment carrier follows the 261023 batch's Cmt pattern; the
// host div carries no display:none - a div holding only an HTML
// comment renders nothing.

function Cmt({ text }: { text: string }) {
  return <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
}

export function CoraRoadmap261024NewarkRepair() {
  const c = comments;
  return (
    <section
      aria-label="Roof repair in Newark, NJ - 261024 supplemental record: materials register, damage patterns and service standard"
      className="cora-261024-newark-repair-record"
    >
      <Cmt text={c[0]} />
      <style dangerouslySetInnerHTML={{ __html: cora261024NewarkRepairCss }} />
      <details className="nqr-supp">
        <summary className="cursor-pointer font-heading text-xl font-semibold text-forest">
          {cora261024NewarkRepairSummary}
        </summary>
        <Cmt text={c[1]} />
        <p className="mt-3 font-body text-base leading-relaxed text-text-secondary">
          {cora261024NewarkRepairIntro}
        </p>
        {cora261024NewarkRepairH3s.map((s, i) => (
          <div key={s.h3}>
            {i === 1 && <Cmt text={c[2]} />}
            <h3 className="mt-6 font-heading text-lg font-semibold text-forest">{s.h3}</h3>
            <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">{s.p}</p>
          </div>
        ))}
        <Cmt text={c[3]} />
        <p className="mt-4 font-body text-base leading-relaxed text-text-secondary">
          {cora261024NewarkRepairExperts}
        </p>
        <blockquote className="mt-4">
          <p className="font-body text-base leading-relaxed text-text-secondary">
            &ldquo;{cora261024NewarkRepairQuote}&rdquo;
          </p>
          <footer className="mt-1 font-body text-sm text-text-secondary">
            {cora261024NewarkRepairQuoteFooter}
          </footer>
        </blockquote>
        <Cmt text={c[4]} />
      </details>
      <Cmt text={c[5]} />
    </section>
  );
}
