import { portfolioConfig, images } from "../config";
import { ImageWithFallback, ScrollReveal, SectionHeading } from "./ui";
import { MapPin, Code, Target, Rocket } from "lucide-react";

const infoCards = [
  { icon: Code, label: "Role", value: "Web Developer" },
  { icon: MapPin, label: "Location", value: portfolioConfig.location },
  { icon: Target, label: "Focus", value: portfolioConfig.focus },
  { icon: Rocket, label: "Current Direction", value: portfolioConfig.currentDirection },
];

const journeySteps = [
  {
    title: "Started With the Fundamentals",
    description: "HTML, CSS, basic web structure and styling.",
    period: "Foundation",
  },
  {
    title: "Moved Into Programming",
    description: "Python, programming logic, functions, data structures and file handling.",
    period: "Growth",
  },
  {
    title: "Started Building Applications",
    description: "APIs, JSON, CSV, modules, authentication concepts, automation and practical applications.",
    period: "Expansion",
  },
  {
    title: "Working With Real Projects",
    description: "Web applications, GitHub repositories, payment-related integrations, APIs and deployed projects.",
    period: "Application",
  },
  {
    title: "Current Direction",
    description: "Becoming a stronger full-stack developer by combining frontend development with Python/backend development.",
    period: "Now",
  },
];

export default function About() {
  const { about } = portfolioConfig;

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="About"
            title={about.heading}
            description="More than just code — a developer focused on building, learning, and shipping."
          />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image + Info Cards */}
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              {/* About Image */}
              <div className="rounded-xl overflow-hidden border border-border bg-surface-light aspect-[4/3]">
                <ImageWithFallback
                  src={images.about}
                  alt="About Prince Eric"
                  fallbackText="VC"
                  className="w-full h-full object-cover"
                  fallbackClassName="w-full h-full"
                />
              </div>

              {/* Info Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                {infoCards.map((card) => (
                  <div
                    key={card.label}
                    className="p-4 rounded-lg border border-border bg-surface/60 hover:border-primary/30 transition-colors"
                  >
                    <card.icon size={16} className="text-primary mb-2" />
                    <p className="text-xs text-text-dim mb-1">{card.label}</p>
                    <p className="text-sm font-medium text-text">{card.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Text Content */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-text-muted leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Code snippet decoration */}
              <div className="code-block text-text-dim" aria-hidden="true">
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">goal</span> ={" "}
                <span className="text-green-400">"Build → Learn → Improve → Repeat"</span>;
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Developer Journey Timeline */}
        <div className="mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-text text-center mb-12">
              Development Journey
            </h3>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-px"
              aria-hidden="true"
            />

            <div className="space-y-8">
              {journeySteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full border-2 border-surface -translate-x-1.5 md:-translate-x-1.5 mt-1.5 z-10" />

                    {/* Content */}
                    <div
                      className={`ml-10 md:ml-0 md:w-1/2 ${
                        i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="p-5 rounded-lg border border-border bg-surface/40 hover:border-primary/30 transition-colors">
                        <span className="text-xs font-medium text-primary tracking-wider uppercase">
                          {step.period}
                        </span>
                        <h4 className="text-lg font-semibold text-text mt-1 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
