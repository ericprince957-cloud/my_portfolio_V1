import { Services, WhyWorkWithMe } from "../components/Sections";
import Pricing from "../components/Pricing";
import { Trust } from "../components/CommunityTrust";

/**
 * ============================================================
 * PAGE: SERVICES & PRICING  (route: #/services)
 * ============================================================
 * Services → Why Work With Me → Pricing → Trust signals.
 * ============================================================
 */
export default function ServicesPage() {
  return (
    <>
      <Services />
      <div className="section-divider" />
      <WhyWorkWithMe />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <Trust />
    </>
  );
}
