import { useState, useEffect } from "react";
import { portfolioConfig } from "../config";
import { Menu, X, Github } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2 text-lg font-bold text-text hover:text-primary transition-colors"
            >
              <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm">
                PE
              </span>
              <span className="hidden sm:inline">{portfolioConfig.brandName}</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-text-muted hover:text-text transition-colors rounded-lg hover:bg-surface-light/50"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-text transition-colors rounded-lg hover:bg-surface-light/50"
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="md:hidden p-2 text-text-muted hover:text-text transition-colors rounded-lg hover:bg-surface-light/50"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`text-2xl font-medium text-text-muted hover:text-primary transition-colors animate-fade-in-up`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={portfolioConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-text-muted hover:text-text hover:border-primary/50 transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
