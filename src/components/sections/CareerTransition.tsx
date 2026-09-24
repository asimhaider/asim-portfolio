import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Section";

const path = [
  { label: "Software Development", note: "How products are built" },
  { label: "IT Project Management", note: "How projects are planned & delivered" },
  { label: "Product Thinking", note: "What to build and why" },
  { label: "Product Analytics / Business Analysis", note: "Evidence and requirements" },
  { label: "Associate PM / Product Analyst", note: "Where I'm heading", target: true },
];

export function CareerTransition() {
  return (
    <section id="journey" aria-labelledby="journey-heading" className="relative overflow-hidden bg-brand py-20 text-ink sm:py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
        <Reveal>
          <Eyebrow tone="yellow">Career direction</Eyebrow>
          <h2 id="journey-heading" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">
            Two perspectives, one direction.
          </h2>
          <blockquote className="mt-8 border-l-[6px] border-ink pl-6">
            <p className="text-xl leading-relaxed font-medium sm:text-2xl sm:leading-relaxed">
              My technical background taught me how products are built. My IT Project Management education taught me
              how technology projects are planned and delivered.{" "}
              <strong className="bg-ink px-1.5 font-bold text-brand [box-decoration-break:clone]">
                I am now applying both perspectives to product and business problems.
              </strong>
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={100}>
          <ol className="relative space-y-3">
            {path.map((p, i) => (
              <li key={p.label} className="relative flex items-stretch gap-4">
                <div className="flex flex-col items-center">
                  <span
                    className={`mt-3.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-ink font-mono text-[11px] font-bold ${
                      p.target ? "bg-ink text-brand" : "bg-brand text-ink"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {i < path.length - 1 && <span aria-hidden="true" className="w-0.5 flex-1 bg-ink/25" />}
                </div>
                <div
                  className={`flex-1 rounded-lg border-2 border-ink px-4 py-3 ${
                    p.target ? "bg-ink text-white shadow-[5px_5px_0_0_rgba(10,10,10,0.25)]" : "bg-white/60"
                  }`}
                >
                  <p className={`font-bold ${p.target ? "text-brand" : ""}`}>{p.label}</p>
                  <p className={`text-sm ${p.target ? "text-neutral-300" : "text-ink/65"}`}>{p.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
