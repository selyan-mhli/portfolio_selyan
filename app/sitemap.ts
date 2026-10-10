import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

// Date de la dernière modification réelle du contenu : à mettre à jour à la main.
// Ne pas utiliser new Date() : chaque build annoncerait un faux changement.
const LAST_CONTENT_UPDATE = "2026-10-11";

// Le site tient sur une seule page. Les ancres (#projets…) n'ont rien à faire
// ici : Google ignore les fragments d'URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
