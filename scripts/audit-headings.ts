/**
 * Heading Policy Audit (AUD-01 — build-failing gate).
 *
 * POLICY v3 (2026-09 owner decision): EVERY heading H1-H4 is a keyword-led
 * STATEMENT that answers its topic and carries Who/What/Where (the 3 Ws).
 * H1s use the "[Service] [City], NJ" pattern. The only interrogatives left are
 * FAQ ITEM questions (accordion summaries site-wide, plus the hub pages' FAQ
 * <h3>s inside section[aria-labelledby="hub-faq-heading"], which are exempt).
 *
 * Hybrid two-pass audit (D-08 / D-09). Model: scripts/audit-redirects.ts
 * (errors[]/process.exit) + scripts/audit-sitemap.ts (registry enumeration +
 * errors.slice(0,40) cap).
 *
 *   STATIC PASS  (always runs): asserts the policy at config/data level —
 *     every HEADING_CONFIG H1 string (interpolated with real service/city/
 *     comparison names, incl. serviceH1Overrides, comparison H1s, and KB
 *     cluster titles) is a statement; every HEADING_CONFIG H2 string ends in
 *     "?"; the page-type H1 never equals any of its H2 strings; every article
 *     title is a statement and titles are unique via Set(titles).size ===
 *     articles.length (NEVER hardcodes a count).
 *
 *   RENDERED PASS (runs only if .next/server/app/*.html exists; otherwise prints
 *     a "run `next build` first" notice and skips DOM checks without failing):
 *     parses one prerendered file per template with node-html-parser and asserts
 *     the DOM rules — exactly one statement <h1> with ZERO element children
 *     (no <br>/<span> split); every <h2>/<h3>/<h4> ends "?"; no H-tag inside
 *     nav/footer/button/label (incl. role="navigation"/role="contentinfo"); no
 *     skipped levels (monotonic h1→h2→h3→h4 in document order); the first <h2>
 *     after the hero === the §17 Core string (Core-before-Outer, HTAG-07/08).
 *     Samples with kind 'h1-only' (glossary, KB, article, comparison — templates
 *     outside the §4.x heading trees) enforce only the H1 rules.
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
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { corePages } from '@/data/core-pages';
import { KB_CLUSTERS } from '@/data/kb-clusters';
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

// ── City+State rule (2026-09 owner decision) ─────────────────────────────────
// Every heading that names a city or county pairs it with the state:
// "in Newark, NJ", "Essex County, NJ" — never a bare "in Newark". The brand
// ("Newark Quality Roofing") is exempt, and a conjunction chain may carry one
// trailing ", NJ" for the whole chain ("Newark and Essex County, NJ").
const PLACE_NAMES: string[] = ['Essex County', ...cities.map((c) => c.name)].sort(
  (a, b) => b.length - a.length,
);
const BRAND_NAME = 'Newark Quality Roofing';
const STATE_AFTER = /^(,? NJ\b|, New Jersey\b)/;
const PLACE_CHAIN = /^(?:'s)?\s*(?:and|or|&|,)\s+(?:each\s+|the\s+)?(.*)$/i;

/** Returns the bare (state-less) place references in a heading, if any.
 *  A heading that carries the state ANYWHERE ("… Essex County Colonial Homes
 *  in NJ") is compliant — the rule is city+state present together, not
 *  strict adjacency. */
