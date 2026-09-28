import type { CategoryId, Lang, LevelId } from "@/lib/types";

export const LANG_LABELS: Record<Lang, string> = {
  uk: "УКР",
  en: "ENG",
  ru: "РУС",
};

export const LOCALE_TAGS: Record<Lang, string> = {
  uk: "uk-UA",
  en: "en-US",
  ru: "ru-RU",
};

export const CATEGORY_LABELS: Record<CategoryId, Record<Lang, string>> = {
  programming: { uk: "Програмування", en: "Programming", ru: "Программирование" },
  design: { uk: "Дизайн", en: "Design", ru: "Дизайн" },
  data: { uk: "Дані та аналітика", en: "Data & Analytics", ru: "Данные и аналитика" },
  marketing: { uk: "Маркетинг", en: "Marketing", ru: "Маркетинг" },
  language: { uk: "Мова", en: "Language", ru: "Язык" },
  productivity: { uk: "Продуктивність", en: "Productivity", ru: "Продуктивность" },
};

export const LEVEL_LABELS: Record<LevelId, Record<Lang, string>> = {
  beginner: { uk: "Початковий", en: "Beginner", ru: "Начальный" },
  intermediate: { uk: "Середній", en: "Intermediate", ru: "Средний" },
  advanced: { uk: "Просунутий", en: "Advanced", ru: "Продвинутый" },
};

export const ACHIEVEMENT_LABELS: Record<
  "first-step" | "on-a-roll" | "course-finished" | "collector" | "marathoner",
  Record<Lang, { title: string; description: string }>
> = {
  "first-step": {
    uk: { title: "Перший крок", description: "Записалися на перший курс" },
    en: { title: "First step", description: "Enrolled in your first course" },
    ru: { title: "Первый шаг", description: "Записались на первый курс" },
  },
  "on-a-roll": {
    uk: { title: "У ритмі", description: "Пройшли курс на 50% і більше" },
    en: { title: "On a roll", description: "Completed 50% or more of a course" },
    ru: { title: "В ритме", description: "Прошли курс на 50% и более" },
  },
  "course-finished": {
    uk: { title: "Курс завершено", description: "Завершили курс на 100%" },
    en: { title: "Course finished", description: "Completed a course 100%" },
    ru: { title: "Курс завершён", description: "Завершили курс на 100%" },
  },
  collector: {
    uk: { title: "Колекціонер знань", description: "Записалися на 3+ курси" },
    en: { title: "Knowledge collector", description: "Enrolled in 3+ courses" },
    ru: { title: "Коллекционер знаний", description: "Записались на 3+ курса" },
  },
  marathoner: {
    uk: { title: "Марафонець", description: "Пройшли 30+ уроків загалом" },
    en: { title: "Marathoner", description: "Completed 30+ lessons in total" },
    ru: { title: "Марафонец", description: "Прошли 30+ уроков в общей сложности" },
  },
};

export interface Dictionary {
  nav: {
    catalog: string;
    dashboard: string;
    studentName: string;
    studentAvatarAlt: string;
  };
  footer: {
    tagline: string;
    description: string;
    navHeading: string;
    categoriesHeading: string;
    contactHeading: string;
    contactBlurb: string;
    emailPlaceholder: string;
    subscribe: string;
    rights: string;
    credit: string;
  };
  hero: {
    h1Pre: string;
    h1Em1: string;
    h1Mid: string;
    h1Em2: string;
    sub: string;
    cta: string;
  };
  catalog: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    allCourses: string;
    viewCourse: string;
    loadError: string;
    emptyCategory: string;
    hours: string;
  };
  course: {
    program: string;
    lessons: string;
    lessonsTotal: string;
    minutesShort: string;
    rating: string;
    students: string;
    onePayment: string;
    enroll: string;
    enrolling: string;
    enrolled: string;
    goToDashboard: string;
    playAria: string;
    videoHours: string;
    instructorLabel: string;
    studentsOfInstructor: string;
    coursesOnMentora: (n: number) => string;
    enrollError: string;
    progressError: string;
  };
  dashboard: {
    welcomeBack: string;
    inProgress: string;
    completed: string;
    hoursLearned: string;
    lessonsCompleted: string;
    continueWatching: string;
    myCourses: string;
    achievements: string;
    continueLabel: string;
    percentComplete: string;
    lessonsOf: (completed: number, total: number) => string;
    noCourses: string;
    goToCatalog: string;
    loadError: string;
    scrollBack: string;
    scrollForward: string;
  };
  server: {
    invalidBody: string;
    courseSlugRequired: string;
    courseNotFound: string;
    fieldsRequired: string;
    lessonNotFound: string;
    enrollFirst: string;
    unknownCategory: (category: string) => string;
  };
}

