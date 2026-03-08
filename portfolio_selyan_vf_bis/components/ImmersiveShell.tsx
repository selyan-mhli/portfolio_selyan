"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

const MobileScrollView = dynamic(() => import("@/components/MobileScrollView"), {
  ssr: false,
});

export default function ImmersiveShell() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 820px)");
    setIsMobile(mql.matches);
    const handler = (event: MediaQueryListEvent) => setIsMobile(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <main className="h-screen w-full overflow-hidden" role="main" aria-label="Mode immersif">
      {isMobile === null ? (
        <div className="flex h-full items-center justify-center text-sm tracking-[0.2em] text-bronze/70">
          MODE IMMERSIF
        </div>
      ) : isMobile ? (
        <MobileScrollView />
      ) : (
        <HeroScene />
      )}
    </main>
  );
}
