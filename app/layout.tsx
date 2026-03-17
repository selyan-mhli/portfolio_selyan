import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selyanmouhali.fr"),
  title: "Selyan Mouhali — Étudiant Ingénieur Développeur | UTT Troyes",
  description:
    "Portfolio de Selyan Mouhali — Étudiant ingénieur à l'UTT (Troyes). Développement web (React, Next.js, TypeScript), IA & Machine Learning, cybersécurité. En recherche de stage ingénieur et summer programme.",
  keywords: [
    "Selyan Mouhali",
    "portfolio",
    "étudiant ingénieur",
    "développeur web",
    "UTT",
    "Université de Technologie de Troyes",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "intelligence artificielle",
    "machine learning",
    "stage ingénieur",
    "développeur fullstack",
    "cybersécurité",
    "Troyes",
    "Avignon"
  ],
  alternates: {
    canonical: "https://selyanmouhali.fr",
    languages: {
      "fr": "https://selyanmouhali.fr",
      "en": "https://selyanmouhali.fr"
    }
  },
  openGraph: {
    title: "Selyan Mouhali — Étudiant Ingénieur & Développeur",
    description:
      "Étudiant ingénieur à l'UTT — Développement web, IA & Machine Learning. React, Next.js, TypeScript, Python. En recherche de stage et summer programme.",
    url: "https://selyanmouhali.fr",
    siteName: "Selyan Mouhali — Portfolio",
    locale: "fr_FR",
    alternateLocale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Selyan Mouhali — Étudiant Ingénieur & Développeur",
    description:
      "Portfolio — Développement web, IA, Machine Learning. Étudiant ingénieur à l'UTT Troyes."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  other: {
    "theme-color": "#09090f"
  }
};

export default function RootLayout({
  children
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
              givenName: "Selyan",
              familyName: "Mouhali",
              url: "https://selyanmouhali.fr",
              jobTitle: "Étudiant Ingénieur",
              description:
                "Étudiant ingénieur à l'Université de Technologie de Troyes, spécialisé en développement web, intelligence artificielle et machine learning.",
              knowsAbout: [
                "Développement web",
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "Intelligence artificielle",
                "Machine Learning",
                "TensorFlow",
                "LangChain",
                "Java",
                "PostgreSQL",
                "Docker",
                "Git",
                "Firebase",
                "Supabase",
                "Computer Vision",
                "LLM",
                "RAG"
              ],
              knowsLanguage: [
                { "@type": "Language", name: "French", alternateName: "fr" },
                { "@type": "Language", name: "English", alternateName: "en" },
                { "@type": "Language", name: "Spanish", alternateName: "es" }
              ],
              alumniOf: [
                {
                  "@type": "EducationalOrganization",
                  name: "Université de Technologie de Troyes",
                  alternateName: "UTT",
                  url: "https://www.utt.fr"
                },
                {
                  "@type": "HighSchool",
                  name: "Lycée Marie Pila",
                  address: { "@type": "PostalAddress", addressLocality: "Avignon", addressCountry: "FR" }
                }
              ],
              affiliation: {
                "@type": "EducationalOrganization",
                name: "Université de Technologie de Troyes",
                alternateName: "UTT"
              },
              hasCredential: [
                { "@type": "EducationalOccupationalCredential", name: "Linguaskill Cambridge — C1+" },
                { "@type": "EducationalOccupationalCredential", name: "SIELE — Espagnol B1" },
                { "@type": "EducationalOccupationalCredential", name: "LVMH Inside Certificate" },
                { "@type": "EducationalOccupationalCredential", name: "PSE1 — Premiers Secours en Équipe" },
                { "@type": "EducationalOccupationalCredential", name: "Prévention des risques professionnels — INRS" }
              ],
              sameAs: [
                "https://github.com/selyan-mhli",
                "https://www.linkedin.com/in/selyanmouhali/"
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Troyes",
                addressCountry: "FR"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Portfolio de Selyan Mouhali",
              url: "https://selyanmouhali.fr",
              description:
                "Portfolio de Selyan Mouhali — Étudiant ingénieur à l'UTT. Projets web, compétences tech, IA et recherche de stage.",
              author: {
                "@type": "Person",
                name: "Selyan Mouhali",
                url: "https://selyanmouhali.fr"
              }
            })
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
