import Image from "next/image";
import Panel from "@/components/anim/Panel";

const archives = ["Coastline Estates", "Urban Penthouses", "Historic Manors"];
const advisory = ["The Journal", "Bespoke Service", "Private Access"];
const legal = ["PRIVACY", "TERMS", "COOKIE POLICY"];

export default function Footer() {
  return (
    <Panel
      as="footer"
      id="contact"
      pin={false}
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop"
    >
      <div className="mx-auto w-full max-w-container-max">
        <div className="mb-24 grid grid-cols-1 gap-16 md:grid-cols-4 md:gap-20">
          <div data-panel-item className="col-span-1 md:col-span-1">
            <Image
              src="/globalone-logo.png"
              alt="Global One — Realty & Property Management Corporation"
              width={170}
              height={119}
              className="mb-8 h-20 w-auto dark:hidden"
            />
            <Image
              src="/globalone-logo-white.png"
              alt="Global One — Realty & Property Management Corporation"
              width={170}
              height={119}
              className="mb-8 hidden h-20 w-auto dark:block"
            />
            <p className="font-body-md max-w-xs leading-relaxed text-on-surface-variant">
              Curating architectural masterpieces for the global collector.
            </p>
          </div>

          <div data-panel-item className="space-y-6">
            <h4 className="font-label-caps text-xs tracking-widest text-secondary">
              ARCHIVES
            </h4>
            <nav className="flex flex-col gap-4">
              {archives.map((item) => (
                <a
                  key={item}
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                  href="#featured"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div data-panel-item className="space-y-6">
            <h4 className="font-label-caps text-xs tracking-widest text-secondary">
              ADVISORY
            </h4>
            <nav className="flex flex-col gap-4">
              {advisory.map((item) => (
                <a
                  key={item}
                  className="text-on-surface-variant transition-colors hover:text-on-surface"
                  href="#services"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div data-panel-item className="space-y-8">
            <h4 className="font-label-caps text-xs tracking-widest text-secondary">
              JOURNAL
            </h4>
            <form className="relative">
              <input
                className="font-label-caps w-full rounded-md border border-input bg-card px-4 py-3 text-[11px] tracking-widest text-on-surface outline-none transition-colors focus:border-ring"
                placeholder="YOUR EMAIL ADDRESS"
                type="email"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary"
                aria-label="Subscribe"
              >
                <span className="material-symbols-outlined">east</span>
              </button>
            </form>
          </div>
        </div>

        <div
          data-panel-item
          className="font-label-caps flex flex-col items-center justify-between gap-6 text-[10px] tracking-widest text-on-surface-variant md:flex-row"
        >
          <p>© 2026 GLOBAL ONE REALTY &amp; PROPERTY MANAGEMENT CORPORATION.</p>
          <div className="flex gap-10">
            {legal.map((item) => (
              <a
                key={item}
                className="transition-colors hover:text-on-surface"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Panel>
  );
}
