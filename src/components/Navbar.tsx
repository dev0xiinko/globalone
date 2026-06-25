"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { NAV_LINKS } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const barRef = useRef<HTMLDivElement>(null);

  // Keep the nav in sync with the active theme so it can pick the right
  // logo / text colours once it leaves the (always-dark) hero.
  useEffect(() => {
    const read = () =>
      setTheme(
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light"
      );
    read();
    const observer = new MutationObserver(read);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // Scroll-progress bar along the bottom of the nav + transparent→solid
  // state. Driven by ScrollTrigger so it reads true page progress through
  // ScrollSmoother (the window itself doesn't scroll) and auto-refreshes
  // when the document height changes after images/fonts load.
  useGSAP(() => {
    const bar = barRef.current;
    if (!bar) return;

    const setScaleX = gsap.quickTo(bar, "scaleX", {
      duration: 0.15,
      ease: "none",
    });

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        setScaleX(self.progress);
        // Solidify the nav once we scroll off the full-height hero.
        setScrolled(self.scroll() > window.innerHeight * 0.85);
      },
    });

    return () => st.kill();
  });

  // Over the hero the nav is transparent on a dark photo → white content.
  // Once scrolled, it becomes a theme-coloured glass bar → themed content.
  const onHero = !scrolled;
  const logoSrc =
    onHero || theme === "dark"
      ? "/globalone-logo-white.png"
      : "/globalone-logo.png";
  const contentColor = onHero ? "text-white" : "text-on-surface";

  return (
    <header
      id="main-nav"
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "glass shadow-premium-lg" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-24 max-w-container-max items-center justify-between px-edge-margin-mobile md:px-edge-margin-desktop">
        <a href="#top" className="block" aria-label="Global One — home">
          <Image
            src={logoSrc}
            alt="Global One — Realty & Property Management Corporation"
            width={170}
            height={119}
            priority
            className="h-12 w-auto md:h-14"
          />
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          <div className={`flex items-center gap-10 ${contentColor}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-label-caps text-label-caps transition-opacity hover:opacity-60"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
          </div>
          <a
            href="#contact"
            className="font-label-caps text-label-caps rounded-full bg-primary px-7 py-3 text-primary-foreground transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
          >
            Inquire
          </a>
        </div>

        <div className={`flex items-center gap-2 lg:hidden ${contentColor}`}>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="material-symbols-outlined text-3xl">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Scroll progress (acts as the nav's bottom border) */}
      <div
        ref={barRef}
        className="h-0.5 w-full origin-left scale-x-0 bg-linear-to-r from-secondary to-primary"
      />

      <div
        className={`glass overflow-hidden transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-edge-margin-mobile py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-label-caps text-label-caps py-3 text-on-surface"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-label-caps text-label-caps mt-3 rounded-full bg-primary px-8 py-4 text-center text-primary-foreground"
          >
            Inquire
          </a>
        </div>
      </div>
    </header>
  );
}
