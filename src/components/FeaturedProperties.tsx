"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import PropertyCard from "@/components/ui/PropertyCard";
import { FEATURED_PROPERTIES } from "@/data/properties";

export default function FeaturedProperties() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current;
          if (!track) return;

          const getDistance = () =>
            track.scrollWidth - window.innerWidth + 160;

          const tween = gsap.to(track, {
            x: () => -getDistance(),
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: () => "+=" + getDistance(),
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          return () => tween.kill();
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="featured"
      ref={sectionRef}
      className="flex min-h-screen scroll-mt-24 items-center overflow-hidden py-32 lg:py-0"
    >
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-gutter overflow-x-auto px-edge-margin-mobile lg:h-screen lg:items-center lg:overflow-visible lg:px-edge-margin-desktop"
      >
        {/* Intro panel */}
        <div className="flex min-w-[280px] shrink-0 snap-start flex-col justify-center lg:min-w-[420px]">
          <span className="font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary">
            HANDPICKED
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
            Featured
            <br />
            Properties
          </h2>
          <p className="font-body-lg mt-6 max-w-xs text-on-surface-variant">
            A curated selection of our most exceptional residences. Scroll to
            explore the collection.
          </p>
          <span className="font-label-caps text-label-caps mt-10 hidden items-center gap-2 text-on-surface-variant lg:flex">
            SCROLL
            <span className="material-symbols-outlined text-base">east</span>
          </span>
        </div>

        {FEATURED_PROPERTIES.map((listing) => (
          <div
            key={listing.id}
            className="w-[300px] shrink-0 snap-start sm:w-[360px]"
          >
            <PropertyCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  );
}
