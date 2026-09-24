import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "../../data/profile";
import { ButtonLink } from "../ui/Button";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

const brief = [
  { label: "Target roles", value: "Associate PM · Product Analyst · Business Analyst" },
  { label: "Also open to", value: "Junior PM · Product Operations" },
  { label: "Education", value: "MBA / Master's, IT Project Management — IU, Germany" },
  { label: "Foundation", value: "Frontend / full-stack development" },
];

const strengths = ["Product discovery", "Requirements & user stories", "KPIs & funnels", "SQL", "Agile / Scrum", "APIs & systems"];

const ticker = [
  "Associate Product Manager",
  "Product Analyst",
  "Business Analyst",
  "Junior Product Manager",
  "Product Operations",
  "IT Project Management",
];

export function Hero() {
  return (
    <>
      <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-cream text-neutral-700">
        <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_left,black_25%,transparent_70%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-brand/30 blur-[120px]"
        />
        <div className="container-page relative grid gap-14 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:gap-16 lg:pt-24 lg:pb-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-deep bg-brand-soft px-3 py-1 text-xs font-medium text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-brand opacity-60 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              Open to entry-level product & analyst roles
            </p>

            <h1
              id="hero-heading"
              className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]"
            >
              I build at the intersection of{" "}
              <span className="relative whitespace-nowrap text-ink">
                <span aria-hidden="true" className="absolute inset-x-[-0.15em] inset-y-[0.08em] -z-0 -rotate-1 rounded-md bg-brand" />
                <span className="relative">Product, Data</span>
              </span>{" "}
              &amp; <span className="text-accent-600">Technology.</span>
            </h1>

            <p className="mt-6 text-base font-semibold text-ink sm:text-lg">
              Aspiring Associate Product Manager <span className="text-accent-600">/</span> Product Analyst{" "}
              <span className="text-accent-600">/</span> Business Analyst
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              IT Project Management graduate with a technical background in software development and hands-on experience
              working on product-oriented projects. I enjoy turning user problems and business requirements into
              structured product solutions, measurable outcomes, and practical experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/#case-studies" internal variant="yellow" size="lg">
                View My Work <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink href={profile.resumeUrl} download={profile.resumeFileName} variant="secondary" size="lg">
                <Download size={16} /> Download Resume
              </ButtonLink>
            </div>

            <div className="mt-8 flex items-center gap-5 text-sm text-neutral-600">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand">
                <LinkedinIcon size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand">
                <GithubIcon size={16} /> GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-brand">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Candidate brief — styled like a one-page product spec */}
          <aside aria-label="Candidate summary" className="relative lg:rotate-1">
            <div className="rounded-2xl border-2 border-ink bg-brand text-ink shadow-hard">
              <div className="flex items-center justify-between border-b-2 border-ink/10 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-ink" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                </div>
                <span className="font-mono text-[11px] font-medium text-ink/60">candidate-brief.md</span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink/55">Profile</p>
                <p className="mt-1 text-xl font-extrabold">{profile.name}</p>
                <p className="text-sm font-medium text-ink/70">{profile.positioning}</p>

                <dl className="mt-5 space-y-3.5">
                  {brief.map((row) => (
                    <div key={row.label} className="grid grid-cols-[6.5rem_1fr] gap-3 text-sm">
                      <dt className="text-ink/60">{row.label}</dt>
                      <dd className="font-semibold">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 border-t-2 border-ink/10 pt-5">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink/55">Core strengths</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {strengths.map((s) => (
                      <li key={s} className="rounded-md bg-ink px-2 py-1 text-xs font-medium text-brand">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Role ticker */}
      {/* Decorative: the same roles are stated in the hero text above. */}
      <div className="overflow-hidden border-y-2 border-ink bg-brand py-3" aria-hidden="true">
        <ul className="animate-marquee flex w-max gap-8">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((role, i) => (
            <li
              key={i}
              className="flex items-center gap-8 text-sm font-bold whitespace-nowrap text-ink uppercase tracking-wide"
            >
              {role}
              <span aria-hidden="true" className="text-lg leading-none">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
