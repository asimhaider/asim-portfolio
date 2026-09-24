import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const steps = [
  { n: "01", title: "Understand", question: "What problem are we solving?", detail: "Frame the problem and the business goal before talking about features." },
  { n: "02", title: "Discover", question: "Who experiences the problem and why?", detail: "Personas, pain points and assumptions, written down so they can be tested." },
  { n: "03", title: "Define", question: "What should the product solve?", detail: "Scope, requirements, user stories and acceptance criteria." },
  { n: "04", title: "Prioritize", question: "What creates the most value?", detail: "MoSCoW or impact vs. effort, weighed against constraints and dependencies." },
  { n: "05", title: "Build", question: "How can we deliver the solution?", detail: "Work with engineering on feasibility, slicing and iterative delivery." },
  { n: "06", title: "Measure", question: "Did the solution actually work?", detail: "Define success metrics upfront and use the results to decide what's next." },
];

export function ProductThinking() {
  return (
    <Section
      id="how-i-think"
      tone="muted"
      eyebrow="Approach"
      title="How I Think About Products"
      intro="A simple loop I use to structure my case studies, and how I'd approach problems on a product team. It's iterative: measuring feeds straight back into understanding."
    >
      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            as="li"
            key={s.n}
            delay={i * 60}
            className="group relative overflow-hidden rounded-xl border-2 border-neutral-200 bg-white p-6 transition-colors hover:border-brand hover:bg-brand"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 -right-2 font-mono text-[5.5rem] leading-none font-bold text-ink/[0.05] transition-colors group-hover:text-ink/10"
            >
              {s.n}
            </span>
            <div className="relative">
              <span className="font-mono text-sm font-bold text-accent-600 transition-colors group-hover:text-ink">{s.n}</span>
              <h3 className="mt-1 text-xl font-bold text-ink transition-colors">{s.title}</h3>
              <p className="mt-3 text-[15px] font-semibold text-neutral-800 transition-colors group-hover:text-ink">{s.question}</p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 transition-colors group-hover:text-ink/75">{s.detail}</p>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-5 flex items-center gap-3 rounded-xl border border-dashed border-brand-deep px-5 py-4 text-sm text-neutral-700">
        <span aria-hidden="true" className="grid h-7 w-7 place-items-center rounded-full bg-brand font-bold text-ink">↻</span>
        Measure → Understand: results become the input for the next iteration.
      </Reveal>
    </Section>
  );
}
