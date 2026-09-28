"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AchievementBadges from "@/components/dashboard/AchievementBadges";
import ContinueCarousel from "@/components/dashboard/ContinueCarousel";
import MyCoursesGrid from "@/components/dashboard/MyCoursesGrid";
import { useLang } from "@/i18n/LangContext";
import type { DashboardData } from "@/lib/store";

export default function StudentDashboard() {
  const { t, lang } = useLang();
  const [data, setData] = useState<DashboardData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/dashboard")
      .then((res) => {
        if (!res.ok) throw new Error(t.dashboard.loadError);
        return res.json();
      })
      .then((json: DashboardData) => {
        if (!cancelled) setData(json);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return (
      <p className="rounded-2xl border border-rust/30 bg-rust/5 px-4 py-3 text-sm text-rust">
        {error}
      </p>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col gap-8">
        <div className="h-32 animate-pulse rounded-[1.4rem] border border-paper/12 bg-paper/[0.04]" />
        <div className="h-56 animate-pulse rounded-[1.4rem] border border-paper/12 bg-paper/[0.04]" />
        <div className="h-64 animate-pulse rounded-[1.4rem] border border-paper/12 bg-paper/[0.04]" />
      </div>
    );
  }

  const { student, stats, myCourses, continueWatching, achievements } = data;

  const statTiles = [
    { label: t.dashboard.inProgress, value: stats.inProgressCount },
    { label: t.dashboard.completed, value: stats.completedCount },
    { label: t.dashboard.hoursLearned, value: stats.totalHours },
    { label: t.dashboard.lessonsCompleted, value: stats.lessonsCompleted },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative block size-14 overflow-hidden rounded-full ring-2 ring-gold/40">
            <Image src={student.avatar} alt={student.name[lang]} fill sizes="56px" className="object-cover" />
          </span>
          <div>
            <p className="text-sm text-paper/60">{t.dashboard.welcomeBack}</p>
            <h1 className="font-display text-3xl italic text-paper">{student.name[lang].split(" ")[0]}</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {statTiles.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-line bg-surface px-4 py-3 text-center"
            >
              <p className="font-display text-2xl text-ink">{stat.value}</p>
              <p className="text-xs text-stone">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {continueWatching.length > 0 && (
        <section>
          <h2 className="mb-4 font-display text-2xl italic text-paper">{t.dashboard.continueWatching}</h2>
          <ContinueCarousel courses={continueWatching} />
        </section>
      )}

      <section>
        <h2 className="mb-4 font-display text-2xl italic text-paper">{t.dashboard.myCourses}</h2>
        <MyCoursesGrid courses={myCourses} />
      </section>

      <section>
        <h2 className="mb-4 font-display text-2xl italic text-paper">{t.dashboard.achievements}</h2>
        <AchievementBadges achievements={achievements} />
      </section>
    </div>
  );
}
