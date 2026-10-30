import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  description?: string;
  ctaLabel?: string;
}

export default function CTASection({
  title = "Your Next Digital Project Starts Here.",
  description =
    "Whether you're launching a new business, upgrading your website or building a custom digital platform, let's discuss what you need.",
  ctaLabel = "Let's Build Something",
}: CTASectionProps) {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-subtle">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="gold-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            {ctaLabel} <ArrowRight size={16} />
          </Link>
          <a
            href="https://wa.me/2347084547988?text=Hello%20Vector%20Codes%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
