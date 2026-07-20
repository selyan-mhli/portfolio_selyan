"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects, slugify, type Project } from "@/lib/data";
import { ArrowUpRight, Github, Code2, Trophy } from "lucide-react";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

function ScaledIframe({ src, title }: { src: string; title: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.4);
  const baseW = 1280;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / baseW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="absolute inset-0 overflow-hidden bg-white">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        style={{
          width: `${baseW}px`,
          height: `${100 / scale}%`,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          border: 0,
        }}
      />
    </div>
  );
}

function Preview({ p }: { p: Project }) {
  const live = p.href && p.href !== "#" ? p.href : undefined;
  const image = p.image || (p.images && p.images[0]);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-surface">
      {/* Browser chrome */}
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="mono-label ml-3 truncate !text-[10px] !text-white/40">
          {live ? new URL(live).host : p.github ? "github.com" : "aperçu"}
        </span>
      </div>

      <div className="absolute inset-0 top-[42px]">
        {live ? (
          <ScaledIframe src={live} title={`Aperçu ${p.title}`} />
        ) : image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={`Aperçu ${p.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/35">
            {p.kind === "concours" ? (
              <Trophy size={28} className="text-white/50" />
            ) : (
              <Code2 size={28} />
            )}
            <span className="mono-label max-w-[60%] text-center">
              {p.kind === "concours" ? "Projet primé" : "Code sur le dépôt"}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectRow({ p, index }: { p: Project; index: number }) {
  const live = p.href && p.href !== "#" ? p.href : undefined;

  return (
    <article
      id={slugify(p.title)}
      className="proj-row scroll-mt-20 grid items-center gap-8 border-t border-white/10 py-12 md:grid-cols-2 md:gap-14 md:py-16"
    >
      {/* Meta */}
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="mono-label">{String(index + 1).padStart(2, "0")}</span>
          {p.year && <span className="mono-label !text-white/35">{p.year}</span>}
          {p.kind === "concours" && (
            <span className="mono-label rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] !text-white/70">
              Concours
            </span>
          )}
          {p.award && (
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-0.5 text-[11px] font-medium text-accent">
              ★ {p.award}
            </span>
          )}
        </div>

        <h3 className="serif-display mt-4 text-[clamp(1.9rem,4vw,3.25rem)]">{p.title}</h3>

        <p className="mt-4 max-w-xl leading-relaxed text-white/70">{p.problem}</p>
        {p.description && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/45">
            {p.description}
          </p>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span
              key={s}
              className="mono-label rounded-full border border-white/12 px-3 py-1 text-[10px] !text-white/70"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              Ouvrir <ArrowUpRight size={15} />
            </a>
          )}
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={15} /> Code
            </a>
          )}
        </div>
      </div>

      {/* Preview */}
      <div className={index % 2 === 1 ? "md:order-1" : ""}>
        <Preview p={p} />
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 768px)": () => {
          gsap.utils.toArray<HTMLElement>(".proj-row").forEach((row) => {
            gsap.from(row, {
              y: 40,
              opacity: 0,
              duration: 0.8,
              ease: "expo.out",
              scrollTrigger: { trigger: row, start: "top 82%" },
            });
          });
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="relative py-28 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="mono-label mb-6">02 / Projets &amp; concours</div>
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-4">Ce que je construis.</h2>
      <p className="max-w-xl text-white/55 mb-4">
        Des concours industriels primés aux projets de développement : du concret,
        expliqué et démontrable.
      </p>

      <div>
        {projects.map((p, i) => (
          <ProjectRow key={p.title} p={p} index={i} />
        ))}
      </div>

      <div className="border-t border-white/10" />
    </section>
  );
}
