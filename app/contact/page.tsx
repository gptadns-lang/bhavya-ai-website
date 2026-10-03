"use client";
import { useLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  const { t } = useLang();
  const s = siteConfig.social;
  const links = [
    { label: `YouTube (${s.youtubeHandle})`, href: s.youtube },
    { label: "WhatsApp Community", href: s.whatsapp },
    { label: "Telegram", href: s.telegram },
    { label: `Instagram (${s.instagramHandle})`, href: s.instagram },
    { label: `Facebook (${s.facebookName})`, href: s.facebook },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("Contact Us", "Sampark Karein")}</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="font-bold text-gold">{t("Call for course information", "Course jankari ke liye call karein")}</h2>
          <div className="mt-3 space-y-2">
            {siteConfig.phones.map((p) => (
              <a key={p} href={`tel:+91${p}`} className="block rounded-xl bg-navy p-4 text-lg font-bold hover:text-gold">
                +91 {p}
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="font-bold text-gold">{t("Social Links", "Social Links")}</h2>
          <div className="mt-3 space-y-2">
            {links.map((l) => (
              <a key={l.label} href={l.href} target="_blank" className="block rounded-xl bg-navy p-4 text-sm font-semibold hover:text-gold">
                {l.label} →
              </a>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/50">
            {t("Links marked # will be updated soon from lib/site.ts", "Jin links me # hai wo jaldi lib/site.ts se update honge")}
          </p>
        </div>
      </div>
    </div>
  );
}
