"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { siteConfig, courses, agents, videos } from "@/lib/site";
import InstallAppButton from "@/components/InstallAppButton";
import VideoCard from "@/components/VideoCard";

export default function HomePage() {
  const { t, lang } = useLang();
  const s = siteConfig.social;
  const paid = courses[0];
  const free = courses[1];

  return (
    <div>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <span className="inline-block rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
            {t("Hindi-first Practical AI Education", "Hindi-first Practical AI Education")}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-5xl">
            {t("Learn AI. Build Skills.", "AI Seekho. Skills Banao.")}{" "}
            <span className="bg-gradient-to-r from-gold to-electric bg-clip-text text-transparent">{t("Create Opportunities.", "Opportunities Banao.")}</span>
          </h1>
          <p className="mt-4 max-w-xl text-white/70">
            {t(
              "AI Mastery Course 2.0, Free Graphic Designing course and ready-to-use AI Agents — taught step-by-step by Dinesh Kumar Gupta.",
              "AI Mastery Course 2.0, Free Graphic Designing course aur ready-to-use AI Agents — Dinesh Kumar Gupta dwara step-by-step sikhaya jata hai."
            )}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/courses" className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy">
              {t("View Courses — from ₹2,000", "Courses Dekhein — sirf ₹2,000 se")}
            </Link>
            <a href={s.whatsapp} target="_blank" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">
              {t("Join WhatsApp Community", "WhatsApp Community Join Karein")}
            </a>
            <InstallAppButton />
          </div>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <a href={s.youtube} target="_blank" className="rounded-full bg-white/10 px-3 py-1.5">YouTube {s.youtubeHandle}</a>
            <a href={s.telegram} target="_blank" className="rounded-full bg-white/10 px-3 py-1.5">Telegram</a>
            <a href={s.instagram} target="_blank" className="rounded-full bg-white/10 px-3 py-1.5">Instagram</a>
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/founder.png" alt="Dinesh Kumar Gupta — Founder, Bhavya AI Research Centre" className="h-80 w-full object-cover object-top" />
          <div className="flex items-center gap-3 p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="logo" className="h-12 w-12 rounded-lg bg-black object-cover" />
            <div>
              <p className="font-bold">Dinesh Kumar Gupta</p>
              <p className="text-xs text-white/60">{t("Founder, Bhavya AI Research Centre", "Founder, Bhavya AI Research Centre")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold sm:text-3xl">{t("Popular Courses", "Popular Courses")}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[paid, free].map((c) => (
              <div key={c.id} className="rounded-2xl border border-white/10 bg-navy p-6">
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">
                  {lang === "hi" ? c.badgeHi : c.badgeEn}
                </span>
                <h3 className="mt-3 text-xl font-bold">{lang === "hi" ? c.nameHi : c.nameEn}</h3>
                <p className="mt-1 text-sm text-gold">{lang === "hi" ? c.typeHi : c.typeEn}</p>
                {"batchHi" in c && (
                  <p className="mt-1 inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold">
                    {lang === "hi" ? (c as { batchHi: string }).batchHi : (c as { batchEn: string }).batchEn}
                  </p>
                )}
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/75">
                  {(lang === "hi" ? c.topicsHi : c.topicsEn).slice(0, 5).map((tp) => (
                    <li key={tp}>{tp}</li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-2xl font-extrabold">{c.price === 0 ? t("FREE", "FREE") : `₹${c.price}`}</p>
                  <Link href="/courses" className="rounded-full bg-white px-5 py-2 text-sm font-bold text-navy">
                    {t("Details", "Details")}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold sm:text-3xl">{t("Latest YouTube Videos", "Latest YouTube Videos")}</h2>
            <Link href="/videos" className="rounded-full border border-gold px-4 py-1.5 text-xs font-bold text-gold">
              {t("View All", "Sab Dekhein")}
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.slice(0, 3).map((v) => (
              <VideoCard key={v.id} id={v.id} title={lang === "hi" ? v.titleHi : v.titleEn} />
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold sm:text-3xl">{t("AI Agents for Real Work", "Real Kaam ke liye AI Agents")}</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {agents.map((a) => (
            <div key={a.id} className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-6">
              <h3 className="text-xl font-bold">{lang === "hi" ? a.nameHi : a.nameEn}</h3>
              <p className="mt-2 text-sm text-white/70">{lang === "hi" ? a.descHi : a.descEn}</p>
              <p className="mt-2 text-sm font-semibold text-gold">{lang === "hi" ? a.priceHi : a.priceEn}</p>
              <Link href="/agents" className="mt-4 inline-block rounded-full border border-gold px-5 py-2 text-sm font-bold text-gold">
                {t("Enquire", "Enquiry Karein")}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-14">
        <div className="rounded-2xl bg-gold p-8 text-navy md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold">{t("Have questions? Talk to us directly.", "Sawal hai? Seedha humse baat karein.")}</h2>
            <p className="mt-1 font-medium">+91 {siteConfig.phones.join(" | +91 ")}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
            {siteConfig.phones.map((p) => (
              <a key={p} href={`tel:+91${p}`} className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white">
                Call +91 {p}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
