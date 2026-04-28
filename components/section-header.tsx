"use client";

import { motion } from "framer-motion";
import { ScrambleLabel } from "./scramble-label";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  className?: string;
}

export function SectionHeader({ label, title, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      <ScrambleLabel className="mb-4">{label}</ScrambleLabel>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-2xl font-serif text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}
