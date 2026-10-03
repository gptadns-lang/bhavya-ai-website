"use client";
import { useLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const { t } = useLang();
  const s = siteConfig.social;
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div>
          <p className="font-bold">Bhavya AI Research Centre</p>
          <p className="mt-2 text-sm text-white/60">
            {t(
              "Practical AI education in Hindi, Hinglish & English by Dinesh Kumar Gupta.",
              "Dinesh Kumar Gupta dwara Hindi, Hinglish aur English me practical AI education."
            )}
          </p>
        </div>
        <div>
          <p className="font-bold text-gold">{t("Courses", "Courses")}</p>
          <ul className="mt-2 space-y-1 text-sm text-white/70">
            <li>AI Mastery Course 2.0 — ₹2,000</li>
            <li>{t("Graphic Designing — Free", "Graphic Designing — Free")}</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gold">{t("Connect", "Judein")}</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a className="text-white/70 hover:text-gold" href={s.youtube} target="_blank">YouTube ({s.youtubeHandle})</a></li>
            <li><a className="text-white/70 hover:text-gold" href={s.whatsapp} target="_blank">WhatsApp Community</a></li>
            <li><a className="text-white/70 hover:text-gold" href={s.telegram} target="_blank">Telegram</a></li>
            <li><a className="text-white/70 hover:text-gold" href={s.instagram} target="_blank">Instagram ({s.instagramHandle})</a></li>
            <li><a className="text-white/70 hover:text-gold" href={s.facebook} target="_blank">Facebook ({s.facebookName})</a></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-gold">{t("Contact", "Sampark")}</p>
          <ul className="mt-2 space-y-1 text-sm text-white/70">
            {siteConfig.phones.map((p) => (
              <li key={p}><a href={`tel:+91${p}`} className="hover:text-gold">+91 {p}</a></li>
            ))}
            <li>{t("Founder: Dinesh Kumar Gupta", "Founder: Dinesh Kumar Gupta")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Bhavya AI Research Centre. {t("All rights reserved.", "Sarvadhikar surakshit.")}
      </div>
    </footer>
  );
}
