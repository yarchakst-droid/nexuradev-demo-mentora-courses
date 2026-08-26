"use client";

import CourseCatalog from "@/components/catalog/CourseCatalog";
import { useLang } from "@/i18n/LangContext";

export default function CatalogPage() {
  const { t } = useLang();

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-deep">
          {t.catalog.eyebrow}
        </p>
        <h1 className="mt-3 text-balance font-display text-4xl italic leading-[1.1] text-ink sm:text-5xl">
          {t.catalog.headline}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t.catalog.subtitle}</p>
      </div>

      <div className="mt-10">
        <CourseCatalog />
      </div>
    </div>
  );
}
