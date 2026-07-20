"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#privasee", label: "Privasee" },
  { href: "#projects", label: "Projets" },
  { href: "#presse", label: "Presse" },
  { href: "#experience", label: "Parcours" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="group inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 backdrop-blur px-4 py-2 transition-colors"
          >
            <span className="mono-label !text-white !text-[11px]">
              {open ? "Fermer" : "Menu"}
            </span>
            <span className="relative w-4 h-4">
              <Menu
                className={`absolute inset-0 w-4 h-4 transition-all duration-200 ${
                  open ? "opacity-0 rotate-45 scale-50" : "opacity-100"
                }`}
              />
              <X
                className={`absolute inset-0 w-4 h-4 transition-all duration-200 ${
                  open ? "opacity-100" : "opacity-0 -rotate-45 scale-50"
                }`}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Drawer (full screen, desktop + mobile) */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`relative h-full flex flex-col justify-center items-center gap-4 md:gap-6 px-8 transition-transform duration-500 ease-out ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="serif-display text-5xl md:text-8xl text-white/85 hover:text-accent transition-colors text-center"
              style={{
                transform: open ? "translateY(0)" : "translateY(20px)",
                opacity: open ? 1 : 0,
                transition: `opacity 0.5s ${i * 40}ms ease-out, transform 0.5s ${i * 40}ms ease-out, color 0.2s`,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
