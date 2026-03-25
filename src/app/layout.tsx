import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant, Cormorant_Garamond } from "next/font/google";
import { getServiceMenuGroups, getCityMenuItems, getComparisonMenuGroups } from "@/data/nav-data";
import { siteConfig } from "@/data/site-config";
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
  metadataBase: new URL('https://www.newarkqualityroofing.com'),
  title: "Newark Quality Roofing | Expert Roofing Services in Essex County, NJ",
  description:
    "Professional roofing contractor serving Essex County and Northern New Jersey. Expert roof repair, replacement, and installation with free estimates and licensed, insured service.",
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
  openGraph: {
    title: 'Newark Quality Roofing | Expert Roofing Services in Essex County, NJ',
    description: 'Professional roofing contractor serving Essex County and Northern New Jersey. Expert roof repair, replacement, and installation with free estimates.',
    url: 'https://www.newarkqualityroofing.com',
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
