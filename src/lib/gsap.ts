import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(
    ScrollTrigger,
    ScrollSmoother,
    SplitText,
    CustomEase,
    useGSAP
  );

  // Signature easing used across the site for a cohesive, premium feel.
  if (!CustomEase.get("premium")) {
    CustomEase.create("premium", "M0,0 C0.16,1 0.3,1 1,1");
  }
}

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, CustomEase, useGSAP };
