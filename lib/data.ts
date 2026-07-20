export const SITE = "https://selyanmouhali.fr";

/* ------------------------------------------------------------------ */
/* Startup — Privasee (Selyan est founder, ce n'est pas un projet)     */
/* ------------------------------------------------------------------ */

export const startup = {
  name: "Privasee",
  role: "Founder",
  url: "https://privasee.fr",
  tagline: "Le DLP pensé pour l'ère de l'IA.",
  pitch:
    "Privasee détecte et masque en temps réel les données sensibles (noms, e-mails, numéros, secrets) avant qu'elles ne partent dans un outil d'IA comme ChatGPT ou Claude. L'idée : laisser les équipes profiter de l'IA sans jamais exposer d'information confidentielle.",
  points: [
    "Détection et anonymisation à la volée avant l'envoi au modèle.",
    "Pensé pour les équipes qui veulent adopter l'IA sans risque de fuite.",
    "Data Loss Prevention (DLP) appliqué au flux prompt → IA.",
  ],
  tags: ["Founder", "DLP", "IA", "Privacy", "SaaS"],
};

/* ------------------------------------------------------------------ */
/* Projets & concours                                                  */
/* ------------------------------------------------------------------ */

export type Project = {
  title: string;
  problem: string;
  stack: string[];
  href?: string;
  github?: string;
  image?: string;
  images?: string[];
  video?: string;
  year?: string;
  featured?: boolean;
  description?: string;
  kind?: "concours" | "projet";
  award?: string;
};

export const projects: Project[] = [
  {
    title: "MégaWatt'UTT Challenge",
    year: "2026",
    featured: true,
    kind: "concours",
    award: "Finaliste · Prix du public",
    problem:
      "Challenge d'innovation de la Fondation UTT × EDF (centrale nucléaire de Nogent-sur-Seine) : répondre en équipe à un cas industriel réel posé par les ingénieurs d'EDF.",
    description:
      "Avec mon équipe, nous avons planché pendant plusieurs semaines sur un problème concret soumis par les équipes d'EDF, puis défendu notre solution en pitch devant un jury industriel. Résultat : finalistes et lauréats du Prix du public. L'aventure a été couverte par Le Parisien.",
    stack: ["Innovation", "Énergie", "Pitch", "Travail d'équipe"],
    href: "https://megawatt-simupont-rvmyoc-820e18-212-227-88-180.sslip.io/",
  },
  {
    title: "Natran Challenge",
    year: "2026",
    kind: "concours",
    award: "Finaliste",
    problem:
      "Concours d'innovation en partenariat avec Natran (opérateur du transport de gaz en France, ex-GRTgaz) : concevoir une solution répondant à un enjeu industriel de l'entreprise.",
    description:
      "Projet d'équipe mené jusqu'en finale du challenge Natran. Analyse du besoin, conception d'une solution et défense devant jury.",
    stack: ["Innovation", "Énergie", "Industrie"],
    href: "https://selyan-mhli.github.io/projet_Natran/",
  },
  {
    title: "Site Londres",
    year: "2024",
    kind: "projet",
    problem:
      "Site thématique responsive sur Londres : structuration du contenu, hiérarchie typographique et navigation soignées.",
    description:
      "Réalisé dans le cadre du module MM01 : un parcours visuel autour de Londres, entièrement responsive, avec un travail sur la hiérarchie typographique et la fluidité de navigation.",
    stack: ["HTML", "CSS", "Responsive"],
    href: "https://selyan-mhli.github.io/Site_Londres_MM01/",
    github: "https://github.com/selyan-mhli/Site_Londres_MM01",
  },
  {
    title: "LO02 — Jest",
    year: "2025",
    kind: "projet",
    problem:
      "Implémentation Java du jeu de cartes Jest : architecture MVC, IA à 2 stratégies, interfaces console et GUI Swing.",
    description:
      "Projet académique LO02 (UTT) : implémentation complète du jeu Jest en Java, avec une architecture logicielle rigoureuse s'appuyant sur les patrons de conception Strategy, Visitor et Observer. Séparation MVC stricte, tests unitaires, double interface (console et Swing).",
    stack: ["Java 17+", "MVC", "Strategy", "Visitor", "Observer"],
    image: "/projects/lo02.png",
    github: "https://github.com/selyan-mhli/Projet_LO02",
  },
];

