"use client";

import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useTransform } from "framer-motion";
import FloatingIcon from "@/components/FloatingIcon";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { t, getIconLabel, type Lang } from "@/lib/i18n";

type IconSide = "left" | "right" | "center";

type SceneIcon = {
  id: string;
  src: string;
  alt: string;
  className: string;
  depth: number;
  label: string;
  side: IconSide;
};

const SCENE_ICONS: SceneIcon[] = [
  {
    id: "cubes",
    src: "/scene/rose-projets.png",
    alt: "Projects",
    className: "left-[4%] top-[16%] w-10 md:left-[6%] md:top-[15%] md:w-14 lg:left-[20%] lg:top-[16%] lg:w-24",
    depth: 40,
    label: "Projects",
    side: "left"
  },
  {
    id: "phone",
    src: "/scene/rose-experience.png",
    alt: "Experience",
    className: "left-[2%] top-[34%] w-11 md:left-[4%] md:top-[32%] md:w-14 lg:left-[18%] lg:top-[34%] lg:w-28",
    depth: 55,
    label: "Experience",
    side: "left"
  },
  {
    id: "text-card",
    src: "/scene/rose-formation.png",
    alt: "Education",
    className: "left-[6%] top-[52%] w-11 md:left-[5%] md:top-[52%] md:w-16 lg:left-[20%] lg:top-[54%] lg:w-36",
    depth: 35,
    label: "Education",
    side: "left"
  },
  {
    id: "polyhedron",
    src: "/scene/rose-apropos.png",
    alt: "About",
    className: "right-[12%] top-[18%] w-10 md:right-[18%] md:top-[14%] md:w-12 lg:left-[60%] lg:top-[12%] lg:w-24",
    depth: 25,
    label: "About",
    side: "right"
  },
  {
    id: "toggle-stack",
    src: "/scene/rose-tech.png",
    alt: "Tech Stack",
    className: "right-[2%] top-[26%] w-11 md:right-[6%] md:top-[22%] md:w-14 lg:right-[20%] lg:top-[22%] lg:w-28",
    depth: 50,
    label: "Tech Stack & Skills",
    side: "right"
  },
  {
    id: "palette",
    src: "/scene/rose-passions.png",
    alt: "Passions",
    className: "right-[5%] top-[42%] w-11 md:right-[5%] md:top-[40%] md:w-14 lg:right-[18%] lg:top-[40%] lg:w-28",
    depth: 45,
    label: "Passions",
    side: "right"
  },
  {
    id: "ai",
    src: "/scene/rose-stage.png",
    alt: "Internship",
    className: "right-[3%] top-[58%] w-11 md:right-[6%] md:top-[60%] md:w-14 lg:right-[20%] lg:top-[62%] lg:w-28",
    depth: 60,
    label: "AI & Innovation",
    side: "right"
  },
  {
    id: "dots",
    src: "/scene/rose-certifications.png",
    alt: "Certifications",
    className: "left-[8%] top-[68%] w-9 md:left-[8%] md:top-[72%] md:w-11 lg:left-[28%] lg:top-[70%] lg:w-20",
    depth: 20,
    label: "Certifications",
    side: "left"
  }
];

