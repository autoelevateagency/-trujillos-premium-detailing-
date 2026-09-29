"use client";

import { useEffect, useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { LogoMark } from "@/components/LogoMark/LogoMark";
import { SITE } from "@/data/site";

export const Nav = (): JSX.Element => {
  const { dictionary } = useLocale();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`site-nav${scrolled ? " sc" : ""}`}
      aria-label="Primary"
    >
      <a className="logo" href="#top" aria-label={SITE.brandAria}>
        <LogoMark label={dictionary.nav.brand} />
      </a>
      <ul>
        <li>
          <a href="#services">{dictionary.nav.services}</a>
        </li>
        <li>
          <a href="#work">{dictionary.nav.work}</a>
        </li>
        <li>
          <a href="#about">{dictionary.nav.about}</a>
        </li>
        <li>
          <a href="#area">{dictionary.nav.area}</a>
        </li>
        <li>
          <a className="bk" href="#contact">
            {dictionary.nav.book}
          </a>
        </li>
      </ul>
    </nav>
  );
};
