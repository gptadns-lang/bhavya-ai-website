"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";

export default function Header() {
  const { lang, setLang, t } = useLang();
  const nav = [
    { href: "/", en: "Home", hi: "Home" },
    { href: "/courses", en: "Courses", hi: "Courses" },
    { href: "/videos", en: "Videos", hi: "Videos" },
    { href: "/agents", en: "AI Agents", hi: "AI Agents" },
    { href: "/about", en: "About", hi: "About" },
    { href: "/contact", en: "Contact", hi: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Bhavya AI Research Centre" className="h-11 w-11 rounded-lg bg-black object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-bold sm:text-base">Bhavya AI Research Centre</p>
            <p className="text-[11px] text-gold sm:text-xs">
              {t("Learn AI | Build Skills | Create Opportunities", "Learn AI | Build Skills | Create Opportunities")}
            </p>
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-white/80 hover:text-gold">
              {t(n.en, n.hi)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border border-white/20 text-xs font-semibold">
            <button
              onClick={() => setLang("hi")}
              className={`px-3 py-1.5 ${lang === "hi" ? "bg-gold text-navy" : "text-white/70"}`}
            >
              हिंदी
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 ${lang === "en" ? "bg-gold text-navy" : "text-white/70"}`}
            >
              EN
            </button>
          </div>
          <a
            href="/courses"
            className="hidden rounded-full bg-gold px-4 py-2 text-xs font-bold text-navy sm:block"
          >
            {t("Enroll Now", "Enroll Karein")}
          </a>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-4 py-2 text-sm md:hidden">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="whitespace-nowrap text-white/80">
            {t(n.en, n.hi)}
          </Link>
        ))}
      </nav>
    </header>
  );
}
