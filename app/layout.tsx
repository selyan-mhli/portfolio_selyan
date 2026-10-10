import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque/wght.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { jsonLd } from "@/lib/data";

const SITE = "https://selyanmouhali.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Selyan Mouhali — Founder de Privasee · Étudiant ingénieur UTT",
    template: "%s · Selyan Mouhali",
  },
  description:
    "Selyan Mouhali — Founder de Privasee (DLP pour l'IA), étudiant ingénieur à l'UTT. Finaliste & Prix du public du MégaWatt'UTT Challenge (×EDF) et finaliste Natran. Cité dans Le Parisien.",
  keywords: [
    "Selyan Mouhali",
    "Privasee",
    "DLP pour l'IA",
    "Data Loss Prevention IA",
    "Founder Privasee",
    "étudiant ingénieur UTT",
    "Université de Technologie de Troyes",
    "MégaWatt UTT Challenge",
    "EDF Nogent-sur-Seine",
    "Natran",
    "GRTgaz",
    "développeur web",
    "Next.js",
    "TypeScript",
    "intelligence artificielle",
    "Troyes",
  ],
  authors: [{ name: "Selyan Mouhali", url: SITE }],
  creator: "Selyan Mouhali",
  alternates: { canonical: SITE },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE,
    siteName: "Selyan Mouhali — Portfolio",
    title: "Selyan Mouhali — Founder de Privasee · Étudiant ingénieur UTT",
    description:
      "Founder de Privasee (DLP pour l'IA). Finaliste & Prix du public du MégaWatt'UTT Challenge (×EDF), finaliste Natran. Cité dans Le Parisien.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selyan Mouhali — Founder de Privasee · Étudiant ingénieur UTT",
    description:
      "Founder de Privasee (DLP pour l'IA). Finaliste MégaWatt'UTT (×EDF) & Natran. Cité dans Le Parisien.",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <meta name="theme-color" content="#0A0A0B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <LenisProvider>
          {children}
          <StickyMobileCTA />
        </LenisProvider>
      </body>
    </html>
  );
}
