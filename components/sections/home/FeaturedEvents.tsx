"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_EVENTS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function TiltCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    rotateY.set(((x - centerX) / centerX) * 8);
    rotateX.set(-((y - centerY) / centerY) * 8);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRotateX, rotateY: springRotateY }}
      className="relative overflow-hidden rounded-lg cursor-pointer"
    >
      {children}
    </motion.div>
  );
}

export default function FeaturedEvents() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Featured Work</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Our Latest Masterpieces
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURED_EVENTS.map((event) => (
            <motion.div key={event.id} variants={fadeInUp}>
              <TiltCard>
                <Link
                  href={event.link}
                  className="group block relative aspect-[4/5] overflow-hidden"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 group-hover:hidden">
                    <span className="font-cormorant text-xs tracking-widest uppercase text-gold italic">
                      {event.category}
                    </span>
                    <h3 className="font-playfair text-xl md:text-2xl text-white mt-1">
                      {event.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6">
                    <div className="text-center">
                      <span className="font-cormorant text-xs tracking-widest uppercase text-gold italic">
                        {event.category}
                      </span>
                      <h3 className="font-playfair text-xl md:text-2xl text-white mt-1 mb-3">
                        {event.title}
                      </h3>
                      <p className="font-inter text-sm text-white-muted leading-relaxed mb-6">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
