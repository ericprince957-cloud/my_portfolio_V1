"use client";

import Link from "next/link";
import { RotateCw, MessageCircle, WifiOff } from "lucide-react";
import { projects } from "@/data/projects";

/**
 * Offline fallback page. Served by the service worker when the network
 * is unavailable. WhatsApp link works whenever the page itself is cached.
 */
export default function OfflinePage() {
  const retry = () => {
    if (typeof window !== "undefined") window.location.reload();
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.svg" alt="Vector Codes logo" width="72" height="72" className="mx-auto h-16 w-16" />
        <div className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5">
          <WifiOff size={14} className="text-gold" aria-hidden="true" />
          <span className="text-xs font-medium tracking-wide text-gold">You&rsquo;re offline</span>
        </div>
        <h1 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-3xl">
          No connection — but we&rsquo;re still here.
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-subtle">
          It looks like your device lost its connection. Your installed Vector Codes app still works —
          check your network and try again, or reach us directly on WhatsApp.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={retry}
            className="gold-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <RotateCw size={15} /> Retry Connection
          </button>
          <a
            href={"https://wa.me/2347084547988?text=" +
            encodeURIComponent("Hi Prince, I was browsing the Vector Codes site and I'd like to discuss a project.")}
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <MessageCircle size={15} /> WhatsApp Us
          </a>
        </div>

        <div className="card mt-10 rounded-xl p-5 text-left">
          <p className="text-xs font-semibold tracking-[0.16em] text-subtle uppercase">
            Projects you can revisit
          </p>
          <ul className="mt-3 space-y-2">
            {projects.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  href={"/projects/" + p.slug}
                  className="text-sm text-white transition-colors hover:text-gold"
                >
                  {p.name}
                </Link>
                <span className="ml-2 text-xs text-subtle">{p.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
