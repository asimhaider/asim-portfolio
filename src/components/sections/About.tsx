import { Check } from "lucide-react";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

const progression = [
  {
    step: "01",
    title: "Software Development",
    text: "Built web applications with React, Node.js and MongoDB. Learned how products are actually put together.",
  },
  {
    step: "02",
    title: "IT Project Management",
    text: "Master's / MBA in Germany focused on planning, delivering and governing technology projects with Agile methods.",
  },
  {
    step: "03",
    title: "Product & Business Analysis",
    text: "Now applying both perspectives to user problems, requirements, prioritisation and product metrics.",
    current: true,
  },
];

const helpsMe = [
  "Communicate clearly with engineering teams",
  "Understand technical constraints early",
  "Break product requirements into buildable pieces",
  "Evaluate feasibility and trade-offs",
  "Read APIs, data models and system flows",
  "Work hands-on with data and SQL",
  "Translate business problems into technical requirements",
];

const stack = ["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST APIs", "Git", "SQL", "Python"];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A product mindset with a technical foundation."
      intro="I started by building software, then studied how technology projects are planned and delivered. That combination shapes how I approach product work: start with the user and the business goal, and stay realistic about what it takes to build."
    >
      {/* Progression */}
      <ol className="grid gap-5 md:grid-cols-3">
        {progression.map((p, i) => (
          <Reveal as="li" key={p.step} delay={i * 80} className="relative">
            <div
              className={`h-full rounded-xl border-2 p-6 transition-transform ${
                p.current ? "border-ink bg-brand shadow-hard" : "border-neutral-200 bg-white hover:border-ink"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-2xl font-bold ${p.current ? "text-ink" : "text-neutral-300"}`}>{p.step}</span>
                {p.current && (
                  <span className="rounded-full bg-ink px-2.5 py-0.5 text-[11px] font-semibold text-brand">Now</span>
                )}
              </div>
              <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${p.current ? "text-ink/80" : "text-neutral-600"}`}>{p.text}</p>
            </div>
            {i < progression.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-[18px] z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-ink text-sm font-bold text-brand md:grid"
              >
                →
              </span>
            )}
          </Reveal>
        ))}
      </ol>

      <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <h3 className="text-xl font-bold">Why the technical background matters</h3>
          <p className="mt-3 leading-relaxed text-neutral-600">
            I'm not aiming to be the engineer on the team. But having built applications myself means I can have
            better conversations with the people who do. It helps me:
          </p>
          <ul className="mt-5 space-y-2.5">
            {helpsMe.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] text-neutral-800">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand text-ink" aria-hidden="true">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100} className="rounded-2xl bg-brand-soft p-6 text-neutral-700 sm:p-8">
          <h3 className="text-sm font-semibold text-ink">Technologies I've worked with</h3>
          <p className="mt-1 text-sm text-neutral-600">Used to understand, prototype and build, not the focus of the role I'm seeking.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-md border border-ink/15 bg-white px-2.5 py-1 text-sm text-neutral-800 transition-colors hover:border-ink"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-ink/10 pt-6">
            <p className="text-sm leading-relaxed">
              <span className="font-semibold text-accent-600">In short:</span> I understand products, users, business
              requirements, data and technology, and I want to bring them together in a product or analyst role.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
