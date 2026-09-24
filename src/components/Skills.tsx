import { ScrollReveal, SectionHeading } from "./ui";

interface SkillGroup {
  title: string;
  skills: { name: string; level: "Learning" | "Building With" | "Comfortable" | "Familiar" }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: "Comfortable" },
      { name: "CSS3", level: "Comfortable" },
      { name: "Responsive Design", level: "Building With" },
      { name: "Flexbox", level: "Comfortable" },
      { name: "CSS Grid", level: "Building With" },
      { name: "JavaScript", level: "Building With" },
    ],
  },
  {
    title: "Programming",
    skills: [
      { name: "Python", level: "Building With" },
      { name: "Programming Fundamentals", level: "Comfortable" },
      { name: "Object-Oriented Programming", level: "Learning" },
      { name: "File Handling", level: "Comfortable" },
      { name: "JSON", level: "Comfortable" },
      { name: "CSV", level: "Comfortable" },
      { name: "Error Handling", level: "Building With" },
    ],
  },
  {
    title: "Backend / APIs",
    skills: [
      { name: "REST APIs", level: "Learning" },
      { name: "HTTP Methods", level: "Familiar" },
      { name: "API Authentication", level: "Learning" },
      { name: "Requests", level: "Building With" },
      { name: "JSON APIs", level: "Building With" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: "Building With" },
      { name: "GitHub", level: "Comfortable" },
      { name: "VS Code", level: "Comfortable" },
      { name: "Pydroid", level: "Building With" },
      { name: "Termux", level: "Building With" },
    ],
  },
  {
    title: "Other",
    skills: [
      { name: "Payment Integration Concepts", level: "Learning" },
      { name: "AI-Assisted Development", level: "Building With" },
      { name: "Database Concepts", level: "Learning" },
      { name: "Web Deployment", level: "Familiar" },
      { name: "UI/UX Implementation", level: "Building With" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Learning: "text-yellow-400 bg-yellow-400/10 border-yellow-400/30",
  "Building With": "text-primary bg-primary/10 border-primary/30",
  Comfortable: "text-green-400 bg-green-400/10 border-green-400/30",
  Familiar: "text-text-dim bg-surface-lighter border-border",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Skills"
            title="Tools I Build With"
            description="Technologies and tools I'm currently working with, learning, or comfortable using. Skill levels are represented honestly."
          />
        </ScrollReveal>

        {/* Skill Level Legend */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.entries(levelColors).map(([level, classes]) => (
              <span
                key={level}
                className={`px-3 py-1 text-xs font-medium rounded-full border ${classes}`}
              >
                {level}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Skill Groups */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 80}>
              <div className="p-6 rounded-xl border border-border bg-surface/40 hover:border-primary/20 transition-colors h-full">
                <h3 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {group.title}
                </h3>
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-surface-light/50 transition-colors"
                    >
                      <span className="text-sm text-text-muted">{skill.name}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[skill.level]}`}
                      >
                        {skill.level}
                      </span>
                    </div>
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
