"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { SysmoHero } from "@/widgets/SysmoPage/Hero";
import { SysmoPhotoSection } from "@/widgets/SysmoPage/SysmoPhotoSection";

const Sysmo = () => {
  return (
    <div>
      <SysmoHero />
      <FadeIn once={false}>
        <SysmoPhotoSection />
      </FadeIn>
    </div>
  );
};

export default Sysmo;
