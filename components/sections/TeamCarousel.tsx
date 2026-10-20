"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { executives } from "@/lib/team";
import { cn } from "@/lib/utils";

const GAP = 24; // matches gap-6

const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]?.toUpperCase()).join("");

export function TeamCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    const el = track.current;
    if (!el) return;
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollPage = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (el.clientWidth + GAP), behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand text-brand transition-colors hover:bg-brand hover:text-white disabled:pointer-events-none disabled:border-line disabled:text-steel/50";

  return (
    <section aria-label="Our executive team" className="section-y">
      <div className="container-page">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="text-[15px] text-steel">Select a profile to read more.</p>
          <div className="flex gap-3">
            <button type="button" onClick={() => scrollPage(-1)} disabled={!canPrev} aria-label="Previous executives" className={arrow}>
              <ChevronLeft aria-hidden className="h-6 w-6" />
            </button>
            <button type="button" onClick={() => scrollPage(1)} disabled={!canNext} aria-label="Next executives" className={arrow}>
              <ChevronRight aria-hidden className="h-6 w-6" />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-2 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {executives.map((e) => (
            <li
              key={e.slug}
              className="shrink-0 basis-[72%] snap-start sm:basis-[44%] md:basis-[calc((100%-48px)/3)] lg:basis-[calc((100%-96px)/5)]"
            >
              <Link href={`/our-team/${e.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-brand">
                  {e.photo ? (
                    <Image
                      src={e.photo}
                      alt={`${e.name}, ${e.role}`}
                      fill
                      sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 72vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <span aria-hidden className="absolute inset-0 flex items-center justify-center font-display text-6xl font-extrabold text-sage">
                      {initials(e.name)}
                    </span>
                  )}
                  <span aria-hidden className="absolute bottom-0 left-0 h-1 w-0 bg-signal transition-all duration-300 group-hover:w-full" />
                </div>
                <h2 className="mt-4 font-display text-[19px] font-bold group-hover:text-brand">{e.name}</h2>
                <p className="mt-1 text-[15px] text-steel">{e.role}</p>
                <span className={cn("mt-3 inline-flex min-h-[44px] items-center gap-2 font-display text-[14px] font-bold text-brand")}>
                  View profile <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}