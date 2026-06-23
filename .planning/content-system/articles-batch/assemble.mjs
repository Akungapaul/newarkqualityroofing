// Deterministic assemble for the commercial-roof-types articles sub-batch.
// Reads _authored.json (the AUTHOR workflow result's `articles` array), merges the
// authored content fields with the FIXED identity fields (orchestrator-owned, never
// agent-authored), and emits src/data/article-content/commercial-roof-types.ts.
// JSON.stringify => valid TS object literals => zero escaping bugs (hubs-batch lesson).
//
// Run: node .planning/content-system/articles-batch/assemble.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO = join(HERE, '..', '..', '..');
const AUTHORED = join(HERE, '_authored.json');
const OUT = join(REPO, 'src', 'data', 'article-content', 'commercial-roof-types.ts');

// Fixed identity (current commercial-roof-types.ts) — agents never touch these.
// 8 parent commercial roof-type services x 3 articles = 24.
const svc = (parentId) => ({ parentId, parentType: 'service' });
const IDENTITY = {
  'tpo-roofing-installation-signs':         { ...svc('tpo-roofing-installation'), position: 1 },
  'tpo-roofing-installation-cost-guide':    { ...svc('tpo-roofing-installation'), position: 2 },
  'tpo-roofing-installation-decision':      { ...svc('tpo-roofing-installation'), position: 3 },
  'epdm-commercial-roofing-signs':          { ...svc('epdm-commercial-roofing'), position: 1 },
  'epdm-commercial-roofing-cost-guide':     { ...svc('epdm-commercial-roofing'), position: 2 },
  'epdm-commercial-roofing-decision':       { ...svc('epdm-commercial-roofing'), position: 3 },
  'modified-bitumen-roofing-signs':         { ...svc('modified-bitumen-roofing'), position: 1 },
  'modified-bitumen-roofing-cost-guide':    { ...svc('modified-bitumen-roofing'), position: 2 },
  'modified-bitumen-roofing-decision':      { ...svc('modified-bitumen-roofing'), position: 3 },
  'built-up-roofing-signs':                 { ...svc('built-up-roofing'), position: 1 },
  'built-up-roofing-cost-guide':            { ...svc('built-up-roofing'), position: 2 },
  'built-up-roofing-decision':              { ...svc('built-up-roofing'), position: 3 },
  'commercial-metal-roofing-signs':         { ...svc('commercial-metal-roofing'), position: 1 },
  'commercial-metal-roofing-cost-guide':    { ...svc('commercial-metal-roofing'), position: 2 },
  'commercial-metal-roofing-decision':      { ...svc('commercial-metal-roofing'), position: 3 },
  'pvc-roofing-signs':                      { ...svc('pvc-roofing'), position: 1 },
  'pvc-roofing-cost-guide':                 { ...svc('pvc-roofing'), position: 2 },
  'pvc-roofing-decision':                   { ...svc('pvc-roofing'), position: 3 },
  'green-roof-installation-signs':          { ...svc('green-roof-installation'), position: 1 },
  'green-roof-installation-cost-guide':     { ...svc('green-roof-installation'), position: 2 },
  'green-roof-installation-decision':       { ...svc('green-roof-installation'), position: 3 },
  'spray-foam-roofing-signs':               { ...svc('spray-foam-roofing'), position: 1 },
  'spray-foam-roofing-cost-guide':          { ...svc('spray-foam-roofing'), position: 2 },
  'spray-foam-roofing-decision':            { ...svc('spray-foam-roofing'), position: 3 },
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

// ─── Commercial Roof Types Article Content ───────────────────────────────────
// 8 services x 3 articles = 24 articles (parentType: 'service').
// tpo-roofing-installation, epdm-commercial-roofing, modified-bitumen-roofing,
// built-up-roofing, commercial-metal-roofing, pvc-roofing, green-roof-installation,
// spray-foam-roofing. signs / cost-guide / decision (pros-and-cons).
// Rewritten answer-first + de-fabbed (semantic-content ruleset v1.7), grounded in the
// committed parent gold service-content/commercial-roof-types.ts.

export const commercialRoofTypesArticles: ArticleContent[] = ${JSON.stringify(objects, null, 2)};
`;

writeFileSync(OUT, header, 'utf8');
console.log(`Wrote ${objects.length} articles -> ${OUT}`);
for (const o of objects) console.log(`  - ${o.articleId} (${o.sections.length} sections, meta ${o.metaDescription.length}c)`);
