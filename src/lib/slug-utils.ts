// ─── Slug Utilities ──────────────────────────────────────────────────────────

/**
 * Normalize text to a URL-safe slug.
 * Lowercases, replaces non-alphanumeric chars with hyphens, trims hyphens.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Generate a combo page slug: {service-slug}-{city-slug}-nj
 * Example: "roof-repair" + "newark" => "roof-repair-newark-nj"
 */
export function generateComboSlug(serviceSlug: string, citySlug: string): string {
  return `${serviceSlug}-${citySlug}-nj`;
}

/**
 * Generate a service HUB page slug: {service-slug}-newark-nj
 * Rule 7 slug flip (2026-10-24, owner decision): the service page carries the
 * exact keyword slug "{service}-{city}-nj" for Newark — the same form combos
 * use — instead of the former local-intent "{service}-in-newark-nj". The bare
 * service.slug remains the internal identifier (combo generation + form
 * values); ONLY the service PAGE url carries this form. The old "-in-" URLs
 * 308 to these slugs via next.config.ts.
 * Example: "roof-repair" => "roof-repair-newark-nj"
 */
export function generateServicePageSlug(serviceSlug: string): string {
  return `${serviceSlug}-newark-nj`;
}

/**
 * Generate a city landing page slug: roof-repair-and-installation-{city-slug}-nj
 * Rule 7 slug flip (2026-10-24, owner decision): dropped the "-in-" so the city
 * page slug is the exact keyword form. Still avoids collision with service page
 * slugs and the combo "{service}-{city}-nj" pattern. The old "-in-" URLs 308
 * to these slugs via next.config.ts.
 * Example: "newark" => "roof-repair-and-installation-newark-nj"
 */
export function generateCityPageSlug(citySlug: string): string {
  return `roof-repair-and-installation-${citySlug}-nj`;
}

/**
 * Services whose Newark SERVICE HUB page was retired in the Rule 7 slug flip
 * (2026-10-24). For these 9 services BOTH URL forms were live pages (the hub
 * at "{service}-in-newark-nj" and the Newark combo at "{service}-newark-nj").
 * The exact-form combo page survives as the single canonical page; the hub's
 * unique content was reconciled into the combo content, the hub route was
 * removed, and the "-in-" URL 308s to the exact slug. These services therefore
 * register NO service page (see slug-registry.ts) and DO keep their Newark
 * combo (see combos.ts) — the opposite of the other 56 services.
 */
export const RETIRED_NEWARK_HUB_SERVICES: ReadonlySet<string> = new Set([
  'tile-roof-installation-repair',
  'pvc-roofing',
  'roof-flashing-installation-repair',
  'gutter-installation-repair',
  'skylight-installation-repair',
  'silicone-elastomeric-roof-coating',
  'commercial-roof-installation',
  'custom-roof-design-consultation',
  'roof-ice-dam-prevention',
]);
