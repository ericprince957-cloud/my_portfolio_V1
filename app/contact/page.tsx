import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, Github, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Request an Enterprise Proposal",
  description:
    "Contact Vector Codes — a Nigerian web development company. Tell us about your website, e-commerce or custom web application project.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 md:py-24">
          <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-gold uppercase">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Request an <span className="text-gold">Enterprise Proposal.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle">
            Tell our team what you are building. Submit the brief below and we will respond with a
            structured proposal — scope, timeline and a transparent quote — or reach us directly
            through any of the channels below.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ContactForm />

          {/* Direct contact channels */}
          <aside className="space-y-4">
            <div className="card rounded-xl p-6">
              <h2 className="text-sm font-semibold text-white">Direct channels</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href="https://wa.me/2347084547988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-subtle transition-colors hover:text-gold"
                  >
                    <MessageCircle size={16} className="text-gold" /> WhatsApp: 07084547988
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@vectorcodes.com.ng" className="flex items-center gap-3 text-subtle transition-colors hover:text-gold">
                    <Mail size={16} className="text-gold" /> hello@vectorcodes.com.ng
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ericprince957-cloud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-subtle transition-colors hover:text-gold"
                  >
                    <Github size={16} className="text-gold" /> GitHub
                  </a>
                </li>
              </ul>
            </div>

            <div className="card rounded-xl p-6">
              <h2 className="text-sm font-semibold text-white">What happens next?</h2>
              <ol className="mt-4 space-y-2.5 text-sm text-subtle">
                <li>1. Our team reviews your project brief.</li>
                <li>2. We reply — usually within 24 hours.</li>
                <li>3. We agree scope, timeline and a transparent quote.</li>
                <li>4. We assign a team and start building.</li>
                <li>5. We ship — and stay on with a Support &amp; Maintenance SLA.</li>
              </ol>
            </div>

            <div className="card rounded-xl border-gold/30 p-6">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldCheck size={16} className="text-gold" /> Support &amp; Maintenance SLA
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-subtle">
                Corporate clients get ongoing technical support after launch — updates, fixes,
                monitoring and agreed response times, so your platform keeps working the day it
                goes live and beyond.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
