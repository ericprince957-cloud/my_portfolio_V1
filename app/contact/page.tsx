import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MessageCircle, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
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
            Let's Talk About Your <span className="text-gold">Next Project.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-subtle">
            Fill in the form and we'll open WhatsApp with your details prefilled — or reach us
            directly through any of the channels below.
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
                  <a href="mailto:vectorcodes15@gmail.com" className="flex items-center gap-3 text-subtle transition-colors hover:text-gold">
                    <Mail size={16} className="text-gold" /> vectorcodes15@gmail.com
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
                <li>1. We review your project details.</li>
                <li>2. We reply — usually within 24 hours.</li>
                <li>3. We discuss scope, timeline and a quote.</li>
                <li>4. We start building.</li>
              </ol>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
