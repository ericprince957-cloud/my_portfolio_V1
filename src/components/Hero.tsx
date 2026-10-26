import { portfolioConfig } from "../config";
import { ArrowRight, MessageCircle } from "lucide-react";

/**
 * ============================================================
 * HERO — "HAWRA-STYLE" DARK SHOWCASE (blue & black)
 * ============================================================
 * Layout mimicking the reference design:
 * - Giant faint "PORTFOLIO" word behind the hero
 * - Photo on the LEFT, intro text on the RIGHT
 * - Serif display headline ("Hi, I'm Vector.")
 * - Small caps sub-title + description
 * - Two CTAs: "View Portfolio" (blue) + "Contact Me" (dark)
 *
 * PHOTO: set `profileImage` in src/config/index.ts to your
 * photo URL. Until then, a styled monogram placeholder shows.
 * ============================================================
 */
export default function Hero() {
  const { hero } = portfolioConfig;
  const hasPhoto = portfolioConfig.profileImage && portfolioConfig.profileImage !== "[placeholder]";

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Black → deep blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040a1c] to-black" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" aria-hidden="true" />

      {/* Giant background word */}
      <div
        className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 font-display font-bold text-white/[0.04] text-[20vw] md:text-[11vw] whitespace-nowrap select-none pointer-events-none tracking-tight"
        aria-hidden="true"
      >
        PORTFOLIO
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ── LEFT: PHOTO ────────────────────────────────────
              INSERT YOUR PHOTO HERE:
              Set `profileImage` in src/config/index.ts to a
              direct image URL (ideally WebP, ~150KB).
              ────────────────────────────────────────────────── */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/30 to-sky-400/10 blur-xl" aria-hidden="true" />
              {hasPhoto ? (
                <img
                  src={portfolioConfig.profileImage}
                  alt="Uche Prince Eric — Vector Codes"
                  width={420}
                  height={480}
                  className="relative w-64 sm:w-72 md:w-80 lg:w-[24rem] aspect-[7/8] object-cover rounded-2xl border border-blue-400/20 shadow-2xl shadow-blue-500/10"
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="relative w-64 sm:w-72 md:w-80 lg:w-[24rem] aspect-[7/8] rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#0a1228] to-black shadow-2xl shadow-blue-500/10 flex flex-col items-center justify-center gap-3">
                  <span className="font-display text-7xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-sky-500">
                    VC
                  </span>
                  <span className="text-xs text-slate-500 font-mono">// add photo in config</span>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT: INTRO ─────────────────────────────────── */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 animate-fade-in-up opacity-0 stagger-1">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">Vector</span>.
            </h1>

            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-blue-400 mb-5 uppercase animate-fade-in-up opacity-0 stagger-2">
              Next.js &amp; React Developer — Fast, Conversion-Optimized Websites
            </p>

            {/* Tech stack chips — recruiters/clients spot their keywords instantly */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5 animate-fade-in-up opacity-0 stagger-3">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase", "Vercel"].map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs text-blue-200/80 bg-blue-400/10 border border-blue-400/25 rounded-md">{tech}</span>
              ))}
            </div>

            <p className="text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0 mb-8 animate-fade-in-up opacity-0 stagger-3">
              {hero.subheadline} From concept to launch: premium, mobile-first websites that turn
              visitors into paying clients.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up opacity-0 stagger-4">
              {/* Primary: blue CTA */}
              <a
                href="#success-stories"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View Portfolio <ArrowRight size={18} />
              </a>
              {/* Secondary: dark CTA with icon */}
              <a
                href={hero.secondaryCTALink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card hover:bg-white/10 text-slate-100 font-semibold rounded-full transition-all hover:scale-105"
              >
                <MessageCircle size={18} /> Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-slate-800 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-blue-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
