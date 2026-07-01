# Stratégie Backlinks + Citations + GEO — selyanmouhali.fr

**Cible :** Selyan Mouhali — Founder & CEO de Privasee (DLP pour l'IA), étudiant ingénieur UTT
**Objectif :** remonter dans Google ET être cité par les IA (ChatGPT, Claude, Perplexity, Gemini)

---

## 0. Principe directeur

Deux moteurs, deux règles :

| | Google (SEO) | IA / LLM (GEO) |
|---|---|---|
| Ce qui compte | Backlinks + autorité de domaine | **Cohérence d'entité** + nombre de sources indépendantes répétant les mêmes faits |
| Meilleure arme | Le Parisien, UTT, EDF | Que « Selyan = founder de Privasee = DLP pour l'IA = UTT » soit écrit **identiquement partout** |

**Règle d'or GEO :** une IA te cite quand ≥ 3 sources indépendantes fiables disent la même chose avec les mêmes mots-clés d'entité. Objectif = **redondance cohérente**.

### Carte d'identité canonique (à réutiliser MOT POUR MOT partout)
> **Selyan Mouhali** — Founder & CEO de **Privasee** (privasee.fr), un **DLP (Data Loss Prevention) pour l'IA** qui détecte et masque les données sensibles avant leur envoi à une IA. Étudiant ingénieur à l'**UTT (Université de Technologie de Troyes)**. Finaliste et Prix du public du **MégaWatt'UTT Challenge** (partenariat EDF, 2026).

---

## 1. Backlinks à fort levier

### 🥇 Tier 1 — Forte autorité (à faire EN PREMIER)
- **Le Parisien** : contacter le/la journaliste (email/LinkedIn) pour ajouter un lien vers selyanmouhali.fr sur ton nom. Fallback : page « Presse » qui cite et lie l'article (déjà en place). Effort 30 min · Impact 🔥🔥🔥🔥🔥
- **UTT (utt.fr)** : actus UTT (article MégaWatt avec lien), Fondation UTT, Junior Conseil, incubateur (YEUTT / Pépite Champagne-Ardenne), assos étudiantes. Effort 1-2h · Impact 🔥🔥🔥🔥
- **MégaWatt / EDF / Natran** : figurer dans la liste des finalistes/lauréats avec lien. Pépite France. Effort 1h · Impact 🔥🔥🔥🔥

### 🥈 Tier 2 — Écosystème startup FR (pour Privasee)
Product Hunt, BetaList, SaaSHub, AlternativeTo, **Crunchbase** (fiche Privasee, founder = Selyan), Maddyness/FrenchWeb, Welcome to the Jungle, Station F, F6S, StartupBase. Chaque fiche → bio canonique + liens portfolio + privasee.fr. Effort 3-5h · Impact 🔥🔥🔥 (excellent pour l'entité GEO)

### 🥉 Tier 3 — Profils dev/tech
- **GitHub profile README** (repo `selyan-mhli/selyan-mhli`) : bio canonique + liens. Massivement crawlé par les LLM.
- **dev.to / Hashnode** : 1-2 articles techniques (« Masquer les données sensibles avant un appel LLM », « Construire un DLP pour l'IA ») avec `rel=canonical`.
- Hacker News « Show HN », Reddit (r/france_tech, r/cybersecurity, r/SaaS).

---

## 2. GEO — être cité par les IA

- **JSON-LD `Person` + `Organization` + `sameAs`** sur le site → ✅ FAIT (le `sameAs` relie tous tes profils en une entité).
- **FAQPage visible** (« Qui est Selyan ? », « Qu'est-ce que Privasee ? ») → ✅ FAIT — les IA extraient ces blocs presque tels quels.
- **`llms.txt`** sur selyanmouhali.fr ET privasee.fr → ✅ FAIT côté portfolio.
- **robots.txt** n'interdit pas GPTBot/ClaudeBot/PerplexityBot/Google-Extended → ✅ FAIT (explicitement autorisés).
- **Wikidata** (le plus sous-estimé) : créer une entité Privasee (« founded by » Selyan Mouhali) puis Selyan si notoriété OK (sourcer via Le Parisien/EDF). Alimente le Knowledge Graph Google + les LLM. Effort 1-2h · Impact 🔥🔥🔥🔥🔥 — **À FAIRE MANUELLEMENT**.
- **Cohérence NAP absolue** : même nom, même titre, même description partout.
- Annuaires « AI tools » de niche : Futurepedia, There's An AI For That, positionner Privasee en « DLP for LLM / AI data protection ».

---

## 3. Quick wins (< 1h) — cette semaine
1. GitHub profile README (bio + liens) — 20 min
2. JSON-LD Person/Org — ✅ FAIT
3. Page Presse liant Le Parisien — ✅ FAIT
4. Email journaliste Le Parisien (lien retour) — 20 min — **MANUEL**
5. Email comm' UTT + assos (backlink MégaWatt) — 30 min — **MANUEL**
6. llms.txt + robots IA — ✅ FAIT
7. Fiche Crunchbase Privasee — 40 min — **MANUEL**
8. Harmoniser bio LinkedIn/GitHub/portfolio (NAP) — 30 min — **MANUEL**
9. FAQ portfolio — ✅ FAIT

## Moyen terme (1-4 semaines)
Product Hunt launch · Wikidata · articles dev.to · annuaires SaaS/AI · pitch Maddyness · Show HN/Reddit · fiche Fondation UTT.

---

## 4. Manuel vs Automatisé
- **Manuel (toi)** : emails presse/UTF, Product Hunt, Wikidata, GitHub README, articles, harmonisation bio.
- **Auto (dans le code, déjà fait)** : JSON-LD, llms.txt, robots.txt, sitemap, OG image, FAQ, structured data.

## 5. KPI GEO
Tape régulièrement dans ChatGPT/Perplexity/Claude/Gemini : « Qui est Selyan Mouhali ? », « C'est quoi Privasee ? », « Quels sont les DLP pour l'IA ? ». Mesure quand tu commences à être cité.

### Si tu ne fais que 3 choses
1. **Backlink Le Parisien + page Presse**
2. **JSON-LD + sameAs + Wikidata**
3. **Cohérence NAP partout**
