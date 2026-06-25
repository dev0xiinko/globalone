"use client";

import Image from "next/image";
import { useState } from "react";
import type { Listing } from "@/data/properties";

const tagStyles: Record<Listing["tag"], string> = {
  "FOR SALE": "bg-primary text-primary-foreground",
  "FOR RENT": "bg-secondary text-secondary-foreground",
  NEW: "bg-destructive text-destructive-foreground",
};

export default function PropertyGallery({
  images,
  title,
  tag,
  category,
}: {
  images: string[];
  title: string;
  tag: Listing["tag"];
  category: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg bg-card shadow-premium-lg">
        <Image
          key={active}
          src={images[active]}
          alt={`${title} — photo ${active + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <span
          className={`font-label-caps text-[10px] absolute left-5 top-5 rounded-full px-3 py-1.5 tracking-widest ${tagStyles[tag]}`}
        >
          {tag}
        </span>
        <span className="font-label-caps text-[10px] absolute right-5 top-5 rounded-full bg-black/40 px-3 py-1.5 tracking-widest text-white backdrop-blur-sm">
          {category}
        </span>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3">
        {images.map((img, i) => (
          <button
            key={img + i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View photo ${i + 1}`}
            aria-current={i === active}
            className={`relative aspect-square overflow-hidden rounded-md transition-all ${
              i === active
                ? "ring-2 ring-secondary ring-offset-2 ring-offset-background"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt=""
              fill
              sizes="120px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
