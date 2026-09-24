import { z } from 'zod';
import { CorePageSchema } from '@/lib/schemas';
import type { CorePage } from '@/lib/types';

// ─── Raw Core Page Data ──────────────────────────────────────────────────────

const rawCorePages: CorePage[] = [
  {
    id: 'about',
    name: 'About Us',
    slug: 'about',
    metaTitle: 'About Newark Quality Roofing',
    metaDescription: 'Learn about Newark Quality Roofing. Licensed, insured Essex County roofers with decades of experience serving Newark and beyond.',
  },
  {
    id: 'contact',
    name: 'Contact Us',
    slug: 'contact',
    metaTitle: 'Contact Newark Quality Roofing',
    metaDescription: 'Contact Newark Quality Roofing for a free estimate. Call, email, or visit our Newark NJ office for all your roofing needs.',
  },
  {
    // D-07 hub migration: canonical hub now lives at /roofing-services; old
    // /services 301s here (next.config.ts). Page id kept so CoreTemplate keeps
    // rendering ServicesHubPage; sitewide internal-link repointing is Phase 15.
    id: 'services',
    name: 'Our Services',
    slug: 'roofing-services',
    metaTitle: 'Roofing Services Newark, NJ',
    metaDescription: 'Complete roofing services in Newark and Essex County NJ. Residential, commercial, repair, replacement, and specialty roofing.',
  },
  {
    // D-07 hub migration: canonical hub now lives at /service-areas; old
    // /locations 301s here (next.config.ts). Page id kept so CoreTemplate keeps
    // rendering LocationsHubPage; sitewide internal-link repointing is Phase 15.
    id: 'locations',
    name: 'Service Areas',
    slug: 'service-areas',
    metaTitle: 'Roofing Service Areas Essex County, NJ',
    metaDescription: 'Newark Quality Roofing serves all 21 Essex County towns. Find roofing services near you in Newark, Montclair, and beyond.',
  },
  {
    id: 'html-sitemap',
    name: 'Sitemap',
    slug: 'sitemap',
    metaTitle: 'Sitemap',
    metaDescription: 'Browse all pages on Newark Quality Roofing. Find roofing services, locations, comparisons, and resources for Essex County NJ.',
  },
  {
    id: 'thank-you',
    name: 'Thank You',
    slug: 'thank-you',
    metaTitle: 'Thank You for Reaching Out!',
    metaDescription: 'Thank you for contacting Newark Quality Roofing. We will respond to your inquiry within one business day.',
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    slug: 'privacy-policy',
    metaTitle: 'Privacy Policy',
    metaDescription: 'Privacy policy for Newark Quality Roofing. How we collect, use, and protect your personal information.',
  },
  {
    id: 'terms-of-service',
    name: 'Terms of Service',
    slug: 'terms-of-service',
    metaTitle: 'Terms of Service',
    metaDescription: 'Terms of service for Newark Quality Roofing. Service agreements, warranties, and policies for roofing projects in Essex County NJ.',
  },
  // D-07 hub migration: the former /resources core page is RETIRED. /resources now
  // 301s to /roofing-knowledge-base (the KB catch-all hub built in Plan 05 — NOT a
  // renamed core page). The entry is removed so /resources no longer serves a core
  // page; the CoreTemplate 'resources' case + ResourcesPage become dead code (Phase 16
  // dead-component cleanup). next.config.ts owns the 301.
];

// ─── Runtime Validation ──────────────────────────────────────────────────────

export const corePages: CorePage[] = z.array(CorePageSchema).parse(rawCorePages);
