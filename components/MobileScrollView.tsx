"use client";

import { useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, AnimatePresence, type MotionValue, useTransform } from "framer-motion";
import { t, getIconLabel, type Lang } from "@/lib/i18n";
import { useMouseParallax } from "@/hooks/useMouseParallax";

/* ── Language flags ── */
const FLAGS: Record<Lang, string> = { fr: "🇫🇷", en: "🇬🇧", es: "🇪🇸", ko: "🇰🇷" };
const LANG_ORDER: Lang[] = ["en", "fr", "es", "ko"];

type MobileIcon = {
  id: string;
  src: string;
  sectionId: string;
  left: string;
  top: string;
  floatDelay: number;
  depth: number;
};

const MOBILE_ICONS: MobileIcon[] = [
  { id: "polyhedron", src: "/scene/rose-apropos.png", sectionId: "about", left: "22%", top: "10%", floatDelay: 0, depth: 18 },
  { id: "text-card", src: "/scene/rose-formation.png", sectionId: "education", left: "72%", top: "8%", floatDelay: 0.5, depth: 16 },
  { id: "phone", src: "/scene/rose-experience.png", sectionId: "experience", left: "14%", top: "30%", floatDelay: 1.2, depth: 22 },
  { id: "dots", src: "/scene/rose-certifications.png", sectionId: "certifications", left: "76%", top: "32%", floatDelay: 0.8, depth: 14 },
  { id: "toggle-stack", src: "/scene/rose-tech.png", sectionId: "tech-stack", left: "12%", top: "60%", floatDelay: 1.5, depth: 20 },
  { id: "cubes", src: "/scene/rose-projets.png", sectionId: "projects", left: "78%", top: "58%", floatDelay: 0.3, depth: 17 },
  { id: "ai", src: "/scene/rose-stage.png", sectionId: "ai", left: "18%", top: "78%", floatDelay: 1.8, depth: 23 },
  { id: "palette", src: "/scene/rose-passions.png", sectionId: "passions", left: "72%", top: "76%", floatDelay: 1.0, depth: 19 },
];

function MobileFloatingIcon({
  icon,
  lang,
  mouseX,
  mouseY,
  onSelect,
}: {
  icon: MobileIcon;
  lang: Lang;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  onSelect: (id: string) => void;
}) {
  const label = getIconLabel(icon.id, lang);
  const translateX = useTransform(mouseX, (v) => v * icon.depth);
  const translateY = useTransform(mouseY, (v) => v * icon.depth);

  return (
    <m.div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: icon.left, top: icon.top, x: translateX, y: translateY }}
      initial={{ opacity: 0, scale: 0.84 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: 0.12 + icon.floatDelay * 0.22 }}
    >
      <m.button
        type="button"
        onClick={() => onSelect(icon.id)}
        aria-label={label}
        className="group flex flex-col items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bronze"
        whileTap={{ scale: 0.9 }}
        animate={{ x: [0, 3, 0, -3, 0], y: [0, -8, 0, 6, 0] }}
        transition={{
          duration: 5 + icon.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
          delay: icon.floatDelay
        }}
      >
        <Image
          src={icon.src}
          alt={label}
          width={80}
          height={80}
          className="h-[5rem] w-[5rem] object-contain drop-shadow-[0_8px_16px_rgba(192,132,252,0.38)]"
        />
        <span className="max-w-[86px] text-center text-[10px] font-medium leading-tight tracking-wide text-copper drop-shadow-[0_2px_10px_rgba(192,132,252,0.35)]">
          {label}
        </span>
      </m.button>
    </m.div>
  );
}

/* ── Section definition ── */
type SectionDef = {
  id: string;
  iconId: string;
  content: ReactNode;
};

