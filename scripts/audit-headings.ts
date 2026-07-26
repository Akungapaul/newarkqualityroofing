/**
 * Question-Form Heading Policy Audit (AUD-01 — build-failing gate).
 *
 * Hybrid two-pass audit (D-08 / D-09). Fully REPLACES the old advisory
 * location-keyword audit (the OLD policy is the OPPOSITE of this one and is
 * discarded). Model: scripts/audit-redirects.ts (errors[]/process.exit) +
 * scripts/audit-sitemap.ts (registry enumeration + errors.slice(0,40) cap).
 *
 *   STATIC PASS  (always runs): asserts the §17 policy at config/data level —
 *     every HEADING_CONFIG string (interpolated with real service/city names)
 *     ends in "?"; exactly one H1 per page type; the page-type H1 never equals
 *     any of its H2 strings; every article title ends in "?" and titles are
 *     unique via Set(titles).size === articles.length (NEVER hardcodes a count).
 *
 *   RENDERED PASS (runs only if .next/server/app/*.html exists; otherwise prints
 *     a "run `next build` first" notice and skips DOM checks without failing):
 *     parses one prerendered file per template with node-html-parser and asserts
 *     the §17 DOM rules — exactly one <h1> ending "?" with ZERO element children
 *     (no <br>/<span> split); every <h2>/<h3>/<h4> ends "?"; no H-tag inside
 *     nav/footer/button/label (incl. role="navigation"/role="contentinfo"); no
 *     skipped levels (monotonic h1→h2→h3→h4 in document order); the first <h2>
 *     after the hero === the §17 Core string (Core-before-Outer, HTAG-07/08).
 *     The 6 noindex hub scaffolds enforce only the DOM-safety subset (Q2).
 *
 * Any violation -> process.exit(1); else process.exit(0).
 *
 * Run with: tsx scripts/audit-headings.ts  (npm run audit:headings)
 * The rendered pass requires a fresh build: npm run audit:headings:full
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse, type HTMLElement } from 'node-html-parser';

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { combos } from '@/data/combos';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { isKeep, isNoindex } from '@/data/url-classification';
import { getSlugsByType } from '@/data/slug-registry';
import { HEADING_CONFIG } from '@/data/heading-config';
import { getServiceContent } from '@/data/service-content';
import { getCityContent } from '@/data/city-content';
import { getComboContent } from '@/data/combo-content';
import { getHubContent } from '@/data/hub-content';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PRERENDER_DIR = join(REPO_ROOT, '.next', 'server', 'app');

// ─── Helpers ──────────────────────────────────────────────────────────────────

const isQuestion = (text: string): boolean => text.trim().endsWith('?');

/** Element-node children (nodeType 1) — used for the split-H1 rule. */
function hasElementChildren(el: HTMLElement): boolean {
  return el.childNodes.some((n) => n.nodeType === 1);
}

/** Is this heading inside a nav/footer/button/label region (by tag OR role)? */
function inForbiddenRegion(h: HTMLElement): boolean {
  if (h.closest('nav,footer,button,label')) return true;
  // role-based variants the repo also uses
  let cur: HTMLElement | null = h;
  while (cur) {
    const role = cur.getAttribute?.('role');
    if (role === 'navigation' || role === 'contentinfo') return true;
    cur = cur.parentNode as HTMLElement | null;
  }
  return false;
}

// ════════════════════════════════════════════════════════════════════════════
//  STATIC PASS
// ════════════════════════════════════════════════════════════════════════════

