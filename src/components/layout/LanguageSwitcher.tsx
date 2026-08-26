"use client";

import { motion } from "framer-motion";
import { useLang } from "@/i18n/LangContext";
import { LANG_LABELS } from "@/i18n/dictionary";
import type { Lang } from "@/lib/types";

const OPTIONS: Lang[] = ["uk", "en", "ru"];

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {OPTIONS.map((option) => {
        const active = option === lang;
        return (
          <button
            key={option}
            type="button"
            onClick={() => setLang(option)}
            aria-label={`Mentora: ${LANG_LABELS[option]}`}
            className={`relative rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide transition-colors ${
              active ? "text-paper" : "text-stone hover:text-ink"
            }`}
          >
            {active && (
              <motion.span
                layoutId="mentora-lang-pill"
                className="absolute inset-0 rounded-full bg-moss"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{LANG_LABELS[option]}</span>
          </button>
        );
      })}
    </div>
  );
}
