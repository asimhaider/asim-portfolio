import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const stages = [
  { stage: "Acquisition", question: "Are the right people finding us?", metrics: ["Traffic", "Sign-up conversion", "CAC"] },
  { stage: "Activation", question: "Do they reach first value?", metrics: ["Activation rate", "Time to first value"] },
  { stage: "Engagement", question: "Do they use it regularly?", metrics: ["DAU / WAU / MAU", "Feature adoption", "Session frequency"] },
  { stage: "Retention", question: "Do they come back?", metrics: ["D7 / D30 retention", "Churn"] },
  { stage: "Revenue", question: "Does it create business value?", metrics: ["Conversion rate", "ARPU", "Revenue per user"] },
];

const example = [
  { label: "Goal", value: "More new users complete their first order" },
  { label: "Metric", value: "First-order conversion within 7 days" },
  { label: "Guardrail", value: "Average order value doesn't drop" },
  { label: "Decision", value: "Ship, iterate or roll back based on the result" },
];

export function Metrics() {
  return (
    <Section
      id="metrics"
      eyebrow="Product analytics"
      title="Metrics that answer a question"
      intro="Tracking numbers is easy. What matters is tying each metric to a specific product goal, so it helps you decide what to do next."
    >
      {/* Funnel stages */}
      <ol className="grid gap-3 md:grid-cols-5">
        {stages.map((s, i) => (
          <Reveal
            as="li"
            key={s.stage}
            delay={i * 60}
            className="flex flex-col rounded-xl border-2 border-neutral-200 bg-white p-5 transition-colors hover:border-ink"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-md bg-ink font-mono text-[11px] font-bold text-brand">
                {i + 1}
              </span>
              <h3 className="text-base font-bold">{s.stage}</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-500">{s.question}</p>
            <ul className="mt-4 space-y-1.5 border-t border-neutral-100 pt-4">
              {s.metrics.map((m) => (
                <li key={m} className="text-sm font-semibold text-neutral-800">
                  {m}
                </li>
              ))}
            </ul>
            {/* funnel bar */}
            <div className="mt-auto pt-5" aria-hidden="true">
              <div className="h-2.5 rounded-full bg-neutral-100">
                <div className="h-2.5 rounded-full border border-ink/20 bg-brand" style={{ width: `${100 - i * 17}%` }} />
              </div>
            </div>
          </Reveal>
        ))}
      </ol>

      {/* Goal → metric example */}
      <Reveal className="mt-8 grid gap-6 rounded-2xl bg-ink p-6 text-neutral-300 sm:p-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <div>
          <h3 className="text-xl font-bold text-white">
            Start from the <span className="text-brand">goal</span>, not the dashboard
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            I pair every success metric with a guardrail metric, so improving one number doesn't quietly damage
            another. An illustrative example from my grocery case study:
          </p>
        </div>
        <dl className="grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2">
          {example.map((row) => (
            <div key={row.label} className="bg-ink p-4">
              <dt className="font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">{row.label}</dt>
              <dd className="mt-1 text-sm font-medium text-neutral-100">{row.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
