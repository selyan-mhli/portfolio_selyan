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
