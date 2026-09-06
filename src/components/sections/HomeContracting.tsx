import { parseRichText } from '@/lib/rich-text';
import {
  homeContracting,
  homeContractingH2,
  homeContractingIntro,
} from '@/data/home-contracting';

// Homepage "How Contracting Works" block (Cora "Roofing Contractor" run, Phases 1
// and 2). Ten H3s each carrying the SINGULAR exact phrase, one H4 sub-point each,
// so the heading tree stays monotonic H2 -> H3 -> H4 for scripts/audit-headings.ts.
// Text-only by design: CP426/CP427 (image counts) are already at goal, and every
// image path on this page has to resolve for validate-internal-links.ts.

const H3 = 'font-heading text-xl font-bold text-forest sm:text-2xl';
const H4 = 'font-heading text-lg font-semibold text-forest';

export function HomeContracting() {
  return (
    <section
      className="bg-parchment/40 py-12 lg:py-16"
      aria-labelledby="home-contracting-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2
          id="home-contracting-heading"
          className="font-heading text-2xl font-bold text-forest sm:text-3xl"
        >
          {homeContractingH2}
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-text-primary">
          {parseRichText(homeContractingIntro)}
        </p>

        <div className="mt-10 space-y-10">
          {homeContracting.map((s) => (
            <div key={s.h3}>
              <h3 className={H3}>{s.h3}</h3>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 font-body text-base leading-relaxed text-text-primary"
                >
                  {parseRichText(p)}
                </p>
              ))}
              <div className="mt-5 border-l-2 border-copper/40 pl-4">
                <h4 className={H4}>{s.point.h4}</h4>
                <p className="mt-2 font-body text-base leading-relaxed text-text-secondary">
                  {parseRichText(s.point.body)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
