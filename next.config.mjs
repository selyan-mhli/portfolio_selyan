/** @type {import('next').NextConfig} */
const securityHeaders = [
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
