import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export type Tone = "white" | "muted" | "dark" | "yellow";

const toneStyles: Record<Tone, { bg: string; title: string; intro: string }> = {
  white: { bg: "bg-white", title: "text-ink", intro: "text-neutral-600" },
  muted: { bg: "bg-cream border-y border-neutral-200/70", title: "text-ink", intro: "text-neutral-600" },
  dark: { bg: "bg-ink text-neutral-300", title: "text-white", intro: "text-neutral-400" },
  yellow: { bg: "bg-brand text-ink", title: "text-ink", intro: "text-ink/75" },
};

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  tone?: Tone;
}

export function Section({ id, eyebrow, title, intro, children, className = "", tone = "white" }: SectionProps) {
  const headingId = `${id}-heading`;
  const t = toneStyles[tone];
  return (
    <section id={id} aria-labelledby={title ? headingId : undefined} className={`py-20 sm:py-24 ${t.bg} ${className}`}>
      <div className="container-page">
        {(eyebrow || title || intro) && (
          <Reveal className="mb-12 max-w-2xl">
            {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
            {title && (
              <h2 id={headingId} className={`mt-4 text-3xl font-bold tracking-tight sm:text-[2.5rem] sm:leading-[1.1] ${t.title}`}>
                {title}
              </h2>
            )}
            {intro && <p className={`mt-4 text-lg leading-relaxed ${t.intro}`}>{intro}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

/** Small label above a heading: black pill on light/yellow backgrounds, yellow pill on dark. */
export function Eyebrow({ children, tone = "white", className = "" }: { children: ReactNode; tone?: Tone; className?: string }) {
  const style = tone === "dark" ? "bg-brand text-ink" : "bg-ink text-brand";
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] ${style} ${className}`}
    >
      <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full ${tone === "dark" ? "bg-ink" : "bg-brand"}`} />
      {children}
    </p>
  );
}
