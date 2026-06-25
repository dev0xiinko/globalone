import Image from "next/image";
import Panel from "@/components/anim/Panel";
import SplitReveal from "@/components/anim/SplitReveal";

export default function About() {
  return (
    <Panel
      id="about"
      className="flex min-h-screen scroll-mt-24 items-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop"
    >
      <div className="mx-auto w-full max-w-container-max">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div data-panel-item className="relative">
            <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg bg-card shadow-premium-lg">
              <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-secondary/15" />
              <Image
                src="/about.png"
                alt="The founders of Global One Realty & Property Management Corporation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-bottom"
              />
              <span className="font-label-caps text-label-caps absolute bottom-5 left-5 z-10 rounded-full bg-ink/70 px-4 py-2 tracking-widest text-white backdrop-blur-sm">
                OUR FOUNDERS
              </span>
            </div>
            <div className="absolute -bottom-8 -right-8 -z-10 hidden h-48 w-48 rounded-lg bg-secondary/20 lg:block" />
          </div>

          <div>
            <span
              data-panel-item
              className="font-label-caps text-label-caps mb-6 block tracking-[0.3em] text-secondary"
            >
              ABOUT GLOBAL ONE
            </span>
            <SplitReveal
              as="h2"
              className="font-headline-md mt-2 text-on-surface md:text-headline-md"
            >
              A limited corporation domiciled in the City of Cebu.
            </SplitReveal>
            <p
              data-panel-item
              className="font-body-lg mt-8 leading-relaxed text-on-surface-variant"
            >
              Global One Realty &amp; Property Management Corporation provides
              services specifically to the mid to higher income section of,
              initially, Cebu City and its neighboring cities and provinces.
            </p>
            <p
              data-panel-item
              className="font-body-lg mt-5 leading-relaxed text-on-surface-variant"
            >
              With our selected property listings, we cater to the discerning
              market through a network of dynamic, creative and pro-active
              business associates and agent partners.
            </p>

            <a
              data-panel-item
              href="#services"
              className="font-label-caps text-label-caps mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              LEARN MORE
              <span className="material-symbols-outlined text-base">east</span>
            </a>
          </div>
        </div>
      </div>
    </Panel>
  );
}
