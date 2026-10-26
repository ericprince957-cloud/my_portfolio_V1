import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectLibrary from "./components/ProjectLibrary";
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

/**
 * ============================================================
 * MULTI-PAGE HASH ROUTER (4-5 pages, no dependencies)
 * ============================================================
 *   #/          → Home (hero, success stories, reviews)
 *   #/about     → About (bio, skills, experience, GitHub)
 *   #/services  → Services & Pricing (+ trust signals)
 *   #/library   → Portfolio — full project library
 *   #/contact   → Contact (+ community channels)
 *
 * Plain in-page anchors (e.g. "#success-stories") do not
 * change the active page.
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

function parseRoute(hash: string): string {
  if (!hash || !hash.startsWith("#/")) return "#/";
  return hash;
}

export default function App() {
  const raw = useHashRoute();
  const route = parseRoute(raw);

  // Scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 overflow-x-hidden transition-colors duration-300 pb-24 md:pb-0">
      <Navbar activeRoute={route} />
      <main>
        {route === "#/about" ? (
          <AboutPage />
        ) : route === "#/services" ? (
          <ServicesPage />
        ) : route === "#/library" ? (
          <ProjectLibrary />
        ) : route === "#/contact" ? (
          <ContactPage />
        ) : route === "#/" ? (
          <Home />
        ) : (
          <NotFound />
        )}
      </main>
      <Footer />
    </div>
  );
}
