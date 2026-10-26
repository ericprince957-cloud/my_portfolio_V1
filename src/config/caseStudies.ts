/**
 * ============================================================
 * CASE STUDIES — "ROI & BUSINESS IMPACT"
 * ============================================================
 * Clients don't buy code; they buy results. Each case study
 * shows Problem → Solution → Result, a Before/After contrast,
 * and a "Lessons Learned" badge that proves problem-solving.
 *
 * ⚠️ AUTHENTICITY RULE: never fabricate metrics. All results
 * below are REAL, qualitative wins from actual projects. When
 * a client shares hard numbers (e.g. "inquiries +40%"), update
 * the `results` array here — real metrics convert best.
 * ============================================================
 */

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  headline: string;
  problem: string;
  solution: string;
  /** Architecture decision + why — proves engineering judgment, not just tools. */
  architecture: string;
  results: string[]; // Real wins only — no fabrication
  techStack: string[];
  lesson: string; // "Lessons Learned" badge
  before: { label: string; points: string[] }; // The old way
  after: { label: string; points: string[] }; // The new way
  quote?: { text: string; author: string };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "ugouzoho",
    client: "Ugoo Uzoho & Company",
    industry: "Legal — Port Harcourt",
    headline: "From no online presence to full payment in 48 hours",
    problem:
      "A 30-year law practice had no website and no professional email — clients couldn't verify the firm online, and inquiries relied purely on word-of-mouth.",
    solution:
      "Built a secure, mobile-first digital chambers with 1-click WhatsApp consultation booking, professional domain email (info@ugoouzoho.com.ng), and precise location mapping.",
    architecture:
      "Static-first build for instant loads on Nigerian mobile networks, with wa.me deep links so booking has zero friction — no forms, no login. Cloudflare handles DNS + email routing for 100% deliverability.",
    results: [
      "Secured full payment within 48 hours of launch",
      "Zero spam or deliverability issues via Cloudflare email routing",
      "Professional info@ domain email builds instant client trust",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Cloudflare"],
    lesson: "Navigated .com.ng domain/DNS setup → live with email routing in 24hrs",
    before: {
      label: "The Old Way",
      points: ["No website — invisible online", "Gmail/no professional email", "Inquiries only through referrals"],
    },
    after: {
      label: "The New Way",
      points: ["Mobile-first digital chambers, live 24/7", "info@ugoouzoho.com.ng email", "WhatsApp consultation booking built-in"],
    },
    quote: {
      text: "Precision is what makes a great legal practice. Vector Codes delivered exactly that.",
      author: "Ugoo Uzoho Esq.",
    },
  },
  {
    id: "zizi-milarge",
    client: "Zizi Milarge",
    industry: "Automotive — Abuja",
    headline: "From Instagram-only dealer to a Digital Showroom",
    problem:
      "An Abuja auto dealership was locked into Instagram — inventory disappeared down the feed, and serious buyers had no way to book inspections.",
    solution:
      "Designed a premium 'Digital Showroom' concept with a dynamic inventory gallery, 'Book Inspection' CTAs, and a viral-ready content strategy.",
    architecture:
      "Mobile-first design system with fluid grids that reflow from phone to showroom display; every CTA opens native WhatsApp — the channel Nigerian car buyers already trust.",
    results: [
      "Client approved the design immediately",
      "Posted the concept on WhatsApp Status before development even began",
      "Marketing the concept while it's still in development — momentum before launch",
    ],
    techStack: ["UI/UX Design", "Mobile-First", "WhatsApp Integration", "Lead Gen"],
    lesson: "Met the client where their audience already is → design that sells before it's built",
    before: {
      label: "The Old Way",
      points: ["Inventory buried in the IG feed", "Buyers had no booking path", "Reach limited to followers"],
    },
    after: {
      label: "The New Way",
      points: ["Permanent, browsable inventory gallery", "'Book Inspection' one-tap CTAs", "Viral-ready content strategy"],
    },
  },
  {
    id: "techlaza",
    client: "Techlaza",
    industry: "Tech Retail — Nigeria",
    headline: "A tech brand's storefront that clients actually praise",
    problem:
      "The brand needed a storefront that reflected its tech positioning — fast, modern, and detailed enough to convert visitors into inquiries.",
    solution:
      "Delivered a conversion-focused, mobile-first website built exactly to the client's specifications — fast-loading and structured to turn visitors into buyers.",
    architecture:
      "Semantic HTML + optimized assets for fast first paint, with structured data so products surface correctly in search.",
    results: [
      "5-star Google review from the founder",
      "Client praised delivery and attention to client details",
      "Site structure built to convert visits into inquiries",
    ],
    techStack: ["Web Design", "E-commerce", "Mobile-First", "SEO"],
    lesson: "Close adherence to client brief → 5-star review without revisions",
    before: {
      label: "The Old Way",
      points: ["No dedicated conversion path", "Generic online presence"],
    },
    after: {
      label: "The New Way",
      points: ["Conversion-focused storefront", "Built exactly to client spec", "5-star client review on record"],
    },
    quote: {
      text: "This guy is good at what he does, and understands how to follow client details. The site he built for me is really good.",
      author: "Samuel Chukwuemeka, Founder — Techlaza",
    },
  },
];

export const sampleIndustries = [
  "Legal / Professional Services",
  "Auto Dealership / Automotive",
  "Fashion / Retail",
  "Restaurant / Food",
  "Logistics / Delivery",
  "Real Estate",
  "Salon / Beauty",
  "School / Education",
  "Tech / Gadgets",
  "Other",
];
