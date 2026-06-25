"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type PanelProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** element tag to render. default "section" */
  as?: keyof React.JSX.IntrinsicElements;
  /** pin the section and scrub its content in (desktop). default true */
  pin?: boolean;
};

/**
 * A scroll-driven, full-height "panel" — like the hero. On desktop it pins the
 * section and scrubs its [data-panel-item] children into place as you scroll
 * through it, then holds. On mobile / reduced-motion it falls back to a simple
 * reveal-on-enter (pinning every section is too heavy for touch devices).
 */
export default function Panel({
  id,
  className = "",
  children,
  as = "section",
  pin = true,
}: PanelProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = ref.current;
      if (!section) return;
      const items = section.querySelectorAll("[data-panel-item]");
      if (!items.length) return;

      const mm = gsap.matchMedia();

      // Desktop, motion-ok → pinned scrub (the "hero" treatment).
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          if (!pin) {
            const t = gsap.from(items, {
              y: 60,
              opacity: 0,
              duration: 1.1,
              ease: "premium",
              stagger: 0.12,
              scrollTrigger: { trigger: section, start: "top 80%", once: true },
            });
            return () => t.kill();
          }

          gsap.set(items, { opacity: 0, y: 70 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=110%",
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          tl.to(items, {
            opacity: 1,
            y: 0,
            ease: "none",
            duration: 1,
            stagger: 0.15,
          });
          // hold the assembled panel before releasing to the next section
          tl.to({}, { duration: 0.9 });

          return () => tl.kill();
        }
      );

      // Mobile / reduced-motion → lightweight reveal, no pin.
      mm.add("(max-width: 1023px), (prefers-reduced-motion: reduce)", () => {
        const t = gsap.from(items, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "premium",
          stagger: 0.1,
          scrollTrigger: { trigger: section, start: "top 85%", once: true },
        });
        return () => t.kill();
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  const Tag = as as React.ElementType;
  return (
    <Tag id={id} ref={ref} className={className}>
      {children}
    </Tag>
  );
}
