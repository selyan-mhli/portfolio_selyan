import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

// Date de la dernière modification réelle du contenu : à mettre à jour à la main.
// Ne pas utiliser new Date() : chaque build annoncerait un faux changement.
const LAST_CONTENT_UPDATE = "2026-10-11";

// Les ancres de la page principale sont exclues ; les CV ont leurs propres URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE}/cv`,
      lastModified: "2026-11-03",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE}/cv/corporate`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE}/cv/research`,
      lastModified: "2026-11-03",
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
