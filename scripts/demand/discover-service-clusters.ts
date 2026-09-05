/**
 * discover-service-clusters.ts
 *
 * For each of the 65 service money pages, discovers its real NJ keyword cluster
 * (head + variants: cost / near me / services / subtypes…) AND the NJ-local search
 * volume in one shot, via DataForSEO Google Ads "keywords_for_keywords" geotargeted
 * to New Jersey. Throttled to the 12-calls/min live limit.
 *
 * Output:
 *   .planning/seo/demand/service-clusters.json   { serviceId: [{keyword, volume, cpc, competition}] }
 *   .planning/seo/demand/raw/kfk-<serviceId>.json (raw per service)
 *
 * Seeds use the same shortHead() normalization as the keyword universe.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { homedir } from 'node:os';
import { services } from '@/data/services';

const DEMAND = resolve(process.cwd(), '.planning/seo/demand');
const RAW = resolve(DEMAND, 'raw');
const LOCATION = 'New Jersey,United States';
const ENDPOINT = 'https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live';
const SPACING_MS = 5500; // ≤12/min
const MAX_PER_SERVICE = 120; // cap the long tail

// shortHead — identical to build-keyword-universe.ts
const HEAD_OVERRIDES: Record<string, string> = {
  'rubber-roofing-epdm': 'epdm roofing', 'roof-maintenance-programs': 'roof maintenance',
  'roof-cleaning-and-moss-removal': 'roof cleaning', 'energy-efficient-roofing-solutions': 'energy efficient roofing',
  'custom-roof-design-and-consultation': 'custom roof design', 'roof-deck-repair-and-replacement': 'roof deck repair',
  'roof-thermal-imaging-inspections': 'roof thermal imaging', 'gutter-installation-repair': 'gutter installation',
  'gutter-guard-installation': 'gutter guard installation', 'roof-vent-installation-repair': 'roof vent installation',
  'fascia-installation-repair': 'fascia repair', 'soffit-installation-repair': 'soffit repair',
  'skylight-installation-repair': 'skylight installation', 'roof-flashing-installation-repair': 'roof flashing',
  'chimney-flashing-repair': 'chimney flashing repair', 'silicone-elastomeric-roof-coating': 'silicone roof coating',
  'solar-panel-roofing-installation': 'solar roof installation', 'tpo-roofing-installation': 'tpo roofing',
};
const STRIP = [' installation and repair', ' installation repair', ' and consultation', ' and moss removal', ' programs', ' solutions'];
function shortHead(id: string, name: string): string {
  if (HEAD_OVERRIDES[id]) return HEAD_OVERRIDES[id];
  let s = name.toLowerCase();
  for (const x of STRIP) s = s.replace(x, '');
  return s.replace(/\s+/g, ' ').trim();
}

function loadCreds() {
  const txt = readFileSync(resolve(homedir(), '.claude/.env'), 'utf8');
  const g = (k: string) => txt.match(new RegExp('^' + k + '=(.*)$', 'm'))?.[1].trim() ?? '';
  return { login: g('DATAFORSEO_LOGIN'), pass: g('DATAFORSEO_PASSWORD') };
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function kfk(auth: string, seed: string, tries = 3): Promise<any[]> {
  for (let t = 0; t < tries; t++) {
    const r = await fetch(ENDPOINT, { method: 'POST', headers: { Authorization: auth, 'Content-Type': 'application/json' },
      body: JSON.stringify([{ location_name: LOCATION, language_code: 'en', keywords: [seed], sort_by: 'search_volume' }]) });
    const j = await r.json();
    if (j.status_code === 20000) return { _cost: j.cost, items: j.tasks?.[0]?.result ?? [] } as any;
    console.error(`  retry ${t + 1}: ${j.status_code} ${j.status_message}`);
    await sleep(8000);
  }
  return { _cost: 0, items: [] } as any;
}

async function main() {
  const { login, pass } = loadCreds();
  const auth = 'Basic ' + Buffer.from(`${login}:${pass}`).toString('base64');
  const clusters: Record<string, any[]> = {};
  let cost = 0;
  for (let i = 0; i < services.length; i++) {
    const s = services[i];
    const seed = shortHead(s.id, s.name);
    const res: any = await kfk(auth, seed);
    cost += res._cost ?? 0;
    writeFileSync(resolve(RAW, `kfk-${s.id}.json`), JSON.stringify(res.items, null, 0));
    const cluster = (res.items as any[])
      .filter((x) => (x.search_volume ?? 0) > 0)
      .map((x) => ({ keyword: x.keyword, volume: x.search_volume, cpc: x.cpc ?? null, competition: x.competition ?? null }))
      .sort((a, b) => b.volume - a.volume)
      .slice(0, MAX_PER_SERVICE);
    clusters[s.id] = cluster;
    console.log(`[${i + 1}/65] ${s.id} (seed "${seed}") → ${cluster.length} kw, top ${cluster[0]?.volume ?? 0}, cost $${cost.toFixed(3)}`);
    if (i < services.length - 1) await sleep(SPACING_MS);
  }
  writeFileSync(resolve(DEMAND, 'service-clusters.json'), JSON.stringify(clusters, null, 0));
  console.log(`\nDONE — ${Object.keys(clusters).length} services, total cost $${cost.toFixed(3)}. Wrote service-clusters.json`);
}
main().catch((e) => { console.error(e); process.exit(1); });
