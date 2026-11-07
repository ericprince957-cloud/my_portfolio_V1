import Link from "next/link";
import { Mail, MessageCircle, Github, Globe } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Vector Codes logo" width="32" height="32" className="h-8 w-8" />
              <span className="text-sm font-bold tracking-[0.18em]">
                VECTOR <span className="text-gold">CODES</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-subtle">
              A Nigerian digital agency building the platforms, storefronts and corporate experiences African businesses grow on. Every project ships with post-launch Support & Maintenance SLA options.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-subtle transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-subtle">
              <li>
                <a href="mailto:info@vectorcodes.ng" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Mail size={14} /> info@vectorcodes.ng
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2347084547988"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <MessageCircle size={14} /> WhatsApp: 07084547988
                </a>
              </li>
              <li>
                <a
                  href="https://vectorcodes.vercel.app"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Globe size={14} /> vectorcodes.vercel.app
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ericprince957-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs text-subtle">© 2026 Vector Codes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
