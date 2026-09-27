/**
 * Keyword-in-First-Sentence Lead Audit (AUD-02 — build-failing when run).
 *
 * POLICY (2026-09 owner decision, follows the statement-H1 conversion): the
 * FIRST SENTENCE of every page's lead copy — the `directAnswer` rendered
 * directly under the H1 (cluster pages: the `description`) — must contain the
 * page's TARGET KEYWORD (the H1's core phrase) in natural form, e.g.
 * "…roof repair in Newark, NJ…" for the H1 "Roof Repair Newark, NJ".
 *
 * Matching is normalized: case-insensitive, "&" ⇄ "and", punctuation ignored.
 * Geo flexibility: "in Newark, NJ" / "across Newark, New Jersey" both count —
 * the geo requirement is the token ("newark"), not one preposition. The six
 * "X Installation Repair" service names are audited in their grammatical
 * "X Installation and Repair" form (matching the H1 overrides).
 *
 * DATA PASS (always runs): services, cities, combos, articles, comparisons,
 * hubs, KB clusters — each page type has an explicit requirement list below.
 * RENDERED PASS (only if .next/server/app exists): the hardcoded-JSX pages
 * (home, about, contact, roofing-services, service-areas, glossary, KB index)
 * — checks the first three <p> after the <h1> in the prerendered HTML.
 *
 * Any violation -> process.exit(1); else process.exit(0).
 * Run with: tsx scripts/audit-keyword-leads.ts  (npm run audit:leads)
 * Flags: --json (machine-readable miss list to stdout), --types=a,b,c
 */

import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'node-html-parser';

import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { comparisons } from '@/data/comparisons';
import { articles } from '@/data/articles';
import { KB_CLUSTERS } from '@/data/kb-clusters';

const REPO_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PRERENDER_DIR = join(REPO_ROOT, '.next', 'server', 'app');

const JSON_MODE = process.argv.includes('--json');
const typesArg = process.argv.find((a) => a.startsWith('--types='));
const TYPES = typesArg
  ? typesArg.slice('--types='.length).split(',')
  : ['services', 'cities', 'combos', 'articles', 'comparisons', 'hubs', 'clusters', 'rendered'];

// ─── Extraction helpers (same conventions as the batch audit-leads scripts) ───

const strip = (s: string) => s.replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
const firstSentence = (s: string) => strip(s).split(/(?<=[.!?])\s/)[0] || strip(s);

/** Normalize for containment: lowercase, & → and, punctuation → space. */
const norm = (s: string) =>
  ` ${s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `;

/** Plural-tolerant stem: "programs"→"program", "shakes"→"shake" (keeps "process"). */
const stem = (w: string) => w.replace(/([^s])s$/, '$1');

/** Contiguous-phrase match; the LAST word tolerates singular/plural drift. */
const has = (sentence: string, phrase: string): boolean => {
  const words = norm(phrase).trim().split(' ');
  if (words.length === 0 || words[0] === '') return true;
  const parts = words.map((w, i) => (i === words.length - 1 ? `${stem(w)}(?:e?s)?` : w));
  return new RegExp(`(?:^| )${parts.join(' ')}(?: |$)`).test(norm(sentence));
};

/** Token match: every word present in any order, plural-tolerant (comparison items). */
const hasTokens = (sentence: string, phrase: string): boolean =>
  norm(phrase)
    .trim()
    .split(' ')
    .every((w) => new RegExp(`(?:^| )${stem(w)}(?:e?s)?(?: |$)`).test(norm(sentence)));

/** A requirement is satisfied when ANY of its alternative phrases is present.
 *  A "~"-prefixed alternative uses token (any-order) matching. */
type Req = string[];
const matchOne = (sentence: string, p: string) =>
  p.startsWith('~') ? hasTokens(sentence, p.slice(1)) : has(sentence, p);
const meets = (sentence: string, reqs: Req[]) => reqs.every((alts) => alts.some((p) => matchOne(sentence, p)));
const describeMiss = (sentence: string, reqs: Req[]) =>
  reqs
    .filter((alts) => !alts.some((p) => matchOne(sentence, p)))
    .map((alts) => alts[0].replace(/^~/, ''))
    .join(' + ');

