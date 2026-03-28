import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Engage | Cinematic Engagement Videography",
    template: "%s | Engage",
  },
  description:
    "Cinematic engagement films crafted with heart. We capture your love story as it unfolds — raw, real, and beautifully memorable. Based in Toronto.",
  keywords: [
    "engagement videographer",
    "engagement film",
    "wedding videography",
    "Toronto videographer",
    "cinematic wedding film",
    "engagement video",
    "Ontario wedding videographer",
  ],
  authors: [{ name: "Engage Films" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Engage",
    title: "Engage | Cinematic Engagement Videography",
    description:
      "Cinematic engagement films crafted with heart. Raw, real, and beautifully memorable.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Engage — Cinematic Engagement Videography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engage | Cinematic Engagement Videography",
    description:
      "Cinematic engagement films crafted with heart. Raw, real, and beautifully memorable.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Engage",
    description:
      "Cinematic engagement films crafted with heart. Based in Toronto, Ontario.",
    image:
      "https://images.unsplash.com/photo-1529636798458-92182e662485?w=1200&q=80",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    priceRange: "$$",
    openingHours: "Mo-Su 09:00-18:00",
    sameAs: [
      "https://instagram.com/engagefilms",
      "https://youtube.com/@engagefilms",
    ],
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
