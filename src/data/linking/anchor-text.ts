/**
 * Anchor text rotation utility for keyword-rich internal links.
 * Provides varied anchor text patterns for service and city links
 * to avoid over-optimization from identical anchor text across pages.
 */

const servicePatterns: Array<(name: string) => string> = [
  (name) => `${name.toLowerCase()} services`,
  (name) => `professional ${name.toLowerCase()}`,
  (name) => `${name.toLowerCase()} in Essex County`,
  (name) => `expert ${name.toLowerCase()}`,
];

const cityPatterns: Array<(name: string) => string> = [
  (name) => `${name} roofing`,
  (name) => `roofing services in ${name}`,
  (name) => `${name}, NJ roofing`,
  (name) => `roofing contractor in ${name}`,
];

/**
 * Get a varied anchor text for a service link.
 * Uses index-based rotation to ensure different instances use different patterns.
 */
export function getServiceAnchorText(name: string, index: number): string {
  return servicePatterns[index % servicePatterns.length](name);
}

/**
 * Get a varied anchor text for a city link.
 * Uses index-based rotation to ensure different instances use different patterns.
 */
export function getCityAnchorText(name: string, index: number): string {
  return cityPatterns[index % cityPatterns.length](name);
}
