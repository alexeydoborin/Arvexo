import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/ai-arena", "en");

export default function ArenaPage() {
  return <FocusPage locale="en" label="Learning and competition platform" title="Arvexo AI Arena" lead="A place for students and early-career specialists to learn, solve challenging problems, work on projects and build a verified skills portfolio." statement="Learning, competition and practical work in one continuous progression." sections={[
    { title: "Learn", text: "Structured AI and mathematics tracks combine theory, tasks and immediate feedback." },
    { title: "Compete", text: "Tournaments and non-standard challenges make progress visible and reveal where deeper learning is needed." },
    { title: "Build evidence", text: "Labs, projects and verified results turn activity into a portfolio of demonstrated skills." }
  ]} primary={{ label: "Open Arvexo Arena", href: "https://arena.arvexo.ru", external: true }} secondary={{ label: "View repository", href: "https://github.com/alexeydoborin/Arvexo-AI-Arena", external: true }} closingLabel="Want to bring AI Arena to your students?" closingCta="Discuss collaboration" />;
}
