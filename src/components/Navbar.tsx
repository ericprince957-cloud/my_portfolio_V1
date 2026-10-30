import { portfolioConfig } from "../config";
import { Home, User, Wrench, FolderGit2, Mail, MessageCircle, Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

/**
 * ============================================================
 * NAVIGATION — MULTI-PAGE "BUBBLE" STYLE
 * ============================================================
 * Desktop (md+): floating pill bar at the top — glass,
 * rounded-full, centered. Links switch PAGES (hash routes).
 *
 * Mobile: slim top strip (logo + toggles) and a floating
 * bubble dock fixed at the BOTTOM with icon buttons for
 * each page, plus an elevated blue WhatsApp bubble in the
 * middle. Active page highlights automatically.
 * ============================================================
 */

const pages = [
  { route: "#/", label: "Home", icon: Home },
  { route: "#/about", label: "About", icon: User },
  { route: "#/services", label: "Services", icon: Wrench },
  { route: "#/library", label: "Portfolio", icon: FolderGit2 },
  { route: "#/contact", label: "Contact", icon: Mail },
];

/** Gold-lit logo mark → now blue-lit (keeps the hosted logo image). */
function LogoMark({ size = 32 }: { size?: number }) {
  return portfolioConfig.logo ? (
    <span
      className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-400/15 to-sky-500/10 border border-blue-400/30 shadow-[0_0_18px_rgba(96,165,250,0.18)] p-1 transition-shadow hover:shadow-[0_0_26px_rgba(96,165,250,0.35)]"
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
      className="flex items-center justify-center rounded-xl bg-blue-400/10 border border-blue-400/30 text-blue-400 font-mono text-sm"
      style={{ width: size + 8, height: size + 8 }}
      aria-hidden="true"
    >
      VC
    </span>
  );
}

export default function Navbar({ activeRoute }: { activeRoute: string }) {
  const normalize = (h: string) => (h.startsWith("#/") ? h : "#/");
  const active = normalize(activeRoute);

  return (
    <>
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 md:px-4 md:pt-4 pointer-events-none" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="pointer-events-auto w-full md:w-auto md:px-2 md:py-1.5 red-glass rounded-full flex items-center justify-between md:justify-start md:gap-6 h-14 px-4">
            {/* Logo + brand → Home */}
            <a href="#/" className="flex items-center gap-2.5 text-lg font-bold text-slate-100 hover:text-blue-300 transition-colors">
              <LogoMark size={30} />
              <span className="hidden sm:inline">{portfolioConfig.brandName}</span>
            </a>

            {/* Desktop page links inside the pill */}
            <div className="hidden md:flex items-center gap-0.5">
              {pages.map((page) => (
                <a
                  key={page.route}
                  href={page.route}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                    active === page.route
                      ? "text-slate-950 bg-gradient-to-r from-blue-400 to-sky-400 font-semibold"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/10"
                  }`}
                >
                  {page.label}
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

      {/* ── MOBILE BUBBLE DOCK (bottom) ────────────────────────── */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 md:hidden animate-fade-in-up" aria-label="Page navigation">
        <div className="red-glass rounded-full flex items-center gap-1 px-2 py-2 shadow-2xl">
          {pages.slice(0, 2).map((page) => (
            <DockButton key={page.route} item={page} active={active === page.route} />
          ))}

          {/* Elevated blue WhatsApp bubble */}
          <a
            href={portfolioConfig.social.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 -my-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 text-slate-950 shadow-[0_8px_24px_rgba(96,165,250,0.45)] transition-transform hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp (opens in a new tab)"
          >
            <MessageCircle size={24} />
          </a>

          {pages.slice(2).map((page) => (
            <DockButton key={page.route} item={page} active={active === page.route} />
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
  item: { route: string; label: string; icon: typeof Home };
  active: boolean;
}) {
  return (
    <a
      href={item.route}
      aria-label={item.label}
      aria-current={active ? "true" : undefined}
      className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all ${
        active
          ? "bg-gradient-to-br from-blue-400/25 to-sky-400/10 border border-blue-400/40 text-blue-300"
          : "text-slate-400 hover:text-slate-100 hover:bg-white/10 border border-transparent"
      }`}
    >
      <item.icon size={20} />
      <span className={`text-[9px] font-medium mt-0.5 ${active ? "text-blue-300" : ""}`}>{item.label}</span>
    </a>
  );
}
