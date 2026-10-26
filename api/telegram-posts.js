/**
 * ============================================================
 * VERCEL SERVERLESS FUNCTION — /api/telegram-posts
 * ============================================================
 * Reads the latest posts from the public Telegram channel
 * (via its public web preview at t.me/s/<channel>) and
 * returns them as JSON — no bot or token required.
 *
 * GET /api/telegram-posts  →  { ok, channel, posts: [...] }
 *
 * NOTE: This parses the public t.me HTML, so if Telegram
 * changes their markup this needs a small regex update.
 * ============================================================
 */
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=1800, stale-while-revalidate=3600"); // cache 30 min on Vercel CDN

  const CHANNEL = process.env.TG_CHANNEL || "vector_codes";

  try {
    const r = await fetch(`https://t.me/s/${CHANNEL}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36",
      },
    });
    if (!r.ok) throw new Error(`Telegram returned ${r.status}`);
    const html = await r.text();

    // Each message lives in its own widget wrapper; DOM order is oldest → newest.
    const messages = html.split("tgme_widget_message_wrap").slice(1).reverse();

    const decode = (s) =>
      s
        .replace(/<br\s*\/?>/g, "\n")
        .replace(/<[^>]+>/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&#039;/g, "'")
        .replace(/[ \t]+/g, " ")
        .replace(/ ?\n ?/g, "\n")
        .trim();

    const posts = [];
    for (const m of messages) {
      const textMatch = m.match(/tgme_widget_message_text[^>]*>([\s\S]*?)<\/div>/);
      const timeMatch = m.match(/<time[^>]*datetime="([^"]+)"/);
      const postMatch = m.match(/data-post="([^"]+)"/);
      if (!textMatch) continue;
      const text = decode(textMatch[1]);
      if (!text || text.length < 20) continue; // skip empty / trivial posts
      posts.push({
        text: text.length > 400 ? text.slice(0, 400).trim() + "…" : text,
        date: timeMatch ? timeMatch[1] : null,
        link: postMatch ? `https://t.me/${CHANNEL}/${postMatch[1].split("/")[1]}` : `https://t.me/${CHANNEL}`,
      });
      if (posts.length >= 5) break;
    }

    res.status(200).json({ ok: true, channel: CHANNEL, posts });
  } catch (e) {
    // Fail soft: the frontend falls back to channel CTA cards.
    res.status(200).json({ ok: false, channel: process.env.TG_CHANNEL || "vector_codes", posts: [] });
  }
}
