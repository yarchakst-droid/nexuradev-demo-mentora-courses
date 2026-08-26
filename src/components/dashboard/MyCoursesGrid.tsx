import Image from "next/image";
import Link from "next/link";
import ProgressRing from "@/components/dashboard/ProgressRing";
import { CATEGORY_LABELS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LangContext";
import type { DashboardCourse } from "@/lib/store";
import type { CategoryId } from "@/lib/types";

export default function MyCoursesGrid({ courses }: { courses: DashboardCourse[] }) {
  const { t, lang } = useLang();

  if (courses.length === 0) {
    return (
      <p className="rounded-[1.4rem] border border-dashed border-line px-6 py-10 text-center text-sm text-stone">
        {t.dashboard.noCourses}{" "}
        <Link href="/" className="font-semibold text-moss underline underline-offset-2">
          {t.dashboard.goToCatalog}
        </Link>
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <Link
          key={course.slug}
          href={`/courses/${course.slug}`}
          className="group flex items-center gap-4 rounded-[1.4rem] border border-line bg-surface p-4 transition-colors hover:border-moss/30"
        >
          <span className="relative block size-16 shrink-0 overflow-hidden rounded-2xl">
            <Image src={course.cover} alt={course.title[lang]} fill sizes="64px" className="object-cover" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-medium text-stone">{CATEGORY_LABELS[course.category as CategoryId][lang]}</p>
            <p className="truncate font-display text-lg text-ink">{course.title[lang]}</p>
            <p className="text-xs text-stone">{t.dashboard.lessonsOf(course.completedLessons, course.totalLessons)}</p>
          </div>
          <ProgressRing percent={course.progress} size={52} strokeWidth={5} />
        </Link>
      ))}
    </div>
  );
}
