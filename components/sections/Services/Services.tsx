"use client";

import { useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { MediaVideo } from "@/components/MediaVideo/MediaVideo";
import { SERVICE_VIDEOS } from "@/data/media";

export const Services = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.services;
  const [active, setActive] = useState(0);

  return (
    <section className="sv" id="services">
      <div>
        <p className="lab rv">{t.label}</p>
        <h2 className="si rv">{t.title}</h2>
        <div>
          {t.items.map((item, index) => (
            <div
              key={item.id}
              className={`row${active === index ? " on" : ""}`}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-pressed={active === index}
            >
              <b>{item.number}</b>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pan" aria-hidden="true">
        {t.items.map((item, index) => (
          <div key={item.id} className={active === index ? "on" : undefined}>
            <MediaVideo
              className="media-fill"
              src={SERVICE_VIDEOS[index]}
              active={active === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
