"use client";

import Image from "next/image";
import { DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { useScramble } from "@/lib/hooks/use-scramble";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ProjectDialogProps = {
  title: string;
  description: string;
  heroImageSrc: string;
  heroImageAlt: string;
  status: string;
  focus: string;
  role: string;
  metadata?: Array<{ label: string; value: string }>;
  links?: Array<{ href: string; label: string }>;
  children?: ReactNode;
};

function MetadataItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/70 bg-muted/30 px-4 py-3">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm text-foreground/90">{value}</p>
    </div>
  );
}

export function ProjectDialog({
  title,
  description,
  heroImageSrc,
  heroImageAlt,
  status,
  focus,
  role,
  metadata = [],
  links = [],
  children,
}: ProjectDialogProps) {
  const closeLabel = useScramble({ text: "Close" });
  const allMetadata = [
    { label: "Status", value: status },
    { label: "Focus", value: focus },
    { label: "Role", value: role },
    ...metadata,
  ];

  return (
    <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-4xl" showCloseButton={false}>
      <div className="relative aspect-[3/1] border-b border-border/70">
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 960px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
      </div>

      <DialogClose
        onMouseEnter={closeLabel.scramble}
        className={cn(
          buttonVariants({ variant: "secondary", size: "sm" }),
          "absolute top-4 right-4 rounded-full border border-border/70 bg-background/80 px-4 backdrop-blur-sm",
        )}
      >
        {closeLabel.displayText}
      </DialogClose>

      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[240px,1fr]">
        <aside className="space-y-3">
          {allMetadata.map((item) => (
            <MetadataItem key={item.label} label={item.label} value={item.value} />
          ))}
        </aside>

        <div>
          <DialogHeader className="gap-3">
            <DialogTitle className="font-heading text-2xl sm:text-3xl">{title}</DialogTitle>
            <DialogDescription className="text-[15px] leading-relaxed text-foreground/75">
              {description}
            </DialogDescription>
          </DialogHeader>

          {children ? <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/80">{children}</div> : null}

          {links.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6 no-underline")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </DialogContent>
  );
}
