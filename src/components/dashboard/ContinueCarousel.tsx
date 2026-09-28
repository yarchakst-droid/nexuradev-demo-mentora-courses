"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";
import type { DashboardCourse } from "@/lib/store";

export default function ContinueCarousel({ courses }: { courses: DashboardCourse[] }) {
  const { t, lang } = useLang();
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollBy(direction: 1 | -1) {
    trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  }

  if (courses.length === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-hidden flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {courses.map((course) => (
          <Link
            key={course.slug}
            href={`/courses/${course.slug}`}
            className="group relative w-72 shrink-0 snap-start overflow-hidden rounded-[1.4rem] border border-line bg-surface"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={course.cover}
                alt={course.title[lang]}
                fill
                sizes="288px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-1.5 bg-ink/30">
                <div
                  className="h-full bg-gold transition-[width] duration-700"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <p className="absolute inset-x-0 bottom-4 px-4 text-balance font-display text-lg italic text-paper">
                {course.title[lang]}
              </p>
            </div>
            <div className="flex items-center justify-between px-4 py-3 text-xs text-stone">
              <span>
                {course.progress}
                {t.dashboard.percentComplete}
              </span>
              <span className="font-semibold text-moss">{t.dashboard.continueLabel}</span>
            </div>
          </Link>
        ))}
      </div>

      {courses.length > 2 && (
        <div className="mt-3 flex justify-end gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label={t.dashboard.scrollBack}
            className="flex size-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-gold/60 hover:text-paper"
          >
            <ChevronLeftIcon className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label={t.dashboard.scrollForward}
            className="flex size-9 items-center justify-center rounded-full border border-paper/20 text-paper/70 transition-colors hover:border-gold/60 hover:text-paper"
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
