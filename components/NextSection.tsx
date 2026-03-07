"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FEATURE_CARDS = [
  {
    title: "Visual Identity",
    text: "A violet & rose cyber palette with subtle neon accents, dark immersive surfaces and premium elegance."
  },
  {
    title: "Immersive Interaction",
    text: "Progressive mouse parallax and smooth transitions calibrated for a high-end feel."
  },
  {
    title: "Modern Stack",
    text: "Next.js App Router + Tailwind + Framer Motion + GSAP ScrollTrigger in a clean, maintainable codebase."
  }
];

gsap.registerPlugin(ScrollTrigger);

export default function NextSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) {
      return;
    }

    const context = gsap.context(() => {
      gsap.from("[data-reveal='heading']", {
        opacity: 0,
        y: 48,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 74%",
          once: true
        }
      });

      gsap.from("[data-reveal='card']", {
        opacity: 0,
        y: 58,
        duration: 0.95,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true
        }
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#08070f] py-24 md:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_6%,rgba(124,92,172,0.22),rgba(124,92,172,0)_46%),radial-gradient(circle_at_84%_0%,rgba(192,132,252,0.18),rgba(192,132,252,0)_48%),linear-gradient(180deg,#08070f_0%,#0f0d1a_100%)]" />

      <div className="section-shell">
        <div data-reveal="heading" className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.3em] text-bronze md:text-xs">
            Next Section
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-sand md:text-5xl">
            Explore The Portfolio
          </h2>
          <p className="mt-4 text-sm text-white/72 md:text-base">
            Built with attention to detail, premium aesthetics and immersive
            interactions that showcase Selyan&apos;s profile and projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.title}
              data-reveal="card"
              className="glass-panel p-6 shadow-ambient"
            >
              <h3 className="text-xl text-sand">{card.title}</h3>
              <p className="mt-3 text-sm text-white/70">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
