import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & NDPR Compliance",
  description: "How Vector Codes collects, uses and protects personal data — in line with the Nigeria Data Protection Regulation (NDPR).",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-24">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        Privacy &amp; <span className="text-gold">NDPR Compliance</span>
      </h1>
      <div className="mt-8 space-y-6 text-sm leading-relaxed text-subtle">
        <p>
          Vector Codes operates in alignment with the Nigeria Data Protection Regulation (NDPR) and the
          Nigeria Data Protection Act. This page explains, in plain language, how we handle personal data.
        </p>
        <div>
          <h2 className="text-base font-semibold text-white">What we collect</h2>
          <p className="mt-2">
            When you contact us through our website, WhatsApp or email, we receive the details you choose
            to share — typically your name, business name, contact details and a description of your project.
            We collect nothing beyond that, and we run no hidden third-party trackers.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">How we use it</h2>
          <p className="mt-2">
            Solely to respond to your enquiry, prepare proposals and deliver agreed work. We never sell,
            rent or share your data with third parties for marketing purposes.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">How we protect it</h2>
          <p className="mt-2">
            Client data is stored on trusted infrastructure (Vercel, Supabase and Google Workspace),
            with access limited to the team members who need it for your project.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Client data in our platforms</h2>
          <p className="mt-2">
            Platforms we build for clients (such as verification systems and portals) include role-based
            access controls and structured data handling by design. For each client platform, data
            ownership remains with the client.
          </p>
        </div>
        <div>
          <h2 className="text-base font-semibold text-white">Your rights</h2>
          <p className="mt-2">
            You may request access to, correction of, or deletion of your personal data at any time by
            emailing <span className="text-gold">vectorcodes15@gmail.com</span>. We respond within a
            reasonable period as required by the NDPR.
          </p>
        </div>
        <p className="text-xs">Last updated: November 2026.</p>
      </div>
    </section>
  );
}
