import Link from "next/link";
import { ExternalLink, Github, FileText } from "lucide-react";
import type { Project } from "@/data/projects";
import Reveal from "@/components/Reveal";

function CategoryBadge({ category }: { category: Project["category"] }) {
  if (category === "In Development") {
    return (
      <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-amber-300">
        In Development
      </span>
    );
  }
  if (category === "Internal Product") {
    return (
      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-subtle">
        Internal Product
      </span>
    );
  }
  return (
    <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-gold">
      Client Project
    </span>
  );
}

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Reveal className="h-full" delay={Math.min(index * 0.06, 0.3)}>
      <article className="card flex h-full flex-col overflow-hidden rounded-xl">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-line bg-surface px-5 py-4">
          <CategoryBadge category={project.category} />
          <span className="text-[10px] tracking-wide text-subtle uppercase">{project.industry}</span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <p className="mt-0.5 text-xs text-gold/80">{project.type}</p>
          <p className="mt-3 text-sm leading-relaxed text-subtle">{project.description}</p>

          {project.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="rounded-md border border-line bg-surface px-2 py-0.5 text-[11px] text-subtle">
                  {t}
                </span>
              ))}
            </div>
          )}

          <div className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold"
                aria-label={"View live website: " + project.name}
              >
                View Live Website <ExternalLink size={13} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold"
                aria-label={"View repository: " + project.name}
              >
                <Github size={13} /> View Repository
              </a>
            )}
            {project.caseStudy && (
              <Link
                href={"/projects/" + project.slug}
                className="ghost-btn inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold"
              >
                <FileText size={13} /> View Case Study
              </Link>
            )}
            {!project.caseStudy && !project.liveUrl && !project.repoUrl && (
              <Link
                href={"/projects/" + project.slug}
                className="ghost-btn inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-semibold"
              >
                <FileText size={13} /> Project Details
              </Link>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
