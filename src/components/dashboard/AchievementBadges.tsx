import { LockIcon, TrophyIcon } from "@/components/shared/icons";
import { useLang } from "@/i18n/LangContext";
import type { Achievement } from "@/lib/store";

export default function AchievementBadges({ achievements }: { achievements: Achievement[] }) {
  const { lang, t } = useLang();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {achievements.map((achievement, index) => (
        <div key={achievement.id} className="group relative">
          <div
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

          {/* Progress tooltip — floats above the badge so it never covers its
              own title/description, and lives outside the card's
              overflow-hidden so it isn't clipped by the rounded corners. */}
          <div
            role="status"
            className="pointer-events-none absolute inset-x-3 bottom-full z-10 mb-2 translate-y-1 rounded-lg border border-line bg-surface px-3 py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
          >
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
              <div
                className={`h-full rounded-full ${achievement.earned ? "bg-gold" : "bg-ink/50"}`}
                style={{ width: `${achievement.progress}%` }}
              />
            </div>
            <p className="mt-1.5 text-[11px] font-medium text-stone">
              {achievement.earned ? t.dashboard.achievementEarned : t.dashboard.achievementProgress(achievement.progress)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
