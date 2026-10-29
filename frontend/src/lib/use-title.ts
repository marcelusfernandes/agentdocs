import { useEffect } from "react";

const BASE = "AgentDocs";

// Sets the browser tab title to "<title> · AgentDocs" (or just "AgentDocs" when no
// page title is given), restoring the previous title on unmount so tabs stay
// distinguishable as the user navigates.
export function useTitle(title?: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} · ${BASE}` : BASE;
    return () => {
      document.title = prev;
    };
  }, [title]);
}
