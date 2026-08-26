"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { PlayIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";

export default function VideoPlayerMock({
  cover,
  title,
  durationHours,
}: {
  cover: string;
  title: string;
  durationHours: number;
}) {
  const { t } = useLang();
  const [pulses, setPulses] = useState<number[]>([]);

  function handlePlay() {
    const id = Date.now();
    setPulses((p) => [...p, id]);
    window.setTimeout(() => setPulses((p) => p.filter((x) => x !== id)), 900);
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-[1.6rem] bg-ink">
      <Image
        src={cover}
        alt={title}
        fill
        sizes="(min-width: 1024px) 66vw, 100vw"
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

      <button
        type="button"
        onClick={handlePlay}
        aria-label={t.course.playAria}
        className="group absolute inset-0 flex items-center justify-center"
      >
        <span className="relative flex size-20 items-center justify-center">
          {pulses.map((id) => (
            <motion.span
              key={id}
              initial={{ opacity: 0.5, scale: 0.7 }}
              animate={{ opacity: 0, scale: 1.8 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="absolute inset-0 rounded-full border border-paper/70"
            />
          ))}
          <motion.span
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="flex size-20 items-center justify-center rounded-full bg-paper/95 text-ink shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-colors group-hover:bg-gold group-hover:text-ink"
          >
            <PlayIcon className="ml-1 size-8" />
          </motion.span>
        </span>
      </button>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
        <h2 className="max-w-md text-balance font-display text-2xl italic text-paper drop-shadow-sm">
          {title}
        </h2>
        <span className="rounded-full bg-ink/60 px-3 py-1 text-xs font-medium text-paper backdrop-blur-sm">
          {durationHours} {t.course.videoHours}
        </span>
      </div>
    </div>
  );
}