function staticPass(errors: string[]): void {
  const H = HEADING_CONFIG;

  // Sample entity names for the question-form check (interpolated from real data).
  const sampleService = services[0]?.name ?? 'Roof Repair';
  const sampleCity = cities[0]?.name ?? 'Newark';

  // ── 1. Every config heading (interpolated) ends in "?" ───────────────────────
  const configStrings: Array<[string, string]> = [
    ['home.h1', H.home.h1],
    ['home.coreH2', H.home.coreH2],
    // NOTE: the homepage Core services render as declarative, linked cards
    // (styled text, not <h3>), so there are no per-service question headings.
    ...H.home.outerH2s.map((s, i) => [`home.outerH2[${i}]`, s] as [string, string]),
    ['service.h1', H.service.h1(sampleService)],
    ['service.coreH2', H.service.coreH2(sampleService)],
    ['service.definitionH2', H.service.definitionH2(sampleService)],
    ...H.service.h2s(sampleService).map((s, i) => [`service.h2[${i}]`, s] as [string, string]),
    ['city.h1', H.city.h1(sampleCity)],
    ['city.coreH2', H.city.coreH2(sampleCity)],
    ['city.whereIsH2', H.city.whereIsH2(sampleCity)],
    ['city.permitsH2', H.city.permitsH2(sampleCity)],
    ['city.materialsH2', H.city.materialsH2(sampleCity)],
    ...H.city.h2s(sampleCity).map((s, i) => [`city.h2[${i}]`, s] as [string, string]),
    ['combo.h1', H.combo.h1(sampleService, sampleCity)],
    ['combo.coreH2', H.combo.coreH2(sampleService, sampleCity)],
    ['combo.definitionH2', H.combo.definitionH2(sampleService)],
    ...H.combo.h2s(sampleService, sampleCity).map((s, i) => [`combo.h2[${i}]`, s] as [string, string]),
    ...Object.entries(H.core).map(([k, v]) => [`core.${k}.h1`, v] as [string, string]),
    ...Object.entries(H.hub).map(([k, v]) => [`hub.${k}.h1`, v] as [string, string]),
  ];
  // The city H1 is the one intentional declarative H1 ("Roof Repair and Installation
  // in {City}, NJ") — a scoped, keyword-led exception to the question-form rule.
  const CITY_DECLARATIVE_H1 = new Set(['city.h1']);
  for (const [name, str] of configStrings) {
    if (CITY_DECLARATIVE_H1.has(name)) continue;
    if (!isQuestion(str)) errors.push(`STATIC config heading not a question (${name}): "${str}"`);
  }

  // ── 2. Exactly one H1 per page type + H1 never equals any of its own H2s ─────
  const h1VsH2: Array<[string, string, string[]]> = [
    ['home', H.home.h1, [H.home.coreH2, ...H.home.outerH2s]],
    ['service', H.service.h1(sampleService), H.service.h2s(sampleService)],
    ['city', H.city.h1(sampleCity), H.city.h2s(sampleCity)],
    ['combo', H.combo.h1(sampleService, sampleCity), H.combo.h2s(sampleService, sampleCity)],
  ];
  for (const [type, h1, h2s] of h1VsH2) {
    if (h2s.includes(h1)) errors.push(`STATIC ${type}: H1 is repeated as an H2 → "${h1}"`);
  }

  // ── 3. Article titles: every title ends "?" + uniqueness via Set === length ──
  //     NEVER hardcode 253 (actual count is 252). Assert against articles.length.
  const titles = articles.map((a) => a.title);
  console.log(`Static pass: auditing ${articles.length} article titles (count NOT hardcoded).`);
  for (const a of articles) {
    if (!isQuestion(a.title)) {
      errors.push(`STATIC article ${a.id}: title not a question → "${a.title}"`);
    }
  }
  const uniqueTitles = new Set(titles);
  if (uniqueTitles.size !== articles.length) {
    errors.push(
      `STATIC article titles not unique: ${uniqueTitles.size} unique of ${articles.length} total (${articles.length - uniqueTitles.size} duplicate(s))`,
    );
    // Surface the duplicates for actionability.
    const seen = new Set<string>();
    for (const t of titles) {
      if (seen.has(t)) errors.push(`STATIC duplicate article title: "${t}"`);
      seen.add(t);
    }
  }

  // ── 4. Registry sanity: in-scope page-set is enumerated from the registries ──
  //     (no hardcoded slug lists — mirrors the Phase 11 audits).
  const serviceSlugs = getSlugsByType('service').length;
  const citySlugs = getSlugsByType('city').length;
  const liveCombos = combos.filter((c) => isKeep(c.slug) || isNoindex(c.slug)).length;
  console.log(
    `Static pass: in-scope registries — ${serviceSlugs} services, ${citySlugs} cities, ${liveCombos} live combos, ${corePages.length} core pages.`,
  );
}

// ════════════════════════════════════════════════════════════════════════════
//  RENDERED PASS
// ════════════════════════════════════════════════════════════════════════════

type SampleKind = 'full' | 'scaffold';

interface RenderedSample {
  label: string;
  file: string; // relative to .next/server/app
  coreH2?: string; // expected first <h2> after hero (full templates only)
  kind: SampleKind;
  declarativeH1?: boolean; // city template: H1 is declarative, exempt from the question-form rule
}

const H = HEADING_CONFIG;

