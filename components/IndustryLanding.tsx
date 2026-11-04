import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Check, Quote } from "lucide-react";
import { getProject } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface IndustryLandingProps {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  pains: string[];
  solutions: string[];
  industryLabel: string;
  refPath: string;
  /** Slug of a real, verifiable project to showcase. Omit for none. */
  showcaseSlug?: string;
  showcaseTitle?: string;
  showcaseText?: string;
}

export default function IndustryLanding({
  badge,
  title,
  titleAccent,
  subtitle,
  pains,
  solutions,
  industryLabel,
  refPath,
  showcaseSlug,
  showcaseTitle,
  showcaseText,
}: IndustryLandingProps) {
  const waText = encodeURIComponent(
    "Hi Prince, I saw your SafeKey Pro case study. I'd like to discuss a " +
      industryLabel +
      " project. (via " +
      refPath +
      ")"
  );
  const waHref = "https://wa.me/2347084547988?text=" + waText;
  const showcase = showcaseSlug ? getProject(showcaseSlug) : undefined;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)]" aria-hidden="true" />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            {badge}
          </span>
          <h1 className="fade-up mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white md:text-5xl">
            {title}
            <br />
            <span className="text-gold">{titleAccent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">{subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Discuss Your {industryLabel} Project <ArrowRight size={16} />
            </a>
            <Link
              href="/contact"
              className="ghost-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Or Send a Detailed Brief
            </Link>
          </div>
        </div>
      </section>

      {/* ── PAINS ────────────────────────────────────────── */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            title="The Problems We Solve"
            description={"Specific challenges " + industryLabel + " businesses face online — and how we address each one."}
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pains.map((pain, i) => (
              <Reveal key={pain} className="h-full" delay={Math.min(i * 0.06, 0.3)}>
                <div className="card h-full rounded-xl p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                    <Check size={16} />
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-white">{pain}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            badge="What We Deliver"
            title="Built Around How Your Business Actually Works"
            description="No generic templates. Every feature below is designed for your industry and your customers."
          />
          <div className="mx-auto mt-12 grid max-w-3xl gap-3">
            {solutions.map((item, i) => (
              <Reveal key={item} delay={Math.min(i * 0.05, 0.25)}>
                <div className="card flex items-start gap-3 rounded-xl p-5">
                  <Check size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-white">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWCASE (real projects only) ─────────────────── */}
      {showcase && (
        <section className="border-b border-line bg-surface">
          <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28">
            <SectionHeading
              badge="Proof of Work"
              title={showcaseTitle || "Relevant Work"}
              description={showcaseText}
            />
            <div className="mt-12">
              <ProjectCard project={showcase} index={0} />
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section className="bg-surface">
        <Reveal>
          <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
            <Quote size={22} className="mx-auto text-gold/60" aria-hidden="true" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Free 15-Minute {industryLabel} Platform Audit
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-subtle">
              Tell us what you are trying to build. We will tell you honestly what it takes — scope, timeline and a transparent quote.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
              >
                Book a Strategy Call <ArrowRight size={16} />
              </a>
              <Link href="/projects" className="ghost-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold">
                See Our Work First
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
