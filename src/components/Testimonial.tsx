import Panel from "@/components/anim/Panel";
import SplitReveal from "@/components/anim/SplitReveal";
import { TESTIMONIALS } from "@/data/site";

export default function Testimonial() {
  return (
    <Panel
      id="testimonials"
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop"
    >
      <div className="mx-auto w-full max-w-container-max">
        <div className="mb-16 text-center">
          <span
            data-panel-item
            className="font-label-caps text-label-caps mb-4 block tracking-[0.3em] text-secondary"
          >
            CLIENT STORIES
          </span>
          <SplitReveal
            as="h2"
            className="font-headline-lg text-headline-lg-mobile text-on-surface md:text-headline-lg"
          >
            Trusted by Owners &amp; Investors
          </SplitReveal>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              data-panel-item
              className="flex flex-col rounded-lg border border-border bg-card p-8 shadow-sm"
            >
              <span className="material-symbols-outlined text-5xl text-secondary/30">
                format_quote
              </span>
              <blockquote className="font-body-lg mt-4 flex-1 italic leading-relaxed text-on-surface">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-6">
                <p className="font-label-caps tracking-widest text-on-surface">
                  {t.name}
                </p>
                <p className="font-body-md mt-1 text-on-surface-variant">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Panel>
  );
}
