"use client";
import { useLang } from "@/lib/i18n";
import { videos, siteConfig } from "@/lib/site";
import VideoCard from "@/components/VideoCard";

export default function VideosPage() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("YouTube Videos", "YouTube Videos")}</h1>
      <p className="mt-2 text-white/70">
        {t(
          "Watch free AI lessons and demos from our YouTube channel.",
          "Hamare YouTube channel ke free AI lessons aur demos dekho."
        )}
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((v) => (
          <VideoCard key={v.id} id={v.id} title={lang === "hi" ? v.titleHi : v.titleEn} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href={siteConfig.social.youtube}
          target="_blank"
          className="inline-block rounded-full bg-gold px-8 py-3 text-sm font-bold text-navy"
        >
          {t("Subscribe on YouTube", "YouTube par Subscribe Karein")}
        </a>
      </div>
    </div>
  );
}
