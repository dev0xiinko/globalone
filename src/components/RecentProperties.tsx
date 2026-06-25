import Panel from "@/components/anim/Panel";
import SplitReveal from "@/components/anim/SplitReveal";
import ResultCarousel from "@/components/ui/ResultCarousel";
import { RECENT_PROPERTIES } from "@/data/properties";

export default function RecentProperties() {
  return (
    <Panel
      id="recent"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center gap-8 pb-16 pt-28"
    >
      <div className="mx-auto w-full max-w-container-max px-edge-margin-mobile md:px-edge-margin-desktop">
        <span
          data-panel-item
          className="font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary"
        >
          JUST LISTED
        </span>
        <SplitReveal
          as="h2"
          className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg"
        >
          Recent Properties
        </SplitReveal>
      </div>

      <div data-panel-item>
        <ResultCarousel
          listings={RECENT_PROPERTIES}
          rounded
          label={`${RECENT_PROPERTIES.length} NEW LISTINGS`}
        />
      </div>
    </Panel>
  );
}
