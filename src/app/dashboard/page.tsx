import StudentDashboard from "@/components/dashboard/StudentDashboard";
import NightBackdrop from "@/components/shared/NightBackdrop";

export default function DashboardPage() {
  return (
    <NightBackdrop className="min-h-[calc(100vh-4rem)] px-3 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-paper/12 bg-paper/[0.05] px-6 py-14 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] sm:px-10">
        <StudentDashboard />
      </div>
    </NightBackdrop>
  );
}
