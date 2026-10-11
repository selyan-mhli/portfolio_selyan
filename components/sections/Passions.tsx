import { passions } from "@/lib/data";

// Le karate (10 ans, titres regionaux) porte des preuves que les autres passions
// n'ont pas : il ouvre la section en grand, le reste suit en liste a filets.
// Pas de cartes ni d'effet de survol : rien ici n'est cliquable.
export default function Passions() {
  const [lead, ...rest] = passions;

  return (
    <section id="passions" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="sec-rule mb-6" aria-hidden="true" />
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-16">Au-delà du code.</h2>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-20">
        <div className="lg:pt-5">
          <h3 className="serif-display text-[clamp(2.25rem,5vw,3.75rem)] text-sand">{lead.title}</h3>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-white/70">{lead.desc}</p>
        </div>

        <ul className="border-b border-white/10">
          {rest.map((p) => (
            <li
              key={p.title}
              className="grid gap-2 border-t border-white/10 py-5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] sm:gap-8"
            >
              <h3 className="text-lg font-medium text-sand">{p.title}</h3>
              <p className="text-sm leading-relaxed text-white/65 sm:pt-1">{p.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
