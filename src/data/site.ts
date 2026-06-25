import {
  IMG_HERO_AZURE,
  IMG_HERO_GRAND,
  IMG_HERO_VILLA,
} from "@/data/properties";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Properties", href: "#featured" },
  { label: "Categories", href: "#categories" },
  { label: "Contact", href: "#contact" },
];

export type HeroSlide = {
  image: string;
  name: string;
  address: string;
  price: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    image: IMG_HERO_GRAND,
    name: "The Grand Reserve",
    address: "Nuvali, Santa Rosa, Laguna",
    price: "₱128,000,000",
  },
  {
    image: IMG_HERO_AZURE,
    name: "The Azure Pavilion",
    address: "Forbes Park, Makati City",
    price: "₱245,000,000",
  },
  {
    image: IMG_HERO_VILLA,
    name: "Villa de Lumière",
    address: "Tagaytay Highlands, Cavite",
    price: "₱96,500,000",
  },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: "real_estate_agent",
    title: "Property Sales",
    description:
      "Buy and sell residential and commercial properties with end-to-end guidance from our licensed brokers.",
  },
  {
    icon: "apartment",
    title: "Property Management",
    description:
      "Comprehensive management for owners — tenant sourcing, maintenance, and rental collection handled for you.",
  },
  {
    icon: "key",
    title: "Leasing & Rentals",
    description:
      "Curated rental listings and seamless leasing support for both landlords and discerning tenants.",
  },
  {
    icon: "trending_up",
    title: "Investment Advisory",
    description:
      "Data-driven advice on high-yield acquisitions, market timing, and long-term portfolio strategy.",
  },
  {
    icon: "price_check",
    title: "Appraisal & Valuation",
    description:
      "Accurate, accredited property appraisals to price with confidence whether you buy, sell, or refinance.",
  },
  {
    icon: "gavel",
    title: "Documentation & Legal",
    description:
      "Title transfers, due diligence, and contract preparation managed by our in-house specialists.",
  },
];

export type Category = {
  icon: string;
  title: string;
  count: number;
};

export const CATEGORIES: Category[] = [
  { icon: "house", title: "Residential", count: 482 },
  { icon: "business", title: "Commercial", count: 217 },
  { icon: "apartment", title: "Condominium", count: 356 },
  { icon: "cottage", title: "House & Lot", count: 298 },
  { icon: "landscape", title: "Land & Lots", count: 164 },
  { icon: "holiday_village", title: "Townhouse", count: 131 },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 350, suffix: "+", label: "Agent Brokers" },
  { value: 925, suffix: "+", label: "Sold Properties" },
  { value: 163, suffix: "", label: "Developers Accredited" },
  { value: 13, suffix: "", label: "Years in Service" },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Global One redefined my expectations of real estate. Their ability to source off-market gems was unparalleled, and the entire purchase was effortless.",
    name: "Julian Vane",
    role: "Investor, Bonifacio Global City",
  },
  {
    quote:
      "Their property management team treats my condo units like their own. Occupancy is up, headaches are gone, and the reporting is crystal clear.",
    name: "Maria Santos",
    role: "Property Owner, Makati",
  },
  {
    quote:
      "From appraisal to title transfer, every step was handled with precision. A truly professional corporation that delivers on its promises.",
    name: "David Reyes",
    role: "Developer Partner, Quezon City",
  },
];
