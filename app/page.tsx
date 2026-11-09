import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { services, pillars } from "@/data/services";
import { projects } from "@/data/projects";
import { Target, Smartphone, Gauge, LifeBuoy, Search, Compass, Code2, ClipboardCheck, Rocket, ShieldCheck, MessageCircle, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Vector Codes — Web Development Company in Nigeria",
  description:
    "Vector Codes is a Nigerian web development company building business websites, e-commerce platforms and custom web applications for SMEs, startups and established companies across Nigeria.",
};

const whyBlocks = [
  {
    icon: Target,
    title: "Business-Focused Development",
    text: "We build solutions around real business needs, not just visual appearance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Experience",
    text: "Websites designed to work beautifully across smartphones, tablets and desktops.",
  },
  {
    icon: Gauge,
    title: "Performance & Quality",
    text: "Clean implementation, optimised assets and attention to website performance.",
  },
  {
    icon: LifeBuoy,
    title: "Ongoing Support",
    text: "We care about what happens after your website goes live.",
  },
];

const processSteps = [
  { icon: Search, step: "01", title: "Discovery", text: "We understand your business, audience and goals." },
  { icon: Compass, step: "02", title: "Strategy & Design", text: "We plan the website structure and user experience." },
  { icon: Code2, step: "03", title: "Development", text: "We build and test your website." },
  { icon: ClipboardCheck, step: "04", title: "Review", text: "You review the website and request agreed changes." },
  { icon: Rocket, step: "05", title: "Launch", text: "We deploy your website and assist with launch." },
];

