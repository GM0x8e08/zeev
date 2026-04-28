"use client";

import { SectionHeader } from "@/components/section-header";
import { SectionReveal } from "@/components/section-reveal";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { LinkedInIcon } from "@/components/linkedin-icon";
import { XIcon } from "@/components/x-icon";
import { useState } from "react";

export function ContactSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }
      setStatus("success");
      setMessage("You’re on the list. Thank you.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <SectionReveal
      id="contact"
      className="scroll-mt-8 py-16 sm:py-20 md:py-28"
    >
      <SectionHeader
        label="003 / Stay in touch"
        title="Occasional notes—no noise."
      />
      <div className="max-w-md">
        <p className="mb-8 text-[15px] leading-relaxed text-foreground/80 sm:text-base">
          Add your email for updates on writing, projects, and events. Unsubscribe anytime.
        </p>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            disabled={status === "loading"}
            className={cn(
              "min-h-10 flex-1 rounded-xl border border-input bg-background px-4 py-2.5 font-sans text-sm text-foreground shadow-sm outline-none",
              "placeholder:text-muted-foreground/70",
              "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40",
              "disabled:cursor-not-allowed disabled:opacity-60",
            )}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "inline-flex min-h-10 shrink-0 items-center justify-center rounded-xl px-6 font-sans text-sm font-medium",
              "bg-primary text-primary-foreground transition-colors",
              "hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "disabled:pointer-events-none disabled:opacity-50",
            )}
          >
            {status === "loading" ? "Joining…" : "Subscribe"}
          </button>
        </form>
        {message ? (
          <p
            role={status === "error" ? "alert" : "status"}
            className={cn(
              "mt-4 text-sm",
              status === "success" ? "text-foreground/80" : "text-destructive",
            )}
          >
            {message}
          </p>
        ) : null}

        <div className="mt-12 flex items-center gap-6">
          <span className="font-sans text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
            Connect
          </span>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-5" />
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="X"
            >
              <XIcon className="size-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
