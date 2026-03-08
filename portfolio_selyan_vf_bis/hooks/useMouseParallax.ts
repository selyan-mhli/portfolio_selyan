"use client";

import { RefObject, useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

type UseMouseParallaxOptions = {
  enabled?: boolean;
  stiffness?: number;
  damping?: number;
  mass?: number;
};

export function useMouseParallax(
  containerRef: RefObject<HTMLElement | null>,
  options: UseMouseParallaxOptions = {}
) {
  const {
    enabled = true,
    stiffness = 120,
    damping = 26,
    mass = 0.7
  } = options;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness, damping, mass });
  const y = useSpring(rawY, { stiffness, damping, mass });

  useEffect(() => {
    const element = containerRef.current;
    if (!element || !enabled) {
      rawX.set(0);
      rawY.set(0);
      return;
    }

    // Touch devices: use gyroscope for subtle parallax
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      const handleOrientation = (e: DeviceOrientationEvent) => {
        const gamma = e.gamma ?? 0; // left-right tilt
        const beta = e.beta ?? 0; // front-back tilt
        rawX.set(Math.max(-0.5, Math.min(0.5, gamma / 60)));
        rawY.set(Math.max(-0.5, Math.min(0.5, (beta - 45) / 60)));
      };
      window.addEventListener("deviceorientation", handleOrientation, {
        passive: true
      });
      return () =>
        window.removeEventListener("deviceorientation", handleOrientation);
    }

    // Cache rect to avoid forced reflow on every mousemove
    let cachedRect = element.getBoundingClientRect();
    const updateRect = () => { cachedRect = element.getBoundingClientRect(); };
    window.addEventListener("resize", updateRect, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });

    // Desktop: mouse parallax
    const handleMove = (event: MouseEvent) => {
      const px = (event.clientX - cachedRect.left) / cachedRect.width - 0.5;
      const py = (event.clientY - cachedRect.top) / cachedRect.height - 0.5;
      rawX.set(px);
      rawY.set(py);
    };

    const reset = () => {
      rawX.set(0);
      rawY.set(0);
    };

    element.addEventListener("mousemove", handleMove, { passive: true });
    element.addEventListener("mouseleave", reset, { passive: true });

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", reset);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [containerRef, enabled, rawX, rawY]);

  return { x, y };
}
