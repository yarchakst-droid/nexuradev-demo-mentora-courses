import { NextRequest, NextResponse } from "next/server";
import { categories } from "@/data/courses";
import { DICTIONARIES } from "@/i18n/dictionary";
import { getAllCourses } from "@/lib/courses";
import type { CategoryId, Lang } from "@/lib/types";

function resolveLang(value: unknown): Lang {
  return value === "en" || value === "ru" ? value : "uk";
}

export async function GET(request: NextRequest) {
  const categoryParam = request.nextUrl.searchParams.get("category");
  const lang = resolveLang(request.nextUrl.searchParams.get("lang"));

  if (categoryParam && !categories.includes(categoryParam as CategoryId)) {
    return NextResponse.json(
      { error: DICTIONARIES[lang].server.unknownCategory(categoryParam) },
      { status: 400 },
    );
  }

  const courses = getAllCourses(categoryParam as CategoryId | null);
  return NextResponse.json({ courses, categories });
}
