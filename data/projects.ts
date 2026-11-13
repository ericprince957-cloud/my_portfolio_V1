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

export type ProjectCategory = "Client Project" | "Internal Product" | "In Development" | "Demo";

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
    slug: "safekey-pro",
    name: "SafeKey Pro",
    industry: "Real Estate / PropTech",
    type: "Property Verification Engine",
    category: "Client Project",
    description:
      "Our flagship project: a property verification engine for Nigerian real estate — custom frontend-first architecture, strict role-based security, a one-click verification hub and an installable PWA, live at safekeypro.com.ng.",
    tech: ["WordPress (Headless-ish)", "PHP 8.2", "MySQL", "Vanilla JS", "CSS Grid/Flexbox", "Custom Nonce Handling", "RBAC", "Shield Security Pro", "AfeesHost LiteSpeed Enterprise"],
    liveUrl: "https://safekeypro.com.ng/",
    featured: true,
    caseStudy: {
      overview:
        "SafeKey Pro is our flagship project — proof that we can handle complex logic end-to-end. A property verification engine delivered for Techlaza (Samuel) as Lead Developer & Architect, now a fully functional marketplace live at safekeypro.com.ng.",
      problem:
        "Samuel needed a platform where agents could list properties — but buyers could not trust them due to fraud. Standard WordPress themes were too messy for non-tech users, and security was weak. He needed a verification engine, not a theme customisation.",
      solution:
        "We moved away from generic themes and built a Custom Frontend-First Architecture. Zero Admin Access for Agents: strict role-based security means agents never see wp-admin — they only interact with a clean, custom dashboard. Verification Workflow: a dedicated /verify-hub/ lets admins approve or reject listings with one click, updating public badges instantly. PWA Implementation: the site is an installable app (offline-ready, home-screen icon) to boost retention on low-data networks. Performance Tuning: images and scripts optimised for Nigerian mobile networks.",
      process:
        "Architected and delivered as Lead Developer & Architect: a headless-ish WordPress core with PHP 8.2 and MySQL; a vanilla JS and CSS Grid/Flexbox frontend chosen deliberately over heavy frameworks for stability; custom nonce handling, role-based access control (RBAC) and input sanitisation for security; and hosting tuned on AfeesHost LiteSpeed Enterprise.",
      result:
        "Fully functional marketplace live at safekeypro.com.ng. Agent confusion reduced by 90% — no more WP admin errors. Trust enhanced via automated verification badges. The delivery earned two follow-on contracts from the client — a multi-vendor marketplace and a delivery logistics platform. As Samuel put it: \"When you deliver this well, we have more projects.\" — Samuel, Techlaza.",
    },
  },
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
    slug: "seunbloom-chic",
    name: "Seunbloom Chic",
    industry: "Fashion",
    type: "Fashion Brand Website Demonstration",
    category: "Demo",
    description:
      "A demonstration concept for a fashion brand — showing our approach to industry-specific, professional website experiences.",
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://seunbloom-chic.vercel.app/",
  },
  {
    slug: "law-firm-demo",
    name: "Law Firm Website Demo",
    industry: "Legal Services",
    type: "Corporate Website Demonstration",
    category: "Demo",
    description:
      "A demonstration concept for a law firm website — professional service presentation, corporate information architecture and a trust-focused layout.",
    tech: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://client-demo-law-firm.vercel.app/",
  },
  {
    slug: "vectorvault",
    name: "VectorVault",
    industry: "Developer Tools",
    type: "Code Hosting & Collaboration Platform",
    category: "In Development",
    description:
      "Our in-house product in active development: a simple, accessible code hosting and collaboration platform built to serve the next generation of African developers.",
    tech: [],
    repoUrl: "https://github.com/ericprince957-cloud/vectorvault",
    caseStudy: {
      overview:
        "VectorVault is a Vector Codes product in active development — not a finished platform, and we say so openly. The mission: to build a simple, accessible code hosting and collaboration platform that serves the next generation of African developers.",
      problem:
        "The code hosting tools most developers use are built for teams with fast networks, foreign payment systems and bandwidth to spare. Young African developers need something simple, accessible and dependable in their own context — a place to host, share and collaborate on their work without friction.",
      solution:
        "VectorVault is being designed around simplicity and accessibility first: straightforward repositories, easy sharing, and collaboration flows that work well on local networks — with the realities of African developers as a first-class design constraint, not an afterthought.",
      process:
        "The product is being built in public: the architecture and core features are taking shape in an open GitHub repository, and progress is shared as it happens. This section will be updated as the platform develops.",
    },
  },
];

export const projectCategories: ProjectCategory[] = [
  "Client Project",
  "Internal Product",
  "In Development",
  "Demo",
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
