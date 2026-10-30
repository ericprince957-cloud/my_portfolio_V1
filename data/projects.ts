/**
 * ============================================================
 * PROJECT DATA — VECTOR CODES
 * ============================================================
 * Add new projects by appending to this array. The projects
 * page, home page and case-study routes all read from here.
 *
 * HONESTY RULES:
 * - Never present unfinished work as completed client work.
 * - category distinguishes Client Projects, Internal Products
 *   and projects In Development.
 * - Never invent outcomes or client feedback.
 *
 * SCREENSHOTS: save a WebP screenshot (~100-150KB) to
 * /public/projects/<slug>.webp and set `screenshot`.
 * ============================================================
 */

export type ProjectCategory = "Client Project" | "Internal Product" | "In Development";

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  process: string;
  /** Only include verified, real outcomes. */
  result?: string;
}

export interface Project {
  slug: string;
  name: string;
  industry: string;
  type: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  screenshot?: string;
  featured?: boolean;
  /** Present only when there is enough truthful detail. */
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    slug: "ugoo-uzoho",
    name: "Ugoo Uzoho & Company",
    industry: "Legal Services",
    type: "Professional Law Firm Website",
    category: "Client Project",
    description:
      "A professional law firm website for a Port Harcourt practice — attorney profiles, practice areas and consultation booking, built for speed and trust.",
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://ugoouzoho.com.ng/",
    featured: true,
    caseStudy: {
      overview:
        "A corporate website for Ugoo Uzoho & Company, a law practice in Port Harcourt — establishing the firm's first professional digital presence.",
      problem:
        "The practice relied entirely on word-of-mouth. Prospective clients had no way to verify the firm's credibility, learn about its attorneys, or book a consultation.",
      solution:
        "A fast, mobile-first corporate website with attorney profiles, practice-area sections, consultation booking via WhatsApp, and professional email routing on a .com.ng domain.",
      process:
        "Structured in stages: information architecture, design, development with Next.js and Tailwind CSS, content integration, performance optimisation and deployment to Vercel.",
      result:
        "Delivered successfully. The firm now has a professional digital presence that presents its practice to prospective clients around the clock.",
    },
  },
  {
    slug: "absu-verified-sellers",
    name: "ABSU Verified Sellers",
    industry: "Student Marketplace",
    type: "Verified Student Seller Directory",
    category: "Internal Product",
    description:
      "A verified directory that helps Abia State University students discover and trade with trusted campus sellers.",
    tech: [],
    liveUrl: "https://absu-trusted-trade.vercel.app/",
    featured: true,
  },
  {
    slug: "techlaza",
    name: "Techlaza",
    industry: "E-commerce",
    type: "WordPress / WooCommerce Store",
    category: "Client Project",
    description:
      "An online store built with WordPress and WooCommerce, designed to showcase products and turn visitors into enquiries and orders.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
    liveUrl: "https://techlaza.com.ng/",
    featured: true,
    caseStudy: {
      overview:
        "An e-commerce website for Techlaza, a Nigerian tech retail brand, built on WordPress with WooCommerce.",
      problem:
        "The business sold through social media alone. Products had no permanent, searchable storefront and enquiries arrived as scattered DMs.",
      solution:
        "A structured online store with a product catalog, clear enquiry paths and a mobile-friendly buying experience.",
      process:
        "Built on WordPress with WooCommerce and Elementor: catalog structure, product pages, mobile optimisation and deployment.",
      result:
        "Delivered to the client's specification. The founder left a verified 5-star Google review praising the delivery and attention to client details.",
    },
  },
  {
    slug: "pixelvault",
    name: "PixelVault",
    industry: "Digital Products",
    type: "Digital Platform",
    category: "Internal Product",
    description:
      "A digital platform for browsing and discovering digital products — clean interface, fast navigation, mobile-first.",
    tech: [],
    liveUrl: "https://pixelvault-zeta.vercel.app/",
  },
  {
    slug: "vectorvault",
    name: "VectorVault",
    industry: "Developer Tools",
    type: "Code Hosting Platform",
    category: "In Development",
    description:
      "A code hosting platform in active development — designed to give Nigerian developers a fast, reliable place to host and share their work.",
    tech: [],
    repoUrl: "https://github.com/ericprince957-cloud/vectorvault",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Client Project",
  "Internal Product",
  "In Development",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Verified client review — real Google review from the Techlaza founder. */
export const verifiedReview = {
  quote:
    "This guy is good at what he does, and understands how to follow client details. The site he built for me is really good.",
  author: "Samuel Chukwuemeka",
  role: "Founder, Techlaza",
  source: "Verified Google Review",
};
