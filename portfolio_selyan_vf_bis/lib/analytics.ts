"use client";

type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, payload: EventPayload = {}): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(
    new CustomEvent("portfolio:track", {
      detail: {
        eventName,
        ...payload,
      },
    })
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (process.env.NODE_ENV !== "production") {
    // Keep lightweight debug visibility for analytics wiring during local dev.
    console.info("[analytics]", eventName, payload);
  }
}
