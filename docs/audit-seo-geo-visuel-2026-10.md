# Audit portfolio — robots, SEO, GEO et rendu visuel

Date : 10 octobre 2026 · Cible : https://selyanmouhali.fr (production, branche `main`)

## Périmètre et conditions

- Site audité : la **production**. Les changements de la branche `codex/portfolio-press-previews-audit` (article Perspectives Numériques, aperçus Privasee/Aksel AI, retrait de la vidéo) ne sont pas encore déployés.
- La branche `design/refonte-portfolio` n'est pas auditée ici. Elle retire déjà les fausses barres de navigateur et ajoute des gardes de mouvement ; certains points visuels ci-dessous peuvent y être résolus.
- Outils : `curl` (HTML brut, en-têtes, user-agents simulés), Chromium headless (Playwright) en 375 × 812 et 1440 × 900, API Performance du navigateur, lecture du code source.
- Limites :
  - les robots ont été testés avec leur **user-agent simulé**, pas depuis leurs IP réelles ;
  - pas de données Search Console, ni CrUX, ni Lighthouse : les chiffres de performance viennent d'un seul chargement en bureau, sur une connexion rapide ;
  - la recherche de mentions a utilisé un moteur web générique, pas Google France ;
  - la page Le Parisien a refusé la requête (réponse de 591 octets) : citation non revérifiée.

## Synthèse — les 6 priorités

| # | Constat | Gravité | Effort |
|---|---|---|---|
| 1 | Avec « réduire les animations » activé, l'accroche et la phrase de présentation du hero restent **invisibles** | Critique (a11y) | S |
| 2 | Cloudflare bloque 5 robots IA d'entraînement que le `robots.txt` déclare autorisés | Majeur (décision à prendre) | XS |
| 3 | `llms.txt` périmé : Cal.com, aucune mention de l'agence Aksel AI, presse incomplète | Majeur | XS |
| 4 | Parcours entreprise faible : Services en 9ᵉ section sur 10, offres décrites en double avec akselai.fr | Majeur | M |
| 5 | Sitemap faux : URLs à fragment `#`, `#projets` inexistant, `lastmod` = date du build | Majeur | XS |
| 6 | Hero mobile : la photo occupe tout le premier écran, le nom commence à 504 px et la proposition de valeur passe sous la ligne de flottaison | Majeur | S |

## 1. Robots et « scraping » IA

Mesures (HTTP, user-agent simulé, 10/10/2026) :

| Robot | Rôle | Réponse |
|---|---|---|
| Googlebot, Bingbot, Applebot | Index de recherche | 200 |
| OAI-SearchBot, ChatGPT-User | ChatGPT recherche / navigation | 200 |
| Claude-SearchBot, Claude-User | Claude recherche / navigation | 200 |
| PerplexityBot | Perplexity | 200 |
| Google-Extended, meta-externalagent | Signaux IA Google / Meta | 200 |
| **GPTBot, ClaudeBot, CCBot, Amazonbot, Bytespider** | **Entraînement de modèles** | **403** (Cloudflare) |

- **Bon point** : le HTML est entièrement rendu côté serveur (1 257 mots lisibles sans JavaScript, 6 blocs JSON-LD dans un `@graph`). Un robot qui n'exécute pas JS voit tout le contenu.
- **Incohérence** : `robots.txt` autorise explicitement GPTBot, ClaudeBot, Bytespider et Amazonbot, mais le blocage Cloudflare des robots d'entraînement les refuse. Les moteurs de réponse peuvent toujours lire et citer le site ; seul l'entraînement est bloqué.
  - Décision à prendre : pour un portfolio dont l'objectif est d'être **connu**, être présent dans les données d'entraînement aide les modèles à « savoir » qui est Selyan Mouhali. Recommandation : autoriser ces robots dans Cloudflare (*AI Crawl Control*) pour ce domaine. À défaut, retirer ces lignes du `robots.txt` pour que la règle déclarée corresponde à la réalité.
