import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/ai-arena", "ru");

export default function ArenaPage() {
  return <FocusPage locale="ru" label="Образовательная и соревновательная платформа" title="Arvexo AI Arena" lead="Среда для школьников и начинающих специалистов: обучение, сложные задачи, проекты и подтверждённое портфолио навыков." statement="Обучение, соревнования и практическая работа в одной траектории развития." sections={[
    { title: "Учиться", text: "Структурированные треки по AI и математике объединяют теорию, задачи и быструю обратную связь." },
    { title: "Соревноваться", text: "Турниры и нестандартные задачи делают прогресс видимым и показывают зоны для углублённого обучения." },
    { title: "Подтверждать навыки", text: "Лаборатории, проекты и проверенные результаты формируют портфолио реальных достижений." }
  ]} primary={{ label: "Открыть Arvexo Arena", href: "https://arena.arvexo.ru", external: true }} secondary={{ label: "Репозиторий проекта", href: "https://github.com/alexeydoborin/Arvexo-AI-Arena", external: true }} closingLabel="Хотите привести AI Arena своим студентам?" closingCta="Обсудить сотрудничество" />;
}
