import { useState } from "react";
import { projects, filterCategories, type Project } from "../config/projects";
import { ImageWithFallback, ScrollReveal, SectionHeading } from "./ui";
import { Github, ExternalLink, X, FolderGit2, ChevronRight } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Projects"
            title="Things I've Built"
            description="Real projects, real code. Each project represents learning, problem-solving, and practical development."
          />
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 text-sm rounded-lg transition-all cursor-pointer ${
                  activeFilter === cat.value
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "text-text-muted border border-border hover:border-primary/30 hover:text-text"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <ProjectCard
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            No projects in this category yet. Check back soon.
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

/* ============================================================
   PROJECT CARD
   ============================================================ */
function ProjectCard({
  project,
  onViewDetails,
}: {
  project: Project;
  onViewDetails: () => void;
}) {
  const statusColors: Record<string, string> = {
    Completed: "text-green-400 bg-green-400/10 border-green-400/30",
    "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    Planning: "text-text-dim bg-surface-lighter border-border",
  };

  return (
    <div className="group rounded-xl border border-border bg-surface/40 overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5">
      {/* Image */}
      <div className="aspect-video bg-surface-lighter relative overflow-hidden">
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          fallbackText={project.title.substring(0, 2).toUpperCase()}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          fallbackClassName="w-full h-full"
        />
        {/* Status badge */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2 py-0.5 text-xs font-medium rounded-full border ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs text-text-dim bg-surface-lighter rounded border border-border"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 text-xs text-text-dim">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          <button
            onClick={onViewDetails}
            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg transition-colors cursor-pointer"
          >
            View Details
            <ChevronRight size={14} />
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text hover:bg-surface-lighter rounded-lg transition-colors"
              aria-label={`${project.title} GitHub repository`}
            >
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text hover:bg-surface-lighter rounded-lg transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   PROJECT MODAL
   ============================================================ */
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-surface shadow-2xl animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-text-muted hover:text-text bg-surface/80 rounded-lg transition-colors cursor-pointer"
          aria-label="Close project details"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="aspect-video bg-surface-lighter relative">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            fallbackText={project.title.substring(0, 2).toUpperCase()}
            className="w-full h-full object-cover"
            fallbackClassName="w-full h-full"
          />
        </div>

        {/* Details */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-text">{project.title}</h3>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-border text-text-dim">
                {project.status}
              </span>
            </div>
            <p className="text-text-muted">{project.description}</p>
          </div>

          {/* Problem & Solution */}
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-4 rounded-lg border border-border bg-surface-light/30">
                  <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                  <p className="text-sm text-text-muted">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-lg border border-border bg-surface-light/30">
                  <h4 className="text-sm font-semibold text-accent mb-2">Solution</h4>
                  <p className="text-sm text-text-muted">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Features */}
          {project.features.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                    <span className="text-primary mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {project.technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-text mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm text-text-muted bg-surface-lighter rounded-lg border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface-lighter border border-border hover:border-primary/50 text-text rounded-lg transition-colors"
              >
                <FolderGit2 size={16} />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-lg transition-colors"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {!project.github && !project.live && (
              <p className="text-sm text-text-dim">Project links coming soon.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
