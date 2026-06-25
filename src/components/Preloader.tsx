"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      // Hold scroll while the intro plays.
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          ScrollTrigger.refresh();
          setDone(true);
        },
      });

      tl.set(".preloader-logo", { opacity: 0, y: 24, filter: "blur(8px)" })
        .set(".preloader-bar span", { scaleX: 0, transformOrigin: "left" })
        .to(".preloader-logo", {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "premium",
        })
        .to(
          ".preloader-bar span",
          { scaleX: 1, duration: 1.1, ease: "premium" },
          "-=0.6"
        )
        .to(".preloader-logo", { opacity: 0, y: -16, duration: 0.5, ease: "power2.in" }, "+=0.25")
        .to(
          ref.current,
          { yPercent: -100, duration: 0.9, ease: "premium" },
          "-=0.1"
        );

      return () => {
        document.body.style.overflow = "";
      };
    },
    { scope: ref }
  );

  if (done) return null;

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
    >
      <div className="preloader-logo flex flex-col items-center">
        <Image
          src="/globalone-logo-white.png"
          alt="Global One"
          width={170}
          height={119}
          priority
          className="h-24 w-auto"
        />
      </div>
      <div className="preloader-bar mt-10 h-px w-40 overflow-hidden bg-white/15">
        <span className="block h-full w-full bg-secondary" />
      </div>
    </div>
  );
}
