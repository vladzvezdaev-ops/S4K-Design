"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { DiscountSection } from "@/widgets/DiscountSection";
import { DragNdropSection } from "@/widgets/ProcessPage/Drag&DropSection";
import { ProcessHero } from "@/widgets/ProcessPage/Hero";
import { MattersSection } from "@/widgets/ProcessPage/MattersSection";
import { ProcessSection } from "@/widgets/ProcessPage/ProcessSection";
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
