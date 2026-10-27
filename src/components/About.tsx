import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { MapPin, Code, Target, Rocket, TrendingUp } from "lucide-react";

const infoCards = [
  { icon: Code, label: "Role", value: "Full-Stack Developer" },
  { icon: MapPin, label: "Location", value: portfolioConfig.location },
  { icon: Target, label: "Focus", value: portfolioConfig.focus },
  { icon: Rocket, label: "Current Direction", value: portfolioConfig.currentDirection },
];



export default function About() {
  const { about } = portfolioConfig;
  
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

        {/* Developer Journey + stats removed — About now focuses on bio, focus areas and approach. */}
          </div>
        </div>
      </div>
    </section>
  );
}
