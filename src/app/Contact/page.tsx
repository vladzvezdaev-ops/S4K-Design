"use client";

import { FadeIn } from "@/shared/ui/Fade-in/FadeIn";
import { ContactHero } from "@/widgets/pages/ContactMePage/ContactHero";
import { ContactNav } from "@/widgets/pages/ContactMePage/ContactNav";

export default function ContactPage() {
  return (
    <div>
      <ContactHero />
      <FadeIn once={false}>
        <ContactNav />
      </FadeIn>
    </div>
  );
}
