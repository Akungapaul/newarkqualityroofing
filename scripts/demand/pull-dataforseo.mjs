/**
 * pull-dataforseo.mjs
 *
 * Pulls Google Ads search volume (avg monthly), competition, CPC, and the
 * 12-month monthly_searches trend for the NQR keyword universe.
 *
 * Source of truth for keywords: .planning/seo/demand/keyword-universe.csv
 * Creds resolved global-first from ~/.claude/.env (never hardcoded).
 * Raw API JSON archived per batch under .planning/seo/demand/raw/ (project-local).
 * Flat output: .planning/seo/demand/dataforseo-volumes.csv
 *
 * Usage: node scripts/demand/pull-dataforseo.mjs [--location 2840] [--language en]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { homedir } from 'node:os';

const DEMAND = resolve(process.cwd(), '.planning/seo/demand');
const RAW = resolve(DEMAND, 'raw');
const LOCATION = Number(argVal('--location', '2840')); // United States (used only if --location-name absent)
const LOCATION_NAME = argVal('--location-name', ''); // e.g. "New Jersey,United States" — takes precedence
const LANGUAGE = argVal('--language', 'en');
const OUT_FILE = argVal('--out', 'dataforseo-volumes.csv');
const TAG = argVal('--tag', 'us'); // raw-archive filename tag
const BATCH = 700;
const ENDPOINT = 'https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live';

function argVal(flag, def) {
  const i = process.argv.indexOf(flag);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : def;
}

// ─── Creds (global-first) ───────────────────────────────────────────────────
function loadCreds() {
  let login = process.env.DATAFORSEO_LOGIN;
  let pass = process.env.DATAFORSEO_PASSWORD;
  const envPath = resolve(homedir(), '.claude/.env');
  if ((!login || !pass) && existsSync(envPath)) {
    const txt = readFileSync(envPath, 'utf8');
    for (const line of txt.split('\n')) {
      const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      const [, k, v] = m;
      const val = v.replace(/^["']|["']$/g, '');
      if (k === 'DATAFORSEO_LOGIN' && !login) login = val;
      if (k === 'DATAFORSEO_PASSWORD' && !pass) pass = val;
    }
  }
  if (!login || !pass) {
    console.error('Missing DATAFORSEO_LOGIN / DATAFORSEO_PASSWORD (env or ~/.claude/.env)');
    process.exit(1);
  }
  return { login, pass };
}

// ─── Minimal CSV parse of the keyword column ────────────────────────────────
function readKeywords() {
  const csv = readFileSync(resolve(DEMAND, 'keyword-universe.csv'), 'utf8').trim().split('\n');
  csv.shift(); // header
  const kws = [];
  for (const line of csv) {
    // keyword is first field; may be quoted
    let kw;
    if (line.startsWith('"')) {
      const end = line.indexOf('"', 1);
      kw = line.slice(1, end).replace(/""/g, '"');
    } else {
      kw = line.slice(0, line.indexOf(','));
    }
    if (kw) kws.push(kw);
  }
  return [...new Set(kws)];
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

// Seasonality: coefficient of variation of the 12-month trend + peak month.
function seasonality(monthly) {
  if (!Array.isArray(monthly) || monthly.length === 0) return { cv: '', peakMonth: '', peakVol: '' };
  const vols = monthly.map((m) => m.search_volume ?? 0);
  const mean = vols.reduce((a, b) => a + b, 0) / vols.length;
  if (mean === 0) return { cv: '0', peakMonth: '', peakVol: '0' };
  const variance = vols.reduce((a, b) => a + (b - mean) ** 2, 0) / vols.length;
  const cv = Math.sqrt(variance) / mean;
  let pi = 0;
  for (let i = 1; i < vols.length; i++) if (vols[i] > vols[pi]) pi = i;
  const pm = monthly[pi];
  return { cv: cv.toFixed(2), peakMonth: pm ? `${pm.year}-${String(pm.month).padStart(2, '0')}` : '', peakVol: String(vols[pi]) };
}

async function main() {
  const { login, pass } = loadCreds();
  const auth = 'Basic ' + Buffer.from(`${login}:${pass}`).toString('base64');
  const keywords = readKeywords();
  const batches = chunk(keywords, BATCH);
  const locField = LOCATION_NAME ? { location_name: LOCATION_NAME } : { location_code: LOCATION };
  console.log(`Pulling ${keywords.length} keywords in ${batches.length} batch(es), location=${LOCATION_NAME || LOCATION} language=${LANGUAGE} → ${OUT_FILE}`);

  const rows = new Map(); // keyword -> record
  let totalCost = 0;

  for (let b = 0; b < batches.length; b++) {
    const body = [{ ...locField, language_code: LANGUAGE, keywords: batches[b], sort_by: 'search_volume' }];
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const json = await res.json();
    writeFileSync(resolve(RAW, `google-ads-search-volume-${TAG}-batch${b + 1}.json`), JSON.stringify(json, null, 2));
    totalCost += json.cost ?? 0;
    if (json.status_code !== 20000) {
      console.error(`Batch ${b + 1} API error ${json.status_code}: ${json.status_message}`);
      continue;
    }
    const items = json.tasks?.[0]?.result ?? [];
    for (const it of items) {
      const s = seasonality(it.monthly_searches);
      rows.set(it.keyword, {
        keyword: it.keyword,
        search_volume: it.search_volume ?? 0,
        competition: it.competition ?? '',
        competition_index: it.competition_index ?? '',
        cpc: it.cpc ?? '',
        low_bid: it.low_top_of_page_bid ?? '',
        high_bid: it.high_top_of_page_bid ?? '',
        seasonality_cv: s.cv,
        peak_month: s.peakMonth,
        peak_volume: s.peakVol,
      });
    }
    console.log(`  batch ${b + 1}/${batches.length}: ${items.length} results (cost so far $${totalCost.toFixed(4)})`);
  }

  // Emit flat CSV — every requested keyword present (null result => volume 0/blank).
  const cols = ['keyword', 'search_volume', 'competition', 'competition_index', 'cpc', 'low_bid', 'high_bid', 'seasonality_cv', 'peak_month', 'peak_volume'];
  const esc = (v) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
  const out = [cols.join(',')];
  let withVol = 0;
  for (const kw of keywords) {
    const r = rows.get(kw) ?? { keyword: kw, search_volume: '', competition: '', competition_index: '', cpc: '', low_bid: '', high_bid: '', seasonality_cv: '', peak_month: '', peak_volume: '' };
    if (Number(r.search_volume) > 0) withVol++;
    out.push(cols.map((c) => esc(r[c])).join(','));
  }
  writeFileSync(resolve(DEMAND, OUT_FILE), out.join('\n') + '\n');
  console.log(`\nWrote ${OUT_FILE} — ${keywords.length} keywords, ${withVol} with volume>0, ${rows.size} returned by API. Total cost $${totalCost.toFixed(4)}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
