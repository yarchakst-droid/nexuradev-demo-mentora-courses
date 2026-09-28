import { notFound } from "next/navigation";
import CourseDetail from "@/components/course/CourseDetail";
import NightBackdrop from "@/components/shared/NightBackdrop";
import { getCourseBySlug, lessonsCount, totalMinutes } from "@/lib/courses";
import { getEnrollment } from "@/lib/store";

export default async function CoursePage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const enrollment = getEnrollment(slug);

  return (
    <NightBackdrop className="min-h-[calc(100vh-4rem)] px-3 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-paper/12 bg-paper/[0.05] px-6 py-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] sm:px-10">
        <CourseDetail
          course={course}
          durationHours={Math.round((totalMinutes(course) / 60) * 10) / 10}
          lessonsCount={lessonsCount(course)}
          initialEnrolled={Boolean(enrollment)}
          initialCompletedLessonIds={enrollment?.completedLessonIds ?? []}
        />
      </div>
    </NightBackdrop>
  );
}
