import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import {
  GitHubSection,
  CurrentlyBuilding,
  Experience,
  Services,
  WhyWorkWithMe,
} from "./components/Sections";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * ============================================================
 * PRINCE ERIC - PORTFOLIO
 * ============================================================
 * 
 * A premium personal developer portfolio.
 * 
 * ARCHITECTURE:
 * - src/config/index.ts    → Personal info, URLs, images (EDIT HERE FIRST)
 * - src/config/projects.ts → Project data (add projects here)
 * - src/components/        → All UI components
 * 
 * TO CUSTOMIZE:
 * 1. Edit src/config/index.ts for personal info and image URLs
 * 2. Edit src/config/projects.ts to add/update projects
 * 3. All external URLs are centralized in config files
 * 
 * ============================================================
 */

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-text overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <GitHubSection />
        <div className="section-divider" />
        <CurrentlyBuilding />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <WhyWorkWithMe />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