/** The six "X Installation Repair" names are audited with the conjunction restored. */
const serviceKeyword = (name: string) => name.replace(/ Installation Repair$/, ' Installation and Repair');

interface Miss {
  type: string;
  id: string;
  keyword: string;
  missing: string;
  firstSentence: string;
}

const misses: Miss[] = [];
const warnings: string[] = [];
let checked = 0;

function check(type: string, id: string, lead: string | undefined, reqs: Req[], keyword: string): void {
  checked++;
  const fs = lead ? firstSentence(lead) : '';
  if (!lead || !meets(fs, reqs)) {
    misses.push({ type, id, keyword, missing: lead ? describeMiss(fs, reqs) : '(no lead)', firstSentence: fs });
  }
}

// ─── DATA PASS ────────────────────────────────────────────────────────────────

async function dataPass(): Promise<void> {
  if (TYPES.includes('services')) {
    const { getServiceContent } = await import('@/data/service-content');
    for (const s of services) {
      const kw = serviceKeyword(s.name);
      check('service', s.id, getServiceContent(s.id).directAnswer, [[kw], ['Newark']], `${kw} + Newark`);
    }
  }

  if (TYPES.includes('cities')) {
    const { getCityContent } = await import('@/data/city-content');
    for (const c of cities) {
      check('city', c.id, getCityContent(c.id).directAnswer, [['roof repair and installation'], [c.name]], `roof repair and installation + ${c.name}`);
    }
  }

  if (TYPES.includes('combos')) {
    const { getComboContent } = await import('@/data/combo-content');
    for (const s of services) {
      const kw = serviceKeyword(s.name);
      for (const c of cities) {
        check('combo', `${s.id}/${c.id}`, getComboContent(s.id, c.id).directAnswer, [[kw], [c.name]], `${kw} + ${c.name}`);
      }
    }
  }

  if (TYPES.includes('articles')) {
    const { getArticleContent } = await import('@/data/article-content');
    const { getSurferPage, runsText } = await import('@/lib/surfer-verbatim');
    for (const a of articles) {
      // Surfer guide articles: body is the owner's draft, shipped verbatim. The
      // slug carries the keyword by construction; the opening is reported only.
      const surfer = getSurferPage(`/${a.slug}`);
      if (surfer) {
        const firstBlock = surfer.sections[0]?.blocks?.find((b) => b.t === 'p');
        const lead = surfer.lead.length
          ? surfer.lead.map(runsText).join(' ')
          : firstBlock && 'runs' in firstBlock ? runsText(firstBlock.runs) : '';
        const fs = firstSentence(lead);
        checked++;
        if (!meets(fs, [[surfer.leadPhrase]])) {
          warnings.push(`article ${a.id}: verbatim opening lacks "${surfer.leadPhrase}" → "${fs.slice(0, 100)}"`);
        }
        continue;
      }
      const reqs = articleReqs(a.title);
      check('article', a.id, getArticleContent(a.id).directAnswer, reqs, reqs.map((r) => r[0]).join(' + '));
    }
  }

  if (TYPES.includes('comparisons')) {
    const { getComparisonContent } = await import('@/data/comparison-content');
    for (const c of comparisons) {
      // "X vs Y" pages match on the item tokens, any order ("EPDM rubber" ≡
      // "Rubber (EPDM)"); ranking/decision pages match on the full name phrase,
      // minus any trailing geo ("… Historic Homes NJ" → "… historic homes in NJ"
      // must be able to pass).
      const nameKw = c.name.replace(/\s+(?:in\s+)?NJ$/i, '');
      const reqs: Req[] = c.itemA && c.itemB ? [[`~${c.itemA}`], [`~${c.itemB}`]] : [[nameKw]];
      check('comparison', c.id, getComparisonContent(c.id).directAnswer, reqs, reqs.map((r) => r[0]).join(' + '));
    }
  }

  if (TYPES.includes('hubs')) {
    const { getHubContent } = await import('@/data/hub-content');
    const HUB_REQS: Record<string, Req[]> = {
      'residential-roofing': [['residential roofing'], ['Newark', 'Essex']],
      'commercial-roofing': [['commercial roofing'], ['Newark', 'Essex']],
      'flat-roof-systems': [['flat roof systems', 'flat roof'], ['Newark', 'Essex']],
      'roofing-materials': [['roofing material', 'roofing materials'], ['Newark', 'Essex']],
      'free-roofing-estimate': [['free roofing estimate'], ['Newark', 'Essex']],
      'our-roofing-process': [['roofing process']],
    };
    for (const [hubId, reqs] of Object.entries(HUB_REQS)) {
      check('hub', hubId, getHubContent(hubId).directAnswer, reqs, reqs.map((r) => r[0]).join(' + '));
    }
  }

  if (TYPES.includes('clusters')) {
    for (const k of KB_CLUSTERS) {
      const kw = k.title.replace(/ in NJ$/, '');
      check('cluster', k.slug, k.description, [[kw]], kw);
    }
  }
}

