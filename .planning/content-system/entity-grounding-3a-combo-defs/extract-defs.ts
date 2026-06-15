// Extract the 65 authoritative service `definition`s (serviceId -> definition)
// from the gated 2a service-content layer. Writes _defs.json for the splice step.
import { writeFileSync } from 'fs';
import { getAllServiceContent } from '@/data/service-content/index';

const all = getAllServiceContent();
const map: Record<string, string> = {};
for (const c of all) {
  if (!c.definition) {
    console.error(`MISSING definition for service: ${c.serviceId}`);
    process.exit(1);
  }
  map[c.serviceId] = c.definition;
}

const out = `${__dirname}/_defs.json`;
writeFileSync(out, JSON.stringify(map, null, 2));
console.log(`Wrote ${Object.keys(map).length} service definitions -> ${out}`);
