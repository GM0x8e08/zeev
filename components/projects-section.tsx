"use client";

import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { SectionReveal } from "@/components/section-reveal";

export function ProjectsSection() {
  return (
    <SectionReveal
      id="projects"
      className="scroll-mt-8 py-16 sm:py-20 md:py-28"
    >
      <SectionHeader
        label="002 / Projects"
        title="Work in progress, built with care."
      />
      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <ProjectCard
          index="01"
          title="Yness"
          description="An initiative focused on gathering people and ideas at the intersection of culture and enterprise—experimenting with how communities sustain momentum in a city that never stands still."
          image="/e22aca7014e1bc6d24d1909e071f9892.webp"
          metadata={[
            { label: "STATUS", value: "ACTIVE" },
            { label: "FOCUS", value: "NYC" },
            { label: "ROLE", value: "FOUNDER" },
          ]}
          notionUrl="https://notion.so/yness"
        />

        <ProjectCard
          index="02"
          title="Cape York Meteorite"
          description="A long-form project on one of history's great meteoritic arrivals—bridging scientific detail with the human appetite for wonder. Documentation and media are in active preparation."
          image="/1abebfaaaefe86e5be4a7255021a95e5.webp"
          metadata={[
            { label: "STATUS", value: "COMING SOON" },
            { label: "FOCUS", value: "RESEARCH" },
            { label: "ROLE", value: "EDITOR" },
          ]}
          isComingSoon
        />
      </div>
    </SectionReveal>
  );
}
