import Link from "next/link";
import { Mail, MessageCircle, Send, Github, Globe, MapPin } from "lucide-react";

const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/projects", label: "Case Studies" },
    { href: "/process", label: "Our Process" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy & NDPR" },
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
                <a href="mailto:vectorcodes15@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-gold">
                  <Mail size={14} /> vectorcodes15@gmail.com
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
                <li>
                  <a
                    href="https://t.me/Vectorcodes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                  >
                    <Send size={14} /> Telegram: @Vectorcodes
                  </a>
                </li>
                <a
                  href="https://github.com/ericprince957-cloud"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Github size={14} /> GitHub
                </a>
              </li>
            <li className="flex items-center gap-2">
              <MapPin size={14} className="shrink-0 text-gold/70" aria-hidden="true" />
              <span className="text-xs text-subtle">Abia State, Nigeria</span>
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
