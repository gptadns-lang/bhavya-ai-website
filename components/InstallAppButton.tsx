"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

export default function InstallAppButton() {
  const { t } = useLang();
  const [deferred, setDeferred] = useState<{
    prompt: () => void;
    userChoice: Promise<{ outcome: string }>;
  } | null>(null);
  const [installed, setInstalled] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
      return;
    }
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as unknown as {
        prompt: () => void;
        userChoice: Promise<{ outcome: string }>;
      });
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferred(null);
      setShowHelp(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (installed) return null;

  const handleClick = async () => {
    if (deferred) {
      deferred.prompt();
      await deferred.userChoice;
      setDeferred(null);
    } else {
      setShowHelp((s) => !s);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="rounded-full border border-gold bg-gold/10 px-6 py-3 text-sm font-bold text-gold"
      >
        {t("📲 Install App", "📲 App Install Karein")}
      </button>
      {showHelp && !deferred && (
        <div className="mt-3 max-w-md rounded-xl border border-gold/40 bg-black/50 p-4 text-xs leading-relaxed text-white/85">
          <p className="font-bold text-gold">
            {t("Install manually:", "Manually install karein:")}
          </p>
          <p className="mt-1">
            {t(
              "Android/Chrome: tap ⋮ menu (top-right) → “Install app” / “Add to Home screen”.",
              "Android/Chrome: upar ⋮ menu dabao → “Install app” / “Add to Home screen” chuno."
            )}
          </p>
          <p className="mt-1">
            {t(
              "iPhone/Safari: tap Share button → “Add to Home Screen”.",
              "iPhone/Safari: Share button dabao → “Add to Home Screen” chuno."
            )}
          </p>
        </div>
      )}
    </div>
  );
}
