import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import FeaturedProjects from "../components/FeaturedProjects";
import Reviews from "../components/Reviews";
import ChannelUpdates from "../components/ChannelUpdates";
import CaseStudies from "../components/CaseStudies";
import { ArrowRight } from "lucide-react";

/**
 * ============================================================
 * PAGE: HOME  (route: #/ or empty)
 * ============================================================
 * CRO flow: Hero (offer) → TrustBar (proof) → Featured
 * Projects (money section) → Reviews → Case Studies →
 * Channel Updates → closing CTA.
 * ============================================================
 */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProjects />
      <div className="section-divider" />
      <Reviews />
      <div className="section-divider" />
      <CaseStudies />
      <div className="section-divider" />
      <ChannelUpdates />
      <div className="section-divider" />

      {/* Closing CTA */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C5A065]/[0.04] to-transparent" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 font-display">
            Ready to stop losing customers to "DM for price"?
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8">
            Let's turn your business into a professional digital asset — from first call to launch.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-400 hover:to-sky-400 text-white font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30">
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#/library" className="inline-flex items-center gap-2 px-8 py-4 glass-card hover:bg-white/10 text-slate-100 font-semibold rounded-full transition-all hover:scale-105">
              Browse My Work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
