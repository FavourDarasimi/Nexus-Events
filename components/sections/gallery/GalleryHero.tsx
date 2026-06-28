"use client";

import FloatingOrbs from "@/components/animations/FloatingOrbs";
import SparkleBackground from "@/components/animations/SparkleBackground";
import TextReveal from "@/components/animations/TextReveal";
import GoldDivider from "@/components/ui/GoldDivider";

export default function GalleryHero() {
  return (
    <section className="relative h-[45vh] flex items-center justify-center overflow-hidden bg-black">
      <FloatingOrbs />
      <SparkleBackground />
      <div className="relative z-10 text-center px-6">
        <p className="font-cormorant text-gold text-lg md:text-xl tracking-widest uppercase italic mb-6">
          Our Portfolio
        </p>
        <TextReveal
          as="h1"
          text="Gallery"
          mode="chars"
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight justify-center"
        />
        <div className="flex justify-center mt-6">
          <GoldDivider width="w-24" />
        </div>
      </div>
    </section>
  );
}
