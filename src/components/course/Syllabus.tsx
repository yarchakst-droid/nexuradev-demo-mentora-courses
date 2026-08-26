"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronDownIcon, LockIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";
import type { Module } from "@/lib/types";

export default function Syllabus({
  modules,
  enrolled,
  completedLessonIds,
  onToggleLesson,
  pendingLessonId,
}: {
  modules: Module[];
  enrolled: boolean;
  completedLessonIds: string[];
  onToggleLesson: (lessonId: string) => void;
  pendingLessonId: string | null;
}) {
  const { t, lang } = useLang();
  const [openId, setOpenId] = useState<string | null>(modules[0]?.id ?? null);

  return (
    <div className="divide-y divide-line rounded-[1.4rem] border border-line bg-surface">
      {modules.map((module, moduleIndex) => {
        const isOpen = openId === module.id;
        return (
          <div key={module.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : module.id)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-moss-soft text-xs font-semibold text-moss">
                  {moduleIndex + 1}
                </span>
                <span className="font-medium text-ink">{module.title[lang]}</span>
              </span>
              <span className="flex items-center gap-3 text-sm text-stone">
                {module.lessons.length} {t.course.lessons}
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDownIcon className="size-4" />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-1 px-6 pb-5">
                    {module.lessons.map((lesson) => {
                      const isDone = completedLessonIds.includes(lesson.id);
                      const isPending = pendingLessonId === lesson.id;
                      return (
                        <li key={lesson.id}>
                          <button
                            type="button"
                            disabled={!enrolled || isPending}
                            onClick={() => onToggleLesson(lesson.id)}
                            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors enabled:hover:bg-paper-deep/60 disabled:cursor-default"
                          >
                            <span
                              className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                isDone
                                  ? "border-moss bg-moss text-paper"
                                  : "border-line text-transparent"
                              }`}
                            >
                              <CheckIcon className="size-3" />
                            </span>
                            <span
                              className={`flex-1 text-sm ${isDone ? "text-stone line-through" : "text-ink-soft"}`}
                            >
                              {lesson.title[lang]}
                            </span>
                            {enrolled ? (
                              <span className="text-xs text-stone">
                                {lesson.durationMin} {t.course.minutesShort}
                              </span>
                            ) : (
                              <LockIcon className="size-3.5 text-stone" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
