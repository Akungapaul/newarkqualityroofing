// Extract the 65 authoritative service `directAnswer`s (serviceId -> directAnswer)
// from the gated 2a service-content layer. These are the per-service reframe gold
// templates the combo authors mirror (swapping the city). Writes _gold.json.
import { writeFileSync } from 'fs';
import { getAllServiceContent } from '@/data/service-content/index';

const all = getAllServiceContent();
const map: Record<string, string> = {};
for (const c of all) {
  if (!c.directAnswer) {
    console.error(`MISSING directAnswer for service: ${c.serviceId}`);
    process.exit(1);
  }
  map[c.serviceId] = c.directAnswer;
}

const out = `${__dirname}/_gold.json`;
writeFileSync(out, JSON.stringify(map, null, 2));
console.log(`Wrote ${Object.keys(map).length} service directAnswers -> ${out}`);
