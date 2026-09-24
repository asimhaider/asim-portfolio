import { useParams } from "react-router-dom";
import { getCaseStudy } from "../data/caseStudies";
import { CaseStudyDetail } from "../components/case-study/CaseStudyDetail";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { NotFoundPage } from "./NotFoundPage";

export function CaseStudyPage() {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);
  useDocumentMeta(study ? `${study.title} — Case Study` : "Not found", study?.summary);

  if (!study) return <NotFoundPage />;
  // key resets scroll-spy state when moving between case studies
  return <CaseStudyDetail key={study.slug} study={study} />;
}
