# Section Services + Cal.com — Design

Date : 2026-07-20 · Statut : validé (placement, popup, pas de tarifs choisis par Selyan).
Changement en cours de route : Calendly remplacé par Cal.com (compte créé par Selyan).

## Objectif

Ajouter une offre de services freelance au portfolio (selyanmouhali.fr) avec prise de
RDV Cal.com 30 min, sans diluer le message « recherche de stage » de la section Contact.

## Décisions

- **Placement** : nouvelle section `Services.tsx` entre Passions (08) et Contact.
  Services devient `09 / Services`, Contact passe à `10 / Contact`.
- **Cal.com** : popup au clic (embed officiel, thème sombre, brandColor ambre).
  Le script embed.js n'est chargé qu'au premier clic (aucun script tiers au
  chargement de la page). Chemin stocké dans `lib/data.ts` (`contact.calLink`).
- **Tarifs** : aucun. Le RDV de 30 min sert à qualifier le besoin.

## Contenu — 5 cartes services

1. Création de sites web — vitrine, portfolio, e-commerce.
2. Introduction à l'IA en entreprise — sensibilisation / formation des équipes.
3. Conseil en IA — cas d'usage, choix d'outils, automatisations.
4. Marketing génératif — contenus, visuels, campagnes avec l'IA.
5. SEO / GEO — être trouvé sur Google et cité par ChatGPT/Perplexity.

CTA principal sous la grille : « Réserver 30 min gratuites » (bouton accent) + rappel mail.

## Composants

- `lib/data.ts` : tableau `services` (title, desc, icon), `contact.calLink`,
  extension JSON-LD (`makesOffer` sur Person + entrées `Service`, breadcrumb).
- `components/sections/Services.tsx` : section client, grille de cartes
  (style existant `border-white/10 bg-white/[0.03]`, icônes lucide), bouton CTA
  qui injecte le snippet embed Cal.com à la volée puis ouvre `Cal("modal", …)`.
- `app/page.tsx` : insertion `<Services />` entre `<Passions />` et `<Contact />`.
- `components/Nav.tsx` : lien « Services » dans le menu.
- `components/sections/Contact.tsx` : renumérotation `10 / Contact`.
- `next.config.mjs` : headers de sécurité de base (X-Content-Type-Options,
  Referrer-Policy, Permissions-Policy, X-Frame-Options SAMEORIGIN). Pas de CSP
  stricte pour l'instant (l'embed Cal.com nécessiterait une allowlist dédiée).

## SEO / GEO

Textes des cartes rédigés avec les mots-clés naturels (création de site internet,
conseil IA entreprise, formation IA, SEO, GEO). JSON-LD : `makesOffer` → `Offer`
→ `Service` pour chaque prestation.

## Hors scope

- Configuration du compte Cal.com (événement 30 min + disponibilités, côté Selyan).
- Déploiement : `vercel --prod` seulement après validation sur la branche.
- Page /services dédiée (éventuelle évolution future).
