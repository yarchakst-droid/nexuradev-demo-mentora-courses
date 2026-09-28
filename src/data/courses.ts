import type { CategoryId, Course, LocalizedText } from "@/lib/types";

const cover = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const avatar = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=240&h=240&q=80`;

const tt = (uk: string, en: string, ru: string): LocalizedText => ({ uk, en, ru });

export const courses: Course[] = [
  {
    id: "frontend-react",
    slug: "frontend-react",
    title: tt("Frontend-розробка на React", "Frontend Development with React", "Frontend-разработка на React"),
    category: "programming",
    level: "intermediate",
    cover: cover("1531482615713-2afd69097998"),
    shortDescription: tt(
      "Компоненти, хуки та архітектура застосунків, які не розвалюються при рості команди.",
      "Components, hooks, and application architecture that doesn't fall apart as your team grows.",
      "Компоненты, хуки и архитектура приложений, которая не разваливается при росте команды.",
    ),
    description: tt(
      "Курс для тих, хто вже писав HTML/CSS/JS і хоче зібрати повноцінний React-застосунок за прикладом продакшн-проєктів. Розберемо не тільки синтаксис, а й те, як мислять фронтенд-інженери в командах: структуру проєкту, роботу з даними, продуктивність і деплой.",
      "A course for those who already write HTML/CSS/JS and want to build a full React application modeled on real production projects. We'll cover not just syntax, but how frontend engineers think in teams: project structure, data handling, performance, and deployment.",
      "Курс для тех, кто уже писал HTML/CSS/JS и хочет собрать полноценное React-приложение по примеру продакшн-проектов. Разберём не только синтаксис, но и то, как мыслят фронтенд-инженеры в командах: структуру проекта, работу с данными, производительность и деплой.",
    ),
    price: 2900,
    rating: 4.8,
    studentsCount: 4210,
    instructor: {
      name: "Олексій Гнатюк",
      title: tt("Senior Frontend Engineer", "Senior Frontend Engineer", "Senior Frontend Engineer"),
      avatar: avatar("1500648767791-00dcc994a43e"),
      bio: tt(
        "Пише продакшн-React вже 8 років, зараз - тімлід у продуктовій компанії. Вірить, що найкращий спосіб зрозуміти хук - зламати його.",
        "Has been writing production React for 8 years, now a team lead at a product company. Believes the best way to understand a hook is to break it.",
        "Пишет продакшн-React уже 8 лет, сейчас - тимлид в продуктовой компании. Верит, что лучший способ понять хук - сломать его.",
      ),
      studentsCount: 11400,
      coursesCount: 3,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи сучасного React", "Modern React Fundamentals", "Основы современного React"),
        lessons: [
          { id: "l1", title: tt("Компоненти, пропси і композиція", "Components, props, and composition", "Компоненты, пропсы и композиция"), durationMin: 18 },
          { id: "l2", title: tt("JSX під капотом: як це компілюється", "JSX under the hood: how it compiles", "JSX под капотом: как это компилируется"), durationMin: 14 },
          { id: "l3", title: tt("Стан і рендер-цикл", "State and the render cycle", "Состояние и цикл рендера"), durationMin: 22 },
        ],
      },
      {
        id: "m2",
        title: tt("Хуки та керування станом", "Hooks and State Management", "Хуки и управление состоянием"),
        lessons: [
          { id: "l4", title: tt("useState, useEffect і пастки замикань", "useState, useEffect, and closure pitfalls", "useState, useEffect и ловушки замыканий"), durationMin: 20 },
          { id: "l5", title: tt("Кастомні хуки: виносимо логіку", "Custom hooks: extracting logic", "Кастомные хуки: выносим логику"), durationMin: 17 },
          { id: "l6", title: tt("Context проти зовнішніх стору", "Context vs external stores", "Context против внешних сторов"), durationMin: 25 },
        ],
      },
      {
        id: "m3",
        title: tt("Робота з даними", "Working with Data", "Работа с данными"),
        lessons: [
          { id: "l7", title: tt("Запити до API та кешування", "API requests and caching", "Запросы к API и кеширование"), durationMin: 19 },
          { id: "l8", title: tt("Форми без болю: контрольовані інпути", "Painless forms: controlled inputs", "Формы без боли: контролируемые инпуты"), durationMin: 16 },
          { id: "l9", title: tt("Обробка помилок і скелетони завантаження", "Error handling and loading skeletons", "Обработка ошибок и скелетоны загрузки"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Продакшн і продуктивність", "Production and Performance", "Продакшн и производительность"),
        lessons: [
          { id: "l10", title: tt("Мемоізація: коли вона справді потрібна", "Memoization: when it's actually needed", "Мемоизация: когда она действительно нужна"), durationMin: 18 },
          { id: "l11", title: tt("Код-сплітинг і лінива підвантаження", "Code splitting and lazy loading", "Код-сплиттинг и ленивая подгрузка"), durationMin: 15 },
          { id: "l12", title: tt("Деплой та моніторинг помилок", "Deployment and error monitoring", "Деплой и мониторинг ошибок"), durationMin: 12 },
        ],
      },
    ],
  },
  {
    id: "backend-nodejs",
    slug: "backend-nodejs",
    title: tt("Backend-розробка на Node.js", "Backend Development with Node.js", "Backend-разработка на Node.js"),
    category: "programming",
    level: "advanced",
    cover: cover("1571171637578-41bc2dd41cd2"),
    shortDescription: tt(
      "Архітектура серверних застосунків, черги, кешування і все, що тримає прод на ногах.",
      "Server application architecture, queues, caching, and everything that keeps production running.",
      "Архитектура серверных приложений, очереди, кеширование и всё, что держит прод на ногах.",
    ),
    description: tt(
      "Поглиблений курс для розробників, які хочуть проєктувати надійні бекенд-системи, а не просто писати ендпоінти. Архітектура, дані, черги, автентифікація й те, що відбувається із застосунком після деплою.",
      "An in-depth course for developers who want to design reliable backend systems, not just write endpoints. Architecture, data, queues, authentication, and what happens to an application after deployment.",
      "Углублённый курс для разработчиков, которые хотят проектировать надёжные бэкенд-системы, а не просто писать эндпоинты. Архитектура, данные, очереди, аутентификация и то, что происходит с приложением после деплоя.",
    ),
    price: 3400,
    rating: 4.9,
    studentsCount: 2870,
    instructor: {
      name: "Марина Костенко",
      title: tt("Software Architect", "Software Architect", "Software Architect"),
      avatar: avatar("1544005313-94ddf0286df2"),
      bio: tt(
        "Проєктує розподілені системи для fintech-продуктів. Раніше - бекенд-лід у стартапі, який пройшов шлях від MVP до мільйона користувачів.",
        "Designs distributed systems for fintech products. Previously backend lead at a startup that scaled from MVP to a million users.",
        "Проектирует распределённые системы для финтех-продуктов. Ранее - бэкенд-лид в стартапе, прошедшем путь от MVP до миллиона пользователей.",
      ),
      studentsCount: 6800,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Архітектура сервера", "Server Architecture", "Архитектура сервера"),
        lessons: [
          { id: "l1", title: tt("Node.js event loop без міфів", "The Node.js event loop, without the myths", "Event loop Node.js без мифов"), durationMin: 16 },
          { id: "l2", title: tt("REST vs RPC: коли що обирати", "REST vs RPC: when to choose which", "REST vs RPC: когда что выбирать"), durationMin: 14 },
          { id: "l3", title: tt("Структура проєкту, що масштабується", "A project structure that scales", "Структура проекта, которая масштабируется"), durationMin: 18 },
        ],
      },
      {
        id: "m2",
        title: tt("Дані та зберігання", "Data and Storage", "Данные и хранение"),
        lessons: [
          { id: "l4", title: tt("Проєктування схеми бази даних", "Designing a database schema", "Проектирование схемы базы данных"), durationMin: 20 },
          { id: "l5", title: tt("Транзакції та цілісність даних", "Transactions and data integrity", "Транзакции и целостность данных"), durationMin: 17 },
          { id: "l6", title: tt("Кешування: Redis на практиці", "Caching: Redis in practice", "Кеширование: Redis на практике"), durationMin: 19 },
        ],
      },
      {
        id: "m3",
        title: tt("Надійність", "Reliability", "Надёжность"),
        lessons: [
          { id: "l7", title: tt("Обробка помилок і graceful shutdown", "Error handling and graceful shutdown", "Обработка ошибок и graceful shutdown"), durationMin: 15 },
          { id: "l8", title: tt("Черги повідомлень і фонові задачі", "Message queues and background jobs", "Очереди сообщений и фоновые задачи"), durationMin: 22 },
          { id: "l9", title: tt("Логування та трасування запитів", "Logging and request tracing", "Логирование и трассировка запросов"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Продакшн", "Production", "Продакшн"),
        lessons: [
          { id: "l10", title: tt("Автентифікація та авторизація", "Authentication and authorization", "Аутентификация и авторизация"), durationMin: 21 },
          { id: "l11", title: tt("Контейнеризація та CI/CD", "Containerization and CI/CD", "Контейнеризация и CI/CD"), durationMin: 18 },
          { id: "l12", title: tt("Моніторинг і алертинг", "Monitoring and alerting", "Мониторинг и алертинг"), durationMin: 13 },
        ],
      },
    ],
  },
  {
    id: "ux-ui-design",
    slug: "ux-ui-design",
    title: tt("UX/UI дизайн та прототипування", "UX/UI Design and Prototyping", "UX/UI дизайн и прототипирование"),
    category: "design",
    level: "beginner",
    cover: cover("1587440871875-191322ee64b0"),
    shortDescription: tt(
      "Від дослідження користувачів до дизайн-системи - весь шлях продуктового дизайнера.",
      "From user research to a design system - the full path of a product designer.",
      "От исследования пользователей до дизайн-системы - весь путь продуктового дизайнера.",
    ),
    description: tt(
      "Практичний курс для тих, хто хоче зайти в продуктовий дизайн або систематизувати наявні знання. Дизайн-мислення, прототипування у Figma, дизайн-системи та здача макетів у розробку.",
      "A hands-on course for those who want to break into product design or systematize what they already know. Design thinking, prototyping in Figma, design systems, and handing off designs to development.",
      "Практический курс для тех, кто хочет войти в продуктовый дизайн или систематизировать имеющиеся знания. Дизайн-мышление, прототипирование в Figma, дизайн-системы и передача макетов в разработку.",
    ),
    price: 2600,
    rating: 4.7,
    studentsCount: 3650,
    instructor: {
      name: "Дарина Литвин",
      title: tt("Product Designer", "Product Designer", "Product Designer"),
      avatar: avatar("1580489944761-15a19d654956"),
      bio: tt(
        "Спроєктувала інтерфейси для трьох продуктів із мільйонною аудиторією. Викладає дизайн-мислення без жаргону та зайвої теорії.",
        "Designed interfaces for three products with a combined audience of millions. Teaches design thinking without jargon or unnecessary theory.",
        "Спроектировала интерфейсы для трёх продуктов с многомиллионной аудиторией. Преподаёт дизайн-мышление без жаргона и лишней теории.",
      ),
      studentsCount: 9200,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Дизайн-мислення", "Design Thinking", "Дизайн-мышление"),
        lessons: [
          { id: "l1", title: tt("Дослідження користувачів: із чого почати", "User research: where to start", "Исследование пользователей: с чего начать"), durationMin: 15 },
          { id: "l2", title: tt("Формулювання проблеми та гіпотез", "Formulating the problem and hypotheses", "Формулирование проблемы и гипотез"), durationMin: 13 },
          { id: "l3", title: tt("Побудова user flow", "Building a user flow", "Построение user flow"), durationMin: 17 },
        ],
      },
      {
        id: "m2",
        title: tt("Від вайрфрейму до макета", "From Wireframe to Mockup", "От вайрфрейма до макета"),
        lessons: [
          { id: "l4", title: tt("Lo-fi-прототипи у Figma", "Lo-fi prototypes in Figma", "Lo-fi-прототипы в Figma"), durationMin: 16 },
          { id: "l5", title: tt("Сітки, відступи та типографічна ієрархія", "Grids, spacing, and typographic hierarchy", "Сетки, отступы и типографическая иерархия"), durationMin: 19 },
          { id: "l6", title: tt("Дизайн-система: компоненти й токени", "Design system: components and tokens", "Дизайн-система: компоненты и токены"), durationMin: 22 },
        ],
      },
      {
        id: "m3",
        title: tt("Взаємодія та анімація", "Interaction and Animation", "Взаимодействие и анимация"),
        lessons: [
          { id: "l7", title: tt("Мікровзаємодії, які підсилюють UX", "Micro-interactions that strengthen UX", "Микровзаимодействия, усиливающие UX"), durationMin: 14 },
          { id: "l8", title: tt("Прототипування переходів", "Prototyping transitions", "Прототипирование переходов"), durationMin: 18 },
          { id: "l9", title: tt("Юзабіліті-тестування макета", "Usability testing a mockup", "Юзабилити-тестирование макета"), durationMin: 16 },
        ],
      },
      {
        id: "m4",
        title: tt("Здача в розробку", "Handing Off to Development", "Передача в разработку"),
        lessons: [
          { id: "l10", title: tt("Підготовка специфікацій для розробників", "Preparing specs for developers", "Подготовка спецификаций для разработчиков"), durationMin: 13 },
          { id: "l11", title: tt("Handoff і робота з Dev Mode", "Handoff and working with Dev Mode", "Handoff и работа с Dev Mode"), durationMin: 12 },
          { id: "l12", title: tt("Портфоліо: пакування кейсу", "Portfolio: packaging a case study", "Портфолио: упаковка кейса"), durationMin: 15 },
        ],
      },
    ],
  },
  {
    id: "graphic-design-adobe",
    slug: "graphic-design-adobe",
    title: tt("Графічний дизайн у Adobe", "Graphic Design in Adobe", "Графический дизайн в Adobe"),
    category: "design",
    level: "beginner",
    cover: cover("1626785774573-4b799315345d"),
    shortDescription: tt(
      "Illustrator і Photoshop для брендингу, реклами та візуальних комунікацій.",
      "Illustrator and Photoshop for branding, advertising, and visual communications.",
      "Illustrator и Photoshop для брендинга, рекламы и визуальных коммуникаций.",
    ),
    description: tt(
      "Курс для тих, хто хоче впевнено працювати в Illustrator і Photoshop: від колірної теорії й типографіки до готового фірмового стилю та рекламних макетів.",
      "A course for those who want to work confidently in Illustrator and Photoshop: from color theory and typography to a finished brand identity and ad layouts.",
      "Курс для тех, кто хочет уверенно работать в Illustrator и Photoshop: от теории цвета и типографики до готового фирменного стиля и рекламных макетов.",
    ),
    price: 2200,
    rating: 4.6,
    studentsCount: 2140,
    instructor: {
      name: "Тарас Волошин",
      title: tt("Art Director", "Art Director", "Art Director"),
      avatar: avatar("1522075469751-3a6694fb2f61"),
      bio: tt(
        "Арт-директор брендингового агентства. За 10 років зробив візуальні системи для брендів у ритейлі, HoReCa та IT.",
        "Art director at a branding agency. Over 10 years, built visual systems for brands in retail, HoReCa, and IT.",
        "Арт-директор брендингового агентства. За 10 лет создал визуальные системы для брендов в ритейле, HoReCa и IT.",
      ),
      studentsCount: 5400,
      coursesCount: 1,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи композиції", "Composition Basics", "Основы композиции"),
        lessons: [
          { id: "l1", title: tt("Колірна теорія на практиці", "Color theory in practice", "Теория цвета на практике"), durationMin: 14 },
          { id: "l2", title: tt("Типографіка: вибір і поєднання шрифтів", "Typography: choosing and pairing fonts", "Типографика: выбор и сочетание шрифтов"), durationMin: 18 },
          { id: "l3", title: tt("Сітка та баланс у макеті", "Grid and balance in a layout", "Сетка и баланс в макете"), durationMin: 16 },
        ],
      },
      {
        id: "m2",
        title: tt("Illustrator для брендингу", "Illustrator for Branding", "Illustrator для брендинга"),
        lessons: [
          { id: "l4", title: tt("Векторна графіка з нуля", "Vector graphics from scratch", "Векторная графика с нуля"), durationMin: 19 },
          { id: "l5", title: tt("Створення логотипу: від скетчу до вектору", "Creating a logo: from sketch to vector", "Создание логотипа: от скетча до вектора"), durationMin: 22 },
          { id: "l6", title: tt("Фірмовий стиль і гайдлайн", "Brand identity and guidelines", "Фирменный стиль и гайдлайн"), durationMin: 17 },
        ],
      },
      {
        id: "m3",
        title: tt("Photoshop для комунікацій", "Photoshop for Communications", "Photoshop для коммуникаций"),
        lessons: [
          { id: "l7", title: tt("Ретуш і колірна корекція", "Retouching and color correction", "Ретушь и цветокоррекция"), durationMin: 15 },
          { id: "l8", title: tt("Композиція рекламного банера", "Composing an ad banner", "Композиция рекламного баннера"), durationMin: 18 },
          { id: "l9", title: tt("Робота зі шарами й масками", "Working with layers and masks", "Работа со слоями и масками"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Презентація роботи", "Presenting Your Work", "Презентация работы"),
        lessons: [
          { id: "l10", title: tt("Мокапи та демонстрація проєкту", "Mockups and project presentation", "Мокапы и демонстрация проекта"), durationMin: 14 },
          { id: "l11", title: tt("Підготовка файлів для друку та вебу", "Preparing files for print and web", "Подготовка файлов для печати и веба"), durationMin: 12 },
          { id: "l12", title: tt("Збірка портфоліо дизайнера", "Assembling a designer's portfolio", "Сборка портфолио дизайнера"), durationMin: 16 },
        ],
      },
    ],
  },
  {
    id: "data-analysis-python",
    slug: "data-analysis-python",
    title: tt("Аналіз даних та Python", "Data Analysis with Python", "Анализ данных на Python"),
    category: "data",
    level: "intermediate",
    cover: cover("1460925895917-afdab827c52f"),
    shortDescription: tt(
      "Pandas, SQL і візуалізація - шлях від сирих даних до рішення бізнесу.",
      "Pandas, SQL, and visualization - the path from raw data to a business decision.",
      "Pandas, SQL и визуализация - путь от сырых данных до решения для бизнеса.",
    ),
    description: tt(
      "Курс для тих, хто хоче перейти в аналітику даних або прокачати наявні навички. Python і Pandas, SQL для аналітика, візуалізація та те, як перетворити цифри на рішення, яке зрозуміє команда.",
      "A course for those who want to move into data analytics or level up their existing skills. Python and Pandas, SQL for analysts, visualization, and how to turn numbers into a decision the team will understand.",
      "Курс для тех, кто хочет перейти в аналитику данных или прокачать имеющиеся навыки. Python и Pandas, SQL для аналитика, визуализация и то, как превратить цифры в решение, понятное команде.",
    ),
    price: 3100,
    rating: 4.8,
    studentsCount: 3980,
    instructor: {
      name: "Ігор Савчук",
      title: tt("Data Analyst Lead", "Data Analyst Lead", "Data Analyst Lead"),
      avatar: avatar("1519085360753-af0119f7cbe7"),
      bio: tt(
        "Керує командою аналітики в e-commerce-компанії. До цього - п'ять років у консалтингу, де рахунок ішов на дашборди для C-level.",
        "Leads the analytics team at an e-commerce company. Before that, five years in consulting, building dashboards for C-level execs.",
        "Руководит командой аналитики в e-commerce-компании. До этого - пять лет в консалтинге, где счёт шёл на дашборды для C-level.",
      ),
      studentsCount: 8700,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Python для аналітики", "Python for Analytics", "Python для аналитики"),
        lessons: [
          { id: "l1", title: tt("Синтаксис і структури даних", "Syntax and data structures", "Синтаксис и структуры данных"), durationMin: 16 },
          { id: "l2", title: tt("Pandas: очищення й трансформація даних", "Pandas: cleaning and transforming data", "Pandas: очистка и трансформация данных"), durationMin: 23 },
          { id: "l3", title: tt("Робота з датами та пропущеними значеннями", "Working with dates and missing values", "Работа с датами и пропущенными значениями"), durationMin: 14 },
        ],
      },
      {
        id: "m2",
        title: tt("Аналіз і візуалізація", "Analysis and Visualization", "Анализ и визуализация"),
        lessons: [
          { id: "l4", title: tt("Описова статистика без страху", "Descriptive statistics without fear", "Описательная статистика без страха"), durationMin: 18 },
          { id: "l5", title: tt("Побудова графіків у Matplotlib", "Building charts in Matplotlib", "Построение графиков в Matplotlib"), durationMin: 16 },
          { id: "l6", title: tt("Дашборди для нетехнічної аудиторії", "Dashboards for a non-technical audience", "Дашборды для нетехнической аудитории"), durationMin: 20 },
        ],
      },
      {
        id: "m3",
        title: tt("SQL для аналітика", "SQL for Analysts", "SQL для аналитика"),
        lessons: [
          { id: "l7", title: tt("JOIN-и і підзапити на практиці", "Joins and subqueries in practice", "JOIN-ы и подзапросы на практике"), durationMin: 19 },
          { id: "l8", title: tt("Віконні функції", "Window functions", "Оконные функции"), durationMin: 17 },
          { id: "l9", title: tt("Оптимізація повільних запитів", "Optimizing slow queries", "Оптимизация медленных запросов"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Від даних до рішення", "From Data to Decision", "От данных к решению"),
        lessons: [
          { id: "l10", title: tt("A/B тести: як не обманути себе", "A/B tests: how not to fool yourself", "A/B-тесты: как не обмануть себя"), durationMin: 21 },
          { id: "l11", title: tt("Побудова метрик продукту", "Building product metrics", "Построение метрик продукта"), durationMin: 15 },
          { id: "l12", title: tt("Презентація інсайтів команді", "Presenting insights to the team", "Презентация инсайтов команде"), durationMin: 12 },
        ],
      },
    ],
  },
  {
    id: "smm-digital-marketing",
    slug: "smm-digital-marketing",
    title: tt("SMM та digital-маркетинг", "SMM and Digital Marketing", "SMM и digital-маркетинг"),
    category: "marketing",
    level: "beginner",
    cover: cover("1611162617213-7d7a39e9b1d7"),
    shortDescription: tt(
      "Стратегія, контент і реклама в соцмережах, які приводять клієнтів.",
      "Strategy, content, and social media advertising that bring in customers.",
      "Стратегия, контент и реклама в соцсетях, которые приводят клиентов.",
    ),
    description: tt(
      "Курс про те, як будувати присутність бренду в соцмережах системно: від стратегії й контенту до таргетованої реклами та вимірювання результату.",
      "A course on how to build a brand's social media presence systematically: from strategy and content to targeted advertising and measuring results.",
      "Курс о том, как системно строить присутствие бренда в соцсетях: от стратегии и контента до таргетированной рекламы и измерения результата.",
    ),
    price: 1900,
    rating: 4.6,
    studentsCount: 5120,
    instructor: {
      name: "Яна Прокопенко",
      title: tt("Head of Marketing", "Head of Marketing", "Head of Marketing"),
      avatar: avatar("1494790108377-be9c29b29330"),
      bio: tt(
        "Запускала маркетинг для трьох D2C-брендів з нуля до прибутковості. Любить цифри так само, як і креатив.",
        "Launched marketing for three D2C brands from zero to profitability. Loves numbers as much as creative work.",
        "Запускала маркетинг для трёх D2C-брендов с нуля до прибыльности. Любит цифры так же, как и креатив.",
      ),
      studentsCount: 13100,
      coursesCount: 3,
    },
    modules: [
      {
        id: "m1",
        title: tt("Стратегія в соцмережах", "Social Media Strategy", "Стратегия в соцсетях"),
        lessons: [
          { id: "l1", title: tt("Позиціонування бренду в Instagram і TikTok", "Brand positioning on Instagram and TikTok", "Позиционирование бренда в Instagram и TikTok"), durationMin: 14 },
          { id: "l2", title: tt("Контент-план, який не набридає", "A content plan that doesn't get old", "Контент-план, который не надоедает"), durationMin: 16 },
          { id: "l3", title: tt("Голос бренду і tone of voice", "Brand voice and tone of voice", "Голос бренда и tone of voice"), durationMin: 12 },
        ],
      },
      {
        id: "m2",
        title: tt("Контент, що працює", "Content That Works", "Контент, который работает"),
        lessons: [
          { id: "l4", title: tt("Reels та коротке відео без бюджету", "Reels and short video on a zero budget", "Reels и короткое видео без бюджета"), durationMin: 19 },
          { id: "l5", title: tt("Копірайтинг для соцмереж", "Copywriting for social media", "Копирайтинг для соцсетей"), durationMin: 15 },
          { id: "l6", title: tt("Візуальна стилістика профілю", "Visual style for a profile", "Визуальная стилистика профиля"), durationMin: 13 },
        ],
      },
      {
        id: "m3",
        title: tt("Реклама та бюджет", "Advertising and Budget", "Реклама и бюджет"),
        lessons: [
          { id: "l7", title: tt("Таргетована реклама: перші кампанії", "Targeted ads: your first campaigns", "Таргетированная реклама: первые кампании"), durationMin: 21 },
          { id: "l8", title: tt("Аналітика рекламних кабінетів", "Analytics in ad platforms", "Аналитика рекламных кабинетов"), durationMin: 17 },
          { id: "l9", title: tt("Оптимізація вартості ліда", "Optimizing cost per lead", "Оптимизация стоимости лида"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Спільнота та вимірювання", "Community and Measurement", "Сообщество и измерение"),
        lessons: [
          { id: "l10", title: tt("Робота з інфлюенсерами", "Working with influencers", "Работа с инфлюенсерами"), durationMin: 16 },
          { id: "l11", title: tt("Метрики залучення й утримання", "Engagement and retention metrics", "Метрики вовлечённости и удержания"), durationMin: 13 },
          { id: "l12", title: tt("Звітність перед клієнтом чи керівництвом", "Reporting to a client or leadership", "Отчётность перед клиентом или руководством"), durationMin: 11 },
        ],
      },
    ],
  },
  {
    id: "content-marketing-copywriting",
    slug: "content-marketing-copywriting",
    title: tt("Контент-маркетинг і копірайтинг", "Content Marketing and Copywriting", "Контент-маркетинг и копирайтинг"),
    category: "marketing",
    level: "intermediate",
    cover: cover("1533750349088-cd871a92f312"),
    shortDescription: tt(
      "Тексти, стратегія й дистрибуція контенту, які будують довіру до бренду.",
      "Texts, strategy, and content distribution that build trust in a brand.",
      "Тексты, стратегия и дистрибуция контента, которые формируют доверие к бренду.",
    ),
    description: tt(
      "Курс для копірайтерів і контент-менеджерів, які хочуть писати тексти з чіткою метою: від редакційної стратегії до заголовків, що читають, і метрик, які насправді важливі.",
      "A course for copywriters and content managers who want to write with clear purpose: from editorial strategy to headlines people actually read, and the metrics that really matter.",
      "Курс для копирайтеров и контент-менеджеров, которые хотят писать тексты с чёткой целью: от редакционной стратегии до заголовков, которые читают, и метрик, которые действительно важны.",
    ),
    price: 2100,
    rating: 4.7,
    studentsCount: 1980,
    instructor: {
      name: "Софія Мельник",
      title: tt("Head of Content", "Head of Content", "Head of Content"),
      avatar: avatar("1573497019940-1c28c88b4f3e"),
      bio: tt(
        "Веде контент-команду медіапродукту з аудиторією 2 млн читачів на місяць. Раніше - редакторка в діловому виданні.",
        "Leads the content team at a media product with an audience of 2 million readers a month. Previously an editor at a business publication.",
        "Руководит контент-командой медиапродукта с аудиторией 2 млн читателей в месяц. Ранее - редактор в деловом издании.",
      ),
      studentsCount: 4300,
      coursesCount: 1,
    },
    modules: [
      {
        id: "m1",
        title: tt("Фундамент контент-стратегії", "The Foundation of Content Strategy", "Фундамент контент-стратегии"),
        lessons: [
          { id: "l1", title: tt("Аудиторія і контент-цілі", "Audience and content goals", "Аудитория и контент-цели"), durationMin: 15 },
          { id: "l2", title: tt("Редакційний план на квартал", "A quarterly editorial plan", "Редакционный план на квартал"), durationMin: 13 },
          { id: "l3", title: tt("Voice & tone для бренду", "Voice & tone for a brand", "Voice & tone для бренда"), durationMin: 14 },
        ],
      },
      {
        id: "m2",
        title: tt("Тексти, що читають", "Texts People Read", "Тексты, которые читают"),
        lessons: [
          { id: "l4", title: tt("Структура тексту, що утримує увагу", "A text structure that holds attention", "Структура текста, удерживающая внимание"), durationMin: 18 },
          { id: "l5", title: tt("Заголовки: наука і практика", "Headlines: science and practice", "Заголовки: наука и практика"), durationMin: 12 },
          { id: "l6", title: tt("Сторітелінг у бізнес-текстах", "Storytelling in business writing", "Сторителлинг в бизнес-текстах"), durationMin: 20 },
        ],
      },
      {
        id: "m3",
        title: tt("SEO і дистрибуція", "SEO and Distribution", "SEO и дистрибуция"),
        lessons: [
          { id: "l7", title: tt("Основи пошукової оптимізації тексту", "The basics of text SEO", "Основы поисковой оптимизации текста"), durationMin: 17 },
          { id: "l8", title: tt("E-mail розсилки, які відкривають", "Email newsletters people open", "Email-рассылки, которые открывают"), durationMin: 16 },
          { id: "l9", title: tt("Дистрибуція контенту без бюджету", "Distributing content without a budget", "Дистрибуция контента без бюджета"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Вимірювання результату", "Measuring Results", "Измерение результата"),
        lessons: [
          { id: "l10", title: tt("Метрики контенту: що насправді важливо", "Content metrics: what actually matters", "Метрики контента: что действительно важно"), durationMin: 13 },
          { id: "l11", title: tt("А/Б тестування заголовків", "A/B testing headlines", "А/Б-тестирование заголовков"), durationMin: 15 },
          { id: "l12", title: tt("Побудова контент-звіту", "Building a content report", "Построение контент-отчёта"), durationMin: 11 },
        ],
      },
    ],
  },
  {
    id: "english-for-it",
    slug: "english-for-it",
    title: tt("Англійська для IT-фахівців", "English for IT Professionals", "Английский для IT-специалистов"),
    category: "language",
    level: "beginner",
    cover: cover("1523240795612-9a054b0db644"),
    shortDescription: tt(
      "Робоча англійська: стендапи, код-рев'ю, співбесіди та дзвінки з клієнтами.",
      "Working English: standups, code reviews, interviews, and client calls.",
      "Рабочий английский: стендапы, код-ревью, собеседования и звонки с клиентами.",
    ),
    description: tt(
      "Курс розмовної та письмової англійської для розробників, дизайнерів і продакт-менеджерів. Лексика для щоденної роботи, впевненість на співбесідах і в дзвінках з клієнтами.",
      "A spoken and written English course for developers, designers, and product managers. Vocabulary for everyday work, confidence in interviews and client calls.",
      "Курс разговорного и письменного английского для разработчиков, дизайнеров и продакт-менеджеров. Лексика для повседневной работы, уверенность на собеседованиях и в звонках с клиентами.",
    ),
    price: 2400,
    rating: 4.9,
    studentsCount: 2760,
    instructor: {
      name: "Емма Річардс",
      title: tt("English for Tech Coach", "English for Tech Coach", "English for Tech Coach"),
      avatar: avatar("1580894732444-8ecded7900cd"),
      bio: tt(
        "Носійка мови, шість років навчає розробників і продакт-менеджерів ефективно спілкуватися англійською в роботі.",
        "A native speaker with six years of experience teaching developers and product managers to communicate effectively in English at work.",
        "Носитель языка, шесть лет обучает разработчиков и продакт-менеджеров эффективно общаться на английском в работе.",
      ),
      studentsCount: 7600,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Робоче середовище", "The Work Environment", "Рабочая среда"),
        lessons: [
          { id: "l1", title: tt("Лексика для щоденних стендапів", "Vocabulary for daily standups", "Лексика для ежедневных стендапов"), durationMin: 12 },
          { id: "l2", title: tt("Пояснення технічних проблем простими словами", "Explaining technical problems in plain words", "Объяснение технических проблем простыми словами"), durationMin: 16 },
          { id: "l3", title: tt("Small talk із командою", "Small talk with the team", "Small talk с командой"), durationMin: 10 },
        ],
      },
      {
        id: "m2",
        title: tt("Письмова комунікація", "Written Communication", "Письменная коммуникация"),
        lessons: [
          { id: "l4", title: tt("Ділові листи та Slack-повідомлення", "Business emails and Slack messages", "Деловые письма и сообщения в Slack"), durationMin: 14 },
          { id: "l5", title: tt("Документація та коментарі до коду", "Documentation and code comments", "Документация и комментарии к коду"), durationMin: 13 },
          { id: "l6", title: tt("Code review англійською", "Code review in English", "Code review на английском"), durationMin: 15 },
        ],
      },
      {
        id: "m3",
        title: tt("Співбесіди й презентації", "Interviews and Presentations", "Собеседования и презентации"),
        lessons: [
          { id: "l7", title: tt("Розповідь про досвід на співбесіді", "Talking about your experience in an interview", "Рассказ об опыте на собеседовании"), durationMin: 18 },
          { id: "l8", title: tt("Технічні презентації для нетехнічної аудиторії", "Technical presentations for a non-technical audience", "Технические презентации для нетехнической аудитории"), durationMin: 17 },
          { id: "l9", title: tt("Питання й заперечення: як відповідати", "Questions and objections: how to respond", "Вопросы и возражения: как отвечать"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Впевненість у розмові", "Confidence in Conversation", "Уверенность в разговоре"),
        lessons: [
          { id: "l10", title: tt("Вимова і швидкість мовлення", "Pronunciation and speaking pace", "Произношение и скорость речи"), durationMin: 14 },
          { id: "l11", title: tt("Дзвінки з клієнтами", "Calls with clients", "Звонки с клиентами"), durationMin: 16 },
          { id: "l12", title: tt("Нетворкінг на конференціях", "Networking at conferences", "Нетворкинг на конференциях"), durationMin: 12 },
        ],
      },
    ],
  },
  {
    id: "productivity-project-management",
    slug: "productivity-project-management",
    title: tt(
      "Продуктивність та управління проєктами",
      "Productivity and Project Management",
      "Продуктивность и управление проектами",
    ),
    category: "productivity",
    level: "intermediate",
    cover: cover("1542744173-8e7e53415bb0"),
    shortDescription: tt(
      "Scrum, Kanban і особиста ефективність без вигорання й зайвого процесу.",
      "Scrum, Kanban, and personal effectiveness without burnout or unnecessary process.",
      "Scrum, Kanban и личная эффективность без выгорания и лишнего процесса.",
    ),
    description: tt(
      "Курс для тих, хто веде проєкти чи команди і хоче замінити хаос на прості робочі процеси: особиста продуктивність, Agile-підходи, командна робота та метрики.",
      "A course for those who lead projects or teams and want to replace chaos with simple workflows: personal productivity, Agile approaches, teamwork, and metrics.",
      "Курс для тех, кто ведёт проекты или команды и хочет заменить хаос простыми рабочими процессами: личная продуктивность, Agile-подходы, командная работа и метрики.",
    ),
    price: 2000,
    rating: 4.7,
    studentsCount: 3320,
    instructor: {
      name: "Максим Бойко",
      title: tt("PMP, Delivery Manager", "PMP, Delivery Manager", "PMP, Delivery Manager"),
      avatar: avatar("1560250097-0b93528c311a"),
      bio: tt(
        "Веде одночасно кілька продуктових команд у аутсорс-компанії. Сертифікований PMP, фанат простих процесів замість важких методологій.",
        "Runs several product teams at once at an outsourcing company. PMP-certified, a fan of simple processes over heavy methodologies.",
        "Ведёт одновременно несколько продуктовых команд в аутсорс-компании. Сертифицированный PMP, фанат простых процессов вместо тяжёлых методологий.",
      ),
      studentsCount: 6100,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Особиста продуктивність", "Personal Productivity", "Личная продуктивность"),
        lessons: [
          { id: "l1", title: tt("Пріоритизація задач без вигорання", "Prioritizing tasks without burnout", "Приоритизация задач без выгорания"), durationMin: 13 },
          { id: "l2", title: tt("Тайм-блокінг і глибока робота", "Time-blocking and deep work", "Тайм-блокинг и глубокая работа"), durationMin: 15 },
          { id: "l3", title: tt("Боротьба з прокрастинацією", "Fighting procrastination", "Борьба с прокрастинацией"), durationMin: 11 },
        ],
      },
      {
        id: "m2",
        title: tt("Основи управління проєктами", "Project Management Basics", "Основы управления проектами"),
        lessons: [
          { id: "l4", title: tt("Scrum і Kanban: що обрати", "Scrum vs Kanban: which to choose", "Scrum и Kanban: что выбрать"), durationMin: 17 },
          { id: "l5", title: tt("Планування спринтів", "Sprint planning", "Планирование спринтов"), durationMin: 16 },
          { id: "l6", title: tt("Оцінка задач і ризиків", "Estimating tasks and risks", "Оценка задач и рисков"), durationMin: 14 },
        ],
      },
      {
        id: "m3",
        title: tt("Командна робота", "Teamwork", "Командная работа"),
        lessons: [
          { id: "l7", title: tt("Ефективні стендапи й ретро", "Effective standups and retros", "Эффективные стендапы и ретро"), durationMin: 12 },
          { id: "l8", title: tt("Делегування без мікроменеджменту", "Delegating without micromanagement", "Делегирование без микроменеджмента"), durationMin: 15 },
          { id: "l9", title: tt("Конфлікти в команді: що робити", "Team conflicts: what to do", "Конфликты в команде: что делать"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Метрики й звітність", "Metrics and Reporting", "Метрики и отчётность"),
        lessons: [
          { id: "l10", title: tt("Швидкість команди і burndown", "Team velocity and burndown", "Скорость команды и burndown"), durationMin: 14 },
          { id: "l11", title: tt("Звіт для стейкхолдерів", "Reporting to stakeholders", "Отчёт для стейкхолдеров"), durationMin: 12 },
          { id: "l12", title: tt("Безперервне поліпшення процесу", "Continuous process improvement", "Непрерывное улучшение процесса"), durationMin: 11 },
        ],
      },
    ],
  },
  {
    id: "python-basics",
    slug: "python-basics",
    title: tt("Python для початківців", "Python for Beginners", "Python для начинающих"),
    category: "programming",
    level: "beginner",
    cover: cover("1526379095098-d400fd0bf935"),
    shortDescription: tt(
      "Перша мова програмування без страху - від синтаксису до першого власного скрипта.",
      "Your first programming language without the fear factor - from syntax to your first working script.",
      "Первый язык программирования без страха - от синтаксиса до первого собственного скрипта.",
    ),
    description: tt(
      "Курс для тих, хто ще жодного разу не писав код. Розбираємо Python з нуля: змінні, цикли, функції, робота з файлами - і одразу застосовуємо це в маленьких, але реальних задачах, а не в відірваних від життя вправах.",
      "A course for people who have never written code before. We cover Python from zero: variables, loops, functions, working with files - and apply it right away in small but real tasks instead of exercises disconnected from real life.",
      "Курс для тех, кто ещё ни разу не писал код. Разбираем Python с нуля: переменные, циклы, функции, работа с файлами - и сразу применяем это в маленьких, но реальных задачах, а не в оторванных от жизни упражнениях.",
    ),
    price: 2400,
    rating: 4.8,
    studentsCount: 5680,
    instructor: {
      name: "Максим Ковальов",
      title: tt("Python Developer", "Python Developer", "Python Developer"),
      avatar: avatar("1607990281513-2c110a25bd8c"),
      bio: tt(
        "Пише на Python 6 років, автоматизує процеси для e-commerce компаній. Навчає так, як хотів би, щоб навчали його самого.",
        "Has been writing Python for 6 years, automating processes for e-commerce companies. Teaches the way he wishes he'd been taught.",
        "Пишет на Python 6 лет, автоматизирует процессы для e-commerce компаний. Учит так, как хотел бы, чтобы учили его самого.",
      ),
      studentsCount: 9200,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи синтаксису", "Syntax Basics", "Основы синтаксиса"),
        lessons: [
          { id: "l1", title: tt("Змінні, типи даних і оператори", "Variables, data types, and operators", "Переменные, типы данных и операторы"), durationMin: 16 },
          { id: "l2", title: tt("Умови та розгалуження", "Conditionals and branching", "Условия и ветвление"), durationMin: 14 },
          { id: "l3", title: tt("Цикли for і while", "for and while loops", "Циклы for и while"), durationMin: 17 },
        ],
      },
      {
        id: "m2",
        title: tt("Структури даних", "Data Structures", "Структуры данных"),
        lessons: [
          { id: "l4", title: tt("Списки та кортежі", "Lists and tuples", "Списки и кортежи"), durationMin: 15 },
          { id: "l5", title: tt("Словники: коли і навіщо", "Dictionaries: when and why", "Словари: когда и зачем"), durationMin: 16 },
          { id: "l6", title: tt("Робота з рядками", "Working with strings", "Работа со строками"), durationMin: 13 },
        ],
      },
      {
        id: "m3",
        title: tt("Функції та модулі", "Functions and Modules", "Функции и модули"),
        lessons: [
          { id: "l7", title: tt("Пишемо власні функції", "Writing your own functions", "Пишем свои функции"), durationMin: 18 },
          { id: "l8", title: tt("Імпорт бібліотек стандартної бібліотеки", "Importing from the standard library", "Импорт из стандартной библиотеки"), durationMin: 12 },
          { id: "l9", title: tt("Обробка помилок try/except", "Handling errors with try/except", "Обработка ошибок try/except"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Перший реальний проєкт", "Your First Real Project", "Первый реальный проект"),
        lessons: [
          { id: "l10", title: tt("Читання та запис файлів", "Reading and writing files", "Чтение и запись файлов"), durationMin: 15 },
          { id: "l11", title: tt("Скрипт автоматизації: від ідеї до коду", "An automation script: from idea to code", "Скрипт автоматизации: от идеи до кода"), durationMin: 20 },
          { id: "l12", title: tt("Куди рухатись далі", "Where to go from here", "Куда двигаться дальше"), durationMin: 10 },
        ],
      },
    ],
  },
  {
    id: "flutter-mobile-dev",
    slug: "flutter-mobile-dev",
    title: tt("Мобільна розробка на Flutter", "Mobile Development with Flutter", "Мобильная разработка на Flutter"),
    category: "programming",
    level: "intermediate",
    cover: cover("1551650975-87deedd944c3"),
    shortDescription: tt(
      "Один код - iOS і Android. Збираємо застосунок з навігацією, станом і реальним API.",
      "One codebase - iOS and Android. We build an app with navigation, state, and a real API.",
      "Один код - iOS и Android. Собираем приложение с навигацией, состоянием и реальным API.",
    ),
    description: tt(
      "Курс для розробників, які хочуть зайти в мобільну розробку через Flutter. Розберемо widget-дерево, керування станом, навігацію між екранами та підключення до бекенду - і зберемо разом застосунок, який реально можна поставити на телефон.",
      "A course for developers who want to break into mobile development through Flutter. We'll cover the widget tree, state management, screen navigation, and backend integration - and build an app you can actually install on your phone.",
      "Курс для разработчиков, которые хотят зайти в мобильную разработку через Flutter. Разберём widget-дерево, управление состоянием, навигацию между экранами и подключение к бэкенду - и соберём приложение, которое реально можно поставить на телефон.",
    ),
    price: 3200,
    rating: 4.7,
    studentsCount: 2340,
    instructor: {
      name: "Анна Сидоренко",
      title: tt("Senior Mobile Developer", "Senior Mobile Developer", "Senior Mobile Developer"),
      avatar: avatar("1544005313-94ddf0286df2"),
      bio: tt(
        "5 років у мобільній розробці, з них 3 - на Flutter. Випустила у продакшн 7 застосунків, два з яких досі в топі своєї категорії.",
        "5 years in mobile development, 3 of them on Flutter. Shipped 7 apps to production, two of which are still top-ranked in their category.",
        "5 лет в мобильной разработке, из них 3 - на Flutter. Выпустила в продакшн 7 приложений, два из которых до сих пор в топе своей категории.",
      ),
      studentsCount: 6100,
      coursesCount: 1,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи Flutter і Dart", "Flutter and Dart Fundamentals", "Основы Flutter и Dart"),
        lessons: [
          { id: "l1", title: tt("Dart для тих, хто знає JS чи Java", "Dart for those who know JS or Java", "Dart для тех, кто знает JS или Java"), durationMin: 17 },
          { id: "l2", title: tt("Widget-дерево і як воно рендериться", "The widget tree and how it renders", "Widget-дерево и как оно рендерится"), durationMin: 19 },
          { id: "l3", title: tt("Stateless проти Stateful віджетів", "Stateless vs Stateful widgets", "Stateless против Stateful виджетов"), durationMin: 15 },
        ],
      },
      {
        id: "m2",
        title: tt("Макет і навігація", "Layout and Navigation", "Макет и навигация"),
        lessons: [
          { id: "l4", title: tt("Row, Column і адаптивні макети", "Row, Column, and responsive layouts", "Row, Column и адаптивные макеты"), durationMin: 18 },
          { id: "l5", title: tt("Навігація між екранами", "Navigating between screens", "Навигация между экранами"), durationMin: 16 },
          { id: "l6", title: tt("Кастомні теми і стилі", "Custom themes and styles", "Кастомные темы и стили"), durationMin: 13 },
        ],
      },
      {
        id: "m3",
        title: tt("Керування станом", "State Management", "Управление состоянием"),
        lessons: [
          { id: "l7", title: tt("Provider: перший крок у керуванні станом", "Provider: your first step into state management", "Provider: первый шаг в управлении состоянием"), durationMin: 20 },
          { id: "l8", title: tt("Робота з формами і валідацією", "Forms and validation", "Работа с формами и валидацией"), durationMin: 15 },
          { id: "l9", title: tt("Локальне збереження даних", "Local data persistence", "Локальное сохранение данных"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("API та реліз у продакшн", "API and Shipping to Production", "API и релиз в продакшн"),
        lessons: [
          { id: "l10", title: tt("Підключення до REST API", "Connecting to a REST API", "Подключение к REST API"), durationMin: 19 },
          { id: "l11", title: tt("Обробка помилок мережі", "Handling network errors", "Обработка сетевых ошибок"), durationMin: 13 },
          { id: "l12", title: tt("Збірка релізу для iOS і Android", "Building a release for iOS and Android", "Сборка релиза для iOS и Android"), durationMin: 16 },
        ],
      },
    ],
  },
  {
    id: "motion-design-animation",
    slug: "motion-design-animation",
    title: tt("Motion-дизайн та анімація", "Motion Design and Animation", "Motion-дизайн и анимация"),
    category: "design",
    level: "intermediate",
    cover: cover("1618172193622-ae2d025f4032"),
    shortDescription: tt(
      "Оживляємо статичний дизайн: принципи руху, таймінг і власні анімовані ролики.",
      "Bringing static design to life: motion principles, timing, and your own animated clips.",
      "Оживляем статичный дизайн: принципы движения, тайминг и собственные анимированные ролики.",
    ),
    description: tt(
      "Курс про те, як дизайн починає рухатись. Розберемо 12 принципів анімації, таймінг, easing і композицію в After Effects - і зберемо портфоліо з коротких анімованих роликів для соцмереж, реклами й інтерфейсів.",
      "A course about design that moves. We'll cover the 12 principles of animation, timing, easing, and composition in After Effects - and build a portfolio of short animated clips for social media, ads, and interfaces.",
      "Курс о том, как дизайн начинает двигаться. Разберём 12 принципов анимации, тайминг, easing и композицию в After Effects - и соберём портфолио из коротких анимированных роликов для соцсетей, рекламы и интерфейсов.",
    ),
    price: 2800,
    rating: 4.9,
    studentsCount: 1870,
    instructor: {
      name: "Данило Штепа",
      title: tt("Motion Designer", "Motion Designer", "Motion Designer"),
      avatar: avatar("1519345182560-3f2917c472ef"),
      bio: tt(
        "Робив анімацію для брендів і музичних кліпів 7 років. Вважає, що гарна анімація - це фізика, а не набір ефектів.",
        "Has been animating for brands and music videos for 7 years. Believes good animation is physics, not a stack of effects.",
        "Делал анимацию для брендов и музыкальных клипов 7 лет. Считает, что хорошая анимация - это физика, а не набор эффектов.",
      ),
      studentsCount: 3400,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Принципи руху", "Principles of Motion", "Принципы движения"),
        lessons: [
          { id: "l1", title: tt("12 принципів анімації на практиці", "The 12 principles of animation in practice", "12 принципов анимации на практике"), durationMin: 20 },
          { id: "l2", title: tt("Таймінг і easing", "Timing and easing", "Тайминг и easing"), durationMin: 16 },
          { id: "l3", title: tt("Кривi швидкості в After Effects", "Speed graphs in After Effects", "Кривые скорости в After Effects"), durationMin: 18 },
        ],
      },
      {
        id: "m2",
        title: tt("Інструменти After Effects", "After Effects Tooling", "Инструменты After Effects"),
        lessons: [
          { id: "l4", title: tt("Композиції, шари і прекомпози", "Compositions, layers, and precomps", "Композиции, слои и прекомпозы"), durationMin: 17 },
          { id: "l5", title: tt("Маски і трек-мати", "Masks and track mattes", "Маски и трек-матты"), durationMin: 15 },
          { id: "l6", title: tt("Експресії без страху", "Expressions without the fear", "Экспрешны без страха"), durationMin: 19 },
        ],
      },
      {
        id: "m3",
        title: tt("Анімація UI та тексту", "UI and Text Animation", "Анимация UI и текста"),
        lessons: [
          { id: "l7", title: tt("Мікроанімації для інтерфейсів", "Micro-animations for interfaces", "Микроанимации для интерфейсов"), durationMin: 16 },
          { id: "l8", title: tt("Кінетична типографіка", "Kinetic typography", "Кинетическая типографика"), durationMin: 18 },
          { id: "l9", title: tt("Анімація логотипу", "Logo animation", "Анимация логотипа"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Портфоліо й рендер", "Portfolio and Rendering", "Портфолио и рендер"),
        lessons: [
          { id: "l10", title: tt("Звук і синхронізація з рухом", "Sound and syncing to motion", "Звук и синхронизация с движением"), durationMin: 15 },
          { id: "l11", title: tt("Налаштування рендеру під соцмережі", "Render settings for social media", "Настройка рендера под соцсети"), durationMin: 12 },
          { id: "l12", title: tt("Збираємо шоуріл", "Building a showreel", "Собираем шоурил"), durationMin: 17 },
        ],
      },
    ],
  },
  {
    id: "web-design-figma",
    slug: "web-design-figma",
    title: tt("Веб-дизайн у Figma", "Web Design in Figma", "Веб-дизайн в Figma"),
    category: "design",
    level: "beginner",
    cover: cover("1586717791821-3f44a563fa4c"),
    shortDescription: tt(
      "Від вайрфрейму до клікабельного прототипу - весь процес веб-дизайну в одному інструменті.",
      "From wireframe to clickable prototype - the whole web design process in one tool.",
      "От вайрфрейма до кликабельного прототипа - весь процесс веб-дизайна в одном инструменте.",
    ),
    description: tt(
      "Курс для тих, хто хоче навчитись проєктувати сайти, а не просто клацати в Figma. Пройдемо весь шлях: дослідження, вайрфрейми, сітки, компоненти, авто-лейаут і прототипування - і зберемо сайт, готовий до передачі розробнику.",
      "A course for those who want to learn to design websites, not just click around in Figma. We'll go through the whole path: research, wireframes, grids, components, auto-layout, and prototyping - and build a site ready to hand off to a developer.",
      "Курс для тех, кто хочет научиться проектировать сайты, а не просто кликать в Figma. Пройдём весь путь: исследование, вайрфреймы, сетки, компоненты, авто-лейаут и прототипирование - и соберём сайт, готовый к передаче разработчику.",
    ),
    price: 2300,
    rating: 4.8,
    studentsCount: 3920,
    instructor: {
      name: "Христина Романюк",
      title: tt("Product Designer", "Product Designer", "Product Designer"),
      avatar: avatar("1544725176-7c40e5a71c5e"),
      bio: tt(
        "4 роки проєктує вебсайти й продукти для стартапів. Любить Figma настільки, що веде про неї блог у вільний час.",
        "Has been designing websites and products for startups for 4 years. Loves Figma enough to blog about it in her free time.",
        "4 года проектирует вебсайты и продукты для стартапов. Любит Figma настолько, что ведёт о ней блог в свободное время.",
      ),
      studentsCount: 5800,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Дослідження і структура", "Research and Structure", "Исследование и структура"),
        lessons: [
          { id: "l1", title: tt("Аналіз конкурентів і референсів", "Competitor and reference analysis", "Анализ конкурентов и референсов"), durationMin: 15 },
          { id: "l2", title: tt("Інформаційна архітектура сайту", "Website information architecture", "Информационная архитектура сайта"), durationMin: 17 },
          { id: "l3", title: tt("Вайрфрейми низької точності", "Low-fidelity wireframes", "Вайрфреймы низкой точности"), durationMin: 14 },
        ],
      },
      {
        id: "m2",
        title: tt("Сітки та компоненти", "Grids and Components", "Сетки и компоненты"),
        lessons: [
          { id: "l4", title: tt("Сітки та відступи в Figma", "Grids and spacing in Figma", "Сетки и отступы в Figma"), durationMin: 16 },
          { id: "l5", title: tt("Компоненти й варіанти", "Components and variants", "Компоненты и варианты"), durationMin: 19 },
          { id: "l6", title: tt("Авто-лейаут без болю", "Auto-layout without pain", "Авто-лейаут без боли"), durationMin: 18 },
        ],
      },
      {
        id: "m3",
        title: tt("Візуальний дизайн", "Visual Design", "Визуальный дизайн"),
        lessons: [
          { id: "l7", title: tt("Типографіка для вебу", "Typography for the web", "Типографика для веба"), durationMin: 15 },
          { id: "l8", title: tt("Кольір і контраст", "Color and contrast", "Цвет и контраст"), durationMin: 13 },
          { id: "l9", title: tt("Ілюстрації й іконки", "Illustrations and icons", "Иллюстрации и иконки"), durationMin: 12 },
        ],
      },
      {
        id: "m4",
        title: tt("Прототип і передача розробнику", "Prototype and Developer Handoff", "Прототип и передача разработчику"),
        lessons: [
          { id: "l10", title: tt("Клікабельний прототип", "Clickable prototype", "Кликабельный прототип"), durationMin: 17 },
          { id: "l11", title: tt("Адаптивність під мобільні екрани", "Responsiveness for mobile screens", "Адаптивность под мобильные экраны"), durationMin: 16 },
          { id: "l12", title: tt("Специфікації для розробника", "Developer specs", "Спецификации для разработчика"), durationMin: 11 },
        ],
      },
    ],
  },
  {
    id: "sql-databases",
    slug: "sql-databases",
    title: tt("SQL та бази даних", "SQL and Databases", "SQL и базы данных"),
    category: "data",
    level: "beginner",
    cover: cover("1544197150-b99a580bb7a8"),
    shortDescription: tt(
      "Запити, які реально працюють на реальних даних - від SELECT до складних JOIN.",
      "Queries that actually work on real data - from SELECT to complex JOINs.",
      "Запросы, которые реально работают на реальных данных - от SELECT до сложных JOIN.",
    ),
    description: tt(
      "Курс для тих, хто хоче впевнено читати й писати SQL. Розберемо реляційну модель, проєктування таблиць, JOIN-и всіх видів, індекси й оптимізацію - на реальній базі даних, а не на трьох рядках з підручника.",
      "A course for those who want to confidently read and write SQL. We'll cover the relational model, table design, every kind of JOIN, indexes, and optimization - on a real database, not three rows from a textbook.",
      "Курс для тех, кто хочет уверенно читать и писать SQL. Разберём реляционную модель, проектирование таблиц, JOIN-ы всех видов, индексы и оптимизацию - на реальной базе данных, а не на трёх строчках из учебника.",
    ),
    price: 2100,
    rating: 4.7,
    studentsCount: 4560,
    instructor: {
      name: "Роман Ткаченко",
      title: tt("Database Architect", "Database Architect", "Database Architect"),
      avatar: avatar("1552058544-f2b08422138a"),
      bio: tt(
        "10 років проєктує бази даних для фінтех-продуктів. Бачив достатньо повільних запитів, щоб знати, чому індекси - не магія.",
        "Has been designing databases for fintech products for 10 years. Has seen enough slow queries to know indexes aren't magic.",
        "10 лет проектирует базы данных для финтех-продуктов. Видел достаточно медленных запросов, чтобы знать, почему индексы - не магия.",
      ),
      studentsCount: 8700,
      coursesCount: 3,
    },
    modules: [
      {
        id: "m1",
        title: tt("Реляційна модель", "The Relational Model", "Реляционная модель"),
        lessons: [
          { id: "l1", title: tt("Таблиці, рядки і типи даних", "Tables, rows, and data types", "Таблицы, строки и типы данных"), durationMin: 14 },
          { id: "l2", title: tt("Первинні та зовнішні ключі", "Primary and foreign keys", "Первичные и внешние ключи"), durationMin: 15 },
          { id: "l3", title: tt("Нормалізація без зайвої теорії", "Normalization without the extra theory", "Нормализация без лишней теории"), durationMin: 17 },
        ],
      },
      {
        id: "m2",
        title: tt("Запити SELECT", "SELECT Queries", "Запросы SELECT"),
        lessons: [
          { id: "l4", title: tt("SELECT, WHERE і сортування", "SELECT, WHERE, and sorting", "SELECT, WHERE и сортировка"), durationMin: 16 },
          { id: "l5", title: tt("Агрегатні функції та GROUP BY", "Aggregate functions and GROUP BY", "Агрегатные функции и GROUP BY"), durationMin: 18 },
          { id: "l6", title: tt("Підзапити", "Subqueries", "Подзапросы"), durationMin: 15 },
        ],
      },
      {
        id: "m3",
        title: tt("JOIN-и та зв'язки", "JOINs and Relationships", "JOIN-ы и связи"),
        lessons: [
          { id: "l7", title: tt("INNER, LEFT і RIGHT JOIN", "INNER, LEFT, and RIGHT JOIN", "INNER, LEFT и RIGHT JOIN"), durationMin: 19 },
          { id: "l8", title: tt("Зв'язки многие-до-многих", "Many-to-many relationships", "Связи многие-ко-многим"), durationMin: 16 },
          { id: "l9", title: tt("Часті помилки в JOIN-ах", "Common JOIN mistakes", "Частые ошибки в JOIN-ах"), durationMin: 12 },
        ],
      },
      {
        id: "m4",
        title: tt("Продуктивність", "Performance", "Производительность"),
        lessons: [
          { id: "l10", title: tt("Як працюють індекси", "How indexes work", "Как работают индексы"), durationMin: 17 },
          { id: "l11", title: tt("Читаємо план виконання запиту", "Reading a query execution plan", "Читаем план выполнения запроса"), durationMin: 18 },
          { id: "l12", title: tt("Транзакції та цілісність даних", "Transactions and data integrity", "Транзакции и целостность данных"), durationMin: 14 },
        ],
      },
    ],
  },
  {
    id: "machine-learning-basics",
    slug: "machine-learning-basics",
    title: tt("Machine Learning з нуля", "Machine Learning from Scratch", "Machine Learning с нуля"),
    category: "data",
    level: "intermediate",
    cover: cover("1504639725590-34d0984388bd"),
    shortDescription: tt(
      "Як насправді працюють моделі, які всі обговорюють - без магії, з математикою в розумних дозах.",
      "How the models everyone talks about actually work - no magic, math in reasonable doses.",
      "Как на самом деле работают модели, которые все обсуждают - без магии, с математикой в разумных дозах.",
    ),
    description: tt(
      "Курс для тих, хто знає Python і хоче зрозуміти, що відбувається всередині ML-моделей. Розберемо регресію, класифікацію, дерева рішень і базові нейромережі - і навчимо модель на реальному датасеті від початку до кінця.",
      "A course for those who know Python and want to understand what happens inside ML models. We'll cover regression, classification, decision trees, and basic neural networks - and train a model on a real dataset from start to finish.",
      "Курс для тех, кто знает Python и хочет понять, что происходит внутри ML-моделей. Разберём регрессию, классификацию, деревья решений и базовые нейросети - и обучим модель на реальном датасете от начала до конца.",
    ),
    price: 3400,
    rating: 4.6,
    studentsCount: 2980,
    instructor: {
      name: "Вікторія Дяченко",
      title: tt("ML Engineer", "ML Engineer", "ML Engineer"),
      avatar: avatar("1534528741775-53994a69daeb"),
      bio: tt(
        "Будує ML-пайплайни для рекомендаційних систем вже 5 років. Пояснює складні речі так, щоб їх можна було переказати другові.",
        "Has been building ML pipelines for recommendation systems for 5 years. Explains complex things so you could retell them to a friend.",
        "Строит ML-пайплайны для рекомендательных систем уже 5 лет. Объясняет сложные вещи так, чтобы их можно было пересказать другу.",
      ),
      studentsCount: 4100,
      coursesCount: 1,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи машинного навчання", "Machine Learning Fundamentals", "Основы машинного обучения"),
        lessons: [
          { id: "l1", title: tt("Навчання з учителем проти без учителя", "Supervised vs unsupervised learning", "Обучение с учителем против без учителя"), durationMin: 16 },
          { id: "l2", title: tt("Підготовка й очищення даних", "Data preparation and cleaning", "Подготовка и очистка данных"), durationMin: 19 },
          { id: "l3", title: tt("Train/test split і чому це важливо", "Train/test split and why it matters", "Train/test split и почему это важно"), durationMin: 14 },
        ],
      },
      {
        id: "m2",
        title: tt("Регресія та класифікація", "Regression and Classification", "Регрессия и классификация"),
        lessons: [
          { id: "l4", title: tt("Лінійна регресія на практиці", "Linear regression in practice", "Линейная регрессия на практике"), durationMin: 18 },
          { id: "l5", title: tt("Логістична регресія для класифікації", "Logistic regression for classification", "Логистическая регрессия для классификации"), durationMin: 17 },
          { id: "l6", title: tt("Дерева рішень і random forest", "Decision trees and random forest", "Деревья решений и random forest"), durationMin: 20 },
        ],
      },
      {
        id: "m3",
        title: tt("Оцінка моделей", "Model Evaluation", "Оценка моделей"),
        lessons: [
          { id: "l7", title: tt("Метрики: точність, precision, recall", "Metrics: accuracy, precision, recall", "Метрики: точность, precision, recall"), durationMin: 16 },
          { id: "l8", title: tt("Перенавчання і як з ним боротись", "Overfitting and how to fight it", "Переобучение и как с ним бороться"), durationMin: 15 },
          { id: "l9", title: tt("Крос-валідація", "Cross-validation", "Кросс-валидация"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Нейромережі: перший погляд", "Neural Networks: A First Look", "Нейросети: первый взгляд"),
        lessons: [
          { id: "l10", title: tt("Як влаштований перцептрон", "How a perceptron works", "Как устроен перцептрон"), durationMin: 17 },
          { id: "l11", title: tt("Проста мережа на Keras", "A simple network in Keras", "Простая сеть на Keras"), durationMin: 22 },
          { id: "l12", title: tt("Куди рухатись у ML далі", "Where to go next in ML", "Куда двигаться в ML дальше"), durationMin: 11 },
        ],
      },
    ],
  },
  {
    id: "meta-ads-targeting",
    slug: "meta-ads-targeting",
    title: tt("Таргетована реклама в Meta", "Targeted Ads on Meta", "Таргетированная реклама в Meta"),
    category: "marketing",
    level: "beginner",
    cover: cover("1611926653458-09294b3142bf"),
    shortDescription: tt(
      "Запускаємо рекламу в Instagram і Facebook так, щоб вона окуповувалась, а не зливала бюджет.",
      "Launching Instagram and Facebook ads that pay for themselves instead of burning your budget.",
      "Запускаем рекламу в Instagram и Facebook так, чтобы она окупалась, а не сливала бюджет.",
    ),
    description: tt(
      "Курс для тих, хто хоче запускати рекламу самостійно, а не здогадуватись. Розберемо Ads Manager, структуру кампаній, аудиторії, креативи й аналітику - і запустимо реальну кампанію з відстеженням результату.",
      "A course for those who want to run ads themselves instead of guessing. We'll cover Ads Manager, campaign structure, audiences, creatives, and analytics - and launch a real campaign with tracked results.",
      "Курс для тех, кто хочет запускать рекламу самостоятельно, а не гадать. Разберём Ads Manager, структуру кампаний, аудитории, креативы и аналитику - и запустим реальную кампанию с отслеживанием результата.",
    ),
    price: 2200,
    rating: 4.7,
    studentsCount: 3150,
    instructor: {
      name: "Олена Кравець",
      title: tt("Performance Marketing Lead", "Performance Marketing Lead", "Performance Marketing Lead"),
      avatar: avatar("1489424731084-a5d8b219a5bb"),
      bio: tt(
        "Веде платну рекламу для брендів електронної комерції 6 років. Любить цифри більше, ніж креативи - бо цифри не брешуть.",
        "Has been running paid ads for e-commerce brands for 6 years. Likes numbers more than creatives - because numbers don't lie.",
        "Ведёт платную рекламу для брендов электронной коммерции 6 лет. Любит цифры больше, чем креативы - потому что цифры не врут.",
      ),
      studentsCount: 5200,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи Ads Manager", "Ads Manager Basics", "Основы Ads Manager"),
        lessons: [
          { id: "l1", title: tt("Структура кампанія-група-оголошення", "Campaign-adset-ad structure", "Структура кампания-группа-объявление"), durationMin: 15 },
          { id: "l2", title: tt("Піксель і подія конверсії", "The pixel and conversion events", "Пиксель и событие конверсии"), durationMin: 17 },
          { id: "l3", title: tt("Цілі кампанії: що обрати", "Campaign objectives: what to choose", "Цели кампании: что выбрать"), durationMin: 13 },
        ],
      },
      {
        id: "m2",
        title: tt("Аудиторії", "Audiences", "Аудитории"),
        lessons: [
          { id: "l4", title: tt("Аудиторії за інтересами й поведінкою", "Interest and behavior audiences", "Аудитории по интересам и поведению"), durationMin: 16 },
          { id: "l5", title: tt("Ремаркетинг: повертаємо тих, хто пішов", "Remarketing: bringing back who left", "Ремаркетинг: возвращаем тех, кто ушёл"), durationMin: 15 },
          { id: "l6", title: tt("Look-alike аудиторії", "Look-alike audiences", "Look-alike аудитории"), durationMin: 14 },
        ],
      },
      {
        id: "m3",
        title: tt("Креативи, що працюють", "Creatives That Work", "Креативы, которые работают"),
        lessons: [
          { id: "l7", title: tt("Формати оголошень і коли який обирати", "Ad formats and when to use each", "Форматы объявлений и когда какой выбирать"), durationMin: 16 },
          { id: "l8", title: tt("Тексти, що продають без крику", "Copy that sells without shouting", "Тексты, которые продают без крика"), durationMin: 14 },
          { id: "l9", title: tt("A/B тестування креативів", "A/B testing creatives", "A/B тестирование креативов"), durationMin: 17 },
        ],
      },
      {
        id: "m4",
        title: tt("Бюджет і аналітика", "Budget and Analytics", "Бюджет и аналитика"),
        lessons: [
          { id: "l10", title: tt("Розподіл бюджету між кампаніями", "Allocating budget across campaigns", "Распределение бюджета между кампаниями"), durationMin: 15 },
          { id: "l11", title: tt("Читаємо звіти: CTR, CPA, ROAS", "Reading reports: CTR, CPA, ROAS", "Читаем отчёты: CTR, CPA, ROAS"), durationMin: 18 },
          { id: "l12", title: tt("Коли зупиняти кампанію", "When to pause a campaign", "Когда останавливать кампанию"), durationMin: 12 },
        ],
      },
    ],
  },
  {
    id: "seo-website-promotion",
    slug: "seo-website-promotion",
    title: tt("SEO-просування сайтів", "SEO for Websites", "SEO-продвижение сайтов"),
    category: "marketing",
    level: "intermediate",
    cover: cover("1526628953301-3e589a6a8b74"),
    shortDescription: tt(
      "Органічний трафік без вигаданих хаків - технічне SEO, контент і посилання по-справжньому.",
      "Organic traffic without made-up hacks - technical SEO, content, and links done properly.",
      "Органический трафик без выдуманных хаков - техническое SEO, контент и ссылки по-настоящему.",
    ),
    description: tt(
      "Курс для власників сайтів і маркетологів, які втомились від суперечливих порад про SEO. Розберемо технічний аудит, семантичне ядро, оптимізацію контенту й посилальний профіль - на прикладі реального сайту, а не абстракцій.",
      "A course for website owners and marketers tired of contradictory SEO advice. We'll cover technical audits, keyword research, content optimization, and link profiles - using a real site, not abstractions.",
      "Курс для владельцев сайтов и маркетологов, уставших от противоречивых советов по SEO. Разберём технический аудит, семантическое ядро, оптимизацию контента и ссылочный профиль - на примере реального сайта, а не абстракций.",
    ),
    price: 2600,
    rating: 4.8,
    studentsCount: 2710,
    instructor: {
      name: "Богдан Місюра",
      title: tt("SEO Consultant", "SEO Consultant", "SEO Consultant"),
      avatar: avatar("1506794778202-cad84cf45f1d"),
      bio: tt(
        "Виводив сайти в топ Google 8 років - від локального бізнесу до великих e-commerce каталогів.",
        "Has been getting sites to the top of Google for 8 years - from local businesses to large e-commerce catalogs.",
        "Выводил сайты в топ Google 8 лет - от локального бизнеса до крупных e-commerce каталогов.",
      ),
      studentsCount: 4700,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Технічне SEO", "Technical SEO", "Техническое SEO"),
        lessons: [
          { id: "l1", title: tt("Як пошукові боти бачать сайт", "How search bots see your site", "Как поисковые боты видят сайт"), durationMin: 16 },
          { id: "l2", title: tt("Швидкість завантаження і Core Web Vitals", "Load speed and Core Web Vitals", "Скорость загрузки и Core Web Vitals"), durationMin: 18 },
          { id: "l3", title: tt("Структура URL і sitemap", "URL structure and sitemap", "Структура URL и sitemap"), durationMin: 13 },
        ],
      },
      {
        id: "m2",
        title: tt("Семантика й ключові слова", "Keywords and Search Intent", "Семантика и ключевые слова"),
        lessons: [
          { id: "l4", title: tt("Збір семантичного ядра", "Building a keyword list", "Сбор семантического ядра"), durationMin: 17 },
          { id: "l5", title: tt("Пошуковий намір: що насправді шукають", "Search intent: what people actually want", "Поисковое намерение: что реально ищут"), durationMin: 15 },
          { id: "l6", title: tt("Кластеризація сторінок під запити", "Clustering pages around queries", "Кластеризация страниц под запросы"), durationMin: 14 },
        ],
      },
      {
        id: "m3",
        title: tt("Оптимізація контенту", "Content Optimization", "Оптимизация контента"),
        lessons: [
          { id: "l7", title: tt("Title, description і заголовки", "Titles, descriptions, and headings", "Title, description и заголовки"), durationMin: 14 },
          { id: "l8", title: tt("Внутрішня перелінковка", "Internal linking", "Внутренняя перелинковка"), durationMin: 15 },
          { id: "l9", title: tt("E-E-A-T: чому Google довіряє сайту", "E-E-A-T: why Google trusts a site", "E-E-A-T: почему Google доверяет сайту"), durationMin: 16 },
        ],
      },
      {
        id: "m4",
        title: tt("Посилання та вимірювання", "Links and Measurement", "Ссылки и измерение"),
        lessons: [
          { id: "l10", title: tt("Природний посилальний профіль", "A natural link profile", "Естественный ссылочный профиль"), durationMin: 17 },
          { id: "l11", title: tt("Search Console: читаємо реальні дані", "Search Console: reading real data", "Search Console: читаем реальные данные"), durationMin: 18 },
          { id: "l12", title: tt("Звіт про прогрес для клієнта", "A progress report for the client", "Отчёт о прогрессе для клиента"), durationMin: 12 },
        ],
      },
    ],
  },
  {
    id: "business-english",
    slug: "business-english",
    title: tt("Ділова англійська", "Business English", "Деловой английский"),
    category: "language",
    level: "intermediate",
    cover: cover("1434030216411-0b793f4b4173"),
    shortDescription: tt(
      "Впевнено вести перемовини, писати листи й виступати англійською в робочому середовищі.",
      "Confidently negotiate, write emails, and present in English at work.",
      "Уверенно вести переговоры, писать письма и выступать по-английски в рабочей среде.",
    ),
    description: tt(
      "Курс для тих, хто вже говорить англійською, але губиться в діловому контексті. Розберемо перемовини, ділове листування, презентації та small talk - через реальні робочі ситуації, а не абстрактну граматику.",
      "A course for those who already speak English but get lost in a business context. We'll cover negotiations, business correspondence, presentations, and small talk - through real work situations, not abstract grammar.",
      "Курс для тех, кто уже говорит по-английски, но теряется в деловом контексте. Разберём переговоры, деловую переписку, презентации и small talk - через реальные рабочие ситуации, а не абстрактную грамматику.",
    ),
    price: 2500,
    rating: 4.9,
    studentsCount: 4320,
    instructor: {
      name: "Артем Поліщук",
      title: tt("Business English Coach", "Business English Coach", "Business English Coach"),
      avatar: avatar("1507003211169-0a1dd7228f2d"),
      bio: tt(
        "Викладає ділову англійську для команд і топменеджменту 9 років. Раніше сам вів перемовини з іноземними партнерами - знає, де саме губляться слова.",
        "Has been teaching business English to teams and executives for 9 years. Used to negotiate with foreign partners himself - knows exactly where the words get lost.",
        "Преподаёт деловой английский для команд и топ-менеджмента 9 лет. Раньше сам вёл переговоры с иностранными партнёрами - знает, где именно теряются слова.",
      ),
      studentsCount: 7300,
      coursesCount: 3,
    },
    modules: [
      {
        id: "m1",
        title: tt("Ділове листування", "Business Correspondence", "Деловая переписка"),
        lessons: [
          { id: "l1", title: tt("Структура ділового листа", "The structure of a business email", "Структура делового письма"), durationMin: 14 },
          { id: "l2", title: tt("Ввічливі формулювання відмови", "Polite ways to say no", "Вежливые формулировки отказа"), durationMin: 13 },
          { id: "l3", title: tt("Follow-up листи, які працюють", "Follow-up emails that work", "Follow-up письма, которые работают"), durationMin: 12 },
        ],
      },
      {
        id: "m2",
        title: tt("Перемовини", "Negotiations", "Переговоры"),
        lessons: [
          { id: "l4", title: tt("Фрази для торгу й компромісу", "Phrases for bargaining and compromise", "Фразы для торга и компромисса"), durationMin: 17 },
          { id: "l5", title: tt("Як не погодитись ввічливо", "How to disagree politely", "Как не согласиться вежливо"), durationMin: 15 },
          { id: "l6", title: tt("Закриваємо перемовини домовленістю", "Closing negotiations with an agreement", "Закрываем переговоры договорённостью"), durationMin: 14 },
        ],
      },
      {
        id: "m3",
        title: tt("Презентації", "Presentations", "Презентации"),
        lessons: [
          { id: "l7", title: tt("Структура сильної презентації", "The structure of a strong presentation", "Структура сильной презентации"), durationMin: 16 },
          { id: "l8", title: tt("Відповіді на складні запитання", "Answering tough questions", "Ответы на сложные вопросы"), durationMin: 15 },
          { id: "l9", title: tt("Мова тіла і темп мовлення", "Body language and pacing", "Язык тела и темп речи"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Неформальне спілкування", "Informal Communication", "Неформальное общение"),
        lessons: [
          { id: "l10", title: tt("Small talk, який не звучить фальшиво", "Small talk that doesn't sound fake", "Small talk, который не звучит фальшиво"), durationMin: 12 },
          { id: "l11", title: tt("Нетворкінг англійською", "Networking in English", "Нетворкинг на английском"), durationMin: 14 },
          { id: "l12", title: tt("Культурні нюанси в спілкуванні", "Cultural nuances in communication", "Культурные нюансы в общении"), durationMin: 15 },
        ],
      },
    ],
  },
  {
    id: "german-basics",
    slug: "german-basics",
    title: tt("Німецька для початківців", "German for Beginners", "Немецкий для начинающих"),
    category: "language",
    level: "beginner",
    cover: cover("1546410531-bb4caa6b424d"),
    shortDescription: tt(
      "Від нуля до впевненого A2 - говорити, розуміти і не боятись німецької граматики.",
      "From zero to confident A2 - speaking, understanding, and not fearing German grammar.",
      "От нуля до уверенного A2 - говорить, понимать и не бояться немецкой грамматики.",
    ),
    description: tt(
      "Курс для тих, хто починає німецьку з нуля - для переїзду, роботи чи навчання. Розберемо базову граматику, побудову речень і живі діалоги для щоденних ситуацій, щоб заговорити якомога швидше, а не лише читати підручник.",
      "A course for those starting German from zero - for relocation, work, or study. We'll cover basic grammar, sentence structure, and live dialogues for everyday situations, so you start speaking as fast as possible instead of just reading a textbook.",
      "Курс для тех, кто начинает немецкий с нуля - для переезда, работы или учёбы. Разберём базовую грамматику, построение предложений и живые диалоги для повседневных ситуаций, чтобы заговорить как можно быстрее, а не просто читать учебник.",
    ),
    price: 2000,
    rating: 4.8,
    studentsCount: 3080,
    instructor: {
      name: "Марта Гончарук",
      title: tt("German Language Teacher", "German Language Teacher", "German Language Teacher"),
      avatar: avatar("1573496359142-b8d87734a5a2"),
      bio: tt(
        "Викладає німецьку 7 років, з них 3 - для студентів, що готуються до переїзду в Німеччину чи Австрію.",
        "Has been teaching German for 7 years, 3 of them for students preparing to relocate to Germany or Austria.",
        "Преподаёт немецкий 7 лет, из них 3 - для студентов, готовящихся к переезду в Германию или Австрию.",
      ),
      studentsCount: 4900,
      coursesCount: 1,
    },
    modules: [
      {
        id: "m1",
        title: tt("Перші кроки", "First Steps", "Первые шаги"),
        lessons: [
          { id: "l1", title: tt("Алфавіт і вимова", "Alphabet and pronunciation", "Алфавит и произношение"), durationMin: 13 },
          { id: "l2", title: tt("Привітання і базові фрази", "Greetings and basic phrases", "Приветствия и базовые фразы"), durationMin: 12 },
          { id: "l3", title: tt("Артиклі der, die, das", "The articles der, die, das", "Артикли der, die, das"), durationMin: 15 },
        ],
      },
      {
        id: "m2",
        title: tt("Базова граматика", "Basic Grammar", "Базовая грамматика"),
        lessons: [
          { id: "l4", title: tt("Дієслова теперішнього часу", "Present tense verbs", "Глаголы настоящего времени"), durationMin: 16 },
          { id: "l5", title: tt("Порядок слів у реченні", "Word order in a sentence", "Порядок слов в предложении"), durationMin: 15 },
          { id: "l6", title: tt("Заперечення nicht і kein", "Negation with nicht and kein", "Отрицание nicht и kein"), durationMin: 13 },
        ],
      },
      {
        id: "m3",
        title: tt("Щоденні ситуації", "Everyday Situations", "Повседневные ситуации"),
        lessons: [
          { id: "l7", title: tt("У магазині й на пошті", "At the store and the post office", "В магазине и на почте"), durationMin: 14 },
          { id: "l8", title: tt("Замовлення в кафе", "Ordering at a café", "Заказ в кафе"), durationMin: 12 },
          { id: "l9", title: tt("Питання напрямку і транспорт", "Asking for directions and transport", "Вопросы направления и транспорт"), durationMin: 13 },
        ],
      },
      {
        id: "m4",
        title: tt("Впевнений A2", "Confident A2", "Уверенный A2"),
        lessons: [
          { id: "l10", title: tt("Розповідь про себе й роботу", "Talking about yourself and your job", "Рассказ о себе и работе"), durationMin: 15 },
          { id: "l11", title: tt("Минулий час Perfekt", "Past tense with Perfekt", "Прошедшее время Perfekt"), durationMin: 17 },
          { id: "l12", title: tt("Діалоги для реальних ситуацій", "Dialogues for real situations", "Диалоги для реальных ситуаций"), durationMin: 16 },
        ],
      },
    ],
  },
  {
    id: "time-management-focus",
    slug: "time-management-focus",
    title: tt("Тайм-менеджмент та фокус", "Time Management and Focus", "Тайм-менеджмент и фокус"),
    category: "productivity",
    level: "beginner",
    cover: cover("1506784983877-45594efa4cbe"),
    shortDescription: tt(
      "Керувати часом і увагою так, щоб встигати важливе, а не тільки термінове.",
      "Manage your time and attention so you get to what matters, not just what's urgent.",
      "Управлять временем и вниманием так, чтобы успевать важное, а не только срочное.",
    ),
    description: tt(
      "Курс для тих, хто тоне в задачах і сповіщеннях. Розберемо пріоритизацію, боротьбу з прокрастинацією, глибоку роботу й планування тижня - і зберемо особисту систему, яка реально приживається, а не забувається через тиждень.",
      "A course for those drowning in tasks and notifications. We'll cover prioritization, fighting procrastination, deep work, and weekly planning - and build a personal system that actually sticks instead of being forgotten in a week.",
      "Курс для тех, кто тонет в задачах и уведомлениях. Разберём приоритизацию, борьбу с прокрастинацией, глубокую работу и планирование недели - и соберём личную систему, которая реально приживается, а не забывается через неделю.",
    ),
    price: 1800,
    rating: 4.6,
    studentsCount: 5240,
    instructor: {
      name: "Сергій Ільєнко",
      title: tt("Productivity Coach", "Productivity Coach", "Productivity Coach"),
      avatar: avatar("1560250097-0b93528c311a"),
      bio: tt(
        "Консультує керівників з тайм-менеджменту 6 років. Переконаний, що продуктивність - це не більше зусиль, а менше зайвого.",
        "Has been consulting executives on time management for 6 years. Convinced that productivity isn't about more effort, but less clutter.",
        "Консультирует руководителей по тайм-менеджменту 6 лет. Убеждён, что продуктивность - это не больше усилий, а меньше лишнего.",
      ),
      studentsCount: 6900,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Пріоритизація", "Prioritization", "Приоритизация"),
        lessons: [
          { id: "l1", title: tt("Матриця Ейзенхауера на практиці", "The Eisenhower Matrix in practice", "Матрица Эйзенхауэра на практике"), durationMin: 14 },
          { id: "l2", title: tt("Як казати 'ні' без провини", "How to say no without guilt", "Как говорить 'нет' без вины"), durationMin: 12 },
          { id: "l3", title: tt("Правило одного головного завдання", "The one main task rule", "Правило одной главной задачи"), durationMin: 11 },
        ],
      },
      {
        id: "m2",
        title: tt("Боротьба з прокрастинацією", "Fighting Procrastination", "Борьба с прокрастинацией"),
        lessons: [
          { id: "l4", title: tt("Чому ми відкладаємо: справжні причини", "Why we procrastinate: the real reasons", "Почему мы откладываем: настоящие причины"), durationMin: 15 },
          { id: "l5", title: tt("Правило двох хвилин", "The two-minute rule", "Правило двух минут"), durationMin: 10 },
          { id: "l6", title: tt("Дроблення великих задач", "Breaking big tasks into pieces", "Дробление больших задач"), durationMin: 13 },
        ],
      },
      {
        id: "m3",
        title: tt("Глибока робота", "Deep Work", "Глубокая работа"),
        lessons: [
          { id: "l7", title: tt("Що таке глибока робота і навіщо вона", "What deep work is and why it matters", "Что такое глубокая работа и зачем она"), durationMin: 16 },
          { id: "l8", title: tt("Керування сповіщеннями і відволіканнями", "Managing notifications and distractions", "Управление уведомлениями и отвлечениями"), durationMin: 14 },
          { id: "l9", title: tt("Техніка Pomodoro без фанатизму", "The Pomodoro technique without fanaticism", "Техника Pomodoro без фанатизма"), durationMin: 12 },
        ],
      },
      {
        id: "m4",
        title: tt("Особиста система", "Your Personal System", "Личная система"),
        lessons: [
          { id: "l10", title: tt("Планування тижня за 20 хвилин", "Planning your week in 20 minutes", "Планирование недели за 20 минут"), durationMin: 15 },
          { id: "l11", title: tt("Щотижневий огляд і корекція", "Weekly review and adjustment", "Еженедельный обзор и корректировка"), durationMin: 13 },
          { id: "l12", title: tt("Як зробити систему звичкою", "Turning a system into a habit", "Как сделать систему привычкой"), durationMin: 12 },
        ],
      },
    ],
  },
  {
    id: "notion-productivity",
    slug: "notion-productivity",
    title: tt("Notion для продуктивності", "Notion for Productivity", "Notion для продуктивности"),
    category: "productivity",
    level: "beginner",
    cover: cover("1499750310107-5fef28a66643"),
    shortDescription: tt(
      "Будуємо особисту систему задач, проєктів і нотаток в одному робочому просторі.",
      "Build a personal system for tasks, projects, and notes in one workspace.",
      "Строим личную систему задач, проектов и заметок в одном рабочем пространстве.",
    ),
    description: tt(
      "Курс для тих, у кого задачі розкидані по десяти застосунках. Розберемо бази даних, шаблони, зв'язки між сторінками і автоматизацію в Notion - і зберемо особисту систему, яку реально хочеться відкривати щодня.",
      "A course for those whose tasks are scattered across ten apps. We'll cover databases, templates, relations between pages, and automation in Notion - and build a personal system you'll actually want to open every day.",
      "Курс для тех, у кого задачи разбросаны по десяти приложениям. Разберём базы данных, шаблоны, связи между страницами и автоматизацию в Notion - и соберём личную систему, которую реально хочется открывать каждый день.",
    ),
    price: 1700,
    rating: 4.7,
    studentsCount: 3960,
    instructor: {
      name: "Ірина Максимів",
      title: tt("Productivity Consultant", "Productivity Consultant", "Productivity Consultant"),
      avatar: avatar("1580489944761-15a19d654956"),
      bio: tt(
        "Допомагає командам і фрілансерам будувати робочі простори в Notion вже 4 роки. Має шаблон майже на кожен випадок життя.",
        "Has been helping teams and freelancers build Notion workspaces for 4 years. Has a template for almost every occasion.",
        "Помогает командам и фрилансерам строить рабочие пространства в Notion уже 4 года. Имеет шаблон почти на каждый случай жизни.",
      ),
      studentsCount: 5100,
      coursesCount: 2,
    },
    modules: [
      {
        id: "m1",
        title: tt("Основи робочого простору", "Workspace Basics", "Основы рабочего пространства"),
        lessons: [
          { id: "l1", title: tt("Сторінки, блоки і вкладеність", "Pages, blocks, and nesting", "Страницы, блоки и вложенность"), durationMin: 13 },
          { id: "l2", title: tt("Бази даних: таблиця, дошка, календар", "Databases: table, board, calendar", "Базы данных: таблица, доска, календарь"), durationMin: 16 },
          { id: "l3", title: tt("Властивості й типи полів", "Properties and field types", "Свойства и типы полей"), durationMin: 14 },
        ],
      },
      {
        id: "m2",
        title: tt("Система задач", "Task System", "Система задач"),
        lessons: [
          { id: "l4", title: tt("Трекер задач з пріоритетами", "A task tracker with priorities", "Трекер задач с приоритетами"), durationMin: 15 },
          { id: "l5", title: tt("Представлення: фільтри й сортування", "Views: filters and sorting", "Представления: фильтры и сортировка"), durationMin: 14 },
          { id: "l6", title: tt("Повторювані задачі й нагадування", "Recurring tasks and reminders", "Повторяющиеся задачи и напоминания"), durationMin: 12 },
        ],
      },
      {
        id: "m3",
        title: tt("Зв'язки і проєкти", "Relations and Projects", "Связи и проекты"),
        lessons: [
          { id: "l7", title: tt("Зв'язки між базами даних", "Relations between databases", "Связи между базами данных"), durationMin: 17 },
          { id: "l8", title: tt("Rollup для зведеної інформації", "Rollups for summary data", "Rollup для сводной информации"), durationMin: 15 },
          { id: "l9", title: tt("Трекер проєктів з дедлайнами", "A project tracker with deadlines", "Трекер проектов с дедлайнами"), durationMin: 14 },
        ],
      },
      {
        id: "m4",
        title: tt("Шаблони й автоматизація", "Templates and Automation", "Шаблоны и автоматизация"),
        lessons: [
          { id: "l10", title: tt("Шаблони, які економлять час", "Templates that save time", "Шаблоны, которые экономят время"), durationMin: 13 },
          { id: "l11", title: tt("Базова автоматизація дій", "Basic action automation", "Базовая автоматизация действий"), durationMin: 15 },
          { id: "l12", title: tt("Особистий дашборд на головній сторінці", "A personal dashboard on the home page", "Личный дашборд на главной странице"), durationMin: 16 },
        ],
      },
    ],
  },
];

export const categories: CategoryId[] = [
  "programming",
  "design",
  "data",
  "marketing",
  "language",
  "productivity",
];
