import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { Github, Globe, Code2, Database, Layers, Wrench, Lightbulb, MessageSquare, BookOpen, Target, TrendingUp, CheckCircle } from "lucide-react";

export function GitHubSection() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-400 border border-indigo-400/30 rounded-full mb-4 bg-indigo-400/5">Open Source</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Code. Build. Commit. Repeat.</h2>
            <p className="text-slate-400 leading-relaxed mb-8">My GitHub contains experiments, learning projects, applications, and ongoing development work. Every commit represents progress.</p>
            <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 hover:border-indigo-400/50 text-slate-100 font-medium rounded-lg transition-all hover:shadow-lg">
              <Github size={18} /> View GitHub Profile
            </a>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[{ label: "Repositories", value: "Active" }, { label: "Contributions", value: "Growing" }, { label: "Status", value: "Building" }].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-lg border border-slate-700 bg-slate-900/40">
                <p className="text-lg font-semibold text-indigo-400">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const currentlyBuildingItems = [
  { icon: Globe, title: "Web Development", description: "Building responsive, accessible, modern interfaces." },
  { icon: Code2, title: "Python Development", description: "Developing stronger programming and backend fundamentals." },
  { icon: Layers, title: "APIs", description: "Learning how applications communicate with external services." },
  { icon: Database, title: "Full-Stack Development", description: "Connecting frontend interfaces with backend logic and data." },
  { icon: Target, title: "Real-World Projects", description: "Turning learning into usable products instead of only tutorials." },
];

export function CurrentlyBuilding() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="Focus" title="Currently Building Toward" description="What I'm actively working on and improving." />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentlyBuildingItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/40 hover:border-indigo-400/30 transition-all group h-full">
                <div className="w-10 h-10 rounded-lg bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center mb-4 group-hover:bg-indigo-400/20 transition-colors">
                  <item.icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const experienceItems = [
  { title: "Independent Development", description: "Building personal projects and experimental applications. Learning through building real things.", tags: ["Self-directed", "Project-based"] },
  { title: "Project-Based Development", description: "Designing and implementing websites and web applications with focus on functionality and clean code.", tags: ["Web Development", "Problem Solving"] },
  { title: "Continuous Learning", description: "Studying programming, software development, APIs, Git, backend concepts and modern web development practices.", tags: ["Growth", "Fundamentals"] },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="Experience" title="Development Experience" description="My development experience is built through projects, learning, and consistent practice." />
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {experienceItems.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/40 hover:border-indigo-400/30 transition-colors h-full">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-indigo-400" />
                  <h3 className="font-semibold text-slate-100">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs text-slate-500 bg-slate-800 rounded border border-slate-700">{tag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  { icon: Globe, title: "Website Development", description: "Modern responsive websites for businesses, personal brands and organizations." },
  { icon: Layers, title: "Landing Pages", description: "Conversion-focused landing pages for products, services and campaigns." },
  { icon: Code2, title: "Frontend Development", description: "Responsive interfaces built from designs or ideas." },
  { icon: Database, title: "Web Application Development", description: "Functional web applications with interactive interfaces and backend integration." },
  { icon: Wrench, title: "API Integration", description: "Connecting websites and applications to external APIs and services." },
  { icon: Lightbulb, title: "Website Improvements", description: "Fixing layout problems, responsiveness issues, broken components and frontend functionality." },
];

export function Services() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="Services" title="What I Can Build For You" description="Practical development services focused on delivering functional, well-built digital products." />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/40 hover:border-indigo-400/30 transition-all group h-full">
                <div className="w-10 h-10 rounded-lg bg-indigo-400/10 border border-indigo-400/20 flex items-center justify-center mb-4 group-hover:bg-indigo-400/20 transition-colors">
                  <service.icon size={20} className="text-indigo-400" />
                </div>
                <h3 className="text-base font-semibold text-slate-100 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const whyWorkWithMe = [
  { icon: Code2, title: "I Build", description: "I prefer learning through actual projects rather than only tutorials." },
  { icon: TrendingUp, title: "I Keep Improving", description: "Projects are treated as opportunities to identify weaknesses and improve." },
  { icon: CheckCircle, title: "I Care About Functionality", description: "A website should not only look good; its features should work." },
  { icon: BookOpen, title: "I Learn the Fundamentals", description: "I aim to understand the technology instead of depending entirely on AI-generated code." },
  { icon: MessageSquare, title: "I Communicate Clearly", description: "Project requirements, progress and limitations should be communicated directly." },
];

export function WhyWorkWithMe() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading badge="Working Style" title="Why Work With Me" description="How I approach development and collaboration." />
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {whyWorkWithMe.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <div className="p-5 rounded-xl border border-slate-700 bg-slate-900/40 hover:border-indigo-400/30 transition-colors h-full">
                <item.icon size={18} className="text-indigo-400 mb-3" />
                <h3 className="font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
