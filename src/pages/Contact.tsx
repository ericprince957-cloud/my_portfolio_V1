import Contact from "../components/Contact";
import { Community } from "../components/CommunityTrust";

/**
 * ============================================================
 * PAGE: CONTACT  (route: #/contact)
 * ============================================================
 * Contact form + details → Community channels.
 * ============================================================
 */
export default function ContactPage() {
  return (
    <>
      <Contact />
      <div className="section-divider" />
      <Community />
    </>
  );
}