const uk: Dictionary = {
  nav: {
    catalog: "Каталог курсів",
    dashboard: "Кабінет",
    studentName: "Софія",
    studentAvatarAlt: "Аватар студентки",
  },
  footer: {
    tagline: "Демо-проєкт для портфоліо NexuraDev · навчальні дані вигадані",
    description: "Навчальна платформа з курсами від практиків індустрії - без води, з реальними проєктами.",
    navHeading: "Навігація",
    categoriesHeading: "Категорії",
    contactHeading: "Будьте на зв'язку",
    contactBlurb: "Новини про нові курси та знижки - без спаму.",
    emailPlaceholder: "Ваш email",
    subscribe: "Підписатися",
    rights: "© 2026 Mentora. Усі права захищено.",
    credit: "Дизайн та розробка - NexuraDev",
  },
  hero: {
    h1Pre: "Курси, що",
    h1Em1: "перетворюють",
    h1Mid: "знання на",
    h1Em2: "кар'єру.",
    sub: "Курси від практиків для тих, хто вчиться вночі, мріє вдень і не боїться почати заново.",
    cta: "Обрати курс",
  },
  catalog: {
    eyebrow: "Каталог курсів",
    headline: "Знайдіть курс, який змінить вашу траєкторію",
    subtitle:
      "Курси від практиків індустрії - розробка, дизайн, дані, маркетинг та мова. Без води, з реальними проєктами в кожному модулі.",
    allCourses: "Усі курси",
    viewCourse: "Переглянути курс",
    loadError: "Не вдалося завантажити каталог курсів.",
    emptyCategory: "У цій категорії поки немає курсів.",
    hours: "год",
  },
  course: {
    program: "Програма курсу",
    lessons: "уроки",
    lessonsTotal: "уроків",
    minutesShort: "хв",
    rating: "рейтинг",
    students: "студентів",
    onePayment: "одноразовий платіж, доступ назавжди",
    enroll: "Записатися на курс",
    enrolling: "Записуємо…",
    enrolled: "Ви записані на курс",
    goToDashboard: "Перейти до кабінету",
    playAria: "Відтворити прев'ю курсу",
    videoHours: "год відео",
    instructorLabel: "Викладач курсу",
    studentsOfInstructor: "студентів",
    coursesOnMentora: (n) => `${n} ${n === 1 ? "курс" : "курси"} на Mentora`,
    enrollError: "Не вдалося записатися на курс.",
    progressError: "Не вдалося оновити прогрес.",
  },
  dashboard: {
    welcomeBack: "З поверненням,",
    inProgress: "У процесі",
    completed: "Завершено",
    hoursLearned: "Годин навчання",
    lessonsCompleted: "Уроків пройдено",
    continueWatching: "Продовжити перегляд",
    myCourses: "Мої курси",
    achievements: "Досягнення",
    continueLabel: "Продовжити",
    percentComplete: "% пройдено",
    lessonsOf: (completed, total) => `${completed}/${total} уроків`,
    noCourses: "Ви ще не записані на жоден курс.",
    goToCatalog: "Перейти до каталогу",
    loadError: "Не вдалося завантажити кабінет студента.",
    scrollBack: "Прокрутити назад",
    scrollForward: "Прокрутити вперед",
  },
  server: {
    invalidBody: "Некоректне тіло запиту.",
    courseSlugRequired: "Поле courseSlug є обов'язковим.",
    courseNotFound: "Курс не знайдено.",
    fieldsRequired: "Поля courseSlug і lessonId є обов'язковими.",
    lessonNotFound: "Урок не знайдено в цьому курсі.",
    enrollFirst: "Спочатку запишіться на курс.",
    unknownCategory: (category) => `Невідома категорія: "${category}".`,
  },
};

