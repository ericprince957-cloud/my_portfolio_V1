"use client";

import { useState } from "react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = ["All", ...projectCategories];

export default function ProjectsBrowser() {
  const [active, setActive] = useState<Filter>("All");

  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={
              "rounded-full border px-4 py-2 text-xs font-medium transition-colors " +
              (active === f
                ? "border-gold bg-gold text-bg"
                : "border-line bg-card text-subtle hover:border-gold/40 hover:text-white")
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-subtle">No projects in this category yet.</p>
      )}
    </div>
  );
}
