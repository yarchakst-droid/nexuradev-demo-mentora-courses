import type { Lang } from "@/lib/types";

/** Narrows an arbitrary request value (query param or body field) to a supported `Lang`, defaulting to `uk`. */
export function resolveLang(value: unknown): Lang {
  return value === "en" || value === "ru" ? value : "uk";
}
