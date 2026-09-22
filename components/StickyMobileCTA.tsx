"use client";

import { Mail, FileText } from "lucide-react";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 flex gap-2">
      <a
        href="/#contact"
        className="flex-1 flex items-center justify-center gap-2 rounded-full bg-accent text-ink py-3 text-sm font-medium"
      >
        <Mail size={16} /> Contact
      </a>
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-black/60 backdrop-blur px-5 py-3 text-sm"
      >
        <FileText size={16} /> CV
      </a>
    </div>
  );
}
