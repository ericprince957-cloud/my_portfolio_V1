import type { Metadata } from "next";
import { Search, FileText, Code2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Our Process — Discovery, Strategy, Build, Scale",
  description:
    "How Vector Codes delivers: Free Digital Audit, Custom Proposal, Strategic Build and Launch + Scale. We don't deliver and disappear — we architect for long-term partnership.",
};

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Free Digital Audit",
    text: "We start by understanding your business, its pain points and where digital can remove friction — no cost, no obligation. You get our honest assessment either way.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Custom Proposal",
    text: "A structured proposal with agreed scope, timeline and a transparent quote — built around your budget and the outcomes we identified together.",
  },
  {
    icon: Code2,
    num: "03",
    title: "Strategic Build",
    text: "Our team builds in stages with weekly updates — no radio silence, no surprises. You see progress as it happens and review at agreed checkpoints.",
  },
  {
    icon: Rocket,
    num: "04",
    title: "Launch + Scale",
    text: "We deploy, train your team, and hand over documentation. Then we stay — with Support & Maintenance SLA options and a growth roadmap for what comes next.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Our Process
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            We Don't Deliver and Disappear. <span className="text-gold">We Architect Partnership.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Four stages, full transparency. From the first conversation to long after launch,
            you always know where your project stands and who is handling it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-24">
        <ol className="relative space-y-8 border-l border-line pl-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={Math.min(i * 0.08, 0.3)}>
              <li className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[52px] flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-card text-gold"
                >
                  <step.icon size={16} />
                </span>
                <div className="card rounded-xl p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-lg font-bold text-white">{step.title}</h2>
                    <span className="font-serif text-lg font-bold text-gold/40">{step.num}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">{step.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="mt-12 rounded-xl border border-gold/30 bg-gold/5 p-6 text-center text-base leading-relaxed text-white">
            Long-term partnership is the default, not an upsell. Every project ships with
            <span className="font-semibold text-gold"> Support &amp; Maintenance SLA</span> options.
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
