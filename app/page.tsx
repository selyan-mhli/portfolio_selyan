"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroScene from "@/components/HeroScene";
import MobileScrollView from "@/components/MobileScrollView";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 500px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <main className="h-screen w-full overflow-hidden">
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#09090f]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div className="relative mb-6 h-10 w-10">
              <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#a855f7]" />
            </div>
            <p className="text-sm tracking-[0.3em] text-[#a855f7]/60">LOADING</p>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobile ? <MobileScrollView /> : <HeroScene />}
    </main>
  );
}
