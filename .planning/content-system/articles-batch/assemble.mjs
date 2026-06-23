// Deterministic assemble for the residential-roof-types articles sub-batch.
// Reads _authored.json (the AUTHOR workflow result's `articles` array), merges the
// authored content fields with the FIXED identity fields (orchestrator-owned, never
// agent-authored), and emits src/data/article-content/residential-roof-types.ts.
// JSON.stringify => valid TS object literals => zero escaping bugs (hubs-batch lesson).
//
// Run: node .planning/content-system/articles-batch/assemble.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..', '..');
const AUTHORED = join(HERE, '_authored.json');
const OUT = join(REPO, 'src', 'data', 'article-content', 'residential-roof-types.ts');

// Fixed identity (current residential-roof-types.ts) — agents never touch these.
// 9 parent residential roof-type services x 3 articles = 27.
const svc = (parentId) => ({ parentId, parentType: 'service' });
const IDENTITY = {
  'residential-roof-installation-signs':        { ...svc('residential-roof-installation'), position: 1 },
  'residential-roof-installation-cost-guide':   { ...svc('residential-roof-installation'), position: 2 },
  'residential-roof-installation-decision':     { ...svc('residential-roof-installation'), position: 3 },
  'asphalt-shingle-roofing-signs':              { ...svc('asphalt-shingle-roofing'), position: 1 },
  'asphalt-shingle-roofing-cost-guide':         { ...svc('asphalt-shingle-roofing'), position: 2 },
  'asphalt-shingle-roofing-decision':           { ...svc('asphalt-shingle-roofing'), position: 3 },
  'slate-roof-installation-repair-signs':       { ...svc('slate-roof-installation-repair'), position: 1 },
  'slate-roof-installation-repair-cost-guide':  { ...svc('slate-roof-installation-repair'), position: 2 },
  'slate-roof-installation-repair-decision':    { ...svc('slate-roof-installation-repair'), position: 3 },
  'wood-shake-roofing-signs':                   { ...svc('wood-shake-roofing'), position: 1 },
  'wood-shake-roofing-cost-guide':              { ...svc('wood-shake-roofing'), position: 2 },
  'wood-shake-roofing-decision':                { ...svc('wood-shake-roofing'), position: 3 },
  'metal-roof-installation-repair-signs':       { ...svc('metal-roof-installation-repair'), position: 1 },
  'metal-roof-installation-repair-cost-guide':  { ...svc('metal-roof-installation-repair'), position: 2 },
  'metal-roof-installation-repair-decision':    { ...svc('metal-roof-installation-repair'), position: 3 },
  'flat-roof-installation-repair-signs':        { ...svc('flat-roof-installation-repair'), position: 1 },
  'flat-roof-installation-repair-cost-guide':   { ...svc('flat-roof-installation-repair'), position: 2 },
  'flat-roof-installation-repair-decision':     { ...svc('flat-roof-installation-repair'), position: 3 },
  'tile-roof-installation-repair-signs':        { ...svc('tile-roof-installation-repair'), position: 1 },
  'tile-roof-installation-repair-cost-guide':   { ...svc('tile-roof-installation-repair'), position: 2 },
  'tile-roof-installation-repair-decision':     { ...svc('tile-roof-installation-repair'), position: 3 },
  'cedar-shake-roofing-signs':                  { ...svc('cedar-shake-roofing'), position: 1 },
  'cedar-shake-roofing-cost-guide':             { ...svc('cedar-shake-roofing'), position: 2 },
  'cedar-shake-roofing-decision':               { ...svc('cedar-shake-roofing'), position: 3 },
  'rubber-roofing-epdm-signs':                  { ...svc('rubber-roofing-epdm'), position: 1 },
  'rubber-roofing-epdm-cost-guide':             { ...svc('rubber-roofing-epdm'), position: 2 },
  'rubber-roofing-epdm-decision':               { ...svc('rubber-roofing-epdm'), position: 3 },
};
const ORDER = Object.keys(IDENTITY);

const raw = JSON.parse(readFileSync(AUTHORED, 'utf8'));
const authored = Array.isArray(raw) ? raw : raw.articles;
const byId = new Map(authored.map((a) => [a.articleId, a]));

for (const id of ORDER) {
  if (!byId.has(id)) { console.error(`MISSING authored content for ${id}`); process.exit(1); }
}

const objects = ORDER.map((id) => {
  const a = byId.get(id);
  return {
    articleId: id,
    parentId: IDENTITY[id].parentId,
    parentType: IDENTITY[id].parentType,
    position: IDENTITY[id].position,
    directAnswer: a.directAnswer,
    intro: a.intro,
    sections: a.sections.map((s) => ({ heading: s.heading, body: s.body })),
    conclusion: a.conclusion,
    ctaHeading: a.ctaHeading,
    ctaText: a.ctaText,
    metaDescription: a.metaDescription,
  };
});

const header = `import type { ArticleContent } from './schema';

// ─── Residential Roof Types Article Content ──────────────────────────────────
// 9 services x 3 articles = 27 articles (parentType: 'service').
// residential-roof-installation, asphalt-shingle-roofing, slate-roof-installation-repair,
// wood-shake-roofing, metal-roof-installation-repair, flat-roof-installation-repair,
// tile-roof-installation-repair, cedar-shake-roofing, rubber-roofing-epdm.
// signs / cost-guide / decision (pros-and-cons).
// Rewritten answer-first + de-fabbed (semantic-content ruleset v1.7), grounded in the
// committed parent gold service-content/residential-roof-types.ts.

export const residentialRoofTypesArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
