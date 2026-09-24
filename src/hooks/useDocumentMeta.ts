import { useEffect } from "react";

const DEFAULT_TITLE = "Asim Haider | Product Management | Product Analyst | Business Analyst";

/** Updates <title> and meta description per page, restoring defaults on unmount. */
export function useDocumentMeta(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Asim Haider` : DEFAULT_TITLE;
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const previous = meta?.content;
    if (meta && description) meta.content = description;
    return () => {
      document.title = DEFAULT_TITLE;
      if (meta && previous) meta.content = previous;
    };
  }, [title, description]);
}
