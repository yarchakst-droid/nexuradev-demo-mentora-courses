"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";

export default function EnrollButton({
  enrolled,
  loading,
  error,
  onEnroll,
}: {
  enrolled: boolean;
  loading: boolean;
  error: string | null;
  onEnroll: () => void;
}) {
  const { t } = useLang();

  if (enrolled) {
    return (
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2 rounded-full bg-moss-soft px-5 py-3.5 text-sm font-semibold text-moss"
        >
          <CheckIcon className="size-4" />
          {t.course.enrolled}
        </motion.div>
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-moss/40"
        >
          {t.course.goToDashboard}
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <motion.button
        type="button"
        onClick={onEnroll}
        disabled={loading}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 rounded-full bg-moss px-5 py-3.5 text-sm font-semibold text-paper shadow-[0_10px_24px_-10px_rgba(31,58,46,0.6)] transition-colors hover:bg-moss-deep disabled:opacity-70"
      >
        {loading ? t.course.enrolling : t.course.enroll}
      </motion.button>
      {error && <p className="text-center text-xs text-rust">{error}</p>}
    </div>
  );
}
