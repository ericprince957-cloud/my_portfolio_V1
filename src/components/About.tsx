import { useState, useEffect } from "react";
import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { MapPin, Code, Target, Rocket, TrendingUp } from "lucide-react";

const infoCards = [
  { icon: Code, label: "Role", value: "Full-Stack Developer" },
  { icon: MapPin, label: "Location", value: portfolioConfig.location },
  { icon: Target, label: "Focus", value: portfolioConfig.focus },
  { icon: Rocket, label: "Current Direction", value: portfolioConfig.currentDirection },
];

const journeySteps = [
  { title: "Started With the Fundamentals", description: "HTML, CSS, basic web structure and styling.", period: "Foundation" },
  { title: "Moved Into Programming", description: "Python, programming logic, functions, data structures and file handling.", period: "Growth" },
  { title: "Started Building Applications", description: "APIs, JSON, CSV, modules, authentication concepts, automation and practical applications.", period: "Expansion" },
  { title: "Working With Real Projects", description: "Web applications, GitHub repositories, payment-related integrations, APIs and deployed projects.", period: "Application" },
  { title: "Current Direction", description: "Becoming a stronger full-stack developer by combining frontend development with Python/backend development.", period: "Now" },
];

/**
 * Animated counter component
 */
function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="text-center p-6 glass-card rounded-2xl hover:scale-105 transition-transform">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="text-sm text-slate-400 mt-2">{label}</div>
    </div>
  );
}

export default function About() {
  const { about, stats } = portfolioConfig;
  
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="About" title={about.heading} description="More than just code — a developer focused on building, learning, and shipping." />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">{about.bio}</p>
                <div className="grid grid-cols-2 gap-4">
                  {infoCards.map((card) => (
                    <div key={card.label} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition-colors">
                      <card.icon size={16} className="text-cyan-400 mb-2" />
                      <p className="text-xs text-slate-500 mb-1">{card.label}</p>
                      <p className="text-sm font-medium text-slate-100">{card.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-cyan-400" />
                  My Approach
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  My approach is simple: learn the fundamentals, build real projects, identify what doesn't work, fix it, and keep improving.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  I enjoy building websites, experimenting with APIs, working with Python, creating practical web applications, and learning how different parts of modern software systems fit together.
                </p>
              </div>
              <div className="code-block text-slate-500" aria-hidden="true">
                <span className="text-cyan-400">const</span>{" "}
                <span className="text-indigo-400">goal</span> ={" "}
                <span className="text-green-400">"Build → Learn → Improve → Repeat"</span>;
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Counter */}
        <ScrollReveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </ScrollReveal>

        {/* Developer Journey Timeline */}
        <div className="mt-24">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-slate-100 text-center mb-12">Development Journey</h3>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/50 via-slate-700 to-transparent md:-translate-x-px" aria-hidden="true" />
            <div className="space-y-8">
              {journeySteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`relative flex flex-col md:flex-row items-start gap-4 md:gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-900 -translate-x-1.5 mt-1.5 z-10" />
                    <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                      <div className="glass-card rounded-xl p-5 hover:border-cyan-400/30 transition-colors">
                        <span className="text-xs font-medium text-cyan-400 tracking-wider uppercase">{step.period}</span>
                        <h4 className="text-lg font-semibold text-slate-100 mt-1 mb-2">{step.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
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
