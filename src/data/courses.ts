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
];

export const categories: CategoryId[] = [
  "programming",
  "design",
  "data",
  "marketing",
  "language",
  "productivity",
];
