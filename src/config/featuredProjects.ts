/**
 * ============================================================
 * FEATURED PROJECTS — "RECENT SUCCESS STORIES"
 * ============================================================
 *
 * High-impact client work targeting Nigerian SMEs and
 * professional service providers.
 *
 * HOW TO ADD SCREENSHOTS (IMPORTANT):
 * 1. Take a screenshot of the live site (desktop, 1440px wide).
 * 2. Convert it to WebP and compress (~100-150KB) to keep
 *    page load under 2s. E.g. https://squoosh.app (WebP, q=75).
 * 3. Save as: public/projects/ugouzoho-home.webp
 *           public/projects/zizi-milarge.webp
 * 4. Set `thumbnail` below to "/projects/ugouzoho-home.webp" etc.
 *    Until then, an elegant gold placeholder is shown.
 * ============================================================
 */

export interface FeaturedProject {
  id: string;
  client: string;
  industry: string;
  thumbnail: string; // <-- INSERT SCREENSHOT PATH HERE (see instructions above)
  title: string;
  tags: string[];
  description: string;
  result: string;
  link: string;
  linkLabel: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "ugouzoho",
    client: "Ugoo Uzoho & Company",
    industry: "Legal",
    // TODO: Replace with "/projects/ugouzoho-home.webp" (screenshot of https://www.ugoouzoho.com.ng/ homepage)
    thumbnail: "",
    title: "Premium Legal Website for Port Harcourt Firm",
    tags: ["Next.js", "Tailwind CSS", "Vercel", ".com.ng Domain"],
    description:
      "Built a secure, mobile-first digital chambers for a 30-year law practice. Integrated professional email (info@ugoouzoho.com.ng), WhatsApp consultation booking, and precise location mapping.",
    result: "Client secured full payment within 48 hours of launch.",
    link: "https://www.ugoouzoho.com.ng/",
    linkLabel: "View Live Site",
  },
  {
    id: "zizi-milarge",
    client: "Zizi Milarge",
    industry: "Automotive",
    // TODO: Replace with "/projects/zizi-milarge.webp" (screenshot of ZIZI MILARGE mockup)
    thumbnail: "",
    title: "Digital Showroom Concept for Abuja Auto Dealer",
    tags: ["UI/UX Design", "Mobile-First", "WhatsApp Integration", "Lead Gen"],
    description:
      "Designed a premium 'Digital Showroom' concept to help an Abuja dealership scale beyond Instagram. Features dynamic inventory gallery, 'Book Inspection' CTAs, and viral-ready content strategy.",
    result:
      "Client approved design immediately and posted concept on WhatsApp Status before development began.",
    link: "https://zizi-milarge.vercel.app/",
    linkLabel: "View Concept",
  },
];

/**
 * Client testimonial — PLACEHOLDER.
 * Replace quote/author once the formal testimonial is received.
 */
export const featuredTestimonial = {
  quote:
    "Precision is what makes a great legal practice. Vector Codes delivered exactly that.",
  author: "Ugoo Uzoho Esq.",
  role: "Principal Partner, Ugoo Uzoho & Company",
};
