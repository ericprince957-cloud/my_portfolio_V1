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
 *            public/projects/zizi-milarge.webp
 *            public/projects/techlaza.webp
 *            public/projects/cumberland-hvac.webp
 * 4. Set `thumbnail` below to the matching path.
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
  {
    id: "techlaza",
    client: "Techlaza",
    industry: "Tech Retail",
    // TODO: Replace with "/projects/techlaza.webp" (screenshot of https://techlaza.com.ng/ homepage)
    thumbnail: "",
    title: "Conversion-Focused Website for Nigerian Tech Brand",
    tags: ["Web Design", "E-commerce", "Mobile-First", "SEO"],
    description:
      "Delivered a modern, mobile-first storefront for Techlaza, a Nigerian tech brand — built exactly to the client's specifications, fast-loading, and structured to turn visitors into inquiries.",
    result:
      "Client left a 5-star Google review praising the delivery and attention to client details.",
    link: "https://techlaza.com.ng/",
    linkLabel: "View Live Site",
  },
  {
    id: "cumberland-hvac",
    client: "Cumberland Tech (Nig.)",
    industry: "HVAC Services",
    // TODO: Replace with "/projects/cumberland-hvac.webp" (screenshot of https://www.cumberlandhvac.com.ng homepage)
    thumbnail: "",
    title: "Service Booking Website for Delta State HVAC Company",
    tags: ["Web Design", "WhatsApp Booking", "Local SEO", ".com.ng Domain"],
    description:
      "Built a professional digital presence for an industrial & domestic AC company in Effurun, Warri — full service catalog, 'Request Quote' CTAs, WhatsApp booking, and clear coverage areas across Delta State.",
    result:
      "Moved the firm from word-of-mouth only to a 24/7 digital storefront that books services via WhatsApp.",
    link: "https://www.cumberlandhvac.com.ng",
    linkLabel: "View Live Site",
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
  stars: 5, // Rendered as gold stars in the quote block
};
