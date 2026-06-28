"use client";

import FloatingOrbs from "@/components/animations/FloatingOrbs";
import TextReveal from "@/components/animations/TextReveal";
import GoldDivider from "@/components/ui/GoldDivider";

export default function ServicesHero() {
  return (
    <section className="relative h-[45vh]  flex items-center justify-center overflow-hidden bg-black">
      <FloatingOrbs />
      <div className="relative z-10 text-center px-6">
        <p className="font-cormorant text-gold text-lg md:text-xl tracking-widest uppercase italic mb-6">
          What We Offer
        </p>
        <TextReveal
          as="h1"
          text="Our Services"
          mode="words"
          className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight justify-center"
        />
        <div className="flex justify-center mt-6">
          <GoldDivider width="w-32" />
        </div>
        <p className="font-inter text-base md:text-lg text-white-muted max-w-xl mx-auto mt-6 leading-relaxed">
          From intimate gatherings to global productions, we offer a full suite
          of event planning services tailored to your vision.
        </p>
      </div>
    </section>
  );
}
