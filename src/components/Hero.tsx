import { portfolioConfig } from "../config";
import { ImageWithFallback, StatusIndicator, CodeDecoration } from "./ui";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
  const { hero, social } = portfolioConfig;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 light:from-slate-100 light:via-white light:to-slate-100" aria-hidden="true" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up opacity-0 stagger-1">
            <StatusIndicator label={portfolioConfig.status.label} message={portfolioConfig.status.message} />
          </div>
          
          <div className="mt-8 animate-fade-in-up opacity-0 stagger-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
              Professional Web Developer in Abia State
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Vector Codes is a premier digital agency providing custom web development, mobile-friendly website design, and software solutions for growing businesses in Aba, Umuahia, and across Abia State. We turn your ideas into high-performing digital platforms that attract customers and scale your operations.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4 animate-fade-in-up opacity-0 stagger-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
              {hero.primaryCTA} <ArrowRight size={18} />
            </a>
            <a href={hero.secondaryCTALink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 glass-card hover:bg-white/15 text-slate-100 font-semibold rounded-xl transition-all hover:scale-105">
              <MessageCircle size={18} /> {hero.secondaryCTA}
            </a>
          </div>

          <div className="mt-12 animate-fade-in-up opacity-0 stagger-4">
            <CodeDecoration />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
