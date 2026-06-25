"use client";

import { useRef } from "react";
import { gsap, ScrollSmoother, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const smoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 1.4,
          speed: 1.35,
          smoothTouch: 0.1,
          effects: true,
        });

        // Smooth in-page anchor navigation.
        const onClick = (e: MouseEvent) => {
          const link = (e.target as HTMLElement)?.closest?.(
            'a[href^="#"]'
          ) as HTMLAnchorElement | null;
          if (!link) return;
          const hash = link.getAttribute("href");
          if (!hash || hash === "#") return;
          const target = document.querySelector(hash);
          if (!target) return;
          e.preventDefault();

          // Pinned Panels scrub their [data-panel-item] content in across the
          // pin, so the pin's *start* shows an empty section. Land instead at
          // the scroll position where that reveal has finished assembling
          // (timing mirrors Panel.tsx) so the content is already on screen.
          const pinned = ScrollTrigger.getAll().find(
            (st) => st.pin && st.trigger === target
          );
          if (pinned) {
            const n = target.querySelectorAll("[data-panel-item]").length;
            const reveal = 1 + 0.15 * Math.max(0, n - 1); // dur + stagger
            const assembled = reveal / (reveal + 0.9); // + the hold tween
            const y =
              pinned.start +
              (assembled + 0.03) * (pinned.end - pinned.start);
            smoother.scrollTo(y, true);
            return;
          }

          // Otherwise land the section just below the fixed navbar instead of
          // behind it — otherwise the heading hides under the bar until you nudge.
          const navH = document.getElementById("main-nav")?.offsetHeight ?? 0;
          const y = Math.max(0, smoother.offset(target, "top top") - navH);
          smoother.scrollTo(y, true);
        };
        document.addEventListener("click", onClick);

        ScrollTrigger.refresh();

        return () => {
          document.removeEventListener("click", onClick);
          smoother.kill();
        };
      });

      return () => mm.revert();
    },
    { scope: wrapper }
  );

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
