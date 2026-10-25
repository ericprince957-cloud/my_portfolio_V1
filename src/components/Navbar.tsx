import { useState, useEffect } from "react";
import { portfolioConfig } from "../config";
import { Home, Star, FolderGit2, Tag, Mail, MessageCircle, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

/**
 * ============================================================
 * NAVIGATION — "BUBBLE" STYLE
 * ============================================================
 * Desktop (md+): floating pill bar at the top — glass,
 * rounded-full, centered, with the gold-lit logo, links,
 * theme toggle and GitHub.
 *
 * Mobile: minimal top strip (logo + toggles) and a floating
 * bubble dock fixed at the BOTTOM of the screen with icon
 * buttons: Home, Work (Success Stories), Library, Pricing,
 * Contact — plus an elevated gold WhatsApp bubble in the
 * middle. The old hamburger menu is replaced entirely.
 * ============================================================
 */

const desktopLinks = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#success-stories" },
  { label: "Library", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const dockItems = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "success-stories", label: "Work", href: "#success-stories", icon: Star },
  { id: "projects", label: "Library", href: "#projects", icon: FolderGit2 },
  { id: "pricing", label: "Pricing", href: "#pricing", icon: Tag },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

/** Scroll-spy: highlights the dock item for the section in view. */
function useActiveSection() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        let current = "home";
        for (const item of dockItems) {
          const el = document.getElementById(item.id);
          if (el && el.getBoundingClientRect().top <= 140) current = item.id;
        }
        setActive(current);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return active;
}

/** Gold-lit logo mark (keeps the hosted logo image, restyled). */
function LogoMark({ size = 32 }: { size?: number }) {
  return portfolioConfig.logo ? (
    <span
      className="flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-400/15 to-yellow-500/10 border border-amber-400/30 shadow-[0_0_18px_rgba(251,191,36,0.18)] p-1 transition-shadow hover:shadow-[0_0_26px_rgba(251,191,36,0.35)]"
      aria-hidden="true"
    >
      <img
        src={portfolioConfig.logo}
        alt="Vector Codes logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-lg object-contain"
      />
    </span>
  ) : (
    <span
      className="flex items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 font-mono text-sm"
      style={{ width: size + 8, height: size + 8 }}
      aria-hidden="true"
    >
      VC
    </span>
  );
}

export default function Navbar() {
  const active = useActiveSection();

  return (
    <>
      {/* ── TOP BAR (both breakpoints) ─────────────────────── */}
      {/* Desktop: floating pill. Mobile: slim strip. */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-4 md:pt-4 pointer-events-none"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="pointer-events-auto w-full md:w-auto md:px-2 md:py-1.5 glass-card rounded-full flex items-center justify-between md:justify-start md:gap-6 h-14 px-4">
            {/* Logo + brand */}
            <a href="#home" className="flex items-center gap-2.5 text-lg font-bold text-slate-100 hover:text-amber-300 transition-colors">
              <LogoMark size={30} />
              <span className="hidden sm:inline">{portfolioConfig.brandName}</span>
            </a>

            {/* Desktop links inside the pill */}
            <div className="hidden md:flex items-center gap-0.5">
              {desktopLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    active === link.href.slice(1)
                      ? "text-slate-950 bg-gradient-to-r from-amber-400 to-yellow-400 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-1 md:gap-2 ml-auto md:ml-0">
              <ThemeToggle />
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-100 transition-colors rounded-full hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE BUBBLE DOCK (bottom) ────────────────────── */}
      <nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden animate-fade-in-up"
        aria-label="Quick navigation"
      >
        <div className="glass-card rounded-full flex items-center gap-1 px-2 py-2 shadow-2xl">
          {dockItems.slice(0, 2).map((item) => (
            <DockButton key={item.id} item={item} active={active === item.id} />
          ))}

          {/* Elevated gold WhatsApp bubble */}
          <a
            href={portfolioConfig.social.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 -my-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 shadow-[0_8px_24px_rgba(251,191,36,0.45)] transition-transform hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp (opens in a new tab)"
          >
            <MessageCircle size={24} />
          </a>

          {dockItems.slice(2).map((item) => (
            <DockButton key={item.id} item={item} active={active === item.id} />
          ))}
        </div>
      </nav>
    </>
  );
}

function DockButton({
  item,
  active,
}: {
  item: { id: string; label: string; href: string; icon: typeof Home };
  active: boolean;
}) {
  return (
    <a
      href={item.href}
      aria-label={item.label}
      aria-current={active ? "true" : undefined}
      className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all ${
        active
          ? "bg-gradient-to-br from-amber-400/25 to-yellow-400/10 border border-amber-400/40 text-amber-300"
          : "text-slate-400 hover:text-slate-100 hover:bg-white/10 border border-transparent"
      }`}
    >
      <item.icon size={20} />
      <span className={`text-[9px] font-medium mt-0.5 ${active ? "text-amber-300" : ""}`}>{item.label}</span>
    </a>
  );
}
