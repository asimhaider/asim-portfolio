import { useState, type FormEvent } from "react";
import { ArrowUpRight, LoaderCircle, Mail, Send } from "lucide-react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { buttonClass } from "../ui/Button";
import { Section } from "../ui/Section";
import { Reveal } from "../ui/Reveal";

/** Optional form backend (e.g. Formspree). Without it, the form opens the visitor's email client. */
const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

type Status = "idle" | "sending" | "sent" | "error";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={18} /> },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, icon: <LinkedinIcon size={17} /> },
  { label: "GitHub", value: "See my code", href: profile.github, icon: <GithubIcon size={17} /> },
];

const inputClass =
  "mt-1.5 block w-full rounded-lg border-2 border-neutral-200 bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-neutral-400 transition-colors focus:border-ink focus:outline-none focus:shadow-[0_0_0_4px_var(--color-brand)]";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      tone="muted"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="bg-brand px-1.5 [box-decoration-break:clone]">meaningful.</span>
        </>
      }
      intro="I'm looking for Associate Product Manager, Product Analyst and Business Analyst opportunities. If you're hiring, or just want to talk about a product problem, I'd be glad to hear from you."
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal as="ul" className="space-y-3">
          {channels.map((c) => {
            const external = c.href.startsWith("http");
            return (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-xl border-2 border-neutral-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-hard-sm"
                >
                  <span
                    className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-brand transition-colors group-hover:bg-brand group-hover:text-ink"
                    aria-hidden="true"
                  >
                    {c.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-ink">{c.label}</span>
                    <span className="block truncate text-sm text-neutral-500">{c.value}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-neutral-400 transition-colors group-hover:text-ink" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={handleSubmit} className="rounded-2xl border-2 border-ink bg-white p-6 shadow-hard sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-ink">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-ink">
                  Email
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-semibold text-ink">
                Message
              </label>
              <textarea id="message" name="message" rows={5} required className={`${inputClass} resize-y`} />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p role="status" aria-live="polite" className="text-sm">
                {status === "sent" && <span className="font-medium text-emerald-700">Thanks. Your message has been sent.</span>}
                {status === "error" && (
                  <span className="text-rose-700">
                    Something went wrong. Please email me directly at {profile.email}.
                  </span>
                )}
              </p>
              <button type="submit" disabled={status === "sending"} className={buttonClass("yellow", "lg", "border-2 border-ink sm:ml-auto")}>
                {status === "sending" ? <LoaderCircle size={16} className="animate-spin" /> : <Send size={15} />}
                Send message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
