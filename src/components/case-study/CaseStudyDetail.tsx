import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { CaseStudy, Priority } from "../../data/caseStudies";
import { caseStudies } from "../../data/caseStudies";
import { useActiveSection } from "../../hooks/useActiveSection";
import { CaseVisual } from "./CaseVisual";
import { GithubIcon } from "../ui/BrandIcons";
import { buttonClass } from "../ui/Button";
import { Tag } from "../ui/Tag";

interface TocItem {
  id: string;
  label: string;
}

const priorityStyle: Record<Priority, string> = {
  Must: "border-ink bg-ink text-brand",
  Should: "border-brand-deep bg-brand text-ink",
  Could: "border-dashed border-neutral-400 bg-white text-neutral-600",
};

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const extras = study.extras ?? [];

  // Case-specific sections (e.g. AARRR, risk model) go right after the solution.
  const toc: TocItem[] = [
    { id: "problem", label: "Problem" },
    { id: "context", label: "Context" },
    { id: "users", label: "Target users" },
    { id: "pain-points", label: "Pain points" },
    { id: "assumptions", label: "Research & assumptions" },
    { id: "solution", label: "Proposed solution" },
    ...extras.map((e) => ({ id: e.id, label: e.title })),
    { id: "requirements", label: "Product requirements" },
    { id: "prioritization", label: "Prioritisation" },
    { id: "journey", label: "User journey" },
    { id: "kpis", label: "Metrics & KPIs" },
    { id: "technical", label: "Technical considerations" },
    { id: "impact", label: "Expected impact" },
    { id: "learnings", label: "What I learned" },
  ];

  const active = useActiveSection(toc.map((t) => t.id));
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden border-b-4 border-brand bg-ink text-neutral-300">
        <div className="bg-grid-dark pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
        <div className="container-page relative pt-10 pb-14 sm:pt-14">
          <Link to="/#case-studies" className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-400 hover:text-brand">
            <ArrowLeft size={15} /> All case studies
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-brand px-2 py-0.5 font-mono text-xs font-bold text-ink">Case {study.number}</span>
                <Tag tone="dark">{study.status}</Tag>
              </div>
              <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">{study.title}</h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-300 sm:text-xl">{study.tagline}</p>
              <p className="mt-3 text-sm font-medium text-brand">{study.category}</p>

              {study.tech && study.tech.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technology">
                  {study.tech.map((t) => (
                    <li key={t}>
                      <Tag tone="dark">{t}</Tag>
                    </li>
                  ))}
                </ul>
              )}

              {(study.links?.demo || study.links?.github) && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.links?.demo && (
                    <a href={study.links.demo} target="_blank" rel="noopener noreferrer" className={buttonClass("yellow", "md")}>
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                  {study.links?.github && (
                    <a href={study.links.github} target="_blank" rel="noopener noreferrer" className={buttonClass("outlineLight", "md")}>
                      <GithubIcon size={15} /> GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
            <CaseVisual type={study.visual} tone="yellow" className="min-h-[280px] border-2 border-brand" />
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="container-page grid gap-10 py-12 lg:grid-cols-[220px_1fr] lg:gap-16 lg:py-16">
        <nav aria-label="Case study sections" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">On this page</p>
            <ul className="mt-4 space-y-0.5 border-l-2 border-neutral-200">
              {toc.map((t) => (
                <li key={t.id}>
                  <Link
                    to={`#${t.id}`}
                    aria-current={active === t.id ? "location" : undefined}
                    className={`-ml-0.5 block border-l-4 py-1.5 pl-4 text-sm transition-colors ${
                      active === t.id
                        ? "border-brand bg-brand-soft font-semibold text-ink"
                        : "border-transparent text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 max-w-3xl space-y-16">
          <Block id="problem" title="Problem">
            <p className="text-lg leading-relaxed text-neutral-700">{study.problem}</p>
          </Block>

          <Block id="context" title="Context">
            <p className="leading-relaxed">{study.context}</p>
          </Block>

          <Block id="users" title="Target users">
            <ul className="grid gap-3 sm:grid-cols-2">
              {study.targetUsers.map((p) => (
                <li key={p.name} className="rounded-xl border-2 border-neutral-200 p-5 transition-colors hover:border-ink">
                  <p className="font-semibold text-neutral-900">{p.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{p.description}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="pain-points" title="User pain points">
            <ul className="space-y-3">
              {study.painPoints.map((p, i) => (
                <li key={p} className="flex gap-4">
                  <span className="mt-0.5 shrink-0 self-start rounded bg-ink px-1.5 py-0.5 font-mono text-[11px] font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block
            id="assumptions"
            title="Research & assumptions"
            note="These are hypotheses to validate, not research findings."
          >
            <ul className="space-y-3 rounded-xl border-2 border-dashed border-ink/30 bg-brand-soft p-5 sm:p-6">
              {study.assumptions.map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </Block>

          <Block id="solution" title="Proposed solution">
            <p className="leading-relaxed">{study.solution.summary}</p>
            <ItemGrid items={study.solution.features} />
          </Block>

          {extras.map((extra) => (
            <Block key={extra.id} id={extra.id} title={extra.title}>
              {extra.intro && <p className="leading-relaxed">{extra.intro}</p>}
              <ItemGrid items={extra.items} />
            </Block>
          ))}

          <Block id="requirements" title="Product requirements">
            <div className="overflow-x-auto rounded-xl border-2 border-ink">
              <table className="w-full text-left text-sm">
                <thead className="bg-ink text-xs text-brand">
                  <tr>
                    <th scope="col" className="hidden px-4 py-3 font-medium sm:table-cell">ID</th>
                    <th scope="col" className="px-4 py-3 font-medium">Requirement</th>
                    <th scope="col" className="px-4 py-3 font-medium">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {study.requirements.map((r) => (
                    <tr key={r.id}>
                      <td className="hidden px-4 py-3 align-top font-mono text-xs whitespace-nowrap text-neutral-400 sm:table-cell">{r.id}</td>
                      <td className="px-4 py-3 align-top text-neutral-700">{r.requirement}</td>
                      <td className="px-4 py-3 align-top">
                        <span className={`inline-block rounded-md border px-2 py-0.5 text-xs font-medium ${priorityStyle[r.priority]}`}>
                          {r.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Block>

          <Block id="prioritization" title="Prioritisation">
            <p className="text-sm text-neutral-500">
              <span className="font-medium text-neutral-700">Method:</span> {study.prioritization.method}
            </p>
            <p className="mt-3 leading-relaxed">{study.prioritization.rationale}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {(
                [
                  ["Now", study.prioritization.now, "border-2 border-ink bg-brand shadow-hard-sm"],
                  ["Next", study.prioritization.next, "border-neutral-200 bg-white"],
                  ["Later", study.prioritization.later, "border-dashed border-neutral-300 bg-white"],
                ] as const
              ).map(([label, items, cls]) => (
                <div key={label} className={`rounded-xl border p-5 ${cls}`}>
                  <p className="font-mono text-xs font-medium uppercase tracking-wider text-neutral-500">{label}</p>
                  <ul className="mt-3 space-y-2">
                    {items.map((it) => (
                      <li key={it} className="text-sm font-medium text-neutral-800">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Block>

          <Block id="journey" title="User journey">
            <ol className="relative space-y-0">
              {study.journey.map((step, i) => (
                <li key={step.title} className="relative flex gap-4 pb-6 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-brand font-mono text-xs font-bold text-ink">
                      {i + 1}
                    </span>
                    {i < study.journey.length - 1 && <span aria-hidden="true" className="mt-1 w-0.5 flex-1 bg-ink/15" />}
                  </div>
                  <div className="pt-0.5">
                    <p className="font-semibold text-neutral-900">{step.title}</p>
                    <p className="mt-0.5 text-[15px] text-neutral-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <Block id="kpis" title="Metrics & KPIs" note="All metrics below are potential KPIs, not measured results.">
            <div className="rounded-xl bg-ink p-6 text-neutral-300 shadow-hard-brand">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-brand">North-star metric · Potential KPI</p>
              <p className="mt-2 text-lg font-semibold text-white">{study.metrics.northStar.name}</p>
              <p className="mt-2 text-sm leading-relaxed">{study.metrics.northStar.why}</p>
            </div>
            <ul className="mt-6 divide-y divide-neutral-100 rounded-xl border-2 border-neutral-200">
              {study.metrics.kpis.map((k) => (
                <li key={k.name} className="grid gap-1 p-4 sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                  <span className="w-fit self-start rounded bg-brand-soft px-1.5 py-0.5 text-xs font-semibold text-ink">{k.stage}</span>
                  <div>
                    <p className="font-medium text-neutral-900">
                      {k.name} <span className="ml-1 align-middle text-[11px] font-normal text-neutral-400">Potential KPI</span>
                    </p>
                    <p className="mt-0.5 text-sm text-neutral-600">{k.why}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Block>

          <Block id="technical" title="Technical considerations">
            <BulletList items={study.technical} />
          </Block>

          <Block id="impact" title="Outcome & expected impact" note="No real-world results are claimed here.">
            <ul className="space-y-3">
              {study.impact.map((i) => (
                <li key={i} className="rounded-lg border-l-4 border-ink bg-brand px-4 py-3 text-[15px] font-medium text-ink">
                  {i}
                </li>
              ))}
            </ul>
          </Block>

          <Block id="learnings" title="What I learned">
            <BulletList items={study.learnings} />
          </Block>

          {/* Next */}
          <div className="border-t border-neutral-200 pt-10">
            <p className="text-sm text-neutral-500">Next case study</p>
            <Link
              to={`/case-studies/${next.slug}`}
              className="group mt-2 flex items-center justify-between gap-4 rounded-xl border-2 border-ink bg-ink p-5 text-white transition-all hover:-translate-y-0.5 hover:bg-brand hover:shadow-hard-sm"
            >
              <div>
                <p className="font-mono text-xs text-brand group-hover:text-ink">Case {next.number}</p>
                <p className="mt-1 text-lg font-bold text-white group-hover:text-ink">{next.title}</p>
              </div>
              <ArrowRight size={18} className="shrink-0 text-neutral-400 transition-transform group-hover:tranneutral-x-0.5 group-hover:text-neutral-900" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function Block({ id, title, note, children }: { id: string; title: string; note?: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="text-neutral-600">
      <h2 id={`${id}-h`} className="flex items-center gap-3 text-2xl font-extrabold tracking-tight">
        <span aria-hidden="true" className="h-6 w-2 shrink-0 rounded-sm bg-brand ring-2 ring-ink" />
        {title}
      </h2>
      {note && <p className="mt-1.5 text-sm text-neutral-400 italic">{note}</p>}
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ItemGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li key={it.title} className="rounded-xl border-2 border-neutral-200 bg-white p-5 transition-colors hover:border-ink">
          <p className="font-semibold text-neutral-900">{it.title}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{it.description}</p>
        </li>
      ))}
    </ul>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 leading-relaxed">
          <span className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45 border-2 border-ink bg-brand" aria-hidden="true" />
          {it}
        </li>
      ))}
    </ul>
  );
}
