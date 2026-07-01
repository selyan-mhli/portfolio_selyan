"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

type TagName = "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";

export default function ScrambleText({
  text,
  className = "",
  as = "span",
}: {
  text: string;
  className?: string;
  as?: TagName;
}) {
  const ref = useRef<HTMLElement>(null);
  const Tag = as as "span";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let played = false;

    const split = () => {
      // word + char split, preserving spaces
      const words = text.split(" ");
      el.innerHTML = words
        .map((w, wi) => {
          const chars = [...w]
            .map(
              (c) =>
                `<span class="st-char" style="display:inline-block;will-change:transform,opacity">${c}</span>`
            )
            .join("");
          return `<span class="st-word" style="display:inline-block;white-space:nowrap">${chars}</span>${
            wi < words.length - 1 ? '<span style="display:inline-block">&nbsp;</span>' : ""
          }`;
        })
        .join("");
    };

    const revert = () => {
      el.innerHTML = "";
      el.textContent = text;
    };

    const play = () => {
      if (played) return;
      played = true;
      split();
      const chars = el.querySelectorAll(".st-char");
      gsap.fromTo(
        chars,
        { yPercent: 110, opacity: 0, rotate: 6 },
        {
          yPercent: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.025,
          onComplete: revert,
        }
      );
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            play();
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={className}
      style={{ overflow: "hidden", display: "inline-block" }}
    >
      {text}
    </Tag>
  );
}
