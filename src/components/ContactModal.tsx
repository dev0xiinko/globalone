"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { gsap, ScrollSmoother, useGSAP } from "@/lib/gsap";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactModal({ open, onClose }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [sent, setSent] = useState(false);

  // Build the open/close timeline once.
  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      gsap.set(rootRef.current, { autoAlpha: 0 });

      const t = gsap.timeline({ paused: true });

      if (reduce) {
        t.to(rootRef.current, { autoAlpha: 1, duration: 0.2 });
      } else {
        t.set(rootRef.current, { autoAlpha: 1 })
          .fromTo(
            backdropRef.current,
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.45, ease: "power2.out" },
            0
          )
          .fromTo(
            glowRef.current,
            { scale: 0.4, autoAlpha: 0 },
            { scale: 1, autoAlpha: 1, duration: 0.9, ease: "premium" },
            0.05
          )
          .fromTo(
            panelRef.current,
            { y: 48, scale: 0.92, autoAlpha: 0 },
            {
              y: 0,
              scale: 1,
              autoAlpha: 1,
              duration: 0.7,
              ease: "back.out(1.4)",
            },
            0.05
          )
          .from(
            ".cm-stagger",
            {
              y: 20,
              autoAlpha: 0,
              duration: 0.55,
              ease: "premium",
              stagger: 0.07,
            },
            0.22
          );
      }

      tl.current = t;
    },
    { scope: rootRef }
  );

  // Play / reverse on open change.
  useEffect(() => {
    const t = tl.current;
    if (!t) return;
    if (open) t.play();
    else t.reverse();
  }, [open]);

  // Scroll lock (+ pause ScrollSmoother), Escape to close, focus first field.
  useEffect(() => {
    if (!open) return;
    const smoother = ScrollSmoother.get();
    smoother?.paused(true);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const raf = requestAnimationFrame(() => firstFieldRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      smoother?.paused(false);
      document.body.style.overflow = prevOverflow;
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  // Reset to the form a moment after the modal has closed.
  useEffect(() => {
    if (open || !sent) return;
    const id = setTimeout(() => setSent(false), 400);
    return () => clearTimeout(id);
  }, [open, sent]);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-100 flex items-center justify-center p-4 opacity-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-premium-lg"
      >
        {/* Brand accent bar */}
        <div className="h-1.5 w-full bg-linear-to-r from-secondary via-primary to-secondary" />

        {/* Branded glow behind the logo */}
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-radial from-primary/25 via-secondary/10 to-transparent blur-2xl"
        />

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close contact form"
          className="absolute right-4 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition-colors hover:bg-muted hover:text-on-surface"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="relative px-8 py-10 sm:px-10">
          {!sent ? (
            <>
              <div className="cm-stagger mb-8 flex flex-col items-center text-center">
                <Image
                  src="/globalone-logo.png"
                  alt="Global One"
                  width={170}
                  height={119}
                  className="mb-5 h-14 w-auto dark:hidden"
                />
                <Image
                  src="/globalone-logo-white.png"
                  alt="Global One"
                  width={170}
                  height={119}
                  className="mb-5 hidden h-14 w-auto dark:block"
                />
                <span className="font-label-caps text-label-caps mb-3 block tracking-[0.3em] text-secondary">
                  GET IN TOUCH
                </span>
                <h2
                  id="contact-modal-title"
                  className="font-headline-md text-2xl text-on-surface"
                >
                  Let&rsquo;s find your next address
                </h2>
                <p className="font-body-md mt-2 max-w-sm text-on-surface-variant">
                  Share a few details and one of our licensed brokers will be in
                  touch within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="cm-stagger flex flex-col gap-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    FULL NAME
                  </span>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    required
                    placeholder="Juan dela Cruz"
                    className="font-body-md rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring"
                  />
                </label>

                <div className="cm-stagger grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      EMAIL
                    </span>
                    <input
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="font-body-md rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="font-label-caps text-label-caps text-on-surface-variant">
                      PHONE
                    </span>
                    <input
                      type="tel"
                      placeholder="+63 900 000 0000"
                      className="font-body-md rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring"
                    />
                  </label>
                </div>

                <label className="cm-stagger flex flex-col gap-2">
                  <span className="font-label-caps text-label-caps text-on-surface-variant">
                    MESSAGE
                  </span>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for…"
                    className="font-body-md resize-none rounded-md border border-input bg-background px-4 py-3 text-on-surface outline-none transition-colors focus:border-ring"
                  />
                </label>

                <button
                  type="submit"
                  className="cm-stagger font-label-caps text-label-caps mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-secondary hover:text-secondary-foreground"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                  SEND MESSAGE
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center py-6 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <span className="material-symbols-outlined text-3xl">
                  check
                </span>
              </span>
              <h2 className="font-headline-md mt-6 text-2xl text-on-surface">
                Message sent
              </h2>
              <p className="font-body-md mt-2 max-w-sm text-on-surface-variant">
                Thank you for reaching out to Global One. A member of our team
                will contact you shortly.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="font-label-caps text-label-caps mt-8 rounded-full border border-border px-8 py-3.5 text-on-surface transition-colors hover:border-secondary hover:text-secondary"
              >
                CLOSE
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
