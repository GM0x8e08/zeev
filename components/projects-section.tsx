"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/section-header";
import { SectionReveal } from "@/components/section-reveal";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

function ProjectCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger
        type="button"
        className="group h-full w-full text-left outline-none transition-[transform,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="flex h-full flex-col rounded-2xl border border-border/80 bg-card/90 p-7 shadow-sm ring-1 ring-foreground/[0.04] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-foreground/[0.06] sm:p-8">
          <span className="flex items-start justify-between gap-4">
            <span className="block text-left">
              <span className="font-heading block text-xl tracking-tight text-foreground sm:text-2xl">
                {title}
              </span>
              <span className="mt-2 block font-sans text-sm font-normal text-muted-foreground">
                {subtitle}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden
              className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
            />
          </span>
          <span className="mt-6 block font-sans text-sm leading-relaxed text-foreground/75">
            Open details
          </span>
        </span>
      </DialogTrigger>
      {children}
    </Dialog>
  );
}

export function ProjectsSection() {
  return (
    <SectionReveal
      id="projects"
      className="scroll-mt-8 py-16 sm:py-20 md:py-28"
    >
      <SectionHeader number="002" label="Projects" title="Work in progress, built with care." />
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <ProjectCard title="Yness" subtitle="Community & venture">
          <DialogContent className="gap-0 sm:max-w-md" showCloseButton>
            <DialogHeader className="gap-3 pb-2">
              <DialogTitle className="font-heading text-xl">Yness</DialogTitle>
              <DialogDescription className="text-[15px] leading-relaxed">
                An initiative focused on gathering people and ideas at the intersection of culture
                and enterprise—experimenting with how communities sustain momentum in a city that
                never stands still.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={siteConfig.ynessNotionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-full px-6 no-underline",
                )}
              >
                Open Notion page
              </a>
            </div>
          </DialogContent>
        </ProjectCard>

        <ProjectCard title="Cape York Meteorite" subtitle="Science & story">
          <DialogContent className="gap-0 sm:max-w-md" showCloseButton>
            <DialogHeader className="gap-3 pb-2">
              <DialogTitle className="font-heading text-xl">
                Cape York Meteorite
              </DialogTitle>
              <DialogDescription className="text-[15px] leading-relaxed">
                A long-form project on one of history&apos;s great meteoritic arrivals—bridging
                scientific detail with the human appetite for wonder. Documentation and media are in
                active preparation.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-8 flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-border bg-muted/70 px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Coming soon
              </span>
            </div>
          </DialogContent>
        </ProjectCard>
      </div>
    </SectionReveal>
  );
}
