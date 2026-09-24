import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export function Footer() {
  return (
    <footer className="border-t-4 border-brand bg-ink text-neutral-400">
      <div className="container-page flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand text-[13px] font-extrabold text-ink">AH</span>
          <div>
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="mt-0.5 text-sm">Associate Product Manager · Product Analyst · Business Analyst</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FooterIcon href={profile.linkedin} label="LinkedIn">
            <LinkedinIcon size={17} />
          </FooterIcon>
          <FooterIcon href={profile.github} label="GitHub">
            <GithubIcon size={17} />
          </FooterIcon>
          <FooterIcon href={`mailto:${profile.email}`} label="Email">
            <Mail size={18} />
          </FooterIcon>
        </div>
      </div>
      <div className="container-page border-t border-white/10 py-5 text-xs text-neutral-500">
        © {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Tailwind CSS.
      </div>
    </footer>
  );
}

function FooterIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg text-neutral-400 transition-colors hover:bg-brand hover:text-ink"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
