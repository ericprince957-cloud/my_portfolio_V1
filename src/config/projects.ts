/**
 * ============================================================
 * PROJECTS DATA
 * ============================================================
 * 
 * Add your projects here. Each project is an object in the array.
 * To add a new project, simply add a new object to the array.
 * 
 * FIELDS:
 * - title: Project name (required)
 * - description: Short description (required)
 * - image: Project screenshot/thumbnail URL (optional - shows placeholder if empty)
 * - problem: What problem does this solve? (optional)
 * - solution: How does it solve the problem? (optional)
 * - features: Array of key features (optional)
 * - technologies: Array of tech used (required)
 * - github: GitHub repository URL (optional)
 * - live: Live demo URL (optional)
 * - category: One of "frontend" | "fullstack" | "python" | "api" | "webapp" | "tools"
 * - status: "Completed" | "In Progress" | "Planning"
 * 
 * CATEGORIES:
 * - frontend: HTML/CSS/JS projects
 * - fullstack: Frontend + Backend
 * - python: Python-based projects
 * - api: API-related projects
 * - webapp: Web applications
 * - tools: CLI tools, utilities
 * 
 * HOW TO ADD A NEW PROJECT:
 * Copy one of the objects below, paste it at the end of the array,
 * and fill in your project details.
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
  category: "frontend" | "fullstack" | "python" | "api" | "webapp" | "tools";
  status: "Completed" | "In Progress" | "Planning";
}

export const projects: Project[] = [
  {
    id: "pixelvault",
    title: "PixelVault",
    description:
      "A modern image management and gallery application with responsive design and interactive features.",
    image: "",
    problem:
      "Need for an organized, visually appealing way to manage and display image collections.",
    solution:
      "Built a responsive gallery application with clean UI, image organization, and smooth interactions.",
    features: [
      "Responsive image gallery layout",
      "Interactive image viewing",
      "Clean, modern interface",
      "Mobile-optimized design",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ericprince957-cloud/PixelVault_v2",
    live: "", // PASTE_LIVE_DEMO_URL_HERE
    category: "frontend",
    status: "Completed",
  },
  {
    id: "solar-review-nigeria",
    title: "Solar Review Nigeria",
    description:
      "A platform for reviewing and comparing solar energy solutions available in Nigeria.",
    image: "",
    problem:
      "Lack of accessible information for comparing solar energy products and services in Nigeria.",
    solution:
      "Created a web platform that helps users find, compare, and review solar energy solutions.",
    features: [
      "Solar product reviews",
      "Comparison features",
      "Nigeria-focused content",
      "Responsive design",
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ericprince957-cloud", // UPDATE_WITH_SPECIFIC_REPO_URL
    live: "", // PASTE_LIVE_DEMO_URL_HERE
    category: "webapp",
    status: "In Progress",
  },
  {
    id: "python-command-shell",
    title: "Python Command Shell",
    description:
      "A custom command-line shell built with Python, implementing basic OS commands and file operations.",
    image: "",
    problem:
      "Understanding how operating system shells work and building practical Python applications.",
    solution:
      "Built a functional command shell that processes user commands, manages files, and demonstrates Python programming concepts.",
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
  },
  {
    id: "project-slot-1",
    title: "Upcoming Project",
    description:
      "A new project currently in development. Details will be added soon.",
    image: "",
    problem: "",
    solution: "",
    features: [],
    technologies: [],
    github: "",
    live: "",
    category: "webapp",
    status: "Planning",
  },
];

/**
 * ============================================================
 * FILTER CATEGORIES
 * ============================================================
 * These are the filter options shown in the Projects section.
 * Each maps to a category in the projects array above.
 * ============================================================
 */
export const filterCategories = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Python", value: "python" },
  { label: "API", value: "api" },
  { label: "Web Apps", value: "webapp" },
  { label: "Tools", value: "tools" },
];
