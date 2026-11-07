import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Technology with Purpose",
  description:
    "Vector Codes is a Nigerian digital solutions company building modern websites and practical digital products. Meet Prince Eric, Technical Director & Founder.",
};

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "WordPress",
  "WooCommerce",
  "Vercel",
  "Supabase",
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            About Vector Codes
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technology with Purpose.
            <br />
            <span className="text-gold">Building for What's Next.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Vector Codes is a Nigerian digital agency and software development company. Our team designs
            and engineers the platforms, storefronts and corporate experiences African businesses
            grow on — for small and medium-sized businesses, startups, professional firms and
            established companies across Nigeria. We deliver engineering excellence, reliability
            and measurable business growth — and we stay after launch, with Support &amp; Maintenance
            SLA options on every project.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="card rounded-2xl p-8 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://avatars.githubusercontent.com/u/237650729?v=4"
                alt="Prince Eric — Technical Director & Founder of Vector Codes"
                width={160}
                height={160}
                loading="lazy"
                className="mx-auto h-24 w-24 rounded-full border border-gold/40 object-cover"
              />
              <h2 className="mt-5 text-xl font-bold text-white">Prince Eric</h2>
              <p className="mt-1 text-sm text-gold">Technical Director & Founder</p>
              <p className="mt-2 text-xs text-subtle">Vector Codes</p>
            </div>
            <div>
              <SectionHeading
                align="left"
                badge="Founder"
                title="Founder-led. Team-delivered. Built to business standards."
                description="Prince Eric, Technical Director & Founder of Vector Codes, leads our engineering team with a focus on engineering excellence, reliability and business growth — not just writing code. He recently directed the SafeKey Pro delivery for Techlaza, a property verification platform, and is leading the upcoming multi-vendor marketplace and delivery logistics platform that followed."
              />
              <div className="mt-8">
                <p className="text-xs font-semibold tracking-[0.18em] text-subtle uppercase">Technologies he works with</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span key={tech} className="rounded-md border border-line bg-card px-3 py-1 text-xs text-subtle">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-28">
          <Quote size={24} className="mx-auto text-gold/60" aria-hidden="true" />
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-relaxed text-white md:text-3xl">
            "To build useful digital products and technology solutions that help Nigerian businesses
            and communities participate more effectively in the digital economy."
          </blockquote>
          <p className="mt-6 text-xs font-medium tracking-[0.22em] text-subtle uppercase">
            Vector Codes — Company Vision
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
