import { LockIcon, TrophyIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";
import type { Achievement } from "@/lib/store";

export default function AchievementBadges({ achievements }: { achievements: Achievement[] }) {
  const { lang } = useLang();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {achievements.map((achievement, index) => (
        <div
          key={achievement.id}
          className={`relative overflow-hidden rounded-[1.2rem] border p-4 text-center transition-colors ${
            achievement.earned
              ? "border-gold/40 bg-gradient-to-b from-gold-soft/60 to-surface"
              : "border-line bg-paper-deep/40 grayscale"
          }`}
        >
          {achievement.earned && (
            <span
              className="badge-shine-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/70 to-transparent"
              style={{ "--shine-delay": `${index * 0.4}s` } as React.CSSProperties}
            />
          )}
          <span
            className={`relative mx-auto flex size-11 items-center justify-center rounded-full ${
              achievement.earned ? "bg-gold text-paper" : "bg-line text-stone"
            }`}
          >
            {achievement.earned ? (
              <TrophyIcon className="size-5" />
            ) : (
              <LockIcon className="size-4" />
            )}
          </span>
          <p className="relative mt-3 text-sm font-semibold text-ink">{achievement.title[lang]}</p>
          <p className="relative mt-1 text-xs leading-snug text-stone">{achievement.description[lang]}</p>
        </div>
      ))}
    </div>
  );
}
