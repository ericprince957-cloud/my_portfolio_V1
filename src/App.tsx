import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import ProjectLibrary from "./components/ProjectLibrary";
import { GitHubSection, CurrentlyBuilding, Experience, Services, WhyWorkWithMe } from "./components/Sections";
import { Community, Trust } from "./components/CommunityTrust";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * ============================================================
 * SIMPLE HASH ROUTER
 * ============================================================
 * "#/library" renders the dedicated Project Library page.
 * Any other hash (or none) renders the home page.
 * Plain hash anchors (e.g. "#services") still scroll to
 * sections on the home page as before.
 * ============================================================
 */
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return hash;
}

export default function App() {
  const hash = useHashRoute();
  const isLibrary = hash === "#/library";

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
        {isLibrary ? (
          <ProjectLibrary />
        ) : (
          <>
            <Hero />
            <div className="section-divider" />
            <FeaturedProjects />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Projects />
            <div className="section-divider" />
            <Community />
            <div className="section-divider" />
            <Trust />
            <div className="section-divider" />
            <Reviews />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <GitHubSection />
            <div className="section-divider" />
            <CurrentlyBuilding />
            <div className="section-divider" />
            <Experience />
            <div className="section-divider" />
            <Services />
            <div className="section-divider" />
            <Pricing />
            <div className="section-divider" />
            <WhyWorkWithMe />
            <div className="section-divider" />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
