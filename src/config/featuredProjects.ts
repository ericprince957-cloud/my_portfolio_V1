/**
 * ============================================================
 * FEATURED PROJECTS — THE "MONEY" SECTION
 * ============================================================
 * Three high-intent case studies targeting Nigerian SMEs:
 * Real Estate (SafeKey), Furniture (Luxe), Legal (Ugoo Uzoho).
 *
 * HOW TO ADD SCREENSHOTS (IMPORTANT):
 * 1. Screenshot the live site (mobile or 1440px desktop).
 * 2. Convert to WebP, compress to ~100-150KB (squoosh.app).
 * 3. Save as /public/projects/safekey.webp etc. and set
 *    `thumbnail` below. Until then an elegant placeholder shows.
 * ============================================================
 */

export interface FeaturedProject {
  id: string;
  client: string;
  industry: string;
  thumbnail: string; // WebP screenshot path — TODO: add for SafeKey & Luxe
  title: string;
  tags: string[];
  description: string;
  result: string;
  link: string;
  linkLabel: string;
  /** Optional: GitHub repo URL — shows a "View Code" button on the card when set. */
  github?: string;
  /** Optional: 30s walkthrough video/GIF URL — TODO: add screen recordings per project. */
  demo?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "safekey-estates",
    client: "SafeKey Estates",
    industry: "Real Estate",
    // TODO: replace with "/projects/safekey.webp"
    thumbnail: "",
    title: "Real Estate Marketplace — SafeKey Estates",
    tags: ["Multi-Vendor Platform", "PWA", "WordPress", "Paystack"],
    description:
      "Built a custom WordPress marketplace where agents post daily listings with direct WhatsApp integration and Paystack payments. Bypassed hosting limits for 20MB video uploads.",
    result: "Agents now publish video listings their old hosting rejected — with instant WhatsApp enquiries.",
    link: "https://safekeypro.com.ng",
    linkLabel: "Live Site",
    github: "",
  },
  {
    id: "luxe-interiors",
    client: "Luxe Interiors",
    industry: "Furniture",
    // TODO: replace with "/projects/luxe-interiors.webp"
    thumbnail: "",
    title: "Furniture Catalog — Luxe Interiors",
    tags: ["E-Commerce / Catalog", "Mobile-First", "WhatsApp Ordering"],
    description:
      "Mobile-first showroom for upholstery brands. Features dimension badges, price visibility, and automated WhatsApp ordering to reduce DM fatigue.",
    result: "Catalog browsing becomes a one-tap WhatsApp order — no more price DMs.",
    link: "https://luxeinteriors-ten.vercel.app",
    linkLabel: "View Demo",
    github: "",
  },
  {
    id: "ugouzoho",
    client: "Ugoo Uzoho & Co.",
    industry: "Legal",
    // Hosted screenshot (PNG). TODO: convert to WebP and self-host at /projects/ugouzoho-home.webp
    thumbnail:
      "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/39cfba5b-d94e-408c-9758-1caee2d9bc59.png",
    title: "Corporate Portfolio — Ugoo Uzoho & Co.",
    tags: ["Corporate", "Speed-Optimized", "Consultation Booking"],
    description:
      "Professional law firm website optimized for speed and trust. Features attorney profiles and consultation booking.",
    result: "Client secured full payment within 48 hours of launch.",
    link: "https://www.ugoouzoho.com.ng/",
    linkLabel: "Live Site",
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
