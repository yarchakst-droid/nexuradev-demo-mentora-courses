"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { LANG_LABELS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LangContext";
import type { Lang } from "@/lib/types";
import styles from "./CinematicHero.module.css";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const LANG_OPTIONS: Lang[] = ["uk", "en", "ru"];

export default function CinematicHero() {
  const { lang, t, setLang } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Once scrolled past, this video has nothing left to show and no reason to
  // keep decoding/compositing every frame — pause it out of view so it stops
  // costing anything for the rest of the scroll, resume if scrolled back up.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // iOS can leave a muted/autoplay/playsInline video paused (showing its
    // native tap-to-play button) instead of starting it — e.g. when Low
    // Power Mode is on, or when the autoplay attempt races the network
    // fetch. Setting `muted` explicitly (not just via the JSX attribute)
    // and retrying play() on load progress and on the first user gesture
    // makes sure it always ends up playing on its own.
    video.muted = true;
    video.defaultMuted = true;

    let isIntersecting = false;
    const tryPlay = () => {
      if (isIntersecting && video.paused) video.play().catch(() => {});
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) tryPlay();
        else video.pause();
      },
      { threshold: 0 }
    );
    observer.observe(video);

    video.addEventListener("loadedmetadata", tryPlay);
    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    document.addEventListener("touchstart", tryPlay, { passive: true });
    document.addEventListener("scroll", tryPlay, { passive: true });

    return () => {
      observer.disconnect();
      video.removeEventListener("loadedmetadata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      document.removeEventListener("touchstart", tryPlay);
      document.removeEventListener("scroll", tryPlay);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.bgVideo}
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-6 sm:px-8">
        <Link href="/" className="font-display text-3xl italic tracking-tight text-white">
          Mentora
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <Link href="/" className="text-white transition-colors hover:text-white">
            {t.nav.catalog}
          </Link>
          <Link href="/dashboard" className="transition-colors hover:text-white">
            {t.nav.dashboard}
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-0.5">
            {LANG_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLang(option)}
                aria-label={`Mentora: ${LANG_LABELS[option]}`}
                className={`rounded-full px-1.5 py-1 text-[11px] font-semibold tracking-wide transition-colors sm:px-2 ${
                  option === lang ? "text-white" : "text-white/45 hover:text-white/80"
                }`}
              >
                {LANG_LABELS[option]}
              </button>
            ))}
          </div>
          <a
            href="#catalog"
            className={`${styles.liquidGlass} rounded-full px-4 py-2 text-xs text-white transition-transform hover:scale-[1.03] sm:px-6 sm:py-2.5 sm:text-sm`}
          >
            {t.hero.cta}
          </a>
        </div>
      </header>

      <div className="relative z-10 flex flex-col items-center px-6 pt-24 pb-32 text-center sm:pt-28">
        <h1
          className={`${styles.fadeRise} max-w-5xl font-display text-5xl italic leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl`}
        >
          {t.hero.h1Pre} <em className={`${styles.muted} not-italic`}>{t.hero.h1Em1}</em> {t.hero.h1Mid}{" "}
          <em className={`${styles.muted} not-italic`}>{t.hero.h1Em2}</em>
        </h1>

        <p className={`${styles.fadeRiseDelay} ${styles.muted} mt-8 max-w-2xl text-base leading-relaxed sm:text-lg`}>
          {t.hero.sub}
        </p>

        <a
          href="#catalog"
          className={`${styles.liquidGlass} ${styles.fadeRiseDelay2} mt-12 cursor-pointer rounded-full px-14 py-5 text-base text-white transition-transform hover:scale-[1.03]`}
        >
          {t.hero.cta}
        </a>
      </div>
    </section>
  );
}
