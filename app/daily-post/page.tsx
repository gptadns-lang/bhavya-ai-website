"use client";
import { useRef, useState } from "react";
import { toPng } from "html-to-image";
import { useLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { getTodayPost, typeBadge } from "@/lib/daily-posts";

export default function DailyPostPage() {
  const { lang, t } = useLang();
  const posterRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const { post, dayIndex } = getTodayPost();
  const text = lang === "hi" ? post.textHi : post.textEn;

  const caption = `${text}\n\n🎓 Bhavya AI Research Centre\n👤 ${siteConfig.founder}\n📞 +91 ${siteConfig.phones.join(" | +91 ")}\n▶️ YouTube: ${siteConfig.social.youtube}\n🌐 ${siteConfig.social.whatsapp}\n\n#AIinHindi #BhavyaAI #LearnAI #AISkills #HindiAI`;

  const downloadPNG = async () => {
    if (!posterRef.current) return;
    setBusy(true);
    setStatus("");
    try {
      const dataUrl = await toPng(posterRef.current, { cacheBust: true, pixelRatio: 2 });
      const a = document.createElement("a");
      a.download = `bhavya-ai-post-day${dayIndex + 1}.png`;
      a.href = dataUrl;
      a.click();
      setStatus(t("Poster downloaded! Post it on WhatsApp, Instagram & Facebook.", "Poster download ho gaya! WhatsApp, Instagram aur Facebook par post karo."));
    } catch {
      setStatus(t("Download failed, try again.", "Download fail hua, dobara try karo."));
    }
    setBusy(false);
  };

  const copyCaption = async () => {
    try {
      await navigator.clipboard.writeText(caption);
      setStatus(t("Caption copied!", "Caption copy ho gaya!"));
    } catch {
      setStatus(caption);
    }
  };

  const sendToTelegram = async () => {
    const token = siteConfig.social.telegramBotToken;
    if (!token) {
      setStatus(
        t(
          "Bot not connected yet. Create a bot with @BotFather, make it admin of your channel, and save its token in lib/site.ts → telegramBotToken.",
          "Bot abhi connected nahi hai. @BotFather se bot banao, use channel ka admin banao, aur token lib/site.ts me telegramBotToken me save karo."
        )
      );
      return;
    }
    if (!posterRef.current) return;
    setBusy(true);
    setStatus(t("Sending to Telegram…", "Telegram par bhej rahe hain…"));
    try {
      const dataUrl = await toPng(posterRef.current, { cacheBust: true, pixelRatio: 2 });
      const blob = await (await fetch(dataUrl)).blob();
      const fd = new FormData();
      fd.append("chat_id", siteConfig.social.telegramChatId);
      fd.append("photo", blob, "daily-post.png");
      fd.append("caption", caption);
      const res = await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, { method: "POST", body: fd });
      if (!res.ok) throw new Error("send failed");
      setStatus(t("Posted on Telegram! ✓", "Telegram par post ho gaya! ✓"));
    } catch {
      setStatus(t("Failed. Check bot token & admin rights.", "Fail hua. Bot token aur admin rights check karo."));
    }
    setBusy(false);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("Today's Post", "Aaj ka Post")}</h1>
      <p className="mt-2 text-white/70">
        {t("1 tap: download for WhatsApp/Instagram/Facebook, or send directly to Telegram.", "1 tap: WhatsApp/Instagram/Facebook ke liye download karo, ya seedha Telegram par bhejo.")}
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* POSTER */}
        <div>
          <div ref={posterRef} className="aspect-square w-full overflow-hidden rounded-2xl border border-gold/40 bg-navy p-6 text-center" style={{ background: "radial-gradient(500px 300px at 50% 0%, rgba(56,189,248,.15), transparent 60%), radial-gradient(400px 250px at 50% 100%, rgba(245,179,1,.12), transparent 60%), #060D1A" }}>
            <div className="flex items-center justify-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="logo" className="h-14 w-14 rounded-xl bg-black object-cover" />
              <div className="text-left leading-tight">
                <p className="text-sm font-extrabold">BHAVYA AI</p>
                <p className="text-[10px] tracking-widest text-gold">RESEARCH CENTRE</p>
              </div>
            </div>
            <p className="mx-auto mt-4 inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-bold text-gold">
              {typeBadge(post.type, lang)}
            </p>
            <p className="mx-auto mt-4 max-w-md text-2xl font-extrabold leading-snug sm:text-3xl">{text}</p>
            <div className="mt-5 flex items-center justify-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/founder.png" alt={siteConfig.founder} className="h-16 w-16 rounded-full border-2 border-gold object-cover object-top" />
              <div className="text-left">
                <p className="text-sm font-bold">{siteConfig.founder}</p>
                <p className="text-xs text-white/60">📞 +91 {siteConfig.phones[0]}</p>
                <p className="text-xs text-white/60">📞 +91 {siteConfig.phones[1]}</p>
              </div>
            </div>
            <p className="mt-4 bg-gradient-to-r from-gold to-electric bg-clip-text text-sm font-extrabold text-transparent">
              Learn AI | Build Skills | Create Opportunities
            </p>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <p className="font-bold text-gold">{t("Caption (auto-ready with hashtags)", "Caption (hashtags ke sath ready)")}</p>
            <p className="mt-2 whitespace-pre-line text-sm text-white/75">{caption}</p>
            <button onClick={copyCaption} className="mt-3 rounded-full border border-white/20 px-5 py-2 text-xs font-bold">
              {t("Copy Caption", "Caption Copy Karo")}
            </button>
          </div>
          <button onClick={downloadPNG} disabled={busy} className="w-full rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy disabled:opacity-50">
            {t("⬇ Download Poster (for WhatsApp / Instagram / Facebook)", "⬇ Poster Download Karo (WhatsApp / Instagram / Facebook ke liye)")}
          </button>
          <button onClick={sendToTelegram} disabled={busy} className="w-full rounded-full border border-electric bg-electric/10 px-6 py-3 text-sm font-bold text-electric disabled:opacity-50">
            {t("✈ Send to Telegram (1-Tap Auto Post)", "✈ Telegram par Bhejo (1-Tap Auto Post)")}
          </button>
          {status && <p className="rounded-xl bg-white/5 p-3 text-sm text-white/80">{status}</p>}
          <p className="text-xs text-white/50">
            {t("Post changes daily automatically (30-day mix rotation).", "Post roz automatic badalti hai (30-din mix rotation).")}
          </p>
        </div>
      </div>
    </div>
  );
}
