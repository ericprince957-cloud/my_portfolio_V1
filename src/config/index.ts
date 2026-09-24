/**
 * ============================================================
 * PORTFOLIO CONFIGURATION
 * ============================================================
 * 
 * This is the central configuration file for the portfolio.
 * Edit the values below to update your portfolio.
 * 
 * HOW TO USE:
 * - Replace placeholder URLs with your actual URLs
 * - Replace "PASTE_IMAGE_URL_HERE" with your image URLs
 * - Replace "YOUR_EMAIL_HERE" with your email
 * - Replace "YOUR_LINKEDIN_URL" with your LinkedIn URL
 * 
 * IMAGE URLS:
 * You can use direct image URLs from:
 * - Google Drive (use direct download link format)
 * - Imgur
 * - GitHub
 * - Any image hosting service
 * 
 * For Google Drive images, convert the sharing URL:
 * FROM: https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
 * TO:   https://drive.google.com/uc?export=view&id=FILE_ID
 * ============================================================
 */

export const portfolioConfig = {
  // ─── PERSONAL INFO ───────────────────────────────────────
  name: "Prince Eric",
  brandName: "Vector Codes",
  title: "Web Developer",
  subtitle: "Web Developer & Software Developer",
  location: "Nigeria",
  focus: "Web Development & Software",
  currentDirection: "Full-Stack Development",

  // ─── PROFILE IMAGE ───────────────────────────────────────
  // Replace with your profile image URL
  // Fallback shows "VC" initials if empty
  profileImage: "https://drive.google.com/uc?export=view&id=1PPDb8fuH5DjHQad5PqBm91RylMnY6ZEx",

  // ─── SOCIAL LINKS ────────────────────────────────────────
  social: {
    github: "https://github.com/ericprince957-cloud",
    linkedin: "", // PASTE_YOUR_LINKEDIN_URL_HERE
    twitter: "",  // PASTE_YOUR_TWITTER_URL_HERE
    email: "",    // PASTE_YOUR_EMAIL_HERE
  },

  // ─── HERO SECTION ────────────────────────────────────────
  hero: {
    badge: "BUILDING DIGITAL PRODUCTS",
    heading: "Vector Codes",
    statement: "Web Developer Building Digital Products That Actually Work.",
    description:
      "I design and build responsive websites, web applications, and digital experiences with a focus on clean interfaces, useful functionality, and continuous improvement.",
    primaryCTA: "View My Work",
    secondaryCTA: "Contact Me",
    githubCTA: "GitHub",
  },

  // ─── ABOUT SECTION ───────────────────────────────────────
  about: {
    heading: "Building, Learning, and Shipping.",
    paragraphs: [
      "I'm Prince Eric from Vector Codes, a web developer and software development student focused on turning ideas into functional digital products.",
      "I enjoy building websites, experimenting with APIs, working with Python, creating practical web applications, and learning how different parts of modern software systems fit together.",
      "My approach is simple: learn the fundamentals, build real projects, identify what doesn't work, fix it, and keep improving.",
    ],
  },

  // ─── CONTACT SECTION ─────────────────────────────────────
  contact: {
    heading: "Have a Project in Mind?",
    description:
      "Tell me what you're building, what problem you're trying to solve, or what you need improved.",
    // Form service endpoint - connect Formspree, EmailJS, or your own backend
    // Example: "https://formspree.io/f/YOUR_FORM_ID"
    formEndpoint: "",
  },

  // ─── STATUS INDICATOR ────────────────────────────────────
  status: {
    label: "Currently Building",
    message:
      "Working on web applications, Python development, APIs, and improving full-stack development skills.",
  },
};

/**
 * ============================================================
 * IMAGE URLS CONFIGURATION
 * ============================================================
 * 
 * Paste your image URLs below. The portfolio will automatically
 * display them. If a URL is empty or fails to load, a professional
 * placeholder will be shown instead.
 * 
 * SUPPORTED FORMATS: JPG, PNG, WebP
 * 
 * FOR GOOGLE DRIVE IMAGES:
 * Convert your sharing link to a direct link:
 * FROM: https://drive.google.com/file/d/FILE_ID/view?usp=drive_link
 * TO:   https://drive.google.com/uc?export=view&id=FILE_ID
 * ============================================================
 */
export const images = {
  // About section image
  about: "", // PASTE_ABOUT_IMAGE_URL_HERE

  // Contact section background/decoration
  contact: "", // PASTE_CONTACT_IMAGE_URL_HERE
};
