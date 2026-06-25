"use client";

import { useEffect, useRef, useState } from "react";
import PropertyCard from "@/components/ui/PropertyCard";
import type { Listing } from "@/data/properties";

const SIZES = {
  // less vertical room (shares its section with the search form)
  compact: { item: "w-[240px] sm:w-[280px]", media: "aspect-square" },
  // owns most of its section — can run taller
  tall: { item: "w-[300px] sm:w-[360px]", media: "aspect-square" },
};

export default function ResultCarousel({
  listings,
  label,
  size = "tall",
  rounded = false,
}: {
  listings: Listing[];
  label?: string;
  size?: keyof typeof SIZES;
  /** round the card corners (clips the seamless card + its image) */
  rounded?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });
  const [progress, setProgress] = useState(0);
  const [thumb, setThumb] = useState(1);
  const s = SIZES[size];

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setThumb(el.scrollWidth ? el.clientWidth / el.scrollWidth : 1);
    setProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    // Let touch use native momentum scrolling; only drag-scroll with a mouse.
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 6) drag.current.moved = true;
    el.scrollLeft = drag.current.startLeft - dx;
  };

  const stop = () => {
    drag.current.down = false;
  };

  // Suppress the card's navigation if the pointerup ended a drag, not a click.
  const onClickCapture = (e: React.MouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const showThumb = thumb < 0.999;

  return (
    <div>
      {(label || showThumb) && (
        <div className="mx-auto mb-6 flex max-w-container-max items-center justify-between gap-6 px-edge-margin-mobile md:px-edge-margin-desktop">
          {label ? (
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              {label}
            </span>
          ) : (
            <span />
          )}

          {showThumb && (
            <div className="relative h-[3px] w-28 overflow-hidden rounded-full bg-border sm:w-40">
              <span
                className="absolute top-0 h-full rounded-full bg-secondary"
                style={{
                  width: `${thumb * 100}%`,
                  left: `${progress * (1 - thumb) * 100}%`,
                }}
              />
            </div>
          )}
        </div>
      )}

      <div
        ref={ref}
        onScroll={update}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stop}
        onPointerLeave={stop}
        onClickCapture={onClickCapture}
        className="flex cursor-grab touch-pan-x select-none gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-edge-margin-mobile active:cursor-grabbing md:px-edge-margin-desktop [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {listings.map((listing) => (
          <div
            key={listing.id}
            className={`${s.item} shrink-0 ${
              rounded ? "overflow-hidden rounded-2xl" : ""
            }`}
          >
            <PropertyCard listing={listing} seamless mediaClassName={s.media} />
          </div>
        ))}
      </div>
    </div>
  );
}
