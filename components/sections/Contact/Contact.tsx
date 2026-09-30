"use client";

import type { JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { SITE } from "@/data/site";

export const Contact = (): JSX.Element => {
  const { dictionary } = useLocale();
  const t = dictionary.contact;
  const titleLines = t.title.split("\n");

  return (
    <section className="ct" id="contact">
      <div>
        <p className="lab rv" style={{ marginBottom: "5vh" }}>
          {t.label}
        </p>
        <h2 className="si rv">
          {titleLines.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </h2>
        <a
          className="ig rv"
          href={SITE.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.instagramCta}
        </a>
      </div>
      <dl className="rv lab">
        <dt>{t.location}</dt>
        <dd>{t.locationValue}</dd>
        <dt>{t.hours}</dt>
        <dd>{t.hoursValue}</dd>
        <dt>{t.phone}</dt>
        <dd>
          <a href={SITE.phoneHref}>{t.phoneValue}</a>
        </dd>
        <dt>{t.email}</dt>
        <dd>
          <a href={SITE.emailHref}>{t.emailValue}</a>
        </dd>
        <dt>{t.booking}</dt>
        <dd>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.bookingValue}
          </a>
        </dd>
      </dl>
    </section>
  );
};
