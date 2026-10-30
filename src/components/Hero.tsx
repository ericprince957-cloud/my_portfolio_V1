import { portfolioConfig } from "../config";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, MessageCircle, Scale, Building2, Hotel, GraduationCap, Stethoscope, Briefcase, ExternalLink, X } from "lucide-react";

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
  const [open, setOpen] = useState(false);
  const [inView, setInView] = useState(false);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Slide the phone up from the ground when scrolled into view
  useEffect(() => {
    const el = phoneRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const niches = [
    { icon: Scale, label: "Law Firms" },
    { icon: Building2, label: "Real Estate" },
    { icon: Hotel, label: "Hotels" },
    { icon: GraduationCap, label: "Private Schools" },
    { icon: Stethoscope, label: "Clinics" },
    { icon: Briefcase, label: "Established SMEs" },
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

          {/* ── RIGHT: iPHONE "ON THE GROUND" → VIEW WEBSITE ──────
              The phone rests on a ground shadow. It slides up
              when scrolled into view (screen off). "View Website"
              powers it on in a fullscreen overlay with the live
              Luxe Interiors demo loaded in its browser. */}
          <div className="flex justify-center md:justify-end">
            <div
              ref={phoneRef}
              className={`relative transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Glow behind */}
              <div className="absolute -inset-8 rounded-[3.5rem] bg-blue-500/15 blur-2xl" aria-hidden="true" />

              {/* Titanium frame — screen OFF until "View Website" */}
              <div className="relative w-[270px] sm:w-[300px] rounded-[3rem] bg-[#0A2540] p-[10px] shadow-2xl shadow-blue-500/10 border border-blue-400/20">
                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-[22px] -translate-x-1/2 w-24 h-[22px] bg-[#0A2540] rounded-full z-10 flex items-center justify-center" aria-hidden="true">
                  <span className="w-2 h-2 rounded-full bg-[#1d2f45]" />
                </div>

                {/* Dark screen with app preview */}
                <div className="rounded-[2.5rem] overflow-hidden aspect-[9/19] relative bg-gradient-to-b from-[#0d1526] to-[#05080f] flex flex-col items-center justify-center gap-3 border border-white/5">
                  <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-sky-400/20 border border-blue-400/30 flex items-center justify-center">
                    <span className="font-display text-2xl font-bold text-blue-300">LI</span>
                  </span>
                  <p className="font-display text-lg font-semibold text-slate-200">Luxe Interiors</p>
                  <p className="text-[11px] text-slate-500 tracking-wide uppercase">Furniture Catalog Demo</p>
                </div>

                {/* Side buttons */}
                <div className="absolute -left-[2px] top-24 w-[3px] h-10 bg-[#0A2540] rounded-full" aria-hidden="true" />
                <div className="absolute -left-[2px] top-40 w-[3px] h-16 bg-[#0A2540] rounded-full" aria-hidden="true" />
              </div>

              {/* GROUND — shadow the phone stands on */}
              <div className="mx-auto mt-5 w-3/4 h-5 rounded-[100%] bg-black/60 blur-md" aria-hidden="true" />
              <div className="mx-auto mt-1 w-2/3 h-3 rounded-[100%] bg-blue-500/15 blur-sm" aria-hidden="true" />

              {/* View Website option */}
              <div className="text-center mt-5">
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  View Website <ExternalLink size={15} />
                </button>
                <p className="text-xs text-slate-500 mt-2">Opens the live demo inside the phone</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PHONE OVERLAY — powered on, live browser ──────────── */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Luxe Interiors live demo"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 z-20 w-10 h-10 rounded-full bg-slate-900 border border-white/20 text-slate-200 flex items-center justify-center hover:bg-red-500/80 hover:border-red-400/50 transition-colors"
              aria-label="Close demo"
            >
              <X size={18} />
            </button>

            {/* Titanium frame */}
            <div className="relative w-[300px] sm:w-[330px] rounded-[3rem] bg-[#0A2540] p-[10px] shadow-2xl shadow-blue-500/20 border border-blue-400/25">
              {/* Dynamic Island */}
              <div className="absolute left-1/2 top-[20px] -translate-x-1/2 w-24 h-[20px] bg-[#0A2540] rounded-full z-10 flex items-center justify-center" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-[#1d2f45]" />
              </div>

              {/* Browser screen — loads only when opened */}
              <div className="rounded-[2.5rem] overflow-hidden bg-white h-[75vh] relative">
                <iframe
                  src="https://luxeinteriors-ten.vercel.app/"
                  title="Luxe Interiors — live furniture catalog demo"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-4">
              Live demo — tap and browse it like a real phone
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
