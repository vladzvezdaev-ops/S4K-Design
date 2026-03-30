"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { SysmoHero } from "@/widgets/pages/SysmoPage/Hero";
import { SysmoPhotoSection } from "@/widgets/pages/SysmoPage/SysmoPhotoSection";

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
