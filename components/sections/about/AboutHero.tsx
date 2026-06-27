"use client";

import Image from "next/image";
import ScrollParallax from "@/components/animations/ScrollParallax";
import TextReveal from "@/components/animations/TextReveal";
import GoldDivider from "@/components/ui/GoldDivider";

export default function AboutHero() {
  return (
    <section className="relative h-[40vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <ScrollParallax offset={0.2} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </ScrollParallax>
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center px-6">
        <TextReveal
          as="h1"
          text="Our Story"
          mode="chars"
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight justify-center"
        />
        <div className="flex justify-center mt-6">
          <GoldDivider width="w-32" />
        </div>
      </div>
    </section>
  );
}
