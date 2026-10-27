/**
 * ============================================================
 * PORTFOLIO CONFIGURATION — VECTOR CODES
 * ============================================================
 * 
 * Central configuration file. Edit values here to update
 * the entire portfolio.
 * 
 * For images, replace [placeholder] with direct image URLs.
 * For Google Drive: convert to https://drive.google.com/uc?export=view&id=FILE_ID
 * ============================================================
 */

export const portfolioConfig = {
  // ─── PERSONAL INFO ───────────────────────────────────────
  name: "Vector",
  fullName: "Uche Prince Eric",
  brandName: "Vector Codes",
  title: "Full-Stack Developer",
  subtitle: "Web Developer & Software Developer",
  location: "Abia State, Nigeria",
  school: "ABSU Student",
  focus: "Fashion, Logistics & Tech Brands",
  currentDirection: "Full-Stack Development",
  specialty: "High-converting websites for Fashion, Logistics, and Tech brands using Glassmorphism & Mobile-First design.",

  // ─── PROFILE IMAGE ───────────────────────────────────────
  // Hosted headshot (PNG). TODO: convert to WebP and self-host at /public/headshot.webp for optimal load time.
  profileImage:
    "https://i.supaimg.com/1de2246f-c5c0-49ee-90b4-e66f91808884/5d7d4918-d19d-4c9a-bec1-3d595c5709ac.png",

  // ─── BRAND LOGO ──────────────────────────────────────────
  // TODO: convert to WebP and self-host at /public/logo.webp for optimal load time.
  logo: "https://i.supaimg.com/44a76b26-2555-4351-81a0-26a85156346b/9cc8cbfb-dc2d-4336-8337-ec698ba9050f.png",

  // ─── CONTACT INFO ────────────────────────────────────────
  contactInfo: {
    email: "vectorcodes15@gmail.com",
    whatsapp: "+2347084547988",
    telegram: "vector_codes",
  },

  // ─── SOCIAL LINKS ────────────────────────────────────────
  social: {
    github: "https://github.com/ericprince957-cloud",
    linkedin: "",
    twitter: "",
    email: "vectorcodes15@gmail.com",
    whatsappLink: "https://wa.me/2347084547988",
    telegramLink: "https://t.me/vector_codes",
    whatsappChannel: "https://whatsapp.com/channel/0029Vb97CMQBA1f4Chcdlm0g",
    telegramChannel: "https://t.me/vector_codes",
    emailLink: "mailto:vectorcodes15@gmail.com",
  },

  // ─── STATS ───────────────────────────────────────────────
  stats: [
    { value: "5+", label: "Happy Clients" },
    { value: "5+", label: "Live Projects" },
    { value: "4+", label: "Paid Clients" },
  ],

  // ─── HERO SECTION ────────────────────────────────────────
  hero: {
    headline: "Building Premium Digital Experiences for Nigerian Businesses.",
    subheadline: "Trusted by 5+ happy clients. I help Fashion, Logistics & Tech brands scale with high-speed, mobile-first websites.",
    primaryCTA: "View My Work",
    secondaryCTA: "Contact on WhatsApp",
    secondaryCTALink: "https://wa.me/2347084547988",
  },

  // ─── ABOUT SECTION ───────────────────────────────────────
  about: {
    heading: "About Me",
    bio: "I'm Vector, a Full-Stack Developer based in Abia State. I specialize in turning ideas into powerful digital solutions using modern tools like Tailwind, Firebase, and WordPress.",
  },

  // ─── COMMUNITY SECTION ───────────────────────────────────
  community: {
    heading: "Join My Builder Community",
    description: "Follow my journey, get free web tips, and see behind-the-scenes builds.",
    channels: [
      {
        platform: "WhatsApp Channel",
        title: "Daily Updates & Tips",
        description: "Get daily web development tips, project updates, and behind-the-scenes content.",
        link: "https://whatsapp.com/channel/0029Vb97CMQBA1f4Chcdlm0g",
        icon: "whatsapp",
      },
      {
        platform: "Telegram Channel",
        title: "Exclusive Demos & Insights",
        description: "Access exclusive demos, technical insights, and early previews of upcoming projects.",
        link: "https://t.me/vector_codes",
        icon: "telegram",
      },
    ],
  },

  // ─── TRUST SECTION ───────────────────────────────────────
  trust: {
    verified: "Verified Business on Google Maps",
    testimonial: {
      quote: "Professional and fast service.",
      author: "Chukwuemeka Samuel",
      company: "Techlaza",
    },
  },

  // ─── CONTACT SECTION ─────────────────────────────────────
  contact: {
    heading: "Have a Project in Mind?",
    description: "Tell me what you're building, what problem you're trying to solve, or what you need improved. Let's build something great together.",
    formEndpoint: "",
  },

  // ─── STATUS INDICATOR ────────────────────────────────────
  status: {
    label: "Available for Projects",
    message: "Currently accepting new clients for web development projects. Response time: under 24 hours.",
  },
};

/**
 * ============================================================
 * IMAGE URLS CONFIGURATION
 * ============================================================
 */
export const images = {
  about: "[placeholder]",
  contact: "[placeholder]",
};
