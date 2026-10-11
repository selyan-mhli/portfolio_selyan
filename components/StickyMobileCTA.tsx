"use client";

import { useEffect, useState } from "react";
import { Mail, FileText } from "lucide-react";

// Barre mobile Contact/CV. Masquee dans le hero (il porte deja ses propres CTA) et
// dans la section Contact (le bouton y renverrait a la section courante et la barre
// couvrirait le formulaire). Visible entre les deux.
export default function StickyMobileCTA() {
  const [inHero, setInHero] = useState(true);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const contact = document.getElementById("contact");
    const observers: IntersectionObserver[] = [];

    // Racine reduite aux 40 % bas de l'ecran : la barre apparait quand le bas du
    // hero remonte au-dessus de 60 % de la hauteur.
    if (hero) {
      const io = new IntersectionObserver(([e]) => setInHero(e.isIntersecting), {
        rootMargin: "-60% 0px 0px 0px",
      });
      io.observe(hero);
      observers.push(io);
    } else {
      setInHero(false);
    }

    // Disparait quand le haut de Contact passe au-dessus de 80 % de la hauteur.
    if (contact) {
      const io = new IntersectionObserver(([e]) => setInContact(e.isIntersecting), {
        rootMargin: "0px 0px -20% 0px",
      });
      io.observe(contact);
      observers.push(io);
    }

    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const visible = !inHero && !inContact;

  return (
    <div
      inert={!visible}
      aria-hidden={!visible}
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-[opacity,transform] duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      {/* Fondu : le texte qui passe sous la barre s'efface au lieu de heurter les boutons */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink via-ink/80 to-transparent"
      />
      <div className="relative flex gap-2 px-3 pt-6 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-accent text-ink py-3 text-sm font-medium"
        >
          <Mail size={16} /> Contact
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/60 backdrop-blur px-5 py-3 text-sm"
        >
          <FileText size={16} /> CV
        </a>
      </div>
    </div>
  );
}
