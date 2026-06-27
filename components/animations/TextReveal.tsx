"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  mode?: "words" | "chars";
  delay?: number;
}

const charVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: 0.03 * i,
    },
  }),
};

export default function TextReveal({
  text,
  as: Tag = "p",
  className,
  mode = "words",
  delay = 0,
}: TextRevealProps) {
  const uid = useId();

  if (mode === "chars") {
    const chars = text.split("");
    return (
      <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
        {chars.map((char, i) => (
          <span
            key={`${uid}-char-${i}`}
            className="inline-block overflow-hidden"
          >
            <motion.span
              className="inline-block"
              custom={i + delay * 10}
              variants={charVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </Tag>
    );
  }

  const words = text.split(" ");
  return (
    <Tag className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${uid}-word-${i}`}
          className="inline-block overflow-hidden mr-[0.25em] last:mr-0"
        >
          <motion.span
            className="inline-block"
            custom={i + delay * 10}
            variants={charVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
