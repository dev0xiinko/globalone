import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

/**
 * Slim, always-solid header for interior pages (e.g. a property page) that
 * don't sit over the full-screen hero. Links jump back to the home sections.
 */
export default function SiteHeader() {
  return (
    <header className="glass shadow-premium-lg sticky top-0 z-50 w-full">
      <nav className="mx-auto flex h-20 max-w-container-max items-center justify-between px-edge-margin-mobile md:px-edge-margin-desktop">
        <Link href="/" className="block" aria-label="Global One — home">
          <Image
            src="/globalone-logo.png"
            alt="Global One — Realty & Property Management Corporation"
            width={170}
            height={119}
            priority
            className="h-10 w-auto dark:hidden md:h-11"
          />
          <Image
            src="/globalone-logo-white.png"
            alt="Global One — Realty & Property Management Corporation"
            width={170}
            height={119}
            priority
            className="hidden h-10 w-auto dark:block md:h-11"
          />
        </Link>

        <div className="flex items-center gap-6 text-on-surface md:gap-10">
          <Link
            href="/#featured"
            className="font-label-caps text-label-caps hidden transition-opacity hover:opacity-60 sm:block"
          >
            Properties
          </Link>
          <Link
            href="/#about"
            className="font-label-caps text-label-caps hidden transition-opacity hover:opacity-60 sm:block"
          >
            About
          </Link>
          <ThemeToggle />
          <Link
            href="/#contact"
            className="font-label-caps text-label-caps rounded-full bg-primary px-6 py-3 text-primary-foreground transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
          >
            Inquire
          </Link>
        </div>
      </nav>
    </header>
  );
}
