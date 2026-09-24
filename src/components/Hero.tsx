import { portfolioConfig } from "../config";
import { ImageWithFallback, StatusIndicator, CodeDecoration } from "./ui";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function Hero() {
  const { hero, social } = portfolioConfig;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fade-in-up opacity-0 stagger-1">
              <StatusIndicator label={portfolioConfig.status.label} message={portfolioConfig.status.message} />
            </div>
            <div className="mt-6 animate-fade-in-up opacity-0 stagger-2">
              <p className="text-sm font-medium text-indigo-400 mb-2 tracking-wider uppercase">{hero.badge}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-slate-100">{hero.heading}</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-400 leading-relaxed">{hero.statement}</p>
            </div>
            <p className="mt-6 text-slate-400 leading-relaxed max-w-lg animate-fade-in-up opacity-0 stagger-3">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up opacity-0 stagger-4">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/20">
                {hero.primaryCTA} <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-indigo-400/50 text-slate-100 font-medium rounded-lg transition-all hover:bg-slate-800/50">
                {hero.secondaryCTA}
              </a>
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 text-slate-400 hover:text-slate-100 font-medium rounded-lg transition-colors">
                <Github size={16} /> {hero.githubCTA} <ExternalLink size={12} />
              </a>
            </div>
            <div className="mt-10 animate-fade-in-up opacity-0 stagger-5">
              <CodeDecoration />
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up opacity-0 stagger-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-xl scale-110" aria-hidden="true" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-slate-700 overflow-hidden bg-slate-800">
                <ImageWithFallback src={portfolioConfig.profileImage} alt={`${portfolioConfig.name} - ${portfolioConfig.title}`} fallbackText="VC" className="w-full h-full object-cover" fallbackClassName="w-full h-full rounded-full" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs font-medium text-indigo-400 animate-float">
                ● Active
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
        <div className="w-5 h-8 border-2 border-slate-700 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-indigo-500 rounded-full" />
        </div>
      </div>
    </section>
  );
}
