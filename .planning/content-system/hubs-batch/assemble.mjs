// Assemble the 6 FLAT hub content .ts files from the author-workflow JSON result.
// Splices the curated childLinks (verified slugs) into the 4 category hubs, then
// writes each src/data/hub-content/<slug>.ts via JSON.stringify (no hand-escaping).
// Run: node .planning/content-system/hubs-batch/assemble.mjs <author-output.json>
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_FILE = process.argv[2];
if (!OUT_FILE) { console.error('usage: node assemble.mjs <author-output.json>'); process.exit(1); }
const REPO = '/Users/akungapaul/Projects/Newarkqualityroofing';
const DEST = join(REPO, 'src/data/hub-content');

const parsed = JSON.parse(readFileSync(OUT_FILE, 'utf8'));
const items = Array.isArray(parsed) ? parsed : parsed.result;

const CAMEL = {
  'residential-roofing': 'residentialRoofing',
  'commercial-roofing': 'commercialRoofing',
  'flat-roof-systems': 'flatRoofSystems',
  'roofing-materials': 'roofingMaterials',
  'free-roofing-estimate': 'freeRoofingEstimate',
  'our-roofing-process': 'ourRoofingProcess',
};

const CHILD_LINKS = {
  'residential-roofing': {
    heading: 'What Residential Roofing Services Can You Explore?',
    groups: [
      { label: 'Residential Roof Types', links: [
        { text: 'Asphalt Shingle Roofing', href: '/asphalt-shingle-roofing' },
        { text: 'Metal Roof Installation & Repair', href: '/metal-roof-installation-repair' },
        { text: 'Slate Roof Installation & Repair', href: '/slate-roof-installation-repair' },
        { text: 'Tile Roof Installation & Repair', href: '/tile-roof-installation-repair' },
        { text: 'Cedar Shake Roofing', href: '/cedar-shake-roofing' },
        { text: 'Wood Shake Roofing', href: '/wood-shake-roofing' },
        { text: 'EPDM Rubber Roofing', href: '/rubber-roofing-epdm' },
        { text: 'Residential Roof Installation', href: '/residential-roof-installation' },
      ] },
      { label: 'Repair & Replacement', links: [
        { text: 'Roof Repair', href: '/roof-repair' },
        { text: 'Roof Replacement', href: '/roof-replacement' },
        { text: 'Roof Leak Repair', href: '/roof-leak-repair' },
        { text: 'Roof Inspection', href: '/roof-inspection' },
        { text: 'Storm Damage Roof Repair', href: '/storm-damage-roof-repair' },
        { text: 'Emergency Roof Repair', href: '/emergency-roof-repair' },
      ] },
    ],
  },
  'commercial-roofing': {
    heading: 'What Commercial Roofing Services Can You Explore?',
    groups: [
      { label: 'Commercial Roof Systems', links: [
        { text: 'TPO Roofing Installation', href: '/tpo-roofing-installation' },
        { text: 'EPDM Commercial Roofing', href: '/epdm-commercial-roofing' },
        { text: 'PVC Roofing', href: '/pvc-roofing' },
        { text: 'Modified Bitumen Roofing', href: '/modified-bitumen-roofing' },
        { text: 'Built-Up Roofing', href: '/built-up-roofing' },
        { text: 'Commercial Metal Roofing', href: '/commercial-metal-roofing' },
        { text: 'Spray Foam Roofing', href: '/spray-foam-roofing' },
        { text: 'Green Roof Installation', href: '/green-roof-installation' },
      ] },
      { label: 'Commercial Roofing Services', links: [
        { text: 'Commercial Roof Installation', href: '/commercial-roof-installation' },
        { text: 'Commercial Roof Repair', href: '/commercial-roof-repair' },
        { text: 'Commercial Roof Replacement', href: '/commercial-roof-replacement' },
        { text: 'Roof Thermal Imaging Inspections', href: '/roof-thermal-imaging-inspections' },
        { text: 'Infrared Roof Leak Detection', href: '/infrared-roof-leak-detection' },
      ] },
    ],
  },
  'flat-roof-systems': {
    heading: 'Which Flat Roof Services and Guides Can You Explore?',
    groups: [
      { label: 'Flat & Low-Slope Systems', links: [
        { text: 'TPO Roofing Installation', href: '/tpo-roofing-installation' },
        { text: 'EPDM Commercial Roofing', href: '/epdm-commercial-roofing' },
        { text: 'PVC Roofing', href: '/pvc-roofing' },
        { text: 'Modified Bitumen Roofing', href: '/modified-bitumen-roofing' },
        { text: 'Built-Up Roofing', href: '/built-up-roofing' },
        { text: 'Spray Foam Roofing', href: '/spray-foam-roofing' },
        { text: 'EPDM Rubber Roofing', href: '/rubber-roofing-epdm' },
        { text: 'Flat Roof Installation & Repair', href: '/flat-roof-installation-repair' },
        { text: 'Flat Roof Replacement', href: '/flat-roof-replacement' },
      ] },
      { label: 'Compare Flat Roof Options', links: [
        { text: 'Best Roofing for Flat Roofs', href: '/best-roofing-for-flat-roofs' },
        { text: 'TPO vs EPDM Roofing', href: '/tpo-vs-epdm-roofing' },
        { text: 'PVC vs TPO Roofing', href: '/pvc-vs-tpo-roofing' },
        { text: 'Modified Bitumen vs TPO', href: '/modified-bitumen-vs-tpo' },
        { text: 'Rubber Roofing vs TPO', href: '/rubber-roofing-vs-tpo' },
        { text: 'Built-Up Roofing vs Modified Bitumen', href: '/built-up-roofing-vs-modified-bitumen' },
        { text: 'Spray Foam vs TPO', href: '/spray-foam-vs-tpo' },
      ] },
    ],
  },
  'roofing-materials': {
    heading: 'Which Roofing Materials and Comparisons Can You Explore?',
    groups: [
      { label: 'Roofing Materials We Install', links: [
        { text: 'Asphalt Shingle Roofing', href: '/asphalt-shingle-roofing' },
        { text: 'Metal Roof Installation & Repair', href: '/metal-roof-installation-repair' },
        { text: 'Slate Roof Installation & Repair', href: '/slate-roof-installation-repair' },
        { text: 'Tile Roof Installation & Repair', href: '/tile-roof-installation-repair' },
        { text: 'Cedar Shake Roofing', href: '/cedar-shake-roofing' },
        { text: 'Wood Shake Roofing', href: '/wood-shake-roofing' },
        { text: 'EPDM Rubber Roofing', href: '/rubber-roofing-epdm' },
        { text: 'TPO Roofing Installation', href: '/tpo-roofing-installation' },
      ] },
      { label: 'Material Comparisons', links: [
        { text: 'Asphalt Shingles vs Metal Roofing', href: '/asphalt-shingles-vs-metal-roofing' },
        { text: 'Slate vs Tile Roofing', href: '/slate-vs-tile-roofing' },
        { text: 'Metal vs Tile Roofing', href: '/metal-vs-tile-roofing' },
        { text: 'Architectural vs 3-Tab Shingles', href: '/architectural-vs-3-tab-shingles' },
        { text: 'Best Roofing Material for NJ Weather', href: '/best-roofing-material-nj-weather' },
        { text: 'Most Energy Efficient Roofing Materials', href: '/most-energy-efficient-roofing-materials' },
      ] },
    ],
  },
};

// Canonical field order for readable, diff-stable output.
const ORDER = ['hubId', 'directAnswer', 'definition', 'definitionHeading', 'sections', 'childLinks', 'faqHeading', 'faqs', 'metaTitle', 'metaDescription'];

let written = 0;
for (const { slug, obj } of items) {
  if (CHILD_LINKS[slug]) obj.childLinks = CHILD_LINKS[slug];
  const ordered = {};
  for (const k of ORDER) if (obj[k] !== undefined) ordered[k] = obj[k];
  const camel = CAMEL[slug];
  const body =
    `import type { HubContent } from './schema';\n\n` +
    `export const ${camel}HubContent: HubContent = ${JSON.stringify(ordered, null, 2)};\n`;
  writeFileSync(join(DEST, `${slug}.ts`), body, 'utf8');
  written++;
  console.log(`wrote ${slug}.ts (${ordered.childLinks ? 'category +childLinks' : 'utility'})`);
}
console.log(`\nAssembled ${written}/6 hub content files.`);
