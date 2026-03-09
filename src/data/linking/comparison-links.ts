import { comparisons } from '@/data/comparisons';
import type { Comparison } from '@/lib/types';

// ─── Curated service-to-comparison mapping ──────────────────────────────────
// Maps service IDs to relevant comparison slugs (1-4 per service).

const serviceComparisonMap: Record<string, string[]> = {
  // Repair & Maintenance
  'roof-repair': ['roof-repair-vs-replacement', 'patching-vs-full-roof-repair', 'diy-vs-professional-roof-repair'],
  'roof-replacement': ['roof-repair-vs-replacement', 'roof-overlay-vs-tear-off', 'roof-coating-vs-replacement'],
  'emergency-roof-repair': ['preventive-maintenance-vs-emergency-repair', 'patching-vs-full-roof-repair'],
  'roof-maintenance-programs': ['preventive-maintenance-vs-emergency-repair'],
  'roof-leak-repair': ['patching-vs-full-roof-repair', 'diy-vs-professional-roof-repair'],
  'storm-damage-roof-repair': ['roof-repair-vs-replacement', 'diy-vs-professional-roof-repair'],

  // Residential Roof Types
  'asphalt-shingle-roofing': ['asphalt-shingles-vs-metal-roofing', 'architectural-vs-3-tab-shingles', 'wood-shake-vs-asphalt-shingles', 'asphalt-vs-slate-roofing'],
  'slate-roof-installation-repair': ['slate-vs-tile-roofing', 'asphalt-vs-slate-roofing', 'best-roofing-material-nj-weather'],
  'wood-shake-roofing': ['wood-shake-vs-asphalt-shingles', 'cedar-shake-vs-wood-shingle'],
  'metal-roof-installation-repair': ['asphalt-shingles-vs-metal-roofing', 'metal-vs-tile-roofing', 'standing-seam-vs-corrugated-metal'],
  'flat-roof-installation-repair': ['best-roofing-for-flat-roofs', 'tpo-vs-epdm-roofing', 'modified-bitumen-vs-tpo'],
  'tile-roof-installation-repair': ['slate-vs-tile-roofing', 'metal-vs-tile-roofing'],
  'cedar-shake-roofing': ['cedar-shake-vs-wood-shingle', 'wood-shake-vs-asphalt-shingles'],
  'rubber-roofing-epdm': ['tpo-vs-epdm-roofing', 'rubber-roofing-vs-tpo'],

  // Commercial Roof Types
  'tpo-roofing-installation': ['tpo-vs-epdm-roofing', 'pvc-vs-tpo-roofing', 'modified-bitumen-vs-tpo', 'rubber-roofing-vs-tpo'],
  'epdm-commercial-roofing': ['tpo-vs-epdm-roofing', 'rubber-roofing-vs-tpo', 'best-commercial-roofing-material'],
  'modified-bitumen-roofing': ['modified-bitumen-vs-tpo', 'built-up-roofing-vs-modified-bitumen'],
  'built-up-roofing': ['built-up-roofing-vs-modified-bitumen', 'best-commercial-roofing-material'],
  'pvc-roofing': ['pvc-vs-tpo-roofing', 'best-commercial-roofing-material'],
  'spray-foam-roofing': ['spray-foam-vs-tpo', 'best-commercial-roofing-material'],
  'green-roof-installation': ['green-roof-vs-traditional-roofing'],

  // Energy & Solar
  'solar-panel-roofing-installation': ['solar-shingles-vs-solar-panels', 'most-energy-efficient-roofing-materials'],
  'solar-shingle-installation': ['solar-shingles-vs-solar-panels', 'most-energy-efficient-roofing-materials'],
  'energy-efficient-roofing-solutions': ['most-energy-efficient-roofing-materials', 'cheapest-vs-most-durable-roofing'],

  // Replacement Sub-pages
  'full-roof-tear-off': ['roof-overlay-vs-tear-off', 'roof-repair-vs-replacement'],
  'roof-overlay-installation': ['roof-overlay-vs-tear-off'],
  're-roofing': ['roof-repair-vs-replacement', 'roof-overlay-vs-tear-off'],

  // Design & Consultation
  'historic-roof-restoration': ['best-roofing-for-historic-homes-nj', 'best-roofing-for-essex-county-colonial-homes'],

  // Commercial Services
  'commercial-roof-installation': ['best-commercial-roofing-material', 'tpo-vs-epdm-roofing'],
  'commercial-roof-repair': ['best-commercial-roofing-material', 'preventive-maintenance-vs-emergency-repair'],
  'commercial-roof-replacement': ['best-commercial-roofing-material', 'roof-coating-vs-replacement'],

  // Coating
  'silicone-roof-coating': ['roof-coating-vs-replacement'],
  'silicone-elastomeric-roof-coating': ['roof-coating-vs-replacement'],
};

// Build a lookup map of slug -> Comparison for fast access
const comparisonBySlug = new Map<string, Comparison>();
for (const c of comparisons) {
  comparisonBySlug.set(c.slug, c);
}

/**
 * Returns relevant comparison pages for a given service ID.
 * Returns empty array if no comparisons are mapped.
 */
export function getRelatedComparisons(serviceId: string): Comparison[] {
  const slugs = serviceComparisonMap[serviceId];
  if (!slugs) return [];

  return slugs
    .map((slug) => comparisonBySlug.get(slug))
    .filter((c): c is Comparison => c !== undefined);
}
