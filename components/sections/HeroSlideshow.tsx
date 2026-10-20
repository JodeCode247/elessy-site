"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type TouchEvent } from "react";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/lib/hero-slides";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 5000; // 5s per image
const SWIPE_PX = 48;

export function HeroSlideshow() {
  const count = heroSlides.length;
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = (next: number) => {
    setIndex((cur) => {
      const n = (next + count) % count;
      if (n !== cur) setPrev(cur);
      return n;
    });
  };

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    const onVis = () => setTabHidden(document.hidden);
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => { mq.removeEventListener("change", sync); document.removeEventListener("visibilitychange", onVis); };
  }, []);

  const playing = !reduced && !hovered && !tabHidden;
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => go(index + 1), INTERVAL_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, playing]);

  const onTouchStart = (e: TouchEvent) => { touchX.current = e.touches[0]?.clientX ?? null; };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > SWIPE_PX) go(index + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured work"
      className="relative isolate flex min-h-[100svh] touch-pan-y flex-col overflow-hidden bg-brand-deep text-white"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div aria-live={playing ? "off" : "polite"} className="absolute inset-0 -z-10">
        {heroSlides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${s.label}`}
              aria-hidden={!active}
              className={cn("absolute inset-0 transition-opacity duration-[1000ms] ease-in-out", active ? "opacity-100" : "opacity-0")}
            >
              <Image
                src={s.src}
                alt={active ? s.alt : ""}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                sizes="100vw"
                quality={80}
                style={{ "--op-m": s.position.mobile, "--op-d": s.position.desktop } as CSSProperties}
                className={cn(
                  "object-cover [object-position:var(--op-m)] md:[object-position:var(--op-d)]",
                  (active || i === prev) && "animate-kenburns motion-reduce:animate-none"
                )}
              />
            </div>
          );
        })}
        {/* One consistent overlay keeps text readable on every image */}
        <div className="absolute inset-0 bg-[rgb(4_20_14/0.56)]" />
      </div>

      <div className="container-page flex flex-1 flex-col justify-end pb-28 pt-[120px] md:pb-32 lg:pt-[140px]">
        <p className="font-display text-[12px] font-bold uppercase tracking-[0.24em] text-signal md:text-[13px]">Engineering &middot; Construction &middot; Installation</p>
        <h1 className="mt-5 max-w-[15ch] font-display text-display font-extrabold text-white md:max-w-[17ch]">{site.tagline}</h1>
        <p className="mt-6 max-w-xl text-lead text-white/85">
        Architecture, construction, electrical, solar, borehole, and telecom services, all delivered by one accountable team from design to handover. One point of contact, a transparent budget, and no subcontractor juggling.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" className="min-h-[54px] sm:px-8">Make an enquiry</Button>
          <Button href="/services" variant="ghost" className="min-h-[54px] sm:px-8">View our services</Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[72px] z-10 lg:bottom-0">
        <div className="container-page flex items-center justify-between pb-3 lg:pb-8">
          <p className="hidden text-[13px] text-white/75 sm:block" aria-hidden>{heroSlides[index]?.label}</p>
          <div className="flex items-center sm:gap-4">
            <div role="group" aria-label="Choose slide" className="flex">
              {heroSlides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Show slide ${i + 1}: ${s.label}`}
                  aria-current={i === index}
                  className="group flex h-11 w-9 items-center justify-center"
                >
                  <span className={cn("block h-1.5 rounded-full transition-all duration-300", i === index ? "w-7 bg-signal" : "w-1.5 bg-white/55 group-hover:bg-white")} />
                </button>
              ))}
            </div>
            <span className="hidden text-[13px] tabular-nums text-white/75 sm:block" aria-hidden>
              {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
