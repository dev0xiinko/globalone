"use client";

import { createElement, useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

type SplitRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  type?: "lines" | "words" | "chars";
  delay?: number;
  stagger?: number;
  start?: string;
};

/**
 * Masked, line-by-line (or word/char) reveal powered by GSAP SplitText.
 */
export default function SplitReveal({
  children,
  className = "",
  as = "h2",
  type = "lines",
  delay = 0,
  stagger = 0.09,
  start = "top 85%",
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let split: SplitText | undefined;

        const run = () => {
          split = SplitText.create(el, { type, mask: type });
          const targets = (split[type] as HTMLElement[]) ?? [];
          gsap.set(el, { visibility: "visible" });
          if (!targets.length) return;
          gsap.from(targets, {
            yPercent: 115,
            opacity: 0,
            duration: 1.1,
            ease: "premium",
            stagger,
            delay,
            scrollTrigger: { trigger: el, start, once: true },
          });
        };

        if (document.fonts?.status !== "loaded") {
          document.fonts.ready.then(run);
        } else {
          run();
        }

        return () => split?.revert();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { visibility: "visible" });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return createElement(
    as,
    { ref, className: `split-prep ${className}` },
    children
  );
}
