import Link from 'next/link';
import { coraPhase7AbsoluteLinks } from '@/data/cora-phase7-links';

const styleVariations = [
  'ac-repair', 'best-roof-repair', 'cheap-roof-repair', 'chimney-repair', 'coating',
  'compound', 'emergency-roof-repair', 'fascia-repair', 'fix', 'fixer', 'fixes',
  'flashes', 'flashing', 'flashing-repair', 'flat-roof-repair', 'free-roof-repair',
  'gutter', 'gutter-repair', 'gutters', 'high-quality-roof-repair', 'inspection',
  'leak', 'leak-repair', 'leaks', 'low-slope-roof-repair', 'maintenance',
  'maintenance-repair', 'membrane', 'metal-roof-repair', 'panel', 'plumb',
  'pro-roof-repair', 're-roof', 're-roofing', 'rep', 'repair', 'repair-cost',
  'repair-costs', 'repair-roof', 'repair-roofs', 'repaird', 'repaired',
  'repaired-roof', 'repairers', 'repairing', 'repairing-roof', 'repairing-roofs',
  'repairman-roof', 'repairo',
];

const coraStyleSheet = `:root{${styleVariations
  .map((variation, index) => `--cora-${variation}:${index};`)
  .join('')}}`;

export function CoraPhase6711Signals() {
  return (
    <section id="cora-phases-6-7-11" aria-label="Expanded roof repair resource links" className="mt-12">
      <style>{coraStyleSheet}</style>
      <details className="rounded-lg border border-forest/15 p-5 sm:p-6">
        <summary className="cursor-pointer font-body text-xl font-semibold text-forest">
          Expanded roof repair resource directory
        </summary>
        <p className="mt-4 font-body text-lg leading-relaxed text-text-secondary">
          Browse Newark Quality Roofing service, location, comparison, and roofing guide pages.
        </p>
        <ul className="mt-5 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {coraPhase7AbsoluteLinks.map((link) => (
            <li key={link.href}>
              <Link className="font-body text-lg text-copper underline hover:text-copper-dark" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-body text-lg leading-relaxed text-text-secondary">
          Review Google&apos;s website terms at{' '}
          <a href="https://policies.google.com/terms" rel="nofollow external" className="text-copper underline hover:text-copper-dark">
            Google Policies
          </a>{' '}
          and verify New Jersey contractor requirements with the{' '}
          <a href="https://www.njconsumeraffairs.gov/hic" rel="external" className="text-copper underline hover:text-copper-dark">
            New Jersey Division of Consumer Affairs
          </a>.
        </p>
      </details>
    </section>
  );
}
