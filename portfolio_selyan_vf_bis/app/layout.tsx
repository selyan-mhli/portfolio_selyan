import type { Metadata } from "next";
import "./globals.css";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function () {
  function collectPayload(node) {
    var payload = {};
    var keys = ["cta", "placement", "slug", "source", "href", "channel"];
    for (var i = 0; i < keys.length; i += 1) {
      var key = keys[i];
      var attr = "track" + key.charAt(0).toUpperCase() + key.slice(1);
      if (node.dataset && node.dataset[attr]) {
        payload[key] = node.dataset[attr];
      }
    }
    return payload;
  }

  function send(eventName, payload) {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent("portfolio:track", { detail: Object.assign({ eventName: eventName }, payload) }));
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }
  }

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!target || !(target instanceof Element)) return;
    var tracked = target.closest("[data-track-event]");
    if (!tracked) return;
    var eventName = tracked.getAttribute("data-track-event");
    if (!eventName) return;
    send(eventName, collectPayload(tracked));
  });

  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !(form instanceof HTMLFormElement)) return;
    var eventName = form.getAttribute("data-track-event");
    if (!eventName) return;
    send(eventName, { source: "contact_form" });
  });
})();`,
          }}
        />
      </head>
      <body className="bg-obsidian text-sand antialiased">
        {children}
      </body>
    </html>
  );
}
