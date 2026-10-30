import { portfolioConfig } from "../config";
import { ArrowRight, MessageCircle, Sofa, Building2, GraduationCap } from "lucide-react";

/**
 * ============================================================
 * HERO — "CORPORATE LUXURY" CONVERSION HERO
 * ============================================================
 * Navy #0A2540 · Gold #C5A065 · Playfair Display headings.
 * CRO structure: pain-point headline, outcome subheadline,
 * ONE primary CTA ("View My Work") + ONE low-friction CTA
 * ("Chat on WhatsApp" — prefilled message).
 * Visual: Luxe Interiors demo inside an iPhone 15 Pro frame.
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
    <section id="home" className="relative overflow-hidden bg-white">
      {/* Soft luxury ambience */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      <div className="absolute top-[-10%] right-[-10%] w-[36rem] h-[36rem] rounded-full bg-[#C5A065]/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#0A2540]/[0.04] blur-3xl" aria-hidden="true" />

      {/* Giant faint background word */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 font-display font-bold text-[#0A2540]/[0.04] text-[16vw] md:text-[9vw] whitespace-nowrap select-none pointer-events-none tracking-tight"
        aria-hidden="true"
      >
        VECTOR CODES
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* ── LEFT: CONVERSION COPY ─────────────────────────── */}
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#C5A065] uppercase mb-5 animate-fade-in-up opacity-0 stagger-1">
              Premium Web Development — Nigerian SMEs
            </p>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0A2540] leading-[1.1] mb-6 animate-fade-in-up opacity-0 stagger-2">
              I Build <span className="text-[#C5A065]">High-Converting</span> Websites for Nigerian Businesses.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0 mb-6 animate-fade-in-up opacity-0 stagger-3">
              {hero.subheadline}
            </p>

            {/* Niche chips — visitors self-identify in under 2 seconds */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8 animate-fade-in-up opacity-0 stagger-3">
              {niches.map((n) => (
                <span key={n.label} className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-[#0A2540] bg-[#C5A065]/10 border border-[#C5A065]/35 rounded-full">
                  <n.icon size={13} className="text-[#C5A065]" /> {n.label}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in-up opacity-0 stagger-4">
              {/* Primary CTA — scrolls to the money section */}
              <a
                href="#success-stories"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A2540] hover:bg-[#0d2c4d] text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#0A2540]/25"
              >
                View My Work <ArrowRight size={18} />
              </a>
              {/* Secondary CTA — prefilled WhatsApp message */}
              <a
                href={hero.secondaryCTALink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#C5A065] hover:bg-[#d1ac72] text-[#0A2540] font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#C5A065]/40"
              >
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* ── RIGHT: iPHONE 15 PRO MOCKUP — LUXE INTERIORS DEMO ── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative animate-float">
              <div className="absolute -inset-8 rounded-[3.5rem] bg-[#C5A065]/15 blur-2xl" aria-hidden="true" />

              {/* Titanium frame */}
              <div className="relative w-[270px] sm:w-[300px] rounded-[3rem] bg-[#0A2540] p-[10px] shadow-2xl shadow-[#0A2540]/30">
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
