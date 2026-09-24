import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { WhatIDo } from "../components/sections/WhatIDo";
import { ProductThinking } from "../components/sections/ProductThinking";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Metrics } from "../components/sections/Metrics";
import { Skills } from "../components/sections/Skills";
import { Education } from "../components/sections/Education";
import { CareerTransition } from "../components/sections/CareerTransition";
import { ResumeCTA } from "../components/sections/ResumeCTA";
import { Contact } from "../components/sections/Contact";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

/**
 * Story order: who I am → what I want → why I'm qualified → how I think →
 * what I've built → what I've learned → how to reach me.
 */
export function HomePage() {
  useDocumentMeta();
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <ProductThinking />
      <CaseStudies />
      <Metrics />
      <Skills />
      <Education />
      <CareerTransition />
      <ResumeCTA />
      <Contact />
    </>
  );
}
