import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import TrackedLink from "@/components/TrackedLink";
import { getProjectBySlug, projects } from "@/lib/projects";
const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Projet introuvable",
    };
  }

  return {
    title: `${project.title} | Selyan Mouhali`,
    description: project.shortDescription,
    alternates: {
      canonical: `https://selyanmouhali.fr/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Selyan Mouhali`,
      description: project.shortDescription,
      images: [project.heroImage],
      type: "article",
      url: `https://selyanmouhali.fr/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-obsidian pb-16 pt-12">
      <article className="section-shell">
        <header className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1.1fr_1fr] md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-bronze/80">Case Study</p>
            <h1 className="mt-3 text-3xl font-semibold text-sand md:text-5xl">{project.title}</h1>
            <p className="mt-4 text-base text-white/70">{project.shortDescription}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.metrics.map((metric) => (
                <span
                  key={metric.label}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/75"
                >
                  {metric.label}: <strong className="text-sand">{metric.value}</strong>
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <TrackedLink
                  key={link.href}
                  href={link.href}
                  eventName="project_external_click"
                  eventData={{ slug: project.slug, href: link.href }}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-bronze/40 px-4 text-sm font-medium text-bronze transition hover:bg-bronze/10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </TrackedLink>
              ))}
            </div>
          </div>

          <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </header>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-xl font-semibold text-sand">Contexte</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{project.context}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              <strong className="text-sand">Problème:</strong> {project.problem}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              <strong className="text-sand">Rôle:</strong> {project.role}
              <br />
              <strong className="text-sand">Période:</strong> {project.period}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-xl font-semibold text-sand">Contraintes</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {project.constraints.map((constraint) => (
                <li key={constraint}>• {constraint}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-xl font-semibold text-sand">Solution</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {project.solution.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h2 className="text-xl font-semibold text-sand">Impact</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {project.outcomes.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h2 className="text-xl font-semibold text-sand">Stack technique</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
