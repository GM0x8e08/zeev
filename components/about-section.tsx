import { SectionHeader } from "@/components/section-header";
import { SectionReveal } from "@/components/section-reveal";

export function AboutSection() {
  return (
    <SectionReveal
      id="about"
      className="scroll-mt-8 py-16 sm:py-20 md:py-28"
    >
      <SectionHeader
        label="001 / About"
        title="Practice at the edge of law and culture."
      />
      <div className="max-w-[38rem] space-y-6 text-[15px] leading-[1.78] text-foreground/85 sm:text-base sm:leading-[1.78]">
        <p>
          Zeev Kirsh works where legal judgment meets social inquiry—advising people and
          organizations while asking how institutions actually behave, not only how they are
          supposed to behave on paper.
        </p>
        <p>
          Trained as an attorney and grounded in sociology, he builds ventures and communities
          that treat New York as a living laboratory: dense networks, shifting regulation, and
          the everyday friction where policy meets real lives.
        </p>
        <p className="text-foreground/75">
          Whether structuring a new initiative or shaping a public conversation, the through-line is
          steady: clarity of purpose, respect for complexity, and design that earns trust over
          time.
        </p>
      </div>
    </SectionReveal>
  );
}
