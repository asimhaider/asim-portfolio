import type { ReactNode } from "react";

const tones = {
  default: "border-neutral-200 bg-white text-neutral-700",
  accent: "border-brand-deep bg-brand text-ink",
  ink: "border-ink bg-ink text-brand",
  dark: "border-white/15 bg-white/5 text-neutral-200",
};

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: keyof typeof tones }) {
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
