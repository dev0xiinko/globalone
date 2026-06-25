"use client";

import { useState } from "react";
import ContactModal from "@/components/ContactModal";

/**
 * Floating "Contact us" action, fixed bottom-right on every page.
 * Collapsed it's a circular icon; on hover/focus it expands to reveal the
 * label. Clicking opens the branded contact form modal.
 */
export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Contact us"
        aria-haspopup="dialog"
        className="group font-label-caps text-label-caps fixed bottom-6 right-6 z-50 flex h-14 items-center gap-0 overflow-hidden rounded-full bg-primary px-4 text-primary-foreground shadow-premium-lg transition-all duration-300 hover:gap-3 hover:bg-secondary hover:text-secondary-foreground focus-visible:gap-3"
      >
        <span className="material-symbols-outlined shrink-0 text-2xl">
          support_agent
        </span>
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-35 group-hover:opacity-100 group-focus-visible:max-w-35 group-focus-visible:opacity-100">
          CONTACT US
        </span>
      </button>

      <ContactModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
