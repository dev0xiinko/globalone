import Panel from "@/components/anim/Panel";
import SplitReveal from "@/components/anim/SplitReveal";
import ResultCarousel from "@/components/ui/ResultCarousel";
import { FEATURED_PROPERTIES, RECENT_PROPERTIES } from "@/data/properties";

const types = ["Any Type", "House & Lot", "Condominium", "Commercial", "Land"];
const prices = [
  "Any Price",
  "Under ₱10M",
  "₱10M – ₱30M",
  "₱30M – ₱80M",
  "₱80M+",
];

const results = [...FEATURED_PROPERTIES, ...RECENT_PROPERTIES];

export default function PropertySearch() {
  return (
    <Panel
      id="search"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center gap-8 pb-16 pt-28"
    >
      {/* Upper: heading + search */}
      <div className="mx-auto w-full max-w-container-max px-edge-margin-mobile md:px-edge-margin-desktop">
        <div className="mb-8 max-w-2xl">
          <span
            data-panel-item
            className="font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary"
          >
            START YOUR SEARCH
          </span>
          <SplitReveal
            as="h2"
            className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg"
          >
            Find your next address
          </SplitReveal>
        </div>

        <div
          data-panel-item
          className="rounded-lg border border-border bg-card p-6 shadow-premium md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-end">
            <label className="flex flex-col gap-2 md:col-span-4">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                LOCATION
              </span>
              <input
                type="text"
                placeholder="City, area or development"
                className="font-body-md rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring"
              />
            </label>

            <label className="flex flex-col gap-2 md:col-span-3">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                PROPERTY TYPE
              </span>
              <select className="font-body-md rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring">
                {types.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 md:col-span-3">
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                PRICE RANGE
              </span>
              <select className="font-body-md rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring">
                {prices.map((p) => (
                  <option key={p}>{p}</option>
                ))}
              </select>
            </label>

            <button className="font-label-caps text-label-caps flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 text-primary-foreground transition-colors hover:bg-(--primary-hover) md:col-span-2">
              <span className="material-symbols-outlined text-lg">search</span>
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Lower: swipeable, borderless result carousel */}
      <div data-panel-item>
        <ResultCarousel
          listings={results}
          size="compact"
          rounded
          label={`${results.length} PROPERTIES FOUND`}
        />
      </div>
    </Panel>
  );
}
