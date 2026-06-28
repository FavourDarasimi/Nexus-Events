"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { STORY_BLOCKS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Story() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10 lg:px-16">
        {STORY_BLOCKS.map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-20 items-center ${i > 0 ? "mt-20 lg:mt-32" : ""}`}
          >
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 ${
                    i % 2 === 0
                      ? "bg-gradient-to-r from-transparent via-transparent to-black"
                      : "bg-gradient-to-l from-transparent via-transparent to-black"
                  }`}
                />
              </div>
            </div>
            <div className="flex-1">
              <SectionLabel>{block.subtitle}</SectionLabel>
              <h2 className="font-playfair text-3xl md:text-4xl text-white mt-3 mb-6">
                {block.title}
              </h2>
              <p className="font-inter text-base md:text-lg text-white-muted leading-relaxed">
                {block.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
