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
 * Generate a city landing page slug: roofing-in-{city-slug}-nj
 * This pattern avoids collision with service page slugs.
 * Example: "newark" => "roofing-in-newark-nj"
 */
export function generateCityPageSlug(citySlug: string): string {
  return `roofing-in-${citySlug}-nj`;
}
