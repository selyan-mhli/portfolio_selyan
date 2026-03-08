import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

const BLUR_DATA_URL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

export const metadata: Metadata = {
  title: "Projets | Selyan Mouhali",
  description:
    "Études de cas de projets web et software: contexte, contraintes, stack technique et résultats.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-obsidian pb-16 pt-12">
      <div className="section-shell">
        <h1 className="text-4xl font-semibold text-sand md:text-5xl">Projets détaillés</h1>
        <p className="mt-4 max-w-2xl text-base text-white/70">
          Chaque fiche présente le contexte, les contraintes, les choix techniques et les résultats.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              <div className="relative h-44">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-semibold text-sand">{project.title}</h2>
                <p className="mt-2 text-sm text-white/65">{project.shortDescription}</p>
                <Link
                  href={`/projects/${project.slug}`}
                  data-track-event="project_open"
                  data-track-slug={project.slug}
                  data-track-source="projects_index"
                  className="mt-4 inline-flex h-11 items-center justify-center rounded-lg border border-bronze/40 px-4 text-sm font-medium text-bronze transition hover:bg-bronze/10"
                >
                  Voir l&apos;étude de cas
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
