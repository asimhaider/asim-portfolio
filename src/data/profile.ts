/**
 * Central place for personal links and files.
 * TODO(Asim): replace the placeholder values marked below before deploying.
 */
export const profile = {
  name: "Asim Haider",
  positioning: "Product Management | Product Analytics | Business Analysis | Technology",
  targetRoles: ["Associate Product Manager", "Product Analyst", "Business Analyst"],

  // TODO(Asim): replace with your real contact details.
  email: "asimhaider8199@gmal.com",
  linkedin: "https://www.linkedin.com/in/asimhaider",
  github: "https://github.com/asimhaider",

  // Drop your PDF into /public with this exact file name.
  resumeUrl: "/Asim-Haider-Resume.pdf",
  resumeFileName: "Asim-Haider-Resume.pdf",
} as const;

export const navLinks = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Case Studies", href: "case-studies" },
  { label: "Skills", href: "skills" },
  { label: "Education", href: "education" },
  { label: "Resume", href: "resume" },
  { label: "Contact", href: "contact" },
] as const;
