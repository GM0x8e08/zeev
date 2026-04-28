"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ScrambleLink } from "./ui/scramble-link";
import { cn } from "@/lib/utils";

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Show header after 5% scroll
    if (latest > 0.05) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed top-0 left-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur-md"
        >
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 md:px-10 lg:px-14 xl:max-w-7xl">
            {/* Wordmark - shifted right slightly */}
            <button
              onClick={scrollToTop}
              className="ml-2 font-serif text-xl tracking-tight transition-opacity hover:opacity-70 sm:ml-4"
            >
              ZK
            </button>

            {/* Navigation - shifted left slightly */}
            <nav className="mr-2 flex items-center gap-6 sm:mr-4 sm:gap-8 md:gap-12">
              <ScrambleLink href="#about">.ABOUT</ScrambleLink>
              <ScrambleLink href="#projects">.PROJECTS</ScrambleLink>
              <ScrambleLink href="#contact">.CONTACT</ScrambleLink>
            </nav>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
