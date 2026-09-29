"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const About = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.about;

  return (
    <section className="ab" id="about">
      <svg className="car" viewBox="0 0 800 230" aria-hidden="true">
        <use href="#car" />
      </svg>
      <p className="lab rv" style={{ marginBottom: "5vh" }}>
        {t.label}
      </p>
      <h2 className="si rv">
        <span>{t.line1}</span>
        <span>{t.line2}</span>
      </h2>
      <div className="cp rv">
        <span className="au rv" style={{ width: 90, marginBottom: 30 }} />
        <p>{t.p1}</p>
        <p style={{ color: "var(--m)" }}>{t.p2}</p>
      </div>
      <div className="st rv">
        {t.stats.map((stat) => (
          <div key={stat.value}>
            <span>{stat.value}</span>
            <small className="lab">{stat.label}</small>
          </div>
        ))}
      </div>
    </section>
  );
};
