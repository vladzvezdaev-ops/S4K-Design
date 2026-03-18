"use client";

import { FadeIn } from "@/shared/ui/fade-in/FadeIn";
import { ContactHero } from "@/widgets/ContactMePage/ContactHero";
import { ContactNav } from "@/widgets/ContactMePage/ContactNav";

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
