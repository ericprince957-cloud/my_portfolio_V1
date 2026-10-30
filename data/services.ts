import {
  Globe,
  ShoppingBag,
  AppWindow,
  LayoutDashboard,
  RefreshCw,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/**
 * ============================================================
 * SERVICE DATA — VECTOR CODES
 * ============================================================
 * No fixed prices are published here by design. Quotes are
 * handled per project via the contact form or WhatsApp.
 * ============================================================
 */

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  problems: string[];
  who: string;
  features: string[];
  deliverables: string[];
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Website Development",
    short: "Professional, responsive websites that establish credibility and help businesses attract customers.",
    description:
      "A professional business website is often the first interaction a customer has with your company. We design and build responsive, fast-loading websites that present your business clearly, establish credibility and give customers a clear path to contact you.",
    problems: [
      "Your business looks unprofessional or invisible online.",
      "Customers cannot find or verify what you offer.",
      "Enquiries arrive scattered across social media instead of a central place.",
    ],
    who: "SMEs, professional firms, service businesses and established companies across Nigeria that need a credible digital presence.",
    features: [
      "Mobile-first responsive design",
      "Clear service and company pages",
      "WhatsApp and contact integration",
      "Basic on-page SEO",
      "Professional email setup guidance",
    ],
    deliverables: [
      "A live, responsive business website",
      "Agreed pages and content integrated",
      "Contact and WhatsApp flows",
      "Deployment and handover",
    ],
    icon: Globe,
  },
  {
    slug: "ecommerce",
    title: "E-commerce Development",
    short: "Online stores designed to showcase products, manage orders and support online payments.",
    description:
      "We build online stores that showcase your products clearly, make ordering simple and support online payments — so your business can sell beyond the shop counter and social media DMs.",
    problems: [
      "Selling is limited to DMs and physical walk-ins.",
      "Products have no permanent, searchable storefront.",
      "Orders and payments are hard to track.",
    ],
    who: "Retailers, brands and wholesalers who want to sell products online with structured catalogs and payments.",
    features: [
      "Product catalog with categories",
      "Shopping cart and checkout",
      "Paystack payment integration",
      "Order management",
      "Mobile-optimised buying experience",
    ],
    deliverables: [
      "A working online store",
      "Products and categories set up",
      "Payment integration",
      "Store management walkthrough",
    ],
    icon: ShoppingBag,
  },
  {
    slug: "web-applications",
    title: "Custom Web Applications",
    short: "Purpose-built web applications designed around specific business requirements.",
    description:
      "When a website is not enough, we build custom web applications tailored to your exact requirements — from customer-facing platforms to internal tools that solve a specific business problem well.",
    problems: [
      "Off-the-shelf tools do not fit how your business works.",
      "Manual processes slow your team down.",
      "You need software built around your workflow, not the other way round.",
    ],
    who: "Businesses and startups with specific processes or product ideas that need purpose-built software.",
    features: [
      "Requirements-led design",
      "Modern frameworks (Next.js, React, TypeScript)",
      "Authentication and user accounts",
      "Database integration (Supabase)",
      "Scalable, maintainable code",
    ],
    deliverables: [
      "A functional web application",
      "Agreed features implemented and tested",
      "Source code and documentation",
      "Deployment",
    ],
    icon: AppWindow,
  },
  {
    slug: "portals-dashboards",
    title: "Business Portals & Dashboards",
    short: "Digital platforms that simplify workflows, organise information and improve operations.",
    description:
      "We build portals and dashboards that bring order to your operations — bringing data, people and processes into one place so your team can see what matters and act on it.",
    problems: [
      "Important information lives in notebooks and chat messages.",
      "No one can see the state of the business at a glance.",
      "Coordinating people and processes is manual and error-prone.",
    ],
    who: "Schools, agencies, estates and growing companies that need to organise information and coordinate people.",
    features: [
      "Role-based access",
      "Structured data and records",
      "Reporting views and status boards",
      "Admin panels",
      "Mobile-friendly access",
    ],
    deliverables: [
      "A working portal or dashboard",
      "Agreed roles and workflows implemented",
      "Admin documentation",
      "Deployment and handover",
    ],
    icon: LayoutDashboard,
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    short: "Transform outdated websites into modern, fast and professional digital experiences.",
    description:
      "An outdated, slow website quietly costs you customers. We redesign existing websites into modern, fast, professional experiences — improving how your business looks and how well it converts.",
    problems: [
      "Your website looks outdated next to competitors.",
      "It loads slowly or breaks on phones.",
      "Visitors leave without contacting you.",
    ],
    who: "Businesses with an existing website that underperforms or no longer represents them well.",
    features: [
      "Modern visual redesign",
      "Mobile responsiveness fixes",
      "Performance optimisation",
      "Content restructure",
      "Conversion-focused layouts",
    ],
    deliverables: [
      "A redesigned, responsive website",
      "Improved page speed",
      "Content migrated or restructured",
      "Redeployment",
    ],
    icon: RefreshCw,
  },
  {
    slug: "maintenance",
    title: "Website Maintenance",
    short: "Ongoing updates, technical support, performance improvements and website maintenance.",
    description:
      "Websites need care after launch. We provide ongoing maintenance — updates, fixes, backups and improvements — so your website keeps working the day it went live and beyond.",
    problems: [
      "No one maintains your website after launch.",
      "Updates and fixes take weeks to arrange.",
      "You worry about your site breaking with no one to call.",
    ],
    who: "Businesses with live websites that need reliable, ongoing technical support.",
    features: [
      "Content and product updates",
      "Security and plugin updates",
      "Backups and monitoring",
      "Small fixes and improvements",
      "Priority support",
    ],
    deliverables: [
      "Agreed maintenance scope",
      "Regular update schedule",
      "Support channel",
      "Monthly care of your live website",
    ],
    icon: Wrench,
  },
];
