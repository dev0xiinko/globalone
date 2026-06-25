import Image from "next/image";
import Panel from "@/components/anim/Panel";
import SocialIcon from "@/components/ui/SocialIcon";
import { CONTACT_INFO, FOOTER_LINKS, SOCIAL_LINKS } from "@/data/site";

export default function Footer() {
  return (
    <Panel
      as="footer"
      id="contact"
      pin={false}
      className="flex min-h-screen scroll-mt-24 flex-col justify-center px-edge-margin-mobile py-32 md:px-edge-margin-desktop"
    >
      <div className="mx-auto w-full max-w-container-max">
        <div className="mb-20 grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-12">
          {/* Brand + social */}
          <div data-panel-item className="md:col-span-4">
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
              Global One Realty &amp; Property Management Corporation — premium
              real estate for the discerning Filipino market.
            </p>

            <h4 className="font-label-caps text-xs mt-10 mb-5 tracking-widest text-secondary">
              GET CONNECTED
            </h4>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-on-surface-variant transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  <SocialIcon icon={s.icon} className="h-4.5 w-4.5" />
                </a>
              ))}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                aria-label="Email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-on-surface-variant transition-colors hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div data-panel-item className="md:col-span-3">
            <h4 className="font-label-caps text-xs mb-6 tracking-widest text-secondary">
              QUICK LINKS
            </h4>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-1">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body-md text-on-surface-variant transition-colors hover:text-on-surface"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact details */}
          <div data-panel-item className="md:col-span-5">
            <h4 className="font-label-caps text-xs mb-6 tracking-widest text-secondary">
              VISIT US
            </h4>

            <ul className="flex flex-col gap-5">
              <li className="font-body-md flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">
                  schedule
                </span>
                <span>{CONTACT_INFO.hours}</span>
              </li>
              <li className="font-body-md flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">
                  location_on
                </span>
                <span>
                  {CONTACT_INFO.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              <li className="font-body-md flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">
                  call
                </span>
                <span className="flex flex-col">
                  {CONTACT_INFO.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-on-surface"
                    >
                      {phone}
                    </a>
                  ))}
                  <a
                    href={`tel:${CONTACT_INFO.mobile.replace(/\s/g, "")}`}
                    className="transition-colors hover:text-on-surface"
                  >
                    {CONTACT_INFO.mobile}{" "}
                    <span className="text-on-surface-variant/70">(Smart)</span>
                  </a>
                </span>
              </li>
              <li className="font-body-md flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary">
                  mail
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="transition-colors hover:text-on-surface"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          data-panel-item
          className="font-label-caps flex flex-col items-center justify-between gap-6 border-t border-border pt-10 text-[10px] tracking-widest text-on-surface-variant md:flex-row"
        >
          <p>© 2026 GLOBAL ONE REALTY &amp; PROPERTY MANAGEMENT CORPORATION.</p>
          <div className="flex gap-10">
            <a href="#" className="transition-colors hover:text-on-surface">
              TERMS
            </a>
            <a href="#" className="transition-colors hover:text-on-surface">
              PRIVACY
            </a>
          </div>
        </div>
      </div>
    </Panel>
  );
}
