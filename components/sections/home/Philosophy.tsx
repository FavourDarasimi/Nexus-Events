"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { PHILOSOPHY_STATS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const raw = useTransform(scrollYProgress, [0, 1], [0, value]);
  const springVal = useSpring(raw, { stiffness: 60, damping: 20 });

  return (
    <motion.span ref={ref} className="tabular-nums">
      {useTransform(springVal, (v) => `${Math.round(v)}${suffix}`) as any}
    </motion.span>
  );
}

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Our Philosophy</SectionLabel>
            <blockquote className="font-playfair text-2xl md:text-3xl lg:text-4xl text-white leading-snug mt-6">
              &ldquo;Every event tells a story. We&apos;re here to make yours unforgettable.&rdquo;
            </blockquote>
            <GoldDivider className="mt-6" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeInUp}
              className="font-inter text-base md:text-lg text-white-muted leading-relaxed"
            >
              At Nexus Events, we believe that luxury isn&apos;t about extravagance
              &mdash; it&apos;s about intention. Every detail, from the texture of the
              linens to the warmth of the lighting, is carefully curated to
              create an emotional journey. We don&apos;t just produce events; we
              craft experiences that linger in the heart.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {PHILOSOPHY_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <span className="block font-playfair text-3xl md:text-4xl lg:text-5xl text-gold">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="block font-inter text-xs md:text-sm text-white-muted mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
