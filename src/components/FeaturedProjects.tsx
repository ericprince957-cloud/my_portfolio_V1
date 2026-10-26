import {
  featuredProjects,
  featuredTestimonial,
  type FeaturedProject,
} from "../config/featuredProjects";
import { ScrollReveal } from "./ui";
import { ExternalLink, Quote, CheckCircle2, Star } from "lucide-react";

/**
 * ============================================================
 * FEATURED PROJECT CARD
 * ============================================================
 * Dark/gold aesthetic: slate-950 base with blue/gold accents.
 * Subtle hover animation: card lifts, gold border glows,
 * thumbnail scales. Fully responsive — stacks to 1 column
 * below 768px (verified at 375px width).
 * ============================================================
 */
function ProjectCard({ project, delay }: { project: FeaturedProject; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <article className="group glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(96,165,250,0.12)]">
        {/* ── THUMBNAIL ────────────────────────────────────────
            INSERT ACTUAL SCREENSHOT HERE:
            Save a WebP screenshot (~100-150KB) to /public/projects/
            and set `thumbnail` in src/config/featuredProjects.ts.
            Until then an elegant gold placeholder renders. */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={`${project.client} — ${project.title}`}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
              <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase text-blue-300 bg-blue-400/10 border border-blue-400/30 rounded-full">
                {project.industry}
              </span>
              <span className="font-mono text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-500">
                {project.client}
              </span>
              <span className="text-xs text-slate-500">Screenshot coming soon</span>
            </div>
          )}
          {project.thumbnail && (
            <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase text-blue-300 bg-slate-950/70 backdrop-blur-sm border border-blue-400/30 rounded-full">
              {project.industry}
            </span>
          )}
        </div>

        {/* ── BODY ─────────────────────────────────────────── */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-slate-100 mb-3 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs text-blue-200/80 bg-blue-400/10 border border-blue-400/20 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-4">{project.description}</p>

          <p className="flex items-start gap-2 text-sm text-emerald-300/90 font-medium mb-5">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
            <span>Result: {project.result}</span>
          </p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-300 hover:to-sky-300 rounded-lg transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-400/20"
            aria-label={`${project.linkLabel} for ${project.client} (opens in a new tab)`}
          >
            {project.linkLabel} <ExternalLink size={15} />
          </a>
        </div>
      </article>
    </ScrollReveal>
  );
}

/**
 * ============================================================
 * CLIENT TESTIMONIAL
 * ============================================================
 * Real 5-star Google review from Samuel Chukwuemeka
 * (Techlaza). Edit `featuredTestimonial` in
 * src/config/featuredProjects.ts to change the copy.
 * ============================================================
 */
function Testimonial() {
  return (
    <ScrollReveal delay={200}>
      <figure className="relative max-w-3xl mx-auto mt-14 text-center px-6 py-10 glass-card rounded-2xl">
        <Quote size={28} className="mx-auto mb-4 text-blue-400/60" aria-hidden="true" />
        <blockquote className="text-base md:text-lg text-slate-300 italic leading-relaxed">
          "{featuredTestimonial.quote}"
        </blockquote>
        <figcaption className="mt-4">
          <div
            className="flex justify-center gap-1 mb-2"
            aria-label={`${featuredTestimonial.stars} out of 5 stars`}
          >
            {Array.from({ length: featuredTestimonial.stars }).map((_, i) => (
              <Star key={i} size={16} className="fill-blue-400 text-blue-400" aria-hidden="true" />
            ))}
          </div>
          <span className="text-sm font-semibold text-blue-300">{featuredTestimonial.author}</span>
          <span className="block text-xs text-slate-500 mt-0.5">{featuredTestimonial.role}</span>
        </figcaption>
      </figure>
    </ScrollReveal>
  );
}

/**
 * ============================================================
 * "RECENT SUCCESS STORIES" SECTION
 * ============================================================
 * Positioned directly below the Hero. 2-column grid on
 * desktop (md+), 1 column on mobile — four projects render
 * as a clean 2x2 grid on desktop.
 * ============================================================
 */
export default function FeaturedProjects() {
  return (
    <section
      id="success-stories"
      className="py-20 md:py-28 relative"
      aria-labelledby="success-stories-heading"
    >
      {/* Subtle gold ambience */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-blue-300 border border-blue-400/30 rounded-full mb-4 bg-blue-400/5">
              Featured Projects
            </span>
            <h2
              id="success-stories-heading"
              className="text-3xl md:text-4xl font-bold text-slate-100 mb-4"
            >
              Recent Success Stories
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Real Nigerian businesses. Real results. See how professional digital assets translate
              into paid invoices and client trust.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 2) * 120} />
          ))}
        </div>

        <Testimonial />
      </div>
    </section>
  );
}
