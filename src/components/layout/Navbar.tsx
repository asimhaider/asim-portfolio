import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/profile";
import { useActiveSection } from "../../hooks/useActiveSection";
import { buttonClass } from "../ui/Button";

const sectionIds = navLinks.map((l) => l.href);

export function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const active = useActiveSection(sectionIds, isHome);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (id: string) =>
    isHome ? active === id : id === "case-studies" && pathname.startsWith("/case-studies");

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-colors duration-200 ${
        scrolled || open ? "border-neutral-200" : "border-transparent"
      }`}
    >
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-6">
        <Link to="/#home" className="group flex items-center gap-2.5" aria-label="Asim Haider — home">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand text-[13px] font-extrabold text-ink transition-transform group-hover:-rotate-6">
            AH
          </span>
          <span className="text-[15px] font-semibold text-ink">Asim Haider</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                to={`/#${link.href}`}
                aria-current={isActive(link.href) ? "location" : undefined}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-ink" : "text-neutral-600 hover:text-ink"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span aria-hidden="true" className="absolute inset-x-3 -bottom-[13px] h-0.5 rounded-full bg-brand" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/#contact" className={buttonClass("yellow", "sm", "hidden sm:inline-flex")}>
            Let's Connect
          </Link>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-lg text-ink hover:bg-neutral-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-neutral-200 bg-white lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={`/#${link.href}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-2 py-3 text-base font-medium ${
                    isActive(link.href) ? "text-accent-600" : "text-neutral-700"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <Link to="/#contact" onClick={() => setOpen(false)} className={buttonClass("yellow", "md", "w-full")}>
                Let's Connect
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
