'use client';

// CORA 261023 (Belleville replacement): Variations in Button
// Tags +5 (CPXR011, tracked 2 -> goal 7). The honest carrier
// is real buttons that do real work: these five controls
// scroll the reader to the five sections of the 261023
// Belleville record (register, photo log, quotes, resources,
// directory, business record). Labels carry the run's
// verbatim variation forms. No form, no fake action.

const TARGETS: { label: string; target: string }[] = [
  { label: 'Read the Belleville Roofer\u2019s Register', target: 'cora-261023-belleville-register' },
  { label: 'See the Roof Replacement Belleville NJ Photo Log', target: 'cora-261023-belleville-photolog' },
  { label: 'Roof Replacement in Belleville NJ — Scope Statements', target: 'cora-261023-belleville-quotes' },
  { label: 'Belleville NJ Roof Replacement — Homeowner Resources', target: 'cora-261023-belleville-resources' },
  { label: 'Business Record: Roof Replacement Belleville NJ', target: 'cora-261023-belleville-record' },
];

export function CoraBellevilleButtons() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="mt-6 flex flex-wrap gap-2">
      {TARGETS.map((t) => (
        <button
          key={t.target}
          type="button"
          onClick={() => go(t.target)}
          className="rounded-full border border-copper/50 px-4 py-2 font-body text-sm text-navy hover:bg-copper/10"
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
