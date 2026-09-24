import { caseStudies } from "../../data/caseStudies";
import { CaseStudyCard } from "../case-study/CaseStudyCard";
import { Section } from "../ui/Section";

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      tone="muted"
      eyebrow="Featured work"
      title="Product Case Studies"
      intro="Four projects, written up as product problems rather than code: the problem, the users, the requirements, the trade-offs and how I'd measure success. Where results aren't known, I've marked them as potential KPIs or expected impact."
    >
      <div className="space-y-6">
        {caseStudies.map((study, i) => (
          <CaseStudyCard key={study.slug} study={study} reverse={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}
