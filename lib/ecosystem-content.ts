export type EcosystemLocale = "en" | "ru";

export const ecosystemContent = {
  en: {
    navigation: [
      ["Radar", "/radar"],
      ["AI Arena", "/ai-arena"],
      ["Research", "/research"],
      ["Consulting", "/consulting"]
    ],
    menu: "Menu",
    close: "Close menu",
    contact: "Start a conversation",
    hero: {
      label: "Independent AI studio",
      title: "AI systems for decisions, learning and measurable progress.",
      lead: "Arvexo develops focused AI products, conducts independent research and helps teams turn AI experiments into working systems.",
      primary: "Explore the work",
      secondary: "About Arvexo"
    },
    thesis: {
      label: "The thesis",
      title: "Useful AI should make complex work more visible, more teachable and easier to improve.",
      text: "We build around evidence, clear feedback loops and real human workflows. No inflated metrics and no technology for its own sake."
    },
    projects: {
      label: "Flagship projects",
      title: "Two products. One direction.",
      lead: "From understanding AI effectiveness inside an organization to developing the people who will build with it next.",
      radar: {
        index: "01 / Enterprise intelligence",
        title: "Arvexo Radar",
        description: "An enterprise AI effectiveness and knowledge platform for leaders who need to understand adoption, business value and the practices worth scaling.",
        points: ["Visibility across AI use", "TCO, ROI and time saved", "Knowledge sharing without prompt surveillance"],
        cta: "Open Radar",
        github: "View on GitHub"
      },
      arena: {
        index: "02 / Learning infrastructure",
        title: "Arvexo AI Arena",
        description: "A learning and competition platform where students and early-career specialists can study, solve non-standard problems and build a verified skills portfolio.",
        points: ["Learning tracks and tasks", "Tournaments and error analysis", "Projects, labs and verified progress"],
        cta: "Open AI Arena",
        github: "View on GitHub"
      }
    },
    ui: {
      radarHead: "AI effectiveness", radarPeriod: "Q4",
      radarKpis: [{ label: "Active users", value: "1,284", delta: "+18% QoQ" }, { label: "Hours saved / mo", value: "3,470", delta: "+9%" }, { label: "Adoption ROI", value: "2.4×", delta: "target 2.0×" }],
      radarTeamsHead: "Adoption by team", radarTeams: [{ name: "Engineering", width: "86%", value: "86%" }, { name: "Support", width: "71%", value: "71%" }, { name: "Analytics", width: "58%", value: "58%" }, { name: "Sales", width: "34%", value: "34%" }],
      arenaTrack: "Track · AI engineering", arenaMeta: "Task 07 / 12", arenaTaskTitle: "Evaluate model answers without a reference dataset", arenaTaskText: "Define your grading criteria, apply them to 50 answers and explain where your method disagrees with expert judgement.", arenaTags: ["Evaluation", "Data handling", "Reasoning"], arenaProgressLabel: "Track progress", arenaProgressValue: "64%", arenaStats: [{ label: "Participants", value: "312" }, { label: "Submissions", value: "1,940" }, { label: "Reviews", value: "48" }]
    },
    capabilities: {
      label: "Beyond products",
      researchTitle: "Independent research",
      researchText: "Applied research at the intersection of AI products, evaluation, knowledge systems and human-centered interfaces.",
      researchCta: "Research agenda",
      f1Title: "F1 Race Metaverse",
      f1Text: "A digital racing world that combines competition, strategy, community and AI-driven race experiences.",
      f1Status: "Concept in development"
    },
    founder: {
      label: "Founder",
      title: "Alexey Doborin",
      text: "Founder and CEO of Arvexo. Early-career AI researcher focused on building useful products and publishing the thinking behind them.",
      cta: "Founder profile"
    },
    closing: {
      title: "Building something that should work in the real world?",
      text: "Let’s discuss the product, research question or AI system you are trying to move forward.",
      cta: "Contact Arvexo"
    },
    footer: "AI products and independent research.",
    footerFounder: "Alexey Doborin, CEO",
    footerContacts: "Contacts"
  },
  ru: {
    navigation: [
      ["Radar", "/radar"],
      ["AI Arena", "/ai-arena"],
      ["Исследования", "/research"],
      ["Консалтинг", "/consulting"]
    ],
    menu: "Меню",
    close: "Закрыть меню",
    contact: "Обсудить задачу",
    hero: {
      label: "Независимая AI-студия",
      title: "AI-системы для решений, обучения и измеримого прогресса.",
      lead: "Arvexo развивает собственные AI-продукты, проводит независимые исследования и помогает командам превращать эксперименты с AI в работающие системы.",
      primary: "Смотреть проекты",
      secondary: "Об Arvexo"
    },
    thesis: {
      label: "Наш подход",
      title: "Полезный AI делает сложную работу прозрачнее, обучение эффективнее, а улучшения системными.",
      text: "Мы опираемся на проверяемые данные, понятную обратную связь и реальные сценарии людей. Без раздутых метрик и технологий ради технологий."
    },
    projects: {
      label: "Флагманские проекты",
      title: "Два продукта. Одно направление.",
      lead: "От понимания эффективности AI внутри организации до развития людей, которые будут создавать с его помощью новые решения.",
      radar: {
        index: "01 / Enterprise intelligence",
        title: "Arvexo Radar",
        description: "Корпоративная платформа эффективности AI и обмена знаниями. Помогает руководителям видеть внедрение, оценивать бизнес-ценность и масштабировать лучшие практики.",
        points: ["Прозрачность использования AI", "TCO, ROI и экономия времени", "Обмен знаниями без слежения за промптами"],
        cta: "Открыть Radar",
        github: "Код на GitHub"
      },
      arena: {
        index: "02 / Learning infrastructure",
        title: "Arvexo AI Arena",
        description: "Образовательная и соревновательная платформа, где школьники и начинающие специалисты учатся, решают нестандартные задачи и формируют подтверждённое портфолио навыков.",
        points: ["Учебные треки и задачи", "Турниры и разбор ошибок", "Проекты, лаборатории и подтверждённый прогресс"],
        cta: "Открыть AI Arena",
        github: "Код на GitHub"
      }
    },
    ui: {
      radarHead: "Эффективность AI", radarPeriod: "IV квартал",
      radarKpis: [{ label: "Активных пользователей", value: "1 284", delta: "+18% к кв." }, { label: "Сэкономлено часов / мес.", value: "3 470", delta: "+9%" }, { label: "ROI внедрения", value: "2,4×", delta: "цель 2,0×" }],
      radarTeamsHead: "Внедрение по командам", radarTeams: [{ name: "Разработка", width: "86%", value: "86%" }, { name: "Поддержка", width: "71%", value: "71%" }, { name: "Аналитика", width: "58%", value: "58%" }, { name: "Продажи", width: "34%", value: "34%" }],
      arenaTrack: "Трек · AI-инженерия", arenaMeta: "Задача 07 / 12", arenaTaskTitle: "Оценить качество ответов модели без эталонных данных", arenaTaskText: "Соберите критерии оценки, проверьте их на 50 ответах и объясните, где ваш метод расходится с мнением экспертов.", arenaTags: ["Оценка качества", "Работа с данными", "Аргументация"], arenaProgressLabel: "Прогресс трека", arenaProgressValue: "64%", arenaStats: [{ label: "Участников", value: "312" }, { label: "Решений", value: "1 940" }, { label: "Разборов", value: "48" }]
    },
    capabilities: {
      label: "За пределами продуктов",
      researchTitle: "Собственные исследования",
      researchText: "Прикладные исследования на пересечении AI-продуктов, оценки качества, систем знаний и человекоцентричных интерфейсов.",
      researchCta: "Направления исследований",
      f1Title: "F1 Race Metaverse",
      f1Text: "Цифровой гоночный мир, объединяющий соревнования, стратегию, сообщество и AI-сценарии заездов.",
      f1Status: "Концепция в разработке"
    },
    founder: {
      label: "Основатель",
      title: "Алексей Доборин",
      text: "Основатель и CEO Arvexo. Начинающий исследователь в области AI, который создаёт полезные продукты и публикует стоящие за ними идеи.",
      cta: "Профиль основателя"
    },
    closing: {
      title: "Создаёте систему, которая должна работать в реальном мире?",
      text: "Обсудим продукт, исследовательский вопрос или AI-систему, которую вы хотите развить.",
      cta: "Связаться с Arvexo"
    },
    footer: "AI-продукты и независимые исследования.",
    footerFounder: "Алексей Доборин, CEO",
    footerContacts: "Контакты"
  }
} as const;
