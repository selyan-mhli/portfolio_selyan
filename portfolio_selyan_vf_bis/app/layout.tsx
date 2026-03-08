import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selyanmouhali.fr"),
  title: {
    default: "Selyan Mouhali | Portfolio ingénierie web",
    template: "%s | Selyan Mouhali",
  },
  description:
    "Étudiant ingénieur UTT. Portfolio orienté recrutement: projets détaillés, résultats, stack technique et contact direct.",
  alternates: {
    canonical: "https://selyanmouhali.fr",
  },
  openGraph: {
    title: "Selyan Mouhali | Portfolio ingénierie web",
    description:
      "Portfolio orienté recrutement: projets détaillés, performances web, accessibilité et contact direct.",
    url: "https://selyanmouhali.fr",
    siteName: "Selyan Mouhali",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selyan Mouhali | Portfolio ingénierie web",
    description:
      "Projets détaillés et contact direct pour stage ingénieur (disponible septembre 2027).",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#09090f",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090f" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Selyan Mouhali",
              url: "https://selyanmouhali.fr",
              jobTitle: "Étudiant ingénieur - Développement web",
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Technology of Troyes",
              },
              knowsAbout: [
                "Next.js",
                "TypeScript",
                "Web Performance",
                "UX Accessibility",
              ],
              sameAs: [
                "https://github.com/selyan-mhli",
                "https://www.linkedin.com/in/selyanmouhali/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} bg-obsidian text-sand antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
