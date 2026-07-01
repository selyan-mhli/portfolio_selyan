import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Selyan Mouhali — Portfolio",
    short_name: "Selyan Mouhali",
    description:
      "Founder de Privasee (DLP pour l'IA), étudiant ingénieur à l'UTT. Finaliste MégaWatt'UTT ×EDF, cité dans Le Parisien.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0b",
    theme_color: "#0a0a0b",
    lang: "fr",
    categories: ["portfolio", "technology"],
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
