"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { useScramble } from "@/lib/hooks/use-scramble";
import { cn } from "@/lib/utils";

interface ScrambleLabelProps {
  children: string;
  className?: string;
}

export function ScrambleLabel({ children, className }: ScrambleLabelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { displayText, scramble, isScrambling } = useScramble({ 
    text: children,
    duration: 1500 
  });

  const hasScrambled = useRef(false);

  useEffect(() => {
    if (isInView && !hasScrambled.current) {
      scramble();
      hasScrambled.current = true;
    }
  }, [isInView, scramble]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-700",
        (isScrambling || !hasScrambled.current) ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {displayText}
    </motion.div>
  );
}
