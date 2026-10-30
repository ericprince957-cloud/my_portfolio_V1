/**
 * ============================================================
 * TRUST BAR — social proof directly under the hero
 * ============================================================
 * Recent client names + a hard stat. Text-only (fast LCP,
 * no logo images to load). Update the clients array here.
 * ============================================================
 */
const clients = ["SafeKey Estates", "Kelly Upholstery", "Seton American Schools"];

export default function TrustBar() {
  return (
    <section aria-label="Trusted by Nigerian businesses" className="border-y border-[#0A2540]/10 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
        <p className="sr-only">Trusted by SafeKey Estates, Kelly Upholstery and Seton American Schools.</p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-2" aria-hidden="true">
          {clients.map((c) => (
            <span key={c} className="font-display text-lg font-semibold text-[#0A2540]/55">
              {c}
            </span>
          ))}
        </div>
        <p className="text-sm font-medium text-[#C5A065] whitespace-nowrap">
          300+ Businesses Pitched <span className="text-[#0A2540]/25 mx-1">|</span> 100% Mobile Optimized
        </p>
      </div>
    </section>
  );
}