const en: Dictionary = {
  nav: {
    catalog: "Course Catalog",
    dashboard: "Dashboard",
    studentName: "Sophia",
    studentAvatarAlt: "Student avatar",
  },
  footer: {
    tagline: "NexuraDev portfolio demo · course data is fictional",
    description: "An education platform with courses from industry practitioners — no fluff, real projects.",
    navHeading: "Navigation",
    categoriesHeading: "Categories",
    contactHeading: "Stay in the loop",
    contactBlurb: "News about new courses and discounts — no spam.",
    emailPlaceholder: "Your email",
    subscribe: "Subscribe",
    rights: "© 2026 Mentora. All rights reserved.",
    credit: "Designed & built by NexuraDev",
  },
  hero: {
    h1Pre: "Courses that",
    h1Em1: "turn",
    h1Mid: "knowledge into",
    h1Em2: "a career.",
    sub: "Courses built by practitioners — for those who study at night, dream by day, and aren't afraid to start over.",
    cta: "Browse courses",
  },
  catalog: {
    eyebrow: "Course Catalog",
    headline: "Find the course that changes your trajectory",
    subtitle:
      "Courses from industry practitioners - development, design, data, marketing, and language. No fluff, real projects in every module.",
    allCourses: "All courses",
    viewCourse: "View course",
    loadError: "Failed to load the course catalog.",
    emptyCategory: "No courses in this category yet.",
    hours: "hrs",
  },
  course: {
    program: "Course program",
    lessons: "lessons",
    lessonsTotal: "lessons",
    minutesShort: "min",
    rating: "rating",
    students: "students",
    onePayment: "one-time payment, lifetime access",
    enroll: "Enroll in course",
    enrolling: "Enrolling…",
    enrolled: "You're enrolled",
    goToDashboard: "Go to dashboard",
    playAria: "Play course preview",
    videoHours: "hrs of video",
    instructorLabel: "Course instructor",
    studentsOfInstructor: "students",
    coursesOnMentora: (n) => `${n} ${n === 1 ? "course" : "courses"} on Mentora`,
    enrollError: "Failed to enroll in the course.",
    progressError: "Failed to update progress.",
  },
  dashboard: {
    welcomeBack: "Welcome back,",
    inProgress: "In progress",
    completed: "Completed",
    hoursLearned: "Hours learned",
    lessonsCompleted: "Lessons completed",
    continueWatching: "Continue watching",
    myCourses: "My courses",
    achievements: "Achievements",
    continueLabel: "Continue",
    percentComplete: "% complete",
    lessonsOf: (completed, total) => `${completed}/${total} lessons`,
    noCourses: "You're not enrolled in any course yet.",
    goToCatalog: "Go to catalog",
    loadError: "Failed to load the student dashboard.",
    scrollBack: "Scroll back",
    scrollForward: "Scroll forward",
  },
  server: {
    invalidBody: "Invalid request body.",
    courseSlugRequired: "The courseSlug field is required.",
    courseNotFound: "Course not found.",
    fieldsRequired: "The courseSlug and lessonId fields are required.",
    lessonNotFound: "Lesson not found in this course.",
    enrollFirst: "Enroll in the course first.",
    unknownCategory: (category) => `Unknown category: "${category}".`,
  },
};

