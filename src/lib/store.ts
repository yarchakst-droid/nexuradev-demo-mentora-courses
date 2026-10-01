import { ACHIEVEMENT_LABELS, DICTIONARIES } from "@/i18n/dictionary";
import { courseExists, getCourseBySlug, toSummary, totalMinutes } from "@/lib/courses";
import type { Lang, LocalizedText } from "@/lib/types";

export interface Enrollment {
  courseSlug: string;
  enrolledAt: string;
  completedLessonIds: string[];
  lastLessonId: string | null;
  lastAccessedAt: string;
}

interface StudentState {
  name: LocalizedText;
  avatar: string;
  enrollments: Record<string, Enrollment>;
}

export interface Achievement {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  earned: boolean;
  /** 0-100 — how close the student is to earning it (100 once earned). */
  progress: number;
}

const DEMO_STUDENT_ID = "demo-student";

function seedState(): Record<string, StudentState> {
  const now = Date.now();
  const hoursAgo = (h: number) => new Date(now - h * 3_600_000).toISOString();

  const seedEnrollment = (
    slug: string,
    completedCount: number,
    hoursSinceAccess: number,
  ): Enrollment => {
    const course = getCourseBySlug(slug);
    if (!course) throw new Error(`Unknown seed course: ${slug}`);
    const allLessonIds = course.modules.flatMap((m) => m.lessons.map((l) => l.id));
    const completed = allLessonIds.slice(0, completedCount);
    return {
      courseSlug: slug,
      enrolledAt: hoursAgo(hoursSinceAccess + 48),
      completedLessonIds: completed,
      lastLessonId: completed.length > 0 ? completed[completed.length - 1] : null,
      lastAccessedAt: hoursAgo(hoursSinceAccess),
    };
  };

  return {
    [DEMO_STUDENT_ID]: {
      name: { uk: "Софія Дем'яненко", en: "Sophia Demianenko", ru: "София Демьяненко" },
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80",
      enrollments: {
        "frontend-react": seedEnrollment("frontend-react", 7, 3),
        "data-analysis-python": seedEnrollment("data-analysis-python", 3, 26),
        "ux-ui-design": seedEnrollment("ux-ui-design", 12, 120),
        "smm-digital-marketing": seedEnrollment("smm-digital-marketing", 1, 9),
      },
    },
  };
}

declare global {
  var __mentoraStore: Record<string, StudentState> | undefined;
}

function store(): Record<string, StudentState> {
  if (!globalThis.__mentoraStore) {
    globalThis.__mentoraStore = seedState();
  }
  return globalThis.__mentoraStore;
}

function student(): StudentState {
  return store()[DEMO_STUDENT_ID];
}

function progressPercent(courseSlug: string, enrollment: Enrollment): number {
  const course = getCourseBySlug(courseSlug);
  if (!course) return 0;
  const total = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
  if (total === 0) return 0;
  return Math.round((enrollment.completedLessonIds.length / total) * 100);
}

export type EnrollResult =
  | { ok: true; enrollment: Enrollment; alreadyEnrolled: boolean }
  | { ok: false; error: string; status: number };

export function enrollInCourse(courseSlug: string, lang: Lang = "uk"): EnrollResult {
  const t = DICTIONARIES[lang].server;
  if (!courseSlug || typeof courseSlug !== "string") {
    return { ok: false, error: t.courseSlugRequired, status: 400 };
  }
  if (!courseExists(courseSlug)) {
    return { ok: false, error: t.courseNotFound, status: 404 };
  }

  const s = student();
  const existing = s.enrollments[courseSlug];
  if (existing) {
    return { ok: true, enrollment: existing, alreadyEnrolled: true };
  }

  const now = new Date().toISOString();
  const enrollment: Enrollment = {
    courseSlug,
    enrolledAt: now,
    completedLessonIds: [],
    lastLessonId: null,
    lastAccessedAt: now,
  };
  s.enrollments[courseSlug] = enrollment;
  return { ok: true, enrollment, alreadyEnrolled: false };
}

export type ProgressResult =
  | { ok: true; enrollment: Enrollment; progress: number; completed: boolean }
  | { ok: false; error: string; status: number };