- **E-mail invisible pour les robots** : Cloudflare *Email Obfuscation* remplace l'adresse par `/cdn-cgi/l/email-protection#…`. Sans JavaScript, ni robot ni LLM ne lit l'e-mail. Le JSON-LD `Person` n'a pas non plus de champ `email` ni de `contactPoint`. Correctif : ajouter `email` au JSON-LD, ou désactiver l'obfuscation pour ce site (au prix d'un peu plus de spam).
- `robots.txt` contient `Host:`, une directive non standard (Yandex uniquement). Elle est sans effet ; on peut la supprimer.

## 2. SEO technique

| Point | État | Détail |
|---|---|---|
| HTTPS, redirection http → https | OK | 308 |
| `www.selyanmouhali.fr` | À corriger | Répond 200 sans redirection. La balise canonical vers l'apex atténue le doublon ; une 301 vers l'apex est plus propre |
| HSTS | Absent | Ajouter `Strict-Transport-Security` (Cloudflare ou `next.config.mjs`) |
| `x-powered-by: Next.js` | Mineur | `poweredByHeader: false` |
| Title / description / canonical / OG / Twitter | OK | Image OG de 1200 × 630 générée, `og:locale fr_FR` |
| `meta keywords` | Inutile | Ignoré par Google ; sans risque |
| `lang="fr"`, `alt` sur les images | OK | 44 `<img>`, toutes avec `alt` |
| Sitemap | **Faux** | 5 URLs dont 4 avec fragment `#` (Google ignore les fragments) ; `#projets` n'existe pas (l'id est `projects`) ; `lastmod` = `new Date()` à chaque build, donc un faux signal de fraîcheur (`app/sitemap.ts`) |
| Liens sortants | 1 fragile | Le démonstrateur MégaWatt est servi par `…-212-227-88-180.sslip.io` : adresse IP visible, peu professionnelle et fragile. À remplacer par un sous-domaine propre |
| Page unique | Limite | Tout le site tient sur une URL, donc aucune page ne peut se positionner sur « Blaze », « MégaWatt'UTT » ou « Privasee fondateur ». Voir §4 |

Correctif sitemap proposé : une seule entrée `https://selyanmouhali.fr` avec un `lastModified` fixe (date de la dernière modification réelle), puis une entrée par page si des pages projet sont créées.

## 3. Données structurées et llms.txt

Graphe JSON-LD présent : `Person`, `Organization` Privasee, `Organization` Aksel AI, `WebSite`, `ProfilePage`, `BreadcrumbList`, `FAQPage`. Le socle est solide.

À corriger :

- **`llms.txt` (`public/llms.txt`) périmé** :
  - il renvoie 3 fois vers `cal.com/selyan-mouhali/30min`, alors que le site est passé à akselai.fr (commit `dd973f8`) ;
  - il présente les 5 services comme une activité freelance en direct, sans nommer Aksel AI ;
  - il ne mentionne que Le Parisien.

  C'est le fichier que lisent les agents IA : ils donnent donc aujourd'hui une version obsolète.
- `Person.nationality: "Française"` : schema.org attend un `Country` (`{"@type":"Country","name":"France"}`).
- `Person.makesOffer` attribue les 5 services à Selyan lui-même, alors qu'Aksel AI les porte sur akselai.fr. Il vaut mieux déclarer les offres sur `Organization` Aksel AI (`@id https://akselai.fr/#organization`) et laisser `Person` les rattacher via `worksFor`/`founder`. Cela évite deux sources concurrentes pour la même offre.
- Organisations : ajouter les `sameAs` LinkedIn entreprise (`linkedin.com/company/privaseee`, `linkedin.com/company/aksel-ai`) et, pour Privasee, la fiche Chrome Web Store. Privasee devrait réutiliser l'`@id` publié par privasee.fr s'il en existe un, plutôt qu'un `@id` hébergé sur le portfolio.
- Presse : déjà corrigé dans la branche Codex. `subjectOf` liste les deux articles, générés à partir de `lib/data.ts`.

## 4. Contenu, E-E-A-T et parcours « entreprises »

