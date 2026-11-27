import type { Metadata } from "next";
import {
  ShieldCheck,
  MapPin,
  Handshake,
  Quote,
  Building2,
  Activity,
  Workflow,
  GraduationCap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About Vector Codes | Nigerian Digital Solutions Company",
  description:
    "Meet Vector Codes, a Nigerian web development company building business websites, online stores and custom digital platforms.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    text: "We consider verification, access control and responsible data handling from the beginning of a project — not as an afterthought.",
  },
  {
    icon: MapPin,
    title: "Local Context",
    text: "We build with Nigerian businesses and users in mind, including mobile-first experiences, local payment realities and WhatsApp-led customer journeys.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    text: "We value clear communication, honest advice and dependable support before, during and after a project goes live.",
  },
];

const milestones = [
  {
    icon: Building2,
    label: "Business milestone",
    title: "SMEDAN registration completed",
    text: "Vector Codes completed its SMEDAN registration — an important early step in putting the company's business administration and long-term growth on a stronger footing.",
    status: "Completed",
  },
  {
    icon: Activity,
    label: "Client delivery",
    title: "Ugoo Uzoho & Company digital platform",
    text: "We have been developing the firm's professional website and a separate administrative workspace. The planned admin tools focus on website traffic insights, visitor interactions, image and quote management, and account settings.",
    status: "Client work",
  },
  {
    icon: Workflow,
    label: "Internal operations",
    title: "Vector Control and Vectors Realty",
    text: "We are expanding our internal business management system to support multiple company workspaces — bringing Vector Codes and Vectors Realty into one organised control environment.",
    status: "In development",
  },
  {
    icon: GraduationCap,
    label: "Community product",
    title: "Digital solutions for the ABSU community",
    text: "Our work includes student-focused digital products such as ABSU Trade, built to help students discover trusted sellers and support campus entrepreneurship.",
    status: "Product development",
  },
];

export default function CompanyPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            About Vector Codes
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Technology for business.{" "}
            <span className="text-gold">Built with purpose.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Vector Codes is a Nigerian digital solutions company helping
            businesses, professionals and communities establish a stronger
            digital presence through websites, web applications and practical
            technology platforms.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <Quote size={24} className="mx-auto text-gold/60" aria-hidden="true" />
          <blockquote className="mt-6 font-serif text-2xl font-medium leading-relaxed text-white md:text-3xl">
            &ldquo;To build useful, accessible and dependable technology that
            helps African businesses and communities move forward.&rdquo;
          </blockquote>
          <p className="mt-6 text-xs font-medium tracking-[0.22em] text-subtle uppercase">
            Vector Codes — Our Mission
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <SectionHeading
            badge="Company Progress"
            title="What We Are Building"
            description="Our progress is measured by the work we deliver, the systems we improve and the foundations we put in place for sustainable growth."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {milestones.map((item, i) => (
              <Reveal
                key={item.title}
                className="h-full"
                delay={Math.min(i * 0.06, 0.3)}
              >
                <article className="card h-full rounded-xl p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                      <item.icon size={20} aria-hidden="true" />
                    </span>
                    <span className="rounded-full border border-line px-3 py-1 text-[10px] font-medium tracking-wide text-subtle">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-5 text-[10px] font-semibold tracking-[0.18em] text-gold uppercase">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-subtle">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs leading-relaxed text-subtle">
            We distinguish completed milestones from ongoing work. Project
            features and timelines may evolve as delivery progresses.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-24">
          <SectionHeading badge="Core Values" title="What We Hold the Line On" />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal
                key={value.title}
                className="h-full"
                delay={Math.min(i * 0.06, 0.3)}
              >
                <div className="card h-full rounded-xl p-7">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                    <value.icon size={20} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-subtle">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-24">
        <SectionHeading badge="Founder" title="Founder & Lead" />
        <Reveal>
          <div className="card mx-auto mt-10 max-w-2xl rounded-2xl p-8 text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/237650729?v=4"
              alt="Prince Eric — Founder of Vector Codes"
              width={160}
              height={160}
              loading="lazy"
              className="mx-auto h-24 w-24 rounded-full border border-gold/40 object-cover"
            />
            <h3 className="mt-5 text-xl font-bold text-white">Prince Eric</h3>
            <p className="mt-1 text-sm text-gold">Founder, Vector Codes</p>
            <p className="mt-4 text-sm leading-relaxed text-subtle">
              Leading Vector Codes with a focus on practical digital solutions,
              client partnerships and technology products shaped around the
              needs of Nigerian businesses and communities.
            </p>
          </div>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
