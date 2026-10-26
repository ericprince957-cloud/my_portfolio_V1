import About from "../components/About";
import Skills from "../components/Skills";
import { GitHubSection, CurrentlyBuilding, Experience, WhyWorkWithMe } from "../components/Sections";

/**
 * ============================================================
 * PAGE: ABOUT  (route: #/about)
 * ============================================================
 * About → Skills → Experience → GitHub → Currently
 * Building → Why Work With Me.
 * ============================================================
 */
export default function AboutPage() {
  return (
    <>
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <GitHubSection />
      <div className="section-divider" />
      <CurrentlyBuilding />
      <div className="section-divider" />
      <WhyWorkWithMe />
    </>
  );
}
