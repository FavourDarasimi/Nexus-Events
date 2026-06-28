"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="py-24 md:py-32 lg:py-40 bg-charcoal">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            How We Bring Your Vision to Life
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <div ref={ref} className="relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-white/10">
            <motion.div
              className="h-full bg-gold origin-left"
              style={{ scaleX: lineScale }}
            />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
          >
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative flex flex-col items-center text-center lg:px-6"
              >
                <div className="relative z-10 w-12 h-12 rounded-full bg-black border-2 border-gold flex items-center justify-center mb-6 lg:mt-6">
                  <span className="font-playfair text-lg text-gold">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-playfair text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-white-muted leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