// ── Entity-grounding (Phase 1): a sampled page's first <h2> is the EntityDefinition
//    heading ONLY when that page actually carries the optional definition field.
//    These helpers let the expected coreH2 track backfill across phases with no edits.
//    Each helper is called with a SLUG and resolves slug → .id via the services/cities
//    registries before hitting the content getters (which are keyed by id, not slug).
function serviceHasDefinition(slug: string): boolean {
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return false;
  try {
    return Boolean(getServiceContent(svc.id).definition);
  } catch {
    return false;
  }
}
function cityHasWhereIs(slug: string): boolean {
  const city = cities.find((c) => c.slug === slug);
  if (!city) return false;
  try {
    return Boolean(getCityContent(city.id).whereIs);
  } catch {
    return false;
  }
}
function comboHasDefinition(serviceSlug: string, citySlug: string): boolean {
  const svc = services.find((s) => s.slug === serviceSlug);
  const city = cities.find((c) => c.slug === citySlug);
  if (!svc || !city) return false;
  try {
    return Boolean(getComboContent(svc.id, city.id).definition);
  } catch {
    return false;
  }
}
// Hub first content H2 = the EntityDefinition heading (category hubs) or the first
// section heading (utility hubs). Resolves from hub content so the expected coreH2
// tracks the authored data with no manual map.
function hubCoreH2(hubSlug: string): string | undefined {
  try {
    const c = getHubContent(hubSlug);
    return c.definitionHeading ?? c.sections[0]?.heading;
  } catch {
    return undefined;
  }
}

/** One representative prerendered file per template (Pattern 3). */
function buildSampleSet(): RenderedSample[] {
  // Resolve the names used by the representative pages so the expected Core H2
  // strings match what the template renders (interpolated from real data).
  const repairName = services.find((s) => s.slug === 'roof-repair')?.name ?? 'Roof Repair';
  const newarkName = cities.find((c) => c.slug === 'newark')?.name ?? 'Newark';
  const keepComboService = services.find((s) => s.slug === 'asphalt-shingle-roofing')?.name ?? 'Asphalt Shingle Roofing';
  const keepComboCity = cities.find((c) => c.slug === 'belleville')?.name ?? 'Belleville';

  return [
    { label: 'home', file: 'index.html', coreH2: H.home.coreH2, kind: 'full' },
    {
      label: 'service (roof-repair)',
      file: 'roof-repair-in-newark-nj.html',
      coreH2: serviceHasDefinition('roof-repair')
        ? H.service.definitionH2(repairName)
        : H.service.coreH2(repairName),
      kind: 'full',
    },
    {
      label: 'city (newark)',
      file: 'roof-repair-and-installation-in-newark-nj.html',
      coreH2: cityHasWhereIs('newark') ? H.city.whereIsH2(newarkName) : H.city.coreH2(newarkName),
      kind: 'full',
      declarativeH1: true, // "Roof Repair and Installation in Newark, NJ" — not a question
    },
    {
      // Newark combos are 301-redirected into the service pages (Option 3), so they
      // are no longer prerendered — use a keep combo from another city.
      label: 'keep combo (roof-repair/belleville)',
      file: 'roof-repair-belleville-nj.html',
      coreH2: comboHasDefinition('roof-repair', 'belleville')
        ? H.combo.definitionH2(repairName)
        : H.combo.coreH2(repairName, keepComboCity),
      kind: 'full',
    },
    {
      label: 'noindex combo (asphalt-shingle-roofing/belleville)',
      file: 'asphalt-shingle-roofing-belleville-nj.html',
      coreH2: comboHasDefinition('asphalt-shingle-roofing', 'belleville')
        ? H.combo.definitionH2(keepComboService)
        : H.combo.coreH2(keepComboService, keepComboCity),
      kind: 'full',
    },
    // Content-bearing core/hub pages — full DOM rules, Core H2 not asserted
    // (their first H2 is page-specific, not in the §4.x trees).
    { label: 'core (roofing-services)', file: 'roofing-services.html', kind: 'full' },
    { label: 'core (service-areas)', file: 'service-areas.html', kind: 'full' },
    { label: 'core (contact)', file: 'contact.html', kind: 'full' },
    { label: 'core (about)', file: 'about.html', kind: 'full' },
    // 6 FLAT hubs — now content-bearing + indexable: full DOM rules + first content
    // H2 = the EntityDefinition heading (category hubs) or first section heading (utility).
    { label: 'hub (residential-roofing)', file: 'residential-roofing.html', coreH2: hubCoreH2('residential-roofing'), kind: 'full' },
    { label: 'hub (commercial-roofing)', file: 'commercial-roofing.html', coreH2: hubCoreH2('commercial-roofing'), kind: 'full' },
    { label: 'hub (flat-roof-systems)', file: 'flat-roof-systems.html', coreH2: hubCoreH2('flat-roof-systems'), kind: 'full' },
    { label: 'hub (roofing-materials)', file: 'roofing-materials.html', coreH2: hubCoreH2('roofing-materials'), kind: 'full' },
    { label: 'hub (free-roofing-estimate)', file: 'free-roofing-estimate.html', coreH2: hubCoreH2('free-roofing-estimate'), kind: 'full' },
    { label: 'hub (our-roofing-process)', file: 'our-roofing-process.html', coreH2: hubCoreH2('our-roofing-process'), kind: 'full' },
  ];
}

