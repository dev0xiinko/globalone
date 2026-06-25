"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Panel from "@/components/anim/Panel";
import { STATS } from "@/data/site";

export default function CompanyStats() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counters =
          root.querySelectorAll<HTMLElement>(".stat-value");

        counters.forEach((el) => {
          const end = Number(el.dataset.value ?? 0);
          const obj = { val: 0 };

          gsap.to(obj, {
            val: end,
            duration: 2,
            ease: "power2.out",
            snap: { val: 1 },
            scrollTrigger: { trigger: root, start: "top 70%", once: true },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.val));
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: ref }
  );

  return (
    <Panel className="flex min-h-screen items-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop">
      <div ref={ref} className="mx-auto w-full max-w-container-max">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-panel-item className="text-center">
              <p className="font-display-lg text-[56px] leading-none text-on-surface md:text-[72px]">
                <span className="stat-value" data-value={stat.value}>
                  {stat.value}
                </span>
                <span className="text-secondary">{stat.suffix}</span>
              </p>
              <p className="font-label-caps text-label-caps mt-4 tracking-widest text-on-surface-variant">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
