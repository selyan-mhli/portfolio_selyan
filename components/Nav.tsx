"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { projects, slugify } from "@/lib/data";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  children?: { href: string; label: string }[];
};

const links: NavLink[] = [
  { href: "#startups", label: "Startups" },
  {
    href: "#projects",
    label: "Projets",
    children: projects.map((p) => ({
      href: `#${slugify(p.title)}`,
      label: p.title,
    })),
  },
  { href: "#presse", label: "Presse" },
  { href: "#experience", label: "Parcours" },
  // Les offres entreprises vivent sur akselai.fr : pas de section Services ici.
  { href: "https://akselai.fr", label: "Aksel AI", external: true },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setSubOpen(null);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    // Echap : le menu devient inert, le focus qui y etait serait perdu (retour au
    // <body>). On le rend au bouton qui a ouvert le menu.
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !openRef.current) return;
      setOpen(false);
      toggleRef.current?.focus({ preventScroll: true });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled
            ? "bg-black/55 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
          <a href="#hero" className="serif-display text-xl tracking-tight">
            Selyan
          </a>

          <button
            ref={toggleRef}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur px-4 py-2 transition-colors"
          >
            <span className="mono-label !text-white !text-[11px]">
              {open ? "Fermer" : "Menu"}
            </span>
            <span className="relative w-4 h-4">
              <Menu
                className={`absolute inset-0 w-4 h-4 transition-[opacity,transform] duration-200 ${
                  open ? "opacity-0 rotate-45 scale-50" : "opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-4 h-4 transition-[opacity,transform] duration-200 ${
                  open ? "opacity-100" : "opacity-0 -rotate-45 scale-50"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Drawer (full screen, desktop + mobile). inert une fois ferme : sinon ses liens,
          seulement transparents, restent atteignables au clavier et a la lecture d'ecran. */}
      <div
        id="site-menu"
        inert={!open}
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`relative h-full flex flex-col justify-center items-center gap-3 md:gap-5 px-8 overflow-y-auto py-24 transition-transform duration-500 ease-out ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          {links.map((l, i) => {
            const expanded = subOpen === l.href;
            return (
              <div
                key={l.href}
                className="flex flex-col items-center"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transition: `opacity 0.5s ${i * 40}ms ease-out, transform 0.5s ${i * 40}ms ease-out`,
                }}
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    {...(l.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="serif-display inline-flex items-start gap-2 text-4xl md:text-7xl text-white/85 hover:text-accent transition-colors text-center"
                  >
                    {l.label}
                    {l.external && (
                      <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-white/40 md:mt-3 md:h-10 md:w-10" aria-hidden="true" />
                    )}
                  </a>
                  {l.children && (
                    <button
                      aria-label={
                        expanded
                          ? `Replier la liste ${l.label}`
                          : `Déplier la liste ${l.label}`
                      }
                      aria-expanded={expanded}
                      onClick={() => setSubOpen(expanded ? null : l.href)}
                      className={`inline-flex h-9 w-9 md:h-11 md:w-11 shrink-0 items-center justify-center rounded-full border transition-colors ${
                        expanded
                          ? "border-accent text-accent"
                          : "border-white/20 text-white/60 hover:border-accent hover:text-accent"
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {l.children && (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${
                      expanded ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden flex flex-col items-center gap-1.5">
                      {l.children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="text-base md:text-xl text-white/55 hover:text-accent transition-colors text-center"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </>
  );
}
