"use client";

import { useEffect, useState } from "react";
import { X, Download, Share, PlusSquare } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const DISMISS_KEY = "vc-install-dismissed";
const VISITS_KEY = "vc-visits";

/**
 * Custom "Add to Home Screen" banner (Vector Codes branded).
 * Triggers after 30s of engagement, or immediately on the 2nd visit.
 * Chrome/Android: uses the captured beforeinstallprompt event.
 * iOS Safari: shows native Add to Home Screen instructions instead.
 */
export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem(DISMISS_KEY)) return;

    const visits = Number(localStorage.getItem(VISITS_KEY) || "0") + 1;
    localStorage.setItem(VISITS_KEY, String(visits));

    const ua = navigator.userAgent.toLowerCase();
    const ios = /iphone|ipad|ipod/.test(ua) && !/crios|fxios/.test(ua);
    setIsIOS(ios);

    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as unknown as { standalone?: boolean }).standalone === true;
    if (standalone) return;

    let timer: ReturnType<typeof setTimeout> | undefined;

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      if (visits >= 2) {
        timer = setTimeout(() => setVisible(true), 2000);
      } else {
        timer = setTimeout(() => setVisible(true), 30000);
      }
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    // iOS never fires beforeinstallprompt — show instruction banner on 2nd visit.
    if (ios && visits >= 2) {
      timer = setTimeout(() => setVisible(true), 2000);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  const install = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice;
    if (choice.outcome === "accepted") {
      setVisible(false);
    }
    setDeferredPrompt(null);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Install Vector Codes app"
      className="fixed inset-x-3 bottom-20 z-[60] md:bottom-6 md:left-auto md:right-6 md:max-w-sm"
    >
      <div className="card rounded-2xl border-gold/40 p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width="36" height="36" className="h-9 w-9 shrink-0" />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-white">Install Vector Codes</p>
            <p className="mt-0.5 text-xs leading-relaxed text-subtle">
              Add us to your home screen for instant, app-like access.
            </p>

            {isIOS && !deferredPrompt ? (
              <p className="mt-2 flex flex-wrap items-center gap-1 text-xs text-gold">
                <Share size={12} /> Tap Share, then &ldquo;Add to Home Screen&rdquo; <PlusSquare size={12} />
              </p>
            ) : (
              <button
                type="button"
                onClick={install}
                className="gold-btn mt-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
              >
                <Download size={13} /> Add to Home Screen
              </button>
            )}
          </div>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss install prompt"
            className="rounded-md p-1 text-subtle transition-colors hover:text-white"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