Le portfolio sert deux publics : les recruteurs (stage de septembre 2027) et les entreprises (offre Aksel AI). Aujourd'hui, il sert surtout le premier.

- **Ordre des sections** : startups, projets, presse, stack, parcours, formation, certifications, passions, **services (9ᵉ)**, contact. Une entreprise doit traverser environ 15 écrans sur mobile avant de voir l'offre.
- **Title et description** : « Founder de Privasee · Étudiant ingénieur UTT ». Ni Aksel AI ni l'offre n'y figurent. C'est cohérent si le portfolio reste un **hub d'identité** et qu'akselai.fr porte le référencement commercial ; c'est l'option recommandée.
- **Recommandation de rôle** : le portfolio prouve qui est Selyan (startups, prix, presse, code) ; akselai.fr vend. Concrètement :
  1. remonter un encart court « Pour les entreprises → Aksel AI » juste après les startups ;
  2. réduire la grille Services à ce pont, au lieu de dupliquer les 5 offres ;
  3. aligner JSON-LD et `llms.txt` sur cette répartition.
- **Pages profondes** (effort M) : une page par projet ou concours (`/projets/blaze`, `/projets/megawatt`…) avec contexte, rôle, résultat et preuves. Ce sont les pages que les moteurs de réponse peuvent citer pour une question précise. Elles demandent du contenu réel : ne rien inventer.
- **Expérience démontrée** : les descriptions de projets sont factuelles et vérifiables (lien démo + code). C'est un bon signal E-E-A-T, à conserver.

## 5. Notoriété de l'entité

- Une recherche web sur `"Selyan Mouhali"` (moteur générique, pas Google France) ne renvoie **aucun** résultat pertinent, et une recherche sur Privasee ne relie pas le produit à son fondateur. C'est un indice, pas une mesure de l'index Google : à vérifier dans la Search Console (requêtes sur le nom).
- Maillage entre les trois sites (mesuré) :
  - akselai.fr renvoie vers le portfolio (`sameAs` + liens) : OK ;
  - **privasee.fr cite 6 fois « Selyan » mais ne renvoie pas vers le portfolio**. À ajouter : un lien fondateur et `Organization.founder` vers `https://selyanmouhali.fr/#selyan` ;
  - l'article de Perspectives Numériques cite 13 fois « Selyan » et ne renvoie que vers privasee.fr. On peut demander l'ajout d'un lien vers le portfolio.
- Leviers sans fabrication : README de profil GitHub qui pointe vers le portfolio, rubrique « Site web » de LinkedIn, et une signature identique partout (« Selyan Mouhali — Founder de Privasee ») pour que les modèles relient les mentions à une seule entité.

## 6. Performance (mesure ponctuelle, bureau 1024 px, réseau rapide)

| Indicateur | Valeur | Commentaire |
|---|---|---|
| TTFB | 169 ms | Page statique servie depuis le cache Next |
| LCP | 1 864 ms | Élément : photo du hero `selyan.jpg` (231 Ko, `<img>` brut, sans AVIF/WebP) |
| CLS | 0,019 | Bon |
| Poids transféré | ≈ 2 011 Ko | Dont **1 389 Ko pour `privasee-demo.mp4`** en lecture automatique |
| Hauteur de page | 12 608 px en bureau, 17 574 px en mobile (≈ 21,6 écrans) | Projets = 5,4 écrans en mobile |

- La branche Codex retire la vidéo de la page. D'après cette mesure, cela retire ≈ 1,4 Mo, soit environ 70 % du poids (estimation non remesurée après déploiement). Le fichier `public/privasee-demo.mp4` reste dans le dépôt sans être utilisé ; il peut être supprimé dans un second temps.
- Photo du hero : passer par `next/image` avec `priority` (formats modernes, tailles adaptées). Un gain sur le LCP est probable, mais il reste à mesurer.
- Projets : 4 sites tiers sont chargés en iframe (Blaze, MégaWatt, Natran, Londres). Ils sont en `loading="lazy"`, mais restent coûteux sur mobile. Les captures utilisées pour Privasee et Aksel AI sont une alternative plus légère et plus stable.

