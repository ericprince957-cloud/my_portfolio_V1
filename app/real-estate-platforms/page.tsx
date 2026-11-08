import type { Metadata } from "next";
import IndustryLanding from "@/components/IndustryLanding";

export const metadata: Metadata = {
  title: "Real Estate Platforms — Property Verification & Listings",
  description:
    "Property listing and verification platforms for Nigerian real estate — secure agent portals, verification workflows and fraud prevention. Built by Vector Codes, creators of SafeKey Pro.",
};

export default function RealEstatePlatformsPage() {
  return (
    <IndustryLanding
      badge="Real Estate Platforms"
      title="Property Listings Nigerians Can Actually Trust."
      titleAccent="Built on Verification."
      subtitle="Fraudulent listings damage markets and reputations. We build real estate platforms with verification at the core — secure agent portals, approval workflows and mobile-first experiences designed for local networks and WhatsApp-first buyers."
      industryLabel="Real Estate"
      refPath="/real-estate-platforms"
      showcaseSlug="safekey-pro"
      showcaseTitle="SafeKey Pro — Nigeria's Trusted Property Verification Platform"
      showcaseText="The platform we built for Techlaza — live at safekeypro.com.ng: a dynamic verification engine (Unverified → Under Review → Verified), a secure agent portal with role-based access, and fraud-proof architecture with nonce-secured forms. The delivery earned us two follow-on contracts."
      pains={[
        "Fraudulent listings erode buyer trust and put your brand at risk.",
        "Agents and property owners submit listings with no accountability or oversight.",
        "Generic themes cannot handle verification workflows or secure agent access.",
        "Buyers on local networks abandon slow, heavy listing sites.",
        "Enquiries are scattered across calls and chats with no single source of truth.",
      ]}
      solutions={[
        "Verification workflows: every listing passes through approval states before going live.",
        "Secure agent portals with role-based access — agents submit, only admins approve.",
        "Custom design systems that make your platform look premium, not templated.",
        "Mobile-first builds optimised for 3G networks and WhatsApp-centric buyers.",
        "WhatsApp enquiry flows, Google Maps integration and Naira-formatted pricing.",
      ]}
    />
  );
}