// ─── Article keyword derivation (mirrors the title families of articles.ts) ───

const COST_TOKENS = ['cost', 'costs', 'price', 'prices', 'pricing'];
const PROSCONS_TOKENS = ['pros and cons', 'advantages and disadvantages', 'advantages and drawbacks', 'benefits and drawbacks'];
const INCENTIVE_TOKENS = ['incentive', 'incentives', 'savings', 'credit', 'credits', 'rebate', 'rebates'];

/** Per-title overrides for the handful of titles outside the generator families. */
const ARTICLE_TITLE_REQS: Record<string, Req[]> = {
  'How to Compare Roof Warranties in NJ': [['roof warranties', 'roof warranty', 'warranties', 'warranty']],
  'Roof Warranties: What NJ Roofers Recommend': [['roof warranties', 'roof warranty', 'warranties', 'warranty']],
  'Cheapest vs Most Durable Roofing: How to Decide in NJ': [['cheapest'], ['durable']],
  'Complete NJ Roofing Guide for Homeowners': [['roofing guide']],
  'How to Find a Reliable Roofer in Essex County, NJ': [['roofer', 'roofing contractor'], ['Essex County']],
  'NJ Roofing Licensing and Insurance Requirements': [['licensing', 'license', 'registration', 'registered'], ['insurance']],
};

function articleReqs(title: string): Req[] {
  const override = ARTICLE_TITLE_REQS[title];
  if (override) return override;
  let m: RegExpMatchArray | null;
  if ((m = title.match(/^Signs You Need (.+) in NJ$/))) return [[m[1]]];
  if ((m = title.match(/^(.+) Cost in NJ$/))) return [[m[1]], COST_TOKENS];
  if ((m = title.match(/^Pros and Cons of (.+) for NJ (?:Homes|Buildings)$/))) return [[m[1]], PROSCONS_TOKENS];
  if ((m = title.match(/^How to Choose an? (.+) Contractor in NJ$/))) return [[m[1]], ['contractor']];
  if ((m = title.match(/^What to Know About (.+) in NJ$/))) return [[m[1]]];
  if ((m = title.match(/^What to Expect From (.+) in NJ$/))) return [[m[1]]];
  if ((m = title.match(/^What NJ Business Owners Should Know About (.+)$/))) return [[m[1]]];
  if ((m = title.match(/^NJ Incentives and Savings for (.+)$/))) return [[m[1]], INCENTIVE_TOKENS];
  if ((m = title.match(/^How to Choose Between (.+) and (.+) in NJ$/))) return [[m[1]], [m[2]]];
  if ((m = title.match(/^How to Choose the (.+?)(?: in NJ)?$/))) return [[m[1]]];
  if ((m = title.match(/^(.+): What NJ Roofers Recommend$/))) {
    const nm = m[1];
    if (nm.includes(' vs ')) {
      const [a, b] = nm.split(' vs ');
      return [[a], [b]];
    }
    return [[nm]];
  }
  throw new Error(`articleReqs: title matches no family — "${title}" (add an ARTICLE_TITLE_REQS override)`);
}

// ─── RENDERED PASS — hardcoded-JSX pages ─────────────────────────────────────

