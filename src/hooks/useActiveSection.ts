import { useEffect, useState } from "react";

/** Returns the id of the section currently in view (for nav highlighting). */
export function useActiveSection(ids: readonly string[], enabled = true) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (!enabled) return;
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => el !== null);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, enabled]);

  return active;
}