const ru: Dictionary = {
  nav: {
    catalog: "Каталог курсов",
    dashboard: "Кабинет",
    studentName: "София",
    studentAvatarAlt: "Аватар студентки",
  },
  footer: {
    tagline: "Демо-проект для портфолио NexuraDev · учебные данные вымышленные",
    description: "Образовательная платформа с курсами от практиков индустрии - без воды, с реальными проектами.",
    navHeading: "Навигация",
    categoriesHeading: "Категории",
    contactHeading: "Будьте на связи",
    contactBlurb: "Новости о новых курсах и скидках - без спама.",
    emailPlaceholder: "Ваш email",
    subscribe: "Подписаться",
    rights: "© 2026 Mentora. Все права защищены.",
    credit: "Дизайн и разработка - NexuraDev",
  },
  hero: {
    h1Pre: "Курсы, которые",
    h1Em1: "превращают",
    h1Mid: "знания в",
    h1Em2: "карьеру.",
    sub: "Курсы от практиков для тех, кто учится ночью, мечтает днём и не боится начать заново.",
    cta: "Выбрать курс",
  },
  catalog: {
    eyebrow: "Каталог курсов",
    headline: "Найдите курс, который изменит вашу траекторию",
    subtitle:
      "Курсы от практиков индустрии - разработка, дизайн, данные, маркетинг и язык. Без воды, с реальными проектами в каждом модуле.",
    allCourses: "Все курсы",
    viewCourse: "Посмотреть курс",
    loadError: "Не удалось загрузить каталог курсов.",
    emptyCategory: "В этой категории пока нет курсов.",
    hours: "ч",
  },
  course: {
    program: "Программа курса",
    lessons: "урока",
    lessonsTotal: "уроков",
    minutesShort: "мин",
    rating: "рейтинг",
    students: "студентов",
    onePayment: "разовый платёж, доступ навсегда",
    enroll: "Записаться на курс",
    enrolling: "Записываем…",
    enrolled: "Вы записаны на курс",
    goToDashboard: "Перейти в кабинет",
    playAria: "Воспроизвести превью курса",
    videoHours: "ч видео",
    instructorLabel: "Преподаватель курса",
    studentsOfInstructor: "студентов",
    coursesOnMentora: (n) => `${n} ${n === 1 ? "курс" : "курса"} на Mentora`,
    enrollError: "Не удалось записаться на курс.",
    progressError: "Не удалось обновить прогресс.",
  },
  dashboard: {
    welcomeBack: "С возвращением,",
    inProgress: "В процессе",
    completed: "Завершено",
    hoursLearned: "Часов обучения",
    lessonsCompleted: "Уроков пройдено",
    continueWatching: "Продолжить просмотр",
    myCourses: "Мои курсы",
    achievements: "Достижения",
    continueLabel: "Продолжить",
    percentComplete: "% пройдено",
    lessonsOf: (completed, total) => `${completed}/${total} уроков`,
    noCourses: "Вы ещё не записаны ни на один курс.",
    goToCatalog: "Перейти в каталог",
    loadError: "Не удалось загрузить кабинет студента.",
    scrollBack: "Прокрутить назад",
    scrollForward: "Прокрутить вперёд",
  },
  server: {
    invalidBody: "Некорректное тело запроса.",
    courseSlugRequired: "Поле courseSlug обязательно.",
    courseNotFound: "Курс не найден.",
    fieldsRequired: "Поля courseSlug и lessonId обязательны.",
    lessonNotFound: "Урок не найден в этом курсе.",
    enrollFirst: "Сначала запишитесь на курс.",
    unknownCategory: (category) => `Неизвестная категория: "${category}".`,
  },
};

export const DICTIONARIES: Record<Lang, Dictionary> = { uk, en, ru };
