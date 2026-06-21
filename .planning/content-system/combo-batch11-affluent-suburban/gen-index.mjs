#!/usr/bin/env node
// Generate src/data/combo-content/<city>/index.ts wiring ALL 65 combos (mirror newark/index.ts
// category grouping/order). Run for any west-essex city whose index.ts is under-wired.
// Usage: node gen-index.mjs <city>   (e.g. cedar-grove — it ships 54/65 wired).
// Reads this batch's _combos.json (filtered to the city) for serviceId -> exportName.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const BATCH = path.join(ROOT, '.planning/content-system/combo-batch11-affluent-suburban');
const city = process.argv[2];
if (!city) { console.error('Usage: node gen-index.mjs <city>'); process.exit(1); }

const camel = city.replace(/-([a-z])/g, (_, c) => c.toUpperCase()); // cedar-grove -> cedarGrove
const exportConst = `${camel}ComboContent`;
const DEST = path.join(ROOT, 'src/data/combo-content', city, 'index.ts');

const rows = JSON.parse(fs.readFileSync(path.join(BATCH, '_combos.json'), 'utf8')).filter((r) => r.c === city);
if (!rows.length) throw new Error(`No _combos.json rows for city "${city}" — run _prep-gen.mjs first`);
const exp = new Map(rows.map((r) => [r.s, r.e])); // serviceId -> exportName

// Category groups in newark/index.ts order.
const groups = [
  ['Repair-Maintenance (10)', ['roof-repair', 'roof-replacement', 'emergency-roof-repair', 'roof-inspection', 'roof-maintenance-programs', 'roof-leak-repair', 'storm-damage-roof-repair', 'hail-damage-roof-repair', 'wind-damage-roof-repair', 'roof-cleaning-moss-removal']],
  ['Residential Roof Types (9)', ['residential-roof-installation', 'asphalt-shingle-roofing', 'slate-roof-installation-repair', 'wood-shake-roofing', 'metal-roof-installation-repair', 'flat-roof-installation-repair', 'tile-roof-installation-repair', 'cedar-shake-roofing', 'rubber-roofing-epdm']],
  ['Commercial Roof Types (8)', ['tpo-roofing-installation', 'epdm-commercial-roofing', 'modified-bitumen-roofing', 'built-up-roofing', 'commercial-metal-roofing', 'pvc-roofing', 'green-roof-installation', 'spray-foam-roofing']],
  ['Components-Specialty (10)', ['roof-flashing-installation-repair', 'chimney-flashing-repair', 'gutter-installation-repair', 'gutter-guard-installation', 'skylight-installation-repair', 'fascia-installation-repair', 'soffit-installation-repair', 'roof-vent-installation-repair', 'roof-waterproofing', 'roof-deck-repair-replacement']],
  ['Energy/Solar (5)', ['solar-panel-roofing-installation', 'solar-shingle-installation', 'energy-efficient-roofing-solutions', 'silicone-roof-coating', 'silicone-elastomeric-roof-coating']],
  ['Commercial Services (5)', ['commercial-roof-installation', 'commercial-roof-repair', 'commercial-roof-replacement', 'roof-thermal-imaging-inspections', 'infrared-roof-leak-detection']],
  ['Design/Consultation (3)', ['custom-roof-design-consultation', 'historic-roof-restoration', 'roof-ice-dam-prevention']],
  ['Replacement Sub-Pages (15)', ['full-roof-tear-off', 'roof-overlay-installation', 're-roofing', 'insurance-roof-replacement', 'storm-damage-roof-replacement', 'aging-roof-replacement', 'roof-replacement-after-leak', 'fire-damage-roof-replacement', 'roof-replacement-cost', 'asphalt-shingle-roof-replacement', 'metal-roof-replacement', 'slate-roof-replacement', 'tile-roof-replacement', 'flat-roof-replacement', 'cedar-shake-roof-replacement']],
];

const all = groups.flatMap(([, ids]) => ids);
if (all.length !== 65) throw new Error(`Group list has ${all.length} ids, expected 65`);
for (const id of all) if (!exp.has(id)) throw new Error(`No export name for serviceId "${id}" in _combos.json (${city})`);
if (new Set(all).size !== 65) throw new Error('Duplicate serviceId in group list');

let out = `import { z } from 'zod';\nimport { ComboContentSchema } from '../schema';\n`;
const dash = '─'.repeat(60);
for (const [label, ids] of groups) {
  out += `\n// ─── ${label} ${'─'.repeat(Math.max(3, 76 - label.length))}\n`;
  for (const id of ids) out += `import { ${exp.get(id)} } from './${id}';\n`;
}
out += `\n// ─── Validated aggregator ${dash.slice(0, 52)}\n`;
out += `// Zod validates all 65 ${city} combo content objects at module load.\n`;
out += `// Build crashes immediately on invalid data.\n\n`;
out += `export const ${exportConst} = z.array(ComboContentSchema).parse([\n`;
for (const [label, ids] of groups) {
  out += `  // ${label}\n`;
  for (const id of ids) out += `  ${exp.get(id)},\n`;
  out += `\n`;
}
out = out.replace(/\n\n$/, '\n');
out += `]);\n`;

fs.writeFileSync(DEST, out);
console.log(`Wrote ${DEST} wiring ${all.length} ${city} combos as ${exportConst}`);
