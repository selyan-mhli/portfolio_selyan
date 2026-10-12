import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

// GEO — on accueille explicitement les crawlers IA, recherche ET entrainement :
// le portfolio est un CV public, etre connu des modeles est l'objectif.
// Doit rester aligne avec Cloudflare (AI Crawl Control, zone selyanmouhali.fr).
const AI_BOTS = [
  // Recherche / citation en direct
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  // Entrainement des modeles
  "GPTBot",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "cohere-ai",
  "Meta-ExternalAgent",
];

// Crawl agressif et respect douteux des regles : bloque ici et dans Cloudflare.
const BLOCKED_BOTS = ["Bytespider"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_BOTS.map((bot) => ({ userAgent: bot, allow: "/" })),
      ...BLOCKED_BOTS.map((bot) => ({ userAgent: bot, disallow: "/" })),
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}
