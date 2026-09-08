"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, ArrowDown, FileText, Newspaper, Trophy, Briefcase } from "lucide-react";

const LEPARISIEN_URL =
  "https://www.leparisien.fr/aube-10/quand-edf-vient-chercher-des-solutions-a-luniversite-de-troyes-pour-ses-centrales-nucleaires-29-06-2026-OTXINB5PMNC4ZC7SSQ7G66Q2MU.php";

const badges = [
  { icon: Trophy, label: "Finaliste MégaWatt'UTT ×EDF", href: "#projects" },
  { icon: Newspaper, label: "Cité dans Le Parisien", href: LEPARISIEN_URL, external: true },
  { icon: Briefcase, label: "Dispo freelance : sites web & IA", href: "https://akselai.fr", external: true },
];

function HeroPhoto() {
  const [ok, setOk] = useState(true);
  return (
    <div className="hero-photo relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface">
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/selyan.jpg"
          alt="Selyan Mouhali"
          onError={() => setOk(false)}
          className="h-full w-full object-cover grayscale-[0.15] contrast-[1.02]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="serif-display text-[6rem] text-white/10">S</span>
          <span className="mono-label absolute bottom-4 left-4 !text-white/30">
            /public/selyan.jpg
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-accent/70" />
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fromTo et non from : reactStrictMode monte le composant deux fois en dev.
      // Avec .from(), le second montage lit l'etat DEJA translate par le premier et
      // le prend pour cible — l'animation joue de 108% vers 108% et le H1 ne parait
      // jamais. Expliciter l'arrivee rend l'intro idempotente.
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.fromTo(".hero-eyebrow", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1 })
        .fromTo(".hero-line", { yPercent: 108 }, { yPercent: 0, duration: 1.1, stagger: 0.1 }, "-=0.35")
        .fromTo(".hero-sub", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
        .fromTo(".hero-badge", { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, "-=0.5")
        .fromTo(".hero-cta", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.07 }, "-=0.4")
        .fromTo(".hero-photo", { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 1 }, "-=1");
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] px-6 md:px-12 lg:px-20 pt-28 pb-16 flex items-center"
    >
      <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* Left — thesis */}
        <div>
          {/* Avatar rond — mobile/tablette uniquement (le grand portrait s'affiche en desktop) */}
          <div className="hero-avatar lg:hidden mx-auto mb-9 h-80 w-80 max-w-[84vw] max-h-[84vw] overflow-hidden rounded-full border border-white/15 bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/selyan.jpg"
              alt="Selyan Mouhali"
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="hero-eyebrow mono-label mb-6">
            Founder · Privasee — DLP pour l'IA
          </div>

          <h1 className="serif-display text-[clamp(2.75rem,8.5vw,7.5rem)]">
            <span className="block overflow-hidden">
              <span className="hero-line inline-block">Selyan</span>
            </span>
            <span className="block overflow-hidden">
              <span className="hero-line inline-block">Mouhali</span>
            </span>
          </h1>

          <p className="hero-sub mt-7 max-w-xl text-lg leading-relaxed text-white/65">
            Étudiant ingénieur à l'UTT, founder de{" "}
            <a
              href="#startups"
              className="text-sand underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
            >
              Privasee
            </a>{" "}
            et d'
            <a
              href="https://akselai.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sand underline decoration-accent/50 underline-offset-4 hover:decoration-accent"
            >
              Aksel AI
            </a>
            . Je construis des produits concrets, du DLP pour l'IA aux solutions
            primées en challenge industriel.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {badges.map((b) => {
              const Arrow = b.external ? ArrowUpRight : ArrowDown;
              return (
                <a
                  key={b.label}
                  href={b.href}
                  {...(b.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="hero-badge group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/75 transition-colors hover:border-accent hover:text-white"
                >
                  <b.icon size={14} className="text-accent" />
                  {b.label}
                  <Arrow
                    size={13}
                    className="text-white/40 transition-colors group-hover:text-accent"
                  />
                </a>
              );
            })}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#startups"
              className="hero-cta inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink transition-colors hover:bg-white"
            >
              Découvrir mes startups <ArrowUpRight size={16} />
            </a>
            <a
              href="#projects"
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              Mes projets
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              <FileText size={16} /> CV
            </a>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="hidden lg:block">
          <HeroPhoto />
        </div>
      </div>

      <div className="hero-scroll absolute bottom-8 left-6 md:left-12 lg:left-20 mono-label">
        scroll ↓
      </div>
    </section>
  );
}
