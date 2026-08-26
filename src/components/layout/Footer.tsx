"use client";

import { useLang } from "@/i18n/LangContext";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-lg italic text-ink-soft">Mentora</p>
        <p>{t.footer.tagline}</p>
      </div>
    </footer>
  );
}
