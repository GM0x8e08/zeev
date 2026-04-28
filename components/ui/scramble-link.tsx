"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useScramble } from "@/lib/hooks/use-scramble";
import { cn } from "@/lib/utils";

interface ScrambleLinkProps {
  href: string;
  children: string;
  className?: string;
}

export function ScrambleLink({ href, children, className }: ScrambleLinkProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { displayText, scramble } = useScramble({ text: children });

  const handleMouseEnter = () => {
    setIsHovered(true);
    scramble();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.a
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={cn(
        "relative inline-block font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300",
        isHovered ? "text-foreground" : "text-muted-foreground",
        className
      )}
    >
      {displayText}
      <motion.span
        initial={false}
        animate={{ width: isHovered ? "100%" : "0%" }}
        className="absolute -bottom-1 left-0 h-[1px] bg-foreground"
      />
    </motion.a>
  );
}
