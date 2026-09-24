import { ChartColumn, ClipboardList, CodeXml, Compass, Workflow, type LucideIcon } from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

interface Area {
  icon: LucideIcon;
  title: string;
  summary: string;
  items: string[];
}

const areas: Area[] = [
  {
    icon: Compass,
    title: "Product Management",
    summary: "Figuring out what to build and why.",
    items: ["Product discovery", "User problem identification", "PRDs", "Feature prioritisation", "User stories", "Agile / Scrum", "Product metrics"],
  },
  {
    icon: ChartColumn,
    title: "Product Analytics",
    summary: "Checking whether it worked.",
    items: ["KPI definition", "Funnel analysis", "AARRR framework", "SQL", "Data-driven decisions", "Experimentation"],
  },
  {
    icon: ClipboardList,
    title: "Business Analysis",
    summary: "Turning needs into clear requirements.",
    items: ["Requirements gathering", "Process analysis", "Functional requirements", "Stakeholder analysis", "Problem decomposition", "Acceptance criteria"],
  },
  {
    icon: CodeXml,
    title: "Technical Understanding",
    summary: "Knowing how it gets built.",
    items: ["React", "JavaScript", "Node.js", "REST APIs", "MongoDB", "Git", "Python", "SQL"],
  },
  {
    icon: Workflow,
    title: "Project Management",
    summary: "Getting it delivered.",
    items: ["Agile methodologies", "Sprint planning", "Risk management", "Project coordination", "Stakeholder communication"],
  },
];

export function WhatIDo() {
  return (
    <Section
      id="what-i-do"
      tone="yellow"
      eyebrow="What I do"
      title="Where I can contribute"
      intro="Five areas that overlap in day-to-day product work. My focus is on the first three, and the last two help me do them well."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {areas.map((area, i) => {
          const primary = i < 3;
          return (
            <Reveal
              key={area.title}
              delay={i * 60}
              className={`group rounded-xl border-2 border-ink p-6 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 ${
                primary ? "bg-white shadow-hard-sm hover:shadow-hard lg:col-span-2" : "bg-ink text-neutral-300 lg:col-span-3"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-lg ${primary ? "bg-ink text-brand" : "bg-brand text-ink"}`}
                >
                  <area.icon size={20} aria-hidden="true" />
                </div>
                <span className={`font-mono text-[11px] font-semibold uppercase tracking-wider ${primary ? "text-ink/40" : "text-brand/70"}`}>
                  {primary ? "Focus" : "Foundation"}
                </span>
              </div>
              <h3 className={`mt-4 text-lg font-bold ${primary ? "" : "text-white"}`}>{area.title}</h3>
              <p className={`mt-1 text-sm ${primary ? "text-neutral-500" : "text-neutral-400"}`}>{area.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-md px-2 py-1 text-xs font-medium ${
                      primary ? "bg-brand-soft text-ink" : "border border-white/15 text-neutral-200"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
