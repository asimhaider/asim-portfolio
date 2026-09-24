import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { CaseStudy } from "../../data/caseStudies";
import { CaseVisual } from "./CaseVisual";
import { GithubIcon } from "../ui/BrandIcons";
import { buttonClass } from "../ui/Button";
import { Tag } from "../ui/Tag";
import { Reveal } from "../ui/Reveal";

export function CaseStudyCard({ study, reverse = false }: { study: CaseStudy; reverse?: boolean }) {
  const href = `/case-studies/${study.slug}`;
  return (
    <Reveal
      as="article"
      className="group grid overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-hard-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard lg:grid-cols-2"
    >
      <div className={`p-3 sm:p-4 ${reverse ? "lg:order-2" : ""}`}>
        <CaseVisual type={study.visual} tone="yellow" className="h-full min-h-[260px]" />
      </div>

      <div className="flex flex-col p-6 pt-3 sm:p-8 lg:pt-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-ink px-2 py-0.5 font-mono text-xs font-bold text-brand">Case {study.number}</span>
          <span className="text-xs font-semibold text-neutral-500">{study.status}</span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-[1.75rem]">
          <Link to={href} className="decoration-brand decoration-4 underline-offset-4 hover:underline">
            {study.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-neutral-500">{study.category}</p>
        <p className="mt-4 leading-relaxed text-neutral-600">{study.summary}</p>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">What this case shows</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {study.focus.map((f) => (
              <li key={f}>
                <Tag tone="accent">{f}</Tag>
              </li>
            ))}
          </ul>
        </div>

        {study.tech && study.tech.length > 0 && (
          <p className="mt-4 text-xs text-neutral-500">
            <span className="font-semibold text-neutral-700">Built with:</span> {study.tech.join(" · ")}
          </p>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          <Link to={href} className={buttonClass("primary", "md")} aria-label={`View case study: ${study.title}`}>
            View Case Study <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          {study.links?.demo && (
            <a href={study.links.demo} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "md")}>
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
          {study.links?.github && (
            <a href={study.links.github} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "md")}>
              <GithubIcon size={15} /> GitHub
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
