
import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { site } from "@/lib/site";

const display = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--archivo",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: `${site.name} | Engineering and construction in Nigeria`,
    template: `%s | ${site.name}`,
  },

  description: site.description,

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [
      {
        url: "/images/hero-construction.jpg",
        width: 1920,
        height: 1200,
        alt: "Tower crane over a building under construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0E4A36",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen pb-[calc(56px+env(safe-area-inset-bottom))] font-sans antialiased lg:pb-0">
        <a
          href="#main"
          className="sr-only z-[60] rounded bg-signal px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>

        <Header />

        <main id="main">{children}</main>

        <Footer />

        <MobileActionBar />
      </body>
    </html>
  );
}
