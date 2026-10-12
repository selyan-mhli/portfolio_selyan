"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { education } from "@/lib/data";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(ref);
      const items = q<HTMLElement>(".edu-item");
      const nodes = q<HTMLElement>(".edu-node");

      gsap.fromTo(
        q(".edu-kicker"),
        { y: 16, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 82%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        q(".edu-line"),
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 78%",
            end: "bottom 66%",
            scrub: 1,
          },
        }
      );

      gsap.set(items, { y: 44, opacity: 0, scale: 0.96 });
      gsap.set(nodes, {
        scale: 0.55,
        opacity: 0,
        boxShadow: "0 0 0 0 rgb(var(--accent-rgb) / 0.45)",
      });

      items.forEach((item, i) => {
        const node = nodes[i];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        });

        tl.to(item, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.86,
          ease: "power3.out",
        });

        if (node) {
          tl.to(
            node,
            {
              scale: 1,
              opacity: 1,
              duration: 0.42,
              ease: "power3.out",
            },
            0.08
          ).fromTo(
            node,
            { boxShadow: "0 0 0 0 rgb(var(--accent-rgb) / 0.6)" },
            {
              boxShadow: "0 0 0 18px rgb(var(--accent-rgb) / 0)",
              duration: 0.74,
              ease: "power3.out",
            },
            0.12
          );
        }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="education" ref={ref} className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="edu-kicker sec-rule mb-6" aria-hidden="true" />
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-16">Formation.</h2>
      <div className="relative max-w-5xl pl-6 md:pl-10">
        <div className="edu-line absolute left-0 top-2 bottom-3 w-px origin-top bg-gradient-to-b from-accent via-white/25 to-transparent" />
        <ol className="space-y-7 md:space-y-9">
          {education.map((e, i) => (
            <li key={i} className="edu-item relative pl-8 md:pl-10">
              <span className="edu-node absolute -left-[5px] top-8 h-3 w-3 rounded-full bg-accent ring-4 ring-black" />
              <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40">
                <div className="relative w-12 h-12 rounded-lg bg-white/5 overflow-hidden mb-4">
                  <Image src={e.logo} alt={e.title} fill className="object-contain p-1.5" />
                </div>
                <h3 className="font-medium text-white mb-2">{e.title}</h3>
                <div className="mono-label mb-3">{e.period}</div>
                <p className="text-white/60 text-sm leading-relaxed">{e.desc}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
