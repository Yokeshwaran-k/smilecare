"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div className="relative bg-navy text-white">
      <div className="mx-auto flex max-w-content items-center justify-center gap-2 px-10 py-2.5 text-center text-[13px] font-medium tracking-wide sm:text-sm">
        <Sparkles className="hidden h-3.5 w-3.5 shrink-0 text-teal-light sm:block" aria-hidden="true" />
        <p>
          Accepting New Patients <span className="mx-1.5 text-teal-light">•</span> Same-Day Appointments Available
        </p>
      </div>
      <button
        type="button"
        onClick={() => setOpen(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
