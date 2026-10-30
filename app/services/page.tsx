import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services — Business Websites, E-Commerce & Custom Web Applications",
  description:
    "Professional website development, e-commerce development, custom web applications, portals and dashboards, website redesign and maintenance from a Nigerian web development company.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Services
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Digital Solutions for <span className="text-gold">Modern Businesses</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-subtle">
            Every project is quoted individually based on scope, features and timeline.
            Request a quote and we will discuss exactly what your business needs.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <section
              key={service.slug}
              id={service.slug}
              className={"scroll-mt-24 " + (i > 0 ? "mt-14 border-t border-line pt-14" : "")}
              aria-labelledby={"service-" + service.slug}
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                {/* Summary */}
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/5 text-gold">
                    <Icon size={20} />
                  </span>
                  <h2 id={"service-" + service.slug} className="mt-4 text-2xl font-bold text-white">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-subtle">{service.description}</p>
                  <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-gold uppercase">Who needs this</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-subtle">{service.who}</p>
                  <a
                    href={
                      "https://wa.me/2347084547988?text=" +
                      encodeURIComponent("Hello Vector Codes, I'd like a quote for " + service.title + ".")
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                  >
                    <MessageCircle size={15} /> Request a Quote
                  </a>
                </div>

                {/* Details */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="card rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white">Problems it solves</h3>
                    <ul className="mt-3 space-y-2">
                      {service.problems.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs leading-relaxed text-subtle">
                          <Check size={13} className="mt-0.5 shrink-0 text-gold" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card rounded-xl p-5">
                    <h3 className="text-sm font-semibold text-white">Features</h3>
                    <ul className="mt-3 space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs leading-relaxed text-subtle">
                          <Check size={13} className="mt-0.5 shrink-0 text-gold" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="card rounded-xl p-5 sm:col-span-2">
                    <h3 className="text-sm font-semibold text-white">Expected deliverables</h3>
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
            </section>
          );
        })}

        <div className="mt-16 text-center">
          <p className="text-sm text-subtle">Not sure which service fits your business?</p>
          <Link
            href="/contact"
            className="gold-btn mt-4 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Let's Discuss Your Project <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
