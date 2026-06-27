"use client";

import { type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="fixed inset-0 z-50 bg-black pointer-events-none"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0, originY: 1 }}
          exit={{ scaleY: 1, originY: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
