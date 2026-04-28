"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SignatureButton } from "./ui/signature-button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrambleLink } from "./ui/scramble-link";

interface ProjectMetadata {
  label: string;
  value: string;
}

interface ProjectCardProps {
  index: string;
  title: string;
  description: string;
  image: string;
  metadata: ProjectMetadata[];
  notionUrl?: string;
  isComingSoon?: boolean;
}

export function ProjectCard({
  index,
  title,
  description,
  image,
  metadata,
  notionUrl,
  isComingSoon,
}: ProjectCardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          whileHover={{ y: -8, scale: 1.015 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl bg-card shadow-md transition-shadow hover:shadow-2xl"
        >
          {/* Image Container */}
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Index Label Overlay */}
            <div className="absolute top-4 left-4 rounded-full bg-background/80 px-3 py-1 font-mono text-[10px] backdrop-blur-sm">
              {index}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start p-6 text-left md:p-8">
            <h3 className="font-serif text-2xl tracking-tight sm:text-3xl">
              {title}
            </h3>
            <p className="mt-3 line-clamp-2 font-sans text-sm font-light leading-relaxed text-muted-foreground">
              {description}
            </p>

            {/* Metadata Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {metadata.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ backgroundColor: "var(--muted)" }}
                  className="flex items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-muted-foreground transition-colors duration-300"
                >
                  <span>{item.label}</span>
                  <span className="h-2 w-[1px] bg-border" />
                  <span className="text-foreground">{item.value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="max-w-4xl overflow-hidden p-0 sm:max-w-[900px]">
        <div className="flex flex-col">
          {/* Modal Hero Image */}
          <div className="relative aspect-[3/1] w-full">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>

          <div className="flex flex-col gap-8 p-6 sm:flex-row sm:p-12">
            {/* Left Column: Metadata */}
            <div className="flex flex-col gap-6 sm:w-1/3">
              {metadata.map((item, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-serif text-lg">{item.value}</span>
                </div>
              ))}
              {notionUrl && (
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    LINKS
                  </span>
                  <ScrambleLink href={notionUrl}>VISIT SITE</ScrambleLink>
                </div>
              )}
            </div>

            {/* Right Column: Content */}
            <div className="flex flex-col gap-6 sm:w-2/3">
              <DialogHeader>
                <DialogTitle className="font-serif text-4xl tracking-tight sm:text-5xl">
                  {title}
                </DialogTitle>
              </DialogHeader>
              <div className="flex flex-col gap-4 font-sans text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
                <p>{description}</p>
                <p>
                  This project represents a core pillar of Zeev's vision for New
                  York, blending sociological insight with entrepreneurial
                  execution to create lasting community impact.
                </p>
              </div>

              <div className="mt-4">
                {isComingSoon ? (
                  <SignatureButton className="w-full sm:w-auto">
                    GET NOTIFIED
                  </SignatureButton>
                ) : (
                  <SignatureButton className="w-full sm:w-auto">
                    {`VISIT ${title.toUpperCase()}`}
                  </SignatureButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
