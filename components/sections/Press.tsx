"use client";

import { ArrowUpRight } from "lucide-react";
import { press } from "@/lib/data";

function LeParisienLogo() {
  return (
    <div className="inline-flex w-[132px] shrink-0 flex-col">
      <div className="bg-[#0064c8] px-3 py-2 text-center">
        <span
          className="text-[22px] font-bold leading-none tracking-tight text-white"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Le Parisien
        </span>
      </div>
      <div className="h-[3px] w-full bg-[#e2001a]" />
    </div>
  );
}

export default function Press() {
  return (
    <section id="presse" className="relative py-28 md:py-32 px-6 md:px-12 lg:px-20">
      <div className="sec-rule mb-6" aria-hidden="true" />
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-10">Dans la presse.</h2>

      <div className="border-y border-white/10 divide-y divide-white/10">
        {press.map((item) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:gap-10"
          >
            {item.outlet === "Le Parisien" ? (
              <LeParisienLogo />
            ) : (
              <div className="mono-label flex w-[132px] shrink-0 items-center border-l-2 border-accent pl-4 py-1 !text-xs !text-white/55">
                Article
              </div>
            )}

            <div className="max-w-2xl">
              <h3 className="serif-display flex items-center gap-2 text-2xl md:text-3xl text-sand transition-colors group-hover:text-accent">
                {item.outlet}
                <ArrowUpRight
                  size={22}
                  className="text-white/40 transition-colors group-hover:text-accent"
                />
              </h3>

              <p className="mt-3 max-w-xl text-lg leading-snug text-white/70">
                {item.title}
              </p>

              <p className="mt-3 text-white/55">{item.date}</p>

              <span className="mt-5 inline-block border-b border-white/25 pb-0.5 text-sm text-white/70 transition-colors group-hover:border-accent group-hover:text-accent">
                Lire l&apos;article ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
