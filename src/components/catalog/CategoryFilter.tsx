"use client";

import { motion } from "framer-motion";
import { CATEGORY_LABELS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LangContext";
import type { CategoryId } from "@/lib/types";

export const ALL = "all" as const;
export type CategoryFilterValue = CategoryId | typeof ALL;

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: {
  categories: readonly CategoryId[];
  active: CategoryFilterValue;
  onChange: (category: CategoryFilterValue) => void;
}) {
  const { t, lang } = useLang();
  const options: CategoryFilterValue[] = [ALL, ...categories];

  return (
    <div className="scrollbar-hidden flex gap-2 overflow-x-auto pb-1">
      {options.map((option) => {
        const isActive = option === active;
        const label = option === ALL ? t.catalog.allCourses : CATEGORY_LABELS[option][lang];
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`relative whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "border-transparent text-paper"
                : "border-line text-ink-soft hover:border-moss/40"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
                className="absolute inset-0 rounded-full bg-moss"
              />
            )}
            <span className="relative">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
