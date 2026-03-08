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

    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    // Touch devices: use gyroscope for subtle parallax
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      let cachedRect = element.getBoundingClientRect();
      const updateRect = () => {
        cachedRect = element.getBoundingClientRect();
      };

      const handleOrientation = (e: DeviceOrientationEvent) => {
        const gamma = e.gamma ?? 0; // left-right tilt
        const beta = e.beta ?? 0; // front-back tilt
        rawX.set(clamp(gamma / 60, -0.5, 0.5));
        rawY.set(clamp((beta - 45) / 60, -0.5, 0.5));
      };

      // Fallback/extra control on smartphones where orientation access is blocked.
      const handleTouchMove = (event: TouchEvent) => {
        const touch = event.touches[0];
        if (!touch) return;
        const px = (touch.clientX - cachedRect.left) / cachedRect.width - 0.5;
        const py = (touch.clientY - cachedRect.top) / cachedRect.height - 0.5;
        rawX.set(clamp(px, -0.5, 0.5));
        rawY.set(clamp(py, -0.5, 0.5));
      };

      const reset = () => {
        rawX.set(0);
        rawY.set(0);
      };

      window.addEventListener("resize", updateRect, { passive: true });
      window.addEventListener("scroll", updateRect, { passive: true });
      window.addEventListener("deviceorientation", handleOrientation, {
        passive: true
      });
      element.addEventListener("touchmove", handleTouchMove, { passive: true });
      element.addEventListener("touchend", reset, { passive: true });
      element.addEventListener("touchcancel", reset, { passive: true });

      return () => {
        window.removeEventListener("resize", updateRect);
        window.removeEventListener("scroll", updateRect);
        window.removeEventListener("deviceorientation", handleOrientation);
        element.removeEventListener("touchmove", handleTouchMove);
        element.removeEventListener("touchend", reset);
        element.removeEventListener("touchcancel", reset);
      };
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