/* ── Section content ── */
function getSectionContent(onPreview: (url: string) => void, lang: Lang): Record<string, ReactNode> {
  return {
    polyhedron: (
      <div className="space-y-4">
        <p className="text-justify">
          {t("about_hello", lang)} <span className="text-sand">Selyan Mouhali</span>{t("about_desc", lang)}{" "}
          <span className="text-bronze">{t("about_skills", lang)}</span>{t("about_projects_combine", lang)}
        </p>
        <p className="text-base text-white/55 text-justify">{t("about_sub", lang)}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://github.com/selyan-mhli" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-sand transition-colors hover:bg-white/10">GitHub</a>
          <a href="https://www.linkedin.com/in/selyanmouhali/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-sand transition-colors hover:bg-white/10">LinkedIn</a>
        </div>
        <div className="mt-6 space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-bronze">{t("about_langTitle", lang)}</p>
          <div className="grid grid-cols-2 gap-2">
            {[
              { name: t("lang_french", lang), pct: 100 },
              { name: t("lang_english", lang), pct: 90 },
              { name: t("lang_spanish", lang), pct: 65 }
            ].map((l) => (
              <div key={l.name} className="space-y-1">
                <span className="text-sm text-white/50">{l.name}</span>
                <div className="h-1 w-full rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-bronze/70" style={{ width: `${l.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    phone: (
      <div className="space-y-6">
        {[
          {
            company: "Little Bagel",
            logo: "/scene/logo-littlebagel.webp",
            role: t("exp_littlebagel_role", lang),
            period: t("exp_littlebagel_period", lang),
            bullets: [
              t("exp_littlebagel_b1", lang),
              t("exp_littlebagel_b2", lang),
              t("exp_littlebagel_b3", lang),
            ]
          },
          {
            company: "Villas Helios",
            logo: "/scene/logo-helios.jpg",
            role: t("exp_helios_role", lang),
            period: t("exp_helios_period", lang),
            bullets: [
              t("exp_helios_b1", lang),
              t("exp_helios_b2", lang),
            ]
          },
          {
            company: "Henry Duffaut Hospital",
            logo: "/scene/logo-ch-avignon.svg",
            role: t("exp_hospital_role", lang),
            period: t("exp_hospital_period", lang),
            bullets: [
              t("exp_hospital_b1", lang),
              t("exp_hospital_b2", lang),
            ]
          },
          {
            company: "Pediatric Office",
            logo: "/scene/logo-pediatrie.png",
            role: t("exp_pediatric_role", lang),
            period: t("exp_pediatric_period", lang),
            bullets: [
              t("exp_pediatric_b1", lang),
              t("exp_pediatric_b2", lang),
            ]
          },
        ].map((exp) => (
          <div key={exp.company} className="flex items-start gap-4">
            {exp.logo ? (
              <Image src={exp.logo} alt={exp.company} width={72} height={72} className="h-12 w-12 shrink-0 rounded-lg object-contain md:h-16 md:w-16" />
            ) : (
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] md:h-16 md:w-16">
                <span className="text-xl md:text-2xl text-bronze/70">●</span>
              </div>
            )}
            <div className="flex-1 border-l-2 border-bronze/40 pl-4">
              <h4 className="text-base font-semibold text-sand">{exp.role} — {exp.company}</h4>
              <p className="mt-1 text-sm text-bronze">{exp.period}</p>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/55 text-justify">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    ),

    "text-card": (
      <div className="space-y-6">
        <div className="flex items-start gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
          <Image src="/scene/Logo_UTT_2018.svg.png" alt="UTT" width={72} height={72} className="h-12 w-12 shrink-0 rounded-lg object-contain md:h-[4.5rem] md:w-[4.5rem]" />
          <div>
            <h4 className="text-lg font-semibold text-sand">{t("edu_utt_title", lang)}</h4>
            <p className="mt-1 text-sm text-bronze">{t("edu_utt_period", lang)}</p>
            <p className="mt-2 text-base text-white/60 text-justify">{t("edu_utt_desc", lang)}</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
          <Image src="/scene/logo-mariepila.png" alt="Marie Pila" width={72} height={72} className="h-12 w-12 shrink-0 rounded-lg object-contain md:h-[4.5rem] md:w-[4.5rem]" />
          <div>
            <h4 className="text-lg font-semibold text-sand">{t("edu_mariepila_title", lang)}</h4>
            <p className="mt-1 text-sm text-bronze">{t("edu_mariepila_period", lang)}</p>
            <p className="mt-2 text-base text-white/60 text-justify">{t("edu_mariepila_desc", lang)}</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
          <Image src="/scene/logo-reynolds.png" alt="Reynolds High School" width={72} height={72} className="h-12 w-12 shrink-0 rounded-lg object-contain md:h-[4.5rem] md:w-[4.5rem]" />
          <div>
            <h4 className="text-lg font-semibold text-sand">{t("edu_reynolds_title", lang)}</h4>
            <p className="mt-1 text-sm text-bronze">{t("edu_reynolds_period", lang)}</p>
            <p className="mt-2 text-base text-white/60 text-justify">{t("edu_reynolds_desc", lang)}</p>
          </div>
        </div>
      </div>
    ),

    cubes: (
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {[
          { name: "Site_Londres_MM01", desc: t("proj_londres_desc", lang), tech: "HTML, CSS, Responsive Design", link: "https://selyan-mhli.github.io/Site_Londres_MM01/" },
          { name: "Projet_LO02", desc: t("proj_lo02_desc", lang), tech: "Java, OOP, MVC, JUnit", link: "https://github.com/selyan-mhli/Projet_LO02", noPreview: true },
          { name: "projet_Natran", desc: t("proj_natran_desc", lang), tech: "TypeScript, Node.js, Unit Testing", link: "https://selyan-mhli.github.io/projet_Natran/" },
        ].map((p) => (
          <div
            key={p.name}
            className={`group flex flex-col rounded-lg border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-bronze/40 hover:bg-bronze/[0.06] ${p.link && !p.noPreview ? "cursor-pointer" : ""}`}
            onClick={() => p.link && !p.noPreview && onPreview(p.link)}
            role={p.link && !p.noPreview ? "button" : undefined}
            tabIndex={p.link && !p.noPreview ? 0 : undefined}
            onKeyDown={(e) => { if (p.link && !p.noPreview && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); onPreview(p.link); } }}
          >
            <div className="flex items-start justify-between">
              <h4 className="text-base font-semibold text-sand group-hover:text-bronze transition-colors">{p.name}</h4>
              {p.link && (
                <a href={p.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="shrink-0 rounded-md border border-bronze/30 bg-bronze/10 px-2.5 py-1 text-[11px] text-bronze transition-colors hover:bg-bronze/25">
                  {t("proj_visit", lang)}
                </a>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55 text-justify">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.split(", ").map((techItem) => (
                <span key={techItem} className="rounded-full bg-white/[0.04] px-2.5 py-0.5 text-[10px] text-bronze/70">{techItem}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),

    "toggle-stack": (
      <div className="space-y-6">
        <p className="text-sm text-white/50 text-justify">{t("tech_intro", lang)}</p>
        {[
          { category: t("tech_frontend", lang), techs: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
          { category: t("tech_backend", lang), techs: ["Node.js", "Firebase", "Supabase", "PostgreSQL", "Stripe"] },
          { category: t("tech_aidata", lang), techs: ["Gemini API", "LangChain", "Python", "TensorFlow", "ML/DL", "Computer Vision", "LLM/RAG"] },
          { category: t("tech_tools", lang), techs: ["Git", "Vercel", "Docker", "ROS2", "Figma", "Java", "UML", "JavaSwing"] },
          { category: t("tech_webMobile", lang), techs: ["Full-Stack Dev", "REST APIs", "Real-time Systems", "PWA", "SEO"] },
          { category: t("tech_dataAnalytics", lang), techs: ["Data Pipelines", "Statistical Analysis", "Visualization", "SQL/NoSQL"] },
        ].map((cat) => (
          <div key={cat.category}>
            <h4 className="mb-2.5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-bronze">
              <span className="text-[8px] text-bronze/50">◆</span> {cat.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.techs.map((techItem) => (
                <span key={techItem} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-sand/80 transition-colors hover:border-bronze/30 hover:bg-bronze/10">{techItem}</span>
              ))}
            </div>
          </div>
        ))}
        <div className="border-t border-white/[0.06] pt-5">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-[0.15em] text-bronze">{t("tech_softSkills", lang)}</h4>
          <div className="flex flex-wrap gap-1.5">
            {[t("skill_teamwork", lang), t("skill_communication", lang), t("skill_organization", lang), t("skill_adaptability", lang), t("skill_curiosity", lang), t("skill_customer", lang)].map((item) => (
              <span key={item} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-white/60">{item}</span>
            ))}
          </div>
        </div>
      </div>
    ),

    /* palette → Passions */
    palette: (
      <div className="space-y-5">
        <p className="text-base text-white/60 text-justify">{t("passions_intro", lang)}</p>
        <div className="space-y-4">
          {[
            { emoji: "🥋", title: t("passion_karate", lang), desc: t("passion_karate_d", lang) },
            { emoji: "⚽", title: t("passion_football", lang), desc: t("passion_football_d", lang) },
            { emoji: "🏎️", title: t("passion_motorsport", lang), desc: t("passion_motorsport_d", lang) },
            { emoji: "✈️", title: t("passion_travel", lang), desc: t("passion_travel_d", lang) },
            { emoji: "💹", title: t("passion_economy", lang), desc: t("passion_economy_d", lang) },
            { emoji: "🤖", title: t("passion_ai", lang), desc: t("passion_ai_d", lang) },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <h4 className="text-lg font-semibold text-sand">{item.title}</h4>
                <p className="mt-0.5 text-base text-white/55 text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    ai: (
      <div className="space-y-4">
        <p className="text-base text-white/60 text-justify">{t("intern_intro", lang)}</p>
        <p className="text-sm text-bronze">{t("intern_keyword", lang)}</p>
        <div className="space-y-3">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="text-base font-semibold text-sand">{t("intern_stage_title", lang)}</h4>
            <p className="mt-1.5 text-sm text-white/55 text-justify">{t("intern_stage_desc", lang)}</p>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="text-base font-semibold text-sand">{t("intern_summer_title", lang)}</h4>
            <p className="mt-1.5 text-sm text-white/55 text-justify">{t("intern_summer_desc", lang)}</p>
          </div>
        </div>
        <div className="mt-4 rounded-lg border border-dashed border-bronze/20 bg-bronze/[0.03] px-5 py-4 text-center">
          <p className="text-sm text-bronze/60">{t("intern_open", lang)}</p>
        </div>
      </div>
    ),

    /* dots → Certifications */
    dots: (
      <div className="space-y-3">
        {[
          { label: t("cert_karate", lang), issuer: "", link: "", logo: "/logos/karate.svg" },
          { label: t("cert_inrs", lang), issuer: t("cert_inrs_detail", lang), link: "", logo: "/logos/inrs.png" },
          { label: t("cert_lvmh", lang), issuer: "", link: "", logo: "/logos/lvmh.svg" },
          { label: t("cert_pse1", lang), issuer: "", link: "", logo: "/logos/croix-rouge.svg" },
          { label: t("cert_linguaskill", lang), issuer: "", link: "", logo: "/logos/cambridge.png" },
          { label: t("cert_siele", lang), issuer: "", link: "", logo: "/logos/siele.png" },
        ].map((c) => {
          const inner = (
            <div className={`flex items-center gap-4 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 transition-all duration-200 ${c.link ? "hover:border-bronze/40 hover:bg-bronze/[0.06] cursor-pointer" : ""}`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                <Image src={c.logo} alt={c.label} width={44} height={44} className="object-contain max-h-11 max-w-11" />
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-sand truncate">{c.label}</p>
                {c.issuer && <p className="text-xs text-white/40 mt-0.5 truncate">{c.issuer}</p>}
              </div>
              {c.link && (
                <svg className="h-4 w-4 shrink-0 text-white/30" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
              )}
            </div>
          );
          return c.link ? (
            <a key={c.label} href={c.link} target="_blank" rel="noopener noreferrer" className="block no-underline">{inner}</a>
          ) : (
            <div key={c.label}>{inner}</div>
          );
        })}
      </div>
    )
  };
}

/* ── Cross grid for the floor area ── */
function CrossGrid() {
  const crosses = [];
  const cols = 8;
  const rows = 4;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const left = 15 + c * 10;
      const top = r * 22;
      const delay = (r * cols + c) * 0.02;
      crosses.push(
        <span
          key={`${r}-${c}`}
          className="cross-mark absolute text-white/[0.06] transition-all duration-500 hover:text-bronze/60 hover:drop-shadow-[0_0_8px_rgba(183,138,89,0.5)]"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            fontSize: "1.1rem",
            transitionDelay: `${delay}s`
          }}
        >
          ✦
        </span>
      );
    }
  }
  return (
    <div className="absolute bottom-0 left-0 right-0 z-[5] h-[30%] overflow-hidden">
      <div className="relative h-full w-full">{crosses}</div>
    </div>
  );
}

/* ── Language switcher ── */
const FLAGS: Record<Lang, string> = { fr: "🇫🇷", en: "🇬🇧", es: "🇪🇸", ko: "🇰🇷" };
const LANG_ORDER: Lang[] = ["en", "fr", "es", "ko"];

function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const others = LANG_ORDER.filter((l) => l !== lang);

  return (
    <div className="relative flex flex-col-reverse items-center gap-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Change language"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
      >
        {FLAGS[lang]}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25 }}
          >
            {others.map((l, i) => (
              <motion.button
                key={l}
                type="button"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => { setLang(l); setOpen(false); }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg transition-colors hover:bg-white/10 hover:border-bronze/40"
              >
                {FLAGS[l]}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const sceneVariants = {
  idle: { x: "0%", scale: 1 },
  shiftLeft: { x: "-18%", scale: 0.88 },
  shiftRight: { x: "18%", scale: 0.88 },
};

/* ── Mobile burger menu (improved for tablet) ── */
function MobileMenu({
  lang,
  setLang,
  onContact,
  onIconClick,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  onContact: () => void;
  onIconClick: (icon: SceneIcon) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-sand/70 transition-colors hover:bg-white/10"
        aria-label="Menu"
      >
        {open ? "✕" : "☰"}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute right-0 top-12 min-w-[220px] overflow-hidden rounded-2xl border border-white/[0.08] bg-obsidian/95 backdrop-blur-xl p-4 shadow-2xl"
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Section navigation */}
            <div className="space-y-1 mb-3">
              <p className="text-[9px] uppercase tracking-[0.2em] text-bronze/50 mb-2 px-1">Explore</p>
              {SCENE_ICONS.map((icon) => (
                <button
                  key={icon.id}
                  type="button"
                  onClick={() => { onIconClick(icon); setOpen(false); }}
                  className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs text-sand/70 transition-colors hover:bg-white/[0.06] hover:text-sand"
                >
                  <Image src={icon.src} alt={icon.alt} width={24} height={24} className="h-6 w-6 object-contain" />
                  <span>{getIconLabel(icon.id, lang)}</span>
                </button>
              ))}
            </div>

            <div className="border-t border-white/[0.06] pt-3 space-y-3">
              {/* Language switcher */}
              <div className="flex items-center justify-center gap-2">
                {LANG_ORDER.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLang(l)}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition-colors ${
                      l === lang ? "border-bronze/50 bg-bronze/15" : "border-white/10 bg-white/5"
                    }`}
                  >
                    {FLAGS[l]}
                  </button>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a href="https://github.com/selyan-mhli" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-sand">
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/selyanmouhali/" target="_blank" rel="noopener noreferrer" className="text-white/40 transition-colors hover:text-sand">
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>

              {/* Contact CTA */}
              <button
                type="button"
                onClick={() => { onContact(); setOpen(false); }}
                className="w-full rounded-full border border-bronze/30 bg-bronze/10 py-2 text-xs font-medium text-bronze/70 transition-colors hover:bg-bronze/20 hover:text-bronze"
              >
                {t("openToWork", lang)}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const springTransition = {
  type: "spring" as const,
  stiffness: 80,
  damping: 22,
  mass: 0.9
};

export default function HeroScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const { x, y } = useMouseParallax(sectionRef, { enabled: true });

  const [activeIcon, setActiveIcon] = useState<SceneIcon | null>(null);
  const [panelSide, setPanelSide] = useState<IconSide | null>(null);
  const [isWide, setIsWide] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [showContact, setShowContact] = useState(false);
  const [lang, setLang] = useState<Lang>("en");
  const isOpen = !!activeIcon;

  useEffect(() => {
    const check = () => setIsWide(window.innerWidth > 1340);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const sectionContent = getSectionContent(setPreviewUrl, lang);

  const handleIconClick = useCallback((icon: SceneIcon) => {
    setActiveIcon(icon);
    setPanelSide(icon.side);
  }, []);

  const handleClose = useCallback(() => {
    setActiveIcon(null);
    setPanelSide(null);
  }, []);

  const avatarX = useTransform(x, (v) => v * 12);
  const avatarY = useTransform(y, (v) => v * 12);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black" aria-label="Portfolio of Selyan Mouhali">
      <motion.div
        className="absolute inset-0"
        variants={sceneVariants}
        animate={
          isWide && panelSide === "left"
            ? "shiftRight"
            : isWide && panelSide === "right"
              ? "shiftLeft"
              : "idle"
        }
        transition={springTransition}
      >
        <div className="absolute inset-0 bg-black" />

        {/* Glow behind avatar */}
        <div className="pointer-events-none absolute inset-0 z-[8]" aria-hidden="true">
          <div className="absolute left-1/2 top-[38%] h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bronze/20 blur-[120px]" />
          <div className="absolute left-1/2 top-[42%] h-[30vh] w-[30vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-copper/25 blur-[80px]" />
          <div className="absolute left-1/2 top-[36%] h-[18vh] w-[18vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-olive/20 blur-[60px]" />
        </div>

        {/* Avatar with parallax */}
        <motion.div
          className="absolute inset-0 z-10"
          style={{ x: avatarX, y: avatarY }}
        >
          <Image
            src="/scene/selyan_avatar.png"
            alt="Selyan Mouhali mobile"
            fill
            priority
            fetchPriority="high"
            className="object-contain object-center scale-[1.05] translate-y-[4%] min-[501px]:scale-[1.2] md:hidden"
            sizes="(max-width: 500px) 100vw, 50vw"
          />
          <Image
            src="/scene/selyan_avatar.png"
            alt="Selyan Mouhali tablet"
            fill
            priority
            fetchPriority="high"
            className="hidden object-contain object-center scale-[1.08] translate-y-[2%] md:block lg:hidden"
            sizes="(max-width: 1024px) 80vw, 50vw"
          />
          <Image
            src="/scene/selyan_avatar.png"
            alt="Selyan Mouhali desktop"
            fill
            priority
            fetchPriority="high"
            className="hidden object-contain object-center lg:block"
            sizes="50vw"
          />
        </motion.div>

        <CrossGrid />

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(circle_at_50%_44%,rgba(0,0,0,0)_24%,rgba(0,0,0,0.42)_68%,rgba(0,0,0,0.85)_100%)]" aria-hidden="true" />

        {/* Floating icons */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              className="absolute inset-0 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {SCENE_ICONS.map((icon) => (
                <FloatingIcon
                  key={icon.id}
                  src={icon.src}
                  alt={icon.alt}
                  className={icon.className}
                  label={getIconLabel(icon.id, lang)}
                  side={icon.side}
                  mouseX={x}
                  mouseY={y}
                  depth={icon.depth}
                  onClick={() => handleIconClick(icon)}
                  disabled={false}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Content panel */}
      <AnimatePresence>
        {activeIcon && panelSide && isWide && (
          /* ── Wide (>1340px): side-sliding panel with padding ── */
          <motion.div
            key={activeIcon.id}
            className={`fixed z-[60] flex flex-col ${
              panelSide === "left" ? "left-4" : "right-4"
            }`}
            style={{ width: "46vw", top: "1rem", bottom: "1rem" }}
            initial={{ x: panelSide === "left" ? "-110%" : "110%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: panelSide === "left" ? "-110%" : "110%", opacity: 0 }}
            transition={springTransition}
          >
            <div className="glass-panel relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-8 lg:p-10 shadow-ambient border border-white/[0.06]">
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close panel"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand/70 transition-colors hover:bg-white/10 hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
              >
                ✕
              </button>

              <div className="mb-4 flex items-center gap-3">
                <Image src={activeIcon.src} alt={activeIcon.alt} width={40} height={40} className="h-10 w-10 object-contain" />
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-bronze">
                    {getIconLabel(activeIcon.id, lang)}
                  </p>
                  <h2 className="font-[var(--font-display)] text-2xl font-semibold text-sand lg:text-4xl">
                    {getIconLabel(activeIcon.id, lang)}
                  </h2>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-1 text-base leading-relaxed text-white/60 lg:text-lg">
                {sectionContent[activeIcon.id] ?? (
                  <p>{t("comingSoonFor", lang)} <span className="text-sand">{getIconLabel(activeIcon.id, lang)}</span>.</p>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {activeIcon && !isWide && (
          /* ── Narrow (1024–1340px): centered popup ── */
          <motion.div
            key={`center-${activeIcon.id}`}
            className="fixed inset-0 z-[60] flex items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label={getIconLabel(activeIcon.id, lang)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={handleClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={springTransition}
            >
              <div className="glass-panel relative flex h-full w-full flex-col overflow-hidden rounded-2xl p-8 shadow-ambient">
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close panel"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand/70 transition-colors hover:bg-white/10 hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                >
                  ✕
                </button>

                <div className="mb-4 flex items-center gap-3">
                  <Image src={activeIcon.src} alt={activeIcon.alt} width={40} height={40} className="h-10 w-10 object-contain" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-bronze">
                      {getIconLabel(activeIcon.id, lang)}
                    </p>
                    <h2 className="font-[var(--font-display)] text-2xl font-semibold text-sand lg:text-4xl">
                      {getIconLabel(activeIcon.id, lang)}
                    </h2>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-1 text-base leading-relaxed text-white/60 lg:text-lg">
                  {sectionContent[activeIcon.id] ?? (
                    <p>{t("comingSoonFor", lang)} <span className="text-sand">{getIconLabel(activeIcon.id, lang)}</span>.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name — above avatar */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute top-[6%] inset-x-0 z-30 flex justify-center px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h1 className="font-[var(--font-display)] text-xl font-semibold tracking-[0.12em] text-bronze/80 drop-shadow-[0_2px_12px_rgba(183,138,89,0.25)] md:text-3xl lg:text-4xl">
              {t("portfolioTitle", lang)}
            </h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint — bottom center */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute bottom-6 inset-x-0 z-30 flex justify-center md:bottom-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.15em] text-white/25 md:text-xs">
              {t("clickToExplore", lang)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile burger menu — top right */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute right-4 top-4 z-30 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <MobileMenu lang={lang} setLang={setLang} onContact={() => setShowContact(true)} onIconClick={handleIconClick} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Language switcher — bottom left (desktop only) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute bottom-6 left-8 z-30 hidden lg:block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <LangSwitcher lang={lang} setLang={setLang} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social links — bottom right (desktop only) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="absolute bottom-6 right-8 z-30 hidden items-center gap-4 lg:flex"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="https://github.com/selyan-mhli" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="text-white/30 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/selyanmouhali/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="text-white/30 transition-colors hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <button
              type="button"
              onClick={() => setShowContact(true)}
              className="rounded-full border border-bronze/30 bg-bronze/10 px-4 py-1.5 text-xs font-medium text-bronze/70 transition-all duration-300 hover:border-bronze/60 hover:bg-bronze/20 hover:text-bronze hover:shadow-[0_0_16px_rgba(183,138,89,0.3)]"
            >
              {t("openToWork", lang)}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact modal */}
      <AnimatePresence>
        {showContact && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setShowContact(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Contact"
          >
            <motion.div
              className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-obsidian p-8 shadow-2xl md:p-10"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setShowContact(false)}
                aria-label="Close contact"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
              >
                ✕
              </button>
              <h3 className="font-[var(--font-display)] text-2xl font-semibold text-sand">{t("getInTouch", lang)}</h3>
              <p className="mt-2 text-base text-white/50 text-justify">{t("contactDesc", lang)}</p>
              <div className="mt-6 space-y-3">
                <a href="mailto:selyan.mouhali@gmail.com" className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-sand transition-colors hover:border-bronze/30 hover:bg-bronze/[0.06]">
                  <svg className="h-5 w-5 shrink-0 text-bronze" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  selyan.mouhali@gmail.com
                </a>
                <a href="tel:+33650596632" className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-sand transition-colors hover:border-bronze/30 hover:bg-bronze/[0.06]">
                  <svg className="h-5 w-5 shrink-0 text-bronze" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  +33 6 50 59 66 32
                </a>
                <a href="https://www.linkedin.com/in/selyanmouhali/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-sand transition-colors hover:border-bronze/30 hover:bg-bronze/[0.06]">
                  <svg className="h-5 w-5 shrink-0 text-bronze" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  Selyan Mouhali
                </a>
              </div>
              {/* LinkedIn QR Code */}
              <div className="mt-6 flex flex-col items-center gap-2">
                <p className="text-xs uppercase tracking-[0.2em] text-bronze/70">LinkedIn</p>
                <div className="rounded-xl border border-white/10 bg-white p-3">
                  <Image src="/scene/linkedin-qr.svg" alt="QR code LinkedIn Selyan Mouhali" width={140} height={140} className="h-[140px] w-[140px]" />
                </div>
                <p className="text-[10px] text-white/30">{t("scanToConnect", lang)}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project preview modal */}
      <AnimatePresence>
        {previewUrl && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div
              className="relative h-[90vh] w-[95vw] max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-obsidian shadow-2xl md:h-[80vh] md:w-[85vw]"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <p className="text-xs text-white/40 select-all">{previewUrl}</p>
                <div className="flex items-center gap-2">
                  <a href={previewUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[10px] text-sand/70 transition-colors hover:bg-white/10">
                    {t("proj_visit", lang)}
                  </a>
                  <button type="button" onClick={() => setPreviewUrl(null)} className="flex h-7 w-7 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-sand">✕</button>
                </div>
              </div>
              <iframe
                src={previewUrl}
                title="Site preview"
                className="h-[calc(100%-3rem)] w-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
