"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionTemplate, useSpring } from "framer-motion";
import { ClockIcon, StarIcon, UsersIcon } from "@/components/shared/icons";
import { CATEGORY_LABELS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LangContext";
import type { CourseSummary } from "@/lib/types";

const spring = { stiffness: 260, damping: 22, mass: 0.6 };

export default function CourseCard({ course, index }: { course: CourseSummary; index: number }) {
  const { lang, t, locale } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const lift = useSpring(0, spring);

  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${lift}px)`;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    lift.set(0);
    setHovered(false);
  }

  function handlePointerEnter() {
    lift.set(-6);
    setHovered(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index, 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group [perspective:900px]"
    >
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{ transform }}
        className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-line bg-surface shadow-[0_1px_2px_rgba(20,20,10,0.06)] transition-shadow duration-300 will-change-transform"
        animate={{
          boxShadow: hovered
            ? "0 28px 48px -20px rgba(20,22,12,0.35)"
            : "0 1px 2px rgba(20,20,10,0.06)",
        }}
      >
        <Link href={`/courses/${course.slug}`} className="flex h-full flex-col">
          <div
            className={`relative aspect-[4/3] w-full overflow-hidden bg-moss-soft ${loaded ? "" : "animate-pulse"}`}
          >
            <Image
              src={course.cover}
              alt={course.title[lang]}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={index < 3}
              onLoad={() => setLoaded(true)}
              className={`object-cover transition-[opacity,transform] duration-500 group-hover:scale-[1.05] ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
            />
            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
              <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm">
                {CATEGORY_LABELS[course.category][lang]}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-paper/90 px-2.5 py-1 text-xs font-semibold text-ink">
                <StarIcon className="size-3.5 text-gold" />
                {course.rating.toFixed(1)}
              </span>
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-3 p-5">
            <div>
              <h3 className="text-balance font-display text-xl leading-snug text-ink">
                {course.title[lang]}
              </h3>
              <p className="mt-1 text-sm text-stone">{course.instructorName}</p>
            </div>

            <div className="mt-auto flex items-center justify-between text-xs text-ink-soft">
              <span className="flex items-center gap-1.5">
                <ClockIcon className="size-3.5" />
                {course.durationHours} {t.catalog.hours}
              </span>
              <span className="flex items-center gap-1.5">
                <UsersIcon className="size-3.5" />
                {course.studentsCount.toLocaleString(locale)}
              </span>
              <span className="font-semibold text-ink">₴{course.price.toLocaleString(locale)}</span>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ y: hovered ? "0%" : "100%", opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 bottom-0 flex flex-col gap-3 rounded-t-2xl border-t border-line bg-surface/98 p-5 pt-4 backdrop-blur-sm"
          >
            <p className="text-sm leading-relaxed text-ink-soft">{course.shortDescription[lang]}</p>
            <span className="flex items-center gap-1.5 text-sm font-semibold text-moss">
              {t.catalog.viewCourse}
            </span>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
