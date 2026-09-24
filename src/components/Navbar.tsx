import { useState, useEffect } from "react";
import { portfolioConfig } from "../config";
import { Menu, X, Github } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
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
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-slate-800" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="flex items-center gap-2 text-lg font-bold text-slate-100 hover:text-indigo-400 transition-colors">
              <span className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-sm">VC</span>
              <span className="hidden sm:inline">{portfolioConfig.brandName}</span>
            </a>
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="px-3 py-2 text-sm text-slate-400 hover:text-slate-100 transition-colors rounded-lg hover:bg-slate-800/50">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-100 transition-colors rounded-lg hover:bg-slate-800/50" aria-label="GitHub">
                <Github size={18} />
              </a>
              <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden p-2 text-slate-400 hover:text-slate-100 rounded-lg hover:bg-slate-800/50" aria-label="Menu">
                {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl md:hidden animate-fade-in">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link, i) => (
              <a key={link.href} href={link.href} onClick={() => setIsMobileOpen(false)} className="text-2xl font-medium text-slate-400 hover:text-indigo-400 transition-colors animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` }}>
                {link.label}
              </a>
            ))}
            <a href={portfolioConfig.social.github} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg text-slate-400 hover:text-slate-100 hover:border-indigo-400/50 transition-colors">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
}
