"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});
const MobileScrollView = dynamic(() => import("@/components/MobileScrollView"), {
  ssr: false,
});

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 500px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    const onReady = () => setLoaded(true);
    if (document.readyState === "complete") {
      setLoaded(true);
      clearTimeout(t);
    } else {
      window.addEventListener("load", onReady);
    }
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onReady);
    };
  }, []);

  return (
    <main className="h-screen w-full overflow-hidden" role="main">
      {(!loaded || isMobile === null) && (
        <div
          className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#09090f] transition-opacity duration-[600ms] ease-in-out ${loaded && isMobile !== null ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          role="status"
          aria-label="Loading"
        >
          <div className="relative mb-6 h-10 w-10">
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#a855f7]" />
          </div>
          <p className="text-sm tracking-[0.3em] text-[#a855f7]/60" aria-live="polite">LOADING</p>
        </div>
      )}
      {isMobile !== null && (isMobile ? <MobileScrollView /> : <HeroScene />)}
    </main>
  );
}
