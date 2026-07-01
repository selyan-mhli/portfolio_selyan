"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingWords({
  words,
  interval = 2200,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "0.6em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-0.6em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          className="inline-block text-accent"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
