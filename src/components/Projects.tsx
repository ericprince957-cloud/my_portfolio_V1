import { projects } from "../config/projects";
import { ScrollReveal, SectionHeading } from "./ui";
import { LibraryBig, ArrowRight } from "lucide-react";

/**
 * ============================================================
 * "THINGS I'VE BUILT" — HOME CTA SECTION
 * ============================================================
 * The full project grid now lives on its own dedicated
 * library page (hash route: #/library). This section is a
 * clean teaser that sends visitors there via the gold
 * "View Things I've Built" button.
 * ============================================================
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Projects"
            title="Things I've Built"
            description="Real projects, real code. Each project represents learning, problem-solving, and practical development."
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="max-w-2xl mx-auto mt-10 text-center glass-card rounded-2xl p-8 md:p-10">
            <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
              <LibraryBig size={26} className="text-amber-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-slate-100 mb-3">Explore the full project library</h3>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-7">
              Browse every build — e-commerce, fashion, logistics, services, frontend and Python — with
              full details: the problem, the solution, key features, tech stack, live demos and source code.
            </p>

            <a
              href="#/library"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm md:text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20"
            >
              View Things I've Built <ArrowRight size={18} />
            </a>

            <p className="mt-4 text-xs text-slate-500">
              {projects.length}+ projects in the library — updated as new work ships.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
