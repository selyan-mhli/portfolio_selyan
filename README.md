# Portfolio Selyan

```bash
npm ci
npm run dev
```

Vérifier la production locale avec `npm run build`. Les polices Bricolage Grotesque,
Inter et JetBrains Mono sont installées via Fontsource et servies par le site : le
build Docker ne dépend pas de Google Fonts.

Le portfolio est hébergé sur le VPS KS1 via Dokploy. Son `Dockerfile` construit
l'application Next.js ; une fusion dans `main` ne déclenche pas, à elle seule, le
redéploiement Dokploy.

Le bouton CV ouvre `/cv`, qui affiche les deux PDF côte à côte sur ordinateur
(empilés sur mobile). Son survol ou le focus clavier propose les accès directs
Corporate et Research. Les CV sont accessibles directement en PDF via `/cv/corporate` et `/cv/research`
(réécritures internes Next.js, sans changer l'URL affichée). L'ancien `/cv.pdf`
reste accessible et sert toujours le CV Corporate existant.

Le PDF Research est `public/cv/research.pdf`, copié sans modification depuis
`cv_selyan_research_sept2027_v2.pdf` (version du 17 octobre 2026, stage de six mois
à partir de septembre 2027).

Les aperçus JPEG de `/cv` sont générés depuis les PDF ; ils évitent de dépendre
du lecteur PDF intégré du navigateur. Après un remplacement de PDF, les régénérer :

```bash
pdftoppm -scale-to 1800 -jpeg -jpegopt quality=88 public/cv.pdf public/cv/corporate
pdftoppm -scale-to 1800 -jpeg -jpegopt quality=88 public/cv/research.pdf public/cv/research
```
