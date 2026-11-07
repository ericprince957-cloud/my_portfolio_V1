import type { Metadata } from "next";
import { ShieldCheck, MapPin, Handshake, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Company — Mission, Values & Team",
  description:
    "Vector Codes exists to eliminate digital friction in Nigerian commerce. Meet our mission, our values and our founder, Prince Eric.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "We build verification, access control and safe payment flows into our platforms from the first line of code — not as an afterthought.",
  },
  {
    icon: MapPin,
    title: "Local Context",
    text: "Optimised for Nigerian networks, Naira pricing, WhatsApp-first customers and the realities of how business is actually done here.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We architect for the relationship, not the invoice. Support SLAs, roadmaps and honest advice — before, during and after launch.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Company
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Digital Business Solutions. <span className="text-gold">Built in Nigeria, for Nigeria.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Vector Codes is a digital transformation partner for Nigerian businesses — a team that
            architects, builds and maintains the platforms commerce runs on.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <Quote size={24} className="mx-auto text-gold/60" aria-hidden="true" />
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-relaxed text-white md:text-3xl">
            &ldquo;To eliminate digital friction in Nigerian commerce by building secure, accessible,
            and locally-optimised technology platforms.&rdquo;
          </blockquote>
          <p className="mt-6 text-xs font-medium tracking-[0.22em] text-subtle uppercase">
            Vector Codes — Our Mission
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <SectionHeading badge="Core Values" title="What We Hold the Line On" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} className="h-full" delay={Math.min(i * 0.06, 0.3)}>
                <div className="card h-full rounded-xl p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                    <value.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading badge="Founder" title="Founder & Lead Architect" />
        <Reveal>
          <div className="card mx-auto mt-10 max-w-2xl rounded-2xl p-8 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/237650729?v=4"
              alt="Prince Eric — Founder & Lead Architect of Vector Codes"
              width={160}
              height={160}
              loading="lazy"
              className="mx-auto h-24 w-24 rounded-full border border-gold/40 object-cover"
            />
            <h3 className="mt-5 text-xl font-bold text-white">Prince Eric</h3>
            <p className="mt-1 text-sm text-gold">Founder &amp; Lead Architect, Vector Codes</p>
            <p className="mt-4 text-sm leading-relaxed text-subtle">
              Building tech infrastructure for African businesses. Leading the engineering behind SafeKey Pro
              and VectorVault, and mentoring the next generation of developers at ABSU.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
