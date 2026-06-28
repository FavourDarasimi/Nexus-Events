"use client";

import { motion } from "framer-motion";
import { VALUES } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Values() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            What Drives Us
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {VALUES.map((value) => (
            <motion.div
              key={value.number}
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl text-gold">
                  {String(value.number).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl text-white mb-4">
                {value.title}
              </h3>
              <p className="font-inter text-base text-white-muted leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
