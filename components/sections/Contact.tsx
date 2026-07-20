"use client";

import Image from "next/image";
import { contact } from "@/lib/data";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="mono-label mb-6">10 / Contact</div>
      <h2 className="serif-display text-[clamp(2.5rem,8vw,7rem)] mb-10">
        On construit ensemble ?
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 mb-4">
            <div className="mono-label !text-accent mb-1">Disponible</div>
            <h3 className="text-xl mb-2">Stage ingénieur — Septembre 2027</h3>
            <p className="text-white/60 text-sm">
              Stage de 4 à 6 mois en ingénierie, développement ou gestion de projet technique.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mono-label mb-1">Aussi ouvert</div>
            <h3 className="text-xl mb-2">Summer Programme — Été 2026 / 2027</h3>
            <p className="text-white/60 text-sm">
              Programmes d'été en entreprise, en France ou à l'international.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-black px-6 py-3 font-medium hover:bg-white transition-colors"
            >
              <Mail size={16} /> {contact.email}
            </a>
            <a
              href={`tel:${contact.phone?.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              <Phone size={16} /> {contact.phone}
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 hover:border-accent hover:text-accent transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <div className="rounded-2xl bg-white p-4">
            <Image
              src="/scene/linkedin-qr.svg"
              alt="LinkedIn QR"
              width={200}
              height={200}
            />
          </div>
          <div className="mono-label mt-3">Scannez pour vous connecter</div>
        </div>
      </div>
    </section>
  );
}
