"use client";

import { useState, useCallback, useRef, useEffect } from "react";

const DEFAULT_CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

interface UseScrambleProps {
  text: string;
  duration?: number;
  scrambleSpeed?: number;
  charset?: string;
  onComplete?: () => void;
}

export function useScramble({
  text,
  duration = 900,
  scrambleSpeed = 60,
  charset = DEFAULT_CHARSET,
  onComplete,
}: UseScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (isScrambling) return;
    
    setIsScrambling(true);
    startTimeRef.current = Date.now();

    const update = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        const scrambled = text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            // As progress increases, characters "lock in" from left to right
            const charProgress = (index / text.length) * 0.5;
            if (progress > 0.5 + charProgress) {
              return char;
            }
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("");

        setDisplayText(scrambled);
        frameRef.current = requestAnimationFrame(update);
      } else {
        setDisplayText(text);
        setIsScrambling(false);
        onComplete?.();
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [text, duration, charset, isScrambling, onComplete]);

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return { displayText, isScrambling, scramble };
}
