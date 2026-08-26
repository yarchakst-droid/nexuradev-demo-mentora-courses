import { NextRequest, NextResponse } from "next/server";
import { DICTIONARIES } from "@/i18n/dictionary";
import { enrollInCourse } from "@/lib/store";
import { formRateLimit, getClientIp } from "@/lib/rate-limit";
import type { Lang } from "@/lib/types";

function resolveLang(value: unknown): Lang {
  return value === "en" || value === "ru" ? value : "uk";
}

export async function POST(request: NextRequest) {
  if (!formRateLimit(getClientIp(request)).success) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: DICTIONARIES.uk.server.invalidBody }, { status: 400 });
  }

  const { courseSlug, lang: langInput } = (body as { courseSlug?: unknown; lang?: unknown }) ?? {};
  const lang = resolveLang(langInput);
  if (typeof courseSlug !== "string") {
    return NextResponse.json({ error: DICTIONARIES[lang].server.courseSlugRequired }, { status: 400 });
  }

  const result = enrollInCourse(courseSlug, lang);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json(
    { enrollment: result.enrollment, alreadyEnrolled: result.alreadyEnrolled },
    { status: result.alreadyEnrolled ? 200 : 201 },
  );
}
