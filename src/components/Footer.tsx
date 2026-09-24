import { portfolioConfig } from "../config";
import { Github, Heart } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/30" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-mono text-sm font-bold">
                PE
              </span>
              <div>
                <p className="font-semibold text-text">{portfolioConfig.name}</p>
                <p className="text-xs text-text-dim">{portfolioConfig.title}</p>
              </div>
            </div>
            <p className="text-sm text-text-muted mt-3 max-w-xs">
              Building modern websites and web applications with clean interfaces and practical functionality.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={portfolioConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    GitHub <Github size={12} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-sm font-semibold text-text mb-4">Status</h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="status-dot" />
              <span className="text-sm text-text-muted">Available for projects</span>
            </div>
            <p className="text-xs text-text-dim">
              Currently focused on web development, Python, and full-stack learning.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © 2026 {portfolioConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-dim flex items-center gap-1">
            Built with <Heart size={10} className="text-primary" /> code, curiosity, and continuous improvement.
          </p>
        </div>
      </div>
    </footer>
  );
}
