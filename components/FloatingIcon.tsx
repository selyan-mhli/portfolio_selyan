"use client";

import Image from "next/image";
import { motion, MotionValue, useTransform } from "framer-motion";

type FloatingIconProps = {
  src: string;
  alt: string;
  className: string;
  label: string;
  side: "left" | "right" | "center";
  size?: number;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  depth?: number;
  onClick?: () => void;
  disabled?: boolean;
};

export default function FloatingIcon({
  src,
  alt,
  className,
  label,
  side,
  size = 280,
  mouseX,
  mouseY,
  depth = 30,
  onClick,
  disabled = false
}: FloatingIconProps) {
  const translateX = useTransform(mouseX, (v) => v * depth);
  const translateY = useTransform(mouseY, (v) => v * depth);

  const labelSide = side === "right" ? "right-full mr-3" : "left-full ml-3";

  return (
    <motion.button
      type="button"
      className={`group absolute cursor-pointer border-0 bg-transparent p-0 ${className}`}
      whileHover={disabled ? {} : { scale: 1.18 }}
      whileTap={disabled ? {} : { scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
        mass: 0.6
      }}
      style={{ x: translateX, y: translateY, willChange: "transform" }}
      onClick={disabled ? undefined : onClick}
    >
      <div className="relative w-full">
        <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.28)_0%,rgba(168,85,247,0)_70%)] opacity-50 blur-xl transition-opacity duration-300 group-hover:opacity-90" />
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          loading="lazy"
          quality={75}
          className="h-auto w-full select-none object-contain drop-shadow-[0_8px_24px_rgba(168,85,247,0.25)]"
        />
        <span
          className={`pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-[var(--font-display)] text-sm font-semibold tracking-wide text-sand opacity-0 transition-opacity duration-300 group-hover:opacity-100 hidden md:block md:text-base ${labelSide}`}
        >
          {label}
        </span>
      </div>
    </motion.button>
  );
}
