"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Hero = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.hero;

  return (
    <header className="hero" id="top">
      <svg className="car" viewBox="0 0 800 230" aria-hidden="true">
        <use href="#car" />
      </svg>
      <div className="floor" />
      <div className="tx">
        <p className="lab" style={{ margin: "0 0 4vh" }}>
          {t.eyebrow}
        </p>
        <h1 className="si">
          <span>
            <i>{t.line1}</i>
          </span>
          <span>
            <i>{t.line2}</i>
          </span>
        </h1>
        <span
          className="au rv on ln"
          style={{ transitionDelay: "1.2s" }}
        />
        <p className="sub rv on" style={{ transitionDelay: "1.4s" }}>
          {t.sub}
        </p>
      </div>
      <div className="side lab">{t.side}</div>
      <div className="hbar">
        <a className="lnk" href="#contact">
          {t.cta}
        </a>
        <span className="lab">{t.location}</span>
      </div>
    </header>
  );
};
