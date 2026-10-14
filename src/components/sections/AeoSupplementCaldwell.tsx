// AEO 2026-10-14 supplemental block for /roof-repair-caldwell-nj
// (AEO action plan Fix 1). Two exports:
//   AeoCaldwellLead — the direct-answer lead paragraph, rendered
//     visibly at the top of the page body (first content in the
//     article). The Rule 7 first sentence lives in the hero
//     directAnswer and is untouched; the H1 is untouched.
//   AeoCaldwellSupplement — one expandable block that starts
//     collapsed (native <details>, never display:none) holding the
//     six Tier 1 question-and-answer pairs, plus a FAQPage JsonLd
//     graph carrying the same six pairs word-for-word so the
//     visible accordion and the schema can never drift.
// Rendered only for the roof-repair x caldwell combo (see
// ComboTemplate). Content lives in
// src/data/aeo-2026-10-14-caldwell-content.ts.

import { JsonLd } from '@/components/seo/JsonLd';
import { buildFaqSchema, buildJsonLdGraph } from '@/lib/schema';
import {
  aeoCaldwellBlockSummary,
  aeoCaldwellLead,
  aeoCaldwellQAs,
} from '@/data/aeo-2026-10-14-caldwell-content';

const pClass = 'mb-4 font-body text-base leading-relaxed text-slate-700';
const h3Class = 'font-heading text-xl font-semibold text-brand-navy';

export function AeoCaldwellLead() {
  return (
    <p className="font-body text-lg leading-relaxed text-slate-800">{aeoCaldwellLead}</p>
  );
}

export function AeoCaldwellSupplement() {
  return (
    <section aria-label="Choosing a roof repair company in Caldwell, NJ" className="bg-white">
      <JsonLd data={buildJsonLdGraph(buildFaqSchema(aeoCaldwellQAs))} />
      <details className="aeo-2026-10-14-caldwell-details mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <summary className="cursor-pointer py-3 text-lg font-semibold text-brand-navy">
          {aeoCaldwellBlockSummary}
        </summary>
        {aeoCaldwellQAs.map((qa) => (
          <div key={qa.question} className="mt-6">
            <h3 className={h3Class}>{qa.question}</h3>
            <p className={pClass}>{qa.answer}</p>
          </div>
        ))}
      </details>
    </section>
  );
}
