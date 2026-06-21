import { readFileSync, writeFileSync } from 'fs';
const base = 'src/data/combo-content/millburn';
const fixes = [
  { file: 'tile-roof-installation-repair.ts',
    before: '**Hidden underlayment failure** beneath an intact tile field is the most insidious challenge on an aging Millburn tile roof, because interior stains appear beneath a tile roof 30 years or older while the tile above stays sound, the signal of failed underlayment rather than failed tile, per the Tile Roofing Industry Alliance and the InterNACHI life-expectancy chart.',
    after: '**Hidden underlayment failure** beneath an intact tile field is the most insidious challenge on an aging Millburn tile roof, because interior stains appear beneath a sound tile field that itself lasts 100 years or more, the signal of failed underlayment rather than failed tile, per the InterNACHI life-expectancy chart and the Tile Roofing Industry Alliance, which identifies the underlayment as the real lifespan limiter.' },
  { file: 'commercial-roof-replacement.ts',
    before: 'The 25 to 30% flat-roof threshold traces to Kellow, Modernize, and Josten flat-roof guidance',
    after: 'The 25 to 30% flat-roof threshold traces to Parish, Modernize, and HomeGuide flat-roof guidance' },
  { file: 'silicone-roof-coating.ts',
    before: 'because a flat roof needs at least one-quarter inch per foot of slope to drain, per the RCMA and NRCA.',
    after: 'because a flat roof needs at least one-quarter inch per foot of slope to drain, per the NRCA and ARMA.' },
  { file: 're-roofing.ts',
    before: 'Damage across more than 25–30% of the roof area crosses the 25% rule and a repair approaching 50% of replacement cost crosses the 50% rule, per Kellow, Modernize, and Josten cost data, while a localized repair stays economical only on an asphalt roof under 10 to 15 years old, per Home Depot guidance.',
    after: 'Damage across more than 25% of the roof area crosses the 25% rule, per RapidRestore, and a repair approaching 50% of replacement cost crosses the 50% rule, per WeatherShield and Home Depot, while a repair nearing 30% of replacement cost leans toward replacement, per Kellow, Modernize, and Josten — and a localized repair stays economical only on an asphalt roof under 10 to 15 years old, per Home Depot guidance.' },
  { file: 'full-roof-tear-off.ts',
    before: 'carries interior risk on a 30-to-50-square estate roof that spans several working days.',
    after: 'carries interior risk on a large estate roof whose tear-off spans several working days.' },
  { file: 'slate-roof-replacement.ts',
    before: 'always a full tear-off, per N.J.A.C. 5:23-6.4, so years of trapped moisture under aged valley and chimney flashing surface as rotted decking once the slate comes off.',
    after: 'always a full tear-off, per N.J.A.C. 5:23-6.4. Years of trapped moisture under aged valley and chimney flashing surface as rotted decking once the slate comes off.' },
  { file: 'cedar-shake-roof-replacement.ts',
    before: 'so a full removal of the cedar covering is the only code-compliant path, per the NJ Rehabilitation Subcode.',
    after: 'so a full removal of the cedar covering is the only code-compliant path.' },
];
let ok = 0; const errs = [];
for (const f of fixes) {
  const p = `${base}/${f.file}`;
  const src = readFileSync(p, 'utf8');
  const n = src.split(f.before).length - 1;
  if (n !== 1) { errs.push(`${f.file}: BEFORE matched ${n}× (expected 1)`); continue; }
  writeFileSync(p, src.replace(f.before, f.after));
  ok++; console.log(`✓ ${f.file}`);
}
if (errs.length) { console.error('ERRORS:\n' + errs.join('\n')); process.exit(1); }
console.log(`Applied ${ok}/${fixes.length} millburn confirmed fixes`);
