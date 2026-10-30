import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Technology with Purpose",
  description:
    "Vector Codes is a Nigerian digital solutions company building modern websites and practical digital products. Meet Prince Eric, Founder & Lead Developer.",
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
            Vector Codes is a Nigerian digital solutions brand focused on building modern websites
            and practical digital products. We work with small and medium-sized businesses, startups,
            professional firms and established companies across Nigeria — helping them establish
            credibility and operate more effectively online.
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
                alt="Prince Eric — Founder & Lead Developer of Vector Codes"
                width={160}
                height={160}
                loading="lazy"
                className="mx-auto h-24 w-24 rounded-full border border-gold/40 object-cover"
              />
              <h2 className="mt-5 text-xl font-bold text-white">Prince Eric</h2>
              <p className="mt-1 text-sm text-gold">Founder & Lead Developer</p>
              <p className="mt-2 text-xs text-subtle">Vector Codes</p>
            </div>
            <div>
              <SectionHeading
                align="left"
                badge="Founder"
                title="A student-founder building for real businesses."
                description="Prince Eric is a student-founder and developer building digital products, business websites and technology solutions. He leads development at Vector Codes — designing, building and shipping every project with attention to performance, usability and the client's actual business needs."
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
