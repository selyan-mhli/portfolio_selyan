export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  context: string;
  constraints: string[];
  solution: string[];
  outcomes: string[];
  metrics: ProjectMetric[];
  stack: string[];
  role: string;
  period: string;
  heroImage: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "site-londres-mm01",
    title: "Site Londres MM01",
    shortDescription:
      "Site éditorial responsive conçu pour présenter Londres de manière claire, visuelle et structurée.",
    problem:
      "Construire un site vitrine lisible et engageant avec uniquement HTML/CSS, sans framework.",
    context:
      "Projet académique orienté fondations front-end et qualité d'intégration.",
    constraints: [
      "Pas de framework JavaScript.",
      "Respect d'un rendu propre sur mobile, tablette et desktop.",
      "Structure sémantique exploitable pour le SEO de base."
    ],
    solution: [
      "Architecture en sections thématiques pour faciliter la lecture rapide.",
      "Mise en place d'un système de composants CSS réutilisables.",
      "Optimisation des médias et hiérarchie visuelle pour améliorer la perception de vitesse."
    ],
    outcomes: [
      "Parcours utilisateur plus fluide grâce à une navigation claire.",
      "Base front-end maintenable et réutilisable pour d'autres mini-sites.",
      "Démonstration concrète de maîtrise HTML/CSS responsive."
    ],
    metrics: [
      { label: "Pages clés", value: "5" },
      { label: "Breakpoints gérés", value: "3" },
      { label: "Stack JS", value: "0 dépendance" }
    ],
    stack: ["HTML5", "CSS3", "Responsive Design", "GitHub Pages"],
    role: "Conception et intégration front-end",
    period: "2024",
    heroImage: "/scene/01_projets_ai-badge.png",
    links: [
      { label: "Demo live", href: "https://selyan-mhli.github.io/Site_Londres_MM01/" },
      { label: "Code source", href: "https://github.com/selyan-mhli/Site_Londres_MM01" }
    ]
  },
  {
    slug: "projet-lo02",
    title: "Projet LO02",
    shortDescription:
      "Application Java orientée objet construite autour du pattern MVC et d'une architecture modulaire.",
    problem:
      "Implémenter une application robuste avec séparation claire entre logique métier, vue et contrôleurs.",
    context:
      "Projet académique pour valider les fondamentaux software engineering: OOP, tests et conception.",
    constraints: [
      "Structure MVC stricte imposée.",
      "Code lisible et testable dans un cadre universitaire.",
      "Documentation minimale attendue pour faciliter la revue."
    ],
    solution: [
      "Découpage en modules avec responsabilités explicites.",
      "Modélisation orientée objet avant implémentation.",
      "Mise en place de tests unitaires pour limiter les régressions."
    ],
    outcomes: [
      "Architecture plus stable et plus simple à faire évoluer.",
      "Meilleure qualité de code grâce à la séparation des responsabilités.",
      "Validation concrète des bonnes pratiques Java en environnement projet."
    ],
    metrics: [
      { label: "Pattern", value: "MVC" },
      { label: "Langage", value: "Java" },
      { label: "Niveau", value: "Projet structuré" }
    ],
    stack: ["Java", "POO", "MVC", "JUnit", "Git"],
    role: "Développement logiciel",
    period: "2025",
    heroImage: "/scene/02_experience_briefcase-code-folder.png",
    links: [{ label: "Repository GitHub", href: "https://github.com/selyan-mhli/Projet_LO02" }]
  },
  {
    slug: "projet-natran",
    title: "Projet Natran",
    shortDescription:
      "Projet TypeScript orienté qualité logicielle avec une base testable et une structure propre.",
    problem:
      "Produire une application TypeScript maintenable, lisible et fiable dans un temps contraint.",
    context:
      "Projet orienté bonnes pratiques: typage strict, tests et organisation de code.",
    constraints: [
      "Typage strict sur la majorité du code.",
      "Livraison dans un délai court.",
      "Nécessité d'un rendu clair pour faciliter l'évaluation."
    ],
    solution: [
      "Structuration du code par domaines fonctionnels.",
      "Ajout de tests unitaires sur les cas principaux.",
      "Convention de nommage cohérente pour accélérer la maintenance."
    ],
    outcomes: [
      "Code plus fiable grâce aux garde-fous TypeScript.",
      "Débogage plus rapide via une structure lisible.",
      "Projet facilement démontrable en entretien technique."
    ],
    metrics: [
      { label: "Langage", value: "TypeScript" },
      { label: "Tests", value: "Unitaires" },
      { label: "Objectif", value: "Maintenabilité" }
    ],
    stack: ["TypeScript", "Node.js", "Unit Testing", "GitHub Pages"],
    role: "Architecture et développement",
    period: "2025",
    heroImage: "/scene/05_tech-competences_gears.png",
    links: [
      { label: "Demo live", href: "https://selyan-mhli.github.io/projet_Natran/" },
      { label: "Repository GitHub", href: "https://github.com/selyan-mhli/projet_Natran" }
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
