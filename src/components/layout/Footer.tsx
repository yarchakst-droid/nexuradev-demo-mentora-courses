"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { CATEGORY_LABELS } from "@/i18n/dictionary";
import { useLang } from "@/i18n/LangContext";
import type { CategoryId } from "@/lib/types";

const CATEGORY_IDS = Object.keys(CATEGORY_LABELS) as CategoryId[];

export default function Footer() {
  const { t, lang } = useLang();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <footer className="border-t border-paper/10 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr]">
          <div>
            <p className="font-display text-2xl italic text-paper">Mentora</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/55">{t.footer.description}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-paper/40">
              {t.footer.navHeading}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <Link href="/#catalog" className="text-sm text-paper/60 transition-colors hover:text-paper">
                  {t.nav.catalog}
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-paper/60 transition-colors hover:text-paper">
                  {t.nav.dashboard}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-paper/40">
              {t.footer.categoriesHeading}
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {CATEGORY_IDS.map((id) => (
                <li key={id}>
                  <Link href="/#catalog" className="text-sm text-paper/60 transition-colors hover:text-paper">
                    {CATEGORY_LABELS[id][lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-paper/40">
              {t.footer.contactHeading}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/55">{t.footer.contactBlurb}</p>
            {subscribed ? (
              <p className="mt-4 text-sm font-semibold text-moss-soft">{t.course.enrolled}</p>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.emailPlaceholder}
                  className="w-full min-w-0 rounded-full border border-paper/15 bg-paper/[0.05] px-4 py-2.5 text-sm text-paper outline-none transition-colors placeholder:text-paper/35 focus:border-gold/50"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-moss px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-moss-deep"
                >
                  {t.footer.subscribe}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {t.footer.rights} <span className="text-paper/30">· {t.footer.tagline}</span>
          </p>
          <p>{t.footer.credit}</p>
        </div>
      </div>
    </footer>
  );
}
