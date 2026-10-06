"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

const OPTIONS = [
  { id: "ai-mastery", hi: "AI Mastery Course 2.0 — ₹2,000", en: "AI Mastery Course 2.0 — ₹2,000" },
  { id: "graphic-free", hi: "Graphic Designing — FREE Course", en: "Graphic Designing — FREE Course" },
  { id: "school-app", hi: "School Management App — ₹10,000", en: "School Management App — ₹10,000" },
  { id: "ppt-agent", hi: "PPT Creation Agent — ₹10,000", en: "PPT Creation Agent — ₹10,000" },
];

export default function EnrollPage() {
  const { lang, t } = useLang();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [choice, setChoice] = useState(OPTIONS[0].id);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (name.trim().length < 2) {
      setError(t("Please enter your name.", "Apna naam likho."));
      return;
    }
    if (!/^[6-9]\d{9}$/.test(mobile.trim())) {
      setError(t("Please enter a valid 10-digit mobile number.", "Sahi 10-digit mobile number likho."));
      return;
    }
    setError("");
    const opt = OPTIONS.find((o) => o.id === choice)!;
    const text =
      `Namaste! Mujhe enroll karna hai.\n` +
      `Naam: ${name.trim()}\n` +
      `Mobile: ${mobile.trim()}\n` +
      `Course/Agent: ${lang === "hi" ? opt.hi : opt.en}\n` +
      (message.trim() ? `Message: ${message.trim()}\n` : "") +
      `Payment: Cash on Delivery (COD)`;
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const inputCls =
    "w-full rounded-xl border border-white/20 bg-navy p-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-gold";

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">{t("Enroll Now", "Enroll Karein")}</h1>
      <p className="mt-2 text-white/70">
        {t(
          "Fill this form — it will open WhatsApp with your details ready to send. Payment: Cash on Delivery.",
          "Ye form bharo — WhatsApp khul jayega tumhari details ke sath, bas Send dabana hai. Payment: Cash on Delivery."
        )}
      </p>
      <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
        <div>
          <label className="mb-1 block text-sm font-semibold">{t("Your Name", "Aapka Naam")} *</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder={t("e.g. Rahul Kumar", "jaise Rahul Kumar")} className={inputCls} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">{t("Mobile Number", "Mobile Number")} *</label>
          <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="9772549136" inputMode="numeric" maxLength={10} className={inputCls} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">{t("What do you want?", "Kya lena chahte ho?")}</label>
          <select value={choice} onChange={(e) => setChoice(e.target.value)} className={inputCls}>
            {OPTIONS.map((o) => (
              <option key={o.id} value={o.id} className="bg-navy">
                {lang === "hi" ? o.hi : o.en}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">{t("Message (optional)", "Message (optional)")}</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className={inputCls} />
        </div>
        {error && <p className="text-sm font-semibold text-red-400">{error}</p>}
        <button onClick={submit} className="w-full rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy">
          {t("Submit on WhatsApp", "WhatsApp par Submit Karein")}
        </button>
        <p className="text-center text-xs text-white/50">
          {t("Or call us:", "Ya call karo:")} +91 {siteConfig.phones.join(" | +91 ")}
        </p>
      </div>
    </div>
  );
}
