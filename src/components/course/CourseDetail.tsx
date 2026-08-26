"use client";

import { useState } from "react";
import { ClockIcon, StarIcon, UsersIcon } from "@/components/shared/icons";
import EnrollButton from "@/components/course/EnrollButton";
import InstructorCard from "@/components/course/InstructorCard";
import Syllabus from "@/components/course/Syllabus";
import VideoPlayerMock from "@/components/course/VideoPlayerMock";
import { LEVEL_LABELS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LangContext";
import type { Course } from "@/lib/types";

export default function CourseDetail({
  course,
  durationHours,
  lessonsCount,
  initialEnrolled,
  initialCompletedLessonIds,
}: {
  course: Course;
  durationHours: number;
  lessonsCount: number;
  initialEnrolled: boolean;
  initialCompletedLessonIds: string[];
}) {
  const { t, lang, locale } = useLang();
  const [enrolled, setEnrolled] = useState(initialEnrolled);
  const [enrollLoading, setEnrollLoading] = useState(false);
  const [enrollError, setEnrollError] = useState<string | null>(null);

  const [completedLessonIds, setCompletedLessonIds] = useState(initialCompletedLessonIds);
  const [pendingLessonId, setPendingLessonId] = useState<string | null>(null);

  async function handleEnroll() {
    setEnrollLoading(true);
    setEnrollError(null);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug: course.slug, lang }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? t.course.enrollError);
      setEnrolled(true);
    } catch (err) {
      setEnrollError(err instanceof Error ? err.message : t.course.enrollError);
    } finally {
      setEnrollLoading(false);
    }
  }

  async function handleToggleLesson(lessonId: string) {
    if (!enrolled) return;
    setPendingLessonId(lessonId);
    try {
      const res = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug: course.slug, lessonId, lang }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? t.course.progressError);
      setCompletedLessonIds(data.enrollment.completedLessonIds);
    } catch {
      // Демо-стан: якщо запит не вдався, лишаємо попередній прогрес.
    } finally {
      setPendingLessonId(null);
    }
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_23rem]">
        <div className="flex flex-col gap-8">
          <VideoPlayerMock cover={course.cover} title={course.title[lang]} durationHours={durationHours} />

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <StarIcon className="size-4 text-gold" />
              <span className="font-semibold text-ink">{course.rating.toFixed(1)}</span> {t.course.rating}
            </span>
            <span className="flex items-center gap-1.5">
              <UsersIcon className="size-4" />
              {course.studentsCount.toLocaleString(locale)} {t.course.students}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="size-4" />
              {lessonsCount} {t.course.lessonsTotal} · {durationHours} {t.catalog.hours}
            </span>
            <span className="rounded-full border border-line px-3 py-1 text-xs font-medium">
              {LEVEL_LABELS[course.level][lang]}
            </span>
          </div>

          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{course.description[lang]}</p>

          <div>
            <h2 className="mb-4 font-display text-2xl italic text-ink">{t.course.program}</h2>
            <Syllabus
              modules={course.modules}
              enrolled={enrolled}
              completedLessonIds={completedLessonIds}
              onToggleLesson={handleToggleLesson}
              pendingLessonId={pendingLessonId}
            />
          </div>
        </div>

        <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-[1.4rem] border border-line bg-surface p-6">
            <p className="font-display text-3xl text-ink">₴{course.price.toLocaleString(locale)}</p>
            <p className="mt-1 text-sm text-stone">{t.course.onePayment}</p>
            <div className="mt-5">
              <EnrollButton
                enrolled={enrolled}
                loading={enrollLoading}
                error={enrollError}
                onEnroll={handleEnroll}
              />
            </div>
          </div>

          <InstructorCard instructor={course.instructor} />
        </aside>
      </div>
    </div>
  );
}
