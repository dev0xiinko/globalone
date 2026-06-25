import Panel from "@/components/anim/Panel";
import SplitReveal from "@/components/anim/SplitReveal";
import { CATEGORIES } from "@/data/site";

export default function Categories() {
  return (
    <Panel
      id="categories"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop"
    >
      <div className="mx-auto w-full max-w-container-max">
        <div className="mb-16 text-center">
          <span
            data-panel-item
            className="font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary"
          >
            BROWSE BY TYPE
          </span>
          <SplitReveal
            as="h2"
            className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg"
          >
            Explore Categories
          </SplitReveal>
        </div>

        <div className="grid grid-cols-2 gap-gutter md:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((category) => (
            <a
              key={category.title}
              data-panel-item
              href="#featured"
              className="group flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-premium"
            >
              <span className="material-symbols-outlined text-5xl text-primary transition-colors group-hover:text-secondary">
                {category.icon}
              </span>
              <div>
                <h3 className="font-headline-md text-lg text-on-surface">
                  {category.title}
                </h3>
                <p className="font-label-caps text-[11px] mt-1 tracking-widest text-on-surface-variant">
                  {category.count} LISTINGS
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Panel>
  );
}
