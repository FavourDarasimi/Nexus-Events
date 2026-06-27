"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import SectionLabel from "@/components/ui/SectionLabel";
import GoldDivider from "@/components/ui/GoldDivider";
import { staggerContainer, fadeInUp } from "@/lib/animations";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill={i < rating ? "#C9A84C" : "none"}
          stroke="#C9A84C"
          strokeWidth="1"
        >
          <path d="M8 1l1.818 3.682L14 5.636l-3 2.928L11.636 13 8 10.818 4.364 13 5 8.564l-3-2.928 4.182-.954L8 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6">
            What Our Clients Say
          </h2>
          <GoldDivider className="mx-auto" />
        </div>

        <div className="md:hidden overflow-hidden">
          <div className="flex animate-testimonials-marquee" style={{ width: "max-content" }}>
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${i}`}
                className="w-[85vw] shrink-0 px-3"
              >
                <div className="bg-charcoal border border-white/5 rounded-lg p-8 flex flex-col h-full">
                  <StarRating rating={testimonial.rating} />
                  <blockquote className="font-inter text-base text-white-muted leading-relaxed mt-4 flex-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="font-playfair text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="font-cormorant text-sm text-gold italic">
                      {testimonial.event}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="bg-charcoal border border-white/5 rounded-lg p-8 flex flex-col"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="font-inter text-base text-white-muted leading-relaxed mt-4 flex-1">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="font-playfair text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="font-cormorant text-sm text-gold italic">
                  {testimonial.event}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
