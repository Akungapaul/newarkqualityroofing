import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond } from "next/font/google";
import { getServiceMenuGroups, getCityMenuItems } from "@/data/nav-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

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
  title: "Newark Quality Roofing | Expert Roofing Services in Essex County, NJ",
  description:
    "Professional roofing contractor serving Essex County and Northern New Jersey. Expert roof repair, replacement, and installation with free estimates and licensed, insured service.",
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

  return (
    <html lang="en" className={`${cormorant.variable} ${cormorantGaramond.variable}`}>
      <head>
        <meta name="theme-color" content="#1A3A2A" />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header serviceGroups={serviceGroups} cityItems={cityItems} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
