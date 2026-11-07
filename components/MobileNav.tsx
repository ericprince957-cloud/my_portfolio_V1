"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, FileText, Mail } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: LayoutGrid },
  { href: "/projects", label: "Work", icon: FileText },
  { href: "/contact", label: "Contact", icon: Mail },
];

/**
 * App-like bottom navigation for mobile (<768px). Hidden on desktop.
 */
export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-4">
        {items.map((item) => {
          const active =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={
                "flex flex-col items-center gap-1 py-2.5 text-[10px] font-medium transition-colors " +
                (active ? "text-gold" : "text-subtle")
              }
            >
              <span className={"transition-transform " + (active ? "scale-110" : "scale-100")}>
                <Icon size={18} aria-hidden="true" />
              </span>
              {item.label}
              <span
                aria-hidden="true"
                className={"h-0.5 w-6 rounded-full transition-opacity " + (active ? "bg-gold opacity-100" : "opacity-0")}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
