import { Download, FileText } from "lucide-react";
import { profile } from "../../data/profile";
import { ButtonLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function ResumeCTA() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <Reveal className="relative overflow-hidden rounded-3xl border-2 border-ink bg-brand-soft px-6 py-12 text-neutral-700 shadow-hard sm:px-12 sm:py-14">
          <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_left,black,transparent_70%)]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand text-ink">
                <FileText size={22} aria-hidden="true" />
              </div>
              <h2 id="resume-heading" className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Want the <span className="text-accent-600">complete picture?</span>
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-neutral-600">
                Explore my experience, education, projects, and technical background in my resume.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <ButtonLink href={profile.resumeUrl} download={profile.resumeFileName} variant="yellow" size="lg" className="px-7">
                <Download size={17} /> Download Resume
              </ButtonLink>
              <ButtonLink href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                View Resume
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
