"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { DiscountSection } from "@/widgets/pages/MainPage/DiscountSection";
import { DragNdropSection } from "@/widgets/pages/ProcessPage/DragAndDropSection";
import { ProcessHero } from "@/widgets/pages/ProcessPage/Hero";
import { MattersSection } from "@/widgets/pages/ProcessPage/MattersSection";
import { ProcessSection } from "@/widgets/pages/ProcessPage/ProcessSection";
import { Fa } from "node_modules/sanity/lib/_chunks-dts/ActiveWorkspaceMatcherContext";

const ProcessPage = () => {
  return (
    <section>
      <ProcessHero />
      <FadeIn once={false}>
        <DragNdropSection />
      </FadeIn>
      <FadeIn once={false}>
        <MattersSection />
      </FadeIn>
      <FadeIn once={false}>
        <ProcessSection />
      </FadeIn>
      <FadeIn once={false}>
        <DiscountSection />
      </FadeIn>
    </section>
  );
};

export default ProcessPage;