## 7. Rendu visuel et accessibilité (grille Hallmark, lecture seule)

Captures headless en 375 et 1440 px, plus vérifications DOM. Pas de `DESIGN.md` sur `main`.

### Critique

- **Contenu conditionné par l'animation** (`components/sections/Hero.tsx:44-55`). Avec `prefers-reduced-motion: reduce`, `.hero-eyebrow` et `.hero-sub` sont encore à `opacity: 0` après 3 s, alors qu'ils sont à 1 sans cette préférence (mesuré deux fois sous Playwright). La timeline GSAP ne vérifie pas la préférence, et la règle CSS globale (`app/globals.css:77`) n'agit pas sur GSAP. La cause exacte du blocage n'est pas encore isolée (`diagnose`). Correctif : `gsap.matchMedia()` qui saute la timeline en mouvement réduit, ou un état final visible par défaut.

### Majeur

- **Hero mobile** : l'avatar fait 320 px, le nom commence à 504 px et la phrase de valeur est coupée par la barre collante Contact/CV. Correctif : avatar plus petit, ou placé après le h1.
- **Barre collante Contact/CV** en mobile : elle recouvre le bas du contenu (tags de projets, fin des paragraphes). Il faut ajouter un `padding-bottom` égal à sa hauteur sur le conteneur de page.
- **Numéros de section partout** (`01 / Mes startups` … `10 / Contact`) : surtitres mono numérotés sur les 10 sections, un tic de gabarit. Les garder sur 1 ou 2 sections au plus, ou les supprimer.
- **Grille Services** : 6 cartes égales avec icônes, le motif « 3 colonnes de features » typique. À remplacer par le pont Aksel AI du §4.
- **Fausses barres de navigateur** (3 points + domaine) sur les aperçus de projets. Hallmark les proscrit, et la branche `design/refonte-portfolio` les retire déjà. Les aperçus Privasee/Aksel AI de la branche Codex reprennent volontairement ce style pour rester cohérents avec Gemma/Blaze, comme demandé : à harmoniser lors de la fusion avec la refonte.

### Mineur

- `h1` = `<span>Selyan</span><span>Mouhali</span>` sans espace : le `textContent` brut donne « SelyanMouhali » pour les extracteurs de texte. Ajouter `{" "}` entre les deux spans.
- Hiérarchie des titres : la section Presse n'a pas de `h2`, et « Le Parisien » (`h3`) apparaît sous « Ce que je construis ». La section Startups n'a pas de `h2` d'intitulé.
- Contraste :
  - `text-white/40` (10 occurrences) donne 3,77:1 sur `#0A0A0B`, sous le seuil de 4,5:1 pour du texte courant ;
  - `text-white/30` donne 2,61:1 ;
  - `text-white/55` et au-delà passent (6,28:1 et plus).
- 80 nœuds de texte de moins de 12 px en mobile (libellés mono).
- Cibles tactiles inférieures à 24 px de haut : « privasee.fr ↗ » et « Retour en haut ↑ » (16 px) dans le pied de page.
- Points solides : pas de défilement horizontal à 375 px, typographie cohérente (Bricolage Grotesque / Inter / JetBrains Mono embarquées localement), accent orange utilisé avec retenue, sections Projets et Contact bien hiérarchisées en bureau.

Compte Hallmark : **1 critique · 5 majeurs · 5 mineurs**.

## Plan d'action proposé

