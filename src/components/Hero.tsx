import { portfolioConfig } from "../config";
import { ImageWithFallback, StatusIndicator, CodeDecoration } from "./ui";
import { ArrowRight, Github, ExternalLink } from "lucide-react";

export default function Hero() {
  const { hero, social } = portfolioConfig;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="animate-fade-in-up opacity-0 stagger-1">
              <StatusIndicator
                label={portfolioConfig.status.label}
                message={portfolioConfig.status.message}
              />
            </div>

            {/* Heading */}
            <div className="mt-6 animate-fade-in-up opacity-0 stagger-2">
              <p className="text-sm font-medium text-primary mb-2 tracking-wider uppercase">
                {hero.badge}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-text">{hero.heading}</span>
              </h1>
              <p className="mt-4 text-xl sm:text-2xl font-semibold text-text-muted leading-relaxed">
                {hero.statement}
              </p>
            </div>

            {/* Description */}
            <p className="mt-6 text-text-muted leading-relaxed max-w-lg animate-fade-in-up opacity-0 stagger-3">
              {hero.description}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up opacity-0 stagger-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/20"
              >
                {hero.primaryCTA}
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 text-text font-medium rounded-lg transition-all hover:bg-surface-light/50"
              >
                {hero.secondaryCTA}
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-text-muted hover:text-text font-medium rounded-lg transition-colors"
              >
                <Github size={16} />
                {hero.githubCTA}
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Code decoration */}
            <div className="mt-10 animate-fade-in-up opacity-0 stagger-5">
              <CodeDecoration />
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up opacity-0 stagger-3">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl scale-110" aria-hidden="true" />
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-border overflow-hidden bg-surface-light">
                <ImageWithFallback
                  src={portfolioConfig.profileImage}
                  alt={`${portfolioConfig.name} - ${portfolioConfig.title}`}
                  fallbackText="VC"
                  className="w-full h-full object-cover"
                  fallbackClassName="w-full h-full rounded-full"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-surface border border-border rounded-lg text-xs font-medium text-primary animate-float">
                ● Active
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block" aria-hidden="true">
        <div className="w-5 h-8 border-2 border-border rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
