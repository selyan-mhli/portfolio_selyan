"use client";

import ScrambleText from "../ScrambleText";
import { about, languages } from "@/lib/data";
import { GraduationCap, MapPin, Calendar, Languages } from "lucide-react";

const stats = [
  { value: "2e", label: "Année · UTT" },
  { value: "3", label: "Langues" },
  { value: "5+", label: "Projets" },
  { value: "2027", label: "Dispo stage" },
];

const facts = [
  { icon: GraduationCap, label: "École", value: "UTT — Troyes" },
  { icon: Calendar, label: "Année", value: "2e année ingénieur" },
  { icon: MapPin, label: "Basé à", value: "Troyes · France" },
  { icon: Languages, label: "Langues", value: languages.join(" · ") },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="mono-label mb-6">01 / À propos</div>
      <ScrambleText
        as="h2"
        text="Curieux, rigoureux, motivé."
        className="serif-display text-[clamp(2rem,6vw,5rem)] block mb-12"
      />

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* Main narrative */}
        <div className="lg:col-span-3">
          <p className="text-white/85 text-lg md:text-2xl leading-relaxed font-light text-justify hyphens-auto">
            {about.hello}{" "}
            <span className="text-accent font-normal">{about.name}</span>, étudiant en{" "}
            <span className="text-white">deuxième année d'école d'ingénieur</span> à
            l'Université de Technologie de Troyes. Curieux, rigoureux et motivé, j'aime{" "}
            <span className="text-white">construire des projets numériques</span>,
            découvrir de nouvelles technologies et apprendre par la pratique.
          </p>
          <p className="mt-6 text-white/55 text-base md:text-lg leading-relaxed text-justify hyphens-auto">
            {about.sub}
          </p>

          {/* Signature quote */}
          <blockquote className="mt-10 pl-5 border-l-2 border-accent/60">
            <p className="serif-display text-xl md:text-2xl text-white/80 italic">
              « J'apprends en construisant. »
            </p>
          </blockquote>
        </div>

        {/* Quick facts sidebar */}
        <aside className="lg:col-span-2 space-y-3">
          {facts.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 text-accent flex items-center justify-center">
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="mono-label !text-white/45 !text-[10px]">{label}</div>
                <div className="text-sm md:text-base text-white/90 mt-0.5 truncate">
                  {value}
                </div>
              </div>
            </div>
          ))}
        </aside>
      </div>

      {/* Stats row */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="serif-display text-4xl md:text-6xl text-white leading-none">
              {s.value}
            </span>
            <span className="mono-label !text-white/50 mt-2">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
