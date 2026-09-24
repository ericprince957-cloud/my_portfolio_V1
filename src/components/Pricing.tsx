import { useState } from "react";
import { portfolioConfig } from "../config";
import { ScrollReveal, SectionHeading } from "./ui";
import { MessageCircle, Send, Mail, Check, Info, ArrowRight } from "lucide-react";

/**
 * ============================================================
 * PRICING DATA
 * ============================================================
 * 
 * Each service has:
 * - title: Service name
 * - price: Price range in Naira
 * - description: What the client gets
 * - includes: List of features included
 * - whatsappMessage: Custom pre-filled WhatsApp message
 * - emailSubject: Custom email subject
 * - emailBody: Custom email body
 * - popular: Whether to highlight as popular (optional)
 * 
 * To edit prices, just change the values below.
 * ============================================================
 */

interface PricingService {
  title: string;
  price: string;
  description: string;
  includes: string[];
  whatsappMessage: string;
  emailSubject: string;
  emailBody: string;
  popular?: boolean;
}

interface PricingCategory {
  id: string;
  label: string;
  icon: string;
  services: PricingService[];
}

const pricingCategories: PricingCategory[] = [
  {
    id: "create",
    label: "Creating New Sites",
    icon: "🚀",
    services: [
      {
        title: "One-Page Landing Site",
        price: "₦40,000 — ₦70,000",
        description: "A clean, fast, single-page site perfect for promoting a product, service, event, or personal brand.",
        includes: [
          "Responsive design (mobile + desktop)",
          "Up to 4–6 sections",
          "Contact button (WhatsApp / Call / Email)",
          "Basic SEO setup",
          "Delivery in 3–7 days",
        ],
        whatsappMessage: "Hi Vector, I'm interested in the One-Page Landing Site package (₦40,000 – ₦70,000). I'd like to discuss my project.",
        emailSubject: "Inquiry: One-Page Landing Site",
        emailBody: "Hi Vector,\n\nI saw your pricing and I'm interested in the One-Page Landing Site package (₦40,000 – ₦70,000).\n\nHere's what I need:\n- Project type:\n- Brief description:\n- Timeline:\n\nLooking forward to your response.",
      },
      {
        title: "Business Site (3–5 Pages)",
        price: "₦80,000 — ₦150,000",
        description: "A professional multi-page website for your business with Home, About, Services, and Contact pages.",
        includes: [
          "Home, About, Services, Contact pages",
          "Mobile-responsive design",
          "Contact form or WhatsApp button",
          "Google Maps integration",
          "Basic SEO setup",
          "Delivery in 1–3 weeks",
        ],
        whatsappMessage: "Hi Vector, I'm interested in the Business Site package (₦80,000 – ₦150,000). I need a professional website for my business.",
        emailSubject: "Inquiry: Business Site (3–5 Pages)",
        emailBody: "Hi Vector,\n\nI saw your pricing and I'm interested in the Business Site package (₦80,000 – ₦150,000).\n\nMy business details:\n- Business name:\n- Industry:\n- Pages needed:\n- Timeline:\n\nLooking forward to your response.",
        popular: true,
      },
      {
        title: "Business Site + Features",
        price: "₦120,000 — ₦200,000",
        description: "A full business site with extras like a gallery, booking form, or WhatsApp order button for businesses that need more functionality.",
        includes: [
          "Everything in Business Site",
          "Image gallery or portfolio section",
          "Booking form or WhatsApp order button",
          "Service pricing display",
          "Testimonials section",
          "Delivery in 2–4 weeks",
        ],
        whatsappMessage: "Hi Vector, I'm interested in the Business Site + Features package (₦120,000 – ₦200,000). I need a site with extra features like a booking form or gallery.",
        emailSubject: "Inquiry: Business Site + Features",
        emailBody: "Hi Vector,\n\nI saw your pricing and I'm interested in the Business Site + Features package (₦120,000 – ₦200,000).\n\nFeatures I need:\n- Gallery / Booking form / Order button:\n- Business type:\n- Timeline:\n\nLooking forward to your response.",
      },
      {
        title: "Online Store with Paystack",
        price: "₦200,000 — ₦400,000",
        description: "A full e-commerce store where customers can browse products, add to cart, and pay securely with Paystack.",
        includes: [
          "Product catalog with categories",
          "Shopping cart & checkout",
          "Paystack payment integration",
          "Order confirmation system",
          "Admin product management",
          "Mobile-responsive design",
          "Delivery in 3–6 weeks",
        ],
        whatsappMessage: "Hi Vector, I'm interested in the Online Store with Paystack package (₦200,000 – ₦400,000). I want to sell products online with payment integration.",
        emailSubject: "Inquiry: Online Store with Paystack",
        emailBody: "Hi Vector,\n\nI saw your pricing and I'm interested in the Online Store with Paystack package (₦200,000 – ₦400,000).\n\nStore details:\n- Products I'll sell:\n- Number of products:\n- Do I have a Paystack account?:\n- Timeline:\n\nLooking forward to your response.",
      },
    ],
  },
  {
    id: "fix",
    label: "Fixing Existing Sites",
    icon: "🔧",
    services: [
      {
        title: "Small Fix",
        price: "₦3,000 — ₦10,000",
        description: "Quick fixes for broken images, wrong text, spacing issues, or small visual problems on your existing website.",
        includes: [
          "Broken image replacement",
          "Text/content corrections",
          "Spacing and alignment fixes",
          "Minor styling adjustments",
          "Completed in 1–2 days",
        ],
        whatsappMessage: "Hi Vector, I need a small fix on my website (₦3,000 – ₦10,000). There's a small issue I need resolved.",
        emailSubject: "Inquiry: Small Website Fix",
        emailBody: "Hi Vector,\n\nI saw your pricing and I need a small fix on my website (₦3,000 – ₦10,000).\n\nIssue description:\n- Website URL:\n- What's wrong:\n- Screenshot (if possible):\n\nLooking forward to your response.",
      },
      {
        title: "Mobile-Friendly / Layout Fix",
        price: "₦10,000 — ₦30,000",
        description: "Make your existing site look good on phones and tablets, or fix layout bugs that break the design on certain screens.",
        includes: [
          "Responsive design fixes",
          "Mobile layout corrections",
          "Tablet optimization",
          "Cross-browser testing",
          "Completed in 2–5 days",
        ],
        whatsappMessage: "Hi Vector, my website doesn't look right on mobile phones. I need it fixed (₦10,000 – ₦30,000).",
        emailSubject: "Inquiry: Mobile-Friendly / Layout Fix",
        emailBody: "Hi Vector,\n\nI saw your pricing and I need my website to be mobile-friendly (₦10,000 – ₦30,000).\n\nDetails:\n- Website URL:\n- Device with issues:\n- Description of the problem:\n\nLooking forward to your response.",
      },
      {
        title: "Website Investigation",
        price: "₦3,000 — ₦5,000 / hour",
        description: "Not sure what's wrong with your site? I'll investigate the problem, diagnose the issue, and give you a clear report with a fix quote.",
        includes: [
          "Full website audit",
          "Problem diagnosis",
          "Written report",
          "Fix recommendation & quote",
          "No obligation to proceed",
        ],
        whatsappMessage: "Hi Vector, I have a problem with my website but I'm not sure what it is. I'd like you to investigate (₦3,000 – ₦5,000/hour).",
        emailSubject: "Inquiry: Website Investigation",
        emailBody: "Hi Vector,\n\nI saw your pricing and I need you to investigate a problem with my website (₦3,000 – ₦5,000/hour).\n\nDetails:\n- Website URL:\n- What I've noticed:\n- When it started:\n\nLooking forward to your response.",
      },
    ],
  },
  {
    id: "update",
    label: "Updating Existing Sites",
    icon: "✨",
    services: [
      {
        title: "Content Update",
        price: "₦2,000 — ₦5,000 each",
        description: "Need to update prices, swap photos, add a new section, or change text on your existing website? I'll handle it quickly.",
        includes: [
          "Price list updates",
          "Photo/image replacements",
          "New section additions",
          "Text and content changes",
          "Completed in 1–2 days",
        ],
        whatsappMessage: "Hi Vector, I need some content updates on my website (₦2,000 – ₦5,000 per update).",
        emailSubject: "Inquiry: Content Update",
        emailBody: "Hi Vector,\n\nI saw your pricing and I need content updates on my website (₦2,000 – ₦5,000 each).\n\nUpdates needed:\n- Website URL:\n- What to change:\n- New content (text/images):\n\nLooking forward to your response.",
      },
      {
        title: "Monthly Care Plan",
        price: "₦10,000 — ₦20,000 / month",
        description: "Ongoing updates, backups, and small fixes to keep your website running smoothly without you worrying about it.",
        includes: [
          "Regular content updates",
          "Security backups",
          "Small bug fixes",
          "Performance monitoring",
          "Priority response",
          "Cancel anytime",
        ],
        whatsappMessage: "Hi Vector, I'm interested in the Monthly Care Plan (₦10,000 – ₦20,000/month). I want someone to maintain my website regularly.",
        emailSubject: "Inquiry: Monthly Care Plan",
        emailBody: "Hi Vector,\n\nI saw your pricing and I'm interested in the Monthly Care Plan (₦10,000 – ₦20,000/month).\n\nDetails:\n- Website URL:\n- How often I need updates:\n- Type of content I update:\n\nLooking forward to your response.",
        popular: true,
      },
      {
        title: "Add a Feature",
        price: "₦15,000 — ₦40,000",
        description: "Add new functionality to your existing website — a contact form, Paystack payments, image gallery, or other features.",
        includes: [
          "Contact form integration",
          "Paystack payment setup",
          "Gallery or portfolio section",
          "Booking or order system",
          "Mobile-responsive",
          "Completed in 3–7 days",
        ],
        whatsappMessage: "Hi Vector, I want to add a new feature to my existing website (₦15,000 – ₦40,000).",
        emailSubject: "Inquiry: Add a Feature",
        emailBody: "Hi Vector,\n\nI saw your pricing and I want to add a feature to my existing website (₦15,000 – ₦40,000).\n\nDetails:\n- Website URL:\n- Feature I want to add:\n- How it should work:\n\nLooking forward to your response.",
      },
      {
        title: "Full Redesign / Re-skin",
        price: "₦30,000 — ₦80,000",
        description: "Give your old website a fresh new look while keeping your content. A modern redesign that makes your site look professional again.",
        includes: [
          "Modern visual redesign",
          "Updated layout & structure",
          "Mobile-responsive rebuild",
          "Faster loading speed",
          "Keep your existing content",
          "Delivery in 1–3 weeks",
        ],
        whatsappMessage: "Hi Vector, my website looks outdated and I want a full redesign (₦30,000 – ₦80,000).",
        emailSubject: "Inquiry: Full Redesign / Re-skin",
        emailBody: "Hi Vector,\n\nI saw your pricing and I want a full redesign of my website (₦30,000 – ₦80,000).\n\nDetails:\n- Current website URL:\n- What I don't like about it:\n- Style I prefer:\n- Timeline:\n\nLooking forward to your response.",
      },
    ],
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("create");
  const { contactInfo } = portfolioConfig;

  const currentCategory = pricingCategories.find((c) => c.id === activeCategory) || pricingCategories[0];

  // Build WhatsApp link with custom message
  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/${contactInfo.whatsapp.replace("+", "")}?text=${encodeURIComponent(message)}`;
  };

  // Build email link with custom subject and body
  const getEmailLink = (subject: string, body: string) => {
    return `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Build Telegram link with custom message
  const getTelegramLink = (message: string) => {
    return `https://t.me/${contactInfo.telegram}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeading
            badge="Pricing"
            title="Transparent Pricing"
            description="Clear, honest pricing for small businesses, schools, and startups in Nigeria. No hidden fees. Hosting and domain paid separately at cost."
          />
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {pricingCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-sm rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "text-slate-400 border border-slate-700 hover:border-indigo-400/30 hover:text-slate-100"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentCategory.services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <div className={`relative h-full rounded-xl border bg-slate-900/40 overflow-hidden transition-all hover:shadow-lg hover:shadow-indigo-500/5 ${service.popular ? "border-indigo-400/50" : "border-slate-700 hover:border-indigo-400/30"}`}>
                {/* Popular badge */}
                {service.popular && (
                  <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500 text-white text-xs font-medium rounded-bl-lg">
                    Popular
                  </div>
                )}

                <div className="p-6">
                  {/* Title & Price */}
                  <h3 className="text-lg font-semibold text-slate-100 mb-2">{service.title}</h3>
                  <p className="text-2xl font-bold text-indigo-400 mb-3">{service.price}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>

                  {/* Includes list */}
                  <ul className="space-y-2 mb-6">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                        <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Contact buttons */}
                  <div className="pt-4 border-t border-slate-700/50 space-y-2">
                    <p className="text-xs text-slate-500 mb-3">Interested? Reach out with a pre-filled message:</p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href={getWhatsAppLink(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 transition-colors"
                      >
                        <MessageCircle size={12} /> WhatsApp
                      </a>
                      <a
                        href={getEmailLink(service.emailSubject, service.emailBody)}
                        className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 transition-colors"
                      >
                        <Mail size={12} /> Email
                      </a>
                      <a
                        href={getTelegramLink(service.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-w-[120px] flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 transition-colors"
                      >
                        <Send size={12} /> Telegram
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Notes */}
        <ScrollReveal delay={200}>
          <div className="mt-12 p-6 rounded-xl border border-slate-700 bg-slate-900/40">
            <div className="flex items-start gap-3">
              <Info size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
              <div className="space-y-3">
                <h4 className="font-semibold text-slate-100">Important Notes</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-indigo-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-slate-300">50% deposit</strong> required before work begins. Remaining 50% due on completion.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-indigo-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-slate-300">Hosting & domain</strong> are paid by the client directly at cost — not included in these prices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-indigo-400 mt-1 flex-shrink-0" />
                    <span><strong className="text-slate-300">Custom projects?</strong> Reach out and I'll give you a personalized quote based on your needs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight size={12} className="text-indigo-400 mt-1 flex-shrink-0" />
                    <span>Prices are estimates for standard projects. Complex requirements may affect the final quote.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-10 text-center">
            <p className="text-slate-400 mb-4">Not sure which package you need? Let's talk.</p>
            <a
              href={getWhatsAppLink("Hi Vector, I saw your pricing page and I'm not sure which package fits my needs. Can you help me figure it out?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-indigo-500/20"
            >
              <MessageCircle size={16} />
              Let's Figure It Out
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