/* ------------------------------------------------------------------ */
/* Presse                                                              */
/* ------------------------------------------------------------------ */

export type PressItem = {
  outlet: string;
  title: string;
  date: string;
  url: string;
  embeddable?: boolean;
};

export const press: PressItem[] = [
  {
    outlet: "Le Parisien",
    title:
      "Quand EDF vient chercher des solutions à l'Université de Troyes pour ses centrales nucléaires",
    date: "29 juin 2026",
    url: "https://www.leparisien.fr/aube-10/quand-edf-vient-chercher-des-solutions-a-luniversite-de-troyes-pour-ses-centrales-nucleaires-29-06-2026-OTXINB5PMNC4ZC7SSQ7G66Q2MU.php",
    embeddable: true,
  },
];

/* ------------------------------------------------------------------ */
/* Expériences                                                         */
/* ------------------------------------------------------------------ */

export type Experience = {
  role: string;
  company: string;
  period: string;
  logo: string;
  bullets: string[];
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    role: "Founder & CEO",
    company: "Privasee",
    period: "2025 – Aujourd'hui · Troyes",
    logo: "/privasee-logo.svg",
    featured: true,
    bullets: [
      "Création de Privasee, un DLP pensé pour l'ère de l'IA (privasee.fr).",
      "Vision produit, développement et stratégie de la startup.",
    ],
  },
  {
    role: "Responsable Partenariat",
    company: "Néréides",
    period: "Oct. 2025 – Aujourd'hui · Troyes",
    logo: "/scene/logo-nereides.svg",
    featured: true,
    bullets: [
      "Gestion et développement du réseau de partenaires.",
      "Mise en place d'outils de suivi et optimisation de la communication interne.",
    ],
  },
  {
    role: "Opérateur polyvalent en atelier",
    company: "Ici Store",
    period: "Août 2025 · Monteux",
    logo: "/scene/logo-icistore.svg",
    bullets: [
      "Application stricte des protocoles de fabrication et normes de sécurité.",
      "Participation aux opérations de production et logistique.",
    ],
  },
  {
    role: "Équipier polyvalent",
    company: "Little Bagel",
    period: "Été 2023 & 2024 · Avignon",
    logo: "/scene/logo-littlebagel.webp",
    bullets: [
      "Accueil et service des clients.",
      "Préparation des commandes et service au bar.",
      "Développement du service client, réactivité et travail d'équipe.",
    ],
  },
  {
    role: "Assistant administratif",
    company: "Helios",
    period: "2023 · Carpentras",
    logo: "/scene/logo-helios.jpg",
    bullets: [
      "Tri et classement de documents selon différents critères.",
      "Expérience en organisation numérique et processus administratifs.",
    ],
  },
  {
    role: "Stagiaire d'observation",
    company: "Hôpital d'Avignon",
    period: "Juin 2022 · Avignon",
    logo: "/scene/logo-ch-avignon.svg",
    bullets: [
      "Collaboration avec infirmiers, médecins et kinésithérapeutes.",
      "Développement de l'écoute active en milieu professionnel.",
    ],
  },
  {
    role: "Stagiaire d'observation",
    company: "Pédiatrie Carpentras",
    period: "Juillet 2022 · Carpentras",
    logo: "/scene/logo-pediatrie.png",
    bullets: [
      "Utilisation de logiciels de planification de rendez-vous.",
      "Renforcement des compétences en communication interpersonnelle.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Formation                                                           */
/* ------------------------------------------------------------------ */

export type Education = {
  title: string;
  period: string;
  desc: string;
  logo: string;
};

export const education: Education[] = [
  {
    title: "Diplôme d'Ingénieur — UTT",
    period: "2024 – Présent · Troyes",
    desc: "Tronc commun ingénieur / cycle préparatoire. Maths, informatique, physique, gestion de projet et langues.",
    logo: "/scene/Logo_UTT_2018.svg.png",
  },
  {
    title: "Baccalauréat section européenne, mention très bien",
    period: "2024 · Marie Pila, Avignon",
    desc: "Spécialités Mathématiques, Maths Expertes, Physique-Chimie et SES. Latin jusqu'au brevet.",
    logo: "/scene/logo-mariepila.png",
  },
  {
    title: "Échange scolaire — Reynolds High School",
    period: "2023 · Victoria BC, Canada",
    desc: "Immersion anglophone complète, cours du système canadien et découverte culturelle.",
    logo: "/scene/logo-reynolds.png",
  },
];

export type Certification = { title: string; detail?: string; logo?: string; pdf?: string };

export const certifications: Certification[] = [
  { title: "Ceinture noire de Karaté", logo: "/logos/karate.svg" },
  {
    title: "Prévention des risques — INRS",
    detail: "ID 284831 · Janv. 2025",
    logo: "/logos/inrs.png",
    pdf: "/certs/inrs.pdf",
  },
  { title: "LVMH Inside Certificate", logo: "/logos/lvmh-inside.svg", pdf: "/certs/lvmh.pdf" },
  {
    title: "PSE1 — Premiers Secours en Équipe",
    logo: "/logos/croix-rouge.svg",
    pdf: "/certs/pse1.pdf",
  },
  { title: "Linguaskill Cambridge — C1+", logo: "/logos/cambridge.svg", pdf: "/certs/linguaskill.jpg" },
  { title: "SIELE — Espagnol B1", logo: "/logos/siele.png" },
];

export type Passion = { title: string; desc: string };

export const passions: Passion[] = [
  {
    title: "Karaté",
    desc: "Ceinture noire, 10 ans de pratique. Plusieurs fois champion régional et interrégional.",
  },
  {
    title: "Football",
    desc: "Passionné de ballon rond depuis 2 ans : esprit d'équipe et dépassement de soi.",
  },
  {
    title: "Sport automobile",
    desc: "Passionné de course, d'ingénierie et de culture automobile.",
  },
  {
    title: "Voyages",
    desc: "Canada, Suède, Pologne, Caraïbes, Panama… nouvelles cultures et perspectives.",
  },
  {
    title: "Économie, Géopolitique & Trading",
    desc: "Passionné par les marchés financiers, la géopolitique et le trading.",
  },
  {
    title: "IA, LLM & Machine Learning",
    desc: "Fasciné par l'intelligence artificielle, les LLM et l'apprentissage automatique.",
  },
];

export const stack = {
  Frontend: ["Next.js", "React", "TypeScript", "Tailwind", "GSAP", "Three.js", "R3F"],
  Backend: ["Node.js", "Java", "Python", "REST", "Supabase"],
  "IA & Data": ["LLM APIs", "Prompt Engineering", "DLP"],
  "Outils & DevOps": ["Git", "GitHub", "Vercel", "Figma", "Linux"],
};

export const softSkills = [
  "Travail d'équipe",
  "Communication",
  "Organisation",
  "Adaptabilité",
  "Curiosité",
  "Relation client",
];

export const languages = [
  "Français — Natif",
  "Anglais — C1+ Linguaskill Cambridge",
  "Espagnol — B1 SIELE",
];

export const about = {
  hello: "Bonjour ! Je suis",
  name: "Selyan",
  desc: ", étudiant en deuxième année d'école d'ingénieur à l'Université de Technologie de Troyes et founder de Privasee. Curieux et rigoureux, je construis des produits — d'un DLP pour l'IA à des solutions primées en challenge industriel.",
  sub: "Actuellement à la recherche d'expériences concrètes pour renforcer mes compétences en ingénierie, en tech et en environnements orientés produit. En parallèle, j'accompagne entreprises et indépendants en freelance : sites web, IA et référencement.",
};

export const contact = {
  email: "selyan.mouhali@gmail.com",
  phone: "+33 6 50 59 66 32",
  github: "https://github.com/selyan-mhli",
  linkedin: "https://www.linkedin.com/in/selyanmouhali/",
  privasee: "https://privasee.fr",
  // Cal.com : chemin public de l'événement (cal.com/<username>/<event>)
  calLink: "selyan-mouhali/30min",
  // Web3Forms : clé d'accès publique (web3forms.com — reçue par e-mail)
  web3formsKey: "e3a85b59-2611-4bbf-ba43-bce0234b8378",
};

/* ------------------------------------------------------------------ */
/* Services — offre freelance (sites, IA, SEO/GEO)                     */
/* ------------------------------------------------------------------ */

export type Service = {
  title: string;
  desc: string;
  icon: "globe" | "graduation" | "compass" | "megaphone" | "search";
};

export const services: Service[] = [
  {
    title: "Création de sites web",
    desc: "Sites vitrine, portfolios et e-commerce. Modernes, rapides, pensés pour convertir vos visiteurs en clients.",
    icon: "globe",
  },
  {
    title: "Introduction à l'IA en entreprise",
    desc: "Sensibilisation et formation de vos équipes aux outils d'IA : ce qui existe, ce qui vous concerne, comment démarrer sans risque.",
    icon: "graduation",
  },
  {
    title: "Conseil en IA",
    desc: "J'identifie vos cas d'usage concrets, je choisis les bons outils et j'automatise vos tâches répétitives. Sans jargon.",
    icon: "compass",
  },
  {
    title: "Marketing génératif",
    desc: "Contenus, visuels et campagnes marketing produits avec l'IA : plus de volume, plus vite, dans votre ton de marque.",
    icon: "megaphone",
  },
  {
    title: "SEO / GEO",
    desc: "Référencement Google (SEO) et visibilité dans les réponses des IA comme ChatGPT ou Perplexity (GEO). Être trouvé partout où l'on vous cherche.",
    icon: "search",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ — visible + FAQPage schema (levier GEO : les IA citent ces blocs) */
/* ------------------------------------------------------------------ */

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  {
    q: "Qui est Selyan Mouhali ?",
    a: "Selyan Mouhali est le Founder & CEO de Privasee (un DLP pour l'IA) et étudiant ingénieur à l'Université de Technologie de Troyes (UTT). Il est finaliste et lauréat du Prix du public du MégaWatt'UTT Challenge (×EDF) et a été cité dans Le Parisien.",
  },
  {
    q: "Qu'est-ce que Privasee ?",
    a: "Privasee (privasee.fr) est la startup fondée par Selyan Mouhali. C'est un DLP (Data Loss Prevention) pour l'IA : il détecte et masque en temps réel les données sensibles avant qu'elles ne partent dans un outil d'IA comme ChatGPT ou Claude, pour utiliser l'IA sans exposer d'information confidentielle.",
  },
  {
    q: "Qu'est-ce qu'un DLP pour l'IA ?",
    a: "Un DLP (Data Loss Prevention) pour l'IA empêche les fuites de données sensibles vers les modèles d'intelligence artificielle : il analyse le contenu envoyé à l'IA et masque ou anonymise les informations confidentielles avant leur transmission.",
  },
  {
    q: "Quelles distinctions Selyan Mouhali a-t-il obtenues ?",
    a: "Finaliste et Prix du public du MégaWatt'UTT Challenge (en partenariat avec EDF, centrale de Nogent-sur-Seine, 2026), et finaliste du Natran Challenge (Natran, ex-GRTgaz).",
  },
];

/* ------------------------------------------------------------------ */
/* JSON-LD (schema.org) — SEO / référencement                          */
/* ------------------------------------------------------------------ */

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE}/#selyan`,
      name: "Selyan Mouhali",
      givenName: "Selyan",
      familyName: "Mouhali",
      url: SITE,
      image: { "@type": "ImageObject", url: `${SITE}/selyan.jpg` },
      nationality: "Française",
      jobTitle: "Founder de Privasee · Étudiant ingénieur",
      hasOccupation: [
        { "@type": "Occupation", name: "Founder & CEO — Privasee" },
        { "@type": "Occupation", name: "Étudiant ingénieur — UTT" },
      ],
      description:
        "Founder de Privasee (DLP pour l'IA), étudiant ingénieur à l'Université de Technologie de Troyes. Finaliste et Prix du public du MégaWatt'UTT Challenge (×EDF), finaliste Natran.",
      worksFor: { "@id": `${SITE}/#privasee` },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Université de Technologie de Troyes",
        alternateName: "UTT",
        url: "https://www.utt.fr",
      },
      knowsAbout: [
        "Data Loss Prevention",
        "Intelligence artificielle",
        "Développement web",
        "Next.js",
        "TypeScript",
        "Énergie",
        "Innovation industrielle",
      ],
      award: [
        "Finaliste & Prix du public — MégaWatt'UTT Challenge (×EDF)",
        "Finaliste — Natran Challenge",
      ],
      makesOffer: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
          provider: { "@id": `${SITE}/#selyan` },
          areaServed: "France",
          availableLanguage: ["fr", "en"],
        },
      })),
      sameAs: [
        "https://github.com/selyan-mhli",
        "https://www.linkedin.com/in/selyanmouhali/",
        "https://privasee.fr",
      ],
      subjectOf: {
        "@type": "NewsArticle",
        headline:
          "Quand EDF vient chercher des solutions à l'Université de Troyes pour ses centrales nucléaires",
        datePublished: "2026-06-29",
        publisher: { "@type": "Organization", name: "Le Parisien" },
        url: "https://www.leparisien.fr/aube-10/quand-edf-vient-chercher-des-solutions-a-luniversite-de-troyes-pour-ses-centrales-nucleaires-29-06-2026-OTXINB5PMNC4ZC7SSQ7G66Q2MU.php",
      },
      address: { "@type": "PostalAddress", addressLocality: "Troyes", addressCountry: "FR" },
    },
    {
      "@type": "Organization",
      "@id": `${SITE}/#privasee`,
      name: "Privasee",
      url: "https://privasee.fr",
      description:
        "Privasee — Data Loss Prevention (DLP) pour l'IA : détecte et masque les données sensibles avant leur envoi à un outil d'intelligence artificielle.",
      founder: { "@id": `${SITE}/#selyan` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Selyan Mouhali — Portfolio",
      inLanguage: "fr-FR",
      about: { "@id": `${SITE}/#selyan` },
      publisher: { "@id": `${SITE}/#selyan` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profilepage`,
      url: SITE,
      name: "Selyan Mouhali — Founder de Privasee · Étudiant ingénieur UTT",
      inLanguage: "fr-FR",
      isPartOf: { "@id": `${SITE}/#website` },
      mainEntity: { "@id": `${SITE}/#selyan` },
      about: { "@id": `${SITE}/#selyan` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}/selyan.jpg` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
        { "@type": "ListItem", position: 2, name: "À propos", item: `${SITE}/#about` },
        { "@type": "ListItem", position: 3, name: "Privasee", item: `${SITE}/#privasee` },
        { "@type": "ListItem", position: 4, name: "Projets", item: `${SITE}/#projects` },
        { "@type": "ListItem", position: 5, name: "Presse", item: `${SITE}/#presse` },
        { "@type": "ListItem", position: 6, name: "Services", item: `${SITE}/#services` },
        { "@type": "ListItem", position: 7, name: "Contact", item: `${SITE}/#contact` },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};