interface RenderedTarget {
  label: string;
  file: string; // relative to .next/server/app
  reqs: Req[];
}

const RENDERED_TARGETS: RenderedTarget[] = [
  { label: 'home', file: 'index.html', reqs: [['roofing contractor'], ['Newark']] },
  { label: 'about', file: 'about.html', reqs: [['Newark Quality Roofing']] },
  { label: 'contact', file: 'contact.html', reqs: [['Newark Quality Roofing']] },
  { label: 'roofing-services', file: 'roofing-services.html', reqs: [['roofing services'], ['Newark']] },
  { label: 'service-areas', file: 'service-areas.html', reqs: [['roofing service areas', 'service areas'], ['Essex County']] },
  { label: 'glossary', file: 'roofing-glossary.html', reqs: [['roofing glossary']] },
  { label: 'kb-index', file: 'roofing-knowledge-base.html', reqs: [['roofing knowledge base']] },
];

function renderedPass(): boolean {
  if (!TYPES.includes('rendered')) return false;
  if (!existsSync(PRERENDER_DIR)) {
    if (!JSON_MODE) {
      console.log();
      console.log('NOTICE: no .next/server/app — skipping the rendered (hardcoded-JSX) pass.');
    }
    return false;
  }
  for (const t of RENDERED_TARGETS) {
    const abs = join(PRERENDER_DIR, t.file);
    if (!existsSync(abs)) {
      misses.push({ type: 'rendered', id: t.label, keyword: t.reqs.map((r) => r[0]).join(' + '), missing: '(sample file missing — stale build)', firstSentence: '' });
      continue;
    }
    checked++;
    const root = parse(readFileSync(abs, 'utf8'));
    // The keyword must appear in the lead block: the first three <p> after the
    // H1 in document order (home has a short sub-headline <p> between the H1
    // and its lead paragraph).
    const seq = root.querySelectorAll('h1, p');
    const h1Idx = seq.findIndex((e) => e.tagName === 'H1');
    const paras = h1Idx === -1
      ? []
      : seq.slice(h1Idx + 1).filter((e) => e.tagName === 'P').slice(0, 3).map((e) => e.text.trim());
    const leadBlock = paras.join(' ');
    if (!meets(leadBlock, t.reqs)) {
      misses.push({
        type: 'rendered',
        id: t.label,
        keyword: t.reqs.map((r) => r[0]).join(' + '),
        missing: describeMiss(leadBlock, t.reqs),
        firstSentence: leadBlock.slice(0, 140),
      });
    }
  }
  return true;
}

// ─── MAIN ────────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  await dataPass();
  const ranRendered = renderedPass();

  if (JSON_MODE) {
    console.log(JSON.stringify({ checked, misses }, null, 2));
    process.exit(misses.length > 0 ? 1 : 0);
  }

  console.log('='.repeat(72));
  console.log('  KEYWORD-IN-FIRST-SENTENCE LEAD AUDIT (build-failing)');
  console.log('='.repeat(72));
  console.log();
  console.log(`Checked ${checked} leads. Rendered pass: ${ranRendered ? 'ran' : 'skipped'}.`);
  console.log(`${misses.length} miss(es), ${warnings.length} warning(s) (verbatim guide articles, not gated).`);
  warnings.forEach((w) => console.log(`  ⚠ ${w}`));

  if (misses.length > 0) {
    const byType = new Map<string, Miss[]>();
    for (const m of misses) {
      const arr = byType.get(m.type) ?? [];
      arr.push(m);
      byType.set(m.type, arr);
    }
    console.log();
    for (const [type, arr] of byType) {
      console.log(`  ${type}: ${arr.length} miss(es)`);
      for (const m of arr.slice(0, 8)) {
        console.log(`    - ${m.id} [needs: ${m.missing}] → "${m.firstSentence.slice(0, 100)}"`);
      }
      if (arr.length > 8) console.log(`    ...and ${arr.length - 8} more (run with --json for the full list)`);
    }
    console.log();
    process.exit(1);
  }

  console.log('Every page lead opens with its target keyword. PASS');
  process.exit(0);
}

main();
