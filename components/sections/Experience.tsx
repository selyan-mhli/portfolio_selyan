"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experiences } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  const featured = experiences.filter((e) => e.featured);
  const rest = experiences.filter((e) => !e.featured);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);

      gsap.fromTo(
        q(".exp-kicker"),
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 82%", once: true },
        }
      );

      gsap.fromTo(
        q<HTMLElement>(".exp-item"),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 78%", once: true },
        }
      );

      gsap.fromTo(
        q<HTMLElement>(".exp-mini"),
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: q(".exp-rest"), start: "top 88%", once: true },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="exp-kicker sec-rule mb-6" aria-hidden="true" />
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-4">Parcours.</h2>
      <p className="max-w-xl text-white/55 mb-14">
        L'essentiel — le reste en bas, pour le contexte.
      </p>

      {/* Expériences phares */}
      <div className="grid gap-5 md:grid-cols-2">
        {featured.map((e, i) => (
          <article
            key={i}
            className="exp-item rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-white/25"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5">
                <Image src={e.logo} alt={e.company} fill className="object-contain p-1.5" />
              </div>
              <div>
                <h3 className="font-medium text-lg leading-tight">{e.role}</h3>
                <span className="text-white/45 text-sm">{e.company}</span>
              </div>
            </div>
            <div className="mono-label mb-3 !text-white/40">{e.period}</div>
            <ul className="list-inside list-disc space-y-1 text-sm text-white/70">
              {e.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      {/* Autres expériences — compact */}
      {rest.length > 0 && (
        <div className="exp-rest mt-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="mono-label !text-white/40">Autres expériences</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <ul className="divide-y divide-white/8">
            {rest.map((e, i) => (
              <li
                key={i}
                className="exp-mini flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3.5"
              >
                <span className="font-medium text-white/85">{e.role}</span>
                <span className="text-white/40">· {e.company}</span>
                <span className="mono-label ml-auto !text-white/35">{e.period}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
