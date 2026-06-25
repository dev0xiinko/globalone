"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { HERO_SLIDES } from "@/data/site";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const slides = gsap.utils.toArray<HTMLElement>(".hero-slide");
      if (!slides.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const heading = slides[0].querySelector<HTMLElement>(".hero-name");
        if (heading) gsap.set(heading, { visibility: "visible" });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Entrance for the first slide's overlay.
        const first = slides[0];
        const heading = first.querySelector<HTMLElement>(".hero-name");
        let split: SplitText | undefined;
        const intro = () => {
          const tl = gsap.timeline({ delay: 0.2 });
          if (heading) {
            split = SplitText.create(heading, { type: "lines", mask: "lines" });
            gsap.set(heading, { visibility: "visible" });
            tl.from(split.lines, {
              yPercent: 120,
              opacity: 0,
              duration: 1.1,
              ease: "premium",
              stagger: 0.12,
            });
          }
          tl.from(
            first.querySelectorAll(".hero-meta"),
            { opacity: 0, y: 24, duration: 1, ease: "premium", stagger: 0.12 },
            0.15
          ).from(
            sectionRef.current?.querySelector(".hero-scroll") ?? [],
            { opacity: 0, duration: 1 },
            0.6
          );
        };

        if (document.fonts?.status !== "loaded") {
          document.fonts.ready.then(intro);
        } else {
          intro();
        }

        // Scroll-driven crossfade between the three properties.
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=220%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        for (let i = 1; i < slides.length; i++) {
          tl.to(slides[i], { opacity: 1, duration: 1 }, i - 1)
            .to(slides[i - 1], { opacity: 0, duration: 1 }, "<")
            .fromTo(
              slides[i].querySelector("img"),
              { scale: 1.25 },
              { scale: 1, duration: 1 },
              "<"
            )
            .from(
              slides[i].querySelectorAll(".hero-meta, .hero-name"),
              { opacity: 0, yPercent: 30, duration: 0.6, stagger: 0.08 },
              "<0.2"
            );
        }

        return () => tl.kill();
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-ink"
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.name}
          className="hero-slide absolute inset-0"
          style={{ opacity: i === 0 ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.name}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/10" />

          {/* Lower overlay: name + address (left), price (right) */}
          <div className="absolute inset-x-0 bottom-0 px-edge-margin-mobile pb-20 md:px-edge-margin-desktop md:pb-24">
            <div className="mx-auto flex max-w-container-max flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="hero-meta font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary">
                  FEATURED RESIDENCE
                </span>
                <h1
                  className={`hero-name font-display-lg text-[40px] leading-[1.05] text-white drop-shadow-2xl md:text-[64px] ${
                    i === 0 ? "split-prep" : ""
                  }`}
                >
                  {slide.name}
                </h1>
                <p className="hero-meta font-body-lg mt-3 flex items-center gap-2 text-white/75">
                  <span className="material-symbols-outlined text-base text-secondary">
                    location_on
                  </span>
                  {slide.address}
                </p>
              </div>

              <div className="md:text-right">
                <span className="hero-meta font-label-caps text-label-caps mb-2 block tracking-[0.3em] text-secondary">
                  GUIDE PRICE
                </span>
                <p className="hero-meta font-price-display text-[34px] text-white drop-shadow-2xl md:text-[48px]">
                  {slide.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-scroll pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 md:flex">
        <span className="font-label-caps text-[10px] tracking-widest">SCROLL</span>
        <div className="relative h-12 w-px overflow-hidden bg-white/25">
          <div className="absolute left-0 top-0 h-full w-full animate-[scroll_2s_infinite] bg-secondary" />
        </div>
      </div>
    </section>
  );
}
