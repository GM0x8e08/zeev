"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HoverArrowButtonProps = {
  href: string;
  label: string;
  className?: string;
};

export function HoverArrowButton({
  href,
  label,
  className,
}: HoverArrowButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full border border-foreground/25 bg-foreground px-8 py-3 font-sans text-sm font-medium tracking-[0.18em] text-background transition-colors hover:bg-foreground/90",
        className,
      )}
    >
      <span className="relative inline-flex h-[1.1em] overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </span>
        <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full">
          {label}
        </span>
      </span>
      <span className="relative inline-flex size-4 overflow-hidden">
        <ArrowRight className="absolute inset-0 size-4 -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
        <ArrowRight className="absolute inset-0 size-4 transition-transform duration-300 group-hover:translate-x-full" />
      </span>
    </a>
  );
}
