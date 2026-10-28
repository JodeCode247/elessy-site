"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { executives } from "@/lib/team";

export function TeamCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const element = track.current;
    if (!element) return;

    setCanPrev(element.scrollLeft > 2);
    setCanNext(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 2
    );
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element) return;

    updateControls();

    element.addEventListener("scroll", updateControls, { passive: true });
    window.addEventListener("resize", updateControls);

    return () => {
      element.removeEventListener("scroll", updateControls);
      window.removeEventListener("resize", updateControls);
    };
  }, [updateControls]);

  const scroll = (direction: -1 | 1) => {
    const element = track.current;
    if (!element) return;

    const firstCard = element.querySelector("li");
    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + 24
      : element.clientWidth;

    element.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section
      aria-label="ELESSY executive team"
      className="bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="container-page">
        <div className="mb-8 flex items-center justify-between border-b border-line pb-5 md:mb-10">
          <p className="text-sm text-steel">
            Leadership and management
          </p>

          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Previous executives"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Next executives"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink transition-colors hover:border-brand hover:text-brand disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>

        <ul
          ref={track}
          className="-mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden] md:mx-0 md:gap-7 md:px-0"
        >
          {executives.map((executive) => (
            <li
              key={executive.slug}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-[calc((100%-56px)/3)] lg:w-[calc((100%-84px)/4)]"
            >
              <Link
                href={`/our-team/${executive.slug}`}
                className="group block h-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                  {executive.photo ? (
                    <Image
                      src={executive.photo}
                      alt={`${executive.name}, ${executive.role}`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 46vw, 78vw"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center font-display text-5xl font-bold text-brand">
                      {executive.name
                        .split(" ")
                        .filter(Boolean)
                        .slice(0, 2)
                        .map((part) => part[0]?.toUpperCase())
                        .join("")}
                    </div>
                  )}
                </div>

                <div className="mt-4 border-t-2 border-transparent pt-3 transition-colors group-hover:border-brand">
                  <h3 className="font-display text-lg font-bold leading-snug text-ink group-hover:text-brand">
                    {executive.name}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-steel">
                    {executive.role}
                  </p>

                  <span className="mt-3 inline-block text-sm font-semibold text-brand">
                    View profile <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between sm:hidden">
          <span className="text-xs text-steel">
            Swipe to meet the team
          </span>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Previous executives"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink disabled:opacity-30"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Next executives"
              className="flex h-10 w-10 items-center justify-center border border-line text-ink disabled:opacity-30"
            >
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}