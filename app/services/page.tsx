import type { Metadata } from "next";
import Link from "next/link";
import { services, pillars } from "@/data/services";
import { Check, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Core Infrastructure, Digital Commerce & Corporate Presence",
  description:
    "Vector Codes is a Nigerian digital agency organised into three engineering pillars: Core Infrastructure, Digital Commerce and Corporate Presence. Request an enterprise proposal.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Capability Pillars
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Three Pillars. <span className="text-gold">One Standard of Engineering.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Our team is organised into three delivery pillars — so whatever your project is,
            it is handled by people who do that kind of work every day. Every engagement is
            quoted individually and backed by our post-launch Support &amp; Maintenance SLA.
          </p>
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3" aria-label="Support and Maintenance SLA">
            <ShieldCheck size={18} className="shrink-0 text-gold" />
            <p className="text-left text-xs leading-relaxed text-subtle">
              <span className="font-semibold text-white">Support &amp; Maintenance SLA</span> — ongoing technical support with agreed response times is available on every project we ship.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        {pillars.map((pillar) => (
          <section key={pillar.name} className="mt-14 first:mt-0" aria-labelledby={"pillar-" + pillar.name.replace(/ /g, "-")}>
            <div className="flex items-center gap-3">
              <h2 id={"pillar-" + pillar.name.replace(/ /g, "-")} className="text-sm font-semibold tracking-[0.18em] text-gold uppercase">
                {pillar.name}
              </h2>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-subtle">{pillar.blurb}</p>

            {services
              .filter((service) => service.pillar === pillar.name)
              .map((service, i) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.slug}
                    id={service.slug}
                    className={"scroll-mt-24 " + (i > 0 ? "mt-12 border-t border-line pt-12" : "mt-10")}
                  >
                    <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                      <div>
                        <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                          <Icon size={20} />
                        </span>
                        <h3 className="mt-4 text-2xl font-bold text-white">{service.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-subtle">{service.description}</p>
                        <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Who needs this</p>
                        <p className="mt-1.5 text-sm leading-relaxed text-subtle">{service.who}</p>
                        <a
                          href={
                            "https://wa.me/2347084547988?text=" +
                            encodeURIComponent(
                              "Hello Vector Codes, I'd like to discuss " + service.title + " — within your " + pillar.name + " pillar. (via /services)"
                            )
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gold-btn mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                        >
                          <MessageCircle size={15} /> Request a Quote
                        </a>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="card rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-white">Problems it solves</h4>
                          <ul className="mt-3 space-y-2">
                            {service.problems.map((p) => (
                              <li key={p} className="flex items-start gap-2 text-xs leading-relaxed text-subtle">
                                <Check size={13} className="mt-0.5 shrink-0 text-gold" /> {p}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="card rounded-xl p-5">
                          <h4 className="text-sm font-semibold text-white">Features</h4>
                          <ul className="mt-3 space-y-2">
                            {service.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-xs leading-relaxed text-subtle">
                                <Check size={13} className="mt-0.5 shrink-0 text-gold" /> {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="card rounded-xl p-5 sm:col-span-2">
                          <h4 className="text-sm font-semibold text-white">Expected deliverables</h4>
                          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                            {service.deliverables.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-xs leading-relaxed text-subtle">
                                <Check size={13} className="mt-0.5 shrink-0 text-gold" /> {d}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </section>
        ))}

        <div className="mt-16 text-center">
          <p className="text-sm text-subtle">Not sure which pillar your project falls under?</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <a
              href={
                "https://wa.me/2347084547988?text=" +
                encodeURIComponent("Hi Prince, I'd like to book a technical consultation with the Vector Codes team. (via /services)")
              }
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Book a Technical Consultation <ArrowRight size={15} />
            </a>
            <Link
              href="/contact"
              className="ghost-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              Request an Enterprise Proposal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
