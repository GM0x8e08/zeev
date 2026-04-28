"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionRevealProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Use `footer` for page footers (semantic HTML). */
  as?: "section" | "footer";
};

export function SectionReveal({
  children,
  id,
  className,
  as = "section",
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();
  const motionProps = {
    id,
    className,
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-72px 0px -48px 0px" as const, amount: 0.2 },
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  if (as === "footer") {
    return <motion.footer {...motionProps}>{children}</motion.footer>;
  }

  return <motion.section {...motionProps}>{children}</motion.section>;
}
