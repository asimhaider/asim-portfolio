import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const groups = [
  {
    title: "Product & Business",
    note: "Primary focus",
    primary: true,
    skills: [
      "Product Discovery",
      "Product Requirements",
      "PRD",
      "User Stories",
      "Acceptance Criteria",
      "Feature Prioritisation",
      "Agile / Scrum",
      "Stakeholder Management",
      "Business Analysis",
      "Process Analysis",
    ],
  },
  {
    title: "Analytics",
    note: "Primary focus",
    primary: true,
    skills: ["SQL", "KPI Design", "Funnel Analysis", "AARRR", "Product Metrics", "Data Analysis"],
  },
  {
    title: "Development",
    note: "Technical foundation",
    primary: false,
    skills: ["React", "JavaScript", "Node.js", "Express", "REST APIs", "MongoDB", "Git", "Python"],
  },
  {
    title: "Tools",
    note: "Day-to-day",
    primary: false,
    // TODO(Asim): keep only the tools you've actually used.
    skills: ["Jira", "GitHub", "Figma", "Vercel", "Render"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      tone="muted"
      eyebrow="Skills"
      title="Skills & tools"
      intro="Grouped by how I'd use them in a product or analyst role. No percentage bars, because they don't tell you much."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <Reveal
            key={g.title}
            delay={i * 60}
            className={`rounded-2xl border-2 p-6 sm:p-8 ${g.primary ? "border-ink bg-white shadow-hard-sm" : "border-neutral-200 bg-white"}`}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-bold">{g.title}</h3>
              <span
                className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${
                  g.primary ? "bg-brand text-ink" : "bg-neutral-100 text-neutral-500"
                }`}
              >
                {g.note}
              </span>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li
                  key={s}
                  className={`rounded-md px-2.5 py-1 text-sm font-medium ${
                    g.primary ? "bg-ink text-white" : "border border-neutral-200 bg-neutral-50 text-neutral-700"
                  }`}
                >
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
