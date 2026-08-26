import { notFound } from "next/navigation";
import CourseDetail from "@/components/course/CourseDetail";
import { getCourseBySlug, lessonsCount, totalMinutes } from "@/lib/courses";
import { getEnrollment } from "@/lib/store";

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const enrollment = getEnrollment(slug);

  return (
    <CourseDetail
      course={course}
      durationHours={Math.round((totalMinutes(course) / 60) * 10) / 10}
      lessonsCount={lessonsCount(course)}
      initialEnrolled={Boolean(enrollment)}
      initialCompletedLessonIds={enrollment?.completedLessonIds ?? []}
    />
  );
}
