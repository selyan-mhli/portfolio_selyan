"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

type PortfolioSection = {
  id: string;
  icon: string;
  label: string;
  description: string;
  side: "left" | "right";
};

const SECTIONS: PortfolioSection[] = [
  {
    id: "about",
    icon: "/scene/icon-polyhedron.png",
    label: "About",
    description: "Contenu à venir — cette section accueillera la présentation personnelle.",
    side: "left"
  },
  {
    id: "experience",
    icon: "/scene/icon-phone.png",
    label: "Experience",
    description: "Contenu à venir — cette section accueillera les expériences professionnelles.",
    side: "right"
  },
  {
    id: "education",
    icon: "/scene/icon-text-card.png",
    label: "Education",
    description: "Contenu à venir — cette section accueillera le parcours éducatif.",
    side: "left"
  },
  {
    id: "projects",
    icon: "/scene/icon-cubes.png",
    label: "Projects",
    description: "Contenu à venir — cette section accueillera les projets réalisés.",
    side: "right"
  },
  {
    id: "tech-stack",
    icon: "/scene/icon-toggle-stack.png",
    label: "Tech Stack",
    description: "Contenu à venir — cette section accueillera les technologies maîtrisées.",
    side: "left"
  },
  {
    id: "skills",
    icon: "/scene/icon-toggle.png",
    label: "Skills",
    description: "Contenu à venir — cette section accueillera les compétences clés.",
    side: "right"
  },
  {
    id: "design",
    icon: "/scene/icon-palette.png",
    label: "Design",
    description: "Contenu à venir — cette section accueillera le travail de design.",
    side: "left"
  },
  {
    id: "ai",
    icon: "/scene/icon-ai.png",
    label: "AI & Innovation",
    description: "Contenu à venir — cette section accueillera les projets AI et innovation.",
    side: "right"
  },
  {
    id: "branding",
    icon: "/scene/icon-color-dots.png",
    label: "Branding",
    description: "Contenu à venir — cette section accueillera l'identité visuelle.",
    side: "left"
  }
];

const cardVariants = {
  hidden: (side: "left" | "right") => ({
    opacity: 0,
    x: side === "left" ? -80 : 80,
    y: 30
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 20,
      mass: 0.8
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
      delay: 0.15
    }
  }
};

function SectionBlock({ section }: { section: PortfolioSection }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isLeft = section.side === "left";

  return (
    <div
      ref={ref}
      className={`flex items-center gap-8 md:gap-14 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Icon */}
      <motion.div
        className="relative flex-shrink-0"
        custom={section.side}
        variants={iconVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-bronze/20 blur-2xl" />
        <Image
          src={section.icon}
          alt={section.label}
          width={100}
          height={100}
          className="h-16 w-16 select-none object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.5)] md:h-20 md:w-20 lg:h-24 lg:w-24"
        />
      </motion.div>

      {/* Content card */}
      <motion.div
        className="glass-panel flex-1 p-6 shadow-ambient md:p-10"
        custom={section.side}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <p className="text-[10px] uppercase tracking-[0.3em] text-bronze md:text-xs">
          {section.label}
        </p>
        <h3 className="mt-2 text-2xl font-semibold text-sand md:text-3xl lg:text-4xl">
          {section.label}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
          {section.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function ScrollPortfolio() {
  return (
    <div className="relative bg-obsidian">
      {/* Top fade from black to obsidian */}
      <div className="pointer-events-none h-32 bg-gradient-to-b from-black to-obsidian" />

      {/* Scroll indicator */}
      <div className="flex flex-col items-center pb-16">
        <motion.div
          className="flex flex-col items-center gap-3 text-white/30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs uppercase tracking-[0.25em]">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      {/* Sections */}
      <div className="section-shell space-y-20 pb-32 md:space-y-28">
        {SECTIONS.map((section) => (
          <SectionBlock key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
