"use client";

import { useEffect, useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Testimonials = (): JSX.Element => {
  const { dictionary } = useLocale();
  const items = dictionary.testimonials.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [items.length, paused]);

  return (
    <section className="ts">
      <div className="qm" aria-hidden="true">
        “
      </div>
      <div className="qs">
        {items.map((item, index) => (
          <figure
            key={item.quote}
            className={`q${active === index ? " on" : ""}`}
          >
            <blockquote className="si">{item.quote}</blockquote>
            <p className="by lab">{item.by}</p>
          </figure>
        ))}
      </div>
      <div className="dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={active === index ? "on" : undefined}
            aria-label={`Testimonial ${index + 1}`}
            onClick={() => {
              setActive(index);
              setPaused(true);
            }}
          />
        ))}
      </div>
    </section>
  );
};
