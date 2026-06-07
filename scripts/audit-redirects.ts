/**
 * Redirect Pipeline Validator (INDX-04 build gate).
 *
 * Build-fail validator (model: validate-flat-urls.ts) for the indexation
 * redirect set. Asserts:
 *   1. The generated redirect set = 168 combo + 0 legacy = 168 entries, all
 *      sources unique (no duplicate `source`).
 *   2. Every redirect destination is root-relative (starts with `/`).
 *   3. No chains: every COMBO redirect destination is a KEEP combo slug
 *      (isKeep); every LEGACY redirect destination resolves to a registered
 *      page that is itself NOT a redirect source.
 *   4. The preserved flat-roof + www->non-www redirects and the 3 hub-migration
 *      301s are present in next.config.ts.
 *
 * Any violation -> process.exit(1) with a clear message; else process.exit(0).
 *
 * Run with: tsx scripts/audit-redirects.ts  (npm run audit:redirects)
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import generatedRedirects from '@/generated/redirects.generated.mjs';
import { isKeep, getComboRedirects, isRedirect } from '@/data/url-classification';
import { getPageDataBySlug } from '@/data/slug-registry';

type Redirect = { source: string; destination: string; permanent: boolean };

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');

// Expected locked counts (D-05): 168 combo + 0 legacy = 168 generated 301s.
// (The 8 replacement-cause hub redirects were un-redirected in Batch 8 — they are
// now KEEP-INDEX pages with unique answer-first content, so 0 legacy redirects remain.)
const EXPECT = { combo: 168, legacy: 0, total: 168 } as const;

function main() {
  console.log('='.repeat(72));
  console.log('  REDIRECT PIPELINE VALIDATION');
  console.log('='.repeat(72));
  console.log();

  const errors: string[] = [];
  const all = generatedRedirects as Redirect[];

  // ── 1. Total count ──────────────────────────────────────────────────────────
  if (all.length !== EXPECT.total) {
    errors.push(`Generated redirect count: expected ${EXPECT.total}, got ${all.length}`);
  }

  // ── 2. Source uniqueness (across the whole generated set) ─────────────────────
  const sourceCounts = new Map<string, number>();
  for (const r of all) sourceCounts.set(r.source, (sourceCounts.get(r.source) ?? 0) + 1);
  for (const [src, n] of sourceCounts) {
    if (n > 1) errors.push(`Duplicate redirect source: ${src} (appears ${n}x)`);
  }

  // ── 3. Root-relative destinations ─────────────────────────────────────────────
  for (const r of all) {
    if (!r.destination.startsWith('/')) {
      errors.push(`Non-root-relative destination: ${r.source} -> ${r.destination}`);
    }
  }

  // ── 4. Combo redirects (168): unique sources + targets ⊆ keep (no chains) ─────
  const comboRedirects = getComboRedirects(); // [{ source: '/x', destination: '/y', permanent: true }]
  if (comboRedirects.length !== EXPECT.combo) {
    errors.push(`Combo redirect count: expected ${EXPECT.combo}, got ${comboRedirects.length}`);
  }
  for (const r of comboRedirects) {
    const targetSlug = r.destination.replace(/^\//, '');
    if (!isKeep(targetSlug)) {
      errors.push(`Combo redirect target NOT in keep set (chain risk): ${r.source} -> ${r.destination}`);
    }
    // A keep target must never itself be a redirect source.
    if (isRedirect(targetSlug)) {
      errors.push(`Redirect chain: ${r.source} -> ${r.destination} (target is itself a redirect source)`);
    }
  }

  // ── 5. Legacy redirects (8): targets resolve to a registered, non-redirect page ─
  const comboSources = new Set(comboRedirects.map((r) => r.source));
  const legacy = all.filter((r) => !comboSources.has(r.source));
  if (legacy.length !== EXPECT.legacy) {
    errors.push(`Legacy redirect count: expected ${EXPECT.legacy}, got ${legacy.length}`);
  }
  for (const r of legacy) {
    const targetSlug = r.destination.replace(/^\//, '');
    // Legacy hubs target a Service hub (e.g. /roof-replacement) — a registered
    // page in the full slug universe, NOT necessarily a combo-keep slug.
    if (!getPageDataBySlug(targetSlug)) {
      errors.push(`Legacy redirect target not a registered page: ${r.source} -> ${r.destination}`);
    }
    // No chains: the legacy target must not itself be a redirect source.
    if (sourceCounts.has(`/${targetSlug}`)) {
      errors.push(`Redirect chain (legacy): ${r.source} -> ${r.destination} (target is a redirect source)`);
    }
  }

  // ── 6. Preserved + hub-migration redirects present in next.config.ts ──────────
  const nextConfig = readFileSync(join(REPO_ROOT, 'next.config.ts'), 'utf8');
  const requiredConfigRedirects: Array<{ label: string; needle: RegExp }> = [
    { label: 'flat-roof manual redirect', needle: /\/flat-roof-installation-newark-nj/ },
    { label: 'www -> non-www host redirect', needle: /www\.newarkqualityroofing\.com/ },
    { label: 'trailingSlash:false', needle: /trailingSlash:\s*false/ },
    { label: 'hub migration /services -> /roofing-services', needle: /['"]\/services['"]/ },
    { label: 'hub migration /locations -> /service-areas', needle: /['"]\/locations['"]/ },
    { label: 'hub migration /resources -> /roofing-knowledge-base', needle: /['"]\/resources['"]/ },
    { label: 'generated redirects spread', needle: /generatedRedirects/ },
  ];
  for (const { label, needle } of requiredConfigRedirects) {
    if (!needle.test(nextConfig)) {
      errors.push(`Missing in next.config.ts: ${label}`);
    }
  }

  // ── Report ────────────────────────────────────────────────────────────────────
  console.log(`Generated redirects: ${all.length} (${comboRedirects.length} combo + ${legacy.length} legacy)`);
  console.log(`${errors.length} violation(s) found.`);
  console.log();

  if (errors.length > 0) {
    console.log('-'.repeat(72));
    console.log('  VIOLATIONS:');
    console.log('-'.repeat(72));
    for (const e of errors) console.log(`  - ${e}`);
    console.log();
    process.exit(1);
  }

  console.log('Redirect pipeline valid: 168 combo + 0 legacy unique sources, targets ⊆ keep (no chains),');
  console.log('flat-roof + www + hub migrations preserved. PASS');
  process.exit(0);
}

main();
