"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Tech = { name: string; slug: string; color: string };

// simpleicons.org CDN — slug + brand hex (no #)
const techs: Tech[] = [
  { name: "Next.js", slug: "nextdotjs", color: "ffffff" },
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8" },
  { name: "GSAP", slug: "greensock", color: "88CE02" },
  { name: "Three.js", slug: "threedotjs", color: "ffffff" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Java", slug: "openjdk", color: "ffffff" },
  { name: "Python", slug: "python", color: "FFD43B" },
  { name: "Supabase", slug: "supabase", color: "3ECF8E" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "GitHub", slug: "github", color: "ffffff" },
  { name: "Vercel", slug: "vercel", color: "ffffff" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  { name: "Linux", slug: "linux", color: "FCC624" },
];

function Bubble({ t }: { t: Tech }) {
  return (
    <div
      data-hover
      className="group relative shrink-0 flex flex-col items-center gap-3 mx-6 md:mx-10"
    >
      <div
        className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center border border-white/15 bg-white/[0.04] backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 group-hover:rotate-6"
        style={{
          boxShadow: `inset 0 0 30px rgba(255,255,255,0.04), 0 10px 40px -20px #${t.color}`,
        }}
      >
        <img
          src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
          alt={t.name}
          className="w-9 h-9 md:w-12 md:h-12 select-none pointer-events-none transition-transform duration-500 group-hover:-rotate-6"
          loading="lazy"
        />
      </div>
      <span className="mono-label !text-white/55 group-hover:!text-white transition-colors">
        {t.name}
      </span>
    </div>
  );
}

export default function Stack() {
  const row = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!row.current) return;

    const half = row.current.scrollWidth / 2;
    gsap.set(row.current, { x: 0 });
    const t = gsap.to(row.current, {
      x: -half,
      duration: 36,
      ease: "none",
      repeat: -1,
    });

    return () => {
      t.kill();
    };
  }, []);

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mono-label mb-6">05 / Stack &amp; Compétences</div>
        <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-16">
          Les outils que je maîtrise.
        </h2>
      </div>

      {/* Marquee rows */}
      <div className="relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-black to-transparent" />

        <div className="overflow-hidden py-6">
          <div ref={row} className="flex w-max">
            {[...techs, ...techs].map((t, i) => (
              <Bubble key={`stack-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
