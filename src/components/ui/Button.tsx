import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "yellow" | "secondary" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-all duration-150 disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  /** Black; flips to yellow on hover. For light backgrounds. */
  primary: "bg-ink text-white hover:bg-brand hover:text-ink",
  /** Yellow; the main call to action, especially on dark backgrounds. */
  yellow: "bg-brand text-ink hover:bg-brand-deep hover:-translate-y-px",
  secondary: "border border-neutral-300 bg-white text-ink hover:border-ink",
  /** Outline for dark backgrounds. */
  outlineLight: "border border-white/25 text-white hover:border-brand hover:text-brand",
  ghost: "text-neutral-600 hover:text-ink hover:bg-neutral-100",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-[15px]",
};

export const buttonClass = (variant: Variant = "primary", size: Size = "md", extra = "") =>
  `${base} ${variants[variant]} ${sizes[size]} ${extra}`;

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** Use client-side routing (for internal paths). */
  internal?: boolean;
}

export function ButtonLink({ href, variant, size, internal, className = "", children, ...rest }: ButtonLinkProps) {
  const cls = buttonClass(variant, size, className);
  if (internal) {
    return (
      <Link to={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
      {children}
    </a>
  );
}
