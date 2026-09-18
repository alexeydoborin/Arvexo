import { FocusPage } from "@/components/FocusPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("/radar", "en");

export default function RadarPage() {
  return <FocusPage locale="en" label="Enterprise AI effectiveness" title="Arvexo Radar" lead="A platform for understanding how AI is used across an organization, what value it creates and which practices deserve to scale." statement="Content-free telemetry. Organization-level learning. No employee surveillance." sections={[
    { title: "Visibility", text: "See adoption patterns and AI-enabled workflows across teams without collecting prompt content." },
    { title: "Business value", text: "Connect usage to TCO, time saved, FTE-equivalent, money saved, ROI and payback." },
    { title: "Knowledge sharing", text: "Help teams discover, review, publish and adopt practices that already work inside the organization." }
  ]} primary={{ label: "Open Radar", href: "https://radar.arvexo.ru", external: true }} secondary={{ label: "View repository", href: "https://github.com/alexeydoborin/Arvexo-Radar", external: true }} closingLabel="Want to pilot Radar in your organization?" closingCta="Discuss a pilot" />;
}
