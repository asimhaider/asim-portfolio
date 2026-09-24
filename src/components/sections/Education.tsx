import { BookOpen, GraduationCap } from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const focusAreas = [
  "IT Project Management",
  "Agile methodologies",
  "Project management",
  "Business / technology alignment",
  "Digital transformation",
  "Product- and project-oriented work",
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal as="article" className="rounded-2xl border-2 border-ink bg-white p-6 shadow-hard sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-ink">
              <GraduationCap size={22} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-xl font-bold">MBA / Master's — IT Project Management</h3>
              <p className="mt-1 text-neutral-600">IU International University of Applied Sciences, Germany</p>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-neutral-600">
            A programme focused on how technology initiatives are planned, delivered and aligned with business goals,
            with a strong emphasis on Agile ways of working.
          </p>
          <h4 className="mt-6 text-sm font-bold">Relevant areas</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {focusAreas.map((a) => (
              <li key={a} className="rounded-md bg-brand-soft px-2.5 py-1 text-sm font-medium text-ink">
                {a}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal as="article" delay={100} className="flex flex-col rounded-2xl bg-brand-soft p-6 text-neutral-700 sm:p-8">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-ink">
            <BookOpen size={14} aria-hidden="true" />
            <span className="font-mono uppercase tracking-wider">Master's thesis</span>
          </div>
          <h3 className="mt-5 text-2xl leading-snug font-bold text-ink">
            “Challenges of Transitioning from <span className="text-accent-600">Waterfall to Agile</span>”
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">
            <span className="font-semibold text-ink">Why it matters for product work:</span> product teams today
            work in short, iterative cycles, shipping small increments, learning from users and adjusting priorities.
            Studying why organisations struggle to make that shift (in roles, planning habits, stakeholder expectations
            and culture) gave me a practical understanding of the environment product managers operate in, and of
            the friction that can slow good products down.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
