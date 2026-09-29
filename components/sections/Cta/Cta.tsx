"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Cta = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.cta;

  return (
    <section className="cta">
      <h2 className="si rv">
        <span>{t.line1}</span>
        <span>{t.line2}</span>
        <span>{t.line3}</span>
      </h2>
      <span className="au rv" style={{ marginTop: "6vh" }} />
      <div className="row2">
        <span className="lab">{t.location}</span>
        <a className="big" href="#contact">
          {t.book}
        </a>
      </div>
    </section>
  );
};