export function toggleLessonComplete(courseSlug: string, lessonId: string, lang: Lang = "uk"): ProgressResult {
  const t = DICTIONARIES[lang].server;
  if (!courseSlug || !lessonId) {
    return { ok: false, error: t.fieldsRequired, status: 400 };
  }
  const course = getCourseBySlug(courseSlug);
  if (!course) {
    return { ok: false, error: t.courseNotFound, status: 404 };
  }
  const lessonExists = course.modules.some((m) => m.lessons.some((l) => l.id === lessonId));
  if (!lessonExists) {
    return { ok: false, error: t.lessonNotFound, status: 400 };
  }

  const s = student();
  const enrollment = s.enrollments[courseSlug];
  if (!enrollment) {
    return { ok: false, error: t.enrollFirst, status: 403 };
  }

  const isCompleted = enrollment.completedLessonIds.includes(lessonId);
  enrollment.completedLessonIds = isCompleted
    ? enrollment.completedLessonIds.filter((id) => id !== lessonId)
    : [...enrollment.completedLessonIds, lessonId];
  enrollment.lastLessonId = lessonId;
  enrollment.lastAccessedAt = new Date().toISOString();

  return {
    ok: true,
    enrollment,
    progress: progressPercent(courseSlug, enrollment),
    completed: !isCompleted,
  };
}

export function getEnrollment(courseSlug: string): Enrollment | undefined {
  return student().enrollments[courseSlug];
}

export interface DashboardCourse {
  slug: string;
  title: LocalizedText;
  category: string;
  cover: string;
  instructorName: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  lastAccessedAt: string;
}

export interface DashboardData {
  student: { name: LocalizedText; avatar: string };
  stats: {
    enrolledCount: number;
    completedCount: number;
    inProgressCount: number;
    totalHours: number;
    lessonsCompleted: number;
  };
  myCourses: DashboardCourse[];
  continueWatching: DashboardCourse[];
  achievements: Achievement[];
}

export function getDashboard(): DashboardData {
  const s = student();
  const entries = Object.values(s.enrollments);

  const myCourses: DashboardCourse[] = entries
    .map((enrollment) => {
      const course = getCourseBySlug(enrollment.courseSlug);
      if (!course) return null;
      const summary = toSummary(course);
      return {
        slug: course.slug,
        title: course.title,
        category: course.category as string,
        cover: course.cover,
        instructorName: course.instructor.name,
        progress: progressPercent(course.slug, enrollment),
        completedLessons: enrollment.completedLessonIds.length,
        totalLessons: summary.lessonsCount,
        lastAccessedAt: enrollment.lastAccessedAt,
      };
    })
    .filter((c): c is DashboardCourse => c !== null)
    .sort((a, b) => (a.lastAccessedAt < b.lastAccessedAt ? 1 : -1));

  const continueWatching = myCourses.filter((c) => c.progress < 100).slice(0, 4);
  const completedCount = myCourses.filter((c) => c.progress === 100).length;
  const lessonsCompleted = myCourses.reduce((sum, c) => sum + c.completedLessons, 0);
  const totalHours = entries.reduce((sum, e) => {
    const course = getCourseBySlug(e.courseSlug);
    return course ? sum + totalMinutes(course) / 60 : sum;
  }, 0);

  const bestCourseProgress = myCourses.reduce((max, c) => Math.max(max, c.progress), 0);

  const achievementEarned: Record<keyof typeof ACHIEVEMENT_LABELS, boolean> = {
    "first-step": myCourses.length >= 1,
    "on-a-roll": bestCourseProgress >= 50,
    "course-finished": completedCount >= 1,
    collector: myCourses.length >= 3,
    marathoner: lessonsCompleted >= 30,
  };

  // Progress toward each not-yet-earned achievement, as a 0-100 percentage
  // of its own target, so the dashboard can show a meaningful bar instead
  // of just a locked/unlocked state.
  const achievementProgress: Record<keyof typeof ACHIEVEMENT_LABELS, number> = {
    "first-step": myCourses.length >= 1 ? 100 : 0,
    "on-a-roll": Math.min(100, Math.round((bestCourseProgress / 50) * 100)),
    "course-finished": bestCourseProgress,
    collector: Math.min(100, Math.round((myCourses.length / 3) * 100)),
    marathoner: Math.min(100, Math.round((lessonsCompleted / 30) * 100)),
  };

  const langs: Lang[] = ["uk", "en", "ru"];
  const achievements: Achievement[] = (Object.keys(ACHIEVEMENT_LABELS) as (keyof typeof ACHIEVEMENT_LABELS)[]).map(
    (id) => ({
      id,
      title: Object.fromEntries(langs.map((l) => [l, ACHIEVEMENT_LABELS[id][l].title])) as LocalizedText,
      description: Object.fromEntries(
        langs.map((l) => [l, ACHIEVEMENT_LABELS[id][l].description]),
      ) as LocalizedText,
      earned: achievementEarned[id],
      progress: achievementEarned[id] ? 100 : achievementProgress[id],
    }),
  );

  return {
    student: { name: s.name, avatar: s.avatar },
    stats: {
      enrolledCount: myCourses.length,
      completedCount,
      inProgressCount: myCourses.length - completedCount,
      totalHours: Math.round(totalHours * 10) / 10,
      lessonsCompleted,
    },
    myCourses,
    continueWatching,
    achievements,
  };
}
