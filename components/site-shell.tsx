import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
};

/**
 * Horizontal rhythm + max width so content stays readable with generous margins (plan §2).
 */
export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative z-0 flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 py-12 sm:px-8 sm:py-16 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:max-w-7xl">
        {children}
      </div>
    </div>
  );
}
