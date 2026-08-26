"use client";

import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import { useLang } from "@/i18n/LangContext";

export default function Nav() {
  const { t } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <Link href="/" className="font-display text-2xl italic text-ink">
          Mentora
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink-soft sm:flex">
          <Link href="/" className="transition-colors hover:text-ink">
            {t.nav.catalog}
          </Link>
          <Link href="/dashboard" className="transition-colors hover:text-ink">
            {t.nav.dashboard}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/dashboard"
            className="group flex items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-1.5 pr-3.5 transition-colors hover:border-moss/30"
          >
            <span className="relative block size-8 overflow-hidden rounded-full">
              <Image
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=80&h=80&q=80"
                alt={t.nav.studentAvatarAlt}
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <span className="hidden text-sm font-medium text-ink sm:inline">{t.nav.studentName}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
