import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";
import { SiteShell } from "@/components/site-shell";
import { StickyHeader } from "@/components/sticky-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zeev Kirsh",
  description: "Portfolio and contact",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-hidden">
        <AmbientBackground />
        <StickyHeader />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
