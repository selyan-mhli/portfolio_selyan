import { passions } from "@/lib/data";

export default function Passions() {
  return (
    <section id="passions" className="relative py-32 px-6 md:px-12 lg:px-20">
      <div className="sec-rule mb-6" aria-hidden="true" />
      <h2 className="serif-display text-[clamp(2rem,6vw,5rem)] mb-16">Au-delà du code.</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {passions.map((p, i) => (
          <article
            key={p.title}
            className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-accent/40 transition-[border-color,background-color] ${i === 0 ? "lg:col-span-2" : ""}`}
          >
            <h3 className="serif-display text-2xl mb-3 group-hover:text-accent transition-colors">
              {p.title}
            </h3>
            <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
