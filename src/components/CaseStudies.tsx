import { useState, type FormEvent } from "react";
import { caseStudies, sampleIndustries, type CaseStudy } from "../config/caseStudies";
import { portfolioConfig } from "../config";
import { ScrollReveal } from "./ui";
import {
  Target,
  Lightbulb,
  CheckCircle2,
  Layers,
  Sparkles,
  AlertTriangle,
  ArrowRight,
  Lightbulb as LessonIcon,
  XCircle,
} from "lucide-react";

/**
 * ============================================================
 * "ROI & BUSINESS IMPACT" — CASE STUDY SECTION
 * ============================================================
 * Shows what each website DID for the business, not just how
 * it looks: Problem → Solution → Result → Tech Stack, plus a
 * Before/After toggle and a "Lessons Learned" badge.
 *
 * Mobile-first: everything stacks vertically and cards load
 * with the same lazy patterns as the rest of the site.
 *
 * ⚠️ Metrics are qualitative and REAL (see config). Never
 * fabricate numbers — authenticity builds trust.
 * ============================================================
 */

function CaseStudyCard({ study, delay }: { study: CaseStudy; delay: number }) {
  // Before/After toggle — visual contrast sells faster than text
  const [showAfter, setShowAfter] = useState(true);
  const state = showAfter ? study.after : study.before;

  return (
    <ScrollReveal delay={delay}>
      <article className="glass-card rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300">
        {/* ── HEADER ───────────────────────────────────────── */}
        <div className="p-6 md:p-8 pb-0">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 text-[11px] font-medium tracking-wider uppercase text-blue-300 bg-blue-400/10 border border-blue-400/30 rounded-full">
              {study.industry}
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-medium text-amber-300 bg-amber-400/10 border border-amber-400/30 rounded-full">
              <LessonIcon size={11} /> Lessons Learned
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-100 mb-1 font-display">{study.client}</h3>
          <p className="text-sm text-blue-300 font-medium mb-4">{study.headline}</p>

          {/* Lessons Learned badge */}
          <p className="flex items-start gap-2 text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg p-3 mb-6 leading-relaxed">
            <Sparkles size={14} className="mt-0.5 shrink-0 text-amber-300" />
            {study.lesson}
          </p>
        </div>

        {/* ── PROBLEM / SOLUTION / RESULT ────────────────────── */}
        <div className="px-6 md:px-8 grid gap-6">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-red-400 mb-2">
              <Target size={15} /> The Problem
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">{study.problem}</p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-blue-400 mb-2">
              <Lightbulb size={15} /> The Solution
            </h4>
            <p className="text-sm text-slate-400 leading-relaxed">{study.solution}</p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-emerald-400 mb-3">
              <CheckCircle2 size={15} /> The Result
            </h4>
            <ul className="space-y-2">
              {study.results.map((result, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-emerald-400" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* ── BEFORE / AFTER TOGGLE ─────────────────────────── */}
          <div>
            <div className="flex items-center gap-1 p-1 rounded-full bg-slate-900/60 border border-white/10 w-fit" role="tablist" aria-label="Before and after comparison">
              <button
                role="tab"
                aria-selected={!showAfter}
                onClick={() => setShowAfter(false)}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  !showAfter ? "bg-red-400/15 text-red-300 border border-red-400/30" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <XCircle size={13} /> Old Way
              </button>
              <button
                role="tab"
                aria-selected={showAfter}
                onClick={() => setShowAfter(true)}
                className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  showAfter ? "bg-emerald-400/15 text-emerald-300 border border-emerald-400/30" : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <CheckCircle2 size={13} /> New Way
              </button>
            </div>
            <div className="mt-3 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className={`text-xs font-semibold mb-2 ${showAfter ? "text-emerald-400" : "text-red-400"}`}>
                {state.label} {showAfter ? "— Professional Site" : "— WhatsApp Chaos"}
              </p>
              <ul className="space-y-1.5">
                {state.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    {showAfter ? (
                      <CheckCircle2 size={13} className="mt-1 shrink-0 text-emerald-400" />
                    ) : (
                      <AlertTriangle size={13} className="mt-1 shrink-0 text-red-400" />
                    )}
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── TECH STACK ──────────────────────────────────── */}
          <div className="pb-2">
            <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-100 mb-2">
              <Layers size={15} /> Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 text-xs text-slate-300 bg-blue-400/10 border border-blue-400/25 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* ── CLIENT QUOTE ──────────────────────────────────── */}
          {study.quote && (
            <blockquote className="border-l-2 border-blue-400/50 pl-4 py-1 mb-2">
              <p className="text-sm text-slate-300 italic leading-relaxed">"{study.quote.text}"</p>
              <cite className="text-xs text-slate-500 mt-1 block not-italic">— {study.quote.author}</cite>
            </blockquote>
          )}
        </div>
        <div className="h-6" />
      </article>
    </ScrollReveal>
  );
}

/**
 * ============================================================
 * FREE SAMPLE GENERATOR — passive viewers → active leads
 * ============================================================
 * Business Name + Industry + WhatsApp Number → opens WhatsApp
 * with a pre-typed mockup request. They just press send.
 * ============================================================
 */
function FreeSampleGenerator() {
  const [business, setBusiness] = useState("");
  const [industry, setIndustry] = useState(sampleIndustries[0]);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!business.trim() || !phone.trim()) {
      setError("Please fill in your business name and WhatsApp number.");
      return;
    }
    setError("");
    const wa = portfolioConfig.contactInfo.whatsapp.replace(/[^0-9]/g, "");
    const lines = [
      "Hi Vector, I'd like my free custom mockup!",
      "",
      `Business Name: ${business.trim()}`,
      `Industry: ${industry}`,
      `My WhatsApp: ${phone.trim()}`,
      "",
      "Please send me a personalized homepage concept. (I saw the 24hr offer on your portfolio.)",
    ];
    window.open(`https://wa.me/${wa}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  };

  return (
    <ScrollReveal delay={100}>
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
        <div className="relative">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-emerald-300 border border-emerald-400/30 rounded-full mb-4 bg-emerald-400/5">
            Free — No Commitment
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 font-display">
            Get Your Free Custom Mockup
          </h3>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Tell me about your business and I'll send a personalized homepage concept within
            <strong className="text-slate-200"> 24 hours</strong>. No commitment — just see what your
            business could look like online.
          </p>

          <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            <div className="sm:col-span-2">
              <label htmlFor="sample-business" className="block text-sm font-medium text-slate-100 mb-1.5">
                Business Name <span className="text-red-400">*</span>
              </label>
              <input
                id="sample-business"
                type="text"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="e.g. Ade & Sons Chambers"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:border-blue-400/50 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="sample-industry" className="block text-sm font-medium text-slate-100 mb-1.5">
                Industry
              </label>
              <select
                id="sample-industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 focus:border-blue-400/50 focus:outline-none transition-colors"
              >
                {sampleIndustries.map((ind) => (
                  <option key={ind} value={ind} className="bg-slate-900">
                    {ind}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="sample-phone" className="block text-sm font-medium text-slate-100 mb-1.5">
                WhatsApp Number <span className="text-red-400">*</span>
              </label>
              <input
                id="sample-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0803 123 4567"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:border-blue-400/50 focus:outline-none transition-colors"
              />
            </div>
            {error && <p className="sm:col-span-2 text-xs text-red-400">{error}</p>}
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/30 cursor-pointer"
            >
              Get My Free Mockup <ArrowRight size={16} />
            </button>
            <p className="sm:col-span-2 text-xs text-slate-500 text-center">
              Opens WhatsApp with your request pre-typed — you just press send.
            </p>
          </form>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.03] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-blue-300 border border-blue-400/30 rounded-full mb-4 bg-blue-400/5">
              ROI & Business Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 font-display">
              What My Websites Did for the Business
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Anyone can build a pretty page. Here's what happened to real Nigerian businesses after
              launch — the problem, the solution, and the result.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} delay={i * 120} />
          ))}
        </div>

        <FreeSampleGenerator />
      </div>
    </section>
  );
}
