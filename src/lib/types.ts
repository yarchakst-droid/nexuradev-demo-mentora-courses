export type Lang = "uk" | "en" | "ru";

export type LocalizedText = Record<Lang, string>;

export type CategoryId =
  | "programming"
  | "design"
  | "data"
  | "marketing"
  | "language"
  | "productivity";

export type LevelId = "beginner" | "intermediate" | "advanced";

export interface Instructor {
  name: string;
  title: LocalizedText;
  avatar: string;
  bio: LocalizedText;
  studentsCount: number;
  coursesCount: number;
}

export interface Lesson {
  id: string;
  title: LocalizedText;
  durationMin: number;
}

export interface Module {
  id: string;
  title: LocalizedText;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: LocalizedText;
  category: CategoryId;
  level: LevelId;
  cover: string;
  shortDescription: LocalizedText;
  description: LocalizedText;
  price: number;
  rating: number;
  studentsCount: number;
  instructor: Instructor;
  modules: Module[];
}

export interface CourseSummary {
  id: string;
  slug: string;
  title: LocalizedText;
  category: CategoryId;
  level: LevelId;
  cover: string;
  shortDescription: LocalizedText;
  price: number;
  rating: number;
  studentsCount: number;
  durationHours: number;
  lessonsCount: number;
  instructorName: string;
}
