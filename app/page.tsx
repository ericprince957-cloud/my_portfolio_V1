import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { projects, verifiedReview } from "@/data/projects";
import { Target, Smartphone, Gauge, LifeBuoy, Quote, Star, Search, Compass, Code2, EyeCheck, Rocket } from "lucide-react";

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
  { icon: EyeCheck, step: "04", title: "Review", text: "You review the website and request agreed changes." },
  { icon: Rocket, step: "05", title: "Launch", text: "We deploy your website and assist with launch." },
];

export default function HomePage() {
  const clientCount = projects.filter((p) => p.category === "Client Project").length;
  const liveCount = projects.filter((p) => p.liveUrl).length;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vector Codes",
    description:
      "Nigerian web development company building business websites, e-commerce platforms and custom web applications.",
    url: "https://vectorcodes.vercel.app",
    email: "vectorcodes15@gmail.com",
    telephone: "+2347084547988",
    address: { "@type": "PostalAddress", addressRegion: "Abia State", addressCountry: "NG" },
    areaServed: { "@type": "Country", name: "Nigeria" },
    sameAs: ["https://github.com/ericprince957-cloud", "https://wa.me/2347084547988"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero />

      {/* ── TRUST / CREDIBILITY ─────────────────────────────── */}
      <section className="border-b border-line bg-surface" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <SectionHeading
            title="Built with Purpose. Delivered with Care."
            description="No invented logos, certifications or statistics. Real completed projects, real client relationships and verified feedback only."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="card rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-gold">{clientCount}</p>
              <p className="mt-1 text-sm text-subtle">Client projects delivered</p>
            </div>
            <div className="card rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-gold">{liveCount}</p>
              <p className="mt-1 text-sm text-subtle">Live websites & platforms</p>
            </div>
            <div className="card rounded-xl p-6 text-center">
              <p className="text-3xl font-bold text-gold">100%</p>
              <p className="mt-1 text-sm text-subtle">Mobile-optimised builds</p>
            </div>
          </div>

          {/* Verified review — real Google review */}
          <figure className="card mx-auto mt-8 max-w-2xl rounded-xl p-8 text-center">
            <Quote size={22} className="mx-auto text-gold/60" aria-hidden="true" />
            <blockquote className="mt-4 text-base italic leading-relaxed text-subtle">
              "{verifiedReview.quote}"
            </blockquote>
            <div className="mt-4 flex justify-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" aria-hidden="true" />
              ))}
            </div>
            <figcaption className="mt-3">
              <span className="text-sm font-semibold text-white">{verifiedReview.author}</span>
              <span className="block text-xs text-subtle">{verifiedReview.role} — {verifiedReview.source}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="border-b border-line" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHeading
            badge="Services"
            title="Digital Solutions for Modern Businesses"
            description="From business websites to custom platforms — solutions designed to establish credibility and support how your business actually operates."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
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
