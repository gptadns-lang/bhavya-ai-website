"use client";
import { useLang } from "@/lib/i18n";
import { courses, siteConfig } from "@/lib/site";

export default function CoursesPage() {
  const { lang, t } = useLang();
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("Our Courses", "Hamare Courses")}</h1>
      <p className="mt-2 text-white/70">
        {t(
          "Video-based learning + Live doubt sessions every Saturday & Sunday.",
          "Video-based learning + Har Saturday & Sunday Live doubt sessions."
        )}
      </p>
      <div className="mt-8 grid gap-6">
        {courses.map((c) => (
          <div key={c.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-bold">{lang === "hi" ? c.nameHi : c.nameEn}</h2>
              <span className="rounded-full bg-gold px-4 py-1 text-sm font-bold text-navy">
                {c.price === 0 ? t("FREE", "FREE") : `₹${c.price}`}
              </span>
            </div>
            <p className="mt-1 text-sm text-gold">{lang === "hi" ? c.typeHi : c.typeEn}</p>
            {"batchHi" in c && (
              <p className="mt-2 inline-block rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-gold">
                {lang === "hi" ? (c as { batchHi: string }).batchHi : (c as { batchEn: string }).batchEn}
              </p>
            )}
            <h3 className="mt-5 font-bold">{t("What you will learn:", "Aap kya seekhenge:")}</h3>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {(lang === "hi" ? c.topicsHi : c.topicsEn).map((tp, i) => (
                <li key={tp} className="rounded-xl bg-navy p-3 text-sm text-white/85">
                  <span className="mr-2 font-bold text-gold">{i + 1}.</span>{tp}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                className="rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy"
              >
                {c.price === 0
                  ? t("Get Free Course on WhatsApp", "Free Course WhatsApp par Payein")
                  : t(`Enroll Now — ₹${c.price}`, `Enroll Karein — ₹${c.price}`)}
              </a>
              {siteConfig.phones.map((p) => (
                <a key={p} href={`tel:+91${p}`} className="rounded-full border border-white/20 px-6 py-3 text-sm">
                  Call +91 {p}
                </a>
              ))}
            </div>
            <p className="mt-3 text-xs text-white/50">
              {t(
                "Payment: Cash on Delivery (COD) — order via WhatsApp or Call, pay when you receive the course.",
                "Payment: Cash on Delivery (COD) — WhatsApp ya Call se order karein, course milne par payment karein."
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
