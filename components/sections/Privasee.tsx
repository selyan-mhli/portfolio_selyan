"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ShieldCheck, Sparkles, Play, Pause } from "lucide-react";
import { startup, startupAksel } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-surface">
      {/* Legende de la demo. Pastilles de navigateur retirees : redessiner une
          chrome que le navigateur du visiteur fournit deja est un costume. Le
          libelle, lui, dit ce qu'on regarde. */}
      <div className="flex items-center border-b border-white/10 bg-black/40 px-4 py-2.5">
        <span className="mono-label !text-[10px] !text-white/40">
          Démo — extension Privasee
        </span>
      </div>

      {/* vidéo produit */}
      <div className="group relative aspect-video w-full bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/privasee-demo.mp4"
          poster="/privasee-demo.jpg"
          loop
          muted
          playsInline
          autoPlay
          preload="metadata"
        />
        <button
          onClick={toggle}
          aria-label={playing ? "Mettre en pause" : "Lire"}
          className="absolute bottom-3 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition-colors hover:bg-black/80"
        >
          {playing ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>
      </div>
    </div>
  );
}

export default function Privasee() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pz-reveal", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="startups"
      ref={ref}
      className="relative py-28 md:py-36 px-6 md:px-12 lg:px-20"
    >
      <div className="sec-label mb-6 pz-reveal">Mes startups</div>

      <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:items-center">
        <div>
          <div className="pz-reveal inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.07] px-3 py-1 text-xs text-accent">
            <ShieldCheck size={14} /> Founder &amp; CEO · {startup.name}
          </div>

          <h2 className="pz-reveal serif-display text-[clamp(2.25rem,6vw,4.75rem)] mt-5">
            {startup.tagline}
          </h2>

          <p className="pz-reveal mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {startup.pitch}
          </p>

          <ul className="pz-reveal mt-8 space-y-3">
            {startup.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="pz-reveal mt-9 flex flex-wrap items-center gap-3">
            <a
              href={startup.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink transition-colors hover:bg-white"
            >
              Visiter privasee.fr <ArrowUpRight size={16} />
            </a>
            <div className="flex flex-wrap gap-2">
              {startup.tags.map((t) => (
                <span
                  key={t}
                  className="mono-label rounded-full border border-white/12 px-3 py-1 text-[10px] !text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — vraie vidéo démo produit (issue de la branche redesign-twenty) */}
        <div className="pz-reveal">
          <DemoVideo />
        </div>
      </div>

      {/* Aksel AI — deuxième startup, bloc compact sous Privasee */}
      <div className="pz-reveal mt-20 rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/[0.07] px-3 py-1 text-xs text-accent">
              <Sparkles size={14} /> Founder · {startupAksel.name}
            </div>

            <h3 className="serif-display text-[clamp(1.9rem,4.5vw,3.25rem)] mt-5">
              {startupAksel.tagline}
            </h3>

            <p className="mt-5 max-w-xl leading-relaxed text-white/70">
              {startupAksel.pitch}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={startupAksel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-ink transition-colors hover:bg-white"
              >
                Visiter akselai.fr <ArrowUpRight size={16} />
              </a>
              <div className="flex flex-wrap gap-2">
                {startupAksel.tags.map((t) => (
                  <span
                    key={t}
                    className="mono-label rounded-full border border-white/12 px-3 py-1 text-[10px] !text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ul className="space-y-3">
            {startupAksel.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
