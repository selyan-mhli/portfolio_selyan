"use client";

import Link from "next/link";
import type { ReactNode, MouseEvent } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  eventData?: Record<string, string | number | boolean | undefined>;
  className?: string;
  children: ReactNode;
  target?: "_blank" | "_self";
  rel?: string;
  ariaLabel?: string;
};

function onClickFactory(
  eventName: string,
  eventData?: Record<string, string | number | boolean | undefined>
) {
  return (_event: MouseEvent<HTMLElement>) => {
    trackEvent(eventName, eventData);
  };
}

export default function TrackedLink({
  href,
  eventName,
  eventData,
  className,
  children,
  target,
  rel,
  ariaLabel,
}: TrackedLinkProps) {
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link
        href={href}
        onClick={onClickFactory(eventName, eventData)}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClickFactory(eventName, eventData)}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
