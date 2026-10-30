/**
 * ============================================================
 * FEATURED PROJECTS — CASE-STUDY FORMAT
 * ============================================================
 * Every project must communicate five things:
 *   1. Who the client is          (client + industry)
 *   2. What problem they had      (problem)
 *   3. What I built               (built)
 *   4. What technology I used     (tech[])
 *   5. What business benefit it provides (benefit)
 *
 * Target markets: law firms, real estate, hotels & hospitality,
 * private schools, medical clinics, established SMEs.
 *
 * SCREENSHOTS: screenshot → WebP ~100-150KB (squoosh.app) →
 * /public/projects/<name>.webp → set `thumbnail`.
 * ============================================================
 */

export interface FeaturedProject {
  id: string;
  client: string;
  industry: string;
  thumbnail: string; // WebP screenshot path (optional until added)
  title: string;
  /** The business problem the client had before the build. */
  problem: string;
  /** What was built — the solution. */
  built: string;
  /** The technology stack used. */
  tech: string[];
  /** The business benefit / measurable outcome. */
  benefit: string;
  link: string;
  linkLabel: string;
  /** Optional: GitHub repo URL — shows a "View Code" button when set. */
  github?: string;
  /** Optional: 30s walkthrough video/GIF URL. */
  demo?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ugouzoho",
    client: "Ugoo Uzoho & Co.",
    industry: "Law Firm",
    // Hosted screenshot (PNG). TODO: convert to WebP, self-host at /projects/ugouzoho-home.webp
    thumbnail:
      "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/39cfba5b-d94e-408c-9758-1caee2d9bc59.png",
    title: "Corporate Legal Website — Port Harcourt Practice",
    problem:
      "A 30-year law practice relied entirely on word-of-mouth. Referrals had nowhere to verify the firm's credibility, and consultations were booked through phone calls only.",
    built:
      "A fast, trust-optimized corporate website with attorney profiles, consultation booking, precise location mapping, and professional email routing (info@ugoouzoho.com.ng) with enterprise-grade Cloudflare deliverability.",
    tech: ["Next.js", "Tailwind CSS", "Cloudflare Email", "Vercel", ".com.ng Domain"],
    benefit:
      "Client secured full payment within 48 hours of launch. The firm now converts referrals into booked consultations 24/7.",
    link: "https://www.ugoouzoho.com.ng/",
    linkLabel: "Live Site",
    github: "",
  },
  {
    id: "safekey-estates",
    client: "SafeKey Estates",
    industry: "Real Estate",
    // TODO: replace with "/projects/safekey.webp"
    thumbnail: "",
    title: "Multi-Vendor Property Marketplace",
    problem:
      "Buyers had no single place to find verified listings, and agents had no structured way to publish daily inventory or collect payments — hosting limits even blocked 20MB property videos.",
    built:
      "A custom WordPress multi-vendor marketplace where agents post daily listings with 20MB video uploads, direct WhatsApp enquiry buttons, Paystack payments, and PWA functionality for offline browsing.",
    tech: ["WordPress", "Multi-Vendor", "PWA", "Paystack", "WhatsApp Integration"],
    benefit:
      "Agents publish and monetize listings without hosting limits; buyers browse a trusted inventory and enquire in one tap.",
    link: "https://safekeypro.com.ng",
    linkLabel: "Live Site",
    github: "",
  },
  {
    id: "luxe-interiors",
    client: "Luxe Interiors",
    industry: "Furniture / Hospitality",
    // TODO: replace with "/projects/luxe-interiors.webp"
    thumbnail: "",
    title: "Mobile-First Furniture Showroom",
    problem:
      "Upholstery buyers had to DM for every price and every dimension — slow, frustrating, and it quietly lost sales for the brand.",
    built:
      "A mobile-first digital showroom with dimension badges, visible prices, and automated WhatsApp ordering — the catalog answers buyers' questions before they ask.",
    tech: ["React", "Tailwind CSS", "Mobile-First", "WhatsApp Ordering"],
    benefit:
      "Reduces DM fatigue for the brand: catalog browsing becomes a one-tap WhatsApp order instead of a price negotiation.",
    link: "https://luxeinteriors-ten.vercel.app",
    linkLabel: "View Demo",
    github: "",
  },
];

/**
 * Client testimonial — REAL GOOGLE REVIEW (5 stars).
 * Source: Google review by Samuel Chukwuemeka (Techlaza).
 */
export const featuredTestimonial = {
  quote:
    "This guy is good at what he does, and understands how to follow client details. The site he built for me is really good.",
  author: "Samuel Chukwuemeka",
  role: "Founder, Techlaza",
  stars: 5,
};
