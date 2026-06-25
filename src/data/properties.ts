// HD hero backdrops — mock luxury-property photos for presentation only.
const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`;

export const IMG_HERO_GRAND = UNSPLASH("1613490493576-7fde63acd811");
export const IMG_HERO_AZURE = UNSPLASH("1580587771525-78b9dba3b914");
export const IMG_HERO_VILLA = UNSPLASH("1613977257363-707ba9348227");

// Shared image assets (reused across sections)
export const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC8FkeKycn972QJDbV1-U3P1UpXAwWeUW64Okd_HutFp0mB9hJs2jdfSAFtqBjbEkzakA5jtZPjayYa_xSERq7ZPfBa-OA7Aa_uV1tRZQErBWKOTLUrn4eMcLl4lX6sfBQP8v_rLEuCcAPOjb_GcrnXgBRa00aDQfbxlEQcCwPUF0qyJKh3oC3ZHPVyVHIXSa743ppMHeC50kbrv-pgc4WSTHx5a9A6d9jDoP5Ee9u0lDIpX-XyDdfk0Gfb3Oc61kOcmfO-00WgxOk";

export const IMG_MALIBU =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBNVIjvYRdS7kbFm6nE3O0HumC6dMewrLFg4JORuQMP53MDimjdNRuQHrRqE_Z409vykXEyLFFawQz_YJktVn1iobqC3mWdiTBT-riFuT4LNlwZTBcf9nOavWAJA3XTly2KVpGV3ySUiSUlvwQkeJgd6aaGYyav0o2EXm-TPyWPIWPHfTW6qR98Wepd26V7OHOe2ao76fYnfhk6lVTplj_H7jRG1Pm0LUWI63V4eyrPf4YmoyMp3CAFmnymWi0x0O4AZmyhihfnOKE";

export const IMG_MANHATTAN =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB1KL0Y8fu40j481qWQfgTZtvQ-wZzfFJ9Wmoh5bQSWsUI3HTAQr58DBhZ_ugwYuqd8Rfsr3lHM-Rq34RKshoxKWhg8loHzTeBRoJM6F9LzwxQvR1x-CPaphNu6RuLzQzwNRveRp1BYPivq86ZJtBzutlKYrrBaEM40ARPA41Ojsp4DLlaWEFDlKwSGx0Hkg8yUsZoHW6coV5Brhymrs-HFnrjl0el97rDmsTNSo1OdLkiPeWDsaAm_yoCflwQowDEKFrT7BHz3NNY";

export const IMG_PROVENCE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA0MH6xW7SZWhOcjw7DYughBoe2O0-oZwo8Lg60HZ7ZZz-hUuAjlwQXvRf3RAw8croMkvPrZnsPFNFBoFtMTGBTXPsq6ZaTH7VPhb8i3jBmp-uLnYw3zsb6ufk2_FP2b3380KMGwfsbuuAUi4lV5JrvJD0yHCLuLZ5HMroFUBM6Qy5ijhE-ff8dvVDPlgXIv_gkVO532frrHcFtMs3Bt7K7CyQnGw3rPIK5FPa0qVvfbfo631Yv2CjetadWCYxIvx3g4HTZs2SFccI";

export const IMG_ADVISOR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA2mJv605A-C7WrTp324u1esW8zNRDBuYQtOPUFdYmnyNt781mJ2dKbQl2msnsnobdh4KnfdPiFgvVXDvBs_BySvwFmzpvqeOhnGIKpRPlcMR0FnTtNvUKc0OGyeQufMNrsLHTYbYCg80_3yTNCiOwfnVncKN_PyfRY8Qj7Uj8LIJdjn-G5TpQEarkzMMF4clLC_T0cIgb0V6NEY8oiGKD4CED3AEkTGbWhfZG1_0pXZiIVFOKW3LgfbZ6I2WkDG17s6-cTOFeB5P8";

export type Listing = {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  tag: "FOR SALE" | "FOR RENT" | "NEW";
  category: string;
};

export const FEATURED_PROPERTIES: Listing[] = [
  {
    id: "azure-pavilion",
    image: IMG_MALIBU,
    title: "The Azure Pavilion",
    location: "Forbes Park, Makati City",
    price: "₱245,000,000",
    beds: 6,
    baths: 8,
    area: "1,150 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
  {
    id: "skyline-sanctuary",
    image: IMG_MANHATTAN,
    title: "Skyline Sanctuary",
    location: "BGC, Taguig City",
    price: "₱182,000,000",
    beds: 4,
    baths: 5,
    area: "420 sqm",
    tag: "FOR SALE",
    category: "Condominium",
  },
  {
    id: "villa-lumiere",
    image: IMG_PROVENCE,
    title: "Villa de Lumière",
    location: "Tagaytay Highlands, Cavite",
    price: "₱96,500,000",
    beds: 5,
    baths: 6,
    area: "880 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
  {
    id: "the-grand-reserve",
    image: IMG_HERO,
    title: "The Grand Reserve",
    location: "Nuvali, Santa Rosa, Laguna",
    price: "₱128,000,000",
    beds: 5,
    baths: 6,
    area: "960 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
  {
    id: "the-monarch-residences",
    image: IMG_MANHATTAN,
    title: "The Monarch Residences",
    location: "Rockwell Center, Makati City",
    price: "₱165,000,000",
    beds: 3,
    baths: 4,
    area: "360 sqm",
    tag: "NEW",
    category: "Condominium",
  },
  {
    id: "emerald-bay-estate",
    image: IMG_PROVENCE,
    title: "Emerald Bay Estate",
    location: "Punta Fuego, Nasugbu, Batangas",
    price: "₱210,000,000",
    beds: 5,
    baths: 6,
    area: "1,020 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
  {
    id: "the-cresta-penthouse",
    image: IMG_MALIBU,
    title: "The Cresta Penthouse",
    location: "Cebu Business Park, Cebu City",
    price: "₱138,000,000",
    beds: 4,
    baths: 5,
    area: "540 sqm",
    tag: "NEW",
    category: "Condominium",
  },
  {
    id: "highland-manor",
    image: IMG_HERO,
    title: "Highland Manor",
    location: "Ayala Westgrove, Silang, Cavite",
    price: "₱112,000,000",
    beds: 5,
    baths: 5,
    area: "780 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
  {
    id: "the-portico-residences",
    image: IMG_MANHATTAN,
    title: "The Portico Residences",
    location: "McKinley Hill, Taguig City",
    price: "₱94,000,000",
    beds: 3,
    baths: 3,
    area: "285 sqm",
    tag: "FOR SALE",
    category: "Condominium",
  },
];

export const RECENT_PROPERTIES: Listing[] = [
  {
    id: "harbor-loft",
    image: IMG_MANHATTAN,
    title: "Harbor Point Loft",
    location: "Rockwell Center, Makati",
    price: "₱72,000,000",
    beds: 3,
    baths: 3,
    area: "210 sqm",
    tag: "NEW",
    category: "Condominium",
  },
  {
    id: "coastal-retreat",
    image: IMG_PROVENCE,
    title: "Coastal Retreat",
    location: "Punta Fuego, Batangas",
    price: "₱58,500,000",
    beds: 4,
    baths: 4,
    area: "540 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
  {
    id: "metropolitan-suite",
    image: IMG_MALIBU,
    title: "Metropolitan Suite",
    location: "Ortigas Center, Pasig",
    price: "₱120,000 / mo",
    beds: 2,
    baths: 2,
    area: "135 sqm",
    tag: "FOR RENT",
    category: "Condominium",
  },
  {
    id: "garden-residence",
    image: IMG_HERO,
    title: "Garden Residence",
    location: "Alabang, Muntinlupa",
    price: "₱64,000,000",
    beds: 4,
    baths: 5,
    area: "480 sqm",
    tag: "NEW",
    category: "House & Lot",
  },
  {
    id: "uptown-flat",
    image: IMG_MANHATTAN,
    title: "Uptown Parkway Flat",
    location: "Uptown BGC, Taguig",
    price: "₱150,000 / mo",
    beds: 1,
    baths: 1,
    area: "78 sqm",
    tag: "FOR RENT",
    category: "Condominium",
  },
  {
    id: "heritage-manor",
    image: IMG_HERO_VILLA,
    title: "Heritage Manor",
    location: "New Manila, Quezon City",
    price: "₱89,000,000",
    beds: 6,
    baths: 6,
    area: "720 sqm",
    tag: "FOR SALE",
    category: "House & Lot",
  },
];

// ── Lookups ────────────────────────────────────────────────────────────────
// Every listing across the site, de-duplicated by id (a few appear in more
// than one rail). Used to resolve a property page from its [id] segment.
export const ALL_PROPERTIES: Listing[] = [
  ...FEATURED_PROPERTIES,
  ...RECENT_PROPERTIES.filter(
    (r) => !FEATURED_PROPERTIES.some((f) => f.id === r.id)
  ),
];

export function getPropertyById(id: string): Listing | undefined {
  return ALL_PROPERTIES.find((p) => p.id === id);
}

/** Suggestions for "Properties you might like" — same category first. */
export function getRelatedProperties(id: string, count = 3): Listing[] {
  const current = getPropertyById(id);
  const pool = ALL_PROPERTIES.filter((p) => p.id !== id);
  if (!current) return pool.slice(0, count);
  const ranked = [...pool].sort((a, b) => {
    const score = (p: Listing) =>
      (p.category === current.category ? 0 : 2) +
      (p.tag === current.tag ? 0 : 1);
    return score(a) - score(b);
  });
  return ranked.slice(0, count);
}

// ── Detail-page content (synthesised mock data for presentation) ─────────────
const GALLERY_POOL = [
  IMG_HERO_GRAND,
  IMG_HERO_AZURE,
  IMG_HERO_VILLA,
  IMG_MALIBU,
  IMG_MANHATTAN,
  IMG_PROVENCE,
  IMG_HERO,
];

/** The hero image plus four supporting shots, rotated per-property. */
export function getGallery(p: Listing): string[] {
  const extras = GALLERY_POOL.filter((img) => img !== p.image);
  const start = p.id.length % extras.length;
  const rotated = [...extras.slice(start), ...extras.slice(0, start)];
  return [p.image, ...rotated.slice(0, 4)];
}

const FEATURES_BY_CATEGORY: Record<string, string[]> = {
  Condominium: [
    "Floor-to-ceiling windows",
    "24/7 concierge & security",
    "Infinity-edge amenity pool",
    "Private high-speed elevator",
    "Fitness & wellness centre",
    "Two dedicated parking slots",
  ],
  "House & Lot": [
    "Landscaped private garden",
    "Resort-style swimming pool",
    "Double-height living pavilion",
    "Smart-home automation",
    "Staff quarters & service kitchen",
    "Four-car covered garage",
  ],
};

const GENERIC_FEATURES = [
  "Premium imported finishes",
  "Backup power & water systems",
  "Fibre-ready connectivity",
  "Gated, master-planned community",
];

export function getFeatures(p: Listing): string[] {
  return FEATURES_BY_CATEGORY[p.category] ?? GENERIC_FEATURES;
}

export function getDescription(p: Listing): string {
  const home =
    p.category === "Condominium" ? "residence" : "home";
  return (
    `Set within ${p.location}, this ${p.area} ${p.category.toLowerCase()} is an ` +
    `exceptional ${home} designed for those who expect more. ${p.beds} generous ` +
    `bedrooms and ${p.baths} designer bathrooms are arranged around light-filled ` +
    `living spaces that open seamlessly to the outdoors. Every surface has been ` +
    `specified to an uncompromising standard, delivering a turnkey sanctuary in ` +
    `one of the country's most sought-after addresses.`
  );
}

export type PropertyHighlight = { label: string; value: string };

export function getHighlights(p: Listing): PropertyHighlight[] {
  return [
    { label: "Property Type", value: p.category },
    { label: "Bedrooms", value: String(p.beds) },
    { label: "Bathrooms", value: String(p.baths) },
    { label: "Floor Area", value: p.area },
    { label: "Status", value: p.tag },
    { label: "Reference", value: `GO-${p.id.slice(0, 6).toUpperCase()}` },
  ];
}
