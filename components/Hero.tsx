import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * ============================================================
 * HERO — Vector Codes
 * ============================================================
 * Mockup composition: three interface skeletons (law firm,
 * automobile dealership, e-commerce) built in CSS — no fake
 * screenshots, no decorative noise.
 * ============================================================
 */

function BrowserMock({ label, variant }: { label: string; variant: "law" | "auto" | "shop" }) {
  return (
    <div className="card overflow-hidden rounded-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3 py-2" aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-gold/50" />
      </div>
      {/* Skeleton content */}
      <div className="space-y-2.5 bg-card p-3" aria-hidden="true">
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded bg-white/20" />
          <div className="flex gap-1.5">
            <div className="h-1.5 w-6 rounded bg-white/10" />
            <div className="h-1.5 w-6 rounded bg-white/10" />
            <div className="h-1.5 w-6 rounded bg-gold/40" />
          </div>
        </div>
        {variant === "law" && (
          <>
            <div className="h-8 rounded bg-white/[0.06]" />
            <div className="flex gap-2">
              <div className="h-1.5 w-16 rounded bg-white/15" />
              <div className="h-1.5 w-10 rounded bg-gold/40" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="h-8 rounded bg-white/[0.04]" />
              <div className="h-8 rounded bg-white/[0.04]" />
              <div className="h-8 rounded bg-white/[0.04]" />
            </div>
          </>
        )}
        {variant === "auto" && (
          <>
            <div className="h-14 rounded bg-white/[0.06]" />
            <div className="flex gap-2">
              <div className="h-1.5 w-14 rounded bg-gold/40" />
              <div className="h-1.5 w-10 rounded bg-white/15" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-9 rounded bg-white/[0.04]" />
              <div className="h-9 rounded bg-white/[0.04]" />
            </div>
          </>
        )}
        {variant === "shop" && (
          <>
            <div className="h-1.5 w-20 rounded bg-gold/40" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-10 rounded bg-white/[0.05]" />
              <div className="h-10 rounded bg-white/[0.05]" />
              <div className="h-10 rounded bg-white/[0.05]" />
            </div>
            <div className="flex gap-2">
              <div className="h-1.5 w-8 rounded bg-white/15" />
              <div className="h-1.5 w-8 rounded bg-white/15" />
            </div>
          </>
        )}
      </div>
      <p className="border-t border-line px-3 py-2 text-[10px] tracking-wide text-subtle">{label}</p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Subtle ambience — restrained */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)]" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Copy */}
          <div className="fade-up text-center lg:text-left">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
              Nigerian Digital Solutions Company
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
              Building Digital Experiences.
              <br />
              <span className="text-gold">Designed for Business Growth.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle lg:mx-0">
              We design and develop modern websites, e-commerce platforms and custom digital
              solutions that help businesses establish credibility, reach more customers and
              operate more effectively.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/contact"
                className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link
                href="/projects"
                className="ghost-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Mockup composition */}
          <div className="fade-up delay-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3" aria-label="Examples of websites we build: law firm, automobile dealership and e-commerce interfaces">
            <BrowserMock label="Law Firm Website" variant="law" />
            <BrowserMock label="Automobile Dealership" variant="auto" />
            <BrowserMock label="E-Commerce Website" variant="shop" />
          </div>
        </div>
      </div>
    </section>
  );
}
