import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import PropertyGallery from "@/components/property/PropertyGallery";
import PropertyCard from "@/components/ui/PropertyCard";
import {
  ALL_PROPERTIES,
  getDescription,
  getFeatures,
  getGallery,
  getHighlights,
  getPropertyById,
  getRelatedProperties,
} from "@/data/properties";

type Params = { params: Promise<{ id: string }> };

// Pre-render a static page for every known property.
export function generateStaticParams() {
  return ALL_PROPERTIES.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) return { title: "Property not found | Global One" };
  return {
    title: `${property.title} — ${property.location} | Global One`,
    description: getDescription(property),
  };
}

export default async function PropertyPage({ params }: Params) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) notFound();

  const gallery = getGallery(property);
  const features = getFeatures(property);
  const highlights = getHighlights(property);
  const description = getDescription(property);
  const related = getRelatedProperties(property.id, 3);

  return (
    <>
      <SiteHeader />

      <main className="px-edge-margin-mobile pb-24 pt-10 md:px-edge-margin-desktop">
        <div className="mx-auto w-full max-w-container-max">
          {/* Breadcrumb */}
          <Link
            href="/#featured"
            className="font-label-caps text-label-caps mb-8 inline-flex items-center gap-2 text-on-surface-variant transition-colors hover:text-on-surface"
          >
            <span className="material-symbols-outlined text-base">west</span>
            ALL PROPERTIES
          </Link>

          {/* Gallery + summary */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <PropertyGallery
              images={gallery}
              title={property.title}
              tag={property.tag}
              category={property.category}
            />

            <div className="flex flex-col justify-center">
              <span className="font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary">
                {property.category}
              </span>
              <h1 className="font-display-lg text-display-lg-mobile text-on-surface md:text-[56px] md:leading-[1.05]">
                {property.title}
              </h1>
              <p className="font-body-lg mt-4 flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">
                  location_on
                </span>
                {property.location}
              </p>

              <p className="font-price-display mt-8 text-[40px] text-primary md:text-[48px]">
                {property.price}
              </p>

              {/* Quick stats */}
              <div className="font-label-caps text-[12px] mt-8 flex items-center gap-8 border-y border-border py-6 tracking-wide text-on-surface">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    bed
                  </span>
                  {property.beds} BEDS
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    bathtub
                  </span>
                  {property.baths} BATHS
                </span>
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary">
                    square_foot
                  </span>
                  {property.area}
                </span>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="font-label-caps text-label-caps flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  INQUIRE NOW
                </Link>
                <Link
                  href="/#contact"
                  className="font-label-caps text-label-caps flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-on-surface transition-colors hover:border-secondary hover:text-secondary"
                >
                  <span className="material-symbols-outlined text-lg">
                    calendar_month
                  </span>
                  SCHEDULE A VIEWING
                </Link>
              </div>
            </div>
          </div>

          {/* Overview + features + highlights */}
          <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                Overview
              </h2>
              <p className="font-body-lg mt-6 leading-relaxed text-on-surface-variant">
                {description}
              </p>

              <h3 className="font-headline-md mt-14 text-2xl text-on-surface">
                Features &amp; Amenities
              </h3>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="font-body-md flex items-center gap-3 text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-secondary">
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights card */}
            <aside className="h-fit rounded-lg border border-border bg-card p-8 shadow-premium">
              <h3 className="font-label-caps text-label-caps mb-6 tracking-[0.3em] text-secondary">
                KEY DETAILS
              </h3>
              <dl className="flex flex-col divide-y divide-border">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between py-4"
                  >
                    <dt className="font-body-md text-on-surface-variant">
                      {item.label}
                    </dt>
                    <dd className="font-body-md font-medium text-on-surface">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          {/* You might like */}
          <div className="mt-28">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <span className="font-label-caps text-label-caps mb-3 block tracking-[0.3em] text-secondary">
                  KEEP EXPLORING
                </span>
                <h2 className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg">
                  Properties you might like
                </h2>
              </div>
              <Link
                href="/#featured"
                className="font-label-caps text-label-caps hidden items-center gap-2 text-on-surface-variant transition-colors hover:text-on-surface md:flex"
              >
                VIEW ALL
                <span className="material-symbols-outlined text-base">east</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
              {related.map((listing) => (
                <PropertyCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Compact footer */}
      <footer className="border-t border-border px-edge-margin-mobile py-12 md:px-edge-margin-desktop">
        <div className="font-label-caps text-[10px] mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 tracking-widest text-on-surface-variant md:flex-row">
          <p>© 2026 GLOBAL ONE REALTY &amp; PROPERTY MANAGEMENT CORPORATION.</p>
          <Link href="/" className="transition-colors hover:text-on-surface">
            BACK TO HOME
          </Link>
        </div>
      </footer>
    </>
  );
}
