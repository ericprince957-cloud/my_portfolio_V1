import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import { GitHubSection, CurrentlyBuilding, Experience, Services, WhyWorkWithMe } from "./components/Sections";
import { Community, Trust } from "./components/CommunityTrust";
import Reviews from "./components/Reviews";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 light:bg-slate-50 text-slate-100 dark:text-slate-100 light:text-slate-900 overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

