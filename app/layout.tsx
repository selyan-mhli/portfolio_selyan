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
  metadataBase: new URL("https://selyanmouhali.com"),
  title: "Selyan Mouhali — Portfolio",
  description:
    "Portfolio of Selyan Mouhali — Engineering Student at the University of Technology of Troyes. Web projects, tech skills & more.",
  alternates: {
    canonical: "https://selyanmouhali.com"
  },
  openGraph: {
    title: "Selyan Mouhali — Portfolio",
    description:
      "Portfolio of Selyan Mouhali — Engineering Student at the University of Technology of Troyes. Web projects, tech skills & more.",
    url: "https://selyanmouhali.com",
    siteName: "Selyan Mouhali",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Selyan Mouhali — Portfolio",
    description:
      "Portfolio of Selyan Mouhali — Engineering Student at the University of Technology of Troyes."
  },
  robots: {
    index: true,
    follow: true
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090f" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Selyan Mouhali",
              url: "https://selyanmouhali.com",
              jobTitle: "Engineering Student",
              affiliation: {
                "@type": "EducationalOrganization",
                name: "University of Technology of Troyes"
              },
              sameAs: [
                "https://github.com/selyan-mhli",
                "https://www.linkedin.com/in/selyanmouhali/"
              ]
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
