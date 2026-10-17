/**
 * ============================================================
 * PROJECTS DATA — VECTOR CODES
 * ============================================================
 * 
 * Add your projects here. Each project is an object in the array.
 * To add a new project, simply add a new object to the array.
 * 
 * Replace [placeholder] with actual image URLs when ready.
 * ============================================================
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github: string;
  live: string;
  category: "frontend" | "fullstack" | "python" | "api" | "webapp" | "tools" | "ecommerce" | "fashion" | "logistics" | "service";
  status: "Completed" | "In Progress" | "Planning" | "Deploying Soon";
  tag?: string;
}

export const projects: Project[] = [
  {
    id: "techlaza",
    title: "Techlaza",
    description: "Premium gadget store with glassmorphism design & WhatsApp ordering.",
    image: "[placeholder]",
    problem: "Techlaza needed a modern e-commerce platform to showcase their gadget collection with seamless ordering.",
    solution: "Built a premium glassmorphism-styled store with WhatsApp integration for direct ordering.",
    features: [
      "Glassmorphism UI design",
      "WhatsApp ordering integration",
      "Product catalog with categories",
      "Mobile-first responsive design",
      "Fast loading performance",
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "WhatsApp API"],
    github: "",
    live: "#",
    category: "ecommerce",
    status: "Deploying Soon",
    tag: "E-Commerce / Tech",
  },
  {
    id: "seunbloom-chic",
    title: "Seunbloom Chic",
    description: "Mobile-first catalogue for a fashion brand with direct WhatsApp booking.",
    image: "[placeholder]",
    problem: "Seunbloom Chic needed an online presence to showcase their bridal collection and accept bookings.",
    solution: "Created a mobile-first fashion catalogue with direct WhatsApp booking integration.",
    features: [
      "Mobile-first design",
      "Fashion catalogue layout",
      "WhatsApp booking integration",
      "Image gallery",
      "Contact form",
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "WhatsApp API"],
    github: "",
    live: "https://seunbloom-chic.vercel.app/",
    category: "fashion",
    status: "Completed",
    tag: "Fashion / Bridal",
  },
  {
    id: "big-bro-delivery",
    title: "Big Bro's Delivery",
    description: "Courier service site with quote forms and tracking UI concepts.",
    image: "[placeholder]",
    problem: "Big Bro's Delivery needed a professional website to showcase their courier services and generate quotes.",
    solution: "Built a logistics website with quote request forms and tracking UI concepts.",
    features: [
      "Quote request form",
      "Service showcase",
      "Tracking UI concepts",
      "Mobile-responsive design",
      "Contact integration",
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "",
    live: "https://big-bro-delivery-website.vercel.app/",
    category: "logistics",
    status: "Completed",
    tag: "Logistics",
  },
  {
    id: "hvac-cumberland",
    title: "HVAC Cumberland",
    description: "Professional service landing page for a top HVAC company.",
    image: "[placeholder]",
    problem: "Cumberland HVAC needed a professional landing page to showcase their services and generate leads.",
    solution: "Created a clean, professional service landing page optimized for conversions.",
    features: [
      "Service showcase",
      "Lead generation form",
      "Professional design",
      "Mobile-responsive",
      "Fast loading",
    ],
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "",
    live: "https://www.cumberlandhvac.com.ng",
    category: "service",
    status: "Completed",
    tag: "Service / First Client",
  },
  {
    id: "pixelvault",
    title: "PixelVault",
    description: "A modern image management and gallery application with responsive design and interactive features.",
    image: "[placeholder]",
    problem: "Need for an organized, visually appealing way to manage and display image collections.",
    solution: "Built a responsive gallery application with clean UI, image organization, and smooth interactions.",
    features: [
      "Responsive image gallery layout",
      "Interactive image viewing",
      "Clean, modern interface",
      "Mobile-optimized design",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ericprince957-cloud/PixelVault_v2",
    live: "",
    category: "frontend",
    status: "Completed",
    tag: "Gallery / Frontend",
  },
  {
    id: "python-command-shell",
    title: "Python Command Shell",
    description: "A custom command-line shell built with Python, implementing basic OS commands and file operations.",
    image: "[placeholder]",
    problem: "Understanding how operating system shells work and building practical Python applications.",
    solution: "Built a functional command shell that processes user commands, manages files, and demonstrates Python programming concepts.",
    features: [
      "Custom command processing",
      "File system operations",
      "Command history",
      "Error handling",
    ],
    technologies: ["Python", "CLI", "File Handling"],
    github: "https://github.com/ericprince957-cloud/princeos-python-command-shell",
    live: "",
    category: "python",
    status: "Completed",
    tag: "Python / CLI Tool",
  },
];

/**
 * ============================================================
 * FILTER CATEGORIES
 * ============================================================
 */
export const filterCategories = [
  { label: "All", value: "all" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Fashion", value: "fashion" },
  { label: "Logistics", value: "logistics" },
  { label: "Service", value: "service" },
  { label: "Frontend", value: "frontend" },
  { label: "Python", value: "python" },
];
