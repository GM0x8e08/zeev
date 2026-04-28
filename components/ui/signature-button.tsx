"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScramble } from "@/lib/hooks/use-scramble";
import { cn } from "@/lib/utils";

interface SignatureButtonProps extends React.HTMLAttributes<HTMLElement> {
  children: string;
  variant?: "primary" | "outline";
  as?: any;
}

export function SignatureButton({
  children,
  className,
  variant = "primary",
  as: Component = "button",
  ...props
}: SignatureButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered(true);
    props.onMouseEnter?.(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered(false);
    props.onMouseLeave?.(e);
  };

  return (
    <motion.div
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Component
        {...props}
        className={cn(
          "group relative flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-3 font-sans text-sm font-medium tracking-widest transition-all duration-300",
          variant === "primary" 
            ? "bg-foreground text-background hover:bg-foreground/90" 
            : "border border-foreground/20 bg-transparent text-foreground hover:border-foreground"
        )}
      >
        {/* Background Rollout Expansion */}
        <motion.div
          initial={false}
          animate={{
            width: isHovered ? "100%" : "0%",
            left: 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "absolute inset-0 -z-10",
            variant === "primary" ? "bg-foreground/10" : "bg-foreground/5"
          )}
        />

        {/* Text Content */}
        <motion.div
          animate={{
            x: isHovered ? -8 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative z-10 flex items-center"
        >
          <span className="inline-block min-w-[1ch]">{children}</span>
        </motion.div>

      {/* Arrow Reveal */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-6 z-10"
          >
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        )}
      </AnimatePresence>
      </Component>
    </motion.div>
  );
}
