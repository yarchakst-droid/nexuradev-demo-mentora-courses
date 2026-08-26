import Image from "next/image";
import { UsersIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";
import type { Instructor } from "@/lib/types";

export default function InstructorCard({ instructor }: { instructor: Instructor }) {
  const { t, lang, locale } = useLang();

  return (
    <div className="rounded-[1.4rem] border border-line bg-surface p-6">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-stone">
        {t.course.instructorLabel}
      </p>
      <div className="flex items-center gap-4">
        <span className="relative block size-14 shrink-0 overflow-hidden rounded-full">
          <Image
            src={instructor.avatar}
            alt={instructor.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </span>
        <div>
          <p className="font-display text-lg text-ink">{instructor.name}</p>
          <p className="text-sm text-stone">{instructor.title[lang]}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{instructor.bio[lang]}</p>
      <div className="mt-4 flex items-center gap-4 border-t border-line pt-4 text-xs text-stone">
        <span className="flex items-center gap-1.5">
          <UsersIcon className="size-3.5" />
          {instructor.studentsCount.toLocaleString(locale)} {t.course.studentsOfInstructor}
        </span>
        <span>{t.course.coursesOnMentora(instructor.coursesCount)}</span>
      </div>
    </div>
  );
}
