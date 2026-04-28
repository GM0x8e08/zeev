/**
 * Fixed decorative layer: soft blurred ellipses with slow drift (plan §2).
 * pointer-events-none so it never blocks interaction.
 */
export function AmbientBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-[15%] top-[8%] h-[min(55vw,420px)] w-[min(70vw,520px)] animate-drift-a opacity-[0.55]">
        <svg
          className="h-full w-full blur-3xl"
          viewBox="0 0 800 640"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="ambient-grad-a"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--ambient-blob-a-start)"
                stopOpacity="0.85"
              />
              <stop
                offset="100%"
                stopColor="var(--ambient-blob-a-end)"
                stopOpacity="0.45"
              />
            </linearGradient>
          </defs>
          <ellipse
            cx="400"
            cy="320"
            rx="340"
            ry="280"
            fill="url(#ambient-grad-a)"
          />
        </svg>
      </div>

      <div className="absolute -right-[12%] top-[28%] h-[min(50vw,380px)] w-[min(62vw,480px)] animate-drift-b opacity-[0.45]">
        <svg
          className="h-full w-full blur-3xl"
          viewBox="0 0 720 580"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="ambient-grad-b"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--ambient-blob-b-start)"
                stopOpacity="0.7"
              />
              <stop
                offset="100%"
                stopColor="var(--ambient-blob-b-end)"
                stopOpacity="0.35"
              />
            </linearGradient>
          </defs>
          <ellipse
            cx="360"
            cy="290"
            rx="300"
            ry="250"
            fill="url(#ambient-grad-b)"
          />
        </svg>
      </div>

      <div className="absolute bottom-[5%] left-[18%] h-[min(48vw,360px)] w-[min(58vw,440px)] animate-drift-c opacity-[0.4]">
        <svg
          className="h-full w-full blur-3xl"
          viewBox="0 0 680 560"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="ambient-grad-c"
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="var(--ambient-blob-c-start)"
                stopOpacity="0.55"
              />
              <stop
                offset="100%"
                stopColor="var(--ambient-blob-c-end)"
                stopOpacity="0.3"
              />
            </linearGradient>
          </defs>
          <ellipse
            cx="340"
            cy="280"
            rx="280"
            ry="230"
            fill="url(#ambient-grad-c)"
          />
        </svg>
      </div>
    </div>
  );
}
