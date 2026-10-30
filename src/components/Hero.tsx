import { portfolioConfig } from "../config";
import { ArrowRight, MessageCircle, Sofa, Building2, GraduationCap } from "lucide-react";

/**
 * ============================================================
 * HERO — DARK TECH-BLUE CONVERSION HERO
 * ============================================================
 * Original black/blue aesthetic (Hawra-style) with the new
 * CRO copy: pain-point headline, outcome subheadline,
 * primary CTA ("View My Work") + prefilled WhatsApp CTA.
 * Visual: Luxe Interiors demo in an iPhone 15 Pro frame.
 * ============================================================
 */
export default function Hero() {
  const { hero } = portfolioConfig;
  const niches = [
    { icon: Sofa, label: "Furniture" },
    { icon: Building2, label: "Real Estate" },
    { icon: GraduationCap, label: "Education" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Black → deep blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040a1c] to-black" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" aria-hidden="true" />

      {/* Giant background word */}
      <div
        className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 font-display font-bold text-white/[0.04] text-[16vw] md:text-[9vw] whitespace-nowrap select-none pointer-events-none tracking-tight"
        aria-hidden="true"
      >
        VECTOR CODES
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ── LEFT: CONVERSION COPY ─────────────────────────── */}
          <div className="text-center md:text-left">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-blue-400 mb-5 uppercase animate-fade-in-up opacity-0 stagger-1">
              Premium Web Development — Nigerian SMEs
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up opacity-0 stagger-2">
              I Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">High-Converting</span> Websites for Nigerian Businesses.
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-6 animate-fade-in-up opacity-0 stagger-3">
              {hero.subheadline}
            </p>

            {/* Niche chips — visitors self-identify instantly */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 animate-fade-in-up opacity-0 stagger-3">
              {niches.map((n) => (
                <span key={n.label} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-blue-200/80 bg-blue-400/10 border border-blue-400/25 rounded-full">
                  <n.icon size={13} className="text-blue-400" /> {n.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up opacity-0 stagger-4">
              {/* Primary CTA — scrolls to the money section */}
              <a
                href="#success-stories"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                View My Work <ArrowRight size={18} />
              </a>
              {/* Secondary CTA — prefilled WhatsApp message */}
              <a
                href={hero.secondaryCTALink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 glass-card hover:bg-white/10 text-slate-100 font-semibold rounded-full transition-all hover:scale-105"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── RIGHT: iPHONE 15 PRO MOCKUP — LUXE INTERIORS DEMO ── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-8 rounded-[3.5rem] bg-blue-500/15 blur-2xl" aria-hidden="true" />

              {/* Titanium frame */}
              <div className="relative w-[270px] sm:w-[300px] rounded-[3rem] bg-[#0A2540] p-[10px] shadow-2xl shadow-blue-500/10 border border-blue-400/20">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-[22px] -translate-x-1/2 w-24 h-[22px] bg-[#0A2540] rounded-full z-10 flex items-center justify-center" aria-hidden="true">
                  <span className="w-2 h-2 rounded-full bg-[#1d2f45]" />
                </div>

                {/* Screen — live Luxe Interiors demo (lazy-loaded) */}
                <div className="rounded-[2.5rem] overflow-hidden bg-white aspect-[9/19] relative">
                  <iframe
                    src="https://luxeinteriors-ten.vercel.app/"
                    title="Luxe Interiors — mobile furniture catalog demo"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full border-0"
                  />
                </div>

                {/* Side buttons */}
                <div className="absolute -left-[2px] top-24 w-[3px] h-10 bg-[#0A2540] rounded-full" aria-hidden="true" />
                <div className="absolute -left-[2px] top-40 w-[3px] h-16 bg-[#0A2540] rounded-full" aria-hidden="true" />
              </div>

              <p className="text-center text-xs text-slate-500 mt-4 tracking-wide">
                Luxe Interiors — live furniture catalog demo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
