import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Corporate et Research",
  description: "Les deux versions du CV de Selyan Mouhali : Corporate et Research.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "CV Corporate et Research · Selyan Mouhali",
    description: "Consulter les deux CV ou ouvrir chaque version en entier.",
    url: "/cv",
  },
};

export default function CVPage() {
  return (
    <main className="min-h-screen px-4 py-5 md:px-8">
      <a href="/" className="inline-block text-sm text-muted hover:text-accent">
        ← Portfolio
      </a>
      <h1 className="sr-only">CV de Selyan Mouhali</h1>
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        {(["corporate", "research"] as const).map((variant) => {
          const label = variant === "corporate" ? "Corporate" : "Research";
          return (
            <section key={variant} aria-labelledby={`cv-${variant}`}>
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 id={`cv-${variant}`} className="font-display text-xl">{label}</h2>
                <a href={`/cv/${variant}`} className="text-sm text-accent underline-offset-4 hover:underline">
                  Ouvrir en entier ↗
                </a>
              </div>
              <div className="space-y-4">
                {(variant === "corporate" ? [1] : [1, 2]).map((page) => (
                  <a
                    key={page}
                    href={`/cv/${variant}`}
                    aria-label={`Ouvrir le CV ${label} en entier, aperçu page ${page}`}
                    className="block overflow-hidden rounded-xl border border-sand/15 bg-surface hover:border-accent"
                  >
                    {/* Aperçu issu du PDF : le document complet reste accessible au clic. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/cv/${variant}-${page}.jpg`}
                      alt={`CV ${label} de Selyan Mouhali, page ${page}`}
                      width={1273}
                      height={1800}
                      loading={page === 1 ? "eager" : "lazy"}
                      className="h-auto w-full"
                    />
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
