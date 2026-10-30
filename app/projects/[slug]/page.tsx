import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { ExternalLink, Github, ArrowLeft, Check } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.name + " — Case Study",
    description: project.description,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const study = project.caseStudy;

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
          <Link href="/projects" className="inline-flex items-center gap-1.5 text-xs text-subtle transition-colors hover:text-gold">
            <ArrowLeft size={13} /> Back to Projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{project.name}</h1>
          </div>
          <p className="mt-2 text-sm text-gold">{project.type}</p>
          <p className="mt-1 text-xs text-subtle">
            {project.industry} · {project.category}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md border border-line bg-card px-2.5 py-1 text-xs text-subtle">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                View Live Website <ExternalLink size={15} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <Github size={15} /> View Repository
              </a>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 md:py-20">
        {study ? (
          <div className="space-y-12">
            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Project Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-subtle">{study.overview}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">The Problem</h2>
              <p className="mt-3 text-base leading-relaxed text-subtle">{study.problem}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">The Solution</h2>
              <p className="mt-3 text-base leading-relaxed text-subtle">{study.solution}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Development Process</h2>
              <p className="mt-3 text-base leading-relaxed text-subtle">{study.process}</p>
            </div>
            {study.result && (
              <div className="card rounded-xl p-6">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Final Result</h2>
                <p className="mt-3 flex items-start gap-2 text-base leading-relaxed text-white">
                  <Check size={18} className="mt-1 shrink-0 text-gold" /> {study.result}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-xs font-semibold tracking-[0.18em] text-gold uppercase">Project Overview</h2>
            <p className="mt-3 text-base leading-relaxed text-subtle">{project.description}</p>
            <p className="mt-6 text-sm text-subtle">
              A detailed case study for this project is not yet available.{" "}
              {project.category === "In Development"
                ? "It is currently in active development."
                : "Contact us to learn more about it."}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
