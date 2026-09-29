"use client";

import { useRef, type JSX } from "react";
import { useReveal } from "@/lib/hooks/use-reveal";
import { SvgDefs } from "@/components/SvgDefs/SvgDefs";
import { Nav } from "@/components/sections/Nav/Nav";
import { Hero } from "@/components/sections/Hero/Hero";
import { Services } from "@/components/sections/Services/Services";
import { Work } from "@/components/sections/Work/Work";
import { Testimonials } from "@/components/sections/Testimonials/Testimonials";
import { About } from "@/components/sections/About/About";
import { Area } from "@/components/sections/Area/Area";
import { Contact } from "@/components/sections/Contact/Contact";
import { Cta } from "@/components/sections/Cta/Cta";
import { Footer } from "@/components/sections/Footer/Footer";

export const HomePage = (): JSX.Element => {
  const rootRef = useRef<HTMLDivElement>(null);
  useReveal(rootRef);

  return (
    <div ref={rootRef}>
      <SvgDefs />
      <Nav />
      <Hero />
      <Services />
      <Work />
      <Testimonials />
      <About />
      <Area />
      <Contact />
      <Cta />
      <Footer />
    </div>
  );
};