export default function HomePage() {
  const products = projects.filter((p) => p.category !== "Client Project");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vector Codes",
    description:
      "Nigerian web development company building business websites, e-commerce platforms and custom web applications.",
    url: "https://vectorcodes.vercel.app",
    email: "hello@vectorcodes.com.ng",
    telephone: "+2347084547988",
    address: { "@type": "PostalAddress", addressRegion: "Abia State", addressCountry: "NG" },
    areaServed: { "@type": "Country", name: "Nigeria" },
    sameAs: ["https://github.com/ericprince957-cloud", "https://wa.me/2347084547988"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

<Hero />

      {/* ── SOCIAL PROOF (above the fold) ───────────────────── */}
      <section className="border-b border-line bg-surface" aria-label="What clients say">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 md:py-16">
          <p className="text-base italic leading-relaxed text-white md:text-lg">
            &ldquo;When you deliver this well, we have more projects.&rdquo;
          </p>
          <p className="mt-3 text-xs text-subtle">
            Samuel Chukwuemeka — Founder, Techlaza (SafeKey Pro client)
          </p>
          <p className="mt-6 text-[11px] font-medium tracking-[0.18em] text-subtle uppercase">
            Real work for real businesses — Techlaza &middot; SafeKey Pro &middot; Ugoo Uzoho &amp; Co.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-4 py-2.5">
            <ShieldCheck size={16} className="shrink-0 text-gold" aria-hidden="true" />
            <p className="text-left text-[11px] leading-relaxed text-subtle">
              <span className="font-semibold text-white">Support &amp; Maintenance SLA</span> — ongoing technical support after launch, with agreed response times.
            </p>
          </div>
        </div>
      </section>

      {/* ── START A PROJECT (CONVERSION) ────────────────────── */}
      <section className="border-b border-line bg-surface" aria-labelledby="start-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
          <SectionHeading
            badge="Start a Project"
            title="Have an Idea? Let&rsquo;s Scope It — Free."
            description="Tell us what you want to build. Within one conversation you will know exactly what it takes — the technical approach, the timeline and the cost. No jargon, no obligation."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                step: "01",
                title: "Message Us on WhatsApp",
                text: "One message is all it takes. Tell us what you want to build in plain language — no technical details required.",
              },
              {
                icon: FileText,
                step: "02",
                title: "Get a Free Technical Audit",
                text: "We review your idea, current website or market and map out what your project genuinely needs — and what it does not.",
              },
              {
                icon: ClipboardCheck,
                step: "03",
                title: "Receive a Clear Proposal",
                text: "Scope, timeline and price in writing. If it makes sense for your business, we start. If not, you keep the audit — free.",
              },
            ].map((step, i) => (
              <Reveal key={step.step} className="h-full" delay={Math.min(i * 0.08, 0.3)}>
                <div className="card h-full rounded-xl p-6">
                  <span className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                      <step.icon size={18} aria-hidden="true" />
                    </span>
                    <span className="font-serif text-lg font-bold text-gold/40">{step.step}</span>
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="card mx-auto mt-10 max-w-3xl rounded-xl p-8 text-center md:p-10">
              <h3 id="start-heading" className="text-xl font-bold text-white md:text-2xl">
                Your project starts with <span className="text-gold">one message.</span>
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-subtle">
                We reply during business hours — usually the same day. Every conversation starts with a free technical audit, whether you end up working with us or not.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/2347084547988?text=Hi%20Prince%2C%20I%20visited%20the%20Vector%20Codes%20website%20and%20I%20would%20like%20a%20free%20technical%20audit%20for%20my%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold/90"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Start on WhatsApp — Free Audit Included
                </a>
                <a
                  href="mailto:hello@vectorcodes.com.ng"
                  className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 text-sm font-medium text-subtle transition hover:border-gold/40 hover:text-white"
                >
                  <Mail size={16} aria-hidden="true" />
                  hello@vectorcodes.com.ng
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            badge="Capability Pillars"
            title="Three Pillars. One Standard of Engineering."
            description="Our team is organised into three delivery pillars — so whatever your project is, it is handled by people who do that kind of work every day."
          />
          <div className="mt-12 space-y-12">
            {pillars.map((pillar) => (
              <div key={pillar.name}>
                <div className="flex items-center gap-3">
                  <h3 className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">{pillar.name}</h3>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-subtle">{pillar.blurb}</p>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {services
                    .filter((service) => service.pillar === pillar.name)
                    .map((service, i) => (
                      <ServiceCard key={service.slug} service={service} index={i} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ──────────────────────────────── */}
      <section className="border-b border-line bg-surface" aria-labelledby="work-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            badge="Selected Work"
            title="Selected Work"
            description="Client projects, internal products and platforms in development — presented honestly, with real links to real websites."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS & EXPERIMENTS ───────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="experiments-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            badge="Building in Public"
            title="Products & Experiments"
            description="Client projects pay the bills — but a company should also build things of its own. These are the products and experiments we are developing, labelled honestly: internal products that are live, and products still in development."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {/* VectorVault mission */}
          <Reveal>
            <figure className="card mx-auto mt-10 max-w-3xl rounded-xl p-8 text-center">
              <p className="text-xs font-medium tracking-[0.2em] text-gold uppercase">Our Product Mission</p>
              <blockquote className="mt-4 text-lg italic leading-relaxed text-white md:text-xl">
                &ldquo;To build a simple, accessible code hosting and collaboration platform that serves the next generation of African developers.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-xs text-subtle">
                Prince Eric — Founder & Lead Architect, Vector Codes
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── WHY CHOOSE VECTOR CODES ──────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading title="Why Businesses Choose Vector Codes" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyBlocks.map((block, i) => (
              <Reveal key={block.title} className="h-full" delay={Math.min(i * 0.06, 0.3)}>
              <div className="card h-full rounded-xl p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                  <block.icon size={18} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-white">{block.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-subtle">{block.text}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ──────────────────────────────────────── */}
      <section className="border-b border-line bg-surface" aria-labelledby="process-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading title="A Clear Process. Better Results." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} className="h-full" delay={Math.min(i * 0.08, 0.4)}>
              <li className="card h-full rounded-xl p-6">
                <span className="flex items-center justify-between">
                  <step.icon size={18} className="text-gold" aria-hidden="true" />
                  <span className="font-serif text-lg font-bold text-gold/40">{step.step}</span>
                </span>
                <h3 className="mt-3 text-sm font-semibold text-white">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-subtle">{step.text}</p>
              </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </>
  );
}
