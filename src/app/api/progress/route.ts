import { NextRequest, NextResponse } from "next/server";
import { DICTIONARIES } from "@/i18n/dictionary";
import { resolveLang } from "@/lib/lang";
import { toggleLessonComplete } from "@/lib/store";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: DICTIONARIES.uk.server.invalidBody }, { status: 400 });
  }

  const { courseSlug, lessonId, lang: langInput } =
    (body as { courseSlug?: unknown; lessonId?: unknown; lang?: unknown }) ?? {};
  const lang = resolveLang(langInput);
  if (typeof courseSlug !== "string" || typeof lessonId !== "string") {
    return NextResponse.json({ error: DICTIONARIES[lang].server.fieldsRequired }, { status: 400 });
  }

  const result = toggleLessonComplete(courseSlug, lessonId, lang);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }

  return NextResponse.json({
    enrollment: result.enrollment,
    progress: result.progress,
    completed: result.completed,
  });
}
