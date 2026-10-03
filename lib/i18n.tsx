"use client";
import React, { createContext, useContext, useState } from "react";

export type Lang = "hi" | "en";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, hi: string) => string;
}>({ lang: "hi", setLang: () => {}, t: (en) => en });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("hi");
  const t = (en: string, hi: string) => (lang === "hi" ? hi : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
