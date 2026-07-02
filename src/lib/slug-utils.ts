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
 * Generate a service HUB page slug: {service-slug}-in-newark-nj
 * Mirrors generateCityPageSlug so service pages read as local-intent URLs and stay
 * structurally distinct from the combo pattern "{service}-{city}-nj" (no "-in-").
 * The bare service.slug remains the internal identifier (combo generation + form
 * values); ONLY the service PAGE url carries this suffix.
 * Example: "roof-repair" => "roof-repair-in-newark-nj"
 */
export function generateServicePageSlug(serviceSlug: string): string {
  return `${serviceSlug}-in-newark-nj`;
}

/**
 * Generate a city landing page slug: roof-repair-and-installation-in-{city-slug}-nj
 * Re-targeted onto the two money keywords (repair + installation). Still avoids
 * collision with service page slugs and the combo "{service}-{city}-nj" pattern.
 * Example: "newark" => "roof-repair-and-installation-in-newark-nj"
 */
export function generateCityPageSlug(citySlug: string): string {
  return `roof-repair-and-installation-in-${citySlug}-nj`;
}
