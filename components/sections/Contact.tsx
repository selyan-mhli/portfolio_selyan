"use client";

import { useState } from "react";
import { contact } from "@/lib/data";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";

type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.botcheck) return; // honeypot
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          name: data.name,
          email: data.email,
          subject: `[Portfolio] ${data.subject} — ${data.name}`,
          message: data.message,
        }),
      });
      const json = await res.json();
      if (!json.success) throw new Error(json.message);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-accent/60 transition-colors";

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 flex flex-col gap-3">
      <div className="mono-label mb-1">Écrivez-moi</div>
      <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <div className="grid sm:grid-cols-2 gap-3">
        <input required name="name" placeholder="Votre nom" autoComplete="name" className={inputCls} />
        <input required type="email" name="email" placeholder="Votre e-mail" autoComplete="email" className={inputCls} />
      </div>
      <select required name="subject" defaultValue="Projet / Services" className={inputCls}>
        <option>Projet / Services</option>
        <option>Stage / Recrutement</option>
        <option>Autre</option>
      </select>
      <textarea required name="message" placeholder="Votre message…" rows={5} className={`${inputCls} resize-y`} />
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-black px-6 py-3 font-medium hover:bg-white transition-colors disabled:opacity-70"
      >
        <Send size={16} />
        {status === "sending" ? "Envoi en cours…" : "Envoyer le message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-accent">Message envoyé ! Je vous réponds rapidement.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Une erreur est survenue. Écrivez-moi directement à {contact.email}.
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="mono-label mb-6">10 / Contact</div>
      <h2 className="serif-display text-[clamp(2.5rem,8vw,7rem)] mb-10">
        On construit ensemble ?
      </h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mono-label !text-accent mb-1">Disponible</div>
            <h3 className="text-xl mb-2">Stage ingénieur — Septembre 2027</h3>
            <p className="text-white/60 text-sm">
              Stage de 4 à 6 mois en ingénierie, développement ou gestion de projet technique.
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
        <ContactForm />
      </div>
    </section>
  );
}
