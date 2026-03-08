# Portfolio Landing (Next.js)

Landing page portfolio immersive construite avec Next.js (App Router), Tailwind, Framer Motion et GSAP.

## Prerequis

- Node.js `>= 20.11.1`
- npm

## Lancer en local

```bash
npm install
npm run dev
```

## Verification avant deploy

```bash
npm run lint
npm run build
```

## Push sur GitHub

```bash
git init
git add .
git commit -m "feat: portfolio landing ready for vercel"
git branch -M main
git remote add origin https://github.com/<ton-user>/<ton-repo>.git
git push -u origin main
```

## Deploy sur Vercel (Dashboard)

1. Aller sur https://vercel.com/new
2. Importer le repo GitHub
3. Framework detecte automatiquement: `Next.js`
4. Build Command: `next build` (auto)
5. Output Directory: `.next` (auto)
6. Cliquer `Deploy`

## Deploy via Vercel CLI (optionnel)

```bash
npm i -g vercel
vercel login
vercel
vercel --prod
```

## Notes

- Le dossier source d'extraction `extracted_assets_earth_tones` est ignore par Git.
- Le dossier `.vercel` est ignore par Git.
