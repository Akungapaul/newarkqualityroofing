/**
 * URL Classification Generator (D-02, D-03, D-05)
 *
 * Reads `URL-Classification.csv` (repo root) and emits the two generated
 * indexation artifacts every Wave-2 routing/sitemap/redirect consumer reads:
 *
 *   - src/generated/url-classification.json   { keep, noindex, redirects }
 *   - src/generated/redirects.generated.mjs   default-export of 176 301s
 *
 * This script IS the INDX-02 count validator. It fails the build (process.exit(1))
 * on ANY drift from the locked counts (255 keep / 942 noindex / 168 combo-redirect
 * / 8 legacy-redirect) or on ANY redirect chain / invalid (non-root-relative) target.
 *
 * Run via: tsx scripts/build-url-classification.ts  (also wired as `prebuild`)
 *
 * CSV columns (header):
 *   0 URL | 1 Sitemap | 2 Page Type | 3 Tier | 4 Service | 5 City
 *   6 Verdict | 7 Redirect Target | 8 Reason (quoted — may contain commas)
 *
 * Verdict values present in the CSV:
 *   KEEP-INDEX, KEEP-INDEX (review), NOINDEX, CONSOLIDATE / 301, CONSOLIDATE, REVIEW
 *
 * Bucketing (locked counts apply to combo rows + the 8 legacy hub rows):
 *   - combo (Page Type === 'Service+City combo') + KEEP-INDEX  -> keep bucket    (255)
 *   - combo + NOINDEX                                           -> noindex bucket (942)
 *   - combo + 'CONSOLIDATE / 301' (has Redirect Target)         -> combo-redirect (168)
 *   - non-combo CONSOLIDATE (8 'Service hub' rows -> /roof-replacement) -> legacy-redirect (8)
 *
 * Chain hardening (T-11-03): every redirect target must (a) start with '/'
 * (open-redirect guard) and (b) be a member of the FULL KEEP-INDEX universe
 * (all page types — the 8 legacy targets point at the `/roof-replacement`
 * SERVICE HUB, which is KEEP but not a combo-keep slug), and (c) never be a
 * redirect source itself (true-chain guard).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// ─── Paths ────────────────────────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const CSV_PATH = resolve(REPO_ROOT, 'URL-Classification.csv');
const GENERATED_DIR = resolve(REPO_ROOT, 'src/generated');
const JSON_OUT = resolve(GENERATED_DIR, 'url-classification.json');
const MJS_OUT = resolve(GENERATED_DIR, 'redirects.generated.mjs');

const ORIGIN = 'https://newarkqualityroofing.com';
const WWW_ORIGIN = 'https://www.newarkqualityroofing.com';

// ─── Locked expectations (D-03) ─────────────────────────────────────────────
const EXPECT = { keep: 255, noindex: 942, comboRedirect: 168, legacyRedirect: 8 } as const;

// ─── Quote-aware CSV line parser (RFC-4180; RESEARCH Pitfall 3) ──────────────
// A left-to-right scan that respects double-quoted fields. The quoted `Reason`
// column (col 8) sits AFTER `Verdict` (6) and `Redirect Target` (7), so this
// fully covers every column we read.
function parseCsvLine(line: string): string[] {
  const fields: string[] = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"'; // escaped quote
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      fields.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  fields.push(cur);
  return fields;
}

function urlToSlug(url: string): string {
  return url.replace(WWW_ORIGIN, '').replace(ORIGIN, '').replace(/^\//, '').trim();
}

// ─── Parse ───────────────────────────────────────────────────────────────��
const raw = readFileSync(CSV_PATH, 'utf8');
// Split on newlines; the file has no embedded newlines inside quoted fields.
const lines = raw.split(/\r?\n/).filter((l) => l.length > 0);
const header = parseCsvLine(lines[0]);
const COL = {
  url: header.indexOf('URL'),
  pageType: header.indexOf('Page Type'),
  verdict: header.indexOf('Verdict'),
  target: header.indexOf('Redirect Target'),
};
if (COL.url !== 0 || COL.pageType !== 2 || COL.verdict !== 6 || COL.target !== 7) {
  console.error(`CSV HEADER MISMATCH: got ${JSON.stringify(header)}`);
  process.exit(1);
}

const keep: string[] = []; // 255 combo keep slugs (emitted as json.keep)
const noindex: string[] = []; // 942 combo noindex slugs
const comboRedirects: Array<{ source: string; target: string }> = []; // 168
const legacyRedirects: Array<{ source: string; target: string }> = []; // 8

// Full KEEP-INDEX universe (all page types) — used for the chain/target check.
const fullKeepSet = new Set<string>();
// Every redirect SOURCE — used for the true-chain guard.
const redirectSourceSet = new Set<string>();

const errors: string[] = [];

for (let i = 1; i < lines.length; i++) {
  const row = parseCsvLine(lines[i]);
  const url = row[COL.url] ?? '';
  const pageType = row[COL.pageType] ?? '';
  const verdict = (row[COL.verdict] ?? '').trim();
  const target = (row[COL.target] ?? '').trim();
  const slug = urlToSlug(url);
  if (!slug && pageType !== 'Homepage') continue; // skip blank/homepage non-combo rows
  const isCombo = pageType === 'Service+City combo';

  // Defensive verdict enum check (V5): reject unknown verdicts.
  const KNOWN_VERDICTS = new Set([
    'KEEP-INDEX',
    'KEEP-INDEX (review)',
    'NOINDEX',
    'CONSOLIDATE / 301',
    'CONSOLIDATE',
    'REVIEW',
  ]);
  if (!KNOWN_VERDICTS.has(verdict)) {
    errors.push(`UNKNOWN VERDICT "${verdict}" on row ${i + 1} (${url})`);
    continue;
  }

  if (verdict.startsWith('KEEP-INDEX')) fullKeepSet.add(slug);
  if (verdict === 'CONSOLIDATE / 301' || verdict === 'CONSOLIDATE') redirectSourceSet.add(slug);

  if (isCombo) {
    if (verdict === 'KEEP-INDEX') keep.push(slug);
    else if (verdict === 'NOINDEX') noindex.push(slug);
    else if (verdict === 'CONSOLIDATE / 301') comboRedirects.push({ source: slug, target });
    // combo KEEP-INDEX (review) / REVIEW are not present among combos (verified);
    // if they ever appear they intentionally do NOT enter the locked buckets and
    // will surface as a count mismatch below.
  } else if (verdict === 'CONSOLIDATE') {
    legacyRedirects.push({ source: slug, target });
  }
}

// ─── Count assertions (D-03 / INDX-02) ──────────────────────────────────────
const got = {
  keep: keep.length,
  noindex: noindex.length,
  comboRedirect: comboRedirects.length,
  legacyRedirect: legacyRedirects.length,
};
for (const k of Object.keys(EXPECT) as Array<keyof typeof EXPECT>) {
  if (got[k] !== EXPECT[k]) {
    errors.push(`COUNT MISMATCH ${k}: expected ${EXPECT[k]}, got ${got[k]}`);
  }
}

// ─── Chain + open-redirect hardening (D-05 / T-11-03) ───────────────────────
const allRedirects = [...comboRedirects, ...legacyRedirects];
for (const { source, target } of allRedirects) {
  if (!target.startsWith('/')) {
    errors.push(`REDIRECT CHAIN/INVALID TARGET: ${target} (source /${source}) must start with "/"`);
    continue;
  }
  const targetSlug = target.replace(/^\//, '');
  if (!fullKeepSet.has(targetSlug)) {
    errors.push(`REDIRECT CHAIN/INVALID TARGET: ${target} (source /${source}) is not a KEEP slug`);
  }
  if (redirectSourceSet.has(targetSlug)) {
    errors.push(`REDIRECT CHAIN/INVALID TARGET: ${target} (source /${source}) is itself a redirect source`);
  }
}

if (errors.length > 0) {
  console.error('URL-CLASSIFICATION VALIDATION ERRORS:');
  errors.forEach((e) => console.error('  -', e));
  process.exit(1);
}

// ─── Emit artifacts ─────────────────────────────────────────────────────────
mkdirSync(GENERATED_DIR, { recursive: true });

// url-classification.json — combo verdict map. `redirects` holds combo redirects
// only (source-slug -> root-relative target). Legacy redirects live in the .mjs.
const redirectsObj: Record<string, string> = {};
for (const { source, target } of comboRedirects) redirectsObj[source] = target;

const jsonOut = {
  keep: keep.slice().sort(),
  noindex: noindex.slice().sort(),
  redirects: Object.fromEntries(Object.entries(redirectsObj).sort(([a], [b]) => a.localeCompare(b))),
};
writeFileSync(JSON_OUT, JSON.stringify(jsonOut, null, 2) + '\n', 'utf8');

// redirects.generated.mjs — 168 combo + 8 legacy = 176 entries.
const allRedirectEntries = allRedirects
  .map(({ source, target }) => ({ source: `/${source}`, destination: target, permanent: true as const }))
  .sort((a, b) => a.source.localeCompare(b.source));

const mjsLines: string[] = [];
mjsLines.push('// AUTO-GENERATED by scripts/build-url-classification.ts — DO NOT EDIT.');
mjsLines.push('// 168 combo (CONSOLIDATE / 301) + 8 legacy (Service hub CONSOLIDATE) = 176 permanent 301s.');
mjsLines.push('export default [');
for (const r of allRedirectEntries) {
  mjsLines.push(`  { source: '${r.source}', destination: '${r.destination}', permanent: true },`);
}
mjsLines.push('];');
mjsLines.push('');
writeFileSync(MJS_OUT, mjsLines.join('\n'), 'utf8');

console.log('URL classification generated:');
console.log(`  keep=${got.keep}  noindex=${got.noindex}  comboRedirect=${got.comboRedirect}  legacyRedirect=${got.legacyRedirect}`);
console.log(`  redirects.generated.mjs entries=${allRedirectEntries.length} (168 combo + 8 legacy)`);
console.log(`  -> ${JSON_OUT.replace(REPO_ROOT + '/', '')}`);
console.log(`  -> ${MJS_OUT.replace(REPO_ROOT + '/', '')}`);
process.exit(0);
