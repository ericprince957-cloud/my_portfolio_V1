import type { Metadata } from "next";
import Link from "next/link";
import { Server, Workflow, TrendingUp, ShieldCheck, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Solutions — Digital Infrastructure, Automation, Growth & Trust",
  description:
    "Four engineering solutions from Vector Codes: Digital Infrastructure, Business Automation, Growth & Visibility, and Trust & Security — architected for Nigerian businesses.",
};

const pillars = [
  {
    id: "digital-infrastructure",
    icon: Server,
    name: "Digital Infrastructure",
    outcome: "A foundation built for scalable growth.",
    blurb:
      "Websites, Progressive Web Apps and custom portals — engineered as infrastructure, not brochures. What we architect here is what the rest of your business runs on.",
    features: [
      "Corporate and business websites",
      "Installable Progressive Web Apps",
      "Custom portals and dashboards",
      "Multi-vendor and platform architecture",
    ],
    proof: "Proven by SafeKey Pro — a property verification platform with secure agent portals and approval workflows.",
  },
  {
    id: "business-automation",
    icon: Workflow,
    name: "Business Automation",
    outcome: "Your team spends its time on business, not busywork.",
    blurb:
      "WhatsApp-ordering flows, inventory systems and lightweight internal tools that take repetitive manual work off your team's hands — structured, reliable and built around how you already operate.",
    features: [
      "WhatsApp-centric ordering and enquiry flows",
      "Inventory and record systems",
      "Approval and verification workflows",
      "Internal dashboards for operations",
    ],
    proof: "Automated verification states on SafeKey Pro replaced manual listing checks with a structured pipeline.",
  },
  {
    id: "growth-visibility",
    icon: TrendingUp,
    name: "Growth & Visibility",
    outcome: "Predictable lead generation, not guesswork.",
    blurb:
      "Search-optimized builds, structured data and analytics — so the right customers find you, and you can see exactly where they come from.",
    features: [
      "SEO built into every build",
      "Schema markup and structured data",
      "Analytics and conversion tracking",
      "Performance optimisation for search ranking",
    ],
    proof: "Every platform we ship ships with sitemaps, structured data and performance budgets as standard.",
  },
  {
    id: "trust-security",
    icon: ShieldCheck,
    name: "Trust & Security",
    outcome: "Eliminate fraud, build customer confidence.",
    blurb:
      "Verification systems, secure payments and compliance-aware engineering — because in Nigerian commerce, trust is the product. Our platforms are built to protect it.",
    features: [
      "Verification and approval systems",
      "Secure Paystack payment integration",
      "Role-based access and authentication",
      "NDPR-aware data handling",
    ],
    proof: "SafeKey Pro's verification workflow was designed specifically to keep fraudulent listings off the platform.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Solutions
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            We Architect Digital Infrastructure. <span className="text-gold">Not Just Websites.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Four solutions, one goal: measurable business growth. Everything we build is designed around
            an outcome — a foundation to scale on, work taken off your team, leads you can predict, and
            trust your customers can rely on.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={"https://wa.me/2347084547988?text=" + encodeURIComponent("Hi Prince, I'd like to schedule a free audit with Vector Codes. (via /solutions)")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Schedule Free Audit <ArrowRight size={16} />
            </a>
            <Link href="/projects" className="ghost-btn inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.id} className="h-full" delay={Math.min(i * 0.06, 0.3)}>
              <div className="card flex h-full flex-col rounded-xl p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                  <pillar.icon size={20} />
                </span>
                <h2 className="mt-4 text-xl font-bold text-white">{pillar.name}</h2>
                <p className="mt-1 text-sm font-medium text-gold">{pillar.outcome}</p>
                <p className="mt-3 text-sm leading-relaxed text-subtle">{pillar.blurb}</p>
                <Link
                  href={"#"+pillar.id}
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {pillars.map((pillar) => (
        <section key={pillar.id} id={pillar.id} className="scroll-mt-24 border-t border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                <pillar.icon size={20} />
              </span>
              <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">{pillar.name}</h2>
              <p className="mt-2 text-sm font-medium text-gold">{pillar.outcome}</p>
              <p className="mt-4 text-sm leading-relaxed text-subtle">{pillar.blurb}</p>
              <p className="mt-4 rounded-lg border border-gold/25 bg-gold/5 p-4 text-xs leading-relaxed text-subtle">
                <span className="font-semibold text-gold">Proof of work:</span> {pillar.proof}
              </p>
            </div>
            <div className="card rounded-xl p-6">
              <h3 className="text-sm font-semibold text-white">What this includes</h3>
              <ul className="mt-4 space-y-3">
                {pillar.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm leading-relaxed text-subtle">
                    <Check size={15} className="mt-0.5 shrink-0 text-gold" /> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
