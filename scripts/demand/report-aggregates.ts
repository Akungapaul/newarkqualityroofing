/**
 * report-aggregates.ts — derives the tables the demand report needs.
 * Read-only over the generated artifacts. Prints JSON.
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { services } from '@/data/services';
import { cities } from '@/data/cities';

const DEMAND = resolve(process.cwd(), '.planning/seo/demand');
function parseCsv(t: string): string[][] { const R: string[][] = []; let r: string[] = [], f = '', i = 0, q = false; while (i < t.length) { const c = t[i]; if (q) { if (c === '"') { if (t[i + 1] === '"') { f += '"'; i += 2; continue; } q = false; i++; continue; } f += c; i++; continue; } if (c === '"') { q = true; i++; continue; } if (c === ',') { r.push(f); f = ''; i++; continue; } if (c === '\r') { i++; continue; } if (c === '\n') { r.push(f); R.push(r); r = []; f = ''; i++; continue; } f += c; i++; } if (f.length || r.length) { r.push(f); R.push(r); } return R; }
function objs(p: string): Record<string, string>[] { if (!existsSync(p)) return []; const rows = parseCsv(readFileSync(p, 'utf8')); const h = rows[0]; return rows.slice(1).filter((x) => x.some((v) => v !== '')).map((x) => Object.fromEntries(h.map((k, i) => [k, x[i] ?? '']))); }

const master = objs(resolve(DEMAND, 'URL-Classification-with-demand.csv'));
const summary = JSON.parse(readFileSync(resolve(DEMAND, 'demand-summary.json'), 'utf8'));
const gsc = new Map<string, number>();
for (const r of objs(resolve(DEMAND, 'gsc-pages.csv'))) gsc.set(r.slug, +r.impressions || 0);

const nameOf = new Map(services.map((s) => [s.id, s.name]));
const cityNameOf = new Map(cities.map((c) => [c.id, c.name]));

// Prune by service
const pruneByService = new Map<string, number>();
const watchByService = new Map<string, number>();
const keepByService = new Map<string, number>();
for (const r of master) {
  if (r['Page Type'] !== 'Service+City combo') continue;
  const v = r['demand_verdict']; const s = r['Service'];
  if (/prune/.test(v)) pruneByService.set(s, (pruneByService.get(s) ?? 0) + 1);
  else if (/watch/.test(v)) watchByService.set(s, (watchByService.get(s) ?? 0) + 1);
  else if (v === 'KEEP-INDEX') keepByService.set(s, (keepByService.get(s) ?? 0) + 1);
}
const rank = (m: Map<string, number>) => [...m.entries()].sort((a, b) => b[1] - a[1]).map(([id, n]) => `${n}  ${nameOf.get(id) ?? id}`);

// Blended city priority: exact "roofing {city} nj" vol + GSC impressions on city hub + sum of combo GSC imps in that city
const cityHubImp = new Map<string, number>();
const cityComboImp = new Map<string, number>();
for (const r of master) {
  const c = r['City']; if (!c) continue;
  const imp = +r['gsc_impressions'] || 0;
  if (r['Page Type'] === 'Location hub') cityHubImp.set(c, (cityHubImp.get(c) ?? 0) + imp);
  if (r['Page Type'] === 'Service+City combo') cityComboImp.set(c, (cityComboImp.get(c) ?? 0) + imp);
}
const cityVolMap = new Map<string, number>(summary.citiesByDemand.map((c: any) => [c.id, c.vol]));
const cityBlend = cities.map((c) => {
  const vol = cityVolMap.get(c.id) ?? 0;
  const hub = cityHubImp.get(c.id) ?? 0;
  const combo = cityComboImp.get(c.id) ?? 0;
  return { city: c.name, exactVol: vol, gscHubImp: hub, gscComboImp: combo, blend: vol + hub + combo };
}).sort((a, b) => b.blend - a.blend);

// seo-priority current vs recommended
const CURRENT_PRIORITY_SERVICES = ['roof-repair', 'roof-leak-repair', 'emergency-roof-repair', 'roof-replacement', 'flat-roof-installation-repair', 'commercial-roof-repair', 'commercial-roof-installation', 'gutter-installation-repair', 'gutter-guard-installation', 'modified-bitumen-roofing', 'built-up-roofing', 'green-roof-installation', 'tpo-roofing-installation', 'epdm-commercial-roofing'];
const CURRENT_PRIORITY_CITIES = ['newark', 'east-orange', 'bloomfield', 'montclair', 'belleville', 'irvington', 'south-orange', 'west-orange', 'maplewood', 'livingston'];
const recommendedPriorityServices = summary.servicesByDemand.filter((s: any) => s.tier === 'A' || s.tier === 'B').map((s: any) => s.id);
const recommendedTop10Cities = cityBlend.slice(0, 10).map((c) => c.city);

console.log(JSON.stringify({
  pruneByService: rank(pruneByService),
  keepByService_top: rank(keepByService).slice(0, 20),
  cityPriorityBlended: cityBlend.map((c) => `${c.blend} (vol ${c.exactVol} / hubImp ${c.gscHubImp} / comboImp ${c.gscComboImp})  ${c.city}`),
  priorityServices_current: CURRENT_PRIORITY_SERVICES.map((id) => nameOf.get(id) ?? id),
  priorityServices_recommended_TierA: recommendedPriorityServices.map((id: string) => nameOf.get(id) ?? id),
  priorityServices_current_but_NOT_TierA: CURRENT_PRIORITY_SERVICES.filter((id) => !recommendedPriorityServices.includes(id)).map((id) => `${nameOf.get(id)} (natl ${summary.servicesByDemand.find((s: any) => s.id === id)?.national ?? '?'}, tier ${summary.servicesByDemand.find((s: any) => s.id === id)?.tier})`),
  priorityServices_TierA_but_NOT_current: recommendedPriorityServices.filter((id: string) => !CURRENT_PRIORITY_SERVICES.includes(id)).map((id: string) => nameOf.get(id)),
  priorityCities_current: CURRENT_PRIORITY_CITIES.map((id) => cityNameOf.get(id)),
  priorityCities_recommended: recommendedTop10Cities,
}, null, 2));
