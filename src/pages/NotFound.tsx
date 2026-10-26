import { ArrowRight, MessageCircle, Ghost } from "lucide-react";

/**
 * ============================================================
 * 404 PAGE — branded, on-theme error state
 * ============================================================
 * Shown for any unknown hash route (e.g. #/anything-else).
 * Hash routing means the server always serves index.html,
 * so this handles every "not found" case client-side.
 * ============================================================
 */
export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040a1c] to-black" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" aria-hidden="true" />
      <div
        className="absolute top-6 left-1/2 -translate-x-1/2 font-display font-bold text-white/[0.04] text-[26vw] md:text-[14vw] whitespace-nowrap select-none pointer-events-none"
        aria-hidden="true"
      >
        404
      </div>

      <div className="relative max-w-xl mx-auto px-4 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-400/10 border border-blue-400/30 flex items-center justify-center">
          <Ghost size={30} className="text-blue-400" aria-hidden="true" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3 font-display">
          This page took a wrong turn.
        </h1>
        <p className="text-slate-400 leading-relaxed mb-8">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white font-semibold rounded-full transition-all hover:scale-105"
          >
            Back Home <ArrowRight size={16} />
          </a>
          <a
            href="#/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 glass-card hover:bg-white/10 text-slate-100 font-semibold rounded-full transition-all hover:scale-105"
          >
            <MessageCircle size={16} /> Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
