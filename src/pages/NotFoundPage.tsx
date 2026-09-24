import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="w-fit rounded-md bg-brand px-2 py-0.5 font-mono text-sm font-bold text-ink">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">This page doesn't exist.</h1>
      <p className="mt-3 text-neutral-600">The link may be outdated. The case studies are on the home page.</p>
      <ButtonLink href="/#case-studies" internal className="mt-8">
        <ArrowLeft size={16} /> Back to case studies
      </ButtonLink>
    </section>
  );
}
