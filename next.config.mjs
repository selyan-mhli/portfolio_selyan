const isDev = process.env.NODE_ENV !== "production";

// Sites encadres par les apercus live de Projects (ScaledIframe sur `href`).
// Toute nouvelle `href` de projet dans lib/data.ts doit etre ajoutee ici :
// tests/security-headers.test.mjs le verifie.
const FRAME_HOSTS = [
  "https://blaze-live.aminssutt.fr",
  "https://megawatt-simupont-rvmyoc-820e18-212-227-88-180.sslip.io",
  "https://selyan-mhli.github.io",
];

// CSP statique : toutes les pages sont prerendues (x-nextjs-prerender), un nonce
// imposerait le rendu dynamique de chaque requete. Concessions assumees :
// - script-src 'unsafe-inline' : scripts inline de Next (self.__next_f.push,
//   bootstrap RSC) dont le contenu change a chaque build, et JSON-LD du layout ;
// - style-src 'unsafe-inline' : attributs style="" emis au rendu serveur
//   (framer-motion, next/image fill, styles React) ;
// - 'unsafe-eval' uniquement en dev (React Refresh / overlay de next dev).
const csp = [
  ["default-src", "'self'"],
  ["script-src", "'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : [])],
  ["style-src", "'self'", "'unsafe-inline'"],
  // Logos de la section Stack servis par Simple Icons.
  ["img-src", "'self'", "https://cdn.simpleicons.org"],
  ["font-src", "'self'"],
  // Formulaire de contact : POST fetch vers Web3Forms.
  ["connect-src", "'self'", "https://api.web3forms.com"],
  ["media-src", "'self'"],
  ["frame-src", ...FRAME_HOSTS],
  ["object-src", "'none'"],
  ["base-uri", "'self'"],
  ["form-action", "'self'"],
  // Aligne sur X-Frame-Options: SAMEORIGIN (conserve pour les vieux navigateurs).
  ["frame-ancestors", "'self'"],
  ...(isDev ? [] : [["upgrade-insecure-requests"]]),
]
  .map((directive) => directive.join(" "))
  .join("; ");

/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  // HSTS 1 an, volontairement sans includeSubDomains ni preload : ne pas imposer
  // HTTPS aux sous-domaines (vh., futurs) et rester reversible.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["three"],
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
  // www et apex servaient le meme contenu en 200 : une seule URL canonique.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.selyanmouhali.fr" }],
        destination: "https://selyanmouhali.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
