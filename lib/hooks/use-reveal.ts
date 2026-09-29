"use client";

import { useEffect, type RefObject } from "react";

export const useReveal = (
  rootRef: RefObject<HTMLElement | null>
): void => {
  useEffect(() => {
    const root = rootRef.current ?? document;
    const targets = root.querySelectorAll<HTMLElement>(".rv, .ar");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [rootRef]);
};
