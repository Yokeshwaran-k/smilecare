import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://smilecare-dental.example.com"),
  title: "SmileCare Dental Studio | Modern Dental Care in Chennai",
  description:
    "SmileCare Dental Studio provides modern, comfortable and comprehensive dental care including cosmetic dentistry, implants, orthodontics, whitening and general dentistry.",
  keywords: [
    "dentist Chennai",
    "dental clinic Anna Nagar",
    "cosmetic dentistry",
    "teeth whitening",
    "dental implants",
    "orthodontics",
    "pediatric dentist",
  ],
  openGraph: {
    title: "SmileCare Dental Studio | Modern Dental Care in Chennai",
    description:
      "Modern dentistry designed around your comfort, your health, and the smile you've always wanted. Book your appointment with SmileCare Dental Studio.",
    url: "https://smilecare-dental.example.com",
    siteName: "SmileCare Dental Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "SmileCare Dental Studio clinic interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare Dental Studio | Modern Dental Care in Chennai",
    description:
      "Modern dentistry designed around your comfort, your health, and the smile you've always wanted.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon-smilecare.png" sizes="any" />
      </head>
      <body className="font-body">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
