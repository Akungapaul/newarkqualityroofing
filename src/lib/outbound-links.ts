/**
 * Outbound-link policy — the single source of truth for which external hosts
 * this site may link to, and whether those links are followed.
 *
 * Context: the Semantic Content Ruleset (R9) bans outbound citation links, and
 * `scripts/audit-semantics.ts` gates on it. The owner ruled 2026-09-03 that the
 * Cora on-page report takes precedence, so a NARROW, allowlisted exemption is
 * permitted. This module defines that allowlist once so the renderer
 * (`rich-text.tsx`), the semantic gate, and the dedicated external-link gate
 * (`scripts/audit-external-links.ts`) cannot drift apart.
 *
 * Rules encoded here:
 *   - HTTPS only. An `http://` destination is never permitted.
 *   - Host must be on the allowlist below, matched on the registrable domain so
 *     `www.` and other subdomains resolve to the same policy.
 *   - Anything not allowlisted renders as plain text, never as a link.
 *
 * The allowlist is deliberately limited to bodies this site's content already
 * cites BY NAME in prose. A link is the machine-readable form of an attribution
 * that is already there — it never introduces a source the copy does not name.
 */

export type LinkPolicy = 'internal' | 'follow' | 'nofollow' | 'reject';

/**
 * Registrable domain → follow policy.
 *
 * `follow`   — standards bodies, government, and codes. Citing them is the
 *              point of the attribution and passing equity is appropriate.
 * `nofollow` — commercial publishers and manufacturers. Genuine sources, but
 *              this site does not vouch for them commercially.
 */
export const CITATION_HOSTS: Readonly<Record<string, 'follow' | 'nofollow'>> = {
  // ── Standards, codes, government ──────────────────────────────────────────
  'nrca.net': 'follow',              // National Roofing Contractors Association
  'arma.org': 'follow',              // Asphalt Roofing Manufacturers Association
  'astm.org': 'follow',
  'osha.gov': 'follow',
  'epa.gov': 'follow',
  'noaa.gov': 'follow',
  'weather.gov': 'follow',
  'nj.gov': 'follow',                // NJ Division of Consumer Affairs, NJ UCC
  'state.nj.us': 'follow',
  'newarknj.gov': 'follow',          // Newark departments
  'iibec.org': 'follow',
  'nachi.org': 'follow',             // InterNACHI
  'internachi.org': 'follow',
  'iii.org': 'follow',               // Insurance Information Institute

  // ── Commercial publishers and manufacturers ───────────────────────────────
  'gaf.com': 'nofollow',
  'thisoldhouse.com': 'nofollow',
  'homeadvisor.com': 'nofollow',
} as const;

/**
 * Extract a lowercase host from an href WITHOUT `new URL`.
 *
 * `new URL` throws on a malformed href. These helpers run inside React Server
 * Component render on all 1,545 routes, where a throw is a 500 rather than a
 * skipped link. A regex that returns null is the safe failure mode.
 */
export function hostOf(href: string): string | null {
  const m = /^https?:\/\/([^/?#]+)/i.exec(href.trim());
  if (!m) return null;
  return m[1].toLowerCase().replace(/:\d+$/, '');
}

/** Registrable-domain suffix match, so `www.nrca.net` resolves to `nrca.net`. */
function allowlistEntry(host: string): 'follow' | 'nofollow' | null {
  for (const domain of Object.keys(CITATION_HOSTS)) {
    if (host === domain || host.endsWith(`.${domain}`)) {
      return CITATION_HOSTS[domain];
    }
  }
  return null;
}

/**
 * Classify an href.
 *
 * `internal` — a site-relative path. Rendered exactly as before; this module
 *              changes nothing about internal linking.
 * `follow` / `nofollow` — allowlisted https citation.
 * `reject`   — everything else: http://, unknown host, protocol-relative,
 *              javascript:, mailto:, or a malformed string. Callers render
 *              rejected links as plain text.
 */
export function linkPolicy(href: string): LinkPolicy {
  const h = href.trim();
  if (h.startsWith('/') && !h.startsWith('//')) return 'internal';
  if (h.startsWith('#')) return 'internal';
  if (!/^https:\/\//i.test(h)) return 'reject';

  const host = hostOf(h);
  if (!host) return 'reject';

  return allowlistEntry(host) ?? 'reject';
}

/** `rel` value for a classified external link. Never `target="_blank"`. */
export function relFor(policy: LinkPolicy): string | undefined {
  if (policy === 'follow') return 'noopener';
  if (policy === 'nofollow') return 'nofollow noopener';
  return undefined;
}
