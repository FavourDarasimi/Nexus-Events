"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { goldLineExpand } from "@/lib/animations";

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export default function GoldDivider({
  className,
  width = "w-24",
}: GoldDividerProps) {
  return (
    <motion.div
      variants={goldLineExpand}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("h-0.5 bg-gold origin-left", width, className)}
    />
  );
}
