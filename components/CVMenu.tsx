"use client";

import { useEffect, useId, useRef, useState } from "react";
import { FileText } from "lucide-react";

export default function CVMenu({
  className = "",
  buttonClassName,
  placement = "down",
}: {
  className?: string;
  buttonClassName: string;
  placement?: "up" | "down";
}) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const id = useId();

  function openDropdown() {
    clearTimeout(timer.current);
    setClosing(false);
    setOpen(true);
  }

  function closeDropdown() {
    clearTimeout(timer.current);
    setOpen(false);
    setClosing(true);
    const closeMs = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--dropdown-close-dur")
    ) || 150;
    timer.current = setTimeout(() => setClosing(false), closeMs);
  }

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div
      ref={root}
      className={`relative ${className}`}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") openDropdown();
      }}
      onPointerLeave={() => {
        if (!root.current?.contains(document.activeElement)) closeDropdown();
      }}
      onFocusCapture={openDropdown}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) closeDropdown();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          trigger.current?.focus();
          closeDropdown();
        }
      }}
    >
      <a
        ref={trigger}
        href="/cv"
        aria-expanded={open}
        aria-controls={id}
        className={buttonClassName}
      >
        <FileText size={16} aria-hidden="true" /> CV
      </a>
      <nav
        id={id}
        aria-label="Versions du CV"
        aria-hidden={!open}
        inert={!open}
        data-origin={placement === "up" ? "bottom-right" : "top-right"}
        className={`t-dropdown absolute right-0 z-50 w-44 ${
          placement === "up" ? "bottom-full pb-2" : "top-full pt-2"
        } ${open ? "is-open" : closing ? "is-closing" : ""}`}
      >
        <div className="rounded-2xl border border-sand/15 bg-surface p-1.5 text-sm text-sand shadow-xl">
          {(["corporate", "research"] as const).map((variant) => (
            <a
              key={variant}
              href={`/cv/${variant}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`CV ${variant === "corporate" ? "Corporate" : "Research"} (PDF, nouvel onglet)`}
              className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-sand/5 hover:text-accent focus-visible:text-accent"
            >
              {variant === "corporate" ? "Corporate" : "Research"}
              <span className="text-xs text-muted">PDF ↗</span>
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
