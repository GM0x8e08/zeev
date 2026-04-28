import { SectionReveal } from "@/components/section-reveal";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <SectionReveal
      as="footer"
      className="mt-8 border-t border-border/80 py-12 md:mt-12 md:py-16"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="font-sans text-sm text-muted-foreground">
          © {year} Zeev Kirsh. All rights reserved.
        </p>
        <nav aria-label="Social" className="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            X
          </a>
        </nav>
      </div>
    </SectionReveal>
  );
}
