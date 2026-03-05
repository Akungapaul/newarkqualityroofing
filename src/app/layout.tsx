import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${cormorantGaramond.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
