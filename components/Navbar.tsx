"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const solutionLinks = [
  { href: "/solutions#digital-infrastructure", label: "Digital Infrastructure" },
  { href: "/solutions#business-automation", label: "Business Automation" },
  { href: "/solutions#growth-visibility", label: "Growth & Visibility" },
  { href: "/solutions#trust-security", label: "Trust & Security" },
];

const links = [
  { href: "/projects", label: "Case Studies" },
  { href: "/process", label: "Our Process" },
  { href: "/company", label: "Company" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main navigation">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Vector Codes logo" width="32" height="32" className="h-8 w-8" />
          <span className="text-sm font-bold tracking-[0.18em] text-white">
            VECTOR <span className="text-gold">CODES</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Solutions dropdown */}
          <div className="group relative">
            <Link
              href="/solutions"
              data-active={isActive("/solutions")}
              className={
                "nav-link inline-flex items-center gap-1 text-sm " +
                (isActive("/solutions") ? "text-gold" : "text-subtle hover:text-white")
              }
            >
              Solutions <ChevronDown size={13} aria-hidden="true" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="card rounded-xl p-2">
                {solutionLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block rounded-lg px-3 py-2.5 text-sm text-subtle transition-colors hover:bg-surface hover:text-gold"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-active={isActive(link.href)}
              className={
                "nav-link text-sm " +
                (isActive(link.href) ? "text-gold" : "text-subtle hover:text-white")
              }
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.me/2347084547988?text=Hi%20Prince%2C%20I'd%20like%20to%20schedule%20a%20free%20audit%20with%20Vector%20Codes.%20(via%20navbar)"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold"
          >
            Schedule Free Audit <ArrowRight size={14} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-line bg-bg md:hidden"
          >
            <div className="flex flex-col px-4 py-4">
              <Link
                href="/solutions"
                onClick={() => setOpen(false)}
                className={
                  "rounded-md px-3 py-3 text-sm " +
                  (isActive("/solutions") ? "bg-surface text-gold" : "text-subtle hover:bg-surface hover:text-white")
                }
              >
                Solutions
              </Link>
              <div className="ml-3 flex flex-col border-l border-line">
                {solutionLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 pl-4 text-xs text-subtle hover:text-gold"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={
                    "rounded-md px-3 py-3 text-sm " +
                    (isActive(link.href)
                      ? "bg-surface text-gold"
                      : "text-subtle hover:bg-surface hover:text-white")
                  }
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/2347084547988?text=Hi%20Prince%2C%20I'd%20like%20to%20schedule%20a%20free%20audit%20with%20Vector%20Codes.%20(via%20navbar)"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="gold-btn mt-3 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold"
              >
                Schedule Free Audit <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
