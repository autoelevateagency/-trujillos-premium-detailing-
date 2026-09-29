"use client";

import { useEffect, useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { LogoMark } from "@/components/LogoMark/LogoMark";
import { SITE } from "@/data/site";

export const Footer = (): JSX.Element => {
  const { dictionary } = useLocale();
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div>
        <a className="logo" href="#top">
          <LogoMark label={dictionary.nav.brandFull} />
        </a>
        <p className="lab">
          {dictionary.footer.location} &nbsp;&copy; {year}
        </p>
      </div>
      <div className="fl">
        <a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer">
          {dictionary.footer.instagram}
        </a>
        <a href="#contact">{dictionary.footer.booking}</a>
        <a href="#contact">{dictionary.footer.contact}</a>
      </div>
    </footer>
  );
};
