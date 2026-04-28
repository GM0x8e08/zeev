"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SignatureButton } from "./ui/signature-button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: Image moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  // Fade and Scale effects based on scroll (removed blur for a clearer look)
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const handleExploreClick = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="top"
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
          sizes="100vw"
          className="object-cover object-center brightness-[0.85]"
        />
        {/* Overlay to ensure text readability and blend with background - lightened */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-background/90" />
        <div className="absolute inset-0 bg-black/10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </motion.div>

      {/* Hero Content - Repositioned slightly higher */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex max-w-4xl flex-col items-center text-center px-6 -mt-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-5xl tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Zeev Kirsh
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-sans text-base font-light tracking-wide text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-lg md:text-xl"
        >
          Attorney. Sociologist. Entrepreneur.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-xl font-sans text-sm font-light leading-relaxed text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-base"
        >
          Building communities and ventures that shape the future of New York.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="mt-8"
        >
          <SignatureButton onClick={handleExploreClick}>
            EXPLORE PROJECTS
          </SignatureButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
