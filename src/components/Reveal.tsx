"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** vertical offset to animate in from (px) */
  y?: number;
  /** delay before the animation starts (s) */
  delay?: number;
  /** when set, stagger the element's direct children instead of itself */
  stagger?: number;
};

/**
 * Scroll-triggered entrance animation powered by GSAP ScrollTrigger.
 */
export default function Reveal({
  children,
  className = "",
  y = 48,
  delay = 0,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger !== undefined ? Array.from(el.children) : el;
        if (Array.isArray(targets) && !targets.length) return;

        gsap.from(targets, {
          opacity: 0,
          y,
          duration: 1.1,
          ease: "premium",
          delay,
          stagger: stagger ?? 0,
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
