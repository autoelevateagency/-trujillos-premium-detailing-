"use client";

import {
  useEffect,
  useRef,
  useState,
  type JSX,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { useLocale } from "@/context/LocaleContext";

const AUTO_MS = 7000;

export const Testimonials = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.testimonials;
  const items = t.items;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tick, setTick] = useState(0);
  const touchRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % items.length);
      setTick((n) => n + 1);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [items.length, paused]);

  const goTo = (index: number): void => {
    setActive((index + items.length) % items.length);
    setPaused(true);
    setTick((n) => n + 1);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLElement>): void => {
    touchRef.current = { x: e.clientX, y: e.clientY, active: true };
  };

  const onPointerUp = (e: ReactPointerEvent<HTMLElement>): void => {
    if (!touchRef.current.active) return;
    const dx = e.clientX - touchRef.current.x;
    const dy = e.clientY - touchRef.current.y;
    touchRef.current.active = false;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goTo(active + 1);
    else goTo(active - 1);
  };

  return (
    <section
      className="ts"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        touchRef.current.active = false;
      }}
    >
      <header className="ts-head">
        <p className="lab rv">{t.label}</p>
        <h2 className="si rv">{t.title}</h2>
      </header>
      <div className="qm" aria-hidden="true">
        “
      </div>
      <div className="qs" aria-live="polite">
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
      <div className="dots" role="tablist" aria-label={t.title}>
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={active === index ? "on" : undefined}
            aria-label={`Testimonial ${index + 1}`}
            onClick={() => goTo(index)}
          >
            <i
              key={`${index}-${tick}-${active === index}`}
              style={
                active === index && !paused
                  ? { animationDuration: `${AUTO_MS}ms` }
                  : active === index
                    ? { transform: "scaleX(1)" }
                    : undefined
              }
            />
          </button>
        ))}
      </div>
    </section>
  );
};
