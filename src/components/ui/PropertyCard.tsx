import Image from "next/image";
import type { Listing } from "@/data/properties";

const tagStyles: Record<Listing["tag"], string> = {
  "FOR SALE": "bg-primary text-primary-foreground",
  "FOR RENT": "bg-secondary text-secondary-foreground",
  NEW: "bg-destructive text-destructive-foreground",
};

export default function PropertyCard({
  listing,
  seamless = false,
  mediaClassName,
}: {
  listing: Listing;
  /** drop the border, radius and lift — for seamless carousels */
  seamless?: boolean;
  /** override the image box sizing (e.g. a fixed/clamped height) */
  mediaClassName?: string;
}) {
  return (
    <article
      className={
        seamless
          ? "group flex h-full flex-col overflow-hidden bg-card"
          : "group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      }
    >
      <div
        className={`relative overflow-hidden ${
          mediaClassName ?? (seamless ? "aspect-4/5" : "aspect-4/3")
        }`}
      >
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span
          className={`font-label-caps text-[10px] absolute left-4 top-4 rounded-full px-3 py-1.5 tracking-widest ${tagStyles[listing.tag]}`}
        >
          {listing.tag}
        </span>
        <span className="font-label-caps text-[10px] absolute right-4 top-4 rounded-full bg-black/40 px-3 py-1.5 tracking-widest text-white backdrop-blur-sm">
          {listing.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-price-display text-2xl text-primary">
          {listing.price}
        </p>
        <h3 className="font-headline-md mt-2 text-xl text-on-surface">
          {listing.title}
        </h3>
        <p className="font-body-md mt-1 flex items-center gap-1.5 text-on-surface-variant">
          <span className="material-symbols-outlined text-base text-secondary">
            location_on
          </span>
          {listing.location}
        </p>

        <div className="font-label-caps text-[11px] mt-auto flex items-center gap-5 border-t border-border pt-4 tracking-wide text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">bed</span>
            {listing.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">bathtub</span>
            {listing.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">
              square_foot
            </span>
            {listing.area}
          </span>
        </div>
      </div>
    </article>
  );
}
