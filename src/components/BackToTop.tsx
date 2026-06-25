"use client";

import { useState } from "react";
import { gsap, ScrollSmoother, useGSAP } from "@/lib/gsap";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useGSAP(() => {
    const update = () => {
      const smoother = ScrollSmoother.get();
      const y = smoother ? smoother.scrollTop() : window.scrollY;
      const show = y > window.innerHeight * 0.6;
      setVisible((prev) => (prev !== show ? show : prev));
    };
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  });

  const toTop = () => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(0, true);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={toTop}
      aria-label="Back to top"
      className={`fixed bottom-6 left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-premium-lg transition-all duration-300 hover:bg-secondary hover:text-secondary-foreground ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <span className="material-symbols-outlined">arrow_upward</span>
    </button>
  );
}
