import { z } from 'zod';
import { CorePageSchema } from '@/lib/schemas';
import type { CorePage } from '@/lib/types';

// ─── Raw Core Page Data ──────────────────────────────────────────────────────

const rawCorePages: CorePage[] = [
  {
    id: 'about',
    name: 'About Us',
    slug: 'about',
    metaTitle: 'About Newark Quality Roofing | NJ',
    metaDescription: 'Learn about Newark Quality Roofing. Licensed, insured Essex County roofers with decades of experience serving Newark and beyond.',
  },
  {
    id: 'contact',
    name: 'Contact Us',
    slug: 'contact',
    metaTitle: 'Contact Newark Quality Roofing | NJ',
    metaDescription: 'Contact Newark Quality Roofing for a free estimate. Call, email, or visit our Newark NJ office for all your roofing needs.',
  },
  {
    id: 'services',
    name: 'Our Services',
    slug: 'services',
    metaTitle: 'Roofing Services | Newark Quality Roofing',
    metaDescription: 'Complete roofing services in Newark and Essex County NJ. Residential, commercial, repair, replacement, and specialty roofing.',
  },
  {
    id: 'locations',
    name: 'Service Areas',
    slug: 'locations',
    metaTitle: 'Service Areas | Newark Quality Roofing NJ',
    metaDescription: 'Newark Quality Roofing serves all 21 Essex County towns. Find roofing services near you in Newark, Montclair, and beyond.',
  },
  {
    id: 'html-sitemap',
    name: 'Sitemap',
    slug: 'sitemap',
    metaTitle: 'Sitemap | Newark Quality Roofing',
    metaDescription: 'Browse all pages on Newark Quality Roofing. Find roofing services, locations, comparisons, and resources for Essex County NJ.',
  },
  {
    id: 'thank-you',
    name: 'Thank You',
    slug: 'thank-you',
    metaTitle: 'Thank You | Newark Quality Roofing',
    metaDescription: 'Thank you for contacting Newark Quality Roofing. We will respond to your inquiry within one business day.',
  },
  {
    id: 'privacy-policy',
    name: 'Privacy Policy',
    slug: 'privacy-policy',
    metaTitle: 'Privacy Policy | Newark Quality Roofing',
    metaDescription: 'Privacy policy for Newark Quality Roofing. How we collect, use, and protect your personal information.',
  },
  {
    id: 'terms-of-service',
    name: 'Terms of Service',
    slug: 'terms-of-service',
    metaTitle: 'Terms of Service | Newark Quality Roofing',
    metaDescription: 'Terms of service for Newark Quality Roofing. Service agreements, warranties, and policies for roofing projects in Essex County NJ.',
  },
  {
    id: 'resources',
    name: 'Roofing Resources',
    slug: 'resources',
    metaTitle: 'Roofing Resources & Guides | Newark Quality Roofing',
    metaDescription: 'Expert roofing guides, cost breakdowns, and decision-making resources for Essex County NJ homeowners and businesses.',
  },
];

// ─── Runtime Validation ──────────────────────────────────────────────────────

export const corePages: CorePage[] = z.array(CorePageSchema).parse(rawCorePages);