/* ── Build sections content ── */
function buildSections(
  lang: Lang,
  onPreview: (url: string) => void
): SectionDef[] {
  return [
    {
      id: "about",
      iconId: "polyhedron",
      content: (
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-white/70 text-justify">
            {t("about_hello", lang)}{" "}
            <span className="text-sand">Selyan Mouhali</span>
            {t("about_desc", lang)}{" "}
            <span className="text-bronze">{t("about_skills", lang)}</span>
            {t("about_projects_combine", lang)}
          </p>
          <p className="text-sm text-white/50 text-justify">{t("about_sub", lang)}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://github.com/selyan-mhli"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-sand transition-colors hover:bg-white/10"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/selyanmouhali/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-sand transition-colors hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-xs uppercase tracking-[0.2em] text-bronze">
              {t("about_langTitle", lang)}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: t("lang_french", lang), pct: 100 },
                { name: t("lang_english", lang), pct: 90 },
                { name: t("lang_spanish", lang), pct: 65 },
              ].map((l) => (
                <div key={l.name} className="space-y-1">
                  <span className="text-xs text-white/50">{l.name}</span>
                  <div className="h-1 w-full rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-bronze/70"
                      style={{ width: `${l.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      iconId: "text-card",
      content: (
        <div className="space-y-4">
          {[
            {
              logo: "/scene/Logo_UTT_2018.svg.png",
              alt: "UTT",
              title: t("edu_utt_title", lang),
              period: t("edu_utt_period", lang),
              desc: t("edu_utt_desc", lang),
            },
            {
              logo: "/scene/logo-mariepila.png",
              alt: "Marie Pila",
              title: t("edu_mariepila_title", lang),
              period: t("edu_mariepila_period", lang),
              desc: t("edu_mariepila_desc", lang),
            },
            {
              logo: "/scene/logo-reynolds.png",
              alt: "Reynolds",
              title: t("edu_reynolds_title", lang),
              period: t("edu_reynolds_period", lang),
              desc: t("edu_reynolds_desc", lang),
            },
          ].map((e) => (
            <div
              key={e.alt}
              className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <Image
                src={e.logo}
                alt={e.alt}
                width={56}
                height={56}
                className="h-12 w-12 shrink-0 rounded-lg object-contain"
              />
              <div>
                <h4 className="text-base font-semibold text-sand">
                  {e.title}
                </h4>
                <p className="mt-0.5 text-xs text-bronze">{e.period}</p>
                <p className="mt-1.5 text-sm text-white/55 text-justify">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "experience",
      iconId: "phone",
      content: (
        <div className="space-y-5">
          {[
            {
              company: "Néréides",
              logoSrc: "/scene/logo-nereides.svg",
              role: t("exp_nereides_role", lang),
              period: t("exp_nereides_period", lang),
              bullets: [
                t("exp_nereides_b1", lang),
                t("exp_nereides_b2", lang),
              ],
            },
            {
              company: "Ici Store",
              logoSrc: "/scene/logo-icistore.svg",
              role: t("exp_icistore_role", lang),
              period: t("exp_icistore_period", lang),
              bullets: [
                t("exp_icistore_b1", lang),
                t("exp_icistore_b2", lang),
              ],
            },
            {
              company: "Little Bagel",
              logoSrc: "/scene/logo-littlebagel.webp",
              role: t("exp_littlebagel_role", lang),
              period: t("exp_littlebagel_period", lang),
              bullets: [
                t("exp_littlebagel_b1", lang),
                t("exp_littlebagel_b2", lang),
                t("exp_littlebagel_b3", lang),
              ],
            },
            {
              company: "Villas Helios",
              logoSrc: "/scene/logo-helios.jpg",
              role: t("exp_helios_role", lang),
              period: t("exp_helios_period", lang),
              bullets: [
                t("exp_helios_b1", lang),
                t("exp_helios_b2", lang),
              ],
            },
            {
              company: "Henry Duffaut Hospital",
              logoSrc: "/scene/logo-ch-avignon.svg",
              role: t("exp_hospital_role", lang),
              period: t("exp_hospital_period", lang),
              bullets: [
                t("exp_hospital_b1", lang),
                t("exp_hospital_b2", lang),
              ],
            },
            {
              company: "Pediatric Office",
              logoSrc: "/scene/logo-pediatrie.png",
              role: t("exp_pediatric_role", lang),
              period: t("exp_pediatric_period", lang),
              bullets: [
                t("exp_pediatric_b1", lang),
                t("exp_pediatric_b2", lang),
              ],
            },
          ].map((exp) => (
            <div key={exp.company} className="flex items-start gap-3">
              {exp.logoSrc ? (
                <Image
                  src={exp.logoSrc}
                  alt={exp.company}
                  width={48}
                  height={48}
                  className="h-11 w-11 shrink-0 rounded-lg object-contain"
                />
              ) : (
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <span className="text-lg text-bronze/70">●</span>
                </div>
              )}
              <div className="flex-1 border-l-2 border-bronze/40 pl-3">
                <h4 className="text-sm font-semibold text-sand">
                  {exp.role} — {exp.company}
                </h4>
                <p className="mt-0.5 text-xs text-bronze">{exp.period}</p>
                <ul className="mt-1.5 list-inside list-disc space-y-0.5 text-xs text-white/55 text-justify">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "certifications",
      iconId: "dots",
      content: (
        <div className="space-y-2">
          {[
            { label: t("cert_karate", lang), issuer: "", link: "", logo: "/logos/karate.svg" },
            { label: t("cert_inrs", lang), issuer: t("cert_inrs_detail", lang), link: "", logo: "/logos/inrs.png" },
            { label: t("cert_lvmh", lang), issuer: "", link: "", logo: "/logos/lvmh-inside.svg" },
            { label: t("cert_pse1", lang), issuer: "", link: "", logo: "/logos/croix-rouge.svg" },
            { label: t("cert_linguaskill", lang), issuer: "", link: "", logo: "/logos/cambridge.svg" },
            { label: t("cert_siele", lang), issuer: "", link: "", logo: "/logos/siele.png" },
          ].map((c) => {
            const inner = (
              <div className={`flex items-center gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-all duration-200 ${c.link ? "active:bg-bronze/[0.08]" : ""}`}>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Image src={c.logo} alt={c.label} width={36} height={36} className="object-contain max-h-9 max-w-9" />
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-sand truncate">{c.label}</p>
                  {c.issuer && <p className="text-[10px] text-white/40 mt-0.5 truncate">{c.issuer}</p>}
                </div>
                {c.link && (
                  <svg className="h-3.5 w-3.5 shrink-0 text-white/25" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
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
      ),
    },
    {
      id: "tech-stack",
      iconId: "toggle-stack",
      content: (
        <div className="space-y-5">
          <p className="text-xs text-white/50 text-justify">{t("tech_intro", lang)}</p>
          {[
            {
              cat: t("tech_frontend", lang),
              techs: ["React", "Next.js", "TypeScript", "TailwindCSS"],
            },
            {
              cat: t("tech_backend", lang),
              techs: ["Node.js", "Firebase", "Supabase", "PostgreSQL", "Stripe"],
            },
            {
              cat: t("tech_aidata", lang),
              techs: ["Gemini API", "LangChain", "Python", "TensorFlow", "ML/DL", "Computer Vision", "LLM/RAG"],
            },
            {
              cat: t("tech_tools", lang),
              techs: ["Git", "Vercel", "Docker", "ROS2", "Figma", "Java", "UML", "JavaSwing"],
            },
            {
              cat: t("tech_webMobile", lang),
              techs: ["Full-Stack Dev", "REST APIs", "Real-time Systems", "PWA", "SEO"],
            },
            {
              cat: t("tech_dataAnalytics", lang),
              techs: ["Data Pipelines", "Statistical Analysis", "Visualization", "SQL/NoSQL"],
            },
          ].map((g) => (
            <div key={g.cat}>
              <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze">
                <span className="text-[7px] text-bronze/50">◆</span> {g.cat}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {g.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-sand/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="border-t border-white/[0.06] pt-4">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-bronze">
              {t("tech_softSkills", lang)}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[t("skill_teamwork", lang), t("skill_communication", lang), t("skill_organization", lang), t("skill_adaptability", lang), t("skill_curiosity", lang), t("skill_customer", lang)].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-0.5 text-[10px] text-white/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "projects",
      iconId: "cubes",
      content: (
        <div className="space-y-3">
          {[
            {
              name: "Site_Londres_MM01",
              desc: t("proj_londres_desc", lang),
              tech: "HTML, CSS, Responsive Design",
              link: "https://selyan-mhli.github.io/Site_Londres_MM01/",
            },
            {
              name: "Projet_LO02",
              desc: t("proj_lo02_desc", lang),
              tech: "Java, OOP, MVC, JUnit",
              link: "https://github.com/selyan-mhli/Projet_LO02",
              noPreview: true,
            },
            {
              name: "projet_Natran",
              desc: t("proj_natran_desc", lang),
              tech: "TypeScript, Node.js, Unit Testing",
              link: "https://selyan-mhli.github.io/projet_Natran/",
            },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4"
            >
              <div className="flex items-start justify-between">
                <h4 className="text-sm font-semibold text-sand">{p.name}</h4>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (!p.noPreview) {
                        e.preventDefault();
                        onPreview(p.link!);
                      }
                    }}
                    className="shrink-0 rounded-md border border-bronze/30 bg-bronze/10 px-2 py-0.5 text-[10px] text-bronze"
                  >
                    {t("proj_visit", lang)}
                  </a>
                )}
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-white/55 text-justify">
                {p.desc}
              </p>
              <div className="mt-2 flex flex-wrap gap-1">
                {p.tech.split(", ").map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[9px] text-bronze/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      id: "ai",
      iconId: "ai",
      content: (
        <div className="space-y-3">
          <p className="text-sm text-white/60 text-justify">
            {t("intern_intro", lang)}
          </p>
          <p className="text-xs text-bronze">{t("intern_keyword", lang)}</p>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="text-sm font-semibold text-sand">
              {t("intern_stage_title", lang)}
            </h4>
            <p className="mt-1 text-xs text-white/55 text-justify">
              {t("intern_stage_desc", lang)}
            </p>
          </div>
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
            <h4 className="text-sm font-semibold text-sand">
              {t("intern_summer_title", lang)}
            </h4>
            <p className="mt-1 text-xs text-white/55 text-justify">
              {t("intern_summer_desc", lang)}
            </p>
          </div>
          <div className="rounded-lg border border-dashed border-bronze/20 bg-bronze/[0.03] px-4 py-3 text-center">
            <p className="text-xs text-bronze/60">
              {t("intern_open", lang)}
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "passions",
      iconId: "palette",
      content: (
        <div className="space-y-4">
          <p className="text-sm text-white/60 text-justify">{t("passions_intro", lang)}</p>
          {[
            { emoji: "🥋", title: t("passion_karate", lang), desc: t("passion_karate_d", lang) },
            { emoji: "⚽", title: t("passion_football", lang), desc: t("passion_football_d", lang) },
            { emoji: "🏎️", title: t("passion_motorsport", lang), desc: t("passion_motorsport_d", lang) },
            { emoji: "✈️", title: t("passion_travel", lang), desc: t("passion_travel_d", lang) },
            { emoji: "💹", title: t("passion_economy", lang), desc: t("passion_economy_d", lang) },
            { emoji: "🤖", title: t("passion_ai", lang), desc: t("passion_ai_d", lang) },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-3">
              <span className="text-xl">{item.emoji}</span>
              <div>
                <h4 className="text-sm font-semibold text-sand">
                  {item.title}
                </h4>
                <p className="mt-0.5 text-xs text-white/55 text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  ];
}

/* ── Main MobileScrollView — popup-based (like tablet) ── */
export default function MobileScrollView() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lang, setLang] = useState<Lang>("en");
  const [showContact, setShowContact] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const [activeIconId, setActiveIconId] = useState<string | null>(null);
  const { x, y } = useMouseParallax(sectionRef, { stiffness: 95, damping: 24, mass: 0.9 });

  const sections = buildSections(lang, setPreviewUrl);
  const activeSection = sections.find((s) => s.iconId === activeIconId) ?? null;
  const activeIcon = MOBILE_ICONS.find((i) => i.id === activeIconId) ?? null;

  return (
    <LazyMotion features={domAnimation}>
    <div ref={sectionRef} className="relative h-[100dvh] overflow-hidden bg-obsidian" role="main" aria-label="Portfolio of Selyan Mouhali">
      {/* Background — smartphone without avatar */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" aria-hidden="true">
        <Image
          src="/scene/0632eb4c-b335-45ce-9b5b-2d5954c0b996.png"
          alt=""
          fill
          priority
          fetchPriority="high"
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* ── Title — CSS fade-in (no JS animation cost) ── */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <h1 className="font-[var(--font-display)] text-[2rem] font-semibold tracking-[0.10em] text-copper text-center leading-tight drop-shadow-[0_3px_18px_rgba(192,132,252,0.5)] animate-fade-in-title">
          {t("portfolioTitle", lang)}
          <span className="inline-block w-[2px] h-[1.1em] bg-copper/85 align-middle ml-0.5 animate-blink" />
        </h1>
      </div>

      {/* ── Floating icons — motion + parallax (desktop-like) ── */}
      {!activeIconId && MOBILE_ICONS.map((icon) => (
        <MobileFloatingIcon
          key={icon.id}
          icon={icon}
          lang={lang}
          mouseX={x}
          mouseY={y}
          onSelect={setActiveIconId}
        />
      ))}

      {/* ── Bottom bar ── */}
      <AnimatePresence>
        {!activeIconId && (
          <m.div
            className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-between px-3 pb-4 pt-8 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
          {/* Language switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((p) => !p)}
              aria-label="Change language"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-bronze/40 bg-bronze/15 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            >
              {FLAGS[lang]}
            </button>
            <AnimatePresence>
              {langOpen && (
                <m.div
                  className="absolute bottom-0 left-10 flex flex-col gap-1 rounded-xl border border-white/10 bg-obsidian p-1.5 shadow-xl"
                  initial={{ opacity: 0, x: -6, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -6, scale: 0.9 }}
                  transition={{ duration: 0.15 }}
                >
                  {LANG_ORDER.filter((l) => l !== lang).map((l) => (
                    <button
                      key={l}
                      type="button"
                      onClick={() => { setLang(l); setLangOpen(false); }}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm transition-all hover:bg-white/10"
                    >
                      {FLAGS[l]}
                    </button>
                  ))}
                </m.div>
              )}
            </AnimatePresence>
          </div>



          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/selyan-mhli"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            >
              <svg className="h-3.5 w-3.5 text-sand/70" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/selyanmouhali/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            >
              <svg className="h-3.5 w-3.5 text-sand/70" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => setShowContact(true)}
              className="rounded-full border border-bronze/30 bg-bronze/10 px-3 py-1.5 text-[9px] font-medium tracking-wider text-bronze"
            >
              Contact me
            </button>
          </div>
        </m.div>
        )}
      </AnimatePresence>

      {/* ── Popup modal — centered like tablet ── */}
      <AnimatePresence>
        {activeSection && activeIcon && (
          <m.div
            key={`popup-${activeIcon.id}`}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={activeIcon ? getIconLabel(activeIcon.id, lang) : undefined}
          >
            {/* Backdrop */}
            <m.div
              className="absolute inset-0 bg-black/75"
              onClick={() => setActiveIconId(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <m.div
              className="relative z-10 flex max-h-[82vh] w-full max-w-md flex-col"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
            >
              <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-obsidian p-5 shadow-2xl">
                <button
                  type="button"
                  onClick={() => setActiveIconId(null)}
                  aria-label="Close panel"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sand/70 transition-colors hover:bg-white/10 hover:text-sand z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
                >
                  ✕
                </button>

                <div className="mb-3 flex items-center gap-2.5">
                  <Image src={activeIcon.src} alt={getIconLabel(activeIcon.id, lang)} width={36} height={36} className="h-9 w-9 object-contain" />
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-bronze">
                      {getIconLabel(activeIcon.id, lang)}
                    </p>
                    <h2 className="font-[var(--font-display)] text-lg font-semibold text-sand">
                      {getIconLabel(activeIcon.id, lang)}
                    </h2>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto pr-1 text-sm leading-relaxed text-white/60">
                  {activeSection.content}
                </div>
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Contact modal */}
      <AnimatePresence>
        {showContact && (
          <m.div
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
            <m.div
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
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* Project preview modal */}
      <AnimatePresence>
        {previewUrl && (
          <m.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setPreviewUrl(null)}
          >
            <m.div
              className="relative mx-2 h-[90vh] w-[96vw] overflow-hidden rounded-2xl border border-white/10 bg-obsidian shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[9px] text-sand/70"
                  >
                    {t("proj_visit", lang)}
                  </a>
                  <button
                    type="button"
                    onClick={() => setPreviewUrl(null)}
                    className="flex h-6 w-6 items-center justify-center rounded-full text-white/40 hover:bg-white/10 hover:text-sand"
                  >
                    ✕
                  </button>
                </div>
              </div>
              <iframe
                src={previewUrl}
                title="Preview"
                className="h-[calc(100%-2.5rem)] w-full border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
    </LazyMotion>
  );
}
