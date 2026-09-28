"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CategoryFilter, { ALL, type CategoryFilterValue } from "@/components/catalog/CategoryFilter";
import CourseCard from "@/components/catalog/CourseCard";
import { useLang } from "@/i18n/LangContext";
import type { CategoryId, CourseSummary } from "@/lib/types";

const PAGE_SIZE = 9;

export default function CourseCatalog() {
  const { t } = useLang();
  const [courses, setCourses] = useState<CourseSummary[] | null>(null);
  const [categories, setCategories] = useState<CategoryId[]>([]);
  const [active, setActive] = useState<CategoryFilterValue>(ALL);
  const [page, setPage] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/courses")
      .then((res) => {
        if (!res.ok) throw new Error(t.catalog.loadError);
        return res.json();
      })
      .then((data: { courses: CourseSummary[]; categories: CategoryId[] }) => {
        if (cancelled) return;
        setCourses(data.courses);
        setCategories(data.categories);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    if (!courses) return [];
    if (active === ALL) return courses;
    return courses.filter((c) => c.category === active);
  }, [courses, active]);

  const pageCount = Math.max(Math.ceil(filtered.length / PAGE_SIZE), 1);
  const safePage = Math.min(page, pageCount - 1);
  const pageItems = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  function handleCategoryChange(category: CategoryFilterValue) {
    setActive(category);
    setPage(0);
  }

  return (
    <div>
      <CategoryFilter categories={categories} active={active} onChange={handleCategoryChange} />

      {error && (
        <p className="mt-8 rounded-2xl border border-rust/30 bg-rust/5 px-4 py-3 text-sm text-rust">
          {error}
        </p>
      )}

      {!courses && !error && (
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[22rem] animate-pulse rounded-[1.4rem] border border-line bg-surface"
            />
          ))}
        </div>
      )}

      {courses && (
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {pageItems.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      )}

      {courses && filtered.length === 0 && (
        <p className="mt-12 text-center text-sm text-stone">{t.catalog.emptyCategory}</p>
      )}

      {courses && pageCount > 1 && (
        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: pageCount }).map((_, i) => {
            const isActive = i === safePage;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                aria-label={`${i + 1}`}
                aria-current={isActive}
                className={`relative flex size-9 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                  isActive
                    ? "border-transparent text-ink"
                    : "border-paper/20 text-paper/75 hover:border-gold/50 hover:text-paper"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="catalog-page-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-gold"
                  />
                )}
                <span className="relative">{i + 1}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