| Ordre | Action | Fichiers / lieu | Preuve attendue |
|---|---|---|---|
| 1 | Garde de mouvement réduit sur le hero | `components/sections/Hero.tsx` | Playwright `reducedMotion: 'reduce'` : opacité 1 sur tous les `.hero-*` |
| 2 | Décider : autoriser les robots d'entraînement dans Cloudflare, ou aligner `robots.txt` | Tableau de bord Cloudflare / `app/robots.ts` | `curl -A GPTBot` → 200, ou ligne retirée |
| 3 | Réécrire `llms.txt` (Aksel AI, presse ×2, sans Cal.com) | `public/llms.txt` | `grep cal.com` vide |
| 4 | Sitemap : une URL, `lastModified` fixe | `app/sitemap.ts` | `/sitemap.xml` sans `#` |
| 5 | 301 www → apex, HSTS, `poweredByHeader: false` | Cloudflare, `next.config.mjs` | `curl -I` |
| 6 | `email` dans le JSON-LD, `nationality` en `Country`, offres déplacées sur Aksel AI | `lib/data.ts` | Validateur schema.org sans avertissement |
| 7 | Hero mobile, padding de la barre collante, espace dans le h1 | `Hero.tsx`, layout | Capture 375 px : nom + phrase visibles au premier écran |
| 8 | Lien fondateur sur privasee.fr vers le portfolio | Dépôt Privasee | Lien présent dans le HTML |
| 9 | Pont « Pour les entreprises → Aksel AI » remonté, grille Services allégée | `Services.tsx`, `app/page.tsx` | Revue visuelle |
| 10 | Pages projet dédiées (contenu réel fourni par Selyan) | `app/projets/[slug]` | Sitemap + indexation dans la Search Console |

Les points 1 à 6 sont rapides et indépendants ; les points 9 et 10 demandent des choix de contenu.

## Suivi

- 11/10/2026 — priorités 1, 3 et 5 corrigées sur la branche `codex/portfolio-press-previews-audit` :
  - **1 (mouvement réduit)** : cause confirmée par expérience. La règle globale `transition-duration: 0.01ms` activait `transition: all` sur chaque élément, et GSAP capturait une opacité en cours de transition (≈ 0) comme valeur finale.
    - Correctifs : `transition: none` dans le bloc `prefers-reduced-motion` de `app/globals.css`, et timeline du hero sautée en mouvement réduit.
    - Vérifié sous Playwright (375 et 1440 px, mouvement réduit et normal) : tous les éléments du hero sont opaques. Après défilement complet, le seul texte encore invisible est le menu fermé et l'indice « Voir le PDF » des certifications, qui n'apparaît qu'au survol (point mineur).
  - **3** : `public/llms.txt` réécrit. Plus de Cal.com ; Aksel AI, les deux articles de presse et le stage de septembre 2027 sont ajoutés.
  - **5** : `app/sitemap.ts` ne contient plus qu'une URL, avec une date de dernière modification fixe.
- 11/10/2026 — passe visuelle (PR #6, fusionnée et déployée le 12/10) :
  - section Services retirée, renvoi vers akselai.fr ;
  - hero mobile en bandeau ;
  - barre Contact/CV masquée dans le hero et dans Contact ;
  - Passions en liste ;
  - contrastes : 0 texte sous 4,5:1 en production ;
  - focus clavier ambre et menu fermé `inert` ;
  - lien « Voir » des certificats toujours visible.
- 12/10/2026 — **priorité 2 (robots IA)** réglée :
  - **Décision** : autoriser les robots d'entraînement (portfolio public), sauf Bytespider.
  - **Dans le dépôt** (PR #7) : `app/robots.ts` aligné ; ajout de CCBot, Claude-SearchBot et Claude-User ; Bytespider en `Disallow` ; directive `Host:` retirée.
  - **Dans Cloudflare** (zone selyanmouhali.fr) :
    - la politique globale « Configure AI bot policies » ne bloque plus (modifiée par Selyan) ;
    - dans AI Crawl Control, seul Bytespider est bloqué ;
    - la politique s'applique aussi au sous-domaine `vh.selyanmouhali.fr`.
  - **Mesure** (user-agents simulés) : GPTBot, ClaudeBot, Claude-User, CCBot, Amazonbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot et Googlebot répondent 200 ; Bytespider répond 403. Le `robots.txt` servi correspond.
- 12/10/2026 — point « lien fondateur sur privasee.fr » abandonné : décision de Selyan, pas de lien de Privasee vers le portfolio.
