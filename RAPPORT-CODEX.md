# Rapport Codex — build du portfolio

## Fait

- Suppression de `next/font/google` dans `app/layout.tsx`.
- Ajout des trois polices variables via Fontsource, empaquetées avec le site.
- Conservation des familles Bricolage Grotesque, Inter et JetBrains Mono dans les tokens CSS.
- Correction du README : le portfolio tourne sur Dokploy/KS1, pas sur Vercel.

## Preuves

- Branche de départ : `origin/main` à `b7e7461` ; branche de travail : `codex/portfolio-local-fonts`.
- `npm run build` : code 0, 10 pages statiques générées.
- `docker build --tag portfolio-selyan-kd3jjl:fonts-4a980c7 /tmp/portfolio-fonts-deploy-20261010` sur KS1 : code 0 ; build Next.js réussi.
- Image : `public/cv.pdf` a pour SHA-256 `0fcb3cc55f2a88ce7804091e8a1ea78505900b9b856426c8e0efbd213c306200` ; les trois WOFF2 latins sont présents.
- Déploiement du seul service `portfolio-selyan-kd3jjl` : état Swarm `completed`, tâche `Running`.
- `https://selyanmouhali.fr/cv.pdf` : même SHA-256 ; CSS public avec les trois familles locales, sans URL Google Fonts ; WOFF2 public : HTTP 200.

## Reste à faire

- Fusionner la PR de cette branche dans `main` pour conserver la correction dans le dépôt principal. Le service KS1 utilise déjà l'image `portfolio-selyan-kd3jjl:fonts-4a980c7`.
- Le checkout Dokploy local sur KS1 reste à l'ancien commit ; le prochain déploiement Dokploy doit récupérer `main` après fusion.
