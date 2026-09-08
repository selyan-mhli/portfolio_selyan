"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { certifications } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);

      gsap.fromTo(
        q(".cert-kicker"),
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 84%", once: true },
        }
      );

      // Révélation simple à l'entrée — les cartes restent ensuite pleinement visibles.
      gsap.fromTo(
        q<HTMLElement>(".cert-card"),
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.07,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%", once: true },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="certifications" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="cert-kicker sec-rule mb-6" aria-hidden="true" />
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-16">Certifications.</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {certifications.map((c, i) => {
          const Tag = c.pdf ? "a" : "div";
          const linkProps = c.pdf
            ? { href: c.pdf, target: "_blank", rel: "noopener noreferrer" }
            : {};
          return (
            <Tag
              key={i}
              {...linkProps}
              className={`cert-card group flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors ${
                c.pdf ? "hover:border-accent/50 cursor-pointer" : ""
              }`}
            >
              {c.logo && (
                <div className="relative w-10 h-10">
                  <Image src={c.logo} alt={c.title} fill className="object-contain" />
                </div>
              )}
              <div>
                <div className="text-sm text-white/90">{c.title}</div>
                {c.detail && <div className="mono-label mt-1 !text-[10px]">{c.detail}</div>}
              </div>
              {c.pdf && (
                <span className="mono-label !text-[9px] !text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Voir le PDF ↗
                </span>
              )}
            </Tag>
          );
        })}
      </div>
    </section>
  );
}
