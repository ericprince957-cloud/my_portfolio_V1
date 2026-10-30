import { ScrollReveal } from "./ui";
import { MessageCircle, Building2, LayoutDashboard, MessageSquare, WifiOff, ShieldCheck, Search, Calendar } from "lucide-react";

/**
 * ============================================================
 * CURRENTLY BUILDING — SAFEKEY PRO (IN DEVELOPMENT)
 * ============================================================
 * Live "behind-the-scenes" section: shows visitors something
 * new is coming, and captures early interest via WhatsApp.
 * Status pulse (🟢) + ETA builds urgency and social proof.
 * ============================================================
 */

const buildingFeatures = [
  { icon: LayoutDashboard, label: "Custom agent dashboards" },
  { icon: MessageSquare, label: "WhatsApp lead integration" },
  { icon: WifiOff, label: "PWA — offline browsing" },
];

const problemsSolved = [
  { icon: ShieldCheck, label: "Trust" },
  { icon: Search, label: "Discovery" },
];

export default function CurrentlyBuildingShowcase() {
  const waitlistLink =
    "https://wa.me/2347084547988?text=" +
    encodeURIComponent("Hi Prince, I'd like early access to SafeKey Pro");

  return (
    <section id="currently-building" className="py-20 md:py-28 relative" aria-labelledby="currently-building-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.04] to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 overflow-hidden relative">
            {/* Corner ambience */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />

            {/* Badge row */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium tracking-wider uppercase text-blue-300 border border-blue-400/30 rounded-full bg-blue-400/5">
                <Building2 size={13} /> Currently Building
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-300 border border-emerald-400/30 rounded-full bg-emerald-400/5">
                <span className="status-dot" /> In Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 border border-white/15 rounded-full bg-white/5">
                <Calendar size={12} /> ETA: Live Next Week
              </span>
            </div>

            <h2 id="currently-building-heading" className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 font-display">
              SafeKey Pro <span className="text-blue-400">— Real Estate Marketplace</span>
            </h2>

            <p className="text-slate-400 leading-relaxed mb-6">
              Currently architecting a multi-vendor property platform for the Nigerian market. Building custom
              agent dashboards, WhatsApp lead integration, and PWA functionality for offline browsing. Designed
              to solve <span className="text-blue-300 font-medium">trust</span> and{" "}
              <span className="text-blue-300 font-medium">discovery</span> issues in local real estate.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-2 mb-6">
              {buildingFeatures.map((f) => (
                <span key={f.label} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-blue-200/80 bg-blue-400/10 border border-blue-400/25 rounded-md">
                  <f.icon size={13} className="text-blue-400" /> {f.label}
                </span>
              ))}
            </div>

            {/* Solving trust + discovery */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2">
                Solving:
                {problemsSolved.map((p) => (
                  <span key={p.label} className="inline-flex items-center gap-1.5 text-slate-300">
                    <p.icon size={14} className="text-emerald-400" /> {p.label}
                  </span>
                ))}
              </span>
              <span className="text-slate-600">in Nigerian local real estate</span>
            </div>

            {/* CTA — early access */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={waitlistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Join Waitlist / Get Early Access <MessageCircle size={17} />
              </a>
              <p className="text-xs text-slate-500 max-w-[220px] leading-relaxed">
                Message me directly on WhatsApp — no forms, no email lists.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
