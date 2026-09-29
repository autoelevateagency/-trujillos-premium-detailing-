"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";

export const Area = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.area;

  return (
    <section className="ar" id="area">
      <svg
        className="map"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g stroke="#161616" strokeWidth="1">
          <path d="M0 200H1200M0 400H1200M0 600H1200M200 0V800M480 0V800M760 0V800M1000 0V800" />
        </g>
        <path
          d="M1050 0c-30 180 40 300 10 480s-50 240-20 320"
          fill="none"
          stroke="#2a2a2b"
          strokeWidth="1.5"
        />
        <text
          x="1075"
          y="330"
          fill="#858585"
          fontSize="12"
          letterSpacing="5"
          fontFamily="Jost"
          transform="rotate(90 1075 330)"
        >
          LAKE MICHIGAN
        </text>
        <path
          className="rt"
          pathLength="1"
          d="M180 620C260 560 300 500 420 470S560 520 640 430 760 300 900 320 980 250 1010 210"
          fill="none"
          stroke="#BC9953"
          strokeWidth="1.5"
        />
        <g fill="#ACAAAB" fontFamily="Jost" fontSize="11" letterSpacing="4">
          <circle cx="180" cy="620" r="3" />
          <text x="194" y="626">
            BROOKFIELD
          </text>
          <circle cx="420" cy="470" r="3" />
          <text x="434" y="476">
            WAUWATOSA
          </text>
          <circle cx="640" cy="430" r="3" />
          <text x="654" y="436">
            DOWNTOWN
          </text>
          <circle cx="900" cy="320" r="3" />
          <text x="768" y="304">
            SHOREWOOD
          </text>
          <circle cx="1010" cy="210" r="4" fill="#BC9953" />
          <text x="850" y="196" fill="#E4E4E4">
            MILWAUKEE
          </text>
        </g>
      </svg>
      <div>
        <p className="lab rv" style={{ marginBottom: "5vh" }}>
          {t.label}
        </p>
        <h2 className="si rv">
          <span>{t.line1}</span>
          <span>{t.line2}</span>
        </h2>
      </div>
      <div className="ft rv">
        <p>{t.copy}</p>
        <dl className="lab">
          <dt>{t.where}</dt>
          <dd>{t.whereValue}</dd>
          <dt>{t.service}</dt>
          <dd>{t.serviceValue}</dd>
          <dt>{t.area}</dt>
          <dd>{t.areaValue}</dd>
        </dl>
      </div>
    </section>
  );
};
