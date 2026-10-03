"use client";
import { useLang } from "@/lib/i18n";
import { agents, siteConfig } from "@/lib/site";

export default function AgentsPage() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("AI Agents", "AI Agents")}</h1>
      <p className="mt-2 text-white/70">
        {t(
          "Ready-to-use AI solutions for schools and professionals. Fixed price ₹10,000 per agent. Payment: Cash on Delivery (COD) — order via WhatsApp or Call.",
          "School aur professionals ke liye ready-to-use AI solutions. Fixed price ₹10,000 per agent. Payment: Cash on Delivery (COD) — WhatsApp ya Call se order karein."
        )}
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {agents.map((a) => (
          <div key={a.id} className="rounded-2xl border border-gold/30 bg-gradient-to-b from-gold/10 to-transparent p-6">
            <h2 className="text-2xl font-bold">{lang === "hi" ? a.nameHi : a.nameEn}</h2>
            <p className="mt-2 text-sm text-white/70">{lang === "hi" ? a.descHi : a.descEn}</p>
            <p className="mt-3 font-semibold text-gold">{lang === "hi" ? a.priceHi : a.priceEn}</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={siteConfig.social.whatsapp} target="_blank" className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy">
              {t("Order on WhatsApp — ₹10,000 (COD)", "WhatsApp par Order Karein — ₹10,000 (COD)")}
              </a>
              <a href={`tel:+91${siteConfig.phones[0]}`} className="rounded-full border border-white/20 px-6 py-2.5 text-sm">
                Call +91 {siteConfig.phones[0]}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
