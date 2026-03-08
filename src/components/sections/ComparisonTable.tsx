import type { Comparison } from '@/lib/types';
import type { ComparisonContent } from '@/data/comparison-content/schema';

// ─── Winner indicator icons ────────────────────────────────────────────────

function WinnerCheck() {
  return (
    <svg
      className="inline-block h-4 w-4 text-copper"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-label="Winner"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

// ─── Props ─────────────────────────────────────────────────────────────────

interface ComparisonTableProps {
  comparison: Comparison;
  rows: ComparisonContent['comparisonRows'];
}

// ─── A-vs-B Table (material-vs-material, service-vs-service) ──────────────

function AvsBTable({
  itemA,
  itemB,
  rows,
}: {
  itemA: string;
  itemB: string;
  rows: ComparisonContent['comparisonRows'];
}) {
  return (
    <div className="overflow-x-auto -mx-6 px-6">
      <table className="w-full min-w-[480px] border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-forest bg-forest px-4 py-3 text-left font-heading text-sm font-bold text-parchment">
              Feature
            </th>
            <th className="border-b-2 border-forest bg-forest px-4 py-3 text-left font-heading text-sm font-bold text-parchment">
              {itemA}
            </th>
            <th className="border-b-2 border-forest bg-forest px-4 py-3 text-left font-heading text-sm font-bold text-parchment">
              {itemB}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isEven = index % 2 === 0;
            return (
              <tr
                key={index}
                className={isEven ? 'bg-parchment-light' : 'bg-white'}
              >
                <td className="border-b border-border px-4 py-3 font-heading text-sm font-semibold text-forest">
                  {row.feature}
                </td>
                <td
                  className={`border-b border-border px-4 py-3 font-body text-sm text-text-primary ${
                    row.winner === 'A' ? 'bg-copper/10 font-semibold' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {row.winner === 'A' && <WinnerCheck />}
                    {row.itemA}
                  </span>
                </td>
                <td
                  className={`border-b border-border px-4 py-3 font-body text-sm text-text-primary ${
                    row.winner === 'B' ? 'bg-copper/10 font-semibold' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {row.winner === 'B' && <WinnerCheck />}
                    {row.itemB}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Ranked Matrix (decision-helper) ──────────────────────────────────────

function RankedMatrix({
  rows,
}: {
  rows: ComparisonContent['comparisonRows'];
}) {
  return (
    <div className="space-y-3">
      {rows.map((row, index) => (
        <div
          key={index}
          className="rounded-lg border border-border bg-white p-4 transition-colors hover:border-copper/40"
        >
          <div className="flex items-start gap-4">
            {/* Rank number */}
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest font-heading text-sm font-bold text-parchment">
              {index + 1}
            </span>

            <div className="flex-1">
              <h3 className="font-heading text-base font-bold text-forest">
                {row.feature}
              </h3>
              <p className="mt-1 font-body text-sm leading-relaxed text-text-primary">
                {row.itemA}
              </p>
              {row.itemB && (
                <p className="mt-1 font-body text-xs leading-relaxed text-text-secondary">
                  {row.itemB}
                </p>
              )}
            </div>

            {/* Winner indicator for ranked items */}
            {row.winner === 'A' && (
              <span className="shrink-0 rounded-sm bg-copper/10 px-2 py-1 font-body text-xs font-semibold text-copper-dark">
                Top Pick
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────

export function ComparisonTable({ comparison, rows }: ComparisonTableProps) {
  const isDecisionHelper = comparison.category === 'decision-helper';

  return (
    <section aria-labelledby="comparison-table-heading">
      <h2
        id="comparison-table-heading"
        className="font-heading text-2xl font-bold text-forest sm:text-3xl"
      >
        {isDecisionHelper
          ? 'Options Ranked'
          : `${comparison.itemA ?? 'Option A'} vs ${comparison.itemB ?? 'Option B'}`}
      </h2>

      <div className="mt-6">
        {isDecisionHelper ? (
          <RankedMatrix rows={rows} />
        ) : (
          <AvsBTable
            itemA={comparison.itemA ?? 'Option A'}
            itemB={comparison.itemB ?? 'Option B'}
            rows={rows}
          />
        )}
      </div>
    </section>
  );
}
