import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/projects";

const featuredProject = projects[0];
const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

export const metadata: Metadata = {
  title: "Selyan Mouhali | Portfolio ingénierie web",
  description:
    "Étudiant ingénieur UTT: je conçois des interfaces web performantes, accessibles et orientées conversion. Disponible pour stage ingénieur à partir de septembre 2027.",
  alternates: {
    canonical: "https://selyanmouhali.fr",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-obsidian pb-20">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-obsidian/95 backdrop-blur">
        <nav className="section-shell flex h-16 items-center justify-between">
          <a href="#top" className="text-sm font-semibold tracking-[0.08em] text-sand">
            Selyan Mouhali
          </a>
          <div className="hidden items-center gap-6 text-sm text-white/75 md:flex">
            <a href="#projects" className="hover:text-sand">
              Projets
            </a>
            <a href="#process" className="hover:text-sand">
              Méthode
            </a>
            <a href="#experience" className="hover:text-sand">
              Expérience
            </a>
            <a href="#contact" className="hover:text-sand">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="section-shell grid gap-10 pb-10 pt-14 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-bronze/80">Portfolio orienté résultats</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-sand md:text-6xl">
            Je conçois des produits web lisibles, rapides et prêts pour le business.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Étudiant ingénieur à l&apos;UTT, je construis des interfaces web performantes et accessibles.
            Objectif actuel: stage ingénieur (4-6 mois) à partir de <strong className="text-sand">septembre 2027</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              data-track-event="cta_click"
              data-track-cta="voir_projets"
              data-track-placement="hero"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-bronze px-5 text-sm font-semibold text-black transition hover:bg-copper"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              data-track-event="cta_click"
              data-track-cta="contact"
              data-track-placement="hero"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-sand transition hover:border-bronze/60"
            >
              Discuter d&apos;un stage/mission
            </a>
            <a
              href="https://www.linkedin.com/in/selyanmouhali/"
              target="_blank"
              rel="noopener noreferrer"
              data-track-event="cta_click"
              data-track-cta="linkedin"
              data-track-placement="hero"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-sand transition hover:border-bronze/60"
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Disponible: stage ingénieur dès septembre 2027",
              "4 langues: FR, EN (C1+), ES (B1), KO",
              "Focus: web, IA appliquée, qualité UX",
              "Stack: Next.js, TypeScript, Node.js",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-4">
          <div className="relative h-[430px] w-full overflow-hidden rounded-2xl">
            <Image
              src="/scene/selyan_avatar_small.png"
              alt="Portrait de Selyan Mouhali"
              fill
              priority
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 35vw"
            />
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/55">Profil ingénieur web</p>
        </div>
      </section>

      <section id="projects" className="section-shell pt-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <p className="text-sm uppercase tracking-[0.2em] text-bronze/80">Projet phare</p>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-3xl font-semibold text-sand md:text-4xl">{featuredProject.title}</h2>
              <p className="mt-3 text-base text-white/70">{featuredProject.shortDescription}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                <strong className="text-sand">Objectif:</strong> {featuredProject.problem}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featuredProject.metrics.map((metric) => (
                  <span
                    key={metric.label}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                  >
                    {metric.label}: <strong className="text-sand">{metric.value}</strong>
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  data-track-event="project_open"
                  data-track-slug={featuredProject.slug}
                  data-track-source="home_featured"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-bronze px-4 text-sm font-semibold text-black transition hover:bg-copper"
                >
                  Voir l&apos;étude complète
                </Link>
                {featuredProject.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-event="project_external_click"
                    data-track-slug={featuredProject.slug}
                    data-track-href={link.href}
                    className="inline-flex h-11 items-center justify-center rounded-xl border border-white/20 px-4 text-sm font-semibold text-sand transition hover:border-bronze/60"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={featuredProject.heroImage}
                alt={featuredProject.title}
                fill
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-xl font-semibold text-sand">{project.title}</h3>
              <p className="mt-2 text-sm text-white/65">{project.shortDescription}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full bg-white/[0.05] px-2.5 py-1 text-[11px] text-white/75">
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={`/projects/${project.slug}`}
                data-track-event="project_open"
                data-track-slug={project.slug}
                data-track-source="home_grid"
                className="mt-4 inline-flex h-11 items-center justify-center rounded-lg border border-bronze/40 px-4 text-sm font-semibold text-bronze transition hover:bg-bronze/10"
              >
                Lire le case study
              </Link>
            </article>
          ))}
        </div>

        <Link
          href="/projects"
          data-track-event="cta_click"
          data-track-cta="all_projects"
          data-track-placement="projects"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-xl border border-white/20 px-5 text-sm font-semibold text-sand transition hover:border-bronze/60"
        >
          Voir toutes les pages projet
        </Link>
      </section>

      <section id="process" className="section-shell pt-16">
        <h2 className="text-3xl font-semibold text-sand md:text-4xl">Méthode de travail</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["1. Cadrage", "Objectifs, contraintes, KPI et périmètre."],
            ["2. Design", "Wireframes, hiérarchie visuelle, parcours clair."],
            ["3. Build", "Implémentation Next.js/TypeScript orientée performance."],
            ["4. Itération", "Tests, corrections, optimisations SEO et UX."],
          ].map(([title, description]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-sand">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell pt-16">
        <h2 className="text-3xl font-semibold text-sand md:text-4xl">Expérience & formation</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-bronze/80">Expérience</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Responsable partenariat, Néréides (2025 - aujourd&apos;hui)</li>
              <li>• Opérateur atelier, Ici Store (2025)</li>
              <li>• Expériences service client et administratif (2022-2024)</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-bronze/80">Formation</p>
            <ul className="mt-3 space-y-2 text-sm text-white/75">
              <li>• Diplôme d&apos;ingénieur, UTT (2024 - présent)</li>
              <li>• Bac mention Bien, spécialités Maths/Physique (2024)</li>
              <li>• Semestre d&apos;échange, Reynolds High School (2023)</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell pt-16">
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1fr_1fr] md:p-10">
          <div>
            <h2 className="text-3xl font-semibold text-sand md:text-4xl">Contact</h2>
            <p className="mt-4 text-base text-white/70">
              Besoin d&apos;un profil junior rigoureux pour un stage, une mission web ou un projet étudiant ambitieux?
            </p>
            <p className="mt-4 text-sm text-white/70">
              Disponibilité: <strong className="text-sand">à partir de septembre 2027</strong>.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-white/75">
              <a
                href="mailto:selyan.mouhali@gmail.com"
                data-track-event="contact_channel_click"
                data-track-channel="email"
                className="inline-flex h-11 items-center rounded-lg border border-white/15 px-4 hover:border-bronze/60"
              >
                selyan.mouhali@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/selyanmouhali/"
                target="_blank"
                rel="noopener noreferrer"
                data-track-event="contact_channel_click"
                data-track-channel="linkedin"
                className="inline-flex h-11 items-center rounded-lg border border-white/15 px-4 hover:border-bronze/60"
              >
                LinkedIn
              </a>
              <Link
                href="/immersive"
                data-track-event="cta_click"
                data-track-cta="immersive_mode"
                data-track-placement="contact"
                className="inline-flex h-11 items-center rounded-lg border border-white/15 px-4 hover:border-bronze/60"
              >
                Explorer la version immersive
              </Link>
            </div>
          </div>

          <form
            action="mailto:selyan.mouhali@gmail.com"
            method="post"
            encType="text/plain"
            data-track-event="contact_submit"
            className="grid gap-4"
          >
            <label className="text-sm text-sand/80" htmlFor="contact-name">
              Nom
            </label>
            <input
              id="contact-name"
              name="Nom"
              required
              className="h-12 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors focus:border-bronze/60"
            />

            <label className="text-sm text-sand/80" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              name="Email"
              type="email"
              required
              className="h-12 rounded-xl border border-white/15 bg-white/[0.03] px-4 text-sm text-white outline-none transition-colors focus:border-bronze/60"
            />

            <label className="text-sm text-sand/80" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="Message"
              rows={5}
              required
              className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors focus:border-bronze/60"
            />

            <button
              type="submit"
              className="mt-2 h-12 rounded-xl bg-bronze px-5 text-sm font-semibold text-black transition hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bronze"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-4 z-50 px-4 md:hidden">
        <a
          href="#contact"
          data-track-event="cta_click"
          data-track-cta="contact_sticky_mobile"
          data-track-placement="mobile_sticky"
          className="flex h-12 items-center justify-center rounded-xl bg-bronze text-sm font-semibold text-black shadow-copper"
        >
          Discuter d&apos;un stage/mission
        </a>
      </div>
    </main>
  );
}
