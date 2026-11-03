# Rapport Codex — CV Corporate et Research

Date : 3 novembre 2026. Mandat direct de Selyan, précisé pendant la réalisation.

## Résultat

- Un seul bouton CV sur le portfolio, avec Corporate et Research proposés au survol ou au focus clavier. Échap referme le menu.
- Un clic sur CV ouvre `/cv` : les deux CV côte à côte sur ordinateur, empilés sur mobile. Aperçus générés depuis les PDF ; toutes les pages Research sont présentes.
- `/cv/corporate` et `/cv/research` servent directement chaque PDF complet, sans redirection ni changement d'adresse.
- `/cv.pdf` reste accessible, identique au Corporate existant.
- Les liens et le sitemap incluent les trois adresses.
- Research : copie exacte de `/Users/selyan/Documents/Perso/CV/nouvelles_versions/cv_selyan_research_sept2027_v2.pdf`, version générale du 17 octobre 2026 pour septembre 2027. Aucun contenu du CV réécrit.

## Checkout et isolation

- Dépôt source : `/Users/selyan/dev/portfolio`, branche `main`, HEAD `e464ef8614bb1b778bb147efcf30bc14943a9bc7` ; seul changement local observé : `.claude/` non suivi. État identique avant et après.
- Travail dans un clone local isolé : `/Users/selyan/Documents/Codex/2026-11-03/po/work/portfolio`.
- Branche : `codex/cv-corporate-research`.
- Base et HEAD de travail avant livraison : `f243dee074fe5c864275df679c335fd7b752460e`, repris depuis la référence `origin/main` du dépôt source (deux commits plus récente que son checkout).
- Livraison initiale : changements présents dans l'index de cette branche, sans commit ni push. Selyan a ensuite demandé le push de cette branche (suivi ci-dessous).
- `relay-check.py` : aucun pair remonté, mais concurrence non vérifiée car `ps` indisponible ; cela ne prouve pas l'exclusivité.

## Preuves

Commandes exécutées depuis le clone isolé :

```text
npm run build
✓ Compiled successfully in 2.4s
✓ Generating static pages (11/11)
○ /cv   140 B   102 kB
Code de sortie : 0

npm run typecheck
> tsc --noEmit
Code de sortie : 0

git diff --check
Aucune sortie, code 0.

node ../verify-cv.mjs
/cv/corporate: 200 application/pdf, sans redirection, SHA-256 0fcb3cc55f2a88ce7804091e8a1ea78505900b9b856426c8e0efbd213c306200
/cv/research: 200 application/pdf, sans redirection, SHA-256 857e923f9fc63b09e56dc85fab1d9f1809b3a4c8a326bd5907a3ddc0f55c0756
/cv.pdf: 200 application/pdf, sans redirection, SHA-256 0fcb3cc55f2a88ce7804091e8a1ea78505900b9b856426c8e0efbd213c306200
/: 200, liens Corporate et Research présents
/cv: 200, liens Corporate et Research présents
/sitemap.xml: 200, liens Corporate et Research présents
/llms.txt: 200, liens Corporate et Research présents
www /cv/research: 308 vers le domaine canonique, chemin conservé
Code de sortie : 0
```

Contrôles navigateur : ouverture au survol (`aria-expanded=true`), navigation au clavier vers Corporate, fermeture par Échap (`false`), clic CV vers `/cv`. Les trois aperçus sont chargés (`complete=true`, largeur naturelle non nulle). À 390 px : `clientWidth=scrollWidth=390`, aucun débordement horizontal. Le PDF Research a aussi été rendu et inspecté sur ses deux pages.

Build : avertissement non bloquant sur la base Browserslist ancienne. Le serveur local de vérification a demandé une sortie du bac à sable pour écouter sur 127.0.0.1 ; aucune écriture distante.

## Livraison et actions humaines

- Patch autonome avec les PDF et les aperçus : `/Users/selyan/Documents/Codex/2026-11-03/po/outputs/portfolio-cv.patch`.
- Depuis une branche dédiée du dépôt cible : `git apply --check /Users/selyan/Documents/Codex/2026-11-03/po/outputs/portfolio-cv.patch`, puis `git apply` avec le même chemin après revue.
- Intégration Git puis redéploiement Dokploy à déclencher par Selyan, conformément à ses instructions. Une fusion dans main seule ne redéploie pas ce site.
- La disponibilité publique des nouvelles adresses n'est donc pas affirmée.

## Suivi — demande de push du 3 novembre 2026

- Selyan autorise la publication de la branche `codex/cv-corporate-research` sur `https://github.com/selyan-mhli/portfolio_selyan.git`.
- État distant vérifié avant publication : `main` à `4e3fa69502cc39a89ba1005a6478ef78837b74ed`, incluant la CSP (PR #12). La branche CV n'existait pas encore sur GitHub.
- Intégration de cette évolution dans la branche CV par fusion, sans réécriture d'historique. Les aperçus de CV sont servis depuis le site et n'exigent aucun élargissement de la CSP.
- La publication de branche ne fusionne pas dans `main` et ne déclenche aucun déploiement.
