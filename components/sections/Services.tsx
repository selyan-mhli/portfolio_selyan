import { services, contact, type Service } from "@/lib/data";
import {
  Globe,
  GraduationCap,
  Compass,
  Megaphone,
  Search,
  Mail,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const icons: Record<Service["icon"], typeof Globe> = {
  globe: Globe,
  graduation: GraduationCap,
  compass: Compass,
  megaphone: Megaphone,
  search: Search,
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="sec-label mb-6">Services</div>
      <h2 className="serif-display text-[clamp(2.5rem,8vw,7rem)] mb-6">
        Je peux aussi vous aider
      </h2>
      <p className="text-white/60 max-w-2xl mb-12">
        En parallèle de mes études, j'accompagne les entreprises et indépendants
        sur le web et l'IA via mon agence Aksel AI. Premier échange de 30
        minutes offert pour cerner votre besoin.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <div
              key={s.title}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-accent/50 transition-colors ${
                i === 0 ? "lg:col-span-2 lg:p-8" : ""
              }`}
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

        <div className="lg:col-span-3 rounded-2xl border border-accent/40 bg-accent/[0.06] p-6 flex flex-col justify-between">
          <div>
            <Sparkles size={22} className="text-accent mb-4" aria-hidden="true" />
            <h3 className="text-lg mb-2">Un projet en tête ?</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Tout passe par Aksel AI, mon agence sites web & IA. Découvrez les
              offres et réservez directement là-bas.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <a
          href="https://akselai.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-black px-7 py-3.5 font-medium hover:bg-white transition-colors"
        >
          Découvrir Aksel AI <ArrowUpRight size={16} />
        </a>
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
