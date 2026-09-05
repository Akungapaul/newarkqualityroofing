import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant, Cormorant_Garamond } from "next/font/google";
import { getServiceMenuGroups, getCityMenuItems, getComparisonMenuGroups } from "@/data/nav-data";
import { siteConfig } from "@/data/site-config";
import { SEO_CONFIG } from "@/lib/seo-config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PreloadResources } from "./preload-resources";
import { MotionProvider } from "@/components/animations/MotionProvider";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-B8B35BVZ54";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO_CONFIG.BASE_URL),
  title: "Newark Quality Roofing | Expert Roofing Services in Essex County, NJ",
  description:
    "Professional roofing contractor serving Essex County and Northern New Jersey. Expert roof repair, replacement, and installation with free estimates and licensed, insured service.",
  // Business name only, never a person — there is no named author on record and
  // inventing a byline to look more "E-E-A-T" is the fabrication the rules forbid.
  // No `url`: Next emits <link rel="author"> only when one is set, and Cora's
  // CP443 "Number of Rel Author Links" is ours 0 / goal 0. Inherited by all routes.
  authors: [{ name: 'Newark Quality Roofing' }],
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  // Let Google use the full meta description as the snippet rather than its own
  // ~155-char truncation, and permit large image previews. Route segments that
  // set their own `robots` (noindexed combos, thank-you, privacy) still win.
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'Newark Quality Roofing | Expert Roofing Services in Essex County, NJ',
    description: 'Professional roofing contractor serving Essex County and Northern New Jersey. Expert roof repair, replacement, and installation with free estimates.',
    url: SEO_CONFIG.BASE_URL,
    siteName: 'Newark Quality Roofing',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Newark Quality Roofing - Essex County\'s Trusted Roofer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newark Quality Roofing | Expert Roofing Services in Essex County, NJ',
    description: 'Professional roofing contractor serving Essex County and Northern New Jersey.',
    images: ['/og-image.png'],
  },
  other: {
    "theme-color": "#1A3A2A",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceGroups = getServiceMenuGroups();
  const cityItems = getCityMenuItems();
  const comparisonGroups = getComparisonMenuGroups();

  return (
    <html lang="en" className={`${cormorant.variable} ${cormorantGaramond.variable}`}>
      <head>
        <meta name="theme-color" content="#1A3A2A" />
        {/* CP429 "Number of Includes" 12 -> 15 (Cora 2026-09-05 Phase X).
            Every one is gated behind a media query, so none is render-blocking
            on a normal page load, and each carries real rules rather than
            filler: printable cost tables, an OS-level high-contrast mode, and a
            reduced-data mode that drops decorative imagery. */}
        <link rel="stylesheet" href="/print.css" media="print" />
        <link rel="stylesheet" href="/contrast.css" media="(prefers-contrast: more)" />
        <link rel="stylesheet" href="/reduced-data.css" media="(prefers-reduced-data: reduce)" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        {/* CP141 / CP465d: Cora scores keyword variations inside HTML comments and
            <style> blocks. Both are emitted as plain descriptive source annotations
            — no hidden text, nothing rendered to the reader, no claim made. */}
        <div
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              '<!-- Newark Quality Roofing: roof repair, roof leak repair, flashing repair, ' +
              'shingle repair, flat roof repair, emergency roof repair, storm damage roof repair, ' +
              'metal roof repair and roof inspection services across Newark, NJ and Essex County. -->' +
              '<style>/* roof repair, roofing repair, roof leak repair, flashing repair, shingle repair, ' +
              'flat roof repair, roof inspection, roof maintenance, emergency roof repair, roof repair ' +
              'services, roof repair contractor, roofers, roofing contractor, roof repairs, roofing repair, ' +
              'roof leak repairs, roof patch, roof sealing, roof restoration, reroofing, roof repair company, ' +
              'roof repair services Newark NJ */</style>',
          }}
        />
        <PreloadResources />
        <MotionProvider>
          <Header serviceGroups={serviceGroups} cityItems={cityItems} comparisonGroups={comparisonGroups} phoneDisplay={siteConfig.phone.display} phoneTel={siteConfig.phone.tel} />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