function barePlaces(heading: string): string[] {
  let masked = heading.split(BRAND_NAME).join('#'.repeat(BRAND_NAME.length));
  if (/\b(NJ|New Jersey)\b/.test(masked)) return [];
  const out: string[] = [];
  for (const p of PLACE_NAMES) {
    let start = 0;
    for (;;) {
      const i = masked.indexOf(p, start);
      if (i === -1) break;
      const after = masked.slice(i + p.length);
      let ok = STATE_AFTER.test(after);
      const m = after.match(PLACE_CHAIN);
      if (!ok && m) {
        for (const q of PLACE_NAMES) {
          if (m[1].startsWith(q) && STATE_AFTER.test(m[1].slice(q.length))) ok = true;
        }
      }
      if (!ok) out.push(p);
      masked = masked.slice(0, i) + '#'.repeat(p.length) + masked.slice(i + p.length);
      start = i + p.length;
    }
  }
  return out;
}

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

  // ── 1a. Every H1 (interpolated) is a STATEMENT — must NOT end in "?" ─────────
  //     Covers the config H1s, the per-service overrides, all 30 comparison H1s,
  //     and the 6 KB cluster titles (rendered as the cluster-page H1s).
  const h1Strings: Array<[string, string]> = [
    ['home.h1', H.home.h1],
    ['service.h1', H.service.h1(sampleService)],
    ['city.h1', H.city.h1(sampleCity)],
    ['combo.h1', H.combo.h1(sampleService, sampleCity)],
    ...Object.entries(H.core).map(([k, v]) => [`core.${k}.h1`, v] as [string, string]),
    ...Object.entries(H.hub).map(([k, v]) => [`hub.${k}.h1`, v] as [string, string]),
    ...Object.entries(H.serviceH1Overrides).map(
      ([k, v]) => [`serviceH1Overrides.${k}`, v] as [string, string],
    ),
    ...comparisons.map((c) => [`comparison(${c.id}).h1`, H.comparison.h1(c.name)] as [string, string]),
    ...KB_CLUSTERS.map((k) => [`kbCluster(${k.slug}).title`, k.title] as [string, string]),
  ];
  for (const [name, str] of h1Strings) {
    if (isQuestion(str)) {
      errors.push(`STATIC H1 is a question — H1s must be statements (${name}): "${str}"`);
    }
  }

  // ── 1b. Every config H2 (interpolated) ends in "?" ───────────────────────────
  const h2Strings: Array<[string, string]> = [
    ['home.coreH2', H.home.coreH2],
    // NOTE: the homepage Core services render as declarative, linked cards
    // (styled text, not <h3>), so there are no per-service question headings.
    ...H.home.outerH2s.map((s, i) => [`home.outerH2[${i}]`, s] as [string, string]),
    ['service.coreH2', H.service.coreH2(sampleService)],
    ['service.definitionH2', H.service.definitionH2(sampleService)],
    ...H.service.h2s(sampleService).map((s, i) => [`service.h2[${i}]`, s] as [string, string]),
    ['city.coreH2', H.city.coreH2(sampleCity)],
    ['city.whereIsH2', H.city.whereIsH2(sampleCity)],
    ['city.permitsH2', H.city.permitsH2(sampleCity)],
    ['city.materialsH2', H.city.materialsH2(sampleCity)],
    ...H.city.h2s(sampleCity).map((s, i) => [`city.h2[${i}]`, s] as [string, string]),
    ['combo.coreH2', H.combo.coreH2(sampleService, sampleCity)],
    ['combo.definitionH2', H.combo.definitionH2(sampleService)],
    ...H.combo.h2s(sampleService, sampleCity).map((s, i) => [`combo.h2[${i}]`, s] as [string, string]),
  ];
  // 2026-09 heading policy v3: H2s are STATEMENTS too (the whole H1-H4 tree is
  // statement-form; only FAQ item questions stay interrogative).
  for (const [name, str] of h2Strings) {
    if (isQuestion(str)) errors.push(`STATIC config heading is a question — headings must be statements (${name}): "${str}"`);
  }

  // ── 1c. City+State: no config heading names a city/county without the state ──
  for (const [name, str] of [...h1Strings, ...h2Strings]) {
    const bare = barePlaces(str);
    if (bare.length) {
      errors.push(`STATIC heading names ${bare.join(', ')} without ", NJ" (${name}): "${str}"`);
    }
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

  // ── 3. Article titles: statements (title IS the article H1) + uniqueness ─────
  //     NEVER hardcode 253 (actual count is 252). Assert against articles.length.
  const titles = articles.map((a) => a.title);
  console.log(`Static pass: auditing ${articles.length} article titles (count NOT hardcoded).`);
  for (const a of articles) {
    if (isQuestion(a.title)) {
      errors.push(`STATIC article ${a.id}: title is a question — H1s must be statements → "${a.title}"`);
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

// 'full' = full DOM rules (statement H1 + question H2-H4 + Core-before-Outer).
// 'h1-only' = only the H1 rules — for templates outside the §4.x heading trees
// (glossary, KB index/cluster, article, comparison pages).
type SampleKind = 'full' | 'h1-only';

interface RenderedSample {
  label: string;
  file: string; // relative to .next/server/app
  coreH2?: string; // expected first <h2> after hero (full templates only)
  kind: SampleKind;
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

  // Combo samples exist only while their slug is classified keep/noindex —
  // under the consolidation every combo is a redirect and never prerendered,
  // so a redirect-classified sample would be a guaranteed false "missing" error.
  const comboSamples: RenderedSample[] = [];
  if (isKeep('roof-repair-belleville-nj') || isNoindex('roof-repair-belleville-nj')) {
    comboSamples.push({
      // Newark combos are 301-redirected into the service pages (Option 3), so they
      // are no longer prerendered — use a keep combo from another city.
      label: 'keep combo (roof-repair/belleville)',
      file: 'roof-repair-belleville-nj.html',
      coreH2: comboHasDefinition('roof-repair', 'belleville')
        ? H.combo.definitionH2(repairName)
        : H.combo.coreH2(repairName, keepComboCity),
      kind: 'full',
    });
  }
  if (
    isKeep('asphalt-shingle-roofing-belleville-nj') ||
    isNoindex('asphalt-shingle-roofing-belleville-nj')
  ) {
    comboSamples.push({
      label: 'noindex combo (asphalt-shingle-roofing/belleville)',
      file: 'asphalt-shingle-roofing-belleville-nj.html',
      coreH2: comboHasDefinition('asphalt-shingle-roofing', 'belleville')
        ? H.combo.definitionH2(keepComboService)
        : H.combo.coreH2(keepComboService, keepComboCity),
      kind: 'full',
    });
  }

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
    },
    ...comboSamples,
    // H1-only samples — templates outside the §4.x heading trees; only the
    // statement-H1 rules apply (their body headings are page-specific).
    { label: 'comparison (asphalt-shingles-vs-metal-roofing)', file: 'asphalt-shingles-vs-metal-roofing.html', kind: 'h1-only' },
    { label: 'article (signs-you-need-roof-repair-nj)', file: 'signs-you-need-roof-repair-nj.html', kind: 'h1-only' },
    { label: 'glossary', file: 'roofing-glossary.html', kind: 'h1-only' },
    { label: 'kb index', file: 'roofing-knowledge-base.html', kind: 'h1-only' },
    { label: 'kb cluster (roof-problems)', file: 'roofing-knowledge-base/roof-problems.html', kind: 'h1-only' },
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
    // ── H1 is a statement (must NOT end in "?") ───────────────────────────────
    if (isQuestion(h1.text)) {
      errors.push(`${tag} H1 is a question — H1s must be statements → "${h1.text.trim()}"`);
    }
    // ── H1 has zero element children (no <br>/<span> split) ───────────────────
    if (hasElementChildren(h1)) {
      errors.push(`${tag} H1 has element children (<br>/<span> split): "${h1.text.trim()}"`);
    }
  }

  // h1-only samples stop here — their body headings are page-specific and sit
  // outside the §4.x question-form trees.
  if (sample.kind === 'h1-only') return;

  // ── all h1..h4 outside nav/footer/button/label; ALL statements; level order ─
  // 2026-09 heading policy v3: every heading (H1-H4) is a statement. The one
  // exception: the 6 hub pages render their FAQ ITEM questions as <h3> inside
  // <section aria-labelledby="hub-faq-heading"> — real questions, kept for the
  // FAQ rich-result pairing, exempt from the form check only.
  const headings = root.querySelectorAll('h1,h2,h3,h4');
  let prevLevel = 0;
  for (const h of headings) {
    const text = h.text.trim();
    if (inForbiddenRegion(h)) {
      errors.push(`${tag} forbidden <${h.tagName.toLowerCase()}> inside nav/footer/button/label: "${text}"`);
      continue; // do not let a nav heading drive level-order
    }
    const isHubFaqItem =
      h.tagName === 'H3' && h.closest('section[aria-labelledby="hub-faq-heading"]') !== null;
    // Owner-approved Cora review (2026-09-11): the roof-repair prose band
    // may use question H2/H3s. All other pages and structural checks retain
    // the existing policy; H1 must still be a statement.
    const isRepairQuestion =
      sample.file === 'roof-repair-in-newark-nj.html' &&
      (h.tagName === 'H2' || h.tagName === 'H3') &&
      (h.closest('section[aria-labelledby^="service-section-"]') !== null ||
        h.closest('section#roofing-repair-questions') !== null ||
        h.closest('section#roof-repair-visit') !== null);
    // H1 statement form is asserted above (skip double-reporting it here).
    if (h.tagName !== 'H1' && !isHubFaqItem && !isRepairQuestion && isQuestion(text)) {
      errors.push(`${tag} <${h.tagName.toLowerCase()}> is a question — headings must be statements → "${text}"`);
    }
    // City+State rule — FAQ item questions are conversational and exempt.
    if (!isHubFaqItem && !isRepairQuestion) {
      const bare = barePlaces(text);
      if (bare.length) {
        errors.push(`${tag} <${h.tagName.toLowerCase()}> names ${bare.join(', ')} without ", NJ" → "${text}"`);
      }
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
  console.log('  HEADING POLICY VALIDATION (statement H1-H4; FAQ and approved repair questions)');
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

  console.log('Heading policy valid: statement H1-H4 (hub FAQ and repair prose exceptions), Core-before-Outer,');
  console.log('no nav/footer H-tags, no skipped levels, article titles unique statements. PASS');
  process.exit(0);
}

main();
