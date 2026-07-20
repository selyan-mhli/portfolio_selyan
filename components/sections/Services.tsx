"use client";

import { useState } from "react";
import { services, contact, type Service } from "@/lib/data";
import {
  Globe,
  GraduationCap,
  Compass,
  Megaphone,
  Search,
  CalendarClock,
  Mail,
} from "lucide-react";

const icons: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  graduation: GraduationCap,
  compass: Compass,
  megaphone: Megaphone,
  search: Search,
};

declare global {
  interface Window {
    Cal?: any;
  }
}

/* Snippet officiel Cal.com : crée la file d'attente `Cal` et injecte embed.js.
   Appelé au premier clic seulement — aucun script tiers au chargement de la page. */
function loadCalEmbed() {
  if (window.Cal) return;
  const C = window as any;
  const A = "https://app.cal.com/embed/embed.js";
  const p = (a: any, ar: any) => {
    a.q.push(ar);
  };
  const d = C.document;
  C.Cal =
    C.Cal ||
    function () {
      const cal = C.Cal;
      const ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === "init") {
        const api: any = function () {
          p(api, arguments);
        };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
}

export default function Services() {
  const [loading, setLoading] = useState(false);

  const openCal = () => {
    setLoading(true);
    loadCalEmbed();
    window.Cal("init", { origin: "https://app.cal.com" });
    window.Cal("ui", {
      theme: "dark",
      styles: { branding: { brandColor: "#f7a233" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
    window.Cal("modal", {
      calLink: contact.calLink,
      config: { theme: "dark", layout: "month_view" },
    });
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section id="services" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="mono-label mb-6">10 / Services</div>
      <h2 className="serif-display text-[clamp(2.5rem,8vw,7rem)] mb-6">
        Je peux aussi vous aider
      </h2>
      <p className="text-white/60 max-w-2xl mb-12">
        En parallèle de mes études, j'accompagne les entreprises et indépendants
        sur le web et l'IA. Premier échange de 30 minutes offert pour cerner
        votre besoin.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div
              key={s.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-accent/50 transition-colors"
            >
              <Icon
                size={22}
                className="text-accent mb-4"
                aria-hidden="true"
              />
              <h3 className="text-lg mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          );
        })}

        <div className="rounded-2xl border border-accent/40 bg-accent/[0.06] p-6 flex flex-col justify-between">
          <div>
            <CalendarClock size={22} className="text-accent mb-4" aria-hidden="true" />
            <h3 className="text-lg mb-2">Un projet en tête ?</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Réservez un créneau de 30 minutes, gratuit et sans engagement. On
              regarde ensemble ce que le web et l'IA peuvent faire pour vous.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <button
          onClick={openCal}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-black px-7 py-3.5 font-medium hover:bg-white transition-colors disabled:opacity-70"
        >
          <CalendarClock size={16} />
          {loading ? "Ouverture du calendrier…" : "Réserver 30 min gratuites"}
        </button>
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent("Projet — demande de renseignements")}`}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 hover:border-accent hover:text-accent transition-colors"
        >
          <Mail size={16} /> Ou par e-mail
        </a>
      </div>
    </section>
  );
}
