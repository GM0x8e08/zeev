"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: Image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Fade, Scale, and Blur effects based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const blur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden"
    >
      {/* Background Portal Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10 h-[120%] w-full"
      >
        <Image
          src="/67246d1904dca31c79a0274cecc9d630.webp"
          alt="Portal"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />
        {/* Overlay to ensure text readability and blend with background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity, scale, filter: blur }}
        className="relative z-10 flex max-w-3xl flex-col items-center text-center"
      >
        <h1 className="font-serif text-6xl tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
          Zeev Kirsh
        </h1>
        <p className="mt-6 font-sans text-lg font-light tracking-wide text-foreground/80 sm:text-xl md:text-2xl">
          Attorney. Sociologist. Entrepreneur.
        </p>
        <p className="mt-4 max-w-xl font-sans text-base font-light leading-relaxed text-foreground/70 sm:text-lg">
          Building communities and ventures that shape the future of New York.
        </p>
        
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 rounded-full border border-foreground/20 bg-foreground px-8 py-3 font-sans text-sm font-medium tracking-widest text-background transition-colors hover:bg-foreground/90"
        >
          EXPLORE PROJECTS
        </motion.a>
      </motion.div>
    </section>
  );
}
