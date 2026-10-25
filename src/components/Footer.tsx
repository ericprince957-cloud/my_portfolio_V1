import { portfolioConfig } from "../config";
import { Github, Heart, MessageCircle, Send, Mail, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Reviews", href: "#reviews" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const { social, contactInfo } = portfolioConfig;

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 backdrop-blur-xl" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              {portfolioConfig.logo ? (
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/15 to-yellow-500/10 border border-amber-400/30 shadow-[0_0_16px_rgba(251,191,36,0.15)] p-1">
                  <img src={portfolioConfig.logo} alt="Vector Codes logo" width={32} height={32} className="w-8 h-8 rounded-lg object-contain" />
                </span>
              ) : (
                <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400/20 to-yellow-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-mono text-sm font-bold">VC</span>
              )}
              <div>
                <p className="font-semibold text-slate-100">{portfolioConfig.name}</p>
                <p className="text-xs text-slate-500">{portfolioConfig.brandName}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-3 max-w-xs">Building premium digital experiences for Nigerian businesses. High-speed, mobile-first websites that convert.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-4">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100 mb-4">Connect</h3>
            <div className="space-y-2">
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors">
                <Github size={14} /> GitHub
              </a>
              <a href={`https://wa.me/${contactInfo.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-green-400 transition-colors">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href={`https://t.me/${contactInfo.telegram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-400 transition-colors">
                <Send size={14} /> Telegram
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={14} /> Email
              </a>
              {social.twitter && (
                <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-100 transition-colors">
                  <Twitter size={14} /> X (Twitter)
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              )}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="status-dot" />
              <span className="text-xs text-slate-500">Available for projects</span>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 {portfolioConfig.brandName}. Built with <Heart size={10} className="text-cyan-400 inline" /> & ☕.</p>
          <p className="text-xs text-slate-500">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
