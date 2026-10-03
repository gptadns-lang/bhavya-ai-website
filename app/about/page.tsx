"use client";
import { useLang } from "@/lib/i18n";

export default function AboutPage() {
  const { t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("About Us", "Hamare Baare Me")}</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/founder.png" alt="Dinesh Kumar Gupta" className="h-96 w-full object-cover object-top" />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-bold">Dinesh Kumar Gupta</h2>
          <p className="text-sm text-gold">{t("Founder, Bhavya AI Research Centre", "Founder, Bhavya AI Research Centre")}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            {t(
              "Bhavya AI Research Centre is a Hindi-first AI education platform. We teach AI basics, ChatGPT, prompt engineering, graphic design, AI video creation, video editing, YouTube growth and digital marketing through simple tutorials, courses, live classes and real-world examples.",
              "Bhavya AI Research Centre ek Hindi-first AI education platform hai. Hum AI basics, ChatGPT, prompt engineering, graphic design, AI video creation, video editing, YouTube growth aur digital marketing simple tutorials, courses, live classes aur real-world examples ke sath sikhate hain."
            )}
          </p>
          <div className="mt-4 grid gap-2 text-sm">
            <div className="rounded-xl bg-navy p-3"><b>{t("Mission", "Mission")}: </b>{t("Make AI education simple, practical and accessible.", "AI education ko simple, practical aur accessible banana.")}</div>
            <div className="rounded-xl bg-navy p-3"><b>{t("Vision", "Vision")}: </b>{t("Build a trusted Hindi-first learning community.", "Ek trusted Hindi-first learning community banana.")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
