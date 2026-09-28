"use client";

import CourseCatalog from "@/components/catalog/CourseCatalog";
import CinematicHero from "@/components/hero/CinematicHero";
import NightBackdrop from "@/components/shared/NightBackdrop";
import { useLang } from "@/i18n/LangContext";

export default function CatalogPage() {
  const { t } = useLang();

  return (
    <div>
      <CinematicHero />

      <NightBackdrop id="catalog" className="scroll-mt-8 px-3 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl rounded-3xl border border-paper/12 bg-paper/[0.05] px-6 py-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] sm:px-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-soft">
              {t.catalog.eyebrow}
            </p>
            <h1 className="mt-3 text-balance font-display text-4xl italic leading-[1.1] text-paper sm:text-5xl">
              {t.catalog.headline}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-paper/70">{t.catalog.subtitle}</p>
          </div>

          <div className="mt-10">
            <CourseCatalog />
          </div>
        </div>
      </NightBackdrop>
    </div>
  );
}
