import { useState, useEffect } from "react";
import { portfolioConfig } from "../config";
import { ScrollReveal } from "./ui";
import { Send, MessageCircle, ExternalLink, Loader2 } from "lucide-react";

/**
 * ============================================================
 * "LATEST FROM THE CHANNEL" BOX
 * ============================================================
 * Telegram: pulls the latest posts live from /api/telegram-posts
 * (a Vercel serverless function reading the channel's public web
 * preview). Clicking a post opens it on Telegram.
 *
 * WhatsApp Channel: there is NO public API for WhatsApp Channels,
 * so this shows a prominent "Join the channel" card that links
 * straight to it instead of live posts.
 *
 * If the API is unreachable (dev mode, Telegram outage), the
 * component gracefully shows only the two channel CTA cards.
 * ============================================================
 */

interface ChannelPost {
  text: string;
  date: string | null;
  link: string;
}

function formatDate(iso: string | null): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-NG", { day: "numeric", month: "short" });
}

export default function ChannelUpdates() {
  const [posts, setPosts] = useState<ChannelPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/telegram-posts")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data?.ok) setPosts((data.posts || []).slice(0, 3));
      })
      .catch(() => {})
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const hasPosts = posts.length > 0;

  return (
    <section id="channel" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-blue-300 border border-blue-400/30 rounded-full mb-4 bg-blue-400/5">
              Behind the Scenes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4 font-display">
              Latest from My Channel
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Daily web tips, project updates and behind-the-scenes builds — straight from my Telegram channel.
            </p>
          </div>
        </ScrollReveal>

        <div className={`grid gap-6 max-w-5xl mx-auto ${hasPosts ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
          {/* ── TELEGRAM POSTS (live) ─────────────────────────── */}
          {loading ? (
            <div className="md:col-span-full flex items-center justify-center gap-2 text-slate-500 text-sm py-8">
              <Loader2 size={16} className="animate-spin" /> Loading latest posts…
            </div>
          ) : (
            hasPosts && (
              <>
                {posts.map((post, i) => (
                  <ScrollReveal key={post.link} delay={i * 100}>
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group glass-card rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 hover:border-blue-400/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400">
                          <Send size={12} /> Telegram
                        </span>
                        <span className="text-xs text-slate-500">{formatDate(post.date)}</span>
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed line-clamp-6 mb-4 whitespace-pre-line">
                        {post.text}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                        Read on Telegram <ExternalLink size={12} />
                      </span>
                    </a>
                  </ScrollReveal>
                ))}
              </>
            )
          )}

          {/* ── TELEGRAM CHANNEL CTA ─────────────────────────────── */}
          {!loading && hasPosts && (
            <ScrollReveal delay={posts.length * 100}>
              <a
                href={portfolioConfig.social.telegramChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-sky-400/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Send size={22} className="text-sky-400" />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">Join the Telegram Channel</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Exclusive demos, technical insights and early previews.
                </p>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-blue-400 rounded-lg transition-all group-hover:scale-105">
                  Join <ExternalLink size={13} />
                </span>
              </a>
            </ScrollReveal>
          )}

          {/* ── WHATSAPP CHANNEL CTA (no public API — link only) ── */}
          {!(loading && hasPosts) && (
            <ScrollReveal delay={200}>
              <a
                href={portfolioConfig.social.whatsappChannel}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center hover:-translate-y-1 hover:border-green-400/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle size={22} className="text-green-400" />
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">Join the WhatsApp Channel</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Daily web tips and behind-the-scenes updates. Tap to follow and never miss a post.
                </p>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg transition-all group-hover:scale-105">
                  Follow <ExternalLink size={13} />
                </span>
              </a>
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
