import { courses } from "@/data/courses";
import type { CategoryId, Course, CourseSummary } from "@/lib/types";

export function totalMinutes(course: Course): number {
  return course.modules.reduce(
    (sum, module) => sum + module.lessons.reduce((s, l) => s + l.durationMin, 0),
    0,
  );
}

export function lessonsCount(course: Course): number {
  return course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
}

export function toSummary(course: Course): CourseSummary {
  return {
    id: course.id,
    slug: course.slug,
    title: course.title,
    category: course.category,
    level: course.level,
    cover: course.cover,
    shortDescription: course.shortDescription,
    price: course.price,
    rating: course.rating,
    studentsCount: course.studentsCount,
    durationHours: Math.round((totalMinutes(course) / 60) * 10) / 10,
    lessonsCount: lessonsCount(course),
    instructorName: course.instructor.name,
  };
}

export function getAllCourses(category?: CategoryId | null): CourseSummary[] {
  const list = category ? courses.filter((c) => c.category === category) : courses;
  return list.map(toSummary);
}

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export function courseExists(slug: string): boolean {
  return courses.some((c) => c.slug === slug);
}
