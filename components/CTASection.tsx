import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
}

export default function CTASection({
  title = "Vector Codes Delivers. Let's Talk About Your Project.",
  description =
    "Book a technical consultation and our team will map your requirements, timeline and a transparent quote — or submit a detailed brief and we will respond with an enterprise proposal.",
  ctaLabel = "Book a Technical Consultation",
}: CTASectionProps) {
  return (
    <section className="border-t border-line bg-surface">
      <Reveal>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-subtle">{description}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={"https://wa.me/2347084547988?text=" + encodeURIComponent("Hi Prince, I'd like to book a technical consultation with the Vector Codes team. (via site CTA)")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
            >
              {ctaLabel} <ArrowRight size={16} />
            </a>
            <Link href="/contact" className="ghost-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold">
              Request an Enterprise Proposal
            </Link>
          </div>
          <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold/5 px-4 py-3">
            <ShieldCheck size={18} className="shrink-0 text-gold" />
            <p className="text-left text-xs leading-relaxed text-subtle">
              <span className="font-semibold text-white">Support &amp; Maintenance SLA</span> — every project we ship is backed by ongoing technical support options.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
