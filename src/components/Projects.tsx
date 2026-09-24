import { useState } from "react";
import { projects, filterCategories, type Project } from "../config/projects";
import { ImageWithFallback, ScrollReveal, SectionHeading } from "./ui";
import { Github, ExternalLink, X, FolderGit2, ChevronRight } from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="Projects" title="Things I've Built" description="Real projects, real code. Each project represents learning, problem-solving, and practical development." />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filterCategories.map((cat) => (
              <button key={cat.value} onClick={() => setActiveFilter(cat.value)} className={`px-4 py-2 text-sm rounded-lg transition-all cursor-pointer ${activeFilter === cat.value ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "text-slate-400 border border-slate-700 hover:border-indigo-400/30 hover:text-slate-100"}`}>
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 80}>
              <ProjectCard project={project} onViewDetails={() => setSelectedProject(project)} />
            </ScrollReveal>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-400">No projects in this category yet. Check back soon.</div>
        )}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}

function ProjectCard({ project, onViewDetails }: { project: Project; onViewDetails: () => void }) {
  const statusColors: Record<string, string> = {
    Completed: "text-green-400 bg-green-400/10 border-green-400/30",
    "In Progress": "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
    Planning: "text-slate-500 bg-slate-800 border-slate-700",
  };

  return (
    <div className="group rounded-xl border border-slate-700 bg-slate-900/40 overflow-hidden hover:border-indigo-400/30 transition-all hover:shadow-lg hover:shadow-indigo-500/5">
      <div className="aspect-video bg-slate-800 relative overflow-hidden">
        <ImageWithFallback src={project.image} alt={project.title} fallbackText={project.title.substring(0, 2).toUpperCase()} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" fallbackClassName="w-full h-full" />
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>{project.status}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-xs text-slate-500 bg-slate-800 rounded border border-slate-700">{tech}</span>
            ))}
            {project.technologies.length > 4 && <span className="px-2 py-0.5 text-xs text-slate-500">+{project.technologies.length - 4}</span>}
          </div>
        )}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-700/50">
          <button onClick={onViewDetails} className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm text-indigo-400 hover:bg-indigo-400/10 rounded-lg transition-colors cursor-pointer">
            View Details <ChevronRight size={14} />
          </button>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" aria-label={`${project.title} GitHub`}>
              <Github size={16} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors" aria-label={`${project.title} live demo`}>
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-[#0a0a0f]/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-slate-700 bg-slate-900 shadow-2xl animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-100 bg-slate-900/80 rounded-lg transition-colors cursor-pointer" aria-label="Close">
          <X size={18} />
        </button>
        <div className="aspect-video bg-slate-800 relative">
          <ImageWithFallback src={project.image} alt={project.title} fallbackText={project.title.substring(0, 2).toUpperCase()} className="w-full h-full object-cover" fallbackClassName="w-full h-full" />
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-slate-100">{project.title}</h3>
              <span className="px-2 py-0.5 text-xs font-medium rounded-full border border-slate-700 text-slate-500">{project.status}</span>
            </div>
            <p className="text-slate-400">{project.description}</p>
          </div>
          {(project.problem || project.solution) && (
            <div className="grid md:grid-cols-2 gap-4">
              {project.problem && (
                <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Problem</h4>
                  <p className="text-sm text-slate-400">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-4 rounded-lg border border-slate-700 bg-slate-800/30">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-sm text-slate-400">{project.solution}</p>
                </div>
              )}
            </div>
          )}
          {project.features.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-100 mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-indigo-400 mt-0.5">•</span>{feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.technologies.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-slate-100 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm text-slate-400 bg-slate-800 rounded-lg border border-slate-700">{tech}</span>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-700">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 border border-slate-700 hover:border-indigo-400/50 text-slate-100 rounded-lg transition-colors">
                <FolderGit2 size={16} /> View Code
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            {!project.github && !project.live && <p className="text-sm text-slate-500">Project links coming soon.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
