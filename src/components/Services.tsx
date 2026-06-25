import Panel from "@/components/anim/Panel";
import SplitReveal from "@/components/anim/SplitReveal";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <Panel
      id="services"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop"
    >
      <div className="mx-auto w-full max-w-container-max">
        <div className="mb-16 max-w-2xl">
          <span
            data-panel-item
            className="font-label-caps text-label-caps mb-6 block tracking-[0.3em] text-secondary"
          >
            WHAT WE DO
          </span>
          <SplitReveal
            as="h2"
            className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg"
          >
            Full-service real estate, end to end
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              data-panel-item
              className="group border border-border bg-card p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-premium"
            >
              <span className="material-symbols-outlined text-5xl text-secondary">
                {service.icon}
              </span>
              <h3 className="font-headline-md mt-6 text-2xl text-on-surface">
                {service.title}
              </h3>
              <p className="font-body-md mt-3 leading-relaxed text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