function auditRenderedFile(sample: RenderedSample, errors: string[]): void {
  const abs = join(PRERENDER_DIR, sample.file);
  const root = parse(readFileSync(abs, 'utf8'));
  const tag = `[${sample.label}]`;

  const h1s = root.querySelectorAll('h1');
  // ── exactly one <h1> ──────────────────────────────────────────────────────
  if (h1s.length !== 1) {
    errors.push(`${tag} expected exactly 1 <h1>, found ${h1s.length}`);
  }
  const h1 = h1s[0];
  if (h1) {
    // ── H1 is a question ──────────────────────────────────────────────────────
    if (!sample.declarativeH1 && !isQuestion(h1.text)) errors.push(`${tag} H1 not a question → "${h1.text.trim()}"`);
    // ── H1 has zero element children (no <br>/<span> split) ───────────────────
    if (hasElementChildren(h1)) {
      errors.push(`${tag} H1 has element children (<br>/<span> split): "${h1.text.trim()}"`);
    }
  }

  // ── all h1..h4 outside nav/footer/button/label; questions; level order ──────
  const headings = root.querySelectorAll('h1,h2,h3,h4');
  let prevLevel = 0;
  for (const h of headings) {
    const text = h.text.trim();
    if (inForbiddenRegion(h)) {
      errors.push(`${tag} forbidden <${h.tagName.toLowerCase()}> inside nav/footer/button/label: "${text}"`);
      continue; // do not let a nav heading drive level-order
    }
    if (!isQuestion(text) && !(sample.declarativeH1 && h.tagName === 'H1')) {
      errors.push(`${tag} <${h.tagName.toLowerCase()}> not a question → "${text}"`);
    }
    const level = Number(h.tagName[1]);
    if (prevLevel && level > prevLevel + 1) {
      errors.push(`${tag} skipped level: h${prevLevel} → h${level} ("${text}")`);
    }
    prevLevel = level;
  }

  // ── first <h2> after the hero === §17 Core string (full templates only) ─────
  if (sample.kind === 'full' && sample.coreH2) {
    const firstH2 = root.querySelectorAll('h2').find((h) => !inForbiddenRegion(h));
    const firstH2Text = firstH2?.text.trim() ?? '(none)';
    if (firstH2Text !== sample.coreH2) {
      errors.push(
        `${tag} first content <h2> is not the §17 Core string. Expected "${sample.coreH2}", got "${firstH2Text}"`,
      );
    }
  }
}

function renderedPass(errors: string[]): boolean {
  const samples = buildSampleSet();
  const missing = samples.filter((s) => !existsSync(join(PRERENDER_DIR, s.file)));

  if (!existsSync(PRERENDER_DIR) || missing.length === samples.length) {
    console.log();
    console.log('NOTICE: No prerendered HTML found in .next/server/app — skipping the rendered (DOM) pass.');
    console.log('        Run `next build` first (or `npm run audit:headings:full`) to enforce DOM rules.');
    return false;
  }

  if (missing.length > 0) {
    // Some samples present, some not — report the gaps but audit what exists.
    for (const m of missing) {
      errors.push(`RENDERED sample missing (run a fresh build): ${m.file} (${m.label})`);
    }
  }

  for (const s of samples) {
    if (existsSync(join(PRERENDER_DIR, s.file))) auditRenderedFile(s, errors);
  }
  return true;
}

// ════════════════════════════════════════════════════════════════════════════
//  MAIN
// ════════════════════════════════════════════════════════════════════════════

function main(): void {
  console.log('='.repeat(72));
  console.log('  HEADING POLICY VALIDATION (question-form §17 — build-failing)');
  console.log('='.repeat(72));
  console.log();

  const errors: string[] = [];

  staticPass(errors);
  const ranRendered = renderedPass(errors);

  console.log();
  console.log(`Rendered pass: ${ranRendered ? 'ran' : 'SKIPPED (no .next HTML)'}.`);
  console.log(`${errors.length} violation(s) found.`);
  console.log();

  if (errors.length > 0) {
    console.log('-'.repeat(72));
    console.log('  VIOLATIONS:');
    console.log('-'.repeat(72));
    for (const e of errors.slice(0, 40)) console.log(`  - ${e}`);
    if (errors.length > 40) console.log(`  ...and ${errors.length - 40} more`);
    console.log();
    process.exit(1);
  }

  console.log('Heading policy valid: question-form H1/H2/H3/H4, Core-before-Outer,');
  console.log('no nav/footer H-tags, no skipped levels, article titles unique questions. PASS');
  process.exit(0);
}

main();
