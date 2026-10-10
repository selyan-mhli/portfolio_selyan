"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { startup, startupAksel } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function SitePreview({ name, url, image }: { name: string; url: string; image: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ouvrir la landing ${name}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      {/* Legende de source, comme les apercus de Projects : le domaine dit ou mene
          le lien. Capture et non iframe : le site refuse d'etre encadre. */}
      <div className="flex items-center border-b border-white/10 bg-black/50 px-4 py-2.5">
        <span className="mono-label truncate !text-[10px] !text-white/40">
          {new URL(url).host}
        </span>
        <ArrowUpRight size={15} className="ml-auto shrink-0 text-white/40 transition-colors group-hover:text-accent" />
      </div>
      <div className="relative aspect-video w-full overflow-hidden bg-white">
        <Image
          src={image}
          alt={`Capture de la page d'accueil ${name}`}
          fill
          sizes="(max-width: 1023px) 100vw, 48vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
        />
      </div>
    </a>
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

        <div className="pz-reveal">
          <SitePreview name="Privasee" url={startup.url} image="/previews/privasee.jpg" />
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

          <div className="min-w-0 space-y-7">
            <SitePreview name="Aksel AI" url={startupAksel.url} image="/previews/aksel-ai.jpg" />
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
      </div>
    </section>
  );
}
