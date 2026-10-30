import {
  featuredProjects,
  featuredTestimonial,
  type FeaturedProject,
} from "../config/featuredProjects";
import { ScrollReveal } from "./ui";
import { ExternalLink, Quote, Star, Github, TrendingUp } from "lucide-react";

/**
 * ============================================================
 * FEATURED PROJECT CARD — CASE-STUDY FORMAT
 * ============================================================
 * Every card communicates five things:
 *   WHO the client is → THE PROBLEM → WHAT I BUILT →
 *   TECHNOLOGY USED → BUSINESS BENEFIT.
 * No naked screenshots. Cards sell outcomes, not pixels.
 * ============================================================
 */
function ProjectCard({ project, delay }: { project: FeaturedProject; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <article className="group glass-card rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_12px_40px_rgba(96,165,250,0.12)]">
        {/* ── HEADER: WHO THE CLIENT IS ─────────────────────── */}
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt={project.client + " — " + project.title}
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
              <span className="font-display text-2xl font-bold text-slate-300">{project.client}</span>
              <span className="text-xs text-slate-500">{project.industry}</span>
            </div>
          )}
          <span className="absolute top-3 left-3 px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase text-blue-300 bg-slate-950/70 backdrop-blur-sm border border-blue-400/30 rounded-full">
            {project.industry}
          </span>
        </div>

        {/* ── BODY: PROBLEM → BUILT → TECH → BENEFIT ─────────── */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-slate-100 mb-1 group-hover:text-blue-300 transition-colors">
            {project.client}
          </h3>
          <p className="text-xs text-slate-500 mb-5">{project.title}</p>

          {/* The problem */}
          <div className="mb-4">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-blue-400/80 mb-1.5">
              The Problem
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.problem}</p>
          </div>

          {/* What I built */}
          <div className="mb-4">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-blue-400/80 mb-1.5">
              What I Built
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">{project.built}</p>
          </div>

          {/* Technology */}
          <div className="mb-4">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-blue-400/80 mb-1.5">
              Technology
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs text-blue-200/80 bg-blue-400/10 border border-blue-400/20 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Business benefit */}
          <div className="mb-5 rounded-lg bg-emerald-400/[0.06] border border-emerald-400/20 p-3">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-emerald-400/90 mb-1.5 flex items-center gap-1.5">
              <TrendingUp size={12} /> Business Benefit
            </p>
            <p className="text-sm text-emerald-300/90 leading-relaxed font-medium">{project.benefit}</p>
          </div>

          {/* CTA */}
          <div className="mt-auto flex flex-wrap gap-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-blue-400 to-sky-400 hover:from-blue-300 hover:to-sky-300 rounded-lg transition-all hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-400/20"
              aria-label={project.linkLabel + " for " + project.client + " (opens in a new tab)"}
            >
              {project.linkLabel} <ExternalLink size={15} />
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-100 glass-card hover:bg-white/10 rounded-lg transition-all"
                aria-label={"View source code for " + project.client}
              >
                <Github size={15} /> View Code
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

/**
 * Client testimonial — real 5-star Google review.
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
          <div className="flex justify-center gap-1 mb-2" aria-label={featuredTestimonial.stars + " out of 5 stars"}>
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
 * "FEATURED PROJECTS" SECTION — the money section
 * ============================================================
 */
export default function FeaturedProjects() {
  return (
    <section
      id="success-stories"
      className="py-20 md:py-28 relative"
      aria-labelledby="success-stories-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-blue-300 border border-blue-400/30 rounded-full mb-4 bg-blue-400/5">
              Featured Projects
            </span>
            <h2 id="success-stories-heading" className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 font-display">
              Projects That Paid For Themselves
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Not screenshots — case studies. Every project answers five questions: who the client is,
              the problem they had, what I built, the technology used, and the business benefit it delivers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={(i % 3) * 120} />
          ))}
        </div>

        <Testimonial />
      </div>
    </section>
  );
}
