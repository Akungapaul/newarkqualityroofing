// ─── Knowledge-base clusters (D-14 taxonomy) ─────────────────────────────────
//
// SINGLE SOURCE OF TRUTH for the six article clusters. Consumed by the KB route
// (src/app/roofing-knowledge-base/[[...slug]]/page.tsx) and by the sitemap's
// `knowledge-base` segment (src/app/sitemap.ts).
//
// These slugs are mirrored by the `cluster` z.enum in src/data/articles.ts,
// which stays a literal tuple because z.enum() requires one and it is the thing
// that actually validates all 252 articles at module load. Keep the two in sync:
// a mismatch surfaces immediately as an empty cluster page.
//
// `description` is a factual statement of what the section covers — no business
// claims, no statistics. Article counts are ALWAYS derived at render time from
// the real data, never written into copy, so they cannot go stale.

export interface KbCluster {
  slug: string;
  title: string;
  description: string;
}

export const KB_CLUSTERS: readonly KbCluster[] = [
  {
    slug: 'roof-problems',
    title: 'Roof Problems',
    description:
      'Leaks, storm and hail damage, missing shingles, granule loss, ponding water, and structural warning signs — what each symptom indicates and when it needs attention.',
  },
  {
    slug: 'roof-components',
    title: 'Roof Components',
    description:
      'Flashing, underlayment, decking, drip edge, valleys, vents, and pipe boots — what each part of a roof assembly does and how it fails.',
  },
  {
    slug: 'roofing-materials',
    title: 'Roofing Materials',
    description:
      'Asphalt shingles, metal, slate, tile, cedar, and the single-ply membranes used on flat roofs — plus direct comparisons between them.',
  },
  {
    slug: 'roofing-process',
    title: 'Roofing Process',
    description:
      'What happens during an inspection, estimate, tear-off, installation, and final walkthrough, and how New Jersey code applies at each stage.',
  },
  {
    slug: 'roofing-costs',
    title: 'Roofing Costs',
    description:
      'What roof repair and replacement cost in New Jersey, and how roof size, pitch, material, and access change the price.',
  },
  {
    slug: 'local-roofing-knowledge',
    title: 'Local Roofing Knowledge',
    description:
      'Newark and Essex County specifics — regional weather loads, New Jersey contractor registration and insurance requirements, and how to vet a roofer.',
  },
] as const;

export const KB_CLUSTER_SLUGS = KB_CLUSTERS.map((c) => c.slug);

const CLUSTER_BY_SLUG = new Map(KB_CLUSTERS.map((c) => [c.slug, c]));

export function getKbCluster(slug: string): KbCluster | undefined {
  return CLUSTER_BY_SLUG.get(slug);
}
