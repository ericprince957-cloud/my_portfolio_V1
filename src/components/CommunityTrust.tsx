import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { MessageCircle, Send, Quote, MapPin, Star } from "lucide-react";

/**
 * Community & Socials Section
 */
export function Community() {
  const { community } = portfolioConfig;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Community"
            title={community.heading}
            description={community.description}
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {community.channels.map((channel, i) => (
            <ScrollReveal key={channel.platform} delay={i * 100}>
              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  channel.icon === "whatsapp" 
                    ? "bg-green-500/20 border border-green-500/30" 
                    : "bg-sky-500/20 border border-sky-500/30"
                }`}>
                  {channel.icon === "whatsapp" ? (
                    <MessageCircle size={24} className="text-green-400" />
                  ) : (
                    <Send size={24} className="text-sky-400" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-1 group-hover:text-cyan-400 transition-colors">
                  {channel.platform}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mb-3">{channel.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{channel.description}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                  Join Channel <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Trust & Verification Section
 */
export function Trust() {
  const { trust } = portfolioConfig;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Trust"
            title="Trusted by Clients"
            description="Real results, real satisfaction."
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Google Maps Verification */}
          <ScrollReveal delay={100}>
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-5">
                <MapPin size={24} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2">Verified Business</h3>
              <p className="text-slate-400 text-sm">{trust.verified}</p>
              <div className="mt-4 flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonial */}
          <ScrollReveal delay={200}>
            <div className="glass-card rounded-2xl p-8 relative">
              <Quote size={32} className="text-cyan-400/20 absolute top-4 right-4" />
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-5">
                <span className="text-cyan-400 font-bold text-lg">CS</span>
              </div>
              <p className="text-slate-300 text-lg italic leading-relaxed mb-4">
                "{trust.testimonial.quote}"
              </p>
              <div>
                <p className="text-slate-100 font-semibold">{trust.testimonial.author}</p>
                <p className="text-slate-500 text-sm">{trust.testimonial.company}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
